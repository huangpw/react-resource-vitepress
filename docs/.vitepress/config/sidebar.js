module.exports = {
  // 样式库
  "/official/css/": [
    {
      text: "🔔CSS样式库",
      collapsed: false,
      items: [
        { text: "⛲基础学习", link: "/official/css/" },
        { text: "⛺初始化", link: "/official/css/initialize/" },
        { text: "🌁渐变颜色", link: "/official/css/gradient/" },
        { text: "🌃布局", link: "/official/css/layout/" },
        { text: "🏙️阴影", link: "/official/css/shadow/" },
        { text: "🌄背景", link: "/official/css/background/" },
        { text: "🎡游戏", link: "/official/css/game/" },
        { text: "♨️其他", link: "/official/css/other/" },
      ],
    },
  ],
  // 项目实战
  "/project/note/": [
    {
      text: "⛲基础",
      collapsed: false,
      items: [
        { text: "⛲基础笔记", link: "/project/note/" },
        { text: "⛺React 配置多环境", link: "/project/note/react-env/" },
        { text: "🌁UMI 配置多环境", link: "/project/note/umi-env/" },
      ],
    },
    {
      text: "🐳部署",
      collapsed: false,
      items: [
        {
          text: "🐋VitePress+GitHub部署代码",
          link: "/project/note/github/",
        },
        { text: "🐟VitePress+Gitee部署代码", link: "/project/note/gitee/" },
      ],
    },
  ],
};
