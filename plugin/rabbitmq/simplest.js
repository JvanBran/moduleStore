// 简单队列 
/**
 * 
 * 一个生产者对应一个消费者
 * 三个角色
 * 消息生产者 Producer
 * 消息中间件（提供消息队列） Queue
 * 消费消费者 Consumer
 */
const amqp = require('amqplib')
const logUtil = require('../log4j');
class SimplestMq{
    constructor() {
        this.open = amqp.connect({
            protocol: process.env.RABBITMQ_PROTOCOL,
            hostname: process.env.RABBITMQ_HOSTNAME,
            port: process.env.RABBITMQ_PORT,
            username: process.env.RABBITMQ_USERNAME,
            password: process.env.RABBITMQ_PASSWORD,
            locale: process.env.RABBITMQ_LOCALE,
            frameMax: process.env.RABBITMQ_FRAMEMAX,
            heartbeat: process.env.RABBITMQ_HEARTBEAT,
            vhost: process.env.RABBITMQ_VHOST
        })
    }
    sendQueueMsg= async (queueName, msg)=>{
        const self = this;
        const rabbitConn = await self.open
        const rabbitChannel = await rabbitConn.createChannel()
        await rabbitChannel.assertQueue(queueName, {durable: true});
        logUtil.pluginLogger.info('RabbitMq','simplest-sendQueueMsg-'+queueName,msg)
        await rabbitChannel.sendToQueue(queueName, Buffer.from(msg), {deliveryMode: true});
        rabbitChannel.close()
    }
    receiveQueueMsg = async (queueName,callback)=>{
        const self = this;
        const rabbitConn =  await self.open
        const rabbitChannel = await rabbitConn.createChannel()
        rabbitChannel.assertQueue(queueName, {
            durable: true
        })
        rabbitChannel.prefetch(1)
        rabbitChannel.consume(
            queueName,
            msg => {
                let data = msg.content.toString();
                logUtil.pluginLogger.info('RabbitMq','simplest-receiveQueueMsg-'+queueName,data)
                callback(data)
            },
            {
                noAck: true
            }
        )
    }
}
const simplestMq = new SimplestMq()
module.exports = {
    simplestMq:simplestMq
}