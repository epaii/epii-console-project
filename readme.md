# epii-console 使用教程

### node输出日志展示在浏览器控制台上


### 安装方式

`npm i epii-console -S`

### 使用

在项目的初始化文件中引入该插件

```javascript
// 引入该插件
import {consoleInit} from 'epii-console';

// 设置端口号 不设置默认是 7788
consoleInit(7769);

// 项目中打印的内容
console.log(1111111)
console.log(22222,'2222')
console.log({code:1,msg:'success'},'res')

```

访问 http://127.0.0.1:7769/console (本地测试)，F12 打开控制台查看输出内容

### 暂停与清空功能

- 暂停：暂停控制台打印
- 清空：单击- 控制台清空，缓存日志不清空 / 双击- 控制台清空，缓存日志清空



