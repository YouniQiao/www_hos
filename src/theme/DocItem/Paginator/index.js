/**
 * Swizzled from @docusaurus/theme-classic DocItem/Paginator.
 * 唯一改动：非默认语言下，底部「上一篇 / 下一篇」只在目标文档已有英文原文时显示。
 * 否则英文文档页底部会出现「Next: 出行规划，轻松出发」这种中文条目
 * （fallback 到中文标题），既泄漏中文又让读者扑空。
 */
import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocPaginator from '@theme/DocPaginator';
import {isDefaultLocaleOf, paginatorEntry} from '@site/src/utils/en-docs';

export default function DocItemPaginator() {
  const {metadata} = useDoc();
  const {i18n} = useDocusaurusContext();
  const isDefaultLocale = isDefaultLocaleOf(i18n);

  const previous = isDefaultLocale
    ? metadata.previous
    : paginatorEntry(metadata.previous);
  const next = isDefaultLocale ? metadata.next : paginatorEntry(metadata.next);

  return (
    <DocPaginator
      className="docusaurus-mt-lg"
      previous={previous}
      next={next}
    />
  );
}
