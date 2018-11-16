(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Iron_rod = function() {
	this.initialize(img.Iron_rod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);


(lib.lamp = function() {
	this.initialize(img.lamp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,87);


(lib.Prison = function() {
	this.initialize(img.Prison);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(0,0,1605,872), null);


(lib.Prison_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Prison();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Prison_1, new cjs.Rectangle(0,0,1605,872), null);


(lib.lron_rod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Iron_rod();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lron_rod, new cjs.Rectangle(0,0,1605,872), null);


(lib.lamp_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lamp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lamp_1, new cjs.Rectangle(0,0,1605,87), null);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.lamp_1();
	this.instance.parent = this;
	this.instance.setTransform(802.5,43.5,1,1,0,0,0,802.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146));

	// Layer_3
	this.instance_1 = new lib.lron_rod();
	this.instance_1.parent = this;
	this.instance_1.setTransform(802.5,436,1,1,0,0,0,802.5,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(146));

	// Layer_1
	this.instance_2 = new lib.shadow_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(802.5,436,1,1,0,0,0,802.5,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({alpha:0},125).wait(7));

	// Layer_2
	this.instance_3 = new lib.Prison_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(802.5,436,1,1,0,0,0,802.5,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(757.9,396,1697,994);
// library properties:
lib.properties = {
	id: '56E172C6505D425D9C475007580EFB1E',
	width: 1605,
	height: 872,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:require('./images/Iron_rod.png?1541930112401'), id:"Iron_rod"},
		{src:require('./images/lamp.jpg?1541930112401'), id:"lamp"},
		{src:require('./images/Prison.jpg?1541930112401'), id:"Prison"},
		{src:require('./images/shadow.png?1541930112401'), id:"shadow"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['56E172C6505D425D9C475007580EFB1E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
const keys = Object.keys(AdobeAn.compositions);
export default keys[keys.length - 1];