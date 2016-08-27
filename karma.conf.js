const webpackConfig = require('./webpack/karma')

module.exports = config => {
	config.set({
		browsers: ['PhantomJS'],

		basePath: '',

		files: [
			'node_modules/babel-polyfill/dist/polyfill.js',
			{ pattern: 'webpack/tests.js', watched: false },
		],

		frameworks: ['jasmine'],

		preprocessors: {
			'webpack/tests.js': ['webpack', 'sourcemap'],
		},

		reporters: ['dots', 'coverage'],

		coverageReporter: {
			type: 'html',
			dir: 'coverage',
			instrumenterOptions: {
				istanbul: { noCompact: true },
			},
		},

		webpackServer: {
			noInfo: true,
		},

		singleRun: true,

		webpack: webpackConfig,
	})
}
