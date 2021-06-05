module.exports = {
    sendMsg : async (ctx, next) => {
        const sendInfo = await ctx.simplestMq.sendQueueMsg(ctx.request.body.queueName,ctx.request.body.msg)
        ctx.success(sendInfo)
    }
}