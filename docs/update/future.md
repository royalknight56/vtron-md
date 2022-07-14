<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-07-14 11:18:23
 * @Description: 
-->
## npm版本 0.3.1

先行抽出System类，但不需要传入组件

## npm版本 0.3.2



## npm版本 0.4.0

AddToDesktop
ClearDesktop
更改！

System类，

<Win10 :system="system"></Win10>

System{
  SystemState:系统状态，代替原SystemState
  Desktop:桌面图标，代替原AddToDesktop
}

<!-- system.DragWindow; -->
```js
DragWindow
system.ContextMenu;
system.DWM;
system.Notify;
system.SystemState;

system.Desktop;

let a = new system.DragWindow({
  center: true,
  resizable: true,
  movable: true,
  minimizable: true,
  maximizable: true,
  closable: true,
});
a.show();
a.hide();

system.ContextMenu.popup(e,[
  {
    label: '红色',
    click: ()=>{}
  }
]);

system.DWM.getWindowInfo();

system.Notify.notify({
  title: 'My notification',
  message: 'Hello, there!'
})

system.SystemState.closePower();
```

使用方法：

```ts
let system = new System();
system.Desktop.list=[{
    name: string;
    icon: string;
    window: DragWindow;
},{
    name: string;
    icon: string;
    window: DragWindow;
}];

```


## npm版本 0.5.0

0.4版本侧重点：窗口的electron化

