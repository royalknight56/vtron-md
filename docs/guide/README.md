<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-07-15 10:46:55
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/guide/README.md
-->


<!-- # Usage -->
# 开发流程

## 安装

1. 安装vue3-win10

> npm install vue3-win10 --save

## 引入插件

2. 在vue中use插件

通过'vue3-win10'引入插件
```js
import win10 from 'vue3-win10';
```
引入样式文件"vue3-win10/distlib/style.css"

```js
import "vue3-win10/distlib/style.css"
```

use

```js
import { createApp } from 'vue'
import App from './App.vue'
import win10 from 'vue3-win10';
import "vue3-win10/distlib/style.css"

createApp(App).use(win10).mount('#app')
```

## 引入组件

首先，我们需要创建一个system对象，这个对象管理着系统的所有状态信息。

一般来说，我们创建另一个文件，存放system对象
```ts
// system.ts
import { System } from "vue3-win10";
let system = new System({});
export {
  system
}
```

3. 在页面中引入Win10组件
 
```vue
// App.vue
<Win10 :system="system"></Win10>
<script setup>
import { system } from './system'
</script>
```

这里需要传入system对象，这样，Win10组件就可以获取到系统的所有状态信息。

此步骤之后，run dev已经可以看到win10启动了


## 样式

4. 控制屏幕🖥大小

在组件外围包裹一个outer

```html
  <div class="outer">
    <Win10 :system="system"></Win10>
  </div>
```
定义outer样式
  
```html
<style scoped>
.outer {
  width: 100vw;
  height: 100vh;
}
</style>
```
这样就是占据全部页面显示

## 第一个应用

4. 在apps文件夹下新建vue文件，主要在此文件夹中编写窗口内容（非必须）

### 新建Vue文件

新建一个默认vue文件，随便写上什么--helloworld

```vue
<template>
    Hello World
</template>
<script lang="ts" setup>
</script>
```


### 添加到桌面

将新建到vue应用添加到桌面

使用AddToDesktop函数

先在App.vue中引入system

```ts
import { system } from './system'
```

之后接着引入新建的vue组件，和一个图标素材

```ts
import Test1 from "./apps/Test1.vue"
import computericon from "./assets/computer.ico"
```

之后使用system.AddToDesktop函数将应用添加到桌面，之后点击桌面到图标就会打开刚才写好到vue组件

```ts
system.AddToDesktop({
  name: '我的电脑',
  icon: computericon,
  window: system.DragWindow({
      title: '我的电脑',
      icon: computericon,
      content: Test1
    })
});
```
这里name是应用的名称，icon是应用的图标素材链接，之后传入window来设置点开后打开的窗口。

这样，运行vue之后，双击桌面的应用图标，就会显示出刚才写好的vue页面。

<ClientOnly>
  <win10apphello />
</ClientOnly>


## 新建窗口

当需要打开一个对话框，或者其他页面时，可以使用DragWindow函数

```ts
let window = system.DragWindow({
      title: '浏览器',
      icon: brow,
      width: 600,
      height: 500,
      x:0,
      y:0,
      content: Test3
    })
```
参数分别是
|  名称   | 含义  |
|  ----  | ----  |
| x  | 左上角位置坐标x |
| y  | 左上角位置坐标y |
| title  | 窗口名称 |
| icon  | 窗口图标 |
| width  | 窗口宽度 |
| height  | 窗口高度 |
| content  | 窗口内容 |

在app参数项中的content属性传入vue组件，就可以打开以这个组件为内容的窗口

这时，调用对象的show方法，就可以展示出新的窗口

```ts
window.show()
```
