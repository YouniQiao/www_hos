/**
 * 英文站「只显示有官方英文原文的页面」共用逻辑（方案 B）。
 *
 * 判定依据：scripts/gen-en-docs-manifest.mjs 在构建前扫描
 * i18n/en/docusaurus-plugin-content-docs/current/**，把确实存在英文原文的
 * doc id 写进 src/generated/enDocs.json。中文站不受任何影响。
 *
 * 三个使用点：
 *   - theme/DocSidebarItems     过滤侧边栏
 *   - theme/DocItem/Layout      未翻译页跳回中文
 *   - theme/DocCategoryGeneratedIndexPage  过滤分类页卡片列表
 */
import EN_DOC_IDS from '@site/src/generated/enDocs.json';

export const EN_DOC_IDS_SET = new Set(EN_DOC_IDS);

/**
 * 取 sidebar item 对应的文档 id。
 * 注意 Docusaurus 3.8 的文档项结构是 {type:'link', docId, href}，
 * id 在 docId 字段（不是 {type:'doc', id}），两个都认以防版本差异。
 */
export function docIdOf(item) {
  if (!item) {
    return null;
  }
  return item.docId ?? item.id ?? null;
}

/**
 * 递归过滤 sidebar items：未翻译的文档项移除；因此变空的 category 也移除。
 * 分类自身的「首页」链接（category index，如 category/phone-ai）也算一篇文档，
 * 未翻译时把 link 摘掉——否则侧边栏会出现点进去是中文的分类项。
 */
export function filterUntranslated(items) {
  if (!Array.isArray(items)) {
    return [];
  }
  return items
    .map((item) => {
      if (item.type === 'category') {
        const children = filterUntranslated(item.items || []);
        if (!children.length) {
          return null;
        }
        const linkId = docIdOf(item.link);
        const keepLink =
          !item.link || linkId === null || EN_DOC_IDS_SET.has(linkId);
        return keepLink
          ? {...item, items: children}
          : {...item, items: children, link: undefined};
      }
      const id = docIdOf(item);
      if (id === null) {
        return item; // html / 纯外链等，保留
      }
      return EN_DOC_IDS_SET.has(id) ? item : null;
    })
    .filter(Boolean);
}

/** 当前是否处于默认语言（中文）。非默认语言才应用方案 B。 */
export function isDefaultLocaleOf(i18n) {
  return i18n.currentLocale === i18n.defaultLocale;
}

/** 把 /en/docs/<path> 还原成 /docs/<path>（只剥非默认语言的 locale 前缀） */
export function chineseCounterpart(permalink) {
  return permalink.replace(/^\/[a-zA-Z-]+(?=\/docs(?:\/|$))/, '') || '/docs';
}

/**
 * 从 permalink 取出 doc id。
 *   /en/docs/ai/travel-plan -> ai/travel-plan
 *   /docs/phone             -> phone
 * 用于判断「上一篇 / 下一篇」这类只有 title + permalink 的对象是否已翻译。
 */
export function docIdFromPermalink(permalink) {
  const m = (permalink || '').match(/\/docs\/(.+?)\/?$/);
  return m ? m[1] : null;
}

/**
 * 过滤分页导航项：指向未翻译文档时返回 null（不渲染）。
 * 英文站若不过滤，底部会出现「下一篇：出行规划，轻松出发」这种中文标题。
 */
export function paginatorEntry(item) {
  if (!item) {
    return null;
  }
  const id = docIdFromPermalink(item.permalink);
  return id && EN_DOC_IDS_SET.has(id) ? item : null;
}
