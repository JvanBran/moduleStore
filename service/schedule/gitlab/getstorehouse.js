const { get } = require('../../axios')
module.exports = {
    getstorehouse:async(des)=>{
        console.log(des)
        const {data} = await get('gitlab/api/v4/users');
        console.log(data)
    }
}