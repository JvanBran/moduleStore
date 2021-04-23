var router = require('koa-router')()
const datalize = require('datalize');
const { get } = require('../../service/axios')
const field = datalize.field;
const {createUser} = require('../../controllers/user')
router
.post('/login',datalize([
    field('name').required(),
    field('password').required()
  ]),async (ctx, next)=>{
    try {
        console.log('==',ctx.jwtId)
        ctx.success({
            aaa:'11',
            bb:'12',
            jwtId:ctx.jwtId
        })
        await redisStore.set(ctx.jwtId,{asd:'111'})
        next()
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
.post('/register',async (ctx, next)=>{ 
    // datalize([
    //     field('name').required(),
    //     field('password').required(),
    //     field('phone').required().phone()
    //   ]),
    try {
        const {data} = await get('api/v4/users');
        ctx.success({
            data: data
        })
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
.get('/userInfo',async(ctx, next)=>{
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