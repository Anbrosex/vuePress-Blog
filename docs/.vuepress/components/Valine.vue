<template>
    <div id="vcomments"></div>
</template>

<script>
export default {
    name:'Valine',
    mounted:function(){
        const Valine=require('valine');
        if(typeof window!=='undefined'){
            this.window=window;
            window.AV=require('leancloud-storage')
        }
        
        new Valine({
            el:'#vcomments',
            appId:'2iXKXnyVWqTkW4ueBeSuzhPF-gzGzoHsz',
            appKey:'zVHbHmFmjoRCJoXL0vRMNwWq',
            placeholder:'来了老弟？说点什么吧......',
            notify:false,
            verify:true,
            path:window.location.pathname,
            avatar:'monsterid',
            pageSize:5,
            visitor:true,
        });
    },
}
</script>