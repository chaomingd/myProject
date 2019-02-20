const fs = require('fs');
const path = require('path');
const copyFolder = require('./cutFolder');
let videoModuleName = '';

function readyConfig() {
    const sourcePath = path.resolve(`./deploy/${videoModuleName}/data/config.txt`);
    const content = fs.readFileSync(sourcePath, 'utf-8');
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const text = lines[i];
        if (text.indexOf('link') > 0) {
            const textSplit = text.split('/');
            moduleName = textSplit[textSplit.length - 1].split('.')[0].replace('"', '');
            lines[i] = `\t\t"link": "./videos/${moduleName}"`;
            copyFolder.cut(path.resolve(`./deploy/${moduleName}`), path.resolve(`./deploy/${videoModuleName}/videos`));
        }
    }
    const changedContent = lines.join('\n');
    fs.writeFileSync(sourcePath, changedContent);
}
module.exports = {
	move(multipleVideoName){
        videoModuleName = multipleVideoName;
		readyConfig();
	},
};
