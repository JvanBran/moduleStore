const { userInfoModel } = require('../modal/userInfo');
const { setCreateUser } = require('../service/schedule/gitlab/getstorehouse')
const Op = require('sequelize').Op;
const { redisStore } = require('../service/redis');
// const token = jwt.sign({
//     redis_id: new Date().getTime()
// }, process.env.JWT_TOKEN, { expiresIn: '24h' });
// console.log(token)
module.exports = {
    createUser : async (ctx, next) => {
        const { phone , email, role } = ctx.request.body;
        console.log()
        const UserinfoPhone = await userInfoModel.findAll({
            attributes: ['phone', 'email'],
            where: {
                phone: phone,
                email: email
            }
        })
        //await setCreateUser(ctx.request.body)
        if(UserinfoPhone.length){
            ctx.fail('用户已存在！',499,{})
        }else{
            // 如果是管理者则触发gitlab注册规则
            if(role == 2){
                const getlabInfo = await setCreateUser(ctx.request.body)
                await userInfoModel.create(Object.assign({gitlabid:getlabInfo.id,avatar_url:getlabInfo.avatar_url},ctx.request.body) )
            }else{
                await userInfoModel.create(ctx.request.body)
            }
            ctx.success('创建成功！')
        }
    }
}