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
        app.context.simplestMq.sendQueueMsg('JvanTest','1112244555')
        app.context.simplestMq.sendQueueMsg('JvanTest1','1112244555')
        //getstorehouse()
        //getjob()
    });
    // schedule.scheduleJob('30 * * * * *',()=>{
    //     getstorehouse()
    // });
}
module.exports = scheduleCronstyle