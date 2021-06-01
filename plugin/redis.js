const Redis = require('ioredis');
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
          console.log('redis start...')
        })
      }
      async set(sid,obj){
        try {
          await this.redis.set(sid, JSON.stringify(obj))
        } catch (e) {
            console.log(e)
        }
        return sid;
      }
      async get(sid){
        let data = await this.redis.get(sid);
        return JSON.parse(data);
      }
}
let redisStore = new RedisStore()
module.exports = {
    redisStore:redisStore
}