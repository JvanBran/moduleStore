var router = require('koa-router')()
const datalize = require('datalize');
const field = datalize.field;
const { redisStore } = require('../../service/redis');
const { createUser , findUser } = require('../../controllers/user')
router
.post('/login',datalize([
    field('phone').required(),
    field('password').required()
  ]),async (ctx, next)=>{
    try {
        await findUser(ctx)
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
        field('role').required().int().range(0, 2),
        field('gitlabshh').requiredIf((value,result,ctx)=>{
            // 如果是开发者 要求上传当前设备的ssh
            if(ctx.request.body.role == 2){
                return true
            }else{
                return false
            }
        })
    ]),async (ctx, next)=>{ 
    try {
        await createUser(ctx)
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
.get('/userInfo',async(ctx, next)=>{
    try {
        const userInfo = await redisStore.get('user:token:'+ctx.jwtId)
        ctx.success(userInfo)
    } catch (error) {
        ctx.fail('系统错误',500,error.message)
    }
})
module.exports = router