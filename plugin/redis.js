const Redis = require('ioredis');
const logUtil = require('./log4j');
class RedisStore {
    constructor() {
        this.redis = new Redis({
            port: process.env.RD_PORT, // Redis port
            host: process.env.RD_HOST, // Redis host
            family: process.env.RD_FAMILY, // 4 (IPv4) or 6 (IPv6)
            password: process.env.RD_PASSWORD,
            db: process.env.RD_DB,
        });
        this.redis.connect(() => {
          logUtil.pluginLogger.info('Redis','connect','redis启动成功！')
        })
      }
      async set(sid,obj){
        try {
          await this.redis.set(sid, JSON.stringify(obj))
          logUtil.pluginLogger.info('Redis','set-'+sid,JSON.stringify(obj))
        } catch (e) {
          logUtil.pluginLogger.error('Redis','set-'+sid,JSON.stringify(e))
        }
        return sid;
      }
      async get(sid){
        let data = await this.redis.get(sid);
        logUtil.pluginLogger.info('Redis','get-'+sid,data)
        return JSON.parse(data);
      }
}
let redisStore = new RedisStore()
module.exports = {
    redisStore:redisStore
}