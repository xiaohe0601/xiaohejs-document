import { defineUserConfig } from "vuepress";

import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "xiaohejs",
      description: "🎈 小何同学的JavaScript工具箱"
    }
  },
  theme: theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
      customFields: [{
        // @ts-ignore
        getter: (page) => page.frontmatter.category,
        formatter: {
          "/": "分类：$content"
        }
      }, {
        // @ts-ignore
        getter: (page) => page.frontmatter.tag,
        formatter: {
          "/": "标签：$content"
        }
      }]
    })
  ]
});