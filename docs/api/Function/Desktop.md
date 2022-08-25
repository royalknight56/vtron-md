<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-07-14 20:06:42
 * @Description: 
-->
# Desktop
## AddToDesktop

```ts
interface appInfo{
    name: string;
    icon: string;
    window: DragWindow;
}

system.AddToDesktop(app:appInfo)
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
system.ClearDesktop()
```
用于清空桌面图标，

    建议在AddToDesktop之前使用ClearDesktop，防止开发时热更新导致图标越来越多
