BeiQi(北汽)项目前端文档

##开发
###启动
```js
npm run dev
```
启动开发环境后，访问`http://localhost:8082/dev.html`即为开发环境。

###打包
```js
npm run prod
```

###目录树

```shell 
│  dev.html  //开发环境访问页面
│  package.json  //安装配置包
│  READEME.MD
│  template.html  
│  tree.txt
│  webpack.config.js  
│  webpack.release.js
│  
├─app
│      index.js   //整个APP入口文件
│      
└─src
    ├─assets     //资源文件夹
    │  ├─font           // 图标字体文件
    │  ├─icons          //svg,
    │  ├─images         //图片文件
    │  └─locales        //国际化配置
    ├─components    //组件文件夹
    ├─core          //API请求封装
    ├─services      //全局服务配置文件夹
    ├─stores        //状态管理文件夹
    └─theme        //外部样式资源
```

###eslint测试
可以运行`npm run eslint`运行语法测试。

###jest(单元测试)
