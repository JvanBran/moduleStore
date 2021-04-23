const os = require('os');
module.exports = {
    getLocalIP: ()=>{
        const ifaces = os.networkInterfaces();
        let locatIp = '';
        for (let dev in ifaces) {
            //兼容mac linux windows
            if (dev === 'en0' || dev === 'eth0' || dev === '以太网') {
                for (let j = 0;j < ifaces[dev].length;j++) {
                    if (ifaces[dev][j].family === 'IPv4') {
                        locatIp = ifaces[dev][j].address;
                        break;
                    }
                }
            }
        }
        return {
            ip:locatIp,
            hostName:os.hostname()
        };
    }
}