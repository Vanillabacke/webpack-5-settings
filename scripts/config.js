
 const path = require( 'path' );
 const fs = require( 'fs' );
 

 const developBase = fs.realpathSync( process.cwd() );
 const resolvePlugin = relativePath => path.resolve( developBase, relativePath );


 const DEFAULTS = {
    inputBase: '../../src',
    outputBase: '../../site',

    pluginBase: '/plugins',
    themeBase: '/themes',
    
    pluginDir: 'custom-client',
    themeDir: 'custom-theme',

    clean: false,
}


const DEVELOP_CONFIG = {
    entries: {
        '__PLUGIN_DIR__/build/editor': 'editor.js',
        '__THEME_DIR__/build/style': 'style.js',
    },


    defaults: {
        ... DEFAULTS,
    },


    entriesConfig: {
        // inputBase: '../../src',
        // outputBase: '../../app/public',

        // pluginBase: '/wp-content/plugins',
        // themeBase: '/wp-content/themes',
        
        // pluginDir: 'custom-client',
        // themeDir: 'custom-theme',

        // clean: false,
    },
}

module.exports = DEVELOP_CONFIG