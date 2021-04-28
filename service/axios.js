const axios = require('axios');
const UserAgent = require('user-agents');
axios.defaults.timeout = 50000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Cache-Control"] = "no-cache";
axios.defaults.headers.post["pragma"] = "no-cache";
axios.interceptors.response.use((response)=>{
    return response
})
module.exports = {
    filter:(url)=>{
        const UrlArr = url.split('/')
        let urlStr = ''
        switch (UrlArr[0]) {
            case 'jenkins':
                urlStr = UrlArr.slice(1,(UrlArr.length)).join('/')
                axios.defaults.baseURL = 'http://'+process.env.JENKINS_HOST;
                axios.interceptors.request.use((request) => {
                    request.headers['user-agent'] = new UserAgent().toString()
                    request.auth = {
                        username: 'root',
                        password: process.env.JENKINS_ROOT_TOKEN
                    }
                    return request;
                })
                break;
            case 'gitlab':
                urlStr = UrlArr.slice(1,(UrlArr.length)).join('/')
                axios.defaults.baseURL = 'http://'+process.env.GITLAB_HOST;
                axios.interceptors.request.use((request) => {
                    request.headers['PRIVATE-TOKEN'] = process.env.GITLAB_ROOT_TOKEN
                    request.headers['user-agent'] = new UserAgent().toString()
                    return request;
                })
                break;
            default:
                urlStr = UrlArr.slice(1,(UrlArr.length)).join('/')
                break;
        }
        return urlStr
    },
    post:(url, data, otherConfig)=>{
        return axios.post(module.exports.filter(url), data, otherConfig);
    },
    get:(url, data, otherConfig)=>{
        return axios.get(module.exports.filter(url), { params: data, ...otherConfig });
    }
}