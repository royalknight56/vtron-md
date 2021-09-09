<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-09 11:07:48
 * @Description: 
 * @FilePath: /vue3-win10-md/docs/update/README.md
-->


<!-- # Usage -->
# 更新 

## 最新npm版本 0.1.0

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