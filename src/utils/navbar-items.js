import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';

/**
 * 判断一个 navbar item 是否属于 /docs 入口。
 * 「玩转设备」这类 dropdown 的子项是 docSidebar，整体算 docs 入口。
 */
function isDocsEntry(item) {
  if (item.type === 'dropdown') {
    return (item.items || []).some((sub) => sub && sub.type === 'docSidebar');
  }
  const to = item.to || item.href || '';
  return /^\/?docs(\/|$)/.test(to);
}

/** /update 入口 */
function isUpdateEntry(item) {
  const to = item.to || item.href || '';
  return /^\/?update\/?$/.test(to);
}

/**
 * 非默认语言（英文站 /en/）不展示 /docs 与 /update 的菜单入口。
 * 默认语言（中文，站点根路径）保持原样。
 */
export function useVisibleNavbarItems() {
  const items = useThemeConfig().navbar.items;
  const {i18n} = useDocusaurusContext();
  if (!i18n || i18n.currentLocale === i18n.defaultLocale) {
    return items;
  }
  return items.filter(
    (item) => !isDocsEntry(item) && !isUpdateEntry(item),
  );
}
