# BrowserWindow
<!-- const enum WindowStateEnum {
    normal = 'normal',
    minimize = 'minimize',
    maximize = 'maximize',
    fullscreen = 'fullscreen'
}
type BrowserWindowContent = ReturnType<typeof defineComponent> | string
interface BrowserWindowConstructorOptions {
    title: string
    content: BrowserWindowContent,
    icon: string
    width: number
    height: number
    x: number
    y: number
    center: boolean
    resizable: boolean
}
interface WindowInfo extends BrowserWindowConstructorOptions {
    state: WindowStateEnum
    istop: boolean
    zindex: number
    isCreated: boolean
}
type BrowserWindowOption = Partial<Omit<BrowserWindowConstructorOptions,'content'>> & {content: BrowserWindowContent}
class BrowserWindow {
    public static defaultOption: Omit<BrowserWindowConstructorOptions, 'content'> = {
        title: "新窗口",
        width: 800,
        height: 600,
        icon: '',
        x: 0,
        y: 0,
        center: false,
        resizable: true,
    }
    public static defaultInfo: Omit<WindowInfo, keyof BrowserWindowConstructorOptions> = {
        state: WindowStateEnum.normal,
        istop: false,
        zindex: 0,
        isCreated: false,
    }
    readonly windowInfo: WindowInfo
    private _option: BrowserWindowConstructorOptions
    private _builtin: {
        previousState: WindowStateEnum
    }
    id: number
    content?: ReturnType<typeof defineComponent> | string
    constructor(option?: BrowserWindowOption, parent?: BrowserWindow) {
        this._option = Object.assign({}, BrowserWindow.defaultOption, option);

        if (typeof this._option.content !== "string") {
            this.content = markRaw(this._option.content);
        } else {
            this.content = this._option.content;
        }
        let rootState = useRootState();
        this.id = rootState.system.winnum;
        rootState.system.winnum++;

        this.windowInfo = reactive(Object.assign({},BrowserWindow.defaultInfo,this._option));

        this._builtin = {
            previousState: this.windowInfo.state,
        }

    }

    _setZindex() {
        this.windowInfo.zindex = 20 + useRootState().system.windowTree.findIndex(this,
            (val: Tree<BrowserWindow>) => { return val.value.isVisible() });
    }
    private _setState(state: WindowStateEnum) {
        this._builtin.previousState = this.windowInfo.state;
        this.windowInfo.state = state;
    }
    private _getWinInner() {
        let rootState = useRootState();
        return {
            width: rootState.system.info.screenWidth,
            height: rootState.system.info.screenHeight
        }
    }
    private _makeWindowNotOverSize() {// 使窗口不超过屏幕大小
        if (this.windowInfo) {
            if (this.windowInfo.resizable) {//只有可缩放窗口
                let { x, y, width, height } = this.windowInfo;
                let { width: winWidth, height: winHeight } = this._getWinInner();//获取窗口大小

                if (winWidth == 0 && winHeight == 0) {
                    return
                }
                if (x + width > winWidth) {
                    this.windowInfo.width = winWidth - x;
                }
                if (y + height > winHeight) {
                    this.windowInfo.height = winHeight - y;
                }
            }
        }
    }
    moveTop() {// 窗口置顶
        let rootState = useRootState();
        let tree = rootState.system.windowTree;
        let node = tree.findNode(this);
        if (node) {
            tree.removeChild(node);
            tree.addChild(this);
        }
        this._setZindex();
        const topWin = useRootState().system.topWindow;
        useRootState().system.topWindow = this;
        topWin?._setZindex();
    }
    show() {
        if (!this.windowInfo.isCreated) {
            let rootState = useRootState();
            rootState.system.windowTree.addChild(this);
            rootState.system.windowOrder.push(this);
            this.windowInfo.isCreated = true;
            if (this._option.center) {
                this.center();
            }
        }
        this._setZindex();
        this._makeWindowNotOverSize();// 使得窗口在生成时，不超过屏幕
        this.moveTop();
    }
    destroy() {// 销毁窗口
        // TODO:
        this.close();
    }
    close() {// 关闭窗口
        this.windowInfo.isCreated = false;
        let rootState = useRootState();
        rootState.system.windowOrder.splice(rootState.system.windowOrder.findIndex((val) => {
            return val === this;
        }), 1);
        rootState.system.windowTree.removeNode(this);
    }
    maximize() {// 最大化窗口
        this._setState(WindowStateEnum.maximize);
    }
    unmaximize() {// 取消最大化窗口
        this._setState(WindowStateEnum.normal);
    }
    minimize() {// 最小化窗口
        this._setState(WindowStateEnum.minimize);
    }
    isVisible() {// 判断窗口是否可见
        return this.windowInfo.isCreated;
    }
    isDestroyed() {// 判断窗口是否已经销毁
        return !this.windowInfo.isCreated;
    }
    isMaximized() {// 判断窗口是否最大化
        return this.windowInfo.state === WindowStateEnum.maximize;
    }
    isMaximizable() {// 判断窗口是否可以最大化
        return true;
    }
    isMinimized() {// 判断窗口是否最小化
        return this.windowInfo.state === WindowStateEnum.minimize;
    }
    isMinimizable() {// 判断窗口是否可以最小化
        return true;
    }
    isNormal() {// 判断窗口是否正常
        return this.windowInfo.state === WindowStateEnum.normal;
    }
    isResizable() {// 判断窗口是否可以改变大小
        return this.windowInfo.resizable;
    }
    /**
     * Moves window to the center of the screen.
     */
    center() {
        let { width, height } = this._getWinInner();
        this.windowInfo.x = (width - this.windowInfo.width) / 2;
        this.windowInfo.y = (height - this.windowInfo.height) / 2;
    }
    /**
     * Restores the window from minimized state to its previous state.
     */
    restore() {
        this.windowInfo.state = this._builtin.previousState;
    }
    setSize(width: number, height: number) {
        this.windowInfo.width = width;
        this.windowInfo.height = height;
    }
    /**
     * Contains the window's width and height.
     */
    getSize() {
        return [this.windowInfo.width, this.windowInfo.height];
    }
    setTitle(title: string) {
        this.windowInfo.title = title;
    }
    getTitle() {
        return this.windowInfo.title;
    }
    setPosition(x: number, y: number) {
        this.windowInfo.x = x;
        this.windowInfo.y = y;
    }
    getPosition() {
        return [this.windowInfo.x, this.windowInfo.y];
    }
} -->
## constructor

type:
    
```ts
constructor(option:{
    title?: string
    content: ReturnType<typeof defineComponent> | string,
    icon?: string
    width?: number
    height?: number
    x?: number
    y?: number
    center?: boolean
    resizable?: boolean
}):void
```

Create a new BrowserWindow instance.

usage:

```ts
import ContentVue from './content.vue';
const win = new BrowserWindow({
    title: 'test',
    content: ContentVue,
    icon: 'test',
    width: 100,
    height: 100,
    x: 100,
    y: 100,
    center: true,
    resizable: true
});
```

## id

type:
    
```ts
id:number
```

The id of the window.

usage:

```ts
const win = new BrowserWindow();
console.log(win.id);
```

## content

type:
    
```ts
content:ReturnType<typeof defineComponent> | string
```

The content of the window.

usage:

```ts
const win = new BrowserWindow();

```


## show

type:
    
```ts
show():void
```

Show the window.

usage:

```ts
const win = new BrowserWindow();
win.show();
```

## close

type:
    
```ts
close():void
```

Close the window.

usage:

```ts
const win = new BrowserWindow();
win.close();
```

## destroy

type:
    
```ts
destroy():void
```

Destroy the window.

usage:

```ts
const win = new BrowserWindow();
win.destroy();
```

## isVisible

type:
    
```ts
isVisible():boolean
```

Returns whether the window is visible to the user.

usage:

```ts
const win = new BrowserWindow();
console.log(win.isVisible());
```

## isDestroyed

type:
    
```ts
isDestroyed():boolean
```

Returns whether the window has been destroyed.

usage:

```ts
const win = new BrowserWindow();
console.log(win.isDestroyed());
```

## isMaximized

type:
    
```ts
isMaximized():boolean
```

Returns whether the window is maximized.

usage:

```ts
const win = new BrowserWindow();
console.log(win.isMaximized());
```

## isMaximizable

type:
    
```ts
isMaximizable():boolean
```

Returns whether the window is maximizable.

usage:

```ts
const win = new BrowserWindow();
console.log(win.isMaximizable());
``` 

## isMinimized

type:
    
```ts
isMinimized():boolean
```

Returns whether the window is minimized.

usage:

```ts
const win = new BrowserWindow();
console.log(win.isMinimized());
```

## isMinimizable

type:
    
```ts
isMinimizable():boolean
```

Returns whether the window is minimizable.

usage:

```ts
const win = new BrowserWindow();
console.log(win.isMinimizable());
```

## isNormal

type:
    
```ts
isNormal():boolean
```

Returns whether the window is in normal state.

usage:

```ts
const win = new BrowserWindow();
console.log(win.isNormal());
```

## isResizable

type:
    
```ts
isResizable():boolean
```

Returns whether the window is resizable.

usage:

```ts
const win = new BrowserWindow();
console.log(win.isResizable());
```

## center

type:
    
```ts
center():void
```

Moves window to the center of the screen.

usage:

```ts
const win = new BrowserWindow();
win.center();
```

## restore

type:
    
```ts
restore():void
```

Restores the window from minimized state to its previous state.

usage:

```ts
const win = new BrowserWindow();
win.restore();
```

## setSize

type:
    
```ts
setSize(width:number,height:number):void
```

Sets the window's size.

usage:

```ts
const win = new BrowserWindow();
win.setSize(100,100);
```

## getSize

type:
    
```ts
getSize():[number,number]
```

Returns the window's size.

usage:

```ts
const win = new BrowserWindow();
console.log(win.getSize());
```

## setTitle

type:
    
```ts
setTitle(title:string):void
```

Sets the window's title.

usage:

```ts
const win = new BrowserWindow();
win.setTitle('title');
```

## getTitle

type:
    
```ts
getTitle():string
```

Returns the window's title.

usage:

```ts
const win = new BrowserWindow();
console.log(win.getTitle());
```

## setPosition

type:
    
```ts
setPosition(x:number,y:number):void
```

Sets the window's position.

usage:

```ts
const win = new BrowserWindow();
win.setPosition(100,100);
```

## getPosition

type:
    
```ts
getPosition():[number,number]
```

Returns the window's position.

usage:

```ts
const win = new BrowserWindow();
console.log(win.getPosition());
```

## maximize

type:
    
```ts
maximize():void
```

Maximizes the window.

usage:

```ts
const win = new BrowserWindow();
win.maximize();
```

## minimize

type:
    
```ts
minimize():void
```

Minimizes the window.

usage:

```ts
const win = new BrowserWindow();
win.minimize();
```

## setResizable

type:
    
```ts
setResizable(resizable:boolean):void
```

Sets whether the window is resizable.

usage:

```ts
const win = new BrowserWindow();
win.setResizable(true);
```

## setMaximizable

type:
    
```ts
setMaximizable(maximizable:boolean):void
```

Sets whether the window is maximizable.

usage:

```ts
const win = new BrowserWindow();
win.setMaximizable(true);
```

## setMinimizable

type:
    
```ts
setMinimizable(minimizable:boolean):void
```

Sets whether the window is minimizable.

usage:

```ts
const win = new BrowserWindow();
win.setMinimizable(true);
```



