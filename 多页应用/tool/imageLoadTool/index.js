const fs = require('fs');
const path = require('path');
const colors = require('colors');
const filePath = path.resolve('./src/modules');


function fileDisplay(filePath) {
    fs.readdir(filePath, function(err, files) {
        if (err) {
            console.warn(err);
        } else {
            files.forEach(function(filename) {
				if (filename.indexOf('.') === 0 || filename.toLocaleLowerCase() === 'index'){
					return;
				}
				const filedir = path.join(filePath, filename);
				
				fs.readdir(filedir, function(err, files) {
					if (err) {
						console.warn(err);
					} else {
						files.forEach(function(childFilename) {
							const childFiledir = path.join(filedir, childFilename);
							// console.log(childFiledir);
							fs.stat(childFiledir, function(eror, stats){
								if (eror){
									console.warn('获取文件stats失败');
								} else {
									const isFile = stats.isFile();
									const isDir = stats.isDirectory();
									if (isDir && (childFilename.toLocaleLowerCase() === 'image' || childFilename.toLocaleLowerCase() === 'images')){
										fs.readdir(childFiledir, function(err, imgFiles){
											if (err) {
												console.warn(err);
											} else {
												// console.log(imgFiles);
												if (imgFiles.length > 0){
													let stringContent = '\t\t<div class="loading-img" v-show="false">\n';
													imgFiles.forEach(function(name){
														if (name.indexOf('.') === 0){
															return;
														}
														stringContent += `\t\t\t<div class="preload"><img src="../../${childFilename}/${name}"/></div>\n`;
													});
													stringContent += '\t\t</div>';

													// console.log(stringContent);
													// console.log('');

													const loadFileUrl = path.join(filePath, `${filename}/components/Loading`);
													if (fs.existsSync(loadFileUrl)) {
														const loadContent = fs.readFileSync(`${loadFileUrl}/Loading.vue`, 'utf-8');
														
														const regStr = `<!-- ImageLoad Start -->([\\s\\S]*?)<!-- ImageLoad End -->`;
														const reg = new RegExp(regStr, 'gi');
														const resultContent = loadContent.replace(reg, `<!-- ImageLoad Start -->\n${stringContent}\n\t\t<!-- ImageLoad End -->`);

														fs.writeFileSync(`${loadFileUrl}/Loading.vue`, resultContent);

														console.log(`${childFiledir} Picture loading completed`.green);

													}
												}
											}
										});
									}
								}
							});
						});
					}
				});
            });
        }
    });
}

fileDisplay(filePath);