import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import EN_SIDEBARS from '@site/src/generated/enSidebars.json';

/**
 * 非默认语言（英文站 /en/）的 navbar 收敛规则 —— 只显示英文站真有的东西：
 *
 *  1. 「Devices」下拉：只保留有英文文档的设备分支（数量来自 enSidebars.json，
 *     由 scripts/gen-en-docs-manifest.mjs 在构建前扫出来）。0 篇的分支不显示，
 *     避免点开是一个空面板；整个下拉都没内容时连下拉一起去掉。
 *  2. 其它入口（Explore / Features / Choose / Blog / Release Notes /
 *     Developer / localeDropdown / search）原样保留。
 *
 * 默认语言（中文，站点根路径）完全不受影响。
 */
export function useVisibleNavbarItems() {
  const items = useThemeConfig().navbar.items;
  const {i18n} = useDocusaurusContext();
  if (!i18n || i18n.currentLocale === i18n.defaultLocale) {
    return items;
  }
  return items
    .map((item) => {
      if (item.type !== 'dropdown' || !Array.isArray(item.items)) {
        return item;
      }
      const kept = item.items.filter((sub) => {
        if (sub && sub.type === 'docSidebar') {
          return (EN_SIDEBARS[sub.sidebarId] ?? 0) > 0;
        }
        return true;
      });
      if (!kept.length) {
        return null;
      }
      return {...item, items: kept};
    })
    .filter(Boolean);
}
