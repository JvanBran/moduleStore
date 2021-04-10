module.exports = {
    sendMsg : async (ctx, next) => {
        global.socketload.emit('formctx',{msg:'90990909'})
        ctx.success('222')
    }
}