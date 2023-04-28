# Path

path用于在浏览器端处理文件系统的路径，它们不依附于system，是纯函数，所以引用方式有一定的变化

## basename

获取指定路径的文件名

```typescript
basename(path: string): string;

import { basename } from "vtron";
basename("path/to/file") // file
```

## join

拼接多个路径

```typescript
join(...paths: string[]): string;

import { join } from "vtron";
join("path/to","file") // path/to/file
join("path/to","/file") // path/to/file
join("path/to/file",'..') // path/to
```
