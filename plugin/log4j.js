let log4js = require('log4js');
let logConfig = require('./logConfig');
let {formatHttpInfo,formatHttpError,formatDbInfo} = require('../util/logtools')
//加载配置文件
log4js.configure(logConfig);
let logUtil = {};
// 请求日志特殊处理
let apiLogger = log4js.getLogger('http');
let pluginLogger = log4js.getLogger('plugin');
let serviceLogger = log4js.getLogger('service');
let systemLogger = log4js.getLogger('system');
let dbLogger = log4js.getLogger('db');
let defaultLogger = log4js.getLogger('default');

// 封装请求日志
logUtil.apiLogger = {
    info:(ctx, resTime)=>{
        defaultLogger.info(formatHttpInfo(ctx, resTime))
        apiLogger.info(formatHttpInfo(ctx, resTime));
    },
    error:(ctx, error, resTime)=>{
        defaultLogger.info(formatHttpError(ctx, error, resTime))
        apiLogger.error(formatHttpError(ctx, error, resTime));
    }
}
logUtil.dbLogger = {
    info:(log,detail)=>{
        if (log) {
            defaultLogger.info(formatDbInfo(log,detail))
            dbLogger.info(formatDbInfo(log,detail));
        }
    },
}
logUtil.serviceLogger ={
    info:(type,fn,log)=>{
        if (log) {
            defaultLogger.info('【SERVICE】服务名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】')
            serviceLogger.info('【SERVICE】服务名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】');
        }
    },
    debug:(type,fn,log)=>{
        if (log) {
            defaultLogger.debug('【SERVICE】服务名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】')
            serviceLogger.debug('【SERVICE】服务名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】');
        }
    },
    error:(type,fn,log)=>{
        if (log) {
            defaultLogger.error('【SERVICE】服务名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】')
            serviceLogger.error('【SERVICE】服务名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】');
        }
    },
    warn:(type,fn,log)=>{
        if (log) {
            defaultLogger.warn('【SERVICE】服务名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】')
            serviceLogger.warn('【SERVICE】服务名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】');
        }
    },
}
module.exports = logUtil;