const { get } = require('../../axios')
module.exports = {
    getstorehouse: async()=>{
        try {
            const {data} = await get('gitlab/api/v4/users');
        } catch (error) {
            console.log(error)
        }
        
        // console.log(data)
    }
}