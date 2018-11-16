const fs = require('fs');
const path = require('path');
const rootPath = path.resolve('./src/cjsAnims');

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

function replaceImageSrc(lines) {
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
	if (!fs.existsSync(filePath)) return;
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
						if (isFile) {
							const extname = path.extname(filedir);
							const dirname = path.dirname(filedir);
							if (extname === '.js' && dirname !== rootPath) {
								let content = fs.readFileSync(filedir, 'utf-8');
								content = content.replace(replaceType2, replayStrId);
								const lines = content.split('\n');
								const targetLineNum = checkRootLine(lines);
								replaceImageSrc(lines);
								if (targetLineNum > 0) {
									lines[targetLineNum + 1] = replayStrRoot;
									const changedContent = lines.join('\n');
									fs.writeFileSync(filedir, changedContent);
									fs.renameSync(filedir, `${dirname}/index.js`);
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

function editIndexJs(filePath) {
	if (!fs.existsSync(filePath)) return;
	let importContent = '';
	let idsGroup = 'const compositionIds = {\n';
	fs.readdir(filePath, (err, files) => {
		if (err) {
			console.log(err);
		} else {
			let index = 1;
			files.forEach(fileName => {
				const filedir = path.join(filePath, fileName);
				const extname = path.extname(filedir);

				if (extname !== '.js' && fileName !== '.DS_Store') {
					const lineText = `import cjsId${index} from './${fileName}';\n`;
					importContent += lineText;
					idsGroup += `\t${fileName}: cjsId${index},\n`;
					index += 1;
				}
			});
		}
		importContent += '\n';
		idsGroup += '};\nexport default compositionIds;\n';
		fs.writeFileSync(`${filePath}/index.js`, importContent + idsGroup);
		console.log(importContent + idsGroup)
	});
}

editIndexJs(rootPath);
fileDisplay(rootPath);

console.log('===');
