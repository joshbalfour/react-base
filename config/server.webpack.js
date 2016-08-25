const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const PostCssImportPlugin = require('postcss-import')
const PostCssUrlPlugin = require('postcss-url')
const PostCssCssnextPlugin = require('postcss-cssnext')
const PostCssReporterPlugin = require('postcss-reporter')

const __ENV__ = 'production'

const definePlugin = new webpack.DefinePlugin({
	__DEV__: build === 'development',
	__PROD__: build === 'production',

	__APP__: false,
	__SERVER__: true,
	__CLIENT__: false,
	__IOS__: false,
	__ANDROID__: false,

	__ENV__: __ENV__,
	'process.env.NODE_ENV': __ENV__,
})

const config = {
	context: path.resolve(__dirname, '..'),
	target: 'node',
	entry: [
		'babel-polyfill',
		'./server/main.js',
	],
	output: {
		path: './dist',
		filename: 'server.js',
	},
	module: {
		preLoaders: [
			{
				test: /\.js/,
				loader: 'eslint',
				include: [
					path.resolve(__dirname, '../src'),
					path.resolve(__dirname, '../server'),
				],
			},
		],

		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, '../src'),
					path.resolve(__dirname, '../server'),
				],
			},

			{
				test: /\.css$/,
				loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
			},

			{
				test: /\.scss$/,
				loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader',
			},

			{
				test: /\.json$/,
				loaders: ['json-loader'],
			},
		],
	},
	postcss() {
		return [
			new PostCssImportPlugin({
				addDependencyTo: webpack,
				path: path.resolve(__dirname, '../src/styles'),
			}),
			new PostCssUrlPlugin(),
			new PostCssCssnextPlugin(),
			new PostCssReporterPlugin(),
		]
	},
	plugins: [
		definePlugin,
		new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false }),
	],
	resolve: {
		root: [
			path.resolve(__dirname, '../src'),
			path.resolve(__dirname, '../src/components'),
		],
		extensions: ['', '.js', '.json', '.css'],
	},
	externals: [nodeExternals()],
	devtool: 'sourcemap',
}

if (build === 'development') {
	config.devtool = 'source-map'
	config.debug = true
}

module.exports = config
