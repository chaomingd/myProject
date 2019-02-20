
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackPanelConfig = require('./webpack.base.panel.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const env = require('../config/prod.env');

const webpackbuildConfig = [];
const {assetsRoots, entries, moduleNames, videoPaths} = utils.getPanelEntries('./src/modules/*/', false);

const isBuildChildRtl = process.argv[2] === 'rtl';

baseWebpackPanelConfig.map((baseConfig, index) => {
    const plugins = [];
    plugins.push(
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: entries[index],
            inject: true,
            chunks: ['app', 'vendor', 'manifest'],
            defautClass: 'noScrollBar',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            },
            chunksSortMode: 'dependency',
        })
    );
    if (moduleNames[index][0] === 'index') {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: 'index-rtl.html',
                template: entries[index],
                inject: true,
                chunks: ['app', 'vendor', 'manifest'],
                rtl: 'rtl',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                },
                chunksSortMode: 'dependency',
            }),
            new CleanWebpackPlugin(['deploy.zip'], {
                root: path.join(__dirname, '../'),
                verbose: true,
                dry: false,
            }),
        );
    } else if(isBuildChildRtl) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: 'index-rtl.html',
                template: entries[index],
                inject: true,
                chunks: ['app', 'vendor', 'manifest'],
                rtl: 'rtl',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                },
                chunksSortMode: 'dependency',
            }),
        );
    }
    // if (videoPaths[moduleNames[index]]){
    //     plugins.push(
    //         new CopyWebpackPlugin([{
    //             from: videoPaths[moduleNames[index]],
    //             to: `./videos`,
    //         }]),
    //     );
    // }
    plugins.push(
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../src/favicon.ico'),
            to: `./`,
        }]),
    );

    const webpackConfig = merge(baseConfig, {
        module: {
            rules: utils.styleLoaders({
                sourceMap: config.build.productionSourceMap,
                extract: true,
                usePostCSS: true,
            }),
        },
        devtool: config.build.productionSourceMap ? config.build.devtool : false,
        output: {
            path: assetsRoots[index],
            filename: utils.assetsPath('js/[name].[chunkhash].js'),
            chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': env,
                'URL_TYPE': JSON.stringify("default"),
            }),
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                    },
                },
                sourceMap: config.build.productionSourceMap,
                parallel: true,
            }),
            new ExtractTextPlugin({
                filename: utils.assetsPath('css/[name].[contenthash].css'),
                allChunks: true,
            }),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks(module) {
                    // any required modules inside node_modules are extracted to vendor
                    return (
                        module.resource &&
                        /\.js$/.test(module.resource) &&
                        module.resource.indexOf(
                            path.join(__dirname, '../node_modules')
                        ) === 0
                    );
                },
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                minChunks: Infinity,
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'app',
                async: 'vendor-async',
                children: true,
                minChunks: 3,
            }),
            
        ].concat(plugins),
    });
    webpackbuildConfig.push(webpackConfig);
});
module.exports = webpackbuildConfig;
