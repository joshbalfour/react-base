const webpack = require('webpack')
const path = require('path')
const PostCssImportPlugin = require('postcss-import')
const PostCssUrlPlugin = require('postcss-url')
const PostCssNextPlugin = require('postcss-cssnext')
const PostCssReporterPlugin = require('postcss-reporter')

const __ENV__ = 'production'

const definePlugin = new webpack.DefinePlugin({
	__ENV__,
	__DEV__: __ENV__ === 'development',
	__PROD__: __ENV__ === 'production',

	__APP__: false,
	__SERVER__: true,
	__CLIENT__: false,
	__IOS__: false,
	__ANDROID__: false,
})

module.exports = {
	externals: {
		jsdom: 'window',
		cheerio: 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/addons': true,
		'react/lib/ReactContext': 'window',
		'text-encoding': 'window',
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname, '..', 'src/'),
					path.resolve(__dirname, '..', 'node_modules/'),
				],
				loader: 'babel',
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, '..', 'src/'),
				loader: 'isparta',
			},
		],

		loaders: [
			{
				test: /\.js?$/,
				include: /src/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				loaders: [
					'style?sourceMap',
					'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
				],
			},
			{
				test: /\.scss$/,
				loaders: [
					'style?sourceMap',
					'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader',
				],
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
			{	test: /\.jpg$/,
				loader: 'file-loader',
			},
		],
	},
	postcss() {
		return [
			new PostCssImportPlugin({
				addDependencyTo: webpack,
				path: path.resolve(__dirname, '..', 'src', 'styles'),
			}),
			new PostCssUrlPlugin(),
			new PostCssNextPlugin(),
			new PostCssReporterPlugin(),
		]
	},
	resolve: {
		root: [
			path.resolve(__dirname, '..', 'src'),
			path.resolve(__dirname, '..', 'src', 'components'),
			path.resolve(__dirname, '..', 'src', 'styles'),
		],
		extensions: ['', '.js', '.json', '.css'],
	},
	plugins: [
		definePlugin,
	],
	watch: false,
	devtool: 'inline-source-map',
	node: {
		fs: 'empty',
	},
	cache: true,
}
