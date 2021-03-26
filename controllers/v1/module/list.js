var router = require('koa-router')()
router.get('/gectlist',ctx=>{
    ctx.success({
        items:[]
    })
})
module.exports = router