const NacosNamingClient = require('nacos').NacosNamingClient;
const client = new NacosNamingClient({
    logger: {
        info:()=>{
        },
        debug:()=>{
        },
        error:()=>{
        },
        warn:()=>{
        }
      },
    serverList: process.env.NACOS_IP,
    namespace: process.env.NACOS_NAME_SPACE
});
const nacos = async () =>{
    await client.ready()
    await client.registerInstance(process.env.NACOS_SERVICE_NAME,{
        ip:global.localIP,
        port:process.env.APP_PORT
    },process.env.NACOS_GROUP_NAME)
    // client.subscribe(process.env.NACOS_SERVICE_NAME, hosts => {
    //     console.log('-----------naming result start --------------');
    //     console.log(hosts);
    //     console.log('-----------naming result end--------------');
    // });
}
module.exports = nacos