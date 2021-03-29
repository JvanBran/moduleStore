var router = require('koa-router')()
const datalize = require('datalize');
const field = datalize.field;

// const { userInfoModel } = require('../../modal/user');
router.post('/login',datalize([
    field('name').required(),
    field('password').required()
  ]),async (ctx, next)=>{
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