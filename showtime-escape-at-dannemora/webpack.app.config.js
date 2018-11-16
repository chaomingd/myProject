const webpack = require('webpack');
const path = require('path');

module.exports = options => ({
    resolve: {
        alias: {
            createjs: path.resolve('./src/lib/createjs.js'),
            CjsLoader: path.resolve('./src/lib/CjsLoader.js'),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            createjs: 'imports-loader?this=>global!exports-loader?createjs!createjs',
            CjsLoader: 'imports-loader?this=>global!exports-loader?CjsLoader!CjsLoader',
        }),
	],
});