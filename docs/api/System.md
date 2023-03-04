<!-- class System {
    private _options: SystemOptions;
    private _rootState: RootState;
    private _eventer: Eventer;
    private _ready: ((value: System) => void) | null = null;
    private _error: ((reason: unknown) => void) | null = null;
    ref!: HTMLElement;
    constructor(options?: SystemOptions) {
        this._options = this.initOptions(options);
        this._rootState = this.initRootState(options);
        this._eventer = this.initEvent(options);
        this.initApp(options);
        this.initSystem(options);

        this.setRef(this._rootState.ref!);
    }
    setRef(ref: HTMLElement) {
        this.ref = ref;
    }
    /**
     * @description: pure 初始化配置选项
     */
    private initOptions(options?: SystemOptions) {
        let tempOptions = Object.assign({
            logo: "default",
            background: "default"
        }, options);
        // TODO: 处理 backkground的纯色和图片
        return tempOptions;
    }
    /**
     * @description: 获取系统配置
     */
    private initRootState(options?: SystemOptions): RootState {
        return initRootState(this._options);
    }
    /**
     * @description: 初始化系统
     */
    private initSystem(options?: SystemOptions) {
        /**
         * 过程：激活屏幕，桥接事件。
         */
        initEventListener();
        this._ready?.(this);
        this._rootState.system.state = SystemStateEnum.open;
        setTimeout(() => {
            this._rootState.system.state = SystemStateEnum.open;
        }, 1000);
        GLOBAL_SYSTEM = this;
    }
    /**
     * @description: 初始化事件系统
     */
    private initEvent(options?: SystemOptions) {
        /**
         * 过程：监听事件，处理事件
         */
        return initEventer();
    }
    /**
     * @description: 初始化应用
     */
    private initApp(options?: SystemOptions) {
        /**
         * 过程：挂载应用
         */
    }
    /**
     * @description: 添加应用
     */
    addApp(options:Partial<WinApp>) {
        this._rootState.system.apps.push(options);
    }
    addMagnet(options:Partial<WinApp>) {
        this._rootState.system.magnet.push(options);
    }
    addMenuList(options:Partial<WinApp>) {
        this._rootState.system.menulist.push(options);
    }
    /**
     * @description: 移除应用
     */
    removeApp() {

    }
    whenReady(): Promise<System> {
        if(this._rootState.system.state === SystemStateEnum.open){
            return Promise.resolve(this);
        }
        return new Promise<System>((resolve, reject) => {
            this._ready = resolve;
            this._error = reject;
            this._ready?.(this);
        })
    }
    shutdown() {
        this._rootState.system.state = SystemStateEnum.close;
    }
    reboot() {
        this._rootState.system.state = SystemStateEnum.open;
    }
}
function useSystem() {
    return GLOBAL_SYSTEM;
}
export { System, useSystem }; -->

# System

## constructor

```typescript
constructor(options?: SystemOptions)
```

### Usage

```typescript
import { System } from "vtron";
const system = new System();
```


## addApp

add app to system

添加app到桌面图标

```typescript
addApp(options:Partial<WinApp>)

interface WinApp {
    name?:string;
    icon?:string;
    url?:string;
    window?: BrowserWindow
}
```

Usage:

```typescript
import { System } from "vtron";
const system = new System();

system.addApp({
    name:"string";
    icon:"string";
    window:new BrowserWindow(
        //...
    )
})
```

## addMagnet

add app to Magnet

添加app到磁贴

用法同 addApp

## addMenuList

add app to MenuList

添加app到菜单栏

用法同 addApp

## whenReady

```typescript
whenReady(): Promise<System>
```

Usage:

```typescript
import { System } from "vtron";
const system = new System();

system.whenReady().then((system)=>{
    //...
})
```

## shutdown

```typescript
shutdown()
```

Usage:

```typescript
import { System } from "vtron";
const system = new System();

system.shutdown();
```

## reboot

```typescript
reboot()
```

Usage:

```typescript
import { System } from "vtron";
const system = new System();

system.reboot();
```

