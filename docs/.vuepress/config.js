 module.exports = {
  title: 'Ambrose\'s Blog',
  description: '我的博客',
  port:'7777',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/ico.png' }],
    ['link',{rel:'stylesheet',href:'/css/style.css'}],
    ['script',{charset:'utf-8',src:'/js/main.js'}],


  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },


  themeConfig: {
    nav:require("./vav"),//导航栏
    sidebar:require('./sidebar'),//侧边栏
    sidebarDepth: 2,
    search:true,
    searchMaxSuggestions:10,
    lastUpdated:'Last Updated',
  }
};