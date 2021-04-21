const os = require('os');
module.exports = {
    getLocalIP: ()=>{
        const ifaces = os.networkInterfaces();
        let locatIp = '';
        for (let dev in ifaces) {
            if (dev === 'en0' || dev === 'eth0') {
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