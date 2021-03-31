const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const body = require('koa-body')
const koajwt = require('koa-jwt')
//返回值封装
const routerResponse = require('./middleware/routerResponse')
//根据目录构建路由结构
const composeRouter = require('./middleware/composeRouter')
//校验参数
const datalizeVerify = require('./middleware/datalizeVerify')
//JWT
const jwtVerify = require('./middleware/jwtVerify')
//环境变量
let dotenv =  require('dotenv');
dotenv.config('./env');
// middlewares
app.use(body({
  keepExtensions: true,    // 保持文件的后缀
  maxFileSize:20 * 1024 * 1024, // 文件上传大小
}))
app.use(json({ limit: '50mb' }))

app.use(routerResponse())
app.use(jwtVerify())
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
app.use(composeRouter(__dirname + '/controllers').routes());
//JWT
app.use(koajwt({
  secret: process.env.JWT_TOKEN
}))
// .unless({path: [''] })
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
module.exports = app
