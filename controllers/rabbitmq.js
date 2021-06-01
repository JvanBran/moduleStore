module.exports = {
    sendMsg : async (ctx, next) => {
        const rabbitMq = new ctx.RabbitMq()
        const sendInfo = await rabbitMq.sendQueueMsg(ctx.request.body.queueName,ctx.request.body.msg)
        ctx.success(sendInfo)
    }
}