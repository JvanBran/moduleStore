const schedule = require('node-schedule');
const {eventEmitter} = require('../../util/subscribe')
const {getstorehouse} = require('./getstorehouse')
const scheduleCronstyle = ()=>{
    //每分钟的第30秒定时执行一次 发布 */5 * * * * ? ｜｜ 30 * * * * *
    // schedule.scheduleJob('*/1 * * * * ?',()=>{
    //     eventEmitter.emit('schedule01', '每隔一秒获取一次用户列表');
    // });
    // schedule.scheduleJob('*/5 * * * * ?',()=>{
    //     eventEmitter.emit('schedule05', '每隔5秒获取一次用户列表');
    // });
    schedule.scheduleJob('30 * * * * *',()=>{
        eventEmitter.emit('schedule30', '每分钟的第30秒定时执行一次');
    });
    eventEmitter.on('schedule01', getstorehouse);
    eventEmitter.on('schedule05', getstorehouse);
    eventEmitter.on('schedule30', getstorehouse);
}
module.exports = scheduleCronstyle