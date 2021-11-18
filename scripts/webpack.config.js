const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const {
	createEntries,
	getArgFromCLI,
	getArgsFromCLI,
	getPath,
} = require('./utils')




const developConfig = require('./config');


const devMode = getArgFromCLI('--mode') != 'production'
const allowSourceMap = devMode




console.log( createEntries(developConfig.entries, developConfig.entriesConfig) )


module.exports = {
	
	stats: 'normal',

	... createEntries(developConfig.entries, developConfig.entriesConfig),


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
                //     // filename: "assets/fonts/[hash][ext]",
                //     // filename: "wp-content/themes/custom-theme/build/fonts/assets/fonts/[hash][ext]",
                //     // filename: `${getPath(`__THEME_DIR__/build/fonts`, {absolute: false, leadingSlash: false})}/[hash][ext]`,
                    
                    filename: `${getPath(`__THEME_DIR__/build/fonts`, {absolute: false, leadingSlash: false})}/[hash][ext]`,
                    // filename: `fonts/[hash][ext]`,
                    
                    // filename: `wp-content/themes/custom-theme/build/fonts/[hash][ext]`,
                    // filename: `${getPath(`__PLUGIN_DIR__/build/fonts`, {absolute: false, leadingSlash: false})}/[hash][ext]`,
                    // publicPath: '../',
                //     // filename: `assets/fonts/[hash][ext]`,
                //     // publicPath: '../'
                    
                //     // filename: `/[hash][ext]`,
                //     // publicPath: '../',

                //     // dataUrl: content => {

                //     //     console.log(content.toString())
                //     //     return content
                //     // }
                },
			}


		],
	},
};