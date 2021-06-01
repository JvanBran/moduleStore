/**
 * 注册所有插件
 */
const { redisStore } = require('./redis');
const { RabbitMq } = require('./rabbitmq');
const axios = require('./axios');
module.exports={
    initPlugin: async(app)=>{
        app.context.redisStore = redisStore
        app.context.RabbitMq = RabbitMq
        app.context.axios = axios
    }
}