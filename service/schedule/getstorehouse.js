const { get } = require('../../service/axios')
module.exports = {
    getstorehouse:async(des)=>{
        console.log(des)
        const {data} = await get('api/v4/users');
        console.log(data)
    }
}