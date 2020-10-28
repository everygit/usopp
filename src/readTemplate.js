const fs = require('fs');
const path = require('path');

module.exports = function(pathStr) {
    var content = fs.readFileSync(path.resolve(__dirname, '..', 'template', 'insert', pathStr));
    return content.toString();
}