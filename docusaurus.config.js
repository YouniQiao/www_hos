// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/palenight");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HarmonyOS NEXT",
  titleDelimiter: " - ",
  tagline:
    "HarmonyOS NEXT",
  url: "https://HarmonyOS.cool",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
  scripts: [
    {src: 'https://hm.baidu.com/hm.js?14831dd539c30be31abf43fcc7170e9d',  async: true},
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2685463470534337',
      async: true,
      crossorigin: 'anonymous',
    }
  ],
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/YouniQiao/www_hos/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'JA5IB6FHW4',
        apiKey: 'cbb771cab46bf213a368403bbaeda0cd',
        indexName: 'harmonyos',
        contextualSearch: true,
        searchParameters: {},
      },

      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'HarmonyOS',
        logo: {
          alt: "HarmonyOS",
          src: "img/logo.svg",
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: '探索',
            items: [
              {
                label: 'HarmonyOS 6.0',
                to:'hmos60'
              },
              {
                label: 'HarmonyOS 5.1',
                to:'hmos51'
              },
              {
                label: 'HarmonyOS 5.0',
                to:'hmos50'
              },
              {
                label: '使用Android应用',
                to:'android-app'
              },
              {
                label: '使用海外应用',
                to:'oversea-app'
              },
              
          ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '核心特征',
            items: [
              {
                label: '原生精致',
                to:'feature/delicate'
              },
              {
                label: '原生互联',
                to:'feature/connect'
              },
              {
                label: '原生智能',
                to:'feature/ai'
              },
              {
                label: '原生安全',
                to:'feature/security'
              },
              {
                label: '原生流畅',
                to:'feature/smooth'
              },
              {
                label: '原生应用',
                to:'feature/application'
              },
              
          ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '选择',
            items: [
              {
                label: '为什么选择HarmonyOS',
                to:'why-hmos'
              },
              {
                label: '迁移至HarmonyOS',
                to:'switch-to-hmos'
              },
              {
                label: '支持机型',
                to:'support-device'
              },
              
          ],
          },
          {
            type: 'dropdown',
            label: '玩转设备',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'phoneSidebar',
                label: '手机',
              },
              {
                type: 'docSidebar',
                sidebarId: 'tabletSidebar',
                label: '平板',
              },
              {
                type: 'docSidebar',
                sidebarId: 'pcSidebar',
                label: '电脑',
              },
              

              {
                type: 'docSidebar',
                sidebarId: 'wearableSidebar',
                label: '穿戴',
              },

              {
                type: 'docSidebar',
                sidebarId: 'tvSidebar',
                label: '智慧屏',
              },

              {
                type: 'docSidebar',
                sidebarId: 'carSidebar',
                label: '智能座舱',
              },                  
            ],
          },
          {
            to: 'blog', 
            label: '博客', 
            position: 'left'
          },
          
          {
            type: 'search',
            position: 'right',
          },
          {
            to: '/update',
            label: '更新记录',
            position: 'right',
          },
          {
            label: 'Developer',
            position:'right',
            href: 'https://developer.huawei.com/consumer/cn/',
          },
        ],
      },
      footer: {
        style: "light",
        links: [
        
          {
            title: '更新记录',
            items: [
              {
                label: '更新记录',
                href: '/update',
              },
            ],
          },
          //{
          //  title: 'More',
          //  items: [
          //    {
          //      label: 'Developer',
          //      href: 'https://developer.huawei.com/consumer/cn/',
          //    },
          //  ],
          //},
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HarmonyOS Cool.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
