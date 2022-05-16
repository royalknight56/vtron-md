<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-05-16 13:18:05
 * @Description: 
-->
# DragWindow

引入DragWindow类
构造对象，使用后会创建一个窗口，可以在之后将其加入到桌面或者直接打开（show）

```js
import {DragWindow} from 'vue3-win10'
import Help from './apps/Help.vue';
import appicon from "./assets/appicon.png"

let window = new DragWindow({
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
    content: ReturnType<typeof defineComponent>,
    props?: any,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    title?: string,
    icon?: string,
    isScalable?:boolean,
    buttons?:WindowButton[]
    // type WindowButton = 'flush'|'close'|'min'|'max'
}

DragWindow(option: option, use?: any)

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
| buttons  | 窗口按钮 | ['close','min','max'] flush刷新按钮，close关闭按钮 |


usage:
```js
new DragWindow({
      title: '浏览器',
      icon: brow,
      content: Test3
    })
```
### windowInfo

```ts

let window = new DragWindow({
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
    isScalable?: boolean
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
let next = new DragWindow({
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