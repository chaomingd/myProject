(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);


(lib.brush = function() {
	this.initialize(img.brush);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,562);


(lib.dog = function() {
	this.initialize(img.dog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,719);


(lib.mask = function() {
	this.initialize(img.mask);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,926,372);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,107);// helper functions:

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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgiH9Ighv1IgBgDIB7gyIAORbg");
	mask.setTransform(839.4,621.3);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(832.5,565.6,13.8,111.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.money();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,60,107), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgBZA4zIAAggQgHiNgPgoQgQgogxgHIhUgMIgGgBIgbpYIM2AEIgtpaIAPg4IgQgEIAAgBIgFgXIh/6dIG2gXQAxjOgDj4IgBgUQh2q4h2kTQhIhPg1h2QgviigFh5IgDAAIijmpIFRhPIAWAMIClLTIgHCVICyKPIAtjTIgBgIQhKoaAritIAAgIIgJgaQhYklBVh4IAmgPQBeDogNDEIgCAYIArCxIAEALIADgLIAgAAQADBfgHBOIACAJQApECAkEgIAGAtIAIBFIAlFHQAYDtAWD/IC7AEIANmNQgGkCiBgaIgBgBIgcgFQhNgTgIg8IgIg8QgDgagBgOIgBgaIgCgxQgVnIAAnVQAAhxABhxILLAFIANAPQAVHVgJG/IgBAsQgEC4gKC0IgCAQQgTBciDAPQgQAPgFACIgEACQhNAvAnI3IC6AJIB5uWIgBgBQgphAACiSIACgsIA2gXIAXA3QAEgBAJgfQAIgiAOhEQg9i9BViaIAFgJIACgDQAvg5ADhHIAWgMQBIEJhIEJIgEAMIABA3QAAFYgYEWIADAAIBoIlICagEQAmh6ANg4QAFgYABgNQAEgsgCgOQgFgsgRgIQgNgGgMgHIgWgPQgnggAEg/ICsrfIGuB1QhqHHg7DHQgpCJgTAOIgHABIgDAAQhXADgNAOQgXAjgSA0QgZBEgPBgIB/AKIgBAUIgzBBIA0AIMABzAjgMAooAAAIAAMbMhI9AAAIgCimIpEgJIgED1gEgLOA4zIm9z4IAAgBIqeAlInjTUIoAAAIGwyzIk/AMIlGSnIn9AAIEfyEI4gBdIpphQIAGhbIIwg4MgEOhVRICiguMAnLAGRIhdtJIAAAAIBagkIFLA4IBJN1MAhnAFXMAB+BEZIEcBMIAFA9IACBhIxVBEIFnQnIASDzg");
	this.shape.setTransform(544.9,363.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1089.8,727.1), null);


(lib.mask_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mask();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask_1, new cjs.Rectangle(0,0,926,372), null);


(lib.dog_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dog();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dog_1, new cjs.Rectangle(0,0,620,719), null);


(lib.brush_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.brush();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgggACCIAAkDMBBBAAAIAAEDg");
	this.shape.setTransform(339.3,550.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.brush_1, new cjs.Rectangle(0,0,572,563.2), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh+bBHcMAAAiO3MD82AAAMAAACO3g");
	this.shape.setTransform(809.2,457.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,1618.3,914.4), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai9geQACjugHi7QBsADA/AGQA5AFBZgIIAGgCIBCNwIl6AbQgIj5ACjtg");
	mask.setTransform(32.1,54);

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(27.1,103,1,1,0,-0.3,179.7,30.1,53.5);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.3,53.6,1,1,0,176.5,-3.5,30.1,53.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(12.6,8.4,39,91.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhynQQA1AqC4gRIAGgDIBCNwIl5AbQgroUBvmNg");
	mask.setTransform(32,53);

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(30,53.5,1,1,0,0,0,30,53.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(12.5,6.5,39.1,93.1), null);


(lib.moneycopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(52.2,133.1,1,1,-5,0,0,50.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({regY:92.1,scaleX:1.01,scaleY:0.86,rotation:0,skewX:2.8,skewY:-4.2,x:49.7,y:101.8},22,cjs.Ease.quadIn).to({regY:92.2,skewX:4.5,skewY:-2.5,x:49.4,y:99},10,cjs.Ease.quadIn).wait(290));

	// Layer_3
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.2,133.5,1,1,-8.4,0,0,48.8,94.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({regY:94.8,scaleX:1.02,scaleY:0.85,rotation:0,skewX:-1.3,skewY:-7.1,x:47.6,y:102.2},22,cjs.Ease.quadIn).to({regX:48.7,skewX:0.9,skewY:-4.9,x:47.3,y:99.3},10,cjs.Ease.quadIn).wait(290));

	// Layer_1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.2,130.7,1,1,-11.4,0,0,49.1,94.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({regY:94.9,scaleX:1.02,scaleY:0.85,rotation:0,skewX:-4.8,skewY:-9.6,x:48,y:99.7},22,cjs.Ease.quadIn).to({x:47.7,y:96.8},10,cjs.Ease.quadIn).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,34.7,89.6,167.6);


(lib.moneycopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(50.5,134,1,1,0,0,0,50.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({regX:50.4,regY:91.9,scaleX:0.84,scaleY:0.99,skewX:-104.7,skewY:-110.7,x:53,y:144.8},31,cjs.Ease.quadIn).to({skewX:-100,skewY:-106,x:54.9,y:148.8},10).wait(195));

	// Layer_3
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.7,133.3,1,1,-5.2,0,0,48.9,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86).to({regX:48.8,regY:94.4,scaleX:0.85,scaleY:0.97,rotation:0,skewX:-99.6,skewY:-107.9,x:53.1,y:144.3},31,cjs.Ease.quadIn).to({skewX:-94.9,skewY:-103.1,x:55,y:148.3},10).wait(196));

	// Layer_1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.2,130.7,1,1,-11.4,0,0,49.1,94.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({regY:94.6,scaleX:0.87,scaleY:0.96,rotation:0,skewX:-97.9,skewY:-107.4,x:52.9,y:142.1},31,cjs.Ease.quadIn).to({regY:94.5,skewX:-93.2,skewY:-102.7,x:54.9,y:146.1},10).wait(197));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,34.7,89.6,166.8);


(lib.moneycopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(50.5,134,1,1,0,0,0,50.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(81).to({regX:50.6,scaleX:0.89,scaleY:1,skewX:10.5,skewY:13.3,x:54.9,y:132.9},15,cjs.Ease.quadIn).wait(9).to({regX:50.5,regY:91.8,scaleX:1,scaleY:1,rotation:158.2,skewX:0,skewY:0,x:239.9,y:-15.7},51,cjs.Ease.quadIn).wait(139));

	// Layer_3
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.7,133.3,1,1,-5.2,0,0,48.9,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({regX:49,regY:94.7,scaleX:0.89,scaleY:1,rotation:0,skewX:6,skewY:7.6,x:55.1,y:132.4},15,cjs.Ease.quadIn).wait(9).to({regX:48.9,regY:94.6,scaleX:1,scaleY:1,rotation:174,skewX:0,skewY:0,x:304.5,y:63.1},51,cjs.Ease.quadIn).wait(138));

	// Layer_1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.2,130.7,1,1,-11.4,0,0,49.1,94.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({regX:49.2,regY:94.9,scaleX:0.89,rotation:0,skewX:0.5,skewY:0.6,x:55.1,y:129.6},15,cjs.Ease.quadIn).wait(9).to({regX:49.1,regY:94.8,scaleX:1,rotation:160.9,skewX:0,skewY:0,x:350.2,y:26.4},51,cjs.Ease.quadIn).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,34.7,89.6,166.8);


(lib.money_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(50.5,134,1,1,0,0,0,50.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({regX:50.4,scaleX:0.84,scaleY:0.99,skewX:-97.5,skewY:-103.5,x:53,y:144.8},31,cjs.Ease.quadIn).to({regY:91.9,scaleY:0.99,skewX:-92,skewY:-98.1,x:55,y:148.5},10).wait(126));

	// Layer_3
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.7,133.3,1,1,-5.2,0,0,48.9,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({regX:48.8,scaleX:0.85,scaleY:0.97,rotation:0,skewX:-103.8,skewY:-112.1,x:53.2,y:144.3},31,cjs.Ease.quadIn).to({regY:94.4,skewX:-98.3,skewY:-106.6,x:55.2,y:148},10).wait(127));

	// Layer_1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.2,130.7,1,1,-11.4,0,0,49.1,94.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({regY:94.7,scaleX:0.87,scaleY:0.96,rotation:0,skewX:-108.6,skewY:-118.1,x:52.9,y:142},31,cjs.Ease.quadIn).to({regY:94.6,skewX:-103.1,skewY:-112.7,x:55.2,y:145.7},10).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,34.7,89.6,166.8);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.black();
	this.instance.parent = this;
	this.instance.setTransform(809.1,47.1,1,1,0,0,0,809.1,47.1);
	this.instance.alpha = 0.051;
	this.instance.filters = [new cjs.BlurFilter(76, 76, 1)];
	this.instance.cache(-2,-2,1622,918);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({alpha:0.148},0).to({alpha:0.051},4).to({alpha:0.16},4).to({alpha:0.051},5).to({alpha:0.199},4).to({alpha:0},3).wait(16).to({alpha:0.02},0).to({alpha:0},4).to({alpha:0.07},4).wait(2).to({alpha:0},0).wait(10).to({alpha:0.148},0).wait(3).to({alpha:0},0).wait(3).to({alpha:0.121},0).wait(3).to({alpha:0},0).wait(17).to({alpha:0.051},0).wait(20).to({alpha:0.121},0).to({alpha:0.051},4).to({alpha:0.148},4).to({alpha:0.051},5).to({alpha:0.148},4).to({alpha:0},3).wait(16).to({alpha:0.02},0).to({alpha:0},4).to({alpha:0.07},4).wait(2).to({alpha:0},0).wait(10).to({alpha:0.148},0).wait(3).to({alpha:0},0).wait(3).to({alpha:0.121},0).wait(3).to({alpha:0},0).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-38,1698,994);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(802.5,436,1,1,0,0,0,802.5,436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(255));

	// Layer_4
	this.instance_1 = new lib.moneycopy4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(834.5,593.4,1,1,-167.3,0,0,18.6,134.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(255));

	// Layer_3
	this.instance_2 = new lib.moneycopy2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(734.5,611.1,1,1,0,0,0,30.4,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(255));

	// Layer_2
	this.instance_3 = new lib.moneycopy("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(356.8,707.2,0.945,0.945,94,0,0,30.4,93.9);

	this.instance_4 = new lib.money_1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(270.2,656.7,1,1,0,0,0,30.4,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(255));

	// Layer_1
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(255));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.Symbol1_1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(802.5,45.1,1,1,0,0,0,809.1,47.1);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145));

	// Layer_7
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1062.5,516.7,1,1,0,0,0,544.9,363.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({scaleX:1.1,scaleY:1.1,x:1434.6,alpha:0.781},106,cjs.Ease.quadInOut).wait(29));

	// Layer_6
	this.instance_2 = new lib.brush_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1319,591,1,1,0,0,0,286,281);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({regX:286.1,regY:281.1,scaleX:1.1,scaleY:1.1,x:1716.8,y:598.5},106,cjs.Ease.quadInOut).wait(29));

	// dog
	this.instance_3 = new lib.dog_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(827,512.5,1,1,0,0,0,310,359.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({regX:310.1,regY:359.6,scaleX:1.1,scaleY:1.1,x:1175.6,y:512.2},106,cjs.Ease.quadInOut).wait(29));

	// mask
	this.instance_4 = new lib.mask_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(590,552,1,1,0,0,0,463,186);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({regX:463.1,regY:186.1,scaleX:1.05,scaleY:1.05,x:579.5,y:557.9,alpha:0},106,cjs.Ease.quadInOut).wait(29));

	// Layer_2
	this.instance_5 = new lib.bg_1("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(802.5,436,1,1,0,0,0,802.5,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({startPosition:10},0).to({scaleX:1.05,scaleY:1.05,startPosition:116},106,cjs.Ease.quadInOut).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(757.9,396,1697,994);
// library properties:
lib.properties = {
	id: 'EFB91107547F4AD781D28A2F11976226',
	width: 1605,
	height: 872,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:require('./images/bg.jpg?1541930566757'), id:"bg"},
		{src:require('./images/brush.png?1541930566757'), id:"brush"},
		{src:require('./images/dog.png?1541930566757'), id:"dog"},
		{src:require('./images/mask.png?1541930566757'), id:"mask"},
		{src:require('./images/money.png?1541930566757'), id:"money"}
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
an.compositions['EFB91107547F4AD781D28A2F11976226'] = {
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