<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-08 16:09:14
 * @Description: 
-->
# DWM

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
