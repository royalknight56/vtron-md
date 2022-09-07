<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-09-01 16:56:13
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
system.ClearDesktop()
```
用于清空桌面图标，

    建议在AddToDesktop之前使用ClearDesktop，防止开发时热更新导致图标越来越多

## AddToStartupList

用法同AddToDesktop，添加到开始菜单的列表中
## ClearStartupList

用法同ClearDesktop，清空开始菜单的列表
## AddToMagnet

用法同AddToDesktop，添加到开始菜单的磁贴中

## ClearMagnet

用法同ClearDesktop，清空开始菜单的磁贴