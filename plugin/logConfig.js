let path = require('path');
//日志根目录
let baseLogPath = path.resolve(__dirname, '../logs')
// 请求日志
let httpPath = "/http";
// 请求日志文件名
let httpFileName = "http";
// 请求日志输出完整路径
let httpLogPath = baseLogPath + httpPath + "/" + httpFileName;
// 插件日志
let pluginPath = "/plugin";
//错误日志文件名
let pluginFileName = "plugin";
//错误日志输出完整路径
let pluginLogPath = baseLogPath + pluginPath + "/" + pluginFileName;
// 服务日志
let servicePath = "/service";
//错误日志文件名
let serviceFileName = "service";
//错误日志输出完整路径
let serviceLogPath = baseLogPath + servicePath + "/" + serviceFileName;
// 系统日志
let systemPath = "/system";
//错误日志文件名
let systemFileName = "system";
//错误日志输出完整路径
let systemLogPath = baseLogPath + systemPath + "/" + systemFileName;
// 数据库日志
let dbPath = "/db";
//错误日志文件名
let dbFileName = "db";
//错误日志输出完整路径
let dbLogPath = baseLogPath + dbPath + "/" + dbFileName;

module.exports = {
    "appenders":{
        http: {
            "category":"httpLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": httpLogPath,             //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log",      //后缀，每小时创建一个新的日志文件
            "path": httpPath  
        },
        plugin: {
            "category":"pluginLogger",
            "type": "dateFile",
            "filename": pluginLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": pluginPath,
        },
        service: {
            "category":"serviceLogger",
            "type": "dateFile",
            "filename": serviceLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": servicePath,
        },
        system: {
            "category":"systemLogger",
            "type": "dateFile",
            "filename": systemLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": systemPath,
        },
        db: {
            "category":"dbLogger",
            "type": "dateFile",
            "filename": dbLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": dbPath,
        },
        console: {
            "type": "console"
        }
    },
    "categories" : { 
        http: { appenders: ['http'], level: 'all' },
        plugin: { appenders: ['plugin'], level: 'all' },
        service: { appenders: ['service'], level: 'all' },
        system: { appenders: ['system'], level: 'all' },
        db: { appenders: ['db'], level: 'all' },
        default: {appenders: ["console"], level: "all" }
    }
}