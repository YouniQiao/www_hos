/**
 * Swizzled from @docusaurus/theme-classic DocSidebarItems.
 * 唯一改动：非默认语言（英文站）只显示「已有官方英文原文」的条目。
 * 过滤规则见 src/utils/en-docs.js（与分类页 swizzle 共用）。
 */
import React, {memo} from 'react';
import {
  DocSidebarItemsExpandedStateProvider,
  useVisibleSidebarItems,
} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocSidebarItem from '@theme/DocSidebarItem';
import {filterUntranslated, isDefaultLocaleOf} from '@site/src/utils/en-docs';

function DocSidebarItems({items, ...props}) {
  const {i18n} = useDocusaurusContext();
  const scopedItems = isDefaultLocaleOf(i18n) ? items : filterUntranslated(items);
  const visibleItems = useVisibleSidebarItems(scopedItems, props.activePath);
  return (
    <DocSidebarItemsExpandedStateProvider>
      {visibleItems.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}

export default memo(DocSidebarItems);
