const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const body = require('koa-body')
// const logger = require('koa-logger')
//根据目录构建路由结构
const composeRouter = require('./middleware/composeRouter')
//返回值封装
const routerResponse = require('./middleware/routerResponse')
//全局异常封装
const catchError = require('./middleware/catcherror')
// middlewares
// error handler
// app.use(catchError)
app.use(async(ctx, next) => {
  try {
    // 这里给ctx对象添加了一个error方法
    // 后面的代码中，当执行ctx.error方法时，就会抛出一个异常
    // 这样，在其他的路由或中间件里，代码执行到ctx.error时就会直接跳回到这个的错误捕捉中间件，ctx.error后面的代码就不会再执行了
    ctx.error = (code, message) => {
      if (typeof code === 'string') {
        message = code
        code = 500
      }
      ctx.throw(code || 500, message || '服务器错误')
    }
    await next()
  } catch (e) {
    const status = e.status || 500
    ctx.error(status, e.message || '服务器错误')

    // ctx.status = e.status || 500
    // ctx.body = e.message || '服务器错误'
  }
})
app.use(body({
  keepExtensions: true,    // 保持文件的后缀
  maxFileSize:20 * 1024 * 1024, // 文件上传大小
}))
app.use(json())
// app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(routerResponse())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// routes
app.use(composeRouter(__dirname + '/controllers').routes());
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
