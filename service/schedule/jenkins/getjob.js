const { get } = require('../../axios')
module.exports = {
    getjob:async(des)=>{
        console.log(des)
        const {data} = await get('jenkins/api/json?pretty=true');
        console.log(data)
    }
}