/**
 * Swizzled from @docusaurus/theme-classic NavbarItem/LocaleDropdownNavbarItem.
 *
 * 修一个 Docusaurus 的边界 bug：当 locale 根路径不带尾斜杠时，
 * useAlternatePageUtils().createUrl() 会算错。
 *
 *   浏览器地址  /en        （英文站首页，无尾斜杠）
 *   baseUrl     /en/
 *   pathnameSuffix = "/en".replace("/en/", "") === "/en"   ← 没替换掉
 *   生成结果      "/" + "/en" = "//en"                      ← 打不开
 *
 * 于是从英文首页切「简体中文」会跳到 http://host//en 而不是中文首页。
 * 这里把这种退化的 "//<locale>" 结果规范化成 "/"（对应的中文首页）。
 *
 * 其余路径（/en/update、/en/docs/...）本来就是对的，一律不动。
 */
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import styles from './styles.module.css';

/** 修正 locale 根路径退化： "//en"、"//en/" -> "/"；其它原样返回 */
function fixLocaleRoot(url) {
  return url.replace(/^\/{2,}([a-zA-Z][a-zA-Z0-9-]*)\/?$/, '/');
}

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  ...props
}) {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const {search, hash} = useLocation();
  const localeItems = locales.map((locale) => {
    const raw = alternatePageUtils.createUrl({locale, fullyQualified: false});
    const baseTo = `pathname://${fixLocaleRoot(raw)}`;
    const to = `${baseTo}${search}${hash}${queryString}`;
    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        locale === currentLocale
          ? mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale].label;
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
