/**
 * Swizzled from @docusaurus/theme-classic DocCategoryGeneratedIndexPage.
 *
 * 为什么需要这个 swizzle：
 * 原版把 `category.items` 原样交给 DocCardList，**不经过 DocSidebarItems**，
 * 所以英文站的分类页会把所有中文文档都列出来（绕过方案 B 的过滤）。
 *
 * 改动：非默认语言下
 *   1) 卡片列表只保留「已有官方英文原文」的子项；
 *   2) 过滤后一个都不剩时，跳回中文分类页，避免出现空白英文页。
 */
import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useCurrentSidebarCategory} from '@docusaurus/plugin-content-docs/client';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocCardList from '@theme/DocCardList';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Heading from '@theme/Heading';
import {
  chineseCounterpart,
  filterUntranslated,
  isDefaultLocaleOf,
  paginatorEntry,
} from '@site/src/utils/en-docs';
import styles from './styles.module.css';

function DocCategoryGeneratedIndexPageMetadata({categoryGeneratedIndex}) {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}

function DocCategoryGeneratedIndexPageContent({categoryGeneratedIndex}) {
  const category = useCurrentSidebarCategory();
  const {i18n} = useDocusaurusContext();
  const isDefaultLocale = isDefaultLocaleOf(i18n);

  const items = isDefaultLocale
    ? category.items
    : filterUntranslated(category.items || []);
  const empty = isDefaultLocale ? false : items.length === 0;

  // 底部分页同理：英文站只在目标文档有英文原文时才显示，
  // 否则会出现「Next: 出行规划，轻松出发」这种中文条目。
  const navigation = categoryGeneratedIndex.navigation || {};
  const previous = isDefaultLocale
    ? navigation.previous
    : paginatorEntry(navigation.previous);
  const next = isDefaultLocale
    ? navigation.next
    : paginatorEntry(navigation.next);

  React.useEffect(() => {
    if (empty) {
      window.location.replace(
        chineseCounterpart(categoryGeneratedIndex.permalink),
      );
    }
  }, [empty, categoryGeneratedIndex.permalink]);

  if (empty) {
    return null; // 跳转前不渲染，避免空白英文页被看到
  }

  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />
      <header>
        <Heading as="h1" className={styles.title}>
          {categoryGeneratedIndex.title}
        </Heading>
        {categoryGeneratedIndex.description && (
          <p>{categoryGeneratedIndex.description}</p>
        )}
      </header>
      <article className="margin-top--lg">
        <DocCardList items={items} className={styles.list} />
      </article>
      <footer className="margin-top--md">
        <DocPaginator previous={previous} next={next} />
      </footer>
    </div>
  );
}

export default function DocCategoryGeneratedIndexPage(props) {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
