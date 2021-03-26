function routerResponse(option={}){
    return function(ctx,next){
        ctx.success = function (data) {
            ctx.type = option.type || 'json'
            ctx.body = {
                code : option.successCode || 0,
                message : option.successMsg || 'success',
                result : data || {}
            }
        }
        ctx.fail = function (msg,code) {
            ctx.type = option.type || 'json'
            ctx.body = {
                code : code || option.failCode || 1,
                message : msg || option.successMsg || 'fail',
                result : option.err || {}
            }
        }
        next()
    }
}
module.exports= routerResponse