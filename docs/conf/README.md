<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-12-29 09:55:37
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/conf/README.md
-->
# 配置项
怎么使用
在创建system对象时，传入

```ts
let system = new System({
    if_logo_show: false,
    start_time:1200,
    start_menu_logo: menuicon
});

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
<!-- ## login
设置登录用户名
```ts
login:<loginOption|null>null

loginOption:{
    user_name:string,
    user_password:string,
}

```
login是一个对象，当设置为null时，不显示锁屏界面
当设置了用户名和密码时，必须使用密码解锁。
（这只是前端UI解锁，并没有安全设置） -->

## backimg
设置桌面壁纸
```ts
backimg:'default',

import backimg from "./assets/back.jpg"
backimg:backimg
```