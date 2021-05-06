const { get , post, del } = require('../../axios')
module.exports = {
    getstorehouse: async()=>{
        try {
            const {data} = await get('gitlab/api/v4/users');
        } catch (error) {
            console.log(error)
        }
    },
    setCreateUser: async(userInfo)=>{
        try {
            return new Promise(async (resolve)=>{
                // restapi
                /**
                 * 创建的用户跳过确认
                 * 用户不可以创建组
                 * 用户不可以创建的项目
                 */
                const {data,status} = await post('gitlab/api/v4/users',Object.assign(userInfo, {skip_confirmation: true,can_create_group: false, projects_limit:0}));
                if(status == 201){
                    resolve(data)
                }else{
                    const userData =  await get('gitlab/api/v4/users',{username:userInfo.name})
                    resolve(userData.data[0])
                }
            })
        } catch (error) {
            console.log(error)
        }
    },
    delUser: async(userInfo)=>{
        del()
    }
}