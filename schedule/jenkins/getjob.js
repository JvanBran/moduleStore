const { get } = require('../../plugin/axios')
module.exports = {
    getjob: async()=>{
        try {
            const {data} = await get('jenkins/api/json?pretty=true');
        } catch (error) {
            console.log(error)
        }
        // console.log(data)
    }
}