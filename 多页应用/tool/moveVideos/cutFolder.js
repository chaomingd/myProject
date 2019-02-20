
const fs = require('fs');
const path = require('path');

function cutFileSync(source, target, rootSource) {
    let targetFile = target;
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }
	fs.writeFileSync(targetFile, fs.readFileSync(source));
	fs.unlinkSync(source);
	try {
		fs.rmdirSync(path.dirname(source));
		fs.rmdirSync(path.dirname(rootSource));
	} catch (err) {
		
	}
}

function findFolderRecursiveSync(source, target) {
	let files = [];
	if (!fs.existsSync(source)) return;
	if (!fs.existsSync(target)) fs.mkdirSync(target);
	const targetFolder = path.join(target, path.basename(source));
	if (!fs.existsSync(targetFolder)) {
		fs.mkdirSync(targetFolder);
	}
	if (fs.lstatSync(source).isDirectory()) {
		files = fs.readdirSync(source);
		files.forEach(function(file) {
			const curSource = path.join(source, file);
			if (fs.lstatSync(curSource).isDirectory()) {
				findFolderRecursiveSync(curSource, targetFolder);
			} else {
				cutFileSync(curSource, targetFolder, source);
			}
		});
		
	}
}
function removeMedia() {
    let files = [];
	const mediaPath = path.resolve('./deploy/media');
	if (!fs.existsSync(mediaPath)) return;
	if (fs.lstatSync(mediaPath).isDirectory()) {
        files = fs.readdirSync(mediaPath);
		files.forEach(function(file) {
            const targetSource = path.join(mediaPath, file);
            fs.unlinkSync(targetSource);
			try {
				fs.rmdirSync(mediaPath);
			} catch (err) {
				
			}
		});
	}
}

module.exports = {
	cut(source, target){
		removeMedia();
		findFolderRecursiveSync(source, target);
	},
};