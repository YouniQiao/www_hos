/**
 * 扫描 i18n/en 下真实存在的英文文档，生成两份清单：
 *
 *   src/generated/enDocs.json     ["quick-start/lock-screen", ...]
 *     —— 已翻译文档 id 全集。swizzle 出的 DocSidebarItems / DocItem/Layout /
 *        DocCategoryGeneratedIndexPage 以及英文 update.jsx 都依赖它：
 *        侧边栏只显示清单内的条目、不在清单内的页面自动跳回中文、
 *        更新记录只列英文站真有的内容。
 *
 *   src/generated/enSidebars.json {"phoneSidebar": 53, "pcSidebar": 0, ...}
 *     —— 每个设备 sidebar 下有多少篇英文文档。navbar 用它判断英文站的
 *        「Devices」下拉里该出现哪些设备分支（0 篇的不显示，避免空面板）。
 *
 * 由 package.json 的 prestart / prebuild 自动执行。
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const SRC_DIR = path.join(root, 'i18n/en/docusaurus-plugin-content-docs/current');
const OUT_DIR = path.join(root, 'src/generated');
const OUT_DOCS = path.join(OUT_DIR, 'enDocs.json');
const OUT_SIDEBARS = path.join(OUT_DIR, 'enSidebars.json');

function walk(dir, base = '') {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...walk(path.join(dir, entry.name), rel));
    } else if (/\.mdx?$/.test(entry.name) && !entry.name.startsWith('_')) {
      out.push(rel.replace(/\.mdx?$/, ''));
    }
  }
  return out;
}

/** 从 sidebars.js 的某个 sidebar 定义里递归收集 doc id */
function collectDocIds(items, out = []) {
  if (!Array.isArray(items)) return out;
  for (const item of items) {
    if (typeof item === 'string') {
      out.push(item);
    } else if (item && typeof item === 'object') {
      if (typeof item.id === 'string') out.push(item.id);
      if (Array.isArray(item.items)) collectDocIds(item.items, out);
    }
  }
  return out;
}

const ids = [...new Set(walk(SRC_DIR))].sort();
fs.mkdirSync(OUT_DIR, {recursive: true});
fs.writeFileSync(OUT_DOCS, JSON.stringify(ids, null, 2) + '\n', 'utf-8');

// 每个 sidebar 下有多少篇英文文档（用于 navbar 的 Devices 下拉）
const idSet = new Set(ids);
const sidebarCounts = {};
try {
  const mod = await import(path.join(root, 'sidebars.js'));
  const sidebars = mod.default ?? mod;
  for (const [key, items] of Object.entries(sidebars)) {
    if (!Array.isArray(items)) continue;
    const docIds = collectDocIds(items);
    sidebarCounts[key] = docIds.filter((d) => idSet.has(d)).length;
  }
} catch (err) {
  console.warn(`[gen-en-docs] 读取 sidebars.js 失败（导航过滤会退化为不隐藏）: ${err.message}`);
}
fs.writeFileSync(
  OUT_SIDEBARS,
  JSON.stringify(sidebarCounts, null, 2) + '\n',
  'utf-8',
);

console.log(
  `[gen-en-docs] ${ids.length} 个英文文档 -> enDocs.json；` +
    `每个设备分支英文文档数 -> enSidebars.json ${JSON.stringify(sidebarCounts)}`,
);
