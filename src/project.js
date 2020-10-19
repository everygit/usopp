const {cpdirsSync} = require('@xiaoerr/io');
const path = require('path');

/**
 * Create a completely independent project based on the project template
 * @param {string} projecttype project type name
 * @param {string} path The path of the project to be created
 * @param {string} opt options
 */
module.exports = function(projecttype, foldername, spath, opt) {
    console.log('O(∩_∩)O~')
    switch(projecttype) {
        case 'simple':
            createSimpleProject(foldername, spath);
            break;
        default:
            console.log(`ERROR ${projecttype} Type items are not currently supported`.red);
    }
}

/**
 * Create a simple project
 * @param {string} foldername The name of the folder to create the project
 * @param {string} path Path to create project
 */
function createSimpleProject(foldername, spath) {
    var sourceFolder = path.resolve(__dirname, '..', 'template', 'project', 'simple');
    console.log(sourceFolder);
    var targetFolder = path.resolve(spath || '.');
    console.log(targetFolder);
}