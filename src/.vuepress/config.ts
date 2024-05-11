import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/myblog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "PQ的档案",
      description: "PQ的档案",
    },
  },

  theme,
  plugins: [
 
    // 搜索插件
    searchPlugin({
      //多语言支持
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      // 热键支持
      hotKeys: ["command", "k"],
      // 最大推荐个数
      maxSuggestions: 7,
      // 排除首页
      isSearchable: (page) => page.path !== "/",
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,

});
