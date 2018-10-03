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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:176.5,y:16.4}).wait(260).to({graphics:null,x:0,y:0}).wait(31));

	// Layer_1
	this.instance = new lib.train_1();
	this.instance.parent = this;
	this.instance.setTransform(554,14.3,0.5,0.5,0,0,0,368,28.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({x:184},89,cjs.Ease.quintOut).wait(40).to({x:-208},90,cjs.Ease.quintIn).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(370,0,4,28.5);


(lib.sun_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sun_1();
	this.instance.parent = this;
	this.instance.setTransform(43,43,0.5,0.5,0,0,0,86,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33,y:33},124,cjs.Ease.sineInOut).to({x:43,y:43},143,cjs.Ease.sineInOut).wait(1));

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
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.instance = new lib.peo4c();
	this.instance.parent = this;
	this.instance.setTransform(29.4,29.4,1,1,0,0,0,29.4,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({regX:29.3,rotation:40.2},25,cjs.Ease.quadOut).to({regX:29.4,rotation:0},31,cjs.Ease.quadInOut).wait(184));

	// Layer_1 copy
	this.instance_1 = new lib.peo4b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.7,30.1,1,1,0,0,0,4.7,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190).to({rotation:-30},25,cjs.Ease.quadOut).to({rotation:0},28,cjs.Ease.quadInOut).wait(57));

	// Layer_1 copy 3
	this.instance_2 = new lib.peo4d();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18.7,36.7,1,1,0,0,0,18.7,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({rotation:-360,x:10.7},44,cjs.Ease.quadOut).wait(80).to({rotation:0,x:18.7},58,cjs.Ease.quadOut).wait(41));

	// Layer_1
	this.instance_3 = new lib.peo4a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(389.5,40,1,1,0,0,0,389.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(300));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Layer_1 copy 2
	this.instance_1 = new lib.peo3c();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.6,6.5,1,1,0,0,0,161.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({rotation:-10.7},10,cjs.Ease.quadInOut).to({rotation:0},10,cjs.Ease.quadInOut).to({rotation:-10.7},10,cjs.Ease.quadInOut).to({rotation:0},11,cjs.Ease.quadInOut).wait(95));

	// Layer_1 copy
	this.instance_2 = new lib.peo3b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.2,7,1,1,0,0,0,149.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({rotation:7.2},10,cjs.Ease.quadInOut).to({rotation:0},10,cjs.Ease.quadInOut).to({rotation:7.2},10,cjs.Ease.quadInOut).to({rotation:0},10,cjs.Ease.quadInOut).wait(26));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(280));

	// Layer_1 copy 2
	this.instance_1 = new lib.peo2c();
	this.instance_1.parent = this;
	this.instance_1.setTransform(268,19.5,1,1,0,0,0,268,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({regY:19.6,rotation:-18,x:268.3,y:19.6},25,cjs.Ease.quadInOut).wait(101).to({regY:19.5,rotation:0,x:268,y:19.5},25,cjs.Ease.quadInOut).wait(110));

	// Layer_1 copy
	this.instance_2 = new lib.peo2b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276.9,7,1,1,0,0,0,276.9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({regY:6.9,rotation:-15,y:6.9},30,cjs.Ease.quadInOut).wait(36).to({regX:277,rotation:15,x:277,y:7},31,cjs.Ease.quadInOut).wait(53).to({regX:276.9,regY:7,rotation:0,x:276.9},36,cjs.Ease.quadInOut).wait(40));

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
	this.instance = new lib.peo4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(197.5,20.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// Layer_1 copy 2
	this.instance_1 = new lib.peo3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(197.5,20.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300));

	// Layer_1 copy
	this.instance_2 = new lib.peo2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(197.5,20.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(300));

	// Layer_1
	this.instance_3 = new lib.peo1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(197.5,20.2,1,1,0,0,0,197.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,395,40.5);


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


(lib.cloud_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud_a();
	this.instance.parent = this;
	this.instance.setTransform(223.2,62.2,1,1,0,0,0,223.2,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:290.2},133,cjs.Ease.sineInOut).to({x:223.2},134,cjs.Ease.sineInOut).wait(1));

	// Layer_1 copy
	this.instance_1 = new lib.cloud_b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.2,62.2,1,1,0,0,0,223.2,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:265.4},133,cjs.Ease.sineInOut).to({x:223.2},134,cjs.Ease.sineInOut).wait(1));

	// Layer_1 copy 2
	this.instance_2 = new lib.cloud_c();
	this.instance_2.parent = this;
	this.instance_2.setTransform(223.2,62.2,1,1,0,0,0,223.2,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:240.6},133,cjs.Ease.sineInOut).to({x:223.2},134,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-21.9,535,185);


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


(lib.car_animcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.instance = new lib.car_ca();
	this.instance.parent = this;
	this.instance.setTransform(209.5,69.7,1,1,0,0,0,48.8,85.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(267));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.2,-20.9,332,164.5);


(lib.car_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:179});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_179 = new cjs.Graphics().p("EggpAFFIAAqJMBBTAAAIAAKJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_graphics_179,x:151,y:135}).wait(1).to({graphics:null,x:0,y:0}).wait(525));

	// Layer_1 copy 4
	this.instance = new lib.car_ea();
	this.instance.parent = this;
	this.instance.setTransform(434.2,87.2,1,1,0,0,0,81.2,-27.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({_off:true},1).wait(525));

	// Layer_1 copy 3
	this.instance_1 = new lib.car_da();
	this.instance_1.parent = this;
	this.instance_1.setTransform(520.5,87.2,1,1,0,0,0,159.5,-27.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).to({_off:true},1).wait(525));

	// Layer_1 copy 5
	this.instance_2 = new lib.car_fa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(337.5,87.2,1,1,0,0,0,-17.5,-23.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({_off:true},1).wait(525));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,102.5,90,62.6);


// stage content:
(lib.ani2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// peo
	this.instance = new lib.peo_anim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(299,385.9,1.15,1.15,0,0,0,197.6,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cloud
	this.instance_1 = new lib.cloud_anim("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(264.2,77.7,1.15,1.15,0,0,0,223.3,62.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// car copy
	this.instance_2 = new lib.car_animcopy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(300.3,382.5,1.15,1.15,0,0,0,164.8,82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// car
	this.instance_3 = new lib.car_anim("synched",179,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(300.3,382.5,1.15,1.15,0,0,0,164.8,82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg1.png
	this.instance_4 = new lib.bg1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(288,302.4,0.575,0.575,0,0,0,452.1,411.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// sun
	this.instance_5 = new lib.sun_anim("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(466.3,125.7,1.15,1.15,0,0,0,43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// train
	this.instance_6 = new lib.train_anim("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(293.8,520.4,1.15,1.15,0,0,0,184.1,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// bg2
	this.instance_7 = new lib.bg2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(286,508.9,0.575,0.575,0,0,0,390.6,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB821").s().p("EgzZAUKMAAAgoTMBmzAAAMAAAAoTg");
	this.shape.setTransform(301,463.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F4ED").s().p("EgzZAblMAAAg3JMBmzAAAMAAAA3Jg");
	this.shape_1.setTransform(301,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.5,259.5,702.5,611.1);
// library properties:
lib.properties = {
	id: '495FFFD0F42040619FD18A6FB7FC7144',
	width: 577,
	height: 557,
	fps: 60,
	color: "#F7F4ED",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.png?1527242726387", id:"bg1"},
		{src:"images/bg2.jpg?1527242726387", id:"bg2"},
		{src:"images/car.png?1527242726387", id:"car"},
		{src:"images/cloud.png?1527242726387", id:"cloud"},
		{src:"images/peo.png?1527242726387", id:"peo"},
		{src:"images/sun.png?1527242726387", id:"sun"},
		{src:"images/train.png?1527242726387", id:"train"}
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
var createjs, AdobeAn;