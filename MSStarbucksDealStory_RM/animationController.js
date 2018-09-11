function AniController(aniRoot, aniStage, fps) {
	this.root = aniRoot;
	this.stage = aniStage;
	this.isTicked = false;
	this.autoPlay = true;
	this.tickHander = this.tickHander.bind(this);
	var that = this;
	this.root.anibox.addEventListener('playEnd',  ()=> {
		that.offTicker();
	});
	this.root.anibox.addEventListener('stopMiddle',()=> {
		if(!this.autoPlay){
			this.offTicker();
		}
	})
	if(this.root.anibox.firstAni){
		this.root.anibox.firstAni.addEventListener('stopMiddle',()=> {
			if(!this.autoPlay){
				this.offTicker();
			}
		})
	}
	createjs.Ticker.setFPS(fps);
}
AniController.prototype = {
	constructor: AniController,
	play: function (frame, callBack) {
		
		this.root.anibox.gotoAndPlay(frame === undefined?this.root.anibox.currentFrame + 1:frame);
		if (callBack) this.cb = callBack;
		this.onTicker();
	},
	pause: function (frame) {
		this.root.anibox.gotoAndStop(frame === undefined?this.root.anibox.currentFrame:frame);
		this.stage.update();
		this.offTicker();
	},
	gotoEnd: function(){
		this.root.gotoAndStop(this.root.totalFrames - 1);
		this.root.anibox.gotoAndStop(this.root.anibox.totalFrames - 1);
		updateMc(this.root);
		this.stage.update();
		this.offTicker();
	},
	onTicker: function () {
		if (this.isTicked) return;
		this.isTicked = true;
		createjs.Ticker.addEventListener('tick', this.tickHander);
	},
	offTicker: function () {
		if(this.isTicked === true){
			this.isTicked = false;
			createjs.Ticker.removeEventListener('tick', this.tickHander);
		}
	},
	tickHander: function () {
		this.stage.update();
	}
}
function updateMc(mc) {
	if(mc.children.length === 0) return;
	if(mc.gotoAndStop) mc.gotoAndStop(mc.totalFrames - 1);
	for (var i = 0; i < mc.children.length; i++) {
		const child = mc.children[i];
		if(child.gotoAndStop) child.gotoAndStop(mc.totalFrames - 1);
		if(child.children && child.children.length > 0) {
			updateMc(child)
		}
	}
}
var CjsLoader = {};
var controllerIndex = 0;
CjsLoader.load = function (AdobeAn,CompositionId, canvasSelector, callBack) {
	controllerIndex ++;  // control the origin order
	var canvas, stage, exportRoot;
	createjs.MotionGuidePlugin.install();
	canvas = document.getElementById(canvasSelector);
	var comp = AdobeAn.getComposition(CompositionId);
	var lib = comp.getLibrary();
	canvas.width =  lib.properties.width;
	canvas.height = lib.properties.height;
	if (lib.properties.manifest.length !== 0) {
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", function (evt) {
			handleFileLoad(evt, comp);
		});
		(function(index) {
			loader.addEventListener("complete", function (evt) {
				handleComplete(evt, comp,index);
			});
		})(controllerIndex);
		loader.loadManifest(lib.properties.manifest);
	} else {
		(function(index) {
			handleComplete({}, comp,index);
		})(controllerIndex)
	}
	function handleFileLoad(evt, comp,controllerIndex) {
		var images = comp.getImages();
		if (evt && (evt.item.type == "image")) {
			images[evt.item.id] = evt.result;
		}
	}
	function handleComplete(evt, comp,controllerIndex) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		if (lib.properties.manifest.length !== 0) {
			for (i = 0; i < ssMetadata.length; i++) {
				ss[ssMetadata[i].name] = new createjs.SpriteSheet({
					"images": [queue.getResult(ssMetadata[i].name)],
					"frames": ssMetadata[i].frames
				})
			}
		}
		exportRoot = new lib.Root();
		exportRoot.loop = false;
		exportRoot.currentFrame = 0;
		stage = new lib.Stage(canvas);
		stage.addChild(exportRoot);
		var lib = comp.getLibrary();
		AdobeAn.compositionLoaded(lib.properties.id);
		var controller = new AniController(exportRoot,stage,lib.properties.fps);
		callBack && callBack(controller,controllerIndex);
	};
}

