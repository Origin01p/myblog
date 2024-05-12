import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/posts/notes/": [
    {
      text: "代数",
      icon: "book",
      collapsible: true,
      prefix: "posts\notes",
      children: [
        {
          text: "群",
          icon: "write",
          link: "group.md",
        },
        
      ],
    },
   
  ],

  // 浮生杂记的侧边栏
  "/posts/floatinglife/": [
 
    {
      text: "小镇思考者",
      icon: "style",
      collapsible: true,
      link: "README.md",
    },
  ],

});
