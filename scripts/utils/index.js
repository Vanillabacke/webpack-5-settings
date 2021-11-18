const createEntries = require('./createEntries');
const { getArgFromCLI, getArgsFromCLI } = require('./args');
const { getPath } = require('./paths');




module.exports = {
    exit: process.exit,
    getCurrentWorkingDirectory: process.cwd,

    createEntries,
	getArgFromCLI,
	getArgsFromCLI,
    
    getPath,
};