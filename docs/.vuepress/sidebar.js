module.exports={
    // 对多模块进行管控
    '/web/':require('../web/sidebar'),//前端基础模块的侧边栏

    '/error/language':require('../error/language/sidebar'),//宝典模块第一项侧边栏
    '/error/arithemetic':require('../error/arithemetic/sidebar'),//宝典模块第二项侧边栏
    '/error/tools':require('../error/tools/sidebar'),
    '/error/frame':require('../error/frame/sidebar'),

    '/poem/':require('../poem/sidebar'),

    '/about/':require('../about/sidebar'),


}
