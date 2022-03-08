<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-08 16:03:43
 * @Description: 
-->
# MenuCtrl

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
