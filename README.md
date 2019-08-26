Ambrose's Blog
=
![主页](https://upload-images.jianshu.io/upload_images/18711454-97a8f2de3df3e83e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



介绍
---
这是一个基于vuepress搭建的个人博客，
目前只添加了基本功能和基本样式，等待后期后期优化更新版本。

>目前的基本功能和样式有：
>1.默认主题
>2.导航栏和侧边栏
>3.PWA支持
>4.评论功能（Valin插件）
>5.GitHub修改
>6.其他插件：plugin-back-to-top,plugin-pwa,theme-default,plugin-nprogress,待扩展

>已优化相关：修改了默认主题的h1标签和滚动条为变化渐变色

>待添加功能：时间轴，标签云，主题优化和特效（点击效果，背景效果）


>tips:
>+ PWA功能介绍：在移动端（手机，平板）上浏览网页时，将网页快捷方式放入手机桌面，就能像使用原生移动应用一样使用，没有网也可以使用哦，不信把网络关了，点击快捷方式试一试。
>+ 主题样式放在在.vue/theme文件夹里面，是默认主题（稍作修改），在里面可以自定义你的专属主题。
>+ 需要添加额外的css和js可以在.vuepress/public里面相应文件夹添加，并在.vue/config.js里面的head里面引入，



如何使用
-----

---

1.拷贝该项目(依赖文件在项目里面，可能有点大)

在电脑命令行运行(需要先安装git)

`git clone git@github.com:Anbrosex/vuePress-Blog.git`

2.本地进行查看（可以使用yarn和npm，我习惯npm）

`npm run dev`（要在文件夹内运行此命令哦）

3.部署到GitHub Page

a.先修改deploy.sh的内容

将git push -f https://<USERNAME>.github.io修改成自己的GitHub名字就好啦，不过先要新建一个自己的\<USENAME>.github.io的仓库哦。

b.执行`npm run d `（要在文件夹内运行此命令哦）


>4.打开网页就可以查看网站了

打开网址：https://anbrosex.github.io

>tip
>可以直接使用我的顶级域名：https://www.jxnydx.club ，或者:https://jxnydx.club
点击进入：[Ambrose's Blog](https://jxnydx.club "AMbrose's Blog")






---

配置
----

在使用该项目之前需要进行的配置

因为本地推送的Valine的appId和appKey是我自己的，并且设置了安全域名（只能在我的域名中使用）

在.vuepress/compoents的Valine里面修改即可
