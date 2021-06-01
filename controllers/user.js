const { userInfoModel } = require('../modal/userInfo');
const { setCreateUser } = require('../schedule/gitlab/getstorehouse')
const jwt = require('jsonwebtoken');
module.exports = {
    createUser : async (ctx, next) => {
        const { phone , email, role } = ctx.request.body;
        const UserinfoPhone = await userInfoModel.findAll({
            attributes: ['phone', 'email'],
            where: {
                phone: phone,
                email: email
            }
        })
        
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
    },
    findUser: async (ctx,next) =>{
        const { phone , password } = ctx.request.body;
        const Userinfo = await userInfoModel.findAll({
            attributes: ['userid', 'name', 'password', 'phone', 'avatar_url', 'avatar_url', 'email', 'avatar_url', 'question', 'answer', 'role', 'gitlabid', 'creat_time', 'updat_time'],
            where: {
                phone: phone,
                password: password
            }
        })
        if(Userinfo.length){
            const token = jwt.sign({
                redis_id: Userinfo[0].dataValues.userid
            }, process.env.JWT_TOKEN, { expiresIn: '24h' });
            ctx.redisStore.set('user:token:'+Userinfo[0].dataValues.userid,Userinfo[0].dataValues)
            ctx.success({
                token:token,
                name:Userinfo[0].dataValues.name,
                phone:Userinfo[0].dataValues.phone,
                avatar_url:Userinfo[0].dataValues.avatar_url,
                email:Userinfo[0].dataValues.email,
                role:Userinfo[0].dataValues.role
            })
        }else{
            ctx.fail('用户不存在！',499,{})
        }
    }
}