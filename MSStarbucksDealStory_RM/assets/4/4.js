(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Map = function() {
	this.initialize(img.Map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,239);// helper functions:

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


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAnAAQAAAQgLAMQgMALgQAAQgPAAgMgLQgLgMAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPg");
	this.shape.setTransform(3.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CB13E").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgLgLg");
	this.shape_1.setTransform(3.9,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-1,-1,9.8,9.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAnAAQAAAQgLAMQgMALgQAAQgPAAgMgLQgLgMAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPg");
	this.shape.setTransform(3.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CB13E").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgLgLg");
	this.shape_1.setTransform(3.9,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,9.8,9.8), null);


(lib.Map_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Map();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Map_1, new cjs.Rectangle(0,0,572,239), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3copy();
	this.instance.parent = this;
	this.instance.setTransform(3.9,3.9,1,1,0,0,0,3.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(-0.5,-0.5,8.8,8.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(3.9,3.9,1,1,0,0,0,3.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.5,-0.5,8.8,8.8), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2copy();
	this.instance.parent = this;
	this.instance.setTransform(4,4,0.064,0.064,0,0,0,3.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.21,scaleY:1.21},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:3.9,y:3.9},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,3.7,0.6,0.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(4,4,0.064,0.064,0,0,0,3.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:3.8,regY:3.8,scaleX:1.44,scaleY:1.44,x:3.9,y:3.9},12,cjs.Ease.quadInOut).to({regX:3.9,regY:3.9,scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,3.7,0.6,0.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_142 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(142).call(this.frame_142).wait(1));

	// Layer_22
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(871.4,136,1,1,0,0,0,3.9,3.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(123));

	// Layer_21
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(849.8,141.4,1,1,0,0,0,3.9,3.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(124));

	// Layer_20
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(871.4,70.6,1,1,0,0,0,3.9,3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(125));

	// Layer_19
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(823.2,91,1,1,0,0,0,3.9,3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(126));

	// Layer_18
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(836.8,132.4,1,1,0,0,0,3.9,3.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).wait(127));

	// Layer_17
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(816.4,131.5,1,1,0,0,0,3.9,3.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(128));

	// Layer_16
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(705.4,116.5,1,1,0,0,0,3.9,3.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).wait(129));

	// Layer_15
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(707.4,128.4,1,1,0,0,0,3.9,3.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(130));

	// Layer_14
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(694.9,139.1,1,1,0,0,0,3.9,3.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).wait(131));

	// Layer_13
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(703.9,144.8,1,1,0,0,0,3.9,3.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).wait(132));

	// Layer_12
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(694.4,155.9,1,1,0,0,0,3.9,3.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(133));

	// Layer_11
	this.instance_11 = new lib.Symbol1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(542.6,157.4,1,1,0,0,0,3.9,3.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).wait(134));

	// Layer_10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(572.8,150.5,1,1,0,0,0,3.9,3.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},0).wait(135));

	// Layer_9
	this.instance_13 = new lib.Symbol1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(530.6,147.2,1,1,0,0,0,3.9,3.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).wait(136));

	// Layer_8
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(530.1,130.4,1,1,0,0,0,3.9,3.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).wait(137));

	// Layer_7
	this.instance_15 = new lib.Symbol1copy();
	this.instance_15.parent = this;
	this.instance_15.setTransform(513.8,110.7,1,1,0,0,0,3.9,3.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5).to({_off:false},0).wait(138));

	// Layer_6
	this.instance_16 = new lib.Symbol1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(528.6,67.5,1,1,0,0,0,3.9,3.9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(4).to({_off:false},0).wait(139));

	// Layer_5
	this.instance_17 = new lib.Symbol1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(505.2,103.3,1,1,0,0,0,3.9,3.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({_off:false},0).wait(140));

	// Layer_4
	this.instance_18 = new lib.Symbol1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(491.5,100.5,1,1,0,0,0,3.9,3.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({_off:false},0).wait(141));

	// Layer_3
	this.instance_19 = new lib.Symbol1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(468.8,76.5,1,1,0,0,0,3.9,3.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).wait(142));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_126 = function() {
		this.stop();
		this.dispatchEvent('playEnd');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(126).call(this.frame_126).wait(1));

	// Layer_25
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-348.4,15.2,1,1,0,0,0,19.6,15.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,8,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(126));

	// Layer_2
	this.instance_1 = new lib.Map_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(298,119.5,1,1,0,0,0,286,119.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_126 = function() {
		this.stop();
		this.dispatchEvent('playEnd');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(126).call(this.frame_126).wait(1));

	// Layer_3
	this.anibox = new lib.Symbol7();
	this.anibox.name = "anibox";
	this.anibox.parent = this;
	this.anibox.setTransform(26.5,19,1,1,0,0,0,26.5,19);

	this.timeline.addTween(cjs.Tween.get(this.anibox).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,125,970,250);
// library properties:
lib.properties = {
	id: '95AC0CCFE134462D85B9E9C955407206',
	width: 600,
	height: 250,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Map.png?1535183949186", id:"Map"}
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
an.compositions['95AC0CCFE134462D85B9E9C955407206'] = {
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

AdobeAn[3] = an;

})(createjs,{});