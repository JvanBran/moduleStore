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
        app.context.simplestMq.receiveQueueMsg('JvanTest',(mqinfo)=>{
            console.log(mqinfo)
        }) 
        app.context.workqueuetMq.receiveQueueMsg('JvanTest1',1000,(mqinfo)=>{
            console.log(mqinfo)
        })
        app.context.pubsubMq.receiveQueueMsg('JvanTest2-1','queue',(mqinfo)=>{
            console.log('2-1',mqinfo)
        })
        app.context.pubsubMq.receiveQueueMsg('JvanTest2-2','queue',(mqinfo)=>{
            console.log('2-2',mqinfo)
        })
    },
}