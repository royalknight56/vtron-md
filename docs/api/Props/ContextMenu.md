<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-08-25 10:15:04
 * @Description: 
-->
# ContextMenu

用于管理右键菜单（弹出菜单）。可以在屏幕上调出菜单


```js
system.ContextMenu
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
    click:Function
}
```
usage:
```ts
system.ContextMenu.callMenu(e,
        [
            { name: '关机', click: () => { 
                console.log("关机"); system.Power.closePower() } },
            { name: '重启', click: () => { 
                console.log("重启"); system.Power.restartPower() } }

        ]
    )
```
