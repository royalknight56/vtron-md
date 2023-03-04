module.exports = {
    title: 'Vtron',
    base: "/",
    description: 'Just playing around',
    // 配置默认主题
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        lastUpdated: 'Last Updated', // string | boolean
        aside: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '教程', link: '/guide/how-to-use-vtron.md' },
            { text: 'API', link: '/api/BrowserWindow.md' },
            { text: '更新', link: '/update/' },
            { text: 'GitHub', link: 'https://github.com/royalknight56/vtron' },
            { text: 'Demo', link: 'http://myim.online' },
        ],
        sidebar: {
            '/api/': [
                {
                    text: 'BrowserWindow',
                    link: '/api/BrowserWindow.md',
                },
                {
                    text: 'System',
                    link: '/api/System.md',
                },
                {
                    text: 'Notify',
                    link: '/api/Notify.md',
                },
            ],
            '/guide/': [
                { text: 'how-to-use-vtron?', link: '/guide/how-to-use-vtron.md' },
                // { text: 'What is vtron?', link: '/guide/what-is-vtron.md' },
            ],
        }
    }
}