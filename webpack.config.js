module.exports = {
	entry: [
		'./src/App.js'
	],
	output: {
		path: __dirname + 'build',
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel'
		}]
	}
};
