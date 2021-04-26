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
//Service
// 代理端口
// const proxyPort = require('./service/proxygitport')
// proxyPort("8787","172.18.5.199","19312")
//nacos
const nacos = require('./service/nacos')
nacos()
//RabbitMq
const { rabbitMq } = require('./service/rabbitmq');
(async() => {
  const JvanInfo = await rabbitMq.receiveQueueMsg('Jvan')
  console.log('=======',JvanInfo)
  global.socketload.emit('Jvan',{msg:JvanInfo})
})()
// 定时任务订阅
const scheduleCronstyle = require('./service/schedule/index')
scheduleCronstyle()

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
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  let ip = ctx.req.headers['x-forwarded-for'] || ctx.req.headers['x-real-ip'] || ctx.req.ip || ctx.req.connection.remoteAddress || ctx.req.socket.remoteAddress || ctx.req.connection.socket.remoteAddress || ''
  if(ip) {
    ip = ip.replace('::ffff:', '')
  }
  console.log(`form ${ip}  ${ctx.method} ${ctx.url} - ${ms}ms`)
})
// routes
app.use(composeRouter(__dirname + '/api').routes());
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
module.exports = app
