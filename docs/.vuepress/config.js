/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-11-01 10:55:46
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/.vuepress/config.js
 */
module.exports = {
    head: [
        ['script', { type: 'text/javascript' },`document.write(unescape("%3Cspan id='cnzz_stat_icon_1279624758'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1279624758%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));`]
    ],
    title: 'vue3-win10',
    base:"/",
    description: 'Just playing around',
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
            { text: '主页', link: '/' },
            { text: '教程', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: '配置项', link: '/conf/' },
            { text: '更新', link: '/update/' },
            { text: 'GitHub', link: 'https://github.com/royalknight56/vue-windows10' },
            { text: 'Demo', link: 'http://myim.online' },
        ],
        // sidebar: 'auto',
        sidebar: {
            '/guide/': 'auto',
            '/api/':'auto',
            '/update/':'auto',
            '/conf/':'auto',
            '/': [

            ]
        },
        // sidebar: [
        //     {
        //         title: 'Group 1',   // 必要的
        //         path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/'
        //         ]
        //     },
        //     {
        //         title: 'Group 2',
        //         children: [ /* ... */],
        //         initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        //     }
        // ]

    }
}