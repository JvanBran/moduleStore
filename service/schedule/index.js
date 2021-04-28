const schedule = require('node-schedule');
const {getstorehouse} = require('./gitlab/getstorehouse')
const {getjob} = require('./jenkins/getjob')
const scheduleCronstyle = ()=>{
    //每分钟的第30秒定时执行一次 发布 */5 * * * * ? ｜｜ 30 * * * * *
    // schedule.scheduleJob('*/1 * * * * ?',()=>{
    //     getstorehouse()
        
    // });
    schedule.scheduleJob('*/5 * * * * ?',()=>{
        getstorehouse()
        //getjob()
    });
    // schedule.scheduleJob('30 * * * * *',()=>{
    //     getstorehouse()
    // });
}
module.exports = scheduleCronstyle