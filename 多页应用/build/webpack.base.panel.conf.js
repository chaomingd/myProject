
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay,
    },
});

const moduleLoaders = [{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueLoaderConfig,
},
{
    test: /\.txt$/,
    loader: 'url-loader',
    options: {
        limit: 1,
        name: utils.assetsPath('data/[name].[ext]'),
    },
},
{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
},
{
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
        limit: 1,
        name: utils.assetsPath('images/[name]-[hash:7].[ext]'),
    },
},
{
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    options: {
        limit: 10000,
        name: utils.assetsPath('video/[name].[hash:7].[ext]'),
    },
},
{
    test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    loader: 'url-loader',
    options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[ext]'),
        publicPath: process.env.NODE_ENV === 'production' ?
            '../' : '/',
    },
},
];
const plugins = [
    
];
const node = {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
};
const externals = {
    jquery: 'window.$',
    TweenMax: 'window.TweenMax',
};
const {assetsRoots, entries, moduleNames} = utils.getPanelEntries('./src/modules/*/', true);
console.log(entries)
const webpackBaseConfig = assetsRoots.map((path, index) => ({
    entry: entries[index],
    output: {
        path,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        },
    },
    module: {
        rules: [
            ...config.dev.useEslint ? [createLintingRule()] : [],
            ...moduleLoaders,
        ],
    },
    plugins,
    node,
    externals,
}));
module.exports = webpackBaseConfig;