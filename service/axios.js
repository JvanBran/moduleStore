const axios = require('axios');
const UserAgent = require('user-agents');
axios.defaults.baseURL = process.env.GITLAB_HOST;
axios.defaults.timeout = 50000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Cache-Control"] = "no-cache";
axios.defaults.headers.post["pragma"] = "no-cache";
axios.interceptors.request.use((request) => {
    request.headers['PRIVATE-TOKEN'] = process.env.GITLAB_ROOT_TOKEN
    request.headers['user-agent'] = new UserAgent().toString()
    return request;
})
axios.interceptors.response.use((response)=>{
    console.log(response)
    return response
})
module.exports = {
    post:(url, data, otherConfig)=>{
        return axios.post(url, data, otherConfig);
    },
    get:(url, data, otherConfig)=>{
        return axios.get(url, { params: data, ...otherConfig });
    }
}