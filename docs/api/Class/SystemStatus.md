<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-04-26 14:51:48
 * @Description: 
-->
# SystemState

这个类是单例模式，用于管理计算机状态

调用类的静态成员函数getInstance获取实例

#### 成员函数：

### closePower

```ts
closePower()
```
关机，屏幕会黑屏，刷新页面才会重新显示

### openPower

```ts
openPower()
```
开机，屏幕亮起，载入loading页面，之后进入主页面

### restartPower

```ts
restartPower()
```
重启，屏幕黑屏后，页面刷新reload

### mountUnlockEvent

```ts
mountUnlockEvent(name:string,fun:Function)
```
挂载一个解锁事件，当用户输入锁屏解锁密码之后，会在fun中接收到
