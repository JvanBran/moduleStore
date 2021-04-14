# 模块商店
## 项目文件夹说明
```
.
├── README.md
├── api //接口目录 根据文件目录生成接口地址
│   └── v1
│       ├── module
│       │   ├── list.js
│       │   ├── rabbitmq.js
│       │   └── socket.js
│       └── user.js
├── app.js //入口
├── bin //服务启动
│   └── www
├── controllers //控制器
│   ├── rabbitmq.js
│   ├── socket.js
│   └── user.js
├── logs    //持久化日志
│   ├── error
│   │   └── error.-2021-04-11-20.log
│   ├── response
│   │   └── response.-2021-04-11-20.log
│   └── sql
│       └── sql.-2021-04-11-20.log
├── middleware //中间件 日志 检验 路由 返回封装
│   ├── composeRouter.js
│   ├── datalizeVerify.js
│   ├── jwtVerify.js
│   ├── loggers.js
│   └── routerResponse.js
├── modal   //数据层 CRUD
│   ├── module.js
│   ├── user.js
│   └── utils.js
├── package.json
├── public
├── schema //数据模型
│   └── user.js
├── service // 第三方服务
│   ├── logConfig.js
│   ├── nacos.js
│   ├── rabbitmq.js
│   ├── redis.js
│   ├── sequelize.js
│   └── socket
│       └── index.js
├── util //工具集
│   ├── lib.js
│   └── logUtil.js
└── yarn.lock
```
## 路由
controllers 目录下 目录结构及路由结构