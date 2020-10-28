const startUI = require('./startui.js');
const createProject = require('./project');
const insertCode = require('./insert');


/**
 * View project, script, style, page and other template names
 * @param {string} cmd Need to query the command
 * @param {Command} opt Query parameters
 */
function queryList(cmd, opt) {
    console.log('Stay tuned 11'.yellow)
}

module.exports = {
    queryList,
    insertCode,
    startUI,
    createProject
};