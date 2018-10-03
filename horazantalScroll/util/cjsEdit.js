const fs = require('fs');
const path = require('path');
const os = require('os');
const filePath = path.resolve('../src');


const root = process.argv[2] || './';
const replayStrRoot = '(lib.Root = function(mode,startPosition,loop) {';
const replayStrId =
  'const keys = Object.keys(AdobeAn.compositions);\nexport default keys[keys.length - 1];';
const replaceType1 = '// stage content:';
const replaceType2 = 'var createjs, AdobeAn;';

function checkRootLine(lines) {
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.indexOf(replaceType1) >= 0) {
      return i;
    }
  }
  return -1;
}

function changeImageSrc(lines) {
  for (let i = 0; i < lines.length; i += 1) {
    let line = lines[i];
    if (line.indexOf('{src:') > 0) {
      if (line.indexOf(`require('${root}`) >= 0) return;
      line = line.replace('"', `require('${root}`);
      lines[i] = line.replace('"', "')");
    }
  }
}


function fileDisplay(filePath) {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.warn(err);
    } else {
      files.forEach(filename => {
        const filedir = path.join(filePath, filename);

        fs.stat(filedir, (eror, stats) => {
          if (eror) {
            console.warn('eror');
          } else {
            const isFile = stats.isFile();
            const isDir = stats.isDirectory();
            const parentFiledir = path.resolve(filedir, '..').split('/');
            const parentFileName = parentFiledir[parentFiledir.length - 1];
            // console.log(parentFileName);
            if (isDir && parentFileName.lastIndexOf('cjsAnims') !== -1) {
              if (filedir.lastIndexOf('images') === -1) {
                const targetFile = path.resolve(filedir, 'index.js');
                let content = fs.readFileSync(targetFile, 'utf-8');
                content = content.replace(replaceType2, replayStrId);
                const lines = content.split('\n');
                const targetLineNum = checkRootLine(lines);
                //  console.log(isFile, isDir, path.resolve(filedir,'index.js'), targetLineNum);
                changeImageSrc(lines);
                if (targetLineNum > 0) {
                  lines[targetLineNum + 1] = replayStrRoot;
                  const changedContent = lines.join('\n');
                  fs.writeFileSync(targetFile, changedContent);
                }
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




//  write index.js


function generateIndex(filePath) {
  const fileNames = [];
  fs.readdir(filePath, function (err, files) {
    if (err) {
      throw err;
    }
    files.forEach((dir, i) => {
      fs.stat(path.resolve(filePath, dir), (err, stats) => {
        if (err) {
          console.log(err);
          return;
        }
        if (stats.isDirectory()) {
          fileNames.push(files[i]);
        }
        if (i === files.length - 1) {
          writeIndex(fileNames)
        }
      });
    });
  });
}

function writeIndex(fileNames) {
  const route = path.resolve(filePath, 'cjsAnims', 'index.js');
  let content = '';
  fileNames.forEach((fileName, i) => {
    content += `import cjsId${i + 1} from './${fileName}'; ${os.EOL}`;
  });
  content += `${os.EOL}const compositionIds = {${os.EOL}`;
  fileNames.forEach((fileName,i) => {
    content += `\t${fileName}: cjsId${ i + 1}, ${os.EOL}`;
  });
  content += `};${os.EOL}`;
  content += `${os.EOL}export default compositionIds;`

  fs.writeFile(route, content, function (err) {
    if (err) {
      throw err;
    }

    console.log('Saved.');

    // 写入成功后读取测试
    fs.readFile(route, 'utf-8', function (err, data) {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  });
}

generateIndex(path.resolve(filePath, 'cjsAnims'));





