const { userInfoModel } = require('../modal/user');
const { redisStore } = require('../config/redis');
// const token = jwt.sign({
//     redis_id: new Date().getTime()
// }, process.env.JWT_TOKEN, { expiresIn: '24h' });
// console.log(token)
module.exports = {
    createUser : async (ctx, next) => {
        const reqBody = ctx.request.body;
        const UserinfoPhone = await userInfoModel.findAndCountAll({phone:reqBody.phone})
        console.log(UserinfoPhone.count)
        if(UserinfoPhone.count){
            ctx.fail('手机号码已存在！',499,{})
        }else{
            await userInfoModel.create(reqBody)
            ctx.success('创建成功！')
        }
    }
}