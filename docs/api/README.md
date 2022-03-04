<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-04 17:20:24
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/api/README.md
-->
# Component 组件

<span style="color:#999;text-align:center">
建议在单独页面中加入以下组件
</span>

```html
<Win10></Win10>
```
# Function 函数

## AddToDesktop

```ts
interface appInfo{
    name: string;
    icon: string;
    window: DragWindow;
}

AddToDesktop(app:appInfo)
```
将一个app添加到桌面图标中

```ts
appInfo:{
    name: 标题,
    icon:图标素材,
    window:打开的窗口
}

```

## ClearDesktop

```ts
ClearDesktop()
```
用于清空桌面图标，

    建议在AddToDesktop之前使用ClearDesktop，防止开发时热更新导致图标越来越多


# Class 类

## DragWindow

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
      content: Test3
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
    isScalable?:boolean
}

DragWindow(option: option, use?: any)

```

|  名称   | 含义  | 默认值 |
|  ----  | ----  | ----  |
| content  | 窗口内容，是一个引入的vue组件 | 必须 |
| props  | 可以传递给窗口的一些属性 | - |
| x  | 左上角位置坐标x | 0 |
| y  | 左上角位置坐标y | 0 |
| width  | 窗口宽度 |400 |
| height  | 窗口高度 |400   |
| title  | 窗口名称 | '未命名窗口' |
| icon  | 窗口图标 |'' |
| isScalable  | 窗口是否为可缩放 |true |


usage:
```js
new DragWindow({
      title: '浏览器',
      icon: brow,
      width: 600,
      height: 500,
      x:0,
      y:0,
      content: Test3
    })
```
### windowInfo

```ts

let window = new DragWindow({
      title: '浏览器',
      icon: brow,
      width: 600,
      height: 500,
      x:0,
      y:0,
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

## MenuCtrl

这个类是单例模式，用于管理右键菜单（弹出菜单）。可以在屏幕上调出菜单

调用类的静态成员函数getInstance获取实例

```js
MenuCtrl.getInstance():MenuCtrl
```
#### 实例属性：


----

#### 成员函数：

### callMenu

```ts
callMenu(e: MouseEvent,list:UnwrapNestedRefs<Array<menuItem>>)
```

|  名称   | 含义  |
|  ----  | ----  |
| e  | 点击的鼠标事件 |
| list  | 选项菜单数组 |

```ts
interface menuItem{
    name:string,
    func:Function
}
```
usage:
```ts
MenuCtrl.getInstance().callMenu(e,
        [
            { name: '关机', func: () => { 
                console.log("关机"); computerCTC.getInstance().closePower() } },
            { name: '重启', func: () => { 
                console.log("重启"); computerCTC.getInstance().restartPower() } }

        ]
    )
```

## DWM

这个类是单例模式，用于集中管理窗口的状态信息。储存了窗口的状态HashMap

调用类的静态成员函数getInstance获取实例

```js
DWM.getInstance():DWM
```
#### 实例属性：

```ts
windowInfoMap: UnwrapNestedRefs<windowInfoMapInter>;//窗口的hashMap
```
#### 成员函数：

### getWindow

```ts

DWM.getWindow(id: string): WindowInfo

let windowInfo= DWM.getInstance().getWindow(winId)
```
获得一个窗口的信息


### addEventListener
```ts
addEventListener(id:string,name:windowEventsName,func:Function)
```
监听一个窗口事件

id是窗口id可以通过inject获取

usage:

```ts
DWM.getInstance().addEventListener(id,'onResize',()=>{ console.log('resize')})
```
### upSetWindowIndex
```ts
upSetWindowIndex(id: string):number
```
将窗口移动到顶层


### hideWindow

```ts
hideWindow(id: string)
```
最小化一个窗口

### showWindow

```ts
showWindow(id: string)
```
显示窗口

### destoryWindow

```ts
destoryWindow(id: string)
```
销毁窗口


### on

```ts
on(ev:string,func:Function)
```
注册一个事件

### emit

```ts
emit(ev:string,...args:any)
```
触发一个事件

## Notify
弹出右下角提示

调用方式

```ts
import { Notify } from "vue3-win10";
new Notify('title',"testtest")
```
```ts
constructor(title:string,messages:string)
```
## SystemStatus

这个类是单例模式，用于管理计算机状态

调用类的静态成员函数getInstance获取实例

#### 成员函数：

### closePower

```ts
closePower()
```
关机，屏幕会黑屏，刷新页面才会重新显示

### openPower

```ts
openPower()
```
开机，屏幕亮起，载入loading页面，之后进入主页面

### restartPower

```ts
restartPower()
```
重启，屏幕黑屏后，页面刷新reload


# Props 窗口属性

## id

```ts
// TS 
let winId = <string>inject('windowId')
```
在app窗口中接收，可以通过id来获取到窗口到信息