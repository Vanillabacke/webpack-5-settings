const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const {
	createEntries,
	getArgFromCLI,
	getArgsFromCLI,
	getPath,
} = require('./utils')




const developConfig = require('./config');


const analize = true //getArg('--analizer', false) ? true : false
// const phpWatch = getArg('--php', false) ? true : false
const devMode = getArgFromCLI('--mode') != 'production'
const allowSourceMap = devMode



function createCompiler( options = {} ){

    // defaults
    options = {
        input: './src/main.js',
        output: '/dist/main',
        outputName: 'bundle',
        ... options,
    }


    return {
        watch: devMode,
        devtool: false,
    	stats: 'normal',

        entry: {
            [options.outputName]: `${options.input}`,
        },

        output: {
            filename: `${options.outputName}.js`,
            path: path.resolve(__dirname, `../${options.output}`),
        },


        plugins: [
            new MiniCssExtractPlugin( {
                filename: '[name].css',
                chunkFilename: "[name].css",
            } ),
        ],

        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    resolve: {
                        extensions: [".js", ".jsx"]
                    },
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            configFile: path.resolve(__dirname, 'babel.editor.config.js'),
                        },
                    },
                },



                {
                    test: /\.(sc|sa|c)ss$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                    
                    
                    
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                    
                        
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    config: path.resolve(__dirname, "postcss.config.js"),
                                },
                            },
                        },
                    
                    
                        {
                            loader: 'sass-loader',
                        },
                    
                    ],
                },


                {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    type: "asset/resource",
                    generator: {
                        filename: './fonts/[hash][ext]'
                    },
                }


            ],
        },
    }
}



// // single entry
// module.exports = createCompiler({
//     input: './src/editor.js',
//     output: '/site/plugin',
//     outputName: 'editor',
// })

// multiple entries
module.exports = [
    createCompiler({
        input: './src/style.js',
        output: '/site/theme',
        outputName: 'theme',
    }),
    createCompiler({
        input: './src/editor.js',
        output: '/site/plugin',
        outputName: 'editor',
    })
]