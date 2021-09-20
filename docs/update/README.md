<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-20 20:54:21
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/update/README.md
-->


<!-- # Usage -->
# 更新 
由于目前版本在1.0以下，所以版本不稳定，有可能会发生较大的变化
## 最新npm版本 0.1.2

#### DragWindow onWindowEvent
```ts
onWindowEvent(name:windowEventsName,event: Function) 

type windowEventsName = "onResize"|"beforeDestory"|"afterDestory"|"beforeHide"|"afterHide"|"onTop";

```
监听窗口事件

此接口只能监听创建的窗口的事件
#### WindowIPC addWindowEventListener
```ts
addWindowEventListener(id:string,name:windowEventsName,func:Function)
WindowIPC.getInstance().addWindowEventListener(props.id,'onResize',()=>{ console.log('resize')})
```
监听窗口事件

使用此API可以监听任意id窗口的事件，只要获取到id

## npm版本 0.1.1
更新内容:

#### 重要：DragWindow类行为变化

在这个版本中，DragWindow会返回一个窗口对象，可以通过这个对象监听事件

```ts
let after = new DragWindow(100, 100, "test",icon, 100, 100, {content:TestLoadafterVue})
after.show()
after.onWindowResizing((x,y)=>{ console.log(x,y) })
```

现在，DragWindow.show调用之后才会显示窗口

现在，可以调用onWindowResizing来监听窗口的大小变化事件
#### AddToDesktop使用方式变更
before:
```ts
AddToDesktop({
  name: '我的电脑',
  icon: computericon,
  apptemp:'Test1',//ERROR
  width: 400,
  height: 400,
  tmp: Test1
});
```

after:
```ts
AddToDesktop({
  name: '我的电脑',
  icon: computericon,
  window: new DragWindow(0, 0, '我的电脑', computer, 400, 400, { content: Test1 })
});
```
因为随着DragWindow类的变化，这里直接使用DragWindow来指示桌面图标要打开的窗口

#### 模版中获取ID
before:
```ts
let props = defineProps({
  ctx:{
    type:Object as PropType<PageItem>
  }
})
```
after:
```ts
let props = defineProps({
  id:{
    type:String
  }
})
```
在模版中，只需要获取到id，就可以通过WindowIPC来获取到自身到其他属性

## npm版本 0.1.0
更新内容:

废弃 apptemp 属性

before:
```ts
AddToDesktop({
  name: '我的电脑',
  icon: computericon,
  apptemp:'Test1',//ERROR
  width: 400,
  height: 400,
  tmp: Test1
});
```
after:
```ts
AddToDesktop({
  name: '我的电脑',
  icon: computericon,
  width: 400,
  height: 400,
  tmp: Test1
});
```