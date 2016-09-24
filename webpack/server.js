const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const PostCssImportPlugin = require('postcss-import')
const PostCssUrlPlugin = require('postcss-url')
const PostCssCssnextPlugin = require('postcss-cssnext')
const PostCssReporterPlugin = require('postcss-reporter')

const __ENV__ = process.env.NODE_ENV || 'production'

console.log(`server ${__ENV__} build`)

const definePlugin = new webpack.DefinePlugin({
	__ENV__,
	__DEV__: __ENV__ === 'development',
	__PROD__: __ENV__ === 'production',

	__APP__: false,
	__SERVER__: true,
	__CLIENT__: false,
	__IOS__: false,
	__ANDROID__: false,

	'process.env.NODE_ENV': __ENV__,
})

const config = {
	context: path.resolve(__dirname, '..'),
	target: 'node',
	entry: [
		'babel-polyfill',
		'./server/server.js',
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
					path.resolve(__dirname, '../store'),
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
					path.resolve(__dirname, '../store'),
				],
				query: {
					presets: [
						'react',
						'es2015',
						'stage-0',
					],
					plugins: [
						'transform-async-to-generator',
						'transform-strict-mode',
						'transform-class-properties',
						'transform-object-rest-spread',
					],
				},
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
			path.resolve(__dirname, '../store'),
			path.resolve(__dirname, '../src/components'),
			path.resolve(__dirname, '../src/styles'),
		],
		extensions: ['', '.js', '.json', '.css'],
	},
	externals: [nodeExternals()],
	devtool: 'sourcemap',
	cache: true,
}

if (__ENV__ === 'development') {
	config.devtool = 'source-map'
	config.debug = true
}

module.exports = config
