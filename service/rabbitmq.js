const amqpLib = require('amqplib');
class RabbitMq{
    constructor() {
        this.index = 0;
        this.hosts = [];
        this.length = this.hosts.length;
        this.open = amqpLib.connect({
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
    //队列名 消息
    sendQueueMsg = (queueName, msg)=>{
        const self = this;
        return new Promise(async (resolve, reject)=>{
            const rabbitConn =  await self.open
            const rabbitChannel = await rabbitConn.createChannel()
            await rabbitChannel.assertQueue(queueName, {durable: true});
            await rabbitChannel.sendToQueue(queueName, Buffer.from(msg), {deliveryMode: true});
            await rabbitChannel.close()
            resolve('发送成功!')
        })
        
    }
    receiveQueueMsg = (queueName)=>{
        const self = this;
        return new Promise(async (resolve, reject)=>{
            try {
                const rabbitConn =  await self.open
                const rabbitChannel = await rabbitConn.createChannel()
                await rabbitChannel.assertQueue(queueName, {durable: true});
                rabbitChannel.prefetch(1);
                await rabbitChannel.consume(queueName,(msg)=>{
                    if (msg !== null) {
                        let data = msg.content.toString();
                        rabbitChannel.ack(msg);
                        resolve(data)
                    }
                },{noAck: false})
            } catch (error) {
                console.log(error)
            } 
        })
    }
}
const rabbitMq = new RabbitMq()
module.exports = {
    rabbitMq:rabbitMq
}