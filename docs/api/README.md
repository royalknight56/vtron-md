<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-20 17:33:44
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/api/README.md
-->
## Component 组件

<span style="color:#999;text-align:center">
建议在单独页面中加入以下组件
</span>

```html
<Win10></Win10>
```

## Function 函数

### AddToDesktop

```ts
interface appInfo{
    name: string,
    apptemp: string,
    icon:string,
    width:number,
    height:number,
    tmp:ReturnType<typeof defineComponent>
}

AddToDesktop(app:appInfo)
```
将一个app添加到桌面图标中

```ts
appInfo:{
    name: 标题,
    apptemp: --已废弃属性--,
    icon:图标素材,
    width:窗口打开宽度,
    height:窗口打开高度,
    tmp:引入的Vue文件
}

```

### ClearDesktop

```ts
ClearDesktop()
```
用于清空桌面图标


## Class 类

### DragWindow

引入DragWindow类
构造对象，使用后会在屏幕上显示一个窗口

```js
import {DragWindow} from 'vue3-win10'
import Help from './apps/Help.vue';
new DragWindow(100,100,'关于',200,100,{content:Help})

```

DragWindow参数：

```ts
interface ctxPar{
    content:ReturnType<typeof defineComponent>,
    props?:any
}

DragWindow(x:number,y:number,title:string,width:number,height:number,ctxpar:ctxPar,use:Array)

```

|  名称   | 含义  |
|  ----  | ----  |
| x  | 左上角位置坐标x |
| y  | 左上角位置坐标y |
| title  | 窗口名称 |
| width  | 窗口宽度 |
| height  | 窗口高度 |
| app  | 窗口的选项 |
| use  | 需要使用到的插件 |

```js
ctxPar:{
    content:ReturnType<typeof defineComponent>,//:窗口的vue对象
    props?:any//:传递给vue对象的props
}
```

usage:
```js
new DragWindow(0, 0, 'Admin后台管理', 300, 400, { content: AdmVue }, [ElementPlus])
```

### MenuIPC

这个类是单例模式，用于管理右键菜单（弹出菜单）。在引入MenuListVue组件后，可以在屏幕上调出菜单

调用类的静态成员函数getInstance获取实例

```js
MenuIPC.getInstance():WindowIPC
```
#### 实例属性：


----

#### 成员函数：

##### callMenu

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

### WindowIPC

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


#### registerWindow (new DragWindow时调用此方法)
```ts
registerWindow(id: string, title: string):PageItem 
```
注册一个窗口，需要id，标题

返回PageItem

PageItem：
```ts
interface PageItem {
    id: string,
    wid: number,
    title: string,
    zindex: number,
    ifShow: boolean,
    iftop: boolean,
    ifDestory: boolean,
    ifMax:boolean,
    width:number,
    height:number,
    content:DefineComponent<{}, {}, any>,
    props:any,
    appPointer: App|null
}
```

#### upSetWindowIndex
```ts
upSetWindowIndex(id: string):number
```
将窗口移动到顶层


#### hideWindow

```ts
hideWindow(id: string)
```
最小化一个窗口

#### showWindow

```ts
showWindow(id: string)
```
显示窗口

#### destoryWindow

```ts
destoryWindow(id: string)
```
销毁窗口


#### on

```ts
on(ev:string,func:Function)
```
注册一个事件

#### emit

```ts
emit(ev:string,...args:any)
```
触发一个事件


### computerCTC

这个类是单例模式，用于管理计算机状态

调用类的静态成员函数getInstance获取实例

#### 成员函数：

#### closePower

```ts
closePower()
```
关机，屏幕会黑屏，刷新页面才会重新显示

#### openPower

```ts
openPower()
```
开机，屏幕亮起，载入loading页面，之后进入主页面

#### restartPower

```ts
restartPower()
```
重启，屏幕黑屏后，页面刷新reload



