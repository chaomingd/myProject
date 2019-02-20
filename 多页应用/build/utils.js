const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageConfig = require('../package.json');
const glob = require('glob');

exports.assetsPath = function(_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        config.build.assetsSubDirectory :
        config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(options) {
    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap,
        },
    };

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap,
        },
    };

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader];

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap,
                }),
            });
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader',
                publicPath: '../',
            });
        }
        return ['vue-style-loader'].concat(loaders);

    }
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', {indentedSyntax: true}),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus'),
    };
};

exports.styleLoaders = function(options) {
    const output = [];
    const loaders = exports.cssLoaders(options);

    for (const extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader,
        });
    }

    return output;
};

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier');

    return (severity, errors) => {
        if (severity !== 'error') return;

        const error = errors[0];
        const filename = error.file && error.file.split('!').pop();

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png'),
        });
    };
};

exports.getEntries = function(globPath, isJsEntry) {
    const entries = {};
    glob.sync(globPath).forEach(function(entry) {
        const tmp = entry.split('/').splice(-3);
        const moduleName = tmp.slice(1, 2);
        entries[moduleName] = entry;
    });
    if (isJsEntry) entries.vendor = glob.sync('./src/vendor/*.js');
    return entries;
};
exports.getVideosEntries = function(globPath) {
    const entries = [];
    glob.sync(globPath).forEach(function(entry) {
        const path = {};
        path.from = entry;
        path.to = './videos';
        entries.push(path);
    });
    return entries;
};
exports.getSingleVideosEntries = function(globPath) {
    const entries = [];
    glob.sync(globPath).forEach(function(entry) {
        const path = {};
        path.from = entry;
        path.to = './video';
        entries.push(path);
    });
    return entries;
};
exports.getPanelEntries = function(globPath, isJsEntry) {
    const paths = {assetsRoots: [], entries: [], moduleNames: [], videoPaths: {}};
    glob.sync(globPath).forEach(function(entry) {
        const tmp = entry.split('/').splice(-3);
        const moduleName = tmp.slice(1, 2);
        const videoPath = glob.sync(`${entry}/videos`);
		if (videoPath.length !== 0) paths.videoPaths[moduleName] = videoPath[0];
        // const singleVideoPath = glob.sync(`${entry}/video`);
		// if (singleVideoPath.length !== 0) paths.singleVideoPaths[moduleName] = singleVideoPath[0];
		
        paths.moduleNames.push(moduleName);
        if (moduleName[0] === 'index') {
            paths.assetsRoots.push(config.build.assetsRoot);
        } else {
            paths.assetsRoots.push(`${config.build.assetsRoot}/${moduleName[0]}`);
        }
        if (isJsEntry) {
            const obj = {};
            obj.app = entry + 'index.js';
            obj.vendor = glob.sync('./src/vendor/*.js');
            paths.entries.push(obj);
        } else {
            paths.entries.push(entry + 'index.html');
        }
    });
    return paths;
};