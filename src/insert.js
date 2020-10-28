const fs = require('fs');
const path = require('path');
const readline = require('readline');
const readTemplate = require('./readTemplate');

/**
 * Insert code snippets into the file
 * @param {string} codename insert code name
 * @param {string} filename file path and name
 * @param {Command} opt options  
 */
module.exports = function(codename, filename, opt) {
    var code = '';
    switch (codename) {
        case 'cookie':
            code = readTemplate('cookie.js');
            break;
        case 'vue':
            code = readTemplate('vue.js');
            break;
        case 'component':
            code = readTemplate('vueComponent.js');
            break;
        default:
            return console.log('[ERR] Can’t find code snippet ['.red + codename.bold + ']'.red);
    }

    var filePath = path.resolve(filename);
    var arr = [];

    var read = fs.createReadStream(filePath);
    var rl = readline.createInterface({
        input: read
    });
    var currentRow = 1;
    var insertRow = (typeof opt.row === 'undefined') ? -1 : parseInt(opt.row);
    rl.on('line', function (line) {
        if (currentRow == insertRow) {
            arr.push(code);
        }
        arr.push(line);
        currentRow++;
    });
    rl.on('close', function () {
        console.log(currentRow)
        if (1 > insertRow || insertRow >= currentRow || currentRow == 1) {
            arr.push(code);
        }
        var r = arr.join('\n');
        fs.writeFileSync(filePath, r);
    });
}