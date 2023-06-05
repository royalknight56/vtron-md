# 常见问题

## Screen是什么

Screen 是用来显示系统状态的，现在已经改为整个vue实例只有一个system类型，所以，在这个vue实例中的system的状态，都会展示在screen组件中。

## 为什么创建了BrowserWindow，但是没有显示出来

创建BrowserWindow后，需要调用BrowserWindow的show方法，才会显示出来。

## 为什么访问不了system的一些属性

system需要在ready之后，所有的功能才能生效。

尝试在ready之后，再去访问system的属性。

使用system的 whenReady 方法，

```js
system.whenReady().then(() => {
  // 在这里访问system的属性
})
```
## 怎么调用右键菜单

详见 api/event/contextMenu.show

通过手动触发contextMenu事件，传入鼠标事件，和自定义菜单，触发右键菜单。

## 怎么在窗口内部获取browserWindow实例

通过inject注入browserWindow实例

```ts
import { BrowserWindow } from "vtron";
let browserWindow = inject<BrowserWindow>('browserWindow');
```

## 怎么访问系统文件

使用文件系统，详见api/fs

## 怎么让无边框窗口可以拖动

调用vtron导出的makeDragable 方法

在无边框窗口内部，当窗口mount之后，makeDragable传入可以拖动的元素，和browserWindow实例，就可以让窗口可以拖动了。

```js
onMounted(()=>{
    if(handle.value && browserWindow){
        makeDragable(handle.value,browserWindow)
    }
})
```

## 是否可以使用win样式的组件

可以，我们导出了一些已经封装好的组件

可以从vtron中导入：
WinButtonVue,WinSelect,WinInput 

## 系统恢复是什么意思

恢复是指清空localStorage，和indexeddb（即文件系统）。

系统会被标记为isFirstRun。

## 文件系统是怎么实现的

是通过indexeddb实现的，详见api/fs，所以，一般的刷新不会清空文件系统，想要修复文件系统，可以使用恢复系统。

## 为什么窗口内容传入url，打不开，页面是错误

因为有的网站开启了 x-frame-options，所以，无法在iframe中打开。
