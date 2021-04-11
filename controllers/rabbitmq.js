const { rabbitMq } = require('../service/rabbitmq');
module.exports = {
    sendMsg : async (ctx, next) => {
        const sendInfo =  await rabbitMq.sendQueueMsg(ctx.request.body.queueName,ctx.request.body.msg)
        ctx.success(sendInfo)
    }
}