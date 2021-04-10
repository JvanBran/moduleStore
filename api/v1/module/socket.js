const { sendMsg } = require('../../../controllers/socket')
const datalize = require('datalize');
const field = datalize.field;
const router = require('koa-router')()
router.post('/send',datalize([
    field('queueName').required(),
    field('msg').required()
  ]),async (ctx, next)=>{
    try {
        await sendMsg(ctx, next)
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
module.exports = router