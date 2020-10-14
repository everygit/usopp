const fs = require('fs');
const path = require('path');

module.exports = function() {
    var content = fs.readFileSync(path.resolve(__dirname, '..', 'template', 'cookie.js'));
    return content.toString();
}