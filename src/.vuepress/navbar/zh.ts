import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "navigation", link: "/posts/quicknav/" },
  //{ text: "博客主页", icon: "blog", link: "/posts/blog/" },
  { text: "笔记归档", icon: "code", link: "/posts/codenotes/" },
  { text: "浮生杂记", icon: "public\logo.svg", link: "/posts/floatinglife/" },
  //{ text: "开源项目", icon: "free", link: "/posts/projects/" },
  {
    text: "安娜档案",
    icon: "advance",
    prefix: "/resources/",
    children: [
      {
        text: "书籍资源",
        icon: "animation",
        link: "books/",
      },
      {
        text: "影音资源",
        icon: "play",
        link: "videos/",
      },
    ],
  },

]);
