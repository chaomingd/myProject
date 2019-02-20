require('./check-versions')();
process.env.NODE_ENV = 'production';
const fs = require('fs');
const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.panel.conf');
const spinner = ora('building for production...');
const zipFolder = require('zip-folder');
const moveFolder = require('../tool/moveVideos');

const multipleVideoModuleName = process.argv[3] || 'BubbleNav';
const multipleVideoModulePath = path.resolve(`./src/modules/${multipleVideoModuleName}`);
const hasMultipleVideoModule = fs.existsSync(multipleVideoModulePath);

spinner.start();
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err;
    webpack(webpackConfig, (err, stats) => {
        spinner.stop();
        if (err) throw err;
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false,
        }) + '\n\n');
        if (stats.hasErrors()) {
            console.log(chalk.red('Build failed with errors.\n'));
            process.exit(1);
        }
        if(hasMultipleVideoModule) moveFolder.move(multipleVideoModuleName);
        console.log(chalk.cyan('  zipping...\n'));
        zipFolder(config.build.assetsRoot, `${config.build.assetsRoot}.zip`, function(err) {
            if (err) {
                console.log('oh no!', err);
            } else {
                console.log(chalk.cyan('  zipped...\n'));
                console.log(chalk.cyan('  Build complete.\n'));
                console.log(chalk.yellow(
                    '  Tip: built files are meant to be served over an HTTP server.\n' +
                    '  Opening index.html over file:// won\'t work.\n'
                ));
            }
        });
    });
});
