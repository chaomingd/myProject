(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.rocker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B0F2").s().p("AgVB7IAAj1IArAAIAAD1g");
	this.shape.setTransform(12.2,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B0F2").s().p("AhVBWQgjgkAAgyQAAgxAjgkQAkgjAxAAQAyAAAkAjQAjAkAAAxQAAAygjAkQgkAjgyAAQgxAAgkgjgAg2g2QgWAXAAAfQAAAgAWAXQAXAWAfAAQAgAAAXgWQAXgXAAggQAAgfgXgXQgXgXggAAQgfAAgXAXg");
	this.shape_1.setTransform(12.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocker, new cjs.Rectangle(0,0,24.3,46.5), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B0F2").s().p("AgtATIAAgEQAAgOAKgJQAKgKAOAAIAXAAQAOAAAKAKQAKAJAAAOIAAAEg");
	this.shape.setTransform(4.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(0,0,9.2,3.9), null);


(lib.icon_2ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiPBBIAAiBIEfAAIAACBg");
	mask.setTransform(70.9,45.5);

	// button
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(69.8,50.2,1,1,0,0,0,4.5,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({y:53.2},6,cjs.Ease.quadIn).to({y:50.2},5,cjs.Ease.quadOut).wait(4).to({y:53.2},5,cjs.Ease.quadIn).to({y:50.2},4,cjs.Ease.quadOut).wait(16).to({y:53.2},4,cjs.Ease.quadIn).to({y:50.2},4,cjs.Ease.quadOut).wait(21));

	// rocker
	this.instance_1 = new lib.rocker();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.3,46.5,1,1,0,0,0,12.1,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({regY:46.6,scaleX:1,scaleY:1,rotation:-14.5,y:46.6},19,cjs.Ease.quadOut).wait(13).to({regX:12.2,rotation:8.5,x:37.4,y:46.7},20,cjs.Ease.quadOut).wait(4).to({regY:46.5,scaleX:1,scaleY:1,rotation:-12,x:37.3,y:46.6},20).to({regX:12.1,rotation:0,y:46.5},23,cjs.Ease.quadOut).wait(11));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B0F2").s().p("AiZBCIAAgqQAAgkAagaIABAAQAagbAkAAICBAAQAlAAAaAbQAaAaAAAkIAAAeIgsAAIAAgeQAAgUgNgMQgNgNgTAAIiBAAQgSAAgNANIgBAAQgNAMAAAUIAAAqg");
	this.shape.setTransform(37.3,50.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B0F2").s().p("Ak2CJQg5AAgogoQgpgoAAg5QAAg4ApgoQAogoA5AAIJuAAQA4AAApAoIAAAAQAoAoAAA4QAAA5goAoQgpAog4AAgAl4hBQgcAbAAAmQAAAmAcAcQAbAbAnAAIJuAAQAmAAAcgbQAbgcAAgmQAAgmgbgbQgcgcgmAAIpuAAQgnAAgbAcg");
	this.shape_1.setTransform(45.1,68.2,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.8,82);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon_2ani("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(50.9,46,1,1,0,0,0,44.9,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56,50.5,89.8,82);
// library properties:
lib.properties = {
	id: '60806A2F2D1144D7BE24CAAD2A0B626FJJHKHKJ',
	width: 100,
	height: 91,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['60806A2F2D1144D7BE24CAAD2A0B626FJJHKHKJ'] = {
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