const NacosNamingClient = require('nacos').NacosNamingClient;
const NacosConfigClient = require('nacos').NacosConfigClient;
const logUtil = require('../plugin/log4j')
const configClient = new NacosConfigClient({
    serverAddr: process.env.NACOS_IP
  });
const client = new NacosNamingClient({
    logger: {
        info:(type,addr,prot)=>{
          //logUtil.serviceLogger.info('nacos','NacosNamingClient-init',type+''+addr+''+prot)
        },
        debug:(type,addr,prot)=>{
          //logUtil.serviceLogger.debug('nacos','NacosNamingClient-init',type+''+addr+''+prot)
        },
        error:(type,addr,prot)=>{
          //logUtil.serviceLogger.error('nacos','NacosNamingClient-init',type+''+addr+''+prot)
        },
        warn:(type,addr,prot)=>{
          //logUtil.serviceLogger.warn('nacos','NacosNamingClient-init',type+''+addr+''+prot)
        }
      },
    serverList: process.env.NACOS_IP,
    namespace: process.env.NACOS_NAME_SPACE
});
const nacos = async (app) =>{
    await client.ready()
    await client.registerInstance(process.env.NACOS_SERVICE_NAME,{
        ip:global.localIP,
        port:process.env.APP_PORT
    },process.env.NACOS_GROUP_NAME)
    client.subscribe(process.env.NACOS_SERVICE_NAME, hosts => {
      app.context.logUtil.serviceLogger.info('nacos','NacosNamingClient-subscribe',JSON.stringify(hosts))
    });
    // get config once
    const content= await configClient.getConfig('123456789', process.env.NACOS_GROUP_NAME);
    app.context.logUtil.serviceLogger.info('nacos','NacosNamingClient-configClient-getConfig',JSON.stringify(content))
    // listen data changed
    configClient.subscribe({
        dataId: '123456789',
        group: process.env.NACOS_GROUP_NAME,
    }, content => {
      app.context.logUtil.serviceLogger.info('nacos','NacosNamingClient-configClient-subscribe',JSON.stringify(content))
    });
}
module.exports = nacos