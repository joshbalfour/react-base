const __ENV__ = process.env.NODE_ENV || 'production'

console.log(`app ${__ENV__} build`)
const webpack = require('webpack')
const path = require('path')

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

const config = {
	entry: [
		'./app/index.ios.jsx',
	],
	devtool: 'source-map',
	output: {
		path: path.resolve('./app'),
		filename: 'index.ios.js',
		libraryTarget: 'commonjs',
	},
	externals: [
		(context, request, cb) => {
			if (request.indexOf('native') !== -1 && request.indexOf('react-native-redux-router') === -1) {
				cb(null, request)
			} else {
				cb()
			}
		},
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: [
					path.resolve('./src'),
					path.resolve('./app'),
					path.resolve('./store'),
					path.resolve('.'),
				],
				query: {
					presets: [
						'react-native',
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
				loader: 'null-loader',
			},
		],
	},
	plugins: [
		definePlugin,
	],
	resolve: {
		root: [
			path.resolve('./app'),
			path.resolve('./app/components'),
			path.resolve('./src'),
			path.resolve('./src/components'),
			path.resolve('./store'),
		],
		extensions: ['', '.js'],
	},
}

module.exports = config
