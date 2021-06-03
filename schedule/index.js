const schedule = require('node-schedule');
const {getstorehouse} = require('./gitlab/getstorehouse')
const {getjob} = require('./jenkins/getjob')
const scheduleCronstyle = (app)=>{
    //每分钟的第30秒定时执行一次 发布 */5 * * * * ? ｜｜ 30 * * * * *
    // schedule.scheduleJob('*/1 * * * * ?',()=>{
    //     getstorehouse()
        
    // });
    schedule.scheduleJob('*/5 * * * * ?',async ()=>{
        //触发多个mq
        app.context.simplestMq.sendQueueMsg('JvanTest','12345')
        app.context.workqueuetMq.sendQueueMsg('JvanTest1',['11111','22222','33333','44444','55555'])
        app.context.pubsubMq.sendQueueMsg('JvanTest2','queue',['211111','222222','233333','244444','255555'])
        //getstorehouse()
        //getjob()
    });
    // schedule.scheduleJob('30 * * * * *',()=>{
    //     getstorehouse()
    // });
}
module.exports = scheduleCronstyle