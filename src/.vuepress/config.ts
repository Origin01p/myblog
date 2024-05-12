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
      katex: true,
      // 启用下角标功能
      sub: true,
      // 启用上角标
      sup: true,
      footnote: true,
      mark: true,
      tasklist: true,
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
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
