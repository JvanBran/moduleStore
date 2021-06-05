const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const body = require('koa-body')
const koajwt = require('koa-jwt')
//获取当前ip及hostName
const {getLocalIP} = require('./util/lib')
global.localIP = getLocalIP().ip
global.localHostName = getLocalIP().hostName
//返回值封装
const routerResponse = require('./middleware/routerResponse')
//根据目录构建路由结构
const composeRouter = require('./middleware/composeRouter')
//校验参数
const datalizeVerify = require('./middleware/datalizeVerify')
//JWT
const jwtVerify = require('./middleware/jwtVerify')
//日志
const loggers = require('./middleware/loggers')
//环境变量
if(process.env.NODE_ENV == 'development'){
  const dotenv =  require('dotenv');
  dotenv.config('../env');
}
// 注册插件
const { initPlugin } = require('./plugin');
initPlugin(app)
// 注册服务
const { initService } = require('./service')
initService(app)
// 定时任务订阅
const scheduleCronstyle = require('./schedule/index')
scheduleCronstyle(app)

// middlewares
app.use(loggers());// 本地log
app.use(body({
  keepExtensions: true,    // 保持文件的后缀
  maxFileSize:20 * 1024 * 1024, // 文件上传大小
}))
app.use(json({ limit: '50mb' }))
app.use(routerResponse())
app.use(jwtVerify())
//JWT
app.use(koajwt({
  secret: process.env.JWT_TOKEN
}).unless({
  path: [
    /^\/v1\/user\/register/,
    /^\/v1\/user\/login/,
    /^\/public/,
    /^\/v1\/module\/rabbitmq\/send/,
    /^\/v1\/module\/socket\/send/,
    /^\/v1\/public/,
  ]
}))
app.use(require('koa-static')(__dirname + '/public'))
app.use(datalizeVerify())
// routes
app.use(composeRouter(__dirname + '/api').routes());
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
module.exports = app
