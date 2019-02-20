const fs = require('fs');
const path = require('path');
const filePath = path.resolve('./src/modules');

const root = process.argv[2] || './';
const replayStrRoot = '(lib.Root = function(mode,startPosition,loop) {';
const replayStrId = 'const keys = Object.keys(AdobeAn.compositions);\nexport default keys[keys.length - 1];';
const replaceType1 = '// stage content:';
const replaceType2 = 'var createjs, AdobeAn;';

function insertStr(target, str, index){
    // target.substr(index,str_px_pos);
}

function checkRootLine(lines){
    for (let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (line.indexOf(replaceType1) >= 0){
            return i;
        }
    }
    return -1;
}

function changeImageSrc(lines){
    for (let i = 0; i < lines.length; i++){
        let line = lines[i];
        if (line.indexOf('{src:') > 0){
            if (line.indexOf(`require('${root}`) >= 0) return;
            line = line.replace('"', `require('${root}`);
            lines[i] = line.replace('"', '\')');
        }
    }
}

function fileDisplay(filePath) {
    fs.readdir(filePath, function(err, files) {
        if (err) {
            console.warn(err);
        } else {
            files.forEach(function(filename) {
                const filedir = path.join(filePath, filename);

                fs.stat(filedir, function(eror, stats) {
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        const isFile = stats.isFile();
                        const isDir = stats.isDirectory();
                        const parentFiledir = path.resolve(filedir, '..').split('/');
                        const parentFileName = parentFiledir[parentFiledir.length - 1];
                        
                        if (isFile && parentFileName === 'cjs') {
                            let content = fs.readFileSync(filedir, 'utf-8');
                            content = content.replace(replaceType2, replayStrId);
                            const lines = content.split('\n');
                            const targetLineNum = checkRootLine(lines);
                            console.log(isFile, isDir, filedir, targetLineNum);
                            changeImageSrc(lines);
                            if (targetLineNum > 0) {
                                lines[targetLineNum + 1] = replayStrRoot;
                                const changedContent = lines.join('\n');
                                fs.writeFileSync(filedir, changedContent);
                            }
                        }
                        if (isDir) {
                            fileDisplay(filedir);
                        }
                    }
                });
            });
        }
    });
}

fileDisplay(filePath);