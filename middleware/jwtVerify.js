const jwt = require('jsonwebtoken');
const jwtVerify = () => {
    return async(ctx, next) =>{
        try {
            const authorization = ctx.get('Authorization')
            // 检验 token 是否已过期
            if(authorization!=''){
                const token = authorization.split(' ')[1]
                try {
                    const payload =  await jwt.verify(token, process.env.JWT_TOKEN)
                    ctx.jwtId = payload.redis_id
                } catch (err) {
                    ctx.fail('token过期！！',401,{})
                    return
                }
            }
            await next().catch(err=>{
                if (err.status === 401) {
                    ctx.fail('请登录！！',401,{})
                }else {
                    ctx.fail('系统错误',401,err.message)
                }
            })
        } catch (error) {
            ctx.fail('系统错误',401,error.message)
        }
    }
}
module.exports = jwtVerify