<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-08-25 10:20:32
 * @Description: 
-->
# DragWindow

使用 DragWindow 方法，会创建一个窗口

可以在之后将其加入到桌面或者直接打开（show）

```js
import {system} from "./systemInit"
import Help from './apps/Help.vue';
import appicon from "./assets/appicon.png"

let window = system.DragWindow({
      title: '浏览器',
      icon: brow,
      width: 600,
      height: 500,
      x:0,
      y:0,
      content: Test3,
      buttons:['close','min','max']
    })
```

DragWindow参数：

```ts

//传入一个对象
interface option {
    content: VueComponent|string,
    props?: any,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    title?: string,
    icon?: string,
    isScalable?:boolean,
    isSFC?:boolean,
    buttons?:WindowButton[]
    // type WindowButton = 'flush'|'close'|'min'|'max'
}

system.DragWindow(option: option, use?: any)

```

|  名称   | 含义  | 默认值 |
|  ----  | ----  | ----  |
| content  | 窗口内容，是一个引入的vue组件，可以是Url网址 | 必须 |
| props  | 可以传递给窗口的一些属性 | - |
| x  | 左上角位置坐标x | 0 |
| y  | 左上角位置坐标y | 0 |
| width  | 窗口宽度 |400 |
| height  | 窗口高度 |400   |
| title  | 窗口名称 | '未命名窗口' |
| icon  | 窗口图标 |'' |
| isScalable  | 窗口是否为可缩放 |true |
| isSFC  | 窗口是否为SFC组件 |false |
| buttons  | 窗口按钮 | ['close','min','max'] flush刷新按钮，close关闭按钮 |


usage:
```js
system.DragWindow({
      title: '浏览器',
      icon: brow,
      content: Test3
    })
system.DragWindow({
      isSFC: true,
      content: 'http://localhost:3002/app'
    })
system.DragWindow({
      content: 'https://v3.cn.vuejs.org/api/global-api.html#h'
    })
```

当为isSFC时，会从content指示的链接加载SFC组件，

获取到JSON信息：
```js
JSON.stringify({
    appName: 'testapp',
    version: '1.0.0',
    content:`<template>
  <div id="app"> 
  </div>
  </template>
  <script>
  </script>
  <style>
  </style>`
  })
```
  之后，会把content的SFC文件编译为Vue组件

  例如：
  ```js
  system.DragWindow({
      isSFC: true,
      content: 'http://localhost:3002/app'
    })
  ```
  这个窗口会请求'http://localhost:3002/app'；

  并将获取到的content作为窗口内容；
  
  content是一个SFC字符串；
### windowInfo

```ts

let window = system.DragWindow({
      title: '浏览器',
      content: Test3
    })

window.windowInfo


interface WindowInfo {
    id: string,
    wid: number,
    zindex: number,
    ifShow: boolean,
    iftop: boolean,
    ifDestory: boolean,
    isMaximize: boolean,
    props?: any,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    title?: string,
    icon?: string,
    isScalable?: boolean,
    isSFC?:boolean,
}

```
获取窗口信息

<!-- ### onWindowResizing(即将废弃)
onWindowResizing(event: (x: number, y: number) => void): void;
用于监听窗口的大小变化事件

usage:

```ts
let next =new DragWindow({
      title: '浏览器',
      icon: brow,
      width: 600,
      height: 500,
      x:0,
      y:0,
      content: Test3
    })
next.show()
next.onWindowResizing((x,y)=>{ console.log(x,y) })
```
### onWindowEvent
```ts
onWindowEvent(name:windowEventsName,event: Function) 

type windowEventsName = "onResize"|"beforeDestory"|"afterDestory"|"beforeHide"|"afterHide"|"onTop";

```
监听窗口事件

此接口只能监听创建的窗口的事件 -->

### show
show(): void;
使窗口显示，不调用此函数，则窗口不会显示

usage:

```ts
let next = system.DragWindow({
      title: '浏览器',
      icon: brow,
      width: 600,
      height: 500,
      x:0,
      y:0,
      content: Test3
    })
next.show()
```

在窗口被加入到桌面时，点击桌面图标会调用窗口的show方法

### destory
destory(): void;

销毁窗口。

usage:

```ts
let next = system.DragWindow({
      title: '浏览器',
      icon: brow,
      width: 600,
      height: 500,
      x:0,
      y:0,
      content: Test3
    })
next.destory()
```
相当于窗口的关闭按钮

### isMaximized
isMaximized(): void;

得到窗口是否为最大化

usage:

```ts
let window = system.DragWindow({
      content: Test
    })
window.isMaximized()
```


### isMaximized

isMaximized(): void;

得到窗口是否为最大化

usage:

```ts
let window = system.DragWindow({
      content: Test
    })
window.isMaximized()
```

### isMinimized

isMinimized(): void;

得到窗口是否为最小化

usage:

```ts
let window = system.DragWindow({
      content: Test
    })
window.isMinimized()
```


### maximize

maximize(): void;

使窗口为最大化

usage:

```ts
let window = system.DragWindow({
      content: Test
    })
window.maximize()
```

### minimize

minimize(): void;

使窗口为最小化

usage:

```ts
let window = system.DragWindow({
      content: Test
    })
window.minimize()
```


### moveTop

moveTop(): void;

使窗口在最上方

usage:

```ts
let window = system.DragWindow({
      content: Test
    })
window.moveTop()
```