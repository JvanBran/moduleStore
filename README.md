# 模块商店
## 项目文件夹说明

```
.
├── README.md
├── api http
│   └── v1
│       ├── module
│       │   ├── list.js
│       │   ├── rabbitmq.js
│       │   └── socket.js
│       └── user.js
├── app.js
├── bin
│   └── www
├── controllers
│   ├── rabbitmq.js
│   ├── socket.js
│   └── user.js
├── logs
│   ├── error
│   │   └── error.-2021-04-11-20.log
│   ├── response
│   │   └── response.-2021-04-11-20.log
│   └── sql
│       └── sql.-2021-04-11-20.log
├── middleware
│   ├── composeRouter.js
│   ├── datalizeVerify.js
│   ├── jwtVerify.js
│   ├── loggers.js
│   └── routerResponse.js
├── modal
│   ├── module.js
│   ├── user.js
│   └── utils.js
├── package.json
├── public
├── schema
│   └── user.js
├── service
│   ├── logConfig.js
│   ├── nacos.js
│   ├── rabbitmq.js
│   ├── redis.js
│   ├── sequelize.js
│   └── socket
│       └── index.js
├── util
│   ├── lib.js
│   └── logUtil.js
└── yarn.lock
```
## 路由
controllers 目录下 目录结构及路由结构