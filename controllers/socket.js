module.exports = {
    sendMsg : async (ctx, next) => {
        ctx.socketload.emit(ctx.request.body.queueName,{msg:ctx.request.body.msg})
        ctx.success('发送成功!')
    }
}