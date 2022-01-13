/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-01-13 16:42:11
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/.vuepress/config.js
 */

module.exports = {
    title: 'vue3-win10',
    base:"/",
    description: 'Just playing around',
    // plugins: ['demo-container'],
    theme: '@vuepress/theme-default',
    // 配置默认主题
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        lastUpdated: 'Last Updated', // string | boolean
        navbar: [
            { text: '主页', link: '/' },
            { text: '教程', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: '配置项', link: '/conf/' },
            { text: '更新', link: '/update/' },
            { text: 'GitHub', link: 'https://github.com/royalknight56/vue-windows10' },
            { text: 'Demo', link: 'http://myim.online' },
        ],

        // sidebar: {
        //     '/guide/': 'auto',
        //     '/api/':'auto',
        //     '/update/':'auto',
        //     '/conf/':'auto',
        //     '/': [

        //     ]
        // },


    }
}