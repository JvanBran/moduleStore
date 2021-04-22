var router = require('koa-router')()
const datalize = require('datalize');
const field = datalize.field;
const {packageList, packageInfo} = require('../../../controllers/packageInfo')
router
.get('/getlist',datalize.query([
    field('pageNo').required(),
    field('pageSize').required()
  ]),async(ctx, next)=>{
    try {
        await packageList(ctx, next)
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
.get('/getpackinfo',datalize.query([
    field('id').required()
  ]),async(ctx, next)=>{
    try {
        await packageInfo(ctx, next)
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
module.exports = router