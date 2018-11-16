(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.black = function() {
	this.initialize(img.black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);


(lib.peo1 = function() {
	this.initialize(img.peo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1262,821);


(lib.peo2 = function() {
	this.initialize(img.peo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,834);


(lib.Railing1 = function() {
	this.initialize(img.Railing1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2712,628);


(lib.Railing2 = function() {
	this.initialize(img.Railing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,797,834);


(lib.wall = function() {
	this.initialize(img.wall);
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


(lib.wall_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wall();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wall_1, new cjs.Rectangle(0,0,1605,872), null);


(lib.shadown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj9FWIAAqrIH7AAIAAKrg");
	this.shape.setTransform(195.5,737.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadown, new cjs.Rectangle(0,0,797,834), null);


(lib.Railing2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Railing2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Railing2_1, new cjs.Rectangle(0,0,1605,872), null);


(lib.Railing1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Railing1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Railing1_1, new cjs.Rectangle(0,0,2712,628), null);


(lib.peo2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.peo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo2_1, new cjs.Rectangle(0,0,1024,834), null);


(lib.peo_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.peo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo_walk, new cjs.Rectangle(0,0,1262,821), null);


(lib.peo1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.peo_walk();
	this.instance.parent = this;
	this.instance.setTransform(631,410.5,1,1,0,0,0,631,410.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo1_1, new cjs.Rectangle(0,0,1262,821), null);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.peo1_1();
	this.instance.parent = this;
	this.instance.setTransform(172.6,296.8,0.6,0.6,0,0,0,630.8,410.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({regX:630.9,regY:410.7,scaleX:0.64,scaleY:0.64,x:325.8,y:288.8},167,cjs.Ease.quadInOut).wait(6));

	// Layer_3
	this.instance_1 = new lib.peo2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.8,321.6,0.56,0.56,0,0,0,511.8,417.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({scaleX:0.64,scaleY:0.64,x:63.8,y:284.7,alpha:1},167,cjs.Ease.quadInOut).wait(6));

	// Layer_2
	this.instance_2 = new lib.shadown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.8,321.6,0.56,0.56,0,0,0,511.8,417.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({scaleX:0.64,scaleY:0.64,x:133.8,y:284.7},167,cjs.Ease.quadInOut).wait(6));

	// Layer_4
	this.instance_3 = new lib.black();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-225,-6,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(185));

	// Layer_6
	this.instance_4 = new lib.Railing1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-246.5,176.3,0.637,0.637,0,0,0,802.3,304.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({regX:802.4,x:-260.5},167,cjs.Ease.quadInOut).wait(6));

	// Layer_5
	this.instance_5 = new lib.Railing2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(215.8,272.6,0.637,0.637,0,0,0,802.4,436.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({x:201.8},167,cjs.Ease.quadInOut).wait(6));

	// Layer_7
	this.instance_6 = new lib.wall_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(215.8,272.6,0.637,0.637,0,0,0,802.4,436.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({x:201.8},167,cjs.Ease.quadInOut).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-487.7,252.3,2362.7,889.8);
// library properties:
lib.properties = {
	id: 'A22DA123DE3B4C8CA374044A35924F8AHLHHJLLJL',
	width: 540,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:require('./images/black.png?1541919367859'), id:"black"},
		{src:require('./images/peo1.png?1541919367859'), id:"peo1"},
		{src:require('./images/peo2.png?1541919367859'), id:"peo2"},
		{src:require('./images/Railing1.png?1541919367859'), id:"Railing1"},
		{src:require('./images/Railing2.png?1541919367859'), id:"Railing2"},
		{src:require('./images/shadow.png?1541919367859'), id:"shadow"},
		{src:require('./images/wall.png?1541919367859'), id:"wall"}
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
an.compositions['A22DA123DE3B4C8CA374044A35924F8AHLHHJLLJL'] = {
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