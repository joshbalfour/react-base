const __ENV__ = process.env.NODE_ENV || 'production'

console.log(`client ${__ENV__} build`)

const webpack = require('webpack')
const path = require('path')
const ExtractPlugin = require('extract-text-webpack-plugin')
const PostCssImportPlugin = require('postcss-import')
const PostCssUrlPlugin = require('postcss-url')
const PostCssNextPlugin = require('postcss-cssnext')
const PostCssReporterPlugin = require('postcss-reporter')
const ManifestPlugin = require('webpack-manifest-plugin')

const definePlugin = new webpack.DefinePlugin({
	__ENV__,
	__DEV__: __ENV__ === 'development',
	__PROD__: __ENV__ === 'production',

	__APP__: false,
	__SERVER__: false,
	__CLIENT__: true,
	__IOS__: false,
	__ANDROID__: false,
})

let extractPlugin = new ExtractPlugin('bundle.[chunkhash].css', { allChunks: true, ignoreOrder: true })

const manifestPlugin = new ManifestPlugin({ fileName: 'manifest.json' })

const config = {
	context: path.resolve('.'),
	target: 'web',
	entry: [
		'babel-polyfill',
		'./node_modules/normalize.css/normalize.css',
		'./client/index.js',
		'./src/styles/globals.css',
	],
	output: {
		path: path.resolve('./dist/public'),
		filename: 'bundle.[chunkhash].js',
		publicPath: '',
	},
	module: {
		preLoaders: [
			{
				test: /\.js/,
				loader: 'eslint',
				include: [
					path.resolve('./src'),
					path.resolve('./client'),
					path.resolve('./store'),
				],
			},
		],

		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [
					path.resolve('./src'),
					path.resolve('./client'),
					path.resolve('./store'),
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
		manifestPlugin,
	],
	resolve: {
		root: [
			path.resolve('./src'),
			path.resolve('./src/components'),
			path.resolve('./store'),
			path.resolve('./src/styles'),
		],
		extensions: ['', '.js', '.css'],
	},
	node: {
		fs: 'empty',
	},
	cache: true,
}

if (__ENV__ === 'development') {
	extractPlugin = new ExtractPlugin('bundle.dev.css', { allChunks: true, ignoreOrder: true })
	config.plugins = [definePlugin, extractPlugin, manifestPlugin]

	config.devtool = 'source-map'
	config.debug = true
	config.output.filename = 'bundle.dev.js'
}

module.exports = config
