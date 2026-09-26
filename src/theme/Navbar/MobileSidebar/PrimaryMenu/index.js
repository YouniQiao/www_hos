/**
 * Swizzled from @docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/PrimaryMenu/index.js
 * 唯一改动：items 改用 useVisibleNavbarItems()，英文站隐藏 /docs 与 /update 入口。
 */
import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import {useVisibleNavbarItems} from '@site/src/utils/navbar-items';

// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useVisibleNavbarItems();
  return (
    <ul className="menu__list">
      {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
    </ul>
  );
}
