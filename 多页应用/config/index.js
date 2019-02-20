;
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
    dev: {
    // Paths
        assetsSubDirectory: '',
        assetsPublicPath: '/',
        proxyTable: {},
        test: '',

        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
        useEslint: false,
     
        showEslintErrorsInOverlay: false,
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true,
    },
    build: {
        assetsRoot: path.resolve(__dirname, '../deploy'),
        assetsSubDirectory: '',
        assetsPublicPath: './',

        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js'],

        bundleAnalyzerReport: process.env.npm_config_report,
    },
};
