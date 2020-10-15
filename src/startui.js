const http = require('http');
const openurl = require('./utils/openurl');
const baseUrl = '127.0.0.1';



/**
 * Create an http server, which contains visual tools
 * @param {Command} opt options
 */
module.exports = function(opt) {
    const server = http.createServer(httpHandle);
    //Server
    server.listen(opt.port, baseUrl, function() {
        const url = `http://${baseUrl}:${opt.port}`;
        console.log('usopp ui is start at:'.green + url);
        if(opt.open) {
            openurl(url)
        }
    })
}

function httpHandle(req, res) {
    res.setHeader('Server', 'USOPP/1.0');
    res.write("fsdfsd\n"); // 会触发 transfer-encoding
    res.end();
}