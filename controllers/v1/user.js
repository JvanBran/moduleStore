var router = require('koa-router')()
const datalize = require('datalize');
const field = datalize.field;
const jwt = require('jsonwebtoken');
const { userInfoModel } = require('../../modal/user');
router
.post('/login',datalize([
    field('name').required(),
    field('password').required()
  ]),async (ctx, next)=>{
    try {
        console.log(ctx.jwtId)
        ctx.success({
            aaa:'11',
            bb:'12',
            jwtId:ctx.jwtId
        })
        next()
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
.post('/register',datalize([
    field('name').required(),
    field('password').required()
  ]),async (ctx, next)=>{
    // const token = jwt.sign({
    //     redis_id: new Date().getTime()
    // }, process.env.JWT_TOKEN, { expiresIn: '24h' });
    // console.log(token)
    try {
        ctx.success({
            aaa:'11',
            bb:'12'
        })
        next()
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
module.exports = router