var router = require('koa-router')()
// const datalize = require('datalize');
// const field = datalize.field;
// const { userInfoModel } = require('../../modal/user');
// ,datalize([
//     field('name').required(),
//     field('password').required(),
//   ])
router
.post('/login',async (ctx, next)=>{
    try {
        ctx.success({
            aaa:'11',
            bb:'12'
        })
        next()
        // console.log(ctx.request.body)
        // console.log(ctx)
    } catch (error) {
        console.log(error)
        ctx.fail('系统错误',500,error.message)
    }
})
module.exports = router