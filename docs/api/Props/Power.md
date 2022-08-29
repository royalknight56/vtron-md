<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-08-29 14:49:12
 * @Description: 
-->
# Power

用于管理计算机状态


#### 成员函数：

### closePower

```ts
closePower()
```
关机，屏幕会黑屏，刷新页面才会重新显示

usage
```ts
system.Power.closePower()
```

### openPower

```ts
system.Power.openPower()
```
开机，屏幕亮起，载入loading页面，之后进入主页面

### restartPower

```ts
system.Power.restartPower()
```
重启，屏幕黑屏后，页面刷新reload

<!-- ### mountUnlockEvent

```ts
mountUnlockEvent(name:string,fun:Function)
```
挂载一个解锁事件，当用户输入锁屏解锁密码之后，会在fun中接收到 -->
