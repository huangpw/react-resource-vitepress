const nav = require("./config/nav");
const sidebar = require("./config/sidebar");
const footer = require("./config/footer");
const socialLinks = require("./config/socialLinks");

export default {
  base: "/react-resource-vitepress/",
  title: "REACT-RESOURCE",
  description: "前端React学习网站，包含web端&移动端&小程序&Electron等栏目",
  lang: "zh-CN",
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    siteTitle: "REACT-RESOURCE",
    // logo: '/favicon.ico',
    logo: "/favicon.svg",
    nav,
    sidebar,
    socialLinks,
    footer,
    editLinks: true,
    lastUpdated: true,
    lastUpdatedText: "最后修改时间",
    returnToTopLabel: "返回顶部",
    outline: {
      level: [2, 3], // ## 或 ###
    },
  },
};
