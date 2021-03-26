const {HttpException} = require('../util/http-exception')
const catchError = async (ctx,next)=>{
    try{
        await next()
    } catch(error){
        if(error instanceof HttpExcetion){
            return ctx.body = error.msg
        }
    }
}
module.exports = catchError