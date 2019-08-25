 module.exports = {
  title: 'Ambrose\'s Blog',
  description: '人生亦是一场孤独的修行。---by AmbroseX',
  port:'7777',
  plugins:['@vuepress/back-to-top','@vuepress/pwa'],
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
    repo:'vuejs/vuepress',
    docsDir:'docs',
    docsBrannch:'master',
    editLinks:true,
    edutLinkText:'编辑文档',
    serviceWorker:{
      updatePopup:true,
    },
  }
};