const cookie = require('./cookie');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const startUI = require('./startui.js');
const createProject = require('./project');


/**
 * View project, script, style, page and other template names
 * @param {string} cmd Need to query the command
 * @param {Command} opt Query parameters
 */
function queryList(cmd, opt) {
    console.log('Stay tuned 11'.yellow)
}

/**
 * Insert code snippets into the file
 * @param {string} codename insert code name
 * @param {string} filename file path and name
 * @param {Command} opt options  
 */
function insertCode(codename, filename, opt) {

    var code = '';
    switch (codename) {
        case 'cookie':
            code = cookie();
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
        if (1 > insertRow || insertRow > currentRow) {
            arr.push(line);
        }
        var r = arr.join('\n');
        fs.writeFileSync(filePath, r);
    });
}

module.exports = {
    queryList,
    insertCode,
    startUI,
    createProject
};