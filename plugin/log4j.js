let log4js = require('log4js');
let logConfig = require('./logConfig');
let {formatHttpRes,formatHttpError,formatDbInfo} = require('../util/logtools')
//加载配置文件
log4js.configure(logConfig);
let logUtil = {};
// 请求日志特殊处理
let httpLogger = log4js.getLogger('http');
let pluginLogger = log4js.getLogger('plugin');
let serviceLogger = log4js.getLogger('service');
let systemLogger = log4js.getLogger('system');
let dbLogger = log4js.getLogger('db');
let defaultLogger = log4js.getLogger('default');

// 封装请求日志
logUtil.httpLogger = {
    info:(ctx, resTime)=>{
        defaultLogger.info(formatHttpRes(ctx, resTime))
        httpLogger.info(formatHttpRes(ctx, resTime));
    },
    error:(ctx, error, resTime)=>{
        defaultLogger.info(formatHttpError(ctx, error, resTime))
        httpLogger.error(formatHttpError(ctx, error, resTime));
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
logUtil.pluginLogger = {
    info:(type,fn,log)=>{
        if (log) {
            defaultLogger.info('【PLUGIN】插件名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】')
            pluginLogger.info('【PLUGIN】插件名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】');
        }
    },
    error:(type,fn,log)=>{
        if (log) {
            defaultLogger.error('【PLUGIN】插件名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】')
            pluginLogger.error('【PLUGIN】插件名:'+'【'+type+'】'+'方法名:【'+fn+'】'+'输出:【'+log+'】');
        }
    },
}
module.exports = logUtil;