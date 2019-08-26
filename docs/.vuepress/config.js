 module.exports = {
  title: 'Ambrose\'s Blog',
  description: '人生亦是一场孤独的修行。---by AmbroseX',
  port:'7777',
  plugins:['@vuepress/back-to-top'],
  plugins:['@vuepress/pwa'],
  plugins:['@vuepress/nprogress'],
  plugins:['@vuepress/last-updated'],
  serviceWorker:true,
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'manifest', href: '/manifest.json' }],

    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', contant: '#ffffff' }],
   
    ['link',{rel:'stylesheet',href:'/css/style.css'}],
    ['script',{charset:'utf-8',src:'/js/main.js'}],
  ],
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },

  plugins:{//是否开启pwa
   '@vuepress/pwa':{
   serviceWorker:true,
   popupComponent: 'MySWUpdatePopup',
   updatePopup:true,
      }
    },

  themeConfig: {
    tags:'/tags/',
    nav:require("./vav"),//导航栏
    sidebar:require('./sidebar'),//侧边栏
    sidebarDepth: 2,
    search:true,
    searchMaxSuggestions:10,
    repo:'Anbrosex/vuePress-Blog',
    docsDir:'docs',
    docsBrannch:'master',
    editLinks:true,
    edutLinkText:'编辑文档',

    }
    
  
};