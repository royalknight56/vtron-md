<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-08-25 10:22:33
 * @Description: 
-->
# DWM

用于集中管理窗口的状态信息。储存了窗口的状态HashMap


```js
system.DWM:DWM
```

#### 成员函数：

### getWindow

```ts

getWindow(id: string): DragWindow

// usage
let window= system.DWM.getWindow(winId)
```
获得一个窗口


