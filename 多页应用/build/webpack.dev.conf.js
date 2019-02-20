const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const glob = require('glob');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const pages = utils.getEntries('./src/modules/**/index.html', false);
const htmls = [];
for (let page in pages) {
    htmls.push(new HtmlWebpackPlugin({
        filename: page + '.html',
        template: pages[page],
        title: 'Intel_DigitalConsumerGuide',
        inject: true,
        chunks: [page, 'vendor', 'manifest'],
		defautClass: 'noScrollBar',
    })
    );
    if (page === 'index') {
        htmls.push(new HtmlWebpackPlugin({
            filename: 'index-rtl.html',
            template: pages[page],
            inject: true,
            title: 'Intel_DigitalConsumerGuide',
            rtl: 'rtl',
            chunks: [page, 'vendor', 'manifest'],
			defautClass: 'rtl noScrollBar',
        })
        );
    }
}

const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.txt$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: utils.assetsPath('data/[name]-[hash:7].[ext]'),
                },
            },
        ].concat(utils.styleLoaders({sourceMap: config.dev.cssSourceMap, usePostCSS: true}))
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html')},
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay
            ? {warnings: false, errors: true}
            : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env'),
            'URL_TYPE': JSON.stringify("type1"),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
    ].concat(htmls),
});

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            devWebpackConfig.devServer.port = port;

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://localhost:${port}`],
                },
                onErrors: config.dev.notifyOnErrors
                    ? utils.createNotifierCallback()
                    : undefined,
            }));

            resolve(devWebpackConfig);
        }
    });
});
