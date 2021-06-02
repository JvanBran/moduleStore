/**
 * 注册所有服务
 */
//nacos
const nacos = require('./nacos')
// 代理端口
// const proxyPort = require('./service/proxygitport')

module.exports={
    initService: async(app)=>{
        nacos();
        // proxyPort("8787","172.18.5.199","19312")
        // 对不通的mq做不同的业务处理
        app.context.simplestMq.receiveQueueMsg('JvanTest1',(mqinfo)=>{
            console.log(mqinfo)
        }) 
        
    },
}