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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/YouniQiao/www_hos/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "/",
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
            label: '核心特征',
            items: [
              {
                label: '原生精致',
                to:'delicate'
              },
              {
                label: '原生互联',
                to:'connect'
              },
              {
                label: '原生智能',
                to:'ai'
              },
              {
                label: '原生安全',
                to:'security'
              },
              {
                label: '原生流畅',
                to:'smooth'
              },
              {
                label: '原生应用',
                to:'application'
              },
              
          ],
          },
          {
            label: '支持机型',
            position:'left',
            to:'/models-next',
          },
          {
            type: 'docSidebar',
            sidebarId: 'phoneSidebar',
            position: 'left',
            label: '手机手册',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pcSidebar',
            position: 'left',
            label: '电脑手册',
          },

          {
            type: 'search',
            position: 'right',
          },
          //{
          //  label: 'Developer',
          //  position:'right',
          //  href: 'https://developer.harmonyos.cool',
          //},
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Developer',
                href: 'https://developer.huawei.com/consumer/cn/',
              },
            ],
          },
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
