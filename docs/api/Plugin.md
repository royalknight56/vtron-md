# Plugin

Vtron可以通过多种方式进行扩展！

在系统启动的时候，都会去读取/C/System/plugs目录下的文件

之后会使用shell运行每个文件。

```js
function main(system){
    console.log(system)
}
```
这样，就可以通过添加plug下的文件，调用system的方法来扩展功能。


## 插件开发指南

TODO