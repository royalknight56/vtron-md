<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-12-06 14:51:10
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/conf/README.md
-->
# 配置项
怎么使用
在use时，传入配置项
```ts
createApp(App).use(win10,{
    if_logo_show: false,
    start_time:1200,
    start_menu_logo: menuicon
}).mount('#app')
```

## start_time
```ts
usage start_time:2000,
```

启动页面停留时间，设置为0时，不显示启动页面
## if_logo_show
```ts
if_logo_show:true,
```
是否展示默认桌面壁纸的windows logo

## start_menu_logo
设置左下角Logo
```ts
start_menu_logo:'default',

import testicon from "../assets/computer.ico";
start_menu_logo:testicon
```

## backimg
设置桌面壁纸
```ts
backimg:'default',

import backimg from "./assets/back.jpg"
backimg:backimg
```