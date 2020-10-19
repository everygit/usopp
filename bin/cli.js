#!/usr/bin/env node

require('colors');
const path = require('path');
const commander = require('commander');
const packageJson = require('../package.json');
const handle = require('../src/index');

const cmdName = packageJson.name;
const program = new commander.Command();

program.version(packageJson.version).name(cmdName);

program.command('ls [cmd]')
    .description('View project, script, style, page and other template names')
    .action(handle.queryList)

program.command('project <projecttype> <foldername> [path]')
    .alias('proj')
    .description("Create a project with a project template")
    .action(handle.createProject);

program.command('page [pagename]')
    .alias('p')
    .description('Create an html page with the page name')
    .option('-f, --force', 'Replace files without prompting', false)
    .action(test);

program.command('js <jsname>')
    .description('create a js file with file name')
    .option('-f, --force', 'Replace files without prompting', false)
    .option('-t, --type <type>', 'Replace files without prompting', 'empty')
    .action(test2);

program.command('insert <codename> <filename>')
    .alias('ins')
    .description('insert code to file with codename')
    .option('-r, --row <number>', 'Set to insert in the first few lines')
    .action(handle.insertCode);

program.command('ui')
    .alias('UI')
    .description('Open the visualization tool')
    .option('--no-open', 'Create a service without opening the page actively', false)
    .option('-p, --port <number>', 'The port number', '8516')
    .action(handle.startUI);


program.parse(process.argv);


function test(pageName, opt) {
    console.log("page name is ".green + pageName);
    console.log(opt.force)
    console.log(process.cwd())
    console.log(path.resolve('.'));
    console.log(__dirname);
}

function test2(jsName, cmd) {
    console.log('js name is '.green + jsName);
    console.log('js type is '.yellow + cmd.type);
}