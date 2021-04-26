var router = require('koa-router')()
const datalize = require('datalize');
const field = datalize.field;
// ,datalize.query([
//     field('pageNo').required(),
//     field('pageSize').required()
//   ])
router
.post('/post',async(ctx, next)=>{
    try {
        // await packageList(ctx, next)
        console.log(ctx)
        ctx.success({
            aaa:'11'
        })
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
module.exports = router