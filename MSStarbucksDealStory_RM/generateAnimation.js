const fs = require('fs');
const path = require('path');
const os = require('os');
var assetsPath = path.resolve('assets');




const replayStrRoot = '(lib.Root = function(mode,startPosition,loop) {';
const replayStrId = '';
const replaceType1 = '// stage content:';
const replaceType2 = 'var createjs, AdobeAn;';
const replaceType3 = '})(createjs = createjs||{}, AdobeAn = AdobeAn||{});';

function checkRootLine(lines) {
	for (let i = 0; i < lines.length; i += 1) {
		const line = lines[i];
		if (line.indexOf(replaceType1) >= 0) {
			return i;
		}
	}
	return -1;
}

function generate() {
	var indexContent = '';
	function main(assetsPath) {
		const files = fs.readdirSync(assetsPath);
		files.forEach(function (file,index) {
			var filePath = path.resolve(assetsPath, file);
			const stat = fs.statSync(filePath);
			if (stat.isFile()) {
				if (file.indexOf('.js') !== -1 && file.indexOf('index') === -1) {
					var fileName = file.slice(0,file.indexOf('.'));
					console.log(filePath);
					let content = fs.readFileSync(filePath, 'utf-8');
					content = content.replace(replaceType2,'');
					const lines = content.split(os.EOL);
					const targetLineNum = checkRootLine(lines);
					//  console.log(isFile, isDir, path.resolve(filedir,'index.js'), targetLineNum);
					if (targetLineNum > 0) {
						lines[targetLineNum + 1] = replayStrRoot;
						
					}
					// change AdobeAn;
					var replacePosition = lines.indexOf(replaceType3)				
					if(replacePosition !== -1){
						lines[replacePosition] = '})(createjs,{});';
						lines[replacePosition - 1] =  `AdobeAn[${fileName}] = an;`
					}
					let changedContent = lines.join(os.EOL);
					indexContent += changedContent;
					
				}
			}
			if (stat.isDirectory()) {
				main(filePath);
			}
		});
	}
	main(assetsPath);
	console.log('end');
	indexContent = 'var AdobeAn = {};' + os.EOL + indexContent;
	fs.writeFileSync(path.resolve(assetsPath,'index.js'), indexContent);
}

generate();



