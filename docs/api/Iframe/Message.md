# Message
通过通信机制，可以实现iframe中的网页控制窗口的行为，例如最大化，最小化，关闭等。

## 通信机制
首先，需要在iframe中添加一个监听事件，用于接收消息
```js
let winid = 0;
window.addEventListener('message', function (e) {
    if (e.data.action === 'init') {
      winid = e.data.id
    }
}, false)
```
在窗口初始化之后，主应用会向iframe中的窗口发送消息

格式为：

```js
{
  action: 'init',
  id: '窗口id'
}
```

这是用来初始化的，传递窗口id给iframe中的窗口，以便iframe中的窗口可以通过id来控制窗口

获取到id之后，就可以向父窗口发送消息。来控制DragWindow

例子：

```js
    window.parent.postMessage(
      {
        action:'setPosition',
        id:winid,
        args:[10,300]
      }
      ,'*');
```
通过以上的消息，可以控制本iframe中的窗口的位置。

这里需要携带id。

可以执行的action种类即为DragWindow的方法。

args可以传递参数，参数的个数和类型与DragWindow的方法一致。