let execSync = require('child_process').execSync,
    // 已使用的端口
    usedPorts = [],
    // （初始）可使用的端口
    freePort = 10000,
    // 可用端口范围
    portStart = 10000;
    portEnd = 30000,
    // 查询最大步
    maxStep = 100000;

/**
 * 获取随机端口
 * @return {[type]} [description]
 */
function getRandomPort() {
    return Math.floor(Math.random() * (portEnd - portStart) + portStart);
}

function getFreePort() {
    console.log('Finding free port...');

    let stepIndex = 0,
        res = '',
        portSplitStr = ':';

    try {
        res = execSync('netstat -an', {
            encoding: 'utf-8'
        });
        usedPorts = res.match(/\s(0.0.0.0|127.0.0.1):(\d+)\s/g);

        if (!usedPorts) {
            usedPorts = res.match(/\s(\*|127.0.0.1)\.(\d+)\s/g);
            portSplitStr = '.';
        }

        usedPorts = usedPorts.map(item => {
            let port = item.split(portSplitStr);
            port = port.slice(-1)[0];
            return parseInt(port.slice(0, -1), 10);
        });

        usedPorts = [...new Set(usedPorts)];

        let portAvaliable = false;
        while (!portAvaliable) {
            freePort = getRandomPort();

            if (!usedPorts.includes(freePort)) {
                portAvaliable = true;
                console.log('Use port ' + freePort + ' for devServer\n');
            }

            if (++stepIndex > maxStep) {
                console.log('Cannot find free port for devServer\n');
                break;
            }
        }
    } catch(e) {
        console.log('Cannot find free port for devServer\n');
        console.log(e);
    }

    return freePort;
}

module.exports = getFreePort;
