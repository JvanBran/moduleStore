var router = require('koa-router')()
const datalize = require('datalize');
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
        // await redisStore.set(ctx.jwtId,{asd:'111'})
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
.post('/register', datalize([
        field('email').required().email(),
        field('password').required(),
        field('username').required(),
        field('name').required(),
        field('phone').required().phone(),
        field('question').required(),
        field('answer').required(),
        field('role').required().int().range(0, 2)
    ]),async (ctx, next)=>{ 
    try {
        await createUser(ctx)
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