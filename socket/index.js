const IO = require('socket.io')
function creatSocket(app) {
  
  /**
   * socketload
   * 监控后台服务
   */
  global.socketload = IO(app,{
    origin: "*.*",
    path:'/socketload/'
  })
  // 每个客户端socket连接时都会触发 connection 事件
  socketload.on("connection", function(clientSocket) {
    console.log('socketload新用户进场',clientSocket.id)
    clientSocket.on('disconnect', function(e){
      console.log('user disconnected',e);
    });
  });
}
module.exports = {
  creatSocket
}