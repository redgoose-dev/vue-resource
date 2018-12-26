const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', '.json', '.vue', '.ts'],
		root: path.resolve(__dirname),
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'~': path.resolve(__dirname, 'src')
		}
	}
};
