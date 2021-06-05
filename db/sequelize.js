const Sequelize = require('sequelize');
const logUtil = require('../plugin/log4j')
const moduleStore = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect:'mysql',
    logging: log,
    dialectOptions: {
        charset: "utf8",
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    },
    timezone: '+08:00' //东八时区
});
function log(sql,detail){
    logUtil.dbLogger.info(sql,detail);
}
module.exports = {
    moduleStore
}