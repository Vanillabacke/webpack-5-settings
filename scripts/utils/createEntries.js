const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEVELOP_CONFIG = require('../config')

const createEntries = ( entries = {}, options = {} ) => {

    options = {
        // inputBase: '../../src',
        // outputBase: '../../app/public',

        // pluginBase: '/wp-content/plugins',
        // themeBase: '/wp-content/themes',
        
        // pluginDir: 'custom-client',
        // themeDir: 'custom-theme',
       
        // clean: false,
       
        ... DEVELOP_CONFIG.defaults, 
        ... options,
    }

    const result = {
        entry: {},
        output: {
            path: path.resolve(__dirname, options.outputBase ),
            filename: '[name].js',
            clean: options.clean,
        },
    }

    Object.keys( entries ).map( key => {
        const folderKey = key
            .replace('__PLUGIN_DIR__', `${options.pluginBase}/${options.pluginDir}`)
            .replace('__THEME_DIR__', `${options.themeBase}/${options.themeDir}`)

        const folderValue = path.resolve(__dirname, `${options.inputBase}/${entries[key]}`) 

        result.entry = {
            ... result.entry,
            ... {
                [folderKey]: folderValue
            }
        }
    })
    

    return result
}

module.exports = createEntries