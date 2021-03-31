const { userInfoModel } = require('../modal/user');
const { redisStore } = require('../config/redis');
// const token = jwt.sign({
//     redis_id: new Date().getTime()
// }, process.env.JWT_TOKEN, { expiresIn: '24h' });
// console.log(token)
module.exports = {
    createUser : async (ctx, next) => {
        const reqBody = ctx.request.body;
        await userInfoModel.create(reqBody)
        ctx.success('创建成功！')
    }
}