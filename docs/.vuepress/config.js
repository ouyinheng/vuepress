
module.exports = {
  title: 'OYH',
  description: 'Just playing around',
  base: "/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://baidu.com' },
    ],
    lastUpdated: 'Last Updated', // string | boolean
  },
  // 插件
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  postcss: [require('autoprefixer')],
  sass: { indentedSyntax: true },
  scss: {
    includePaths: [
      "./public/scss/index.scss", 
      "./public/scss/variable.scss"
    ]
  }
}