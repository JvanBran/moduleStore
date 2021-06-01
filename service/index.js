/**
 * 注册所有服务
 */
//nacos
const nacos = require('./nacos')
// 代理端口
// const proxyPort = require('./service/proxygitport')

module.exports={
    initService: async()=>{
        nacos();
        // proxyPort("8787","172.18.5.199","19312")
    },
}