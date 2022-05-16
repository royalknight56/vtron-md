<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-05-16 14:32:41
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/update/README.md
-->


<!-- # Usage -->
# 更新 
由于目前版本在1.0以下，所以版本不稳定，有可能会发生较大的变化
## npm版本 0.2.5

DragWindow的content可以使用链接

## npm版本 0.2.4

更换为浅色主题

去除本地配置功能

磁贴光效

样式改进

## npm版本 0.2.3

添加按钮配置，可以选择右上角按钮。

添加刷新按钮。

## npm版本 0.2.3

添加按钮配置，可以选择右上角按钮。

添加刷新按钮。


## npm版本 0.2.2

支持系统锁屏页面

系统设置页面可以对设置进行改动

config在设置中会被本地存储

修复在最大化时窗口位置会被拖动的bug

修复火狐浏览器下背景图片会被拖动的bug

优化样式，样式进行隔离

优化窗口样式，创建窗口的堆叠上下文

优化DWM的成员函数可访问性

## npm版本 0.2.1
在tailwindcss框架下使用时，样式会被污染，现在对部分样式进行适配,进行了样式reset

## npm版本 0.2.0
新增Notify功能。可在右下角显示提示信息。

## npm版本 0.1.9
贴边吸附

默认图标
## 过早版本

### npm版本 0.1.8

#### 0.1.8-beta.4

SystemState可以挂载解锁事件，并根据密码控制是否解锁

mountUnlockEvent


#### MenuCtrl调用方式

```ts
callMenu(e:MouseEvent)
MenuCtrl.getInstance().callMenu(e,
        [
            { name: '关机', func: () => { 
                console.log("关机"); } },
            { name: '重启', func: () => { 
                console.log("重启");  } }
        ]
    )
```
传入mouseevent即可

#### 锁屏功能

可在项目配置项中设置 login，

#### 可以配置新建的窗口是否为可缩放的

isScalable?:boolean


### npm版本 0.1.6

0.1.6 变化较大

#### MenuIPC -> MenuCtrl

MenuIPC 命名更改为 MenuCtrl

#### computerCTC -> SystemState

computerCTC 命名更改为 SystemState

#### WindowIPC -> DWM

WindowIPC 命名更改为 DWM(Desktop Windows Manager)

#### DragWindow

DragWindow调用方式更改

after:
```ts
new DragWindow({
      title: '浏览器',
      icon: brow,
      width: 600,
      height: 500,
      x:0,
      y:0,
      content: Test3
    })
```

before:
```ts
new DragWindow(0, 0, 'Admin后台管理',computericon, 300, 400, { content: AdmVue},[ElementPlus])
```


#### 模版中获取ID
before:
```ts
let props = defineProps({
  id:{
    type:String
  }
})
```
after:
```ts
let winId = <string>inject('windowId')
```
在模版中，只需要获取到id，就可以通过DWM来获取到自身到其他属性



### npm版本 0.1.5

增加backimg配置项，可选择设置桌面背景
```js
import backimg from "./assets/back.jpg"
backimg:backimg,
```


### npm版本 0.1.4

增加start_menu_logo配置项，可选择设置左下角开始菜单logo

新修复：
适配移动端
磁贴底部降级适配

### npm版本 0.1.3

vue支持3.2

### npm版本 0.1.2

#### DragWindow onWindowEvent
```ts
onWindowEvent(name:windowEventsName,event: Function) 

type windowEventsName = "onResize"|"beforeDestory"|"afterDestory"|"beforeHide"|"afterHide"|"onTop";

```
监听窗口事件

此接口只能监听创建的窗口的事件
#### DWM addWindowEventListener
```ts
addWindowEventListener(id:string,name:windowEventsName,func:Function)

DWM.getInstance().addWindowEventListener(props.id,'onResize',()=>{ console.log('resize')})
```
监听窗口事件

使用此API可以监听任意id窗口的事件，只要获取到id
#### Bugs

双击事件问题

### npm版本 0.1.1
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
    type:Object as PropType<WindowInfo>
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
在模版中，只需要获取到id，就可以通过DWM来获取到自身到其他属性

### npm版本 0.1.0
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