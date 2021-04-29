const { get , post } = require('../../axios')
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
                // 通过restapi创建的用户跳过确认
                const {data,status} = await post('gitlab/api/v4/users',Object.assign(userInfo, {skip_confirmation: true}));
                if(status == 201){
                    resolve(data)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}