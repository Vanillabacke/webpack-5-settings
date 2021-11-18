const path = require("path");
const DEVELOP_CONFIG = require('../config')


const getPath = ( folder = '', options = {} ) => {
	
    options = {
        ... DEVELOP_CONFIG.defaults,
        absolute: false,
        leadingSlash: true,
        ... options,
    }


    if( options.absolute) folder = path.resolve(__dirname, `${options.outputBase}/${folder}`)

    
    let folderKey = folder
        .replace('__PLUGIN_DIR__', `${options.pluginBase}/${options.pluginDir}`)
        .replace('__THEME_DIR__', `${options.themeBase}/${options.themeDir}`)

    if( options.leadingSlash) return folderKey

    return folderKey.replace(/^\//, '')
};




module.exports = {
	getPath,
};