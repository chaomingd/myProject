(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,904,823);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,781,97);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,659,329);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,893,249);


(lib.peo = function() {
	this.initialize(img.peo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,790,81);


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.train = function() {
	this.initialize(img.train);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,736,57);// helper functions:

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


(lib.train_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.train();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.train_1, new cjs.Rectangle(0,0,736,57), null);


(lib.sun_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sun();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sun_1, new cjs.Rectangle(0,0,180,180), null);


(lib.peo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.peo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo_1, new cjs.Rectangle(0,0,790,81), null);


(lib.cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_1, new cjs.Rectangle(0,0,893,249), null);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.car();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(0,0,659,329), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,781,97), null);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(0,0,904,823), null);


(lib.train_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A+2EnIAApNMA9tAAAIAAJNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:176.5,y:16.4}).wait(269).to({graphics:null,x:0,y:0}).wait(70));

	// Layer_1
	this.instance = new lib.train_1();
	this.instance.parent = this;
	this.instance.setTransform(554,14.3,0.5,0.5,0,0,0,368,28.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({x:184},89,cjs.Ease.quintOut).wait(40).to({x:-208},90,cjs.Ease.quintIn).to({_off:true},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(370,0,4,28.5);


(lib.sun_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sun_1();
	this.instance.parent = this;
	this.instance.setTransform(43,43,0.5,0.5,0,0,0,86,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33,y:33},199,cjs.Ease.sineInOut).to({x:43,y:43},200,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.peo4d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpAqQgSgSAAgYQAAgYASgRQARgRAYAAQAZAAARARQARARAAAYQAAAYgRASQgRASgZAAQgYAAgRgSg");
	mask.setTransform(18.7,36.6);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo4d, new cjs.Rectangle(12.7,30.7,11.9,9.9), null);


(lib.peo4c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOg5QAggPAFAVIADBlIg0AOg");
	mask.setTransform(28.1,35.5);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo4c, new cjs.Rectangle(25.4,29.1,5.3,11.5), null);


(lib.peo4b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZA0IgBhqQADgVAiASIARB7g");
	mask.setTransform(6.2,36.1);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo4b, new cjs.Rectangle(3.4,29.4,5.5,11.1), null);


(lib.peo4a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAzCPIgHiGIgjABIgIidIB0gGIB2gVIAzCEIg4DYgAkdB2IAAkDIB2AAIAACUIg0AFIABBqg");
	mask.setTransform(25.5,29.6);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo4a, new cjs.Rectangle(0,12.1,54.1,28.4), null);


(lib.peo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:134});

	// timeline functions:
	this.frame_384 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(384).call(this.frame_384).wait(1));

	// Layer_1 copy 2
	this.instance = new lib.peo4c();
	this.instance.parent = this;
	this.instance.setTransform(29.4,29.4,1,1,0,0,0,29.4,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({regX:29.3,rotation:40.2},25,cjs.Ease.quadOut).to({regX:29.4,rotation:0},31,cjs.Ease.quadInOut).wait(164).to({regX:29.3,rotation:40.2},25,cjs.Ease.quadOut).to({regX:29.4,rotation:0},23,cjs.Ease.quadInOut).wait(83));

	// Layer_1 copy
	this.instance_1 = new lib.peo4b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.7,30.1,1,1,0,0,0,4.7,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140).to({rotation:-30},25,cjs.Ease.quadOut).to({rotation:0},28,cjs.Ease.quadInOut).wait(192));

	// Layer_1 copy 3
	this.instance_2 = new lib.peo4d();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18.7,36.7,1,1,0,0,0,18.7,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({rotation:-360,x:10.7},44,cjs.Ease.quadOut).wait(56).to({rotation:0,x:23.2},58,cjs.Ease.quadOut).wait(51).to({rotation:-360,x:10.7},58,cjs.Ease.quadOut).wait(67));

	// Layer_1
	this.instance_3 = new lib.peo4a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(389.5,40,1,1,0,0,0,389.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(385));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,0,398.1,47);


(lib.peo3c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAkIAGhNIBRAMIgGAeQgHAbgLAKIgZAEg");
	mask.setTransform(160.7,2.8);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo3c, new cjs.Rectangle(156.3,0,8.8,6.9), null);


(lib.peo3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUApIgRgnIgGgfIBSgMIAFBOIgmAEg");
	mask.setTransform(149.8,2.9);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo3b, new cjs.Rectangle(145.4,0,8.8,7.1), null);


(lib.peo3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjxDgIAAm6ICfAAQAGgFANAAQANAAAHAFIBXAAQAIgFAMAAQANAAAGAFICfAAIAAG6g");
	mask.setTransform(155.6,28.7);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo3a, new cjs.Rectangle(131.4,6.4,48.4,34.2), null);


(lib.peo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.peo3a();
	this.instance.parent = this;
	this.instance.setTransform(389.5,40,1,1,0,0,0,389.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(242));

	// Layer_1 copy 2
	this.instance_1 = new lib.peo3c();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.6,6.5,1,1,0,0,0,161.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({rotation:-10.7},10,cjs.Ease.quadInOut).to({rotation:0},10,cjs.Ease.quadInOut).to({rotation:-10.7},10,cjs.Ease.quadInOut).to({rotation:0},11,cjs.Ease.quadInOut).wait(187));

	// Layer_1 copy
	this.instance_2 = new lib.peo3b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.2,7,1,1,0,0,0,149.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({rotation:7.2},10,cjs.Ease.quadInOut).to({rotation:0},10,cjs.Ease.quadInOut).to({rotation:7.2},10,cjs.Ease.quadInOut).to({rotation:0},10,cjs.Ease.quadInOut).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.4,395,52.5);


(lib.peo2c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag1AAIA+g1IAtBMIgMAYIgPAEIgNgCIgTAGg");
	mask.setTransform(265.3,14.2);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo2c, new cjs.Rectangle(259.9,8.7,10.8,10.9), null);


(lib.peo2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhNAAIBAg2IBaAbIgjBIIgnAIIgMgDIgUAEg");
	mask.setTransform(276,1.5);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo2b, new cjs.Rectangle(268.2,0,15.5,7), null);


(lib.peo2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhADgIAAggIhmgrIAPjmIBXgZIAAhwIAiAAQAIgFAMAAQAMAAAHAFICeAAIAAG6g");
	mask.setTransform(277.7,28.6);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo2a, new cjs.Rectangle(261,6.3,33.4,34.3), null);


(lib.peo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.peo2a();
	this.instance.parent = this;
	this.instance.setTransform(389.5,40,1,1,0,0,0,389.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(242));

	// Layer_1 copy 2
	this.instance_1 = new lib.peo2c();
	this.instance_1.parent = this;
	this.instance_1.setTransform(268,19.5,1,1,0,0,0,268,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({regY:19.6,rotation:-18,x:268.3,y:19.6},25,cjs.Ease.quadInOut).wait(85).to({regY:19.5,rotation:0,x:268,y:19.5},25,cjs.Ease.quadInOut).wait(88));

	// Layer_1 copy
	this.instance_2 = new lib.peo2b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276.9,7,1,1,0,0,0,276.9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({regY:6.9,rotation:-15,y:6.9},30,cjs.Ease.quadInOut).wait(20).to({regX:277,rotation:15,x:277,y:7},31,cjs.Ease.quadInOut).wait(53).to({regX:276.9,regY:7,rotation:0,x:276.9},36,cjs.Ease.quadInOut).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.9,395,55);


(lib.peo1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXAnIgng0IBhggIAbBCQgZAUgWAEIgRABg");
	mask.setTransform(389.5,2.2);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo1b, new cjs.Rectangle(383.3,0,11.8,6.8), null);


(lib.peo1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzDgIAAm6IBeAAQAPgKANAKIBtAAIAAG6g");
	mask.setTransform(390.6,28.3);

	// Layer_1
	this.instance = new lib.peo_1();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.3,0.5,0.5,0,0,0,395,40.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo1a, new cjs.Rectangle(379,6,16.1,34.6), null);


(lib.peo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.peo1a();
	this.instance.parent = this;
	this.instance.setTransform(389.5,40,1,1,0,0,0,389.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210));

	// Layer_1 copy
	this.instance_1 = new lib.peo1b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(389.6,6.4,1,1,0,0,0,389.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({rotation:30,y:6.5},30,cjs.Ease.quadInOut).wait(62).to({rotation:0,y:6.4},30,cjs.Ease.quadInOut).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.4,402.2,53.1);


(lib.peo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.instance = new lib.peo4();
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1 copy 2
	this.instance_1 = new lib.peo3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(197.5,20.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1 copy
	this.instance_2 = new lib.peo2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(197.5,20.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_1
	this.instance_3 = new lib.peo1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(197.5,20.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo_anim, new cjs.Rectangle(-3.1,-3.9,405.3,55.1), null);


(lib.cloud_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap6EJI6kAAIAAlJMA9jgFAILaMBg");
	mask.setTransform(242.5,16.6);

	// Layer_1
	this.instance = new lib.cloud_1();
	this.instance.parent = this;
	this.instance.setTransform(223.3,62.3,0.5,0.5,0,0,0,446.5,124.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_c, new cjs.Rectangle(9,0,437.5,55.1), null);


(lib.cloud_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4NDXIAAlJIatAAINwhkIH+EXI14CWg");
	mask.setTransform(184,59.6);

	// Layer_1
	this.instance = new lib.cloud_1();
	this.instance.parent = this;
	this.instance.setTransform(223.3,62.3,0.5,0.5,0,0,0,446.5,124.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_b, new cjs.Rectangle(29,38.1,310,43), null);


(lib.cloud_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ego7AExIAem3MAqVgEEIbqhaILaHpMgiOAHgg");
	mask.setTransform(203,114.6);

	// Layer_1
	this.instance = new lib.cloud_1();
	this.instance.parent = this;
	this.instance.setTransform(223.3,62.3,0.5,0.5,0,0,0,446.5,124.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_a, new cjs.Rectangle(0,66.1,446.5,58.5), null);


(lib.car_fcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AG4AoQgUgUAAgbIAAgGIAPAAQACgSANgNQARgQAXAAQAXAAAQAQQANANADASIAOAAIAAAGQAAAbgUAUQgVAWgcAAQgdAAgVgWgAEZAoQgUgUAAgbIAAgGIAOAAQADgSANgNQAQgQAYAAQAWAAARAQQANANADASIAOAAIAAAGQAAAbgUAUQgVAWgcAAQgdAAgVgWgAoaAoQgUgUAAgbIAAgGIAPAAQACgSANgNQAQgQAYAAQAWAAARAQQANANADASIAOAAIAAAGQAAAbgUAUQgVAWgcAAQgdAAgVgWg");
	mask.setTransform(267,158.6);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_fcopy, new cjs.Rectangle(211.1,152.5,111.8,12.1), null);


(lib.car_f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArwD8IBRn3IWQAAIgwH3g");
	mask.setTransform(264.7,136.3);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_f, new cjs.Rectangle(189.5,111.1,140.1,50.4), null);


(lib.car_ecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADRAzQgVgVAAgeQAAgdAVgVQAWgWAeAAQAeAAAVAWQAVAVAAAdQAAAegVAVQgVAVgeAAQgeAAgWgVgAk3AzQgVgVAAgeQAAgdAVgVQAVgWAeAAQAeAAAVAWQAWAVAAAdQAAAegWAVQgVAVgeAAQgeAAgVgVg");
	mask.setTransform(140.6,157.9);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_ecopy, new cjs.Rectangle(107.3,150.6,66.6,13.9), null);


(lib.car_e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AonEfIBkpIIPsAAIg8JSg");
	mask.setTransform(138.8,133.8);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_e, new cjs.Rectangle(83.5,104.1,110.5,59.5), null);


(lib.car_dcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADRAfQgNgNAAgSQAAgRANgNQAOgMATAAQATAAANAMQANANAAARQAAASgNANQgNAMgTAAQgTAAgOgMgAkRAfQgNgNAAgSQAAgRANgNQANgMATAAQATAAANAMQAOANAAARQAAASgOANQgNAMgTAAQgTAAgNgMg");
	mask.setTransform(38.4,161.1);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_dcopy, new cjs.Rectangle(9.7,156.8,57.5,7.7), null);


(lib.car_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnnElIBkpJINrAAIg8JJg");
	mask.setTransform(38.3,131.4);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_d, new cjs.Rectangle(0,102.1,87,58.7), null);


(lib.car_ccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkIBJQgSgTAAgaQAAgZASgSQATgSAZAAQAaAAATASQASASAAAZQAAAagSATQgTASgaAAQgZAAgTgSgACxAQQgTgSAAgaQAAgZATgTQASgSAaAAQAaAAASASQASATABAZQgBAagSASQgSASgaAAQgaAAgSgSg");
	mask.setTransform(47.9,46.6);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_ccopy, new cjs.Rectangle(19.5,37.5,56.7,18.3), null);


(lib.car_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnnkpINqAAIBlJIIuSAKg");
	mask.setTransform(46.3,34.8);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_c, new cjs.Rectangle(0,5.1,95,59.5), null);


(lib.car_bcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlHBOQgQgQAAgYQAAgYAQgRQARgQAYAAQAYAAARAQQARARAAAYQAAAYgRAQQgRARgYAAQgYAAgRgRgAD2ADQgQgQAAgXQAAgZAQgRQARgQAYAAQAYAAARAQQAQARAAAZQAAAXgQAQQgRARgYAAQgYAAgRgRg");
	mask.setTransform(137.4,37.2);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_bcopy, new cjs.Rectangle(103,27.7,68.9,19), null);


(lib.car_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Anxj7IPjAAIAAGBIuaB2g");
	mask.setTransform(136.3,18.3);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_b, new cjs.Rectangle(86.5,0,99.5,43.5), null);


(lib.car_acopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai2AxQgMgNAAgQQAAgRAMgKQAMgMARgBQAQABAMAMQAMAKAAARQAAAQgMANQgMALgQAAQgRAAgMgLgAB+AJQgMgLAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMALQgMAMgRAAQgQAAgMgMg");
	mask.setTransform(220.8,27.5);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_acopy, new cjs.Rectangle(201.3,21.5,38.9,12), null);


(lib.car_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmXkoIMvAAIhuH5IqwBYg");
	mask.setTransform(229.3,1.6);

	// Layer_1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(164.8,82.3,0.5,0.5,0,0,0,329.5,164.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_a, new cjs.Rectangle(188.5,0,81.5,31.3), null);


(lib.cloud_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud_a();
	this.instance.parent = this;
	this.instance.setTransform(253.2,62.2,1,1,0,0,0,223.2,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:223.2},249,cjs.Ease.sineInOut).to({x:253.2},250,cjs.Ease.sineInOut).wait(1));

	// Layer_1 copy
	this.instance_1 = new lib.cloud_b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.2,62.2,1,1,0,0,0,223.2,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:223.2},249,cjs.Ease.sineInOut).to({x:243.2},250,cjs.Ease.sineInOut).wait(1));

	// Layer_1 copy 2
	this.instance_2 = new lib.cloud_c();
	this.instance_2.parent = this;
	this.instance_2.setTransform(233.2,62.2,1,1,0,0,0,223.2,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:223.2},249,cjs.Ease.sineInOut).to({x:233.2},250,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-21.9,524,185);


(lib.car_fa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.car_fcopy();
	this.instance.parent = this;
	this.instance.setTransform(-22.2,-28.8,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer_1
	this.instance_1 = new lib.car_f();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-22.2,-28.8,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-29.3},9,cjs.Ease.sineInOut).to({y:-28.8},10,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-111,340,164.8);


(lib.car_ea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.car_ecopy();
	this.instance.parent = this;
	this.instance.setTransform(81.8,-32.8,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer_1
	this.instance_1 = new lib.car_e();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.8,-32.8,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-33.3},9,cjs.Ease.sineInOut).to({y:-32.8},10,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-115,329.5,165.1);


(lib.car_da = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.car_dcopy();
	this.instance.parent = this;
	this.instance.setTransform(164.8,-32.8,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer_1
	this.instance_1 = new lib.car_d();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.8,-32.8,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-33.1},9,cjs.Ease.sineInOut).to({y:-32.8},10,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-115,340,165.4);


(lib.car_cacopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiyA+QgFgOgBgVQgCgVADgNQADgPAHgBQAGAAAFAOQAFANABAUQACAVgDAPQgDAPgGAAIgBABQgGAAgFgOgACkAOQgFgOgDgWQgDgVACgPQADgQAGgBQAGAAAGAOQAGAPADAWQACAVgCAPQgCAQgGAAIAAAAQgHAAgGgOg");
	this.shape.setTransform(48,43.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah5CXQg2g/gChYQgChXAyg/QAyg/BKAAQBJAAA1A/QA3A/ACBXQACBYgyA/QgzA/hJAAQhJAAg2g/g");
	mask.setTransform(48.3,45.2);

	// Layer_1
	this.instance = new lib.car_c();
	this.instance.parent = this;
	this.instance.setTransform(164.8,77.2,1,1,0,0,0,164.8,82.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_cacopy, new cjs.Rectangle(29.4,23.8,37.2,42.8), null);


(lib.car_ca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.car_ccopy();
	this.instance.parent = this;
	this.instance.setTransform(164.8,77.2,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer_1
	this.instance_1 = new lib.car_c();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.8,77.2,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:164.7,y:76.6},9,cjs.Ease.sineInOut).to({x:164.8,y:77.2},10,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-5,332,164.5);


(lib.car_bacopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AivhZQgDgqAjgOIDbgbQAigHAYA0IAqEKIlOAjg");
	mask.setTransform(52.8,24.5);

	// Layer_1
	this.instance = new lib.car_b();
	this.instance.parent = this;
	this.instance.setTransform(78.8,82.2,1,1,0,0,0,164.8,82.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AitA8QgFgPgBgVQgCgUADgOQADgPAHgBQAGAAAFAOQAFANABAVQACAVgDAPQgDAPgGAAIgBAAQgGAAgFgNgACfARQgFgQgDgUQgDgWACgPQADgQAGAAQAGgBAGAPQAGAPADAVQACAWgCAOQgCAQgGABIAAAAQgHAAgGgOg");
	this.shape.setTransform(53.4,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_bacopy, new cjs.Rectangle(35.2,7.2,36.3,34.7), null);


(lib.car_ba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.car_bcopy();
	this.instance.parent = this;
	this.instance.setTransform(78.8,82.2,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer_1
	this.instance_1 = new lib.car_b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.8,82.2,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:81.7},9,cjs.Ease.sineInOut).to({y:82.2},10,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-6.9,329.5,171.5);


(lib.car_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":75});

	// timeline functions:
	this.frame_482 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(482).call(this.frame_482).wait(180));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggpAFFIAAqJMBBTAAAIAAKJg");
	mask.setTransform(151,135);

	// Layer_3
	this.instance = new lib.car_da();
	this.instance.parent = this;
	this.instance.setTransform(521.5,87.2,1,1,0,0,0,159.5,-27.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:false},0).to({x:159.5},121,cjs.Ease.sineOut).to({x:149.5},31).to({x:22.5},66,cjs.Ease.quadIn).to({_off:true},1).wait(275));

	// Layer_5
	this.instance_1 = new lib.car_ea();
	this.instance_1.parent = this;
	this.instance_1.setTransform(434.2,87.2,1,1,0,0,0,81.2,-27.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(213).to({_off:false},0).wait(1).to({regX:55.8,regY:19,x:403.7,y:134},0).wait(1).to({x:398.6},0).wait(1).to({x:393.5},0).wait(1).to({x:388.5},0).wait(1).to({x:383.6},0).wait(1).to({x:378.7},0).wait(1).to({x:373.9},0).wait(1).to({x:369.2},0).wait(1).to({x:364.5},0).wait(1).to({x:359.8},0).wait(1).to({x:355.2},0).wait(1).to({x:350.7},0).wait(1).to({x:346.2},0).wait(1).to({x:341.7},0).wait(1).to({x:337.4},0).wait(1).to({x:333},0).wait(1).to({x:328.8},0).wait(1).to({x:324.6},0).wait(1).to({x:320.4},0).wait(1).to({x:316.3},0).wait(1).to({x:312.3},0).wait(1).to({x:308.3},0).wait(1).to({x:304.4},0).wait(1).to({x:300.5},0).wait(1).to({x:296.7},0).wait(1).to({x:292.9},0).wait(1).to({x:289.2},0).wait(1).to({x:285.6},0).wait(1).to({x:282},0).wait(1).to({x:278.4},0).wait(1).to({x:275},0).wait(1).to({x:271.5},0).wait(1).to({x:268.2},0).wait(1).to({x:264.9},0).wait(1).to({x:261.6},0).wait(1).to({x:258.4},0).wait(1).to({x:255.2},0).wait(1).to({x:252.1},0).wait(1).to({x:249.1},0).wait(1).to({x:246.1},0).wait(1).to({x:243.2},0).wait(1).to({x:240.3},0).wait(1).to({x:237.5},0).wait(1).to({x:234.7},0).wait(1).to({x:232},0).wait(1).to({x:229.3},0).wait(1).to({x:226.7},0).wait(1).to({x:224.2},0).wait(1).to({x:221.7},0).wait(1).to({x:219.2},0).wait(1).to({x:216.8},0).wait(1).to({x:214.4},0).wait(1).to({x:212.1},0).wait(1).to({x:209.9},0).wait(1).to({x:207.7},0).wait(1).to({x:205.5},0).wait(1).to({x:203.4},0).wait(1).to({x:201.3},0).wait(1).to({x:199.3},0).wait(1).to({x:197.3},0).wait(1).to({x:195.4},0).wait(1).to({x:193.5},0).wait(1).to({x:191.6},0).wait(1).to({x:189.8},0).wait(1).to({x:188.1},0).wait(1).to({x:186.4},0).wait(1).to({x:184.7},0).wait(1).to({x:183.1},0).wait(1).to({x:181.5},0).wait(1).to({x:179.9},0).wait(1).to({x:178.4},0).wait(1).to({x:176.9},0).wait(1).to({x:175.4},0).wait(1).to({x:174},0).wait(1).to({x:172.6},0).wait(1).to({x:171.3},0).wait(1).to({x:170},0).wait(1).to({x:168.7},0).wait(1).to({x:167.4},0).wait(1).to({x:166.2},0).wait(1).to({x:165},0).wait(1).to({x:163.8},0).wait(1).to({x:162.6},0).wait(1).to({x:161.5},0).wait(1).to({x:160.4},0).wait(1).to({x:159.3},0).wait(1).to({x:158.3},0).wait(1).to({x:157.2},0).wait(1).to({x:156.2},0).wait(1).to({x:155.2},0).wait(1).to({x:154.2},0).wait(1).to({x:153.2},0).wait(1).to({x:152.2},0).wait(1).to({x:151.3},0).wait(1).to({x:150.3},0).wait(1).to({x:149.4},0).wait(1).to({x:148.5},0).wait(1).to({x:147.5},0).wait(1).to({x:146.6},0).wait(1).to({x:145.7},0).wait(1).to({x:144.8},0).wait(1).to({x:143.9},0).wait(1).to({x:143},0).wait(1).to({x:142.1},0).wait(1).to({x:141.1},0).wait(1).to({x:140.2},0).wait(1).to({x:139.3},0).wait(1).to({x:138.4},0).wait(1).to({x:137.4},0).wait(1).to({x:136.5},0).wait(1).to({x:135.5},0).wait(1).to({x:134.6},0).wait(1).to({x:133.6},0).wait(1).to({x:132.6},0).wait(1).to({x:131.6},0).wait(1).to({x:130.5},0).wait(1).to({x:129.5},0).wait(1).to({x:128.4},0).wait(1).to({x:127.4},0).wait(1).to({x:126.2},0).wait(1).to({x:125.1},0).wait(1).to({x:124},0).wait(1).to({x:122.8},0).wait(1).to({x:121.6},0).wait(1).to({x:120.3},0).wait(1).to({x:119.1},0).wait(1).to({x:117.8},0).wait(1).to({x:116.5},0).wait(1).to({x:115.1},0).wait(1).to({x:113.7},0).wait(1).to({x:112.3},0).wait(1).to({x:110.8},0).wait(1).to({x:109.4},0).wait(1).to({x:107.8},0).wait(1).to({x:106.3},0).wait(1).to({x:104.7},0).wait(1).to({x:103},0).wait(1).to({x:101.3},0).wait(1).to({x:99.6},0).wait(1).to({x:97.8},0).wait(1).to({x:96},0).wait(1).to({x:94.2},0).wait(1).to({x:92.3},0).wait(1).to({x:90.3},0).wait(1).to({x:88.3},0).wait(1).to({x:86.3},0).wait(1).to({x:84.2},0).wait(1).to({x:82.1},0).wait(1).to({x:79.9},0).wait(1).to({x:77.7},0).wait(1).to({x:75.4},0).wait(1).to({x:73.1},0).wait(1).to({x:70.7},0).wait(1).to({x:68.3},0).wait(1).to({x:65.8},0).wait(1).to({x:63.3},0).wait(1).to({x:60.7},0).wait(1).to({x:58.1},0).wait(1).to({x:55.4},0).wait(1).to({x:52.7},0).wait(1).to({x:49.9},0).wait(1).to({x:47},0).wait(1).to({x:44.1},0).wait(1).to({x:41.2},0).wait(1).to({x:38.1},0).wait(1).to({x:35.1},0).wait(1).to({x:32},0).wait(1).to({x:28.8},0).wait(1).to({x:25.5},0).wait(1).to({x:22.2},0).wait(1).to({x:18.9},0).wait(1).to({x:15.5},0).wait(1).to({x:12},0).wait(1).to({x:8.5},0).wait(1).to({x:4.9},0).wait(1).to({x:1.3},0).wait(1).to({x:-2.4},0).wait(1).to({x:-6.2},0).wait(1).to({x:-10},0).wait(1).to({x:-13.8},0).wait(1).to({x:-17.8},0).wait(1).to({x:-21.7},0).wait(1).to({x:-25.8},0).wait(1).to({x:-29.9},0).wait(1).to({x:-34},0).wait(1).to({x:-38.2},0).wait(1).to({x:-42.5},0).wait(1).to({x:-46.8},0).wait(1).to({x:-51.2},0).wait(1).to({x:-55.6},0).wait(1).to({x:-60.1},0).wait(1).to({x:-64.7},0).wait(1).to({x:-69.3},0).wait(1).to({x:-73.9},0).wait(1).to({x:-78.7},0).wait(1).to({x:-83.4},0).wait(1).to({x:-88.3},0).wait(1).to({x:-93.1},0).wait(1).to({x:-98.1},0).wait(1).to({x:-103.1},0).wait(1).to({regX:81.2,regY:-27.8,x:-82.8,y:87.2},0).to({_off:true},1).wait(247));

	// Layer_4
	this.instance_2 = new lib.car_fa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(339.5,87.2,1,1,0,0,0,-17.5,-23.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280).to({_off:false},0).wait(1).to({regX:72.5,regY:26.5,x:425.7,y:137.5},0).wait(1).to({x:421.9},0).wait(1).to({x:418.2},0).wait(1).to({x:414.6},0).wait(1).to({x:411.1},0).wait(1).to({x:407.6},0).wait(1).to({x:404.2},0).wait(1).to({x:400.9},0).wait(1).to({x:397.6},0).wait(1).to({x:394.4},0).wait(1).to({x:391.3},0).wait(1).to({x:388.2},0).wait(1).to({x:385.2},0).wait(1).to({x:382.3},0).wait(1).to({x:379.4},0).wait(1).to({x:376.5},0).wait(1).to({x:373.7},0).wait(1).to({x:371},0).wait(1).to({x:368.3},0).wait(1).to({x:365.6},0).wait(1).to({x:363},0).wait(1).to({x:360.4},0).wait(1).to({x:357.9},0).wait(1).to({x:355.5},0).wait(1).to({x:353},0).wait(1).to({x:350.6},0).wait(1).to({x:348.3},0).wait(1).to({x:346},0).wait(1).to({x:343.7},0).wait(1).to({x:341.5},0).wait(1).to({x:339.2},0).wait(1).to({x:337.1},0).wait(1).to({x:334.9},0).wait(1).to({x:332.8},0).wait(1).to({x:330.7},0).wait(1).to({x:328.7},0).wait(1).to({x:326.7},0).wait(1).to({x:324.7},0).wait(1).to({x:322.7},0).wait(1).to({x:320.7},0).wait(1).to({x:318.8},0).wait(1).to({x:316.9},0).wait(1).to({x:315},0).wait(1).to({x:313.1},0).wait(1).to({x:311.3},0).wait(1).to({x:309.5},0).wait(1).to({x:307.7},0).wait(1).to({x:305.9},0).wait(1).to({x:304.1},0).wait(1).to({x:302.3},0).wait(1).to({x:300.6},0).wait(1).to({x:298.9},0).wait(1).to({x:297.1},0).wait(1).to({x:295.4},0).wait(1).to({x:293.7},0).wait(1).to({x:292},0).wait(1).to({x:290.4},0).wait(1).to({x:288.7},0).wait(1).to({x:287},0).wait(1).to({x:285.4},0).wait(1).to({x:283.7},0).wait(1).to({x:282.1},0).wait(1).to({x:280.4},0).wait(1).to({x:278.8},0).wait(1).to({x:277.2},0).wait(1).to({x:275.5},0).wait(1).to({x:273.9},0).wait(1).to({x:272.3},0).wait(1).to({x:270.6},0).wait(1).to({x:269},0).wait(1).to({x:267.4},0).wait(1).to({x:265.8},0).wait(1).to({x:264.1},0).wait(1).to({x:262.5},0).wait(1).to({x:260.8},0).wait(1).to({x:259.2},0).wait(1).to({x:257.6},0).wait(1).to({x:255.9},0).wait(1).to({x:254.2},0).wait(1).to({x:252.6},0).wait(1).to({x:250.9},0).wait(1).to({x:249.2},0).wait(1).to({x:247.5},0).wait(1).to({x:245.8},0).wait(1).to({x:244.1},0).wait(1).to({x:242.4},0).wait(1).to({x:240.7},0).wait(1).to({x:238.9},0).wait(1).to({x:237.2},0).wait(1).to({x:235.4},0).wait(1).to({x:233.7},0).wait(1).to({x:231.9},0).wait(1).to({x:230.1},0).wait(1).to({x:228.3},0).wait(1).to({x:226.4},0).wait(1).to({x:224.6},0).wait(1).to({x:222.7},0).wait(1).to({x:220.8},0).wait(1).to({x:218.9},0).wait(1).to({x:217},0).wait(1).to({x:215.1},0).wait(1).to({x:213.2},0).wait(1).to({x:211.2},0).wait(1).to({x:209.2},0).wait(1).to({x:207.2},0).wait(1).to({x:205.2},0).wait(1).to({x:203.1},0).wait(1).to({x:201.1},0).wait(1).to({x:199},0).wait(1).to({x:196.9},0).wait(1).to({x:194.8},0).wait(1).to({x:192.6},0).wait(1).to({x:190.4},0).wait(1).to({x:188.2},0).wait(1).to({x:186},0).wait(1).to({x:183.8},0).wait(1).to({x:181.5},0).wait(1).to({x:179.2},0).wait(1).to({x:176.9},0).wait(1).to({x:174.6},0).wait(1).to({x:172.2},0).wait(1).to({x:169.8},0).wait(1).to({x:167.4},0).wait(1).to({x:164.9},0).wait(1).to({x:162.4},0).wait(1).to({x:159.9},0).wait(1).to({x:157.4},0).wait(1).to({x:154.8},0).wait(1).to({x:152.2},0).wait(1).to({x:149.6},0).wait(1).to({x:147},0).wait(1).to({x:144.3},0).wait(1).to({x:141.6},0).wait(1).to({x:138.8},0).wait(1).to({x:136},0).wait(1).to({x:133.2},0).wait(1).to({x:130.4},0).wait(1).to({x:127.5},0).wait(1).to({x:124.6},0).wait(1).to({x:121.7},0).wait(1).to({x:118.7},0).wait(1).to({x:115.7},0).wait(1).to({x:112.7},0).wait(1).to({x:109.6},0).wait(1).to({x:106.5},0).wait(1).to({x:103.4},0).wait(1).to({x:100.2},0).wait(1).to({x:97},0).wait(1).to({x:93.7},0).wait(1).to({x:90.4},0).wait(1).to({x:87.1},0).wait(1).to({x:83.8},0).wait(1).to({x:80.4},0).wait(1).to({x:76.9},0).wait(1).to({x:73.5},0).wait(1).to({x:70},0).wait(1).to({x:66.5},0).wait(1).to({x:62.9},0).wait(1).to({x:59.3},0).wait(1).to({x:55.6},0).wait(1).to({x:51.9},0).wait(1).to({x:48.2},0).wait(1).to({x:44.4},0).wait(1).to({x:40.6},0).wait(1).to({x:36.7},0).wait(1).to({x:32.8},0).wait(1).to({x:28.9},0).wait(1).to({x:24.9},0).wait(1).to({x:20.9},0).wait(1).to({x:16.8},0).wait(1).to({x:12.7},0).wait(1).to({x:8.5},0).wait(1).to({x:4.3},0).wait(1).to({x:0.1},0).wait(1).to({x:-4.2},0).wait(1).to({x:-8.5},0).wait(1).to({x:-12.9},0).wait(1).to({x:-17.3},0).wait(1).to({x:-21.7},0).wait(1).to({x:-26.2},0).wait(1).to({x:-30.8},0).wait(1).to({x:-35.4},0).wait(1).to({x:-40},0).wait(1).to({x:-44.7},0).wait(1).to({x:-49.4},0).wait(1).to({x:-54.2},0).wait(1).to({x:-59},0).wait(1).to({x:-63.9},0).wait(1).to({x:-68.8},0).wait(1).to({x:-73.7},0).wait(1).to({x:-78.7},0).wait(1).to({x:-83.8},0).wait(1).to({x:-88.9},0).wait(1).to({x:-94},0).wait(1).to({x:-99.2},0).wait(1).to({x:-104.5},0).wait(1).to({x:-109.8},0).wait(1).to({x:-115.1},0).wait(1).to({x:-120.5},0).wait(1).to({x:-126},0).wait(1).to({regX:-17.5,regY:-23.8,x:-221.5,y:87.2},0).to({_off:true},1).wait(180));

	// Layer_1 copy 4
	this.instance_3 = new lib.car_ea();
	this.instance_3.parent = this;
	this.instance_3.setTransform(434.2,87.2,1,1,0,0,0,81.2,-27.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-83.8},149).to({_off:true},1).wait(258).to({_off:false,x:434.2},0).to({x:-83.8},149).to({_off:true},1).wait(104));

	// Layer_1 copy 3
	this.instance_4 = new lib.car_da();
	this.instance_4.parent = this;
	this.instance_4.setTransform(520.5,87.2,1,1,0,0,0,159.5,-27.8);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({_off:false},0).to({x:22.5},161).to({_off:true},1).wait(246).to({_off:false,x:520.5},0).to({x:22.5},161).to({_off:true},1).wait(34));

	// Layer_1 copy 5
	this.instance_5 = new lib.car_fa();
	this.instance_5.parent = this;
	this.instance_5.setTransform(337.5,87.2,1,1,0,0,0,-17.5,-23.8);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).to({x:-221.5},224).to({_off:true},1).wait(183).to({_off:false,x:337.5},0).to({x:-221.5},224).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,102.5,90,62.6);


(lib.car_aacopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhyCFIgXjZQAAgzAmgVIC7gVIAyE9IjvAmg");
	mask.setTransform(31.6,14.7);

	// Layer_1
	this.instance = new lib.car_a();
	this.instance.parent = this;
	this.instance.setTransform(-23.2,82.2,1,1,0,0,0,164.8,82.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiDA3QgFgPgBgVQgCgTADgPQAEgPAGgBQAGAAAFAOQAFAOACAUQABAVgDAPQgDAPgGAAIgBAAQgGAAgFgNgAB1AWQgGgQgCgUQgDgWACgPQACgQAHAAQAGgBAGAPQAFAPADAVQADAVgCAPQgCAQgGABIgBAAQgGAAgGgOg");
	this.shape.setTransform(32.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_aacopy, new cjs.Rectangle(17.9,-3,28.3,35.5), null);


(lib.car_aa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.car_acopy();
	this.instance.parent = this;
	this.instance.setTransform(-23.2,82.2,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer_1
	this.instance_1 = new lib.car_a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.2,82.2,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:81.7},9,cjs.Ease.sineInOut).to({y:82.2},10,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-28.1,329.5,192.7);


(lib.car_animcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":135});

	// timeline functions:
	this.frame_387 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(387).call(this.frame_387).wait(213));

	// Layer_14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_182 = new cjs.Graphics().p("AmyDNQg+kMl5hQIjTt7MAh5ACMIhGZJIw3FAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(182).to({graphics:mask_graphics_182,x:388.5,y:-33.5}).wait(418));

	// Layer_13
	this.instance = new lib.car_ca();
	this.instance.parent = this;
	this.instance.setTransform(352.6,-19.9,1,1,0,8,-172,52.8,57.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({_off:false},0).to({regY:57.6,skewX:-12,skewY:-192,x:344.5,y:-20.3},10).to({skewX:-15.5,skewY:-195.5,x:282,y:-11.8},22).to({_off:true},1).wait(385));

	// Layer_15
	this.instance_1 = new lib.car_aa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.1,-3,1,1,0,10.5,-169.5,34.8,54.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286).to({_off:false},0).to({skewX:-11.2,skewY:-191.2,x:348.5,y:-5},11).to({skewX:-14.7,skewY:-194.7,x:278.6,y:1.9},22).to({_off:true},1).wait(280));

	// Layer_16
	this.instance_2 = new lib.car_ba();
	this.instance_2.parent = this;
	this.instance_2.setTransform(343,10.7,1,1,0,4.2,-175.8,57.2,78.6);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(346).to({_off:false},0).to({regX:57.1,regY:78.8,skewX:-20,skewY:-200,x:347.1,y:7.7},12).to({x:272.1,y:24.7},28).to({_off:true},1).wait(213));

	// Layer_7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg0cAQiIJ7wBMBcZgRBIClR7MhUbAPHg");
	mask_1.setTransform(153.8,-0.3);

	// Layer_20 copy
	this.instance_3 = new lib.car_cacopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(369.7,12.2,1,1,0,0,0,46.6,50.8);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(415).to({_off:false},0).to({scaleX:1.13,rotation:15,x:369,y:-23.8},19).to({_off:true},1).wait(165));

	// Layer_1 copy 3
	this.instance_4 = new lib.car_ca();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-36.9,109.5,1,1,-21,0,0,48.8,85.6);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(253).to({_off:false},0).to({rotation:0,x:-17.9,y:99.5},11).to({x:361.1,y:49.5},150).to({_off:true},1).wait(185));

	// Layer_21 copy
	this.instance_5 = new lib.car_aacopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(370.8,7.8,1,1,0,0,0,31.7,29.8);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(518).to({_off:false},0).to({rotation:15,x:368.3,y:-23.2},20).to({_off:true},1).wait(61));

	// Layer_1 copy 4
	this.instance_6 = new lib.car_aa();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-60.2,74.8,1,1,-29,0,0,31.7,29.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(331).to({_off:false},0).to({rotation:0,x:-27.6,y:62.2},12).to({x:357.3,y:11.8},174).to({_off:true},1).wait(82));

	// Layer_22 copy
	this.instance_7 = new lib.car_bacopy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(376.4,6.7,1,1,0,0,0,54.8,36.8);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(572).to({_off:false},0).to({regX:54.9,rotation:16,x:375.4,y:-25.8},26).to({_off:true},1).wait(1));

	// Layer_1 copy 5
	this.instance_8 = new lib.car_ba();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-10.2,95.8,1,1,-29,0,0,78.2,78.7);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(301).to({_off:false},0).to({regY:78.8,rotation:0,x:6.2,y:99.1},17).to({x:373.4,y:51.7},253).to({_off:true},1).wait(28));

	// Layer_20
	this.instance_9 = new lib.car_cacopy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(369.7,12.2,1,1,0,0,0,46.6,50.8);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(162).to({_off:false},0).to({scaleX:1.13,rotation:15,x:369,y:-23.8},19).to({_off:true},1).wait(418));

	// Layer_1 copy 2
	this.instance_10 = new lib.car_ca();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-36.9,109.5,1,1,-21,0,0,48.8,85.6);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:0,x:-17.9,y:99.5},11).to({x:361.1,y:49.5},150).to({_off:true},1).wait(355).to({_off:false,regX:163.5,regY:77.2,x:163.5,y:82.2},0).to({_off:true},1).wait(82));

	// Layer_21
	this.instance_11 = new lib.car_aacopy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(370.8,7.8,1,1,0,0,0,31.7,29.8);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(265).to({_off:false},0).to({rotation:15,x:368.3,y:-23.2},20).to({_off:true},1).wait(314));

	// Layer_1
	this.instance_12 = new lib.car_aa();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-60.2,74.8,1,1,-29,0,0,31.7,29.8);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(78).to({_off:false},0).to({rotation:0,x:-27.6,y:62.2},12).to({x:357.3,y:11.8},174).to({_off:true},1).wait(288).to({_off:false,regX:-23.8,regY:73.2,x:164.2,y:73.2},0).to({_off:true},1).wait(46));

	// Layer_22
	this.instance_13 = new lib.car_bacopy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(376.4,6.7,1,1,0,0,0,54.8,36.8);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(319).to({_off:false},0).to({regX:54.9,rotation:16,x:375.4,y:-25.8},26).to({_off:true},1).wait(254));

	// Layer_1 copy
	this.instance_14 = new lib.car_ba();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-10.2,95.8,1,1,-29,0,0,78.2,78.7);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({_off:false},0).to({regY:78.8,rotation:0,x:6.2,y:99.1},17).to({x:373.4,y:51.7},253).to({_off:true},1).wait(233).to({_off:false,x:164.2,y:78.8},0).to({_off:true},1).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-75.6,367.1,181.1);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// peo
	this.instance = new lib.peo_anim();
	this.instance.parent = this;
	this.instance.setTransform(272.5,334.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cloud
	this.instance_1 = new lib.cloud_anim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(242.2,66.2,1,1,0,0,0,223.2,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// car copy
	this.instance_2 = new lib.car_animcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(273.8,331.2,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// car
	this.instance_3 = new lib.car_anim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(273.8,331.2,1,1,0,0,0,164.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg1.png
	this.instance_4 = new lib.bg1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(263,261.8,0.5,0.5,0,0,0,452,411.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// sun
	this.instance_5 = new lib.sun_anim();
	this.instance_5.parent = this;
	this.instance_5.setTransform(418,108,1,1,0,0,0,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// train
	this.instance_6 = new lib.train_anim();
	this.instance_6.parent = this;
	this.instance_6.setTransform(268,451.2,1,1,0,0,0,184,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// bg2
	this.instance_7 = new lib.bg2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(261.3,441.3,0.5,0.5,0,0,0,390.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(207.1,217.1,895,500.9);
// library properties:
lib.properties = {
	id: '495FFFD0F42040619FD18A6FB7FC7144',
	width: 560,
	height: 470,
	fps: 60,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:require('./images/bg1.png?1534038978577'), id:"bg1"},
		{src:require('./images/bg2.jpg?1534038978577'), id:"bg2"},
		{src:require('./images/car.png?1534038978577'), id:"car"},
		{src:require('./images/cloud.png?1534038978577'), id:"cloud"},
		{src:require('./images/peo.png?1534038978577'), id:"peo"},
		{src:require('./images/sun.png?1534038978577'), id:"sun"},
		{src:require('./images/train.png?1534038978577'), id:"train"}
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
an.compositions['495FFFD0F42040619FD18A6FB7FC7144'] = {
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