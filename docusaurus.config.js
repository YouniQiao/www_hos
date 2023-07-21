// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/palenight");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HarmonyOS",
  titleDelimiter: " - ",
  tagline:
    "HarmonyOS",
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
    {src: 'https://hm.baidu.com/hm.js?14831dd539c30be31abf43fcc7170e9d',  async: true}
  ],
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "/",
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
            label: 'Developer',
            position:'right',
            href: 'https://developer.harmonyos.cool',
          },
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
                href: 'https://developer.harmonyos.cool',
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
