import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "compass", link: "/posts/quicknav/" },//location-arrow
  //{ text: "博客主页", icon: "blog", link: "/posts/blog/" },
  { text: "笔记归档", icon: "pencil", link: "/posts/notes/" },
  { text: "浮生杂记", icon: "mug-saucer", link: "/posts/floatinglife/" },
  //{ text: "开源项目", icon: "free", link: "/posts/projects/" },
  {
    text: "安娜档案",
    icon: "inbox",
    prefix: "/posts/floatinglife/resources/",
    children: [
      {
        text: "书籍资源",
        icon: "book",
        link: "/posts/floatinglife/resources/books/README.md",
      },
      {
        text: "影音资源",
        icon: "play",
        link: "/posts/floatinglife/resources/videos/",
      },
    ],
  },

]);
