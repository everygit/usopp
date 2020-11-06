const path = require('path');

var distPath = path.resolve('.', 'webpack');
var tempPath = path.resolve('.', 'temp');

module.exports = {
    base: '/webpack/',
    title: 'webpack 找不到北',
    description: 'just a test desc',
    sidebarDepth: 3,
    cache: true,
    temp: tempPath,
    dest: distPath,
    patterns:['**/*.md', '**/*.vue'],
    themeConfig: {
        nav: [
            {text:'webpack 教程', link: 'https://www.webpackjs.com/guides/getting-started/'}
        ],
        sidebar: [
            {
                title: '概述',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ['/', "了解 webpack"],
                ]
            }
        ]
    }
};

// {
//     title: '入口',
//     collapsable: false,
//     sidebarDepth: 2,
//     children: [
//         ['/flow/', 'zrender 模块'],
//         ['/flow/zrender_class', 'Zrender 类'],
//     ]
// }, 

// <img :src="$withBase('/images/24230527_6ykq.png')" alt="fsdfsd">