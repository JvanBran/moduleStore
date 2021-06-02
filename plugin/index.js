/**
 * 注册所有插件
 */
const { redisStore } = require('./redis');
const { simplestMq } = require('./rabbitmq/simplest');
const axios = require('./axios');
module.exports={
    initPlugin: async(app)=>{
        app.context.redisStore = redisStore
        //  ------------ 队列 -------------
        app.context.simplestMq = simplestMq
        app.context.axios = axios
    }
}