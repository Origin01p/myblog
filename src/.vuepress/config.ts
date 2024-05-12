import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
//import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

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
    mdEnhancePlugin({
      // 你的选项
    }),
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
