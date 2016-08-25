const __ENV__ = 'production'

let cssName = 'bundle.[chunkhash].css'

const webpack = require('webpack')
const path = require('path')
const ExtractPlugin = require('extract-text-webpack-plugin')
const PostCssImportPlugin = require('postcss-import')
const PostCssUrlPlugin = require('postcss-url')
const PostCssNextPlugin = require('postcss-cssnext')
const PostCssReporterPlugin = require('postcss-reporter')

const assets = require('./assets')

const definePlugin = new webpack.DefinePlugin({
	__ENV__,
	__DEV__: __ENV__ === 'development',
	__PROD__: __ENV__ === 'production',

	__APP__: false,
	__SERVER__: false,
	__CLIENT__: true,
	__IOS__: false,
	__ANDROID__: false,

	'process.env.NODE_ENV': __ENV__,
})

const extractPlugin = new ExtractPlugin(cssName, { allChunks: true, ignoreOrder: true })

const config = {
	context: path.resolve('.'),
	target: 'web',
	entry: [
		'babel-polyfill',
		'./node_modules/normalize.css/normalize.css',
		'./src/client.js',
		'./src/styles/globals.css',
	],
	output: {
		path: path.resolve('./dist/public'),
		filename: 'bundle.[chunkhash].js',
		publicPath: assets.base,
	},
	module: {
		preLoaders: [
			{
				test: /\.js/,
				loader: 'eslint',
				include: [
					path.resolve('./src'),
					path.resolve('./client'),
				],
			},
		],

		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				include: [
					path.resolve('./src'),
					path.resolve('./client'),
				],
			},
			{
				test: /\.css$/,
				loader: ExtractPlugin.extract('style', 'css-loader?modules&-minimize&-sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
			},
			{
				test: /\.json$/,
				loaders: ['json-loader'],
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff',
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader',
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=100000',
			},
			{ 	test: /\.jpg$/,
				loader: 'file-loader',
			},
		],
	},
	postcss() {
		return [
			new PostCssImportPlugin({
				addDependencyTo: webpack,
				path: path.resolve('./src/styles'),
			}),
			new PostCssUrlPlugin(),
			new PostCssNextPlugin(),
			new PostCssReporterPlugin(),
		]
	},
	plugins: [
		definePlugin,
		extractPlugin,
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress: {
				warnings: false,
			},
		}),
	],
	resolve: {
		root: [
			path.resolve('./src'),
			path.resolve('./src/components'),
		],
		extensions: ['', '.js'],
	},
	node: {
		fs: 'empty',
	},
}

if (__ENV__ === 'development') {
	config.plugins = [definePlugin, extractPlugin]

	config.devtool = 'source-map'
	config.debug = true

	cssName = 'bundle.css'
	config.output.filename = 'bundle.js'
}

module.exports = config