<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-11-30 10:58:33
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
用于清空桌面图标


# Class 类

## DragWindow

引入DragWindow类
构造对象，使用后会创建一个窗口，可以在之后将其加入到桌面或者直接打开（show）

```js
import {DragWindow} from 'vue3-win10'
import Help from './apps/Help.vue';
import appicon from "./assets/appicon.png"

new DragWindow(100,100,'关于',appicon,200,100,{content:Help})

```

DragWindow参数：

```ts
interface ctxPar{
    content:ReturnType<typeof defineComponent>,
    props?:any
}

DragWindow(x:number,y:number,title:string,icon:string|null,width:number,height:number,ctxpar:ctxPar,use:Array)

```

|  名称   | 含义  |
|  ----  | ----  |
| x  | 左上角位置坐标x |
| y  | 左上角位置坐标y |
| title  | 窗口名称 |
| icon  | 窗口图标 |
| width  | 窗口宽度 |
| height  | 窗口高度 |
| ctxPar  | 窗口的选项 |
| use  | 需要使用到的插件 |

```js
ctxPar:{
    content:ReturnType<typeof defineComponent>,//:窗口的vue对象
    props?:any//:传递给vue对象的props
}
```

usage:
```js
new DragWindow(0, 0, 'Admin后台管理',appicon, 300, 400, { content: AdmVue }, [ElementPlus])
```
### onWindowResizing(即将废弃)
onWindowResizing(event: (x: number, y: number) => void): void;
用于监听窗口的大小变化事件

usage:

```ts
let next = new DragWindow(0, 0, '窗口通信',beatico, 300, 400, { content: AdmVue},[ElementPlus])
next.show()
next.onWindowResizing((x,y)=>{ console.log(x,y) })
```
### onWindowEvent
```ts
onWindowEvent(name:windowEventsName,event: Function) 

type windowEventsName = "onResize"|"beforeDestory"|"afterDestory"|"beforeHide"|"afterHide"|"onTop";

```
监听窗口事件

此接口只能监听创建的窗口的事件

### show
show(): void;
使窗口显示，不调用此函数，则窗口不会显示

usage:

```ts
let next = new DragWindow(0, 0, '窗口通信',beatico, 300, 400, { content: AdmVue},[ElementPlus])
next.show()
```

## MenuIPC

这个类是单例模式，用于管理右键菜单（弹出菜单）。在引入MenuListVue组件后，可以在屏幕上调出菜单

调用类的静态成员函数getInstance获取实例

```js
MenuIPC.getInstance():WindowIPC
```
#### 实例属性：


----

#### 成员函数：

### callMenu

```ts
callMenu(x:number,y:number,list:UnwrapNestedRefs<Array<menuItem>>)
```

|  名称   | 含义  |
|  ----  | ----  |
| x  | 左上角位置坐标x |
| y  | 左上角位置坐标y |
| list  | 选项菜单数组 |

```ts
interface menuItem{
    name:string,
    func:Function
}
```
usage:
```ts
MenuIPC.getInstance().callMenu(e.pageX, e.pageY,
        [
            { name: '关机', func: () => { 
                console.log("关机"); computerCTC.getInstance().closePower() } },
            { name: '重启', func: () => { 
                console.log("重启"); computerCTC.getInstance().restartPower() } }

        ]
    )
```

## WindowIPC

这个类是单例模式，用于集中管理窗口的状态信息。储存了窗口的状态HashMap

调用类的静态成员函数getInstance获取实例

```js
WindowIPC.getInstance():WindowIPC
```
#### 实例属性：

```ts
pageMap: UnwrapNestedRefs<pageMapInter>;//窗口的hashMap
```
#### 成员函数：

### addWindowEventListener
```ts
addWindowEventListener(id:string,name:windowEventsName,func:Function)
```
监听一个窗口事件

id是窗口id可以通过props获取
usage:
```ts
WindowIPC.getInstance().addWindowEventListener(props.id,'onResize',()=>{ console.log('resize')})
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


## computerCTC

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
let props = defineProps({
    id: {
        type:String,
        default:''
    }
})
```
在app窗口中接收，可以通过id来获取到窗口到信息