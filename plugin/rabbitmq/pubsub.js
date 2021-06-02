// 发布订阅模式
const amqp = require('amqplib')
class PubsubMq{
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
    sendQueueMsg= async (exchange_name, msg)=>{
        const self = this;
        const rabbitConn = await self.open
        const rabbitChannel = await rabbitConn.createChannel()
        // 创建临时交换机
        await rabbitChannel.assertExchange(exchange_name, 'fanout', { durable: false })
        //参数1 交换机名字 参数2 指定队列 3 内容
        await rabbitChannel.publish(exchange_name, '', msg)
        rabbitChannel.close()
    }
    receiveQueueMsg = async (exchange_name,callback)=>{
        const self = this;
        const rabbitConn =  await self.open
        const rabbitChannel = await rabbitConn.createChannel()
        rabbitChannel.assertExchange(exchange_name, 'fanout',{
            durable: true
        })
        rabbitChannel.prefetch(1)
        rabbitChannel.consume(
            queueName,
            msg => {
                let data = msg.content.toString();
                callback(data)
            },
            {
                noAck: true
            }
        )
    }
}
const pubsubMqMq = new PubsubMqtMq()
module.exports = {
    pubsubMqMq:pubsubMqMq
}