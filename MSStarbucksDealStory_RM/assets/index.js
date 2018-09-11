var AdobeAn = {};
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Arrow = function() {
	this.initialize(img.Arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,118);


(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,104);


(lib.lin = function() {
	this.initialize(img.lin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,506,150);


(lib.plate = function() {
	this.initialize(img.plate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,32);// helper functions:

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


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Arrow();
	this.instance.parent = this;
	this.instance.setTransform(0,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,-1,276,59), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#734B34").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgLgLg");
	this.shape.setTransform(3.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,7.8,7.8), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("AA8EpQgtgXgWhjQhkALgxhKQgig+ADhUIgBgBQgogZgZgmIgIgMQgbgtAJg1QAFghANgiQABgeAVgPIAEAFIAFAFIA6A/IAMAQIACADQDWEODiEMQgtALgtAAQhBAAhDgYg");
	this.shape.setTransform(28.2,32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,56.4,64.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("Aj6E9IByinIFTmxQAagfAWgDIgYBkIAAACQgXC+g2BKIgFAIQhrC3g+AKQhoBEhjAAIgXgBg");
	this.shape.setTransform(25.1,31.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,50.2,63.6), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("AgYEOQh1hKg9h0Qg/hTgph4IgqiMQgchjAWgVIAHAHQBOBKBFBlIDEDGID/EPIByBmIgIAOQjDgai6hYg");
	this.shape.setTransform(36.5,38.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,73,76.9), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("AluGsILdtZQgCAtgFArQgFAhgGARIgKAgQgGAPgCAXIgHAwQgDAUgGATQgdBYgsBTQgpBWhBBGQgdAfgkAdQgzArgxAgQhQAzhNAaQhLAZhIAAIghgCg");
	this.shape.setTransform(36.7,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,73.4,86), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("AgKGKQAJgpgBhWIgNqZQAOgEAPAIIAAABIABBaQABCpAACiIgCDvIgCB6QAAALgIAAQgEAAgKgGg");
	this.shape.setTransform(1.6,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,3.2,80), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lin();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,253,75), null);


(lib.round_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("AhKBNQgeggAAgtQAAgtAeggQAggfAqgBQAsABAfAfQAeAgAAAtQAAAtgeAgQgfAhgsAAQgqAAggghg");
	this.shape.setTransform(9,9,0.853,0.822);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_b, new cjs.Rectangle(0,0,18,18), null);


(lib.round_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EF3BD").s().p("AhKBNQgeggAAgtQAAgtAeggQAggfAqgBQAsABAfAfQAeAgAAAtQAAAtgeAgQgfAhgsAAQgqAAggghg");
	this.shape.setTransform(10,10,0.948,0.913);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_a, new cjs.Rectangle(0,0,20,20), null);


(lib.plate_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.plate();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009EDE").s().p("AgyAFQAOgyAygYIAlCLQhYgJgNg4g");
	this.shape.setTransform(5.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate_1, new cjs.Rectangle(0,0,111,32), null);


(lib.money_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EF3BD").s().p("Ah8EEIAAoHID5AAIAAIHg");
	this.shape.setTransform(12.5,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_b, new cjs.Rectangle(0,0,25,52), null);


(lib.money_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("Ah3EEIAAoHIDvAAIAAIHg");
	this.shape.setTransform(12,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_a, new cjs.Rectangle(0,0,24,52), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FF3BD").s().p("AgLDVIgBAAQgjgqgGguQgGguAGgqQg0AxAIBIQgCAOgMAGQgOgBgKgPQgKgpAIgwQAMgiAaghIABgBIADgEQgEAAgHAEQgPAKgbAiQgSAhgIgEQgVgEADgUQAJgZAOgYQAXgkAkgiQgggHgeAMQgbABgCgJQgDgKAHgKQAIgJAEgCQALgFAZgEQAVgFAjACQAmADA3AMIgGh1IDRAAIgIDSIgFA1QgGAZgHATQgOAjgVAPQgeARgPgFQgOgEgFgLQgHgPAYgTQAXgUAHgVQAGgOABgLQABgMgEgJQgIgTgHgFQgIgIgKACQg5gRgYArIgGAPQgTBGAQAsQAQAqgPAVQgIAGgGAAIgEgBg");
	this.shape.setTransform(19.8,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-0.5,0,40.6,42.8), null);


(lib.glass_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.glass();
	this.instance.parent = this;
	this.instance.setTransform(1,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glass_1, new cjs.Rectangle(1,-2,73.5,52), null);


(lib.Symbol20copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZBIIhNhWIAkgMIBJAkIAqhUIA2AtIhGBog");
	mask.setTransform(267.4,50.4);

	// Layer_1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy3, new cjs.Rectangle(257.1,42.9,18.9,15), null);


(lib.Symbol20copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcA3IAdhKIhBgHIAQghIBxgGIgmCDg");
	mask.setTransform(38,4.8);

	// Layer_1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy2, new cjs.Rectangle(31.5,-1,13,12.3), null);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADHEUIgXgdIhnj+Ih0hsIi2hnIBQg8IDiBuIB9DUIATDUIgDAXg");
	mask.setTransform(246.7,24);

	// Layer_1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(224.1,-1,45.1,52.9), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjoDnQAZiNBZiUQCLj0B/AAIBUAGIgHAXIjAE1Ih6ELg");
	mask.setTransform(15.6,31.6);

	// Layer_1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,1.3,38.8,56.7), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_78 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(78).call(this.frame_78).wait(1));

	// Layer_13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_47 = new cjs.Graphics().p("AUIEIIAWgdIAoAlIgVAdg");
	var mask_graphics_48 = new cjs.Graphics().p("AUDEIIAfgrIApAlIgfArg");
	var mask_graphics_49 = new cjs.Graphics().p("AT/EIIAog5IApAlIgpA5g");
	var mask_graphics_50 = new cjs.Graphics().p("AT6EIIAyhHIApAlIgyBHg");
	var mask_graphics_51 = new cjs.Graphics().p("AT1EIIA7hWIApAlIg7BWg");
	var mask_graphics_52 = new cjs.Graphics().p("ATxEIIBEhkIAoAlIhDBkg");
	var mask_graphics_53 = new cjs.Graphics().p("ATtEIIBMhzIApAlIhNBzg");
	var mask_graphics_54 = new cjs.Graphics().p("ATpEIIBUiCIApAlIhVCCg");
	var mask_graphics_55 = new cjs.Graphics().p("ATjEKIBciRIApAlIhcCRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_graphics_47,x:135,y:30.1}).wait(1).to({graphics:mask_graphics_48,x:135.5,y:30.1}).wait(1).to({graphics:mask_graphics_49,x:136,y:30.1}).wait(1).to({graphics:mask_graphics_50,x:136.5,y:30.1}).wait(1).to({graphics:mask_graphics_51,x:136.9,y:30.1}).wait(1).to({graphics:mask_graphics_52,x:137.3,y:30.1}).wait(1).to({graphics:mask_graphics_53,x:137.8,y:30.1}).wait(1).to({graphics:mask_graphics_54,x:138.2,y:30.1}).wait(1).to({graphics:mask_graphics_55,x:138.4,y:30.3}).wait(24));

	// Layer_12
	this.instance = new lib.Symbol20copy3();
	this.instance.parent = this;
	this.instance.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(32));

	// Layer_11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_38 = new cjs.Graphics().p("ATeDmIArgjIAZAZIgqAjg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ATaDiIAqgjIAiAiIgqAjg");
	var mask_1_graphics_40 = new cjs.Graphics().p("ATVDdIArgjIArArIgqAjg");
	var mask_1_graphics_41 = new cjs.Graphics().p("ATRDZIAqgjIA0A0IgqAjg");
	var mask_1_graphics_42 = new cjs.Graphics().p("ATMDUIArgjIA9A9IgqAjg");
	var mask_1_graphics_43 = new cjs.Graphics().p("ATIDQIAqgjIBGBGIgqAjg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ATDDLIArgjIBPBPIgqAjg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AS/DHIAqgjIBYBYIgqAjg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AS6DDIArgkIBhBhIgqAjg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AS1C9IAqgjIBrBqIgrAjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_1_graphics_38,x:131.4,y:25.5}).wait(1).to({graphics:mask_1_graphics_39,x:131.8,y:26}).wait(1).to({graphics:mask_1_graphics_40,x:132.3,y:26.4}).wait(1).to({graphics:mask_1_graphics_41,x:132.7,y:26.9}).wait(1).to({graphics:mask_1_graphics_42,x:133.2,y:27.3}).wait(1).to({graphics:mask_1_graphics_43,x:133.6,y:27.8}).wait(1).to({graphics:mask_1_graphics_44,x:134.1,y:28.2}).wait(1).to({graphics:mask_1_graphics_45,x:134.5,y:28.7}).wait(1).to({graphics:mask_1_graphics_46,x:135,y:29.1}).wait(1).to({graphics:mask_1_graphics_47,x:135.4,y:29.5}).wait(32));

	// Layer_10
	this.instance_1 = new lib.Symbol20copy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(41));

	// Layer_9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_21 = new cjs.Graphics().p("ALxBuIGzkuIA5BTImyEug");
	var mask_2_graphics_22 = new cjs.Graphics().p("ALlBdIGykuIBSB1ImyEug");
	var mask_2_graphics_23 = new cjs.Graphics().p("ALZBMIGykvIBqCYImyEvg");
	var mask_2_graphics_24 = new cjs.Graphics().p("ALMA6IGzkuICCC7ImzEug");
	var mask_2_graphics_25 = new cjs.Graphics().p("ALAApIGzkuICaDdImzEug");
	var mask_2_graphics_26 = new cjs.Graphics().p("AK0AYIGykvICzEAImzEvg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AKoAHIGykvIDLEiImzEvg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AKbgKIGzkvIDjFEImzEvg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AKPgbIGzkvID7FmImzEvg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AKDgsIGykwIETGJImyEwg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AJ3g+IGykvIErGsImyEvg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AJqhPIGzkvIFDHOImyEvg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AJehgIGzkwIFbHxImyEwg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AJShyIGykvIF0IUImzEvg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AJGiDIGykvIGMI2ImzEvg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AI5iUIGzkvIGkJYImzEvg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AItilIGzkwIG8J7ImzEwg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AIhi3IGykvIHUKeImyEvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_2_graphics_21,x:124.5,y:-6.5}).wait(1).to({graphics:mask_2_graphics_22,x:125.7,y:-4.8}).wait(1).to({graphics:mask_2_graphics_23,x:126.9,y:-3.1}).wait(1).to({graphics:mask_2_graphics_24,x:128.1,y:-1.5}).wait(1).to({graphics:mask_2_graphics_25,x:129.3,y:0.2}).wait(1).to({graphics:mask_2_graphics_26,x:130.5,y:1.9}).wait(1).to({graphics:mask_2_graphics_27,x:131.7,y:3.6}).wait(1).to({graphics:mask_2_graphics_28,x:132.9,y:5.2}).wait(1).to({graphics:mask_2_graphics_29,x:134.1,y:6.9}).wait(1).to({graphics:mask_2_graphics_30,x:135.2,y:8.6}).wait(1).to({graphics:mask_2_graphics_31,x:136.4,y:10.3}).wait(1).to({graphics:mask_2_graphics_32,x:137.6,y:12}).wait(1).to({graphics:mask_2_graphics_33,x:138.8,y:13.6}).wait(1).to({graphics:mask_2_graphics_34,x:140,y:15.3}).wait(1).to({graphics:mask_2_graphics_35,x:141.2,y:17}).wait(1).to({graphics:mask_2_graphics_36,x:142.4,y:18.7}).wait(1).to({graphics:mask_2_graphics_37,x:143.6,y:20.3}).wait(1).to({graphics:mask_2_graphics_38,x:144.7,y:22.1}).wait(41));

	// Layer_8
	this.instance_2 = new lib.Symbol20copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).wait(58));

	// Layer_6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_27 = new cjs.Graphics().p("AC0gHIAZgaIAjApIgYAag");
	var mask_3_graphics_28 = new cjs.Graphics().p("ACrgCIAigjIAkAoIgiAjg");
	var mask_3_graphics_29 = new cjs.Graphics().p("ACiABIAsgrIAjAqIgrArg");
	var mask_3_graphics_30 = new cjs.Graphics().p("ACZAGIA1g1IAkAqIg1A1g");
	var mask_3_graphics_31 = new cjs.Graphics().p("ACRALIA9g/IAkAqIg+A/g");
	var mask_3_graphics_32 = new cjs.Graphics().p("ACIAQIBHhJIAkAqIhIBJg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AB/AVIBQhSIAkApIhQBSg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AB2AZIBahbIAjAqIhZBbg");
	var mask_3_graphics_35 = new cjs.Graphics().p("ABtAeIBjhlIAkAqIhjBlg");
	var mask_3_graphics_36 = new cjs.Graphics().p("ABhAjIBshvIAjAqIhsBvg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_3_graphics_27,x:24.1,y:-1}).wait(1).to({graphics:mask_3_graphics_28,x:24.1,y:-0.6}).wait(1).to({graphics:mask_3_graphics_29,x:24.1,y:-0.2}).wait(1).to({graphics:mask_3_graphics_30,x:24.2,y:0.2}).wait(1).to({graphics:mask_3_graphics_31,x:24.2,y:0.6}).wait(1).to({graphics:mask_3_graphics_32,x:24.3,y:1}).wait(1).to({graphics:mask_3_graphics_33,x:24.3,y:1.4}).wait(1).to({graphics:mask_3_graphics_34,x:24.3,y:1.8}).wait(1).to({graphics:mask_3_graphics_35,x:24.4,y:2.2}).wait(1).to({graphics:mask_3_graphics_36,x:24.1,y:3.3}).wait(43));

	// Layer_5
	this.instance_3 = new lib.Symbol20copy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).wait(52));

	// Layer_4 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_18 = new cjs.Graphics().p("ACDAcIAAg2IAeAAIAAA2g");
	var mask_4_graphics_19 = new cjs.Graphics().p("AB9gaIArgBIAAA2IgrABg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AB2gaIA4gBIAAA2Ig4ABg");
	var mask_4_graphics_21 = new cjs.Graphics().p("ABvgZIBGgDIAAA2IhGADg");
	var mask_4_graphics_22 = new cjs.Graphics().p("ABpgZIBTgDIAAA2IhTADg");
	var mask_4_graphics_23 = new cjs.Graphics().p("ABigYIBggFIAAA2IhgAFg");
	var mask_4_graphics_24 = new cjs.Graphics().p("ABbgXIBugHIAAA2IhuAHg");
	var mask_4_graphics_25 = new cjs.Graphics().p("ABVgWIB6gJIAAA2Ih6AJg");
	var mask_4_graphics_26 = new cjs.Graphics().p("ABOgVICIgLIAAA2IiIALg");
	var mask_4_graphics_27 = new cjs.Graphics().p("ABFgTICVgPIAAA2IiVAPg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_4_graphics_18,x:16.1,y:-0.1}).wait(1).to({graphics:mask_4_graphics_19,x:16.8,y:-0.2}).wait(1).to({graphics:mask_4_graphics_20,x:17.4,y:-0.2}).wait(1).to({graphics:mask_4_graphics_21,x:18.1,y:-0.3}).wait(1).to({graphics:mask_4_graphics_22,x:18.8,y:-0.4}).wait(1).to({graphics:mask_4_graphics_23,x:19.4,y:-0.4}).wait(1).to({graphics:mask_4_graphics_24,x:20.1,y:-0.5}).wait(1).to({graphics:mask_4_graphics_25,x:20.7,y:-0.7}).wait(1).to({graphics:mask_4_graphics_26,x:21.4,y:-0.8}).wait(1).to({graphics:mask_4_graphics_27,x:21.8,y:-0.9}).wait(52));

	// Layer_3
	this.instance_4 = new lib.Symbol20copy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(61));

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("AkMDmIAchhIH9CTIgcBhg");
	var mask_5_graphics_1 = new cjs.Graphics().p("AkRDjIAoiHIH7CYIgoCGg");
	var mask_5_graphics_2 = new cjs.Graphics().p("AkXDfIA1irIH6CcIg1Csg");
	var mask_5_graphics_3 = new cjs.Graphics().p("AkdDcIBDjQIH4ChIhDDQg");
	var mask_5_graphics_4 = new cjs.Graphics().p("AkjDYIBRjzIH2ClIhRD1g");
	var mask_5_graphics_5 = new cjs.Graphics().p("AkqDVIBgkYIH1CqIhgEZg");
	var mask_5_graphics_6 = new cjs.Graphics().p("AkxDRIBwk8IHzCwIhwE9g");
	var mask_5_graphics_7 = new cjs.Graphics().p("Ak4DOICAlgIHxC1IiAFgg");
	var mask_5_graphics_8 = new cjs.Graphics().p("AlADKICSmDIHvC6IiSGDg");
	var mask_5_graphics_9 = new cjs.Graphics().p("AlIDHICkmmIHtC/IikGmg");
	var mask_5_graphics_10 = new cjs.Graphics().p("AlQDDIC2nIIHrDEIi2HIg");
	var mask_5_graphics_11 = new cjs.Graphics().p("AlZDAIDKnrIHpDJIjKHrg");
	var mask_5_graphics_12 = new cjs.Graphics().p("AliC8IDeoNIHnDOIjeINg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AlrC5IDyovIHlDTIjyIvg");
	var mask_5_graphics_14 = new cjs.Graphics().p("Al1C9IEIpQIHjDXIkIJQg");
	var mask_5_graphics_15 = new cjs.Graphics().p("Al/DLIEepxIHhDcIkeJxg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AmJDZIE0qSIHfDhIk0KSg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AmUDmIFMqxIHdDmIlMKxg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AmfD0IFlrRIHaDqIllLRg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:-4.5,y:37.7}).wait(1).to({graphics:mask_5_graphics_1,x:-3.9,y:37.8}).wait(1).to({graphics:mask_5_graphics_2,x:-3.3,y:38}).wait(1).to({graphics:mask_5_graphics_3,x:-2.6,y:38.1}).wait(1).to({graphics:mask_5_graphics_4,x:-1.9,y:38.3}).wait(1).to({graphics:mask_5_graphics_5,x:-1.2,y:38.4}).wait(1).to({graphics:mask_5_graphics_6,x:-0.4,y:38.6}).wait(1).to({graphics:mask_5_graphics_7,x:0.4,y:38.7}).wait(1).to({graphics:mask_5_graphics_8,x:1.3,y:38.8}).wait(1).to({graphics:mask_5_graphics_9,x:2.1,y:39}).wait(1).to({graphics:mask_5_graphics_10,x:3,y:39.1}).wait(1).to({graphics:mask_5_graphics_11,x:4,y:39.3}).wait(1).to({graphics:mask_5_graphics_12,x:5,y:39.4}).wait(1).to({graphics:mask_5_graphics_13,x:6,y:39.6}).wait(1).to({graphics:mask_5_graphics_14,x:7,y:39}).wait(1).to({graphics:mask_5_graphics_15,x:8.1,y:37.4}).wait(1).to({graphics:mask_5_graphics_16,x:9.2,y:35.8}).wait(1).to({graphics:mask_5_graphics_17,x:10.4,y:34.2}).wait(1).to({graphics:mask_5_graphics_18,x:11.8,y:32.2}).wait(61));

	// Layer_1
	this.instance_5 = new lib.Symbol20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(137.5,28.4,1,1,0,0,0,137.5,28.4);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,51,30.1,11);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_63 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(2));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("Am7FoIAArPIPYAAIAALPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:54.1,y:14.3}).wait(63));

	// Layer_2
	this.instance = new lib.glass_1();
	this.instance.parent = this;
	this.instance.setTransform(61.4,98.5,1,1,0.5,0,0,36.4,48.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({y:48.7},28,cjs.Ease.quadOut).wait(14));

	// Layer_1
	this.instance_1 = new lib.plate_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.9,66.5,0.037,0.037,-0.3,0,0,54.8,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:30.6,scaleX:1.15,scaleY:1.15,x:55,y:66.6},13,cjs.Ease.quadInOut).to({regY:30.4,scaleX:1,scaleY:1,x:54.9,y:66.4},5,cjs.Ease.quadInOut).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.8,65.3,4.2,1.2);


(lib.Symbol2copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqSCMQNpAJC4gSIALgJIACgCIABgBIAAABQC2gegKkaIBHgCQAUB5ghB4QhXB7iPATIAAAEIwzACg");
	mask.setTransform(75.3,56.7);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy7, new cjs.Rectangle(9,37.3,132.7,37.8), null);


(lib.Symbol2copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApeBvQNoAJC5gSQACAAA6g3QAxgvAEilIAZAAQBQDYjJBxIw3ACg");
	mask.setTransform(70.2,53.4);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy6, new cjs.Rectangle(9,36.8,122.4,33.3), null);


(lib.Symbol2copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApvB8IAFg3QNoAJC5gSIAFgBQBsgLAUitIA0gCQAABdghBBQgiBahIAHg");
	mask.setTransform(61.6,50);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy5, new cjs.Rectangle(0,37.3,124,25.5), null);


(lib.Symbol2copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkIALQgEgJADgUIIVAAIAAAlQkAgHkUgBg");
	mask.setTransform(139.8,35.9);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy4, new cjs.Rectangle(113.1,34,53.5,3.8), null);


(lib.Symbol2copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq/AcQgFgRAGgbIVegRQAwAhgUAig");
	mask.setTransform(183.7,27.9);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy3, new cjs.Rectangle(113.1,24.5,139.9,6.9), null);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AongQIRSgKIgHAsIxLAJQgGgRAGgag");
	mask.setTransform(168.6,18.8);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(113.1,16.1,111,5.4), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmcgLINBgKIgBAnItHAEQgEgQALgRg");
	mask.setTransform(156.4,10.5);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(114.3,8.3,84.3,4.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxEEXIgFgrILvAAIBohLIAAjEIARivICehVISFADIAIBKIyIgLIgCABQhIARgUAYQgUAZgEAOQgSBIAHE5IivA7g");
	mask.setTransform(132.7,25.6);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(22.9,0,219.6,55.2), null);


(lib.Sapling010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer_8
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(1,-93.7,1,1,0,0,0,20.1,21.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({y:-49.7},15,cjs.Ease.quadOut).wait(16));

	// Layer_7
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.6,5.9,0.064,0.064,0,0,0,3.9,3.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:9.7},8).to({scaleX:1,scaleY:1,x:9.6},3).wait(29));

	// Layer_7
	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.9,6.3,0.064,0.064,0,0,0,3.9,3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,y:6.4},8).to({scaleX:1,scaleY:1,y:6.3},3).wait(30));

	// Layer_7
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.5,-14.1,0.064,0.064,0,0,0,3.9,3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,y:-14},8).to({scaleX:1,scaleY:1,y:-14.1},3).wait(31));

	// Layer_6
	this.instance_4 = new lib.Symbol15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.6,-0.4,0.041,0.041,0,0,0,55.6,64);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({regX:56.2,scaleX:1,scaleY:1,y:-0.5},18,cjs.Ease.quadOut).wait(33));

	// Layer_5
	this.instance_5 = new lib.Symbol14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.2,-0.2,0.034,0.034,0,0,0,0,64);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({regX:0.7,regY:63.4,scaleX:1,scaleY:1,x:2.3,y:-0.3},18,cjs.Ease.quadOut).wait(35));

	// Layer_4
	this.instance_6 = new lib.Symbol13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.6,52.5,0.011,0.011,0,0,0,73,77.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({regY:76.6,scaleX:1,scaleY:1},18,cjs.Ease.quadOut).wait(45));

	// Layer_3
	this.instance_7 = new lib.Symbol12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(2.2,51.1,0.012,0.012,0,0,0,0,85.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({regX:0.5,regY:85.4,scaleX:1,scaleY:1},18,cjs.Ease.quadOut).wait(45));

	// Layer_1
	this.instance_8 = new lib.Symbol11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1.7,78.9,1,0.027,0,0,0,1.8,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1},14,cjs.Ease.quadOut).wait(62));

}).prototype = p = new cjs.MovieClip();


(lib.money_anicopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(78));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");
	var mask_graphics_51 = new cjs.Graphics().p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.7,y:28.6}).wait(51).to({graphics:mask_graphics_51,x:1.7,y:28.6}).wait(78));

	// round_a
	this.instance = new lib.round_a();
	this.instance.parent = this;
	this.instance.setTransform(-7,50.3,0.89,0.475,0,39.9,0,9.8,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regY:10.3,scaleY:0.68,skewX:25.5,x:-1.3,y:48.3,alpha:1},3).to({regX:10,regY:10.1,scaleY:0.89,skewX:0,x:1.7,y:38.3},4).to({y:21.8},5).to({scaleY:0.6,skewX:24.2,x:4.5,y:10.6},3).to({scaleY:0.36,skewX:46.5,x:11.3,y:6.8},2).wait(105));

	// money_a copy 3
	this.instance_1 = new lib.money_a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.8,47.3,1.626,0.73,0,0,0,1.1,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:-0.1,x:-15.7,y:19.2,alpha:1},10).to({regY:-0.2,x:-15.8,y:-28.7},17).to({_off:true},1).wait(97));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:10.5,y:50.2}).wait(51).to({graphics:mask_1_graphics_51,x:10.5,y:50.2}).wait(78));

	// Layer_12
	this.instance_2 = new lib.round_b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.5,-10,1,1,0,0,0,9,9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(1).to({y:-6.5},0).wait(1).to({y:-2.9},0).wait(1).to({y:0.6},0).wait(1).to({y:4.2},0).wait(1).to({y:7.7},0).wait(1).to({y:11.2},0).wait(1).to({y:14.7},0).wait(1).to({y:18.2},0).wait(1).to({y:21.6},0).wait(1).to({y:25},0).wait(1).to({y:28.4},0).wait(1).to({y:31.6},0).wait(1).to({y:34.8},0).wait(1).to({y:37.9},0).to({y:89.3},20,cjs.Ease.sineOut).wait(78));

	// money_b
	this.instance_3 = new lib.money_b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.5,-16.7,1,1,0,0,0,12.5,26);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(1).to({y:-13.2},0).wait(1).to({y:-9.7},0).wait(1).to({y:-6.1},0).wait(1).to({y:-2.5},0).wait(1).to({y:1},0).wait(1).to({y:4.6},0).wait(1).to({y:8.1},0).wait(1).to({y:11.6},0).wait(1).to({y:15.1},0).wait(1).to({y:18.5},0).wait(1).to({y:21.8},0).wait(1).to({y:25.1},0).wait(1).to({y:28.2},0).wait(1).to({y:31.4},0).to({y:82.9},20,cjs.Ease.sineOut).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.money_anicopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(115));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");
	var mask_graphics_33 = new cjs.Graphics().p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.7,y:28.6}).wait(33).to({graphics:mask_graphics_33,x:1.7,y:28.6}).wait(115));

	// round_a
	this.instance = new lib.round_a();
	this.instance.parent = this;
	this.instance.setTransform(-7,50.3,0.89,0.475,0,39.9,0,9.8,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regY:10.3,scaleY:0.68,skewX:25.5,x:-1.3,y:48.3,alpha:1},3).to({regX:10,regY:10.1,scaleY:0.89,skewX:0,x:1.7,y:38.3},4).to({y:21.8},5).to({scaleY:0.6,skewX:24.2,x:4.5,y:10.6},3).to({scaleY:0.36,skewX:46.5,x:11.3,y:6.8},2).wait(124));

	// money_a copy 3
	this.instance_1 = new lib.money_a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.8,47.3,1.626,0.73,0,0,0,1.1,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:-0.1,x:-15.7,y:19.2,alpha:1},10).to({y:-20.2},19,cjs.Ease.sineOut).wait(115));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:10.5,y:50.2}).wait(33).to({graphics:mask_1_graphics_33,x:10.5,y:50.2}).wait(115));

	// Layer_12
	this.instance_2 = new lib.round_b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.5,-10,1,1,0,0,0,9,9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({y:27.7},16,cjs.Ease.sineOut).wait(115));

	// money_b
	this.instance_3 = new lib.money_b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.5,-16.7,1,1,0,0,0,12.5,26);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:21.1},16,cjs.Ease.sineOut).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.money_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(1));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");
	mask.setTransform(1.7,28.6);

	// round_a
	this.instance = new lib.round_a();
	this.instance.parent = this;
	this.instance.setTransform(-7,50.3,0.89,0.475,0,39.9,0,9.8,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regY:10.3,scaleY:0.68,skewX:25.5,x:-1.3,y:48.3,alpha:1},3).to({regX:10,regY:10.1,scaleY:0.89,skewX:0,x:1.7,y:38.3},4).to({y:21.8},5).to({scaleY:0.6,skewX:24.2,x:4.5,y:10.6},3).to({scaleY:0.36,skewX:46.5,x:11.3,y:6.8},2).wait(34));

	// money_a copy 3
	this.instance_1 = new lib.money_a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.8,47.3,1.626,0.73,0,0,0,1.1,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:-0.1,x:-15.7,y:19.2,alpha:1},10).to({regY:-0.2,x:-15.8,y:-28.7},17).to({_off:true},1).wait(26));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");
	mask_1.setTransform(10.5,50.2);

	// Layer_12
	this.instance_2 = new lib.round_b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.5,-10,1,1,0,0,0,9,9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({y:123.5},39).to({_off:true},1).wait(1));

	// money_b
	this.instance_3 = new lib.money_b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.5,-16.7,1,1,0,0,0,12.5,26);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:117.3},39).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.money_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(178));

	// Layer_1 copy 3
	this.instance = new lib.money_ani("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41.6,-41.3,1,1,0,0,0,19,-74.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146).to({_off:false},0).to({_off:true},57).wait(41));

	// Layer_1 copy 7
	this.instance_1 = new lib.money_anicopy("synched",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.6,-41.3,1,1,0,0,0,19,-74.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({_off:true},57).wait(151));

	// Layer_1 copy 6
	this.instance_2 = new lib.money_anicopy2("synched",4);
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.6,-41.3,1,1,0,0,0,19,-74.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({_off:true},57).wait(169));

	// Layer_1
	this.instance_3 = new lib.money_ani("synched",4);
	this.instance_3.parent = this;
	this.instance_3.setTransform(41.6,-41.3,1,1,0,0,0,19,-74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},57).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.lin_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer_16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("AjPBuIEkhSIB7G2IkkBSg");
	var mask_graphics_3 = new cjs.Graphics().p("AkZBuIG4h7IB7G0Im4B8g");
	var mask_graphics_4 = new cjs.Graphics().p("AljBtIJNilIB6G1IpNClg");
	var mask_graphics_5 = new cjs.Graphics().p("AmrBsILdjNIB6G1IrdDOg");
	var mask_graphics_6 = new cjs.Graphics().p("AnvBrINkjyIB7G0ItkD0g");
	var mask_graphics_7 = new cjs.Graphics().p("AorBrIPdkVIB6G0IvdEWg");
	var mask_graphics_8 = new cjs.Graphics().p("AphBqIRJkzIB6G1IxJE0g");
	var mask_graphics_9 = new cjs.Graphics().p("AqQBpISmlNIB7G1IymFOg");
	var mask_graphics_10 = new cjs.Graphics().p("Aq4BpIT2lkIB7G1Iz2Flg");
	var mask_graphics_11 = new cjs.Graphics().p("AraBpIU6l3IB7G1I06F3g");
	var mask_graphics_12 = new cjs.Graphics().p("Ar2BoIVzmGIB6G0I1zGIg");
	var mask_graphics_13 = new cjs.Graphics().p("AsOBoIWimUIB7G1I2iGVg");
	var mask_graphics_14 = new cjs.Graphics().p("AshBoIXImeIB7G0I3IGfg");
	var mask_graphics_15 = new cjs.Graphics().p("AswBoIXmmnIB7G1I3mGng");
	var mask_graphics_16 = new cjs.Graphics().p("As7BoIX8muIB7G1I38Gug");
	var mask_graphics_17 = new cjs.Graphics().p("AtEBnIYOmxIB7G0I4OGzg");
	var mask_graphics_18 = new cjs.Graphics().p("AtJBkIYYm1IB7G1I4YG2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:-0.8,y:54.8}).wait(1).to({graphics:mask_graphics_3,x:7,y:54.7}).wait(1).to({graphics:mask_graphics_4,x:14.9,y:54.6}).wait(1).to({graphics:mask_graphics_5,x:22.5,y:54.6}).wait(1).to({graphics:mask_graphics_6,x:29.6,y:54.5}).wait(1).to({graphics:mask_graphics_7,x:36.1,y:54.4}).wait(1).to({graphics:mask_graphics_8,x:41.8,y:54.4}).wait(1).to({graphics:mask_graphics_9,x:46.7,y:54.3}).wait(1).to({graphics:mask_graphics_10,x:51,y:54.3}).wait(1).to({graphics:mask_graphics_11,x:54.5,y:54.2}).wait(1).to({graphics:mask_graphics_12,x:57.5,y:54.2}).wait(1).to({graphics:mask_graphics_13,x:60,y:54.2}).wait(1).to({graphics:mask_graphics_14,x:62,y:54.1}).wait(1).to({graphics:mask_graphics_15,x:63.6,y:54.1}).wait(1).to({graphics:mask_graphics_16,x:64.8,y:54.1}).wait(1).to({graphics:mask_graphics_17,x:65.7,y:54.1}).wait(1).to({graphics:mask_graphics_18,x:68.4,y:53.8}).wait(11));

	// Layer_17
	this.instance = new lib.Symbol2copy7();
	this.instance.parent = this;
	this.instance.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(27));

	// Layer_15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AjPBFIEkhRIB7G1IkkBSg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AkRBFIGoh3IB7G1ImoB3g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlTBEIIsicIB7G1IosCcg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AmTBDIKsi/IB7G0IqsDBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AnPBCIMkjhIB7G1IskDig");
	var mask_1_graphics_6 = new cjs.Graphics().p("AoFBBIOQj/IB7G1IuQEAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Ao1BBIPwkaIB7G0IvwEbg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ApfBAIREkxIB7G0IxEEzg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AqDBAISMlGIB7G1IyMFGg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AqhBAITIlXIB7G1IzIFXg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Aq6A/IT6lkIB7G0Iz6Fmg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ArPA/IUklwIB7G0I0kFyg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ArgA/IVGl6IB7G1I1GF6g");
	var mask_1_graphics_14 = new cjs.Graphics().p("ArtA/IVgmCIB7G1I1gGCg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ar3A+IV0mHIB7G1I10GIg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Ar/A+IWEmLIB7G1I2EGMg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AsEA+IWOmOIB7G1I2OGPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:7.2,y:50.7}).wait(1).to({graphics:mask_1_graphics_2,x:14.4,y:50.6}).wait(1).to({graphics:mask_1_graphics_3,x:21.6,y:50.5}).wait(1).to({graphics:mask_1_graphics_4,x:28.6,y:50.5}).wait(1).to({graphics:mask_1_graphics_5,x:35.1,y:50.4}).wait(1).to({graphics:mask_1_graphics_6,x:41,y:50.3}).wait(1).to({graphics:mask_1_graphics_7,x:46.2,y:50.2}).wait(1).to({graphics:mask_1_graphics_8,x:50.8,y:50.2}).wait(1).to({graphics:mask_1_graphics_9,x:54.6,y:50.1}).wait(1).to({graphics:mask_1_graphics_10,x:57.9,y:50.1}).wait(1).to({graphics:mask_1_graphics_11,x:60.7,y:50.1}).wait(1).to({graphics:mask_1_graphics_12,x:62.9,y:50.1}).wait(1).to({graphics:mask_1_graphics_13,x:64.8,y:50}).wait(1).to({graphics:mask_1_graphics_14,x:66.2,y:50}).wait(1).to({graphics:mask_1_graphics_15,x:67.3,y:50}).wait(1).to({graphics:mask_1_graphics_16,x:68.2,y:50}).wait(1).to({graphics:mask_1_graphics_17,x:68.7,y:50}).wait(12));

	// Layer_14
	this.instance_1 = new lib.Symbol2copy6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(28));

	// Layer_13 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AiDAwICMgoIB7G2IiMAog");
	var mask_2_graphics_1 = new cjs.Graphics().p("AjOAvIEjhRIB6G1IkjBSg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AkaAuIG6h7IB7G1Im6B8g");
	var mask_2_graphics_3 = new cjs.Graphics().p("AljAuIJNilIB6G1IpNClg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AmoAtILWjLIB7G1IrWDLg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AnmAsINSjuIB7G1ItSDvg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AodAsIPAkNIB7G1IvAENg");
	var mask_2_graphics_7 = new cjs.Graphics().p("ApMArIQfknIB6G0IwfEpg");
	var mask_2_graphics_8 = new cjs.Graphics().p("Ap1ArIRwk/IB7G1IxwE/g");
	var mask_2_graphics_9 = new cjs.Graphics().p("AqYAqIS2lRIB7G0Iy2FTg");
	var mask_2_graphics_10 = new cjs.Graphics().p("Aq0AqITvliIB6G1IzvFig");
	var mask_2_graphics_11 = new cjs.Graphics().p("ArMAqIUelvIB7G0I0eFwg");
	var mask_2_graphics_12 = new cjs.Graphics().p("ArgApIVGl5IB7G0I1GF7g");
	var mask_2_graphics_13 = new cjs.Graphics().p("ArvApIVkmCIB7G0I1kGEg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Ar7ApIV8mJIB7G1I18GKg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AsDApIWMmOIB7G1I2MGPg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AsJAqIWYmRIB7G0I2YGSg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-6.4,y:48.6}).wait(1).to({graphics:mask_2_graphics_1,x:1.7,y:48.5}).wait(1).to({graphics:mask_2_graphics_2,x:9.9,y:48.4}).wait(1).to({graphics:mask_2_graphics_3,x:17.8,y:48.3}).wait(1).to({graphics:mask_2_graphics_4,x:25.1,y:48.2}).wait(1).to({graphics:mask_2_graphics_5,x:31.8,y:48.2}).wait(1).to({graphics:mask_2_graphics_6,x:37.7,y:48.1}).wait(1).to({graphics:mask_2_graphics_7,x:42.8,y:48.1}).wait(1).to({graphics:mask_2_graphics_8,x:47.2,y:48}).wait(1).to({graphics:mask_2_graphics_9,x:50.9,y:48}).wait(1).to({graphics:mask_2_graphics_10,x:54,y:47.9}).wait(1).to({graphics:mask_2_graphics_11,x:56.5,y:47.9}).wait(1).to({graphics:mask_2_graphics_12,x:58.6,y:47.9}).wait(1).to({graphics:mask_2_graphics_13,x:60.3,y:47.9}).wait(1).to({graphics:mask_2_graphics_14,x:61.5,y:47.9}).wait(1).to({graphics:mask_2_graphics_15,x:62.4,y:47.9}).wait(1).to({graphics:mask_2_graphics_16,x:62.8,y:47.9}).wait(13));

	// Layer_12
	this.instance_2 = new lib.Symbol2copy5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29));

	// Layer_11 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_4 = new cjs.Graphics().p("AG9DSIAAh5IBsAAIAAB5g");
	var mask_3_graphics_5 = new cjs.Graphics().p("AGbDSIAAh6ICwABIAAB5g");
	var mask_3_graphics_6 = new cjs.Graphics().p("AF4DSIAAh6ID1ABIAAB5g");
	var mask_3_graphics_7 = new cjs.Graphics().p("AFXDSIAAh6IE3ABIAAB5g");
	var mask_3_graphics_8 = new cjs.Graphics().p("AE4DSIAAh6IF1ABIAAB5g");
	var mask_3_graphics_9 = new cjs.Graphics().p("AEcDSIAAh6IGtABIAAB5g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AEDDSIAAh6IHfABIAAB5g");
	var mask_3_graphics_11 = new cjs.Graphics().p("ADtDSIAAh6IILABIgBB5g");
	var mask_3_graphics_12 = new cjs.Graphics().p("ADbDSIAAh6IIvABIAAB5g");
	var mask_3_graphics_13 = new cjs.Graphics().p("ADLDSIAAh6IJPABIgBB5g");
	var mask_3_graphics_14 = new cjs.Graphics().p("AC+DSIAAh6IJpABIgBB5g");
	var mask_3_graphics_15 = new cjs.Graphics().p("ACzDSIAAh6IJ+ABIAAB5g");
	var mask_3_graphics_16 = new cjs.Graphics().p("ACqDSIAAh6IKQABIAAB5g");
	var mask_3_graphics_17 = new cjs.Graphics().p("ACjDSIABh6IKdABIAAB5g");
	var mask_3_graphics_18 = new cjs.Graphics().p("ACeDSIAAh6IKoABIAAB5g");
	var mask_3_graphics_19 = new cjs.Graphics().p("ACaDSIAAh6IKwABIAAB5g");
	var mask_3_graphics_20 = new cjs.Graphics().p("ACWDSIABh6IK0AAIAAB6g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_3_graphics_4,x:55.3,y:21}).wait(1).to({graphics:mask_3_graphics_5,x:58.7,y:21}).wait(1).to({graphics:mask_3_graphics_6,x:62.1,y:21}).wait(1).to({graphics:mask_3_graphics_7,x:65.4,y:21}).wait(1).to({graphics:mask_3_graphics_8,x:68.5,y:21}).wait(1).to({graphics:mask_3_graphics_9,x:71.3,y:21}).wait(1).to({graphics:mask_3_graphics_10,x:73.8,y:21}).wait(1).to({graphics:mask_3_graphics_11,x:76,y:21}).wait(1).to({graphics:mask_3_graphics_12,x:77.8,y:21}).wait(1).to({graphics:mask_3_graphics_13,x:79.4,y:21}).wait(1).to({graphics:mask_3_graphics_14,x:80.7,y:21}).wait(1).to({graphics:mask_3_graphics_15,x:81.7,y:21}).wait(1).to({graphics:mask_3_graphics_16,x:82.6,y:21}).wait(1).to({graphics:mask_3_graphics_17,x:83.3,y:21}).wait(1).to({graphics:mask_3_graphics_18,x:83.8,y:21}).wait(1).to({graphics:mask_3_graphics_19,x:84.2,y:21}).wait(1).to({graphics:mask_3_graphics_20,x:84.3,y:21}).wait(9));

	// Layer_10
	this.instance_3 = new lib.Symbol2copy4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(25));

	// Layer_9 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_3 = new cjs.Graphics().p("AG9CqIAAh5IBsAAIAAB5g");
	var mask_4_graphics_4 = new cjs.Graphics().p("AFrCqIAAh6IETABIAAB5g");
	var mask_4_graphics_5 = new cjs.Graphics().p("AEZCqIAAh6IG7ABIAAB5g");
	var mask_4_graphics_6 = new cjs.Graphics().p("ADJCqIAAh6IJeABIAAB5g");
	var mask_4_graphics_7 = new cjs.Graphics().p("AB/CqIAAh6IL1ABIAAB5g");
	var mask_4_graphics_8 = new cjs.Graphics().p("AA8CqIAAh6IN+ABIAAB5g");
	var mask_4_graphics_9 = new cjs.Graphics().p("AAACqIAAh6IP4ABIAAB5g");
	var mask_4_graphics_10 = new cjs.Graphics().p("AgzCqIABh6IRgABIAAB5g");
	var mask_4_graphics_11 = new cjs.Graphics().p("AhfCqIAAh6IS7ABIAAB5g");
	var mask_4_graphics_12 = new cjs.Graphics().p("AiECqIAAh6IUHABIAAB5g");
	var mask_4_graphics_13 = new cjs.Graphics().p("AikCqIAAh6IVIABIAAB5g");
	var mask_4_graphics_14 = new cjs.Graphics().p("Ai9CqIAAh6IV8ABIAAB5g");
	var mask_4_graphics_15 = new cjs.Graphics().p("AjSCqIAAh6IWnABIgBB5g");
	var mask_4_graphics_16 = new cjs.Graphics().p("AjjCqIAAh6IXJABIAAB5g");
	var mask_4_graphics_17 = new cjs.Graphics().p("AjwCqIAAh6IXjABIAAB5g");
	var mask_4_graphics_18 = new cjs.Graphics().p("Aj5CqIAAh6IX2ABIAAB5g");
	var mask_4_graphics_19 = new cjs.Graphics().p("AkTCpIAAh5IYDABIAAB5g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_4_graphics_3,x:55.3,y:17}).wait(1).to({graphics:mask_4_graphics_4,x:63.8,y:17}).wait(1).to({graphics:mask_4_graphics_5,x:72.4,y:17}).wait(1).to({graphics:mask_4_graphics_6,x:80.7,y:17}).wait(1).to({graphics:mask_4_graphics_7,x:88.4,y:17}).wait(1).to({graphics:mask_4_graphics_8,x:95.4,y:17}).wait(1).to({graphics:mask_4_graphics_9,x:101.6,y:17}).wait(1).to({graphics:mask_4_graphics_10,x:107,y:17}).wait(1).to({graphics:mask_4_graphics_11,x:111.6,y:17}).wait(1).to({graphics:mask_4_graphics_12,x:115.5,y:17}).wait(1).to({graphics:mask_4_graphics_13,x:118.8,y:17}).wait(1).to({graphics:mask_4_graphics_14,x:121.5,y:17}).wait(1).to({graphics:mask_4_graphics_15,x:123.7,y:17}).wait(1).to({graphics:mask_4_graphics_16,x:125.4,y:17}).wait(1).to({graphics:mask_4_graphics_17,x:126.7,y:17}).wait(1).to({graphics:mask_4_graphics_18,x:127.7,y:17}).wait(1).to({graphics:mask_4_graphics_19,x:126.4,y:17}).wait(10));

	// Layer_8
	this.instance_4 = new lib.Symbol2copy3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(26));

	// Layer_7 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_2 = new cjs.Graphics().p("AG8CDIAAh6IBsAAIAAB6g");
	var mask_5_graphics_3 = new cjs.Graphics().p("AF4AJIDzAAIAAB5IjzABg");
	var mask_5_graphics_4 = new cjs.Graphics().p("AE0AJIF7gBIAAB5Il7ACg");
	var mask_5_graphics_5 = new cjs.Graphics().p("ADyAJIH/gDIgBB5In+AEg");
	var mask_5_graphics_6 = new cjs.Graphics().p("AC0AJIJ6gFIAAB5Ip6AGg");
	var mask_5_graphics_7 = new cjs.Graphics().p("AB9AJILogIIAAB6IrpAIg");
	var mask_5_graphics_8 = new cjs.Graphics().p("ABLAJINLgJIAAB4ItLALg");
	var mask_5_graphics_9 = new cjs.Graphics().p("AAgAJIOhgMIAAB5IuhANg");
	var mask_5_graphics_10 = new cjs.Graphics().p("AgDAJIPpgOIgBB4IvoAQg");
	var mask_5_graphics_11 = new cjs.Graphics().p("AgiAJIQmgQIAAB4IwmASg");
	var mask_5_graphics_12 = new cjs.Graphics().p("Ag8AJIRagSIAAB4IxaAUg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AhSAJISFgUIAAB5IyFAVg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AhjAJISogVIAAB4IyoAXg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AhxAJITDgWIAAB4IzDAYg");
	var mask_5_graphics_16 = new cjs.Graphics().p("Ah7AJITYgXIAAB4IzYAZg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AiDAJITngYIAAB5IznAZg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AiLAJITxgYIAAB4IzxAZg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_5_graphics_2,x:55.2,y:13.1}).wait(1).to({graphics:mask_5_graphics_3,x:61.9,y:13.1}).wait(1).to({graphics:mask_5_graphics_4,x:68.7,y:13.1}).wait(1).to({graphics:mask_5_graphics_5,x:75.3,y:13.1}).wait(1).to({graphics:mask_5_graphics_6,x:81.4,y:13.1}).wait(1).to({graphics:mask_5_graphics_7,x:86.9,y:13.1}).wait(1).to({graphics:mask_5_graphics_8,x:91.8,y:13.1}).wait(1).to({graphics:mask_5_graphics_9,x:96.1,y:13.1}).wait(1).to({graphics:mask_5_graphics_10,x:99.8,y:13.1}).wait(1).to({graphics:mask_5_graphics_11,x:102.8,y:13.1}).wait(1).to({graphics:mask_5_graphics_12,x:105.4,y:13.1}).wait(1).to({graphics:mask_5_graphics_13,x:107.5,y:13.1}).wait(1).to({graphics:mask_5_graphics_14,x:109.3,y:13.1}).wait(1).to({graphics:mask_5_graphics_15,x:110.6,y:13.1}).wait(1).to({graphics:mask_5_graphics_16,x:111.7,y:13.1}).wait(1).to({graphics:mask_5_graphics_17,x:112.5,y:13.1}).wait(1).to({graphics:mask_5_graphics_18,x:112.6,y:13}).wait(11));

	// Layer_6
	this.instance_5 = new lib.Symbol2copy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(27));

	// Layer_5 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_1 = new cjs.Graphics().p("AHLBVIAAh5IBsAAIAAB5g");
	var mask_6_graphics_2 = new cjs.Graphics().p("AGWBVIAAh5IDXAAIAAB5g");
	var mask_6_graphics_3 = new cjs.Graphics().p("AFhBVIAAh5IFCAAIAAB5g");
	var mask_6_graphics_4 = new cjs.Graphics().p("AEuBVIAAh5IGqAAIAAB5g");
	var mask_6_graphics_5 = new cjs.Graphics().p("AD+BVIAAh5IILAAIAAB5g");
	var mask_6_graphics_6 = new cjs.Graphics().p("ADTBVIAAh5IJiAAIAAB5g");
	var mask_6_graphics_7 = new cjs.Graphics().p("ACtBVIAAh5IKwAAIAAB5g");
	var mask_6_graphics_8 = new cjs.Graphics().p("ACLBVIAAh5IL0AAIAAB5g");
	var mask_6_graphics_9 = new cjs.Graphics().p("ABvBVIAAh5IMtAAIAAB5g");
	var mask_6_graphics_10 = new cjs.Graphics().p("ABXBUIAAh4INeAAIAAB5g");
	var mask_6_graphics_11 = new cjs.Graphics().p("ABCBUIABh4IOHAAIAAB5g");
	var mask_6_graphics_12 = new cjs.Graphics().p("AAyBUIAAh4IOpABIAAB4g");
	var mask_6_graphics_13 = new cjs.Graphics().p("AAkBUIAAh4IPFABIAAB4g");
	var mask_6_graphics_14 = new cjs.Graphics().p("AAaBUIAAh4IPaABIgBB4g");
	var mask_6_graphics_15 = new cjs.Graphics().p("AASBUIAAh4IPqABIAAB4g");
	var mask_6_graphics_16 = new cjs.Graphics().p("AAMBUIAAh4IP2ABIAAB4g");
	var mask_6_graphics_17 = new cjs.Graphics().p("AAABUIAAh4IP+AAIgBB5g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_6_graphics_1,x:56.7,y:8.5}).wait(1).to({graphics:mask_6_graphics_2,x:62.1,y:8.5}).wait(1).to({graphics:mask_6_graphics_3,x:67.5,y:8.5}).wait(1).to({graphics:mask_6_graphics_4,x:72.8,y:8.5}).wait(1).to({graphics:mask_6_graphics_5,x:77.7,y:8.5}).wait(1).to({graphics:mask_6_graphics_6,x:82.1,y:8.5}).wait(1).to({graphics:mask_6_graphics_7,x:86.1,y:8.5}).wait(1).to({graphics:mask_6_graphics_8,x:89.5,y:8.5}).wait(1).to({graphics:mask_6_graphics_9,x:92.4,y:8.5}).wait(1).to({graphics:mask_6_graphics_10,x:94.9,y:8.5}).wait(1).to({graphics:mask_6_graphics_11,x:97,y:8.5}).wait(1).to({graphics:mask_6_graphics_12,x:98.7,y:8.5}).wait(1).to({graphics:mask_6_graphics_13,x:100.1,y:8.5}).wait(1).to({graphics:mask_6_graphics_14,x:101.2,y:8.5}).wait(1).to({graphics:mask_6_graphics_15,x:102,y:8.5}).wait(1).to({graphics:mask_6_graphics_16,x:102.6,y:8.5}).wait(1).to({graphics:mask_6_graphics_17,x:102.2,y:8.5}).wait(12));

	// Layer_4
	this.instance_6 = new lib.Symbol2copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(28));

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("Ah/gEIBjgrIDJHWIhjArg");
	var mask_7_graphics_1 = new cjs.Graphics().p("AjOgFIELhzIDKHWIkLBzg");
	var mask_7_graphics_2 = new cjs.Graphics().p("AkegFIG1i9IDKHWIm1C8g");
	var mask_7_graphics_3 = new cjs.Graphics().p("AlugGIJfkFIDKHWIpfEFg");
	var mask_7_graphics_4 = new cjs.Graphics().p("Am6gHIMDlLIDKHWIsDFLg");
	var mask_7_graphics_5 = new cjs.Graphics().p("AoEgHIOgmPIDKHWIugGOg");
	var mask_7_graphics_6 = new cjs.Graphics().p("ApJgEIQznNIDKHWIwzHNg");
	var mask_7_graphics_7 = new cjs.Graphics().p("AqIAZIS7oHIDKHWIy7IHg");
	var mask_7_graphics_8 = new cjs.Graphics().p("ArCAzIU3o8IDKHXI03I8g");
	var mask_7_graphics_9 = new cjs.Graphics().p("Ar3BLIWnpsIDKHXI2nJsg");
	var mask_7_graphics_10 = new cjs.Graphics().p("AsmBhIYMqYIDKHXI4MKYg");
	var mask_7_graphics_11 = new cjs.Graphics().p("AtQB0IZmq+IDJHXI5lK+g");
	var mask_7_graphics_12 = new cjs.Graphics().p("At1CFIa1rgIDKHXI61Lgg");
	var mask_7_graphics_13 = new cjs.Graphics().p("AuWCUIb7r+IDKHXI77L+g");
	var mask_7_graphics_14 = new cjs.Graphics().p("AuyChIc3sYIDKHXI83MYg");
	var mask_7_graphics_15 = new cjs.Graphics().p("AvLCsIdssuIDKHXI9sMug");
	var mask_7_graphics_16 = new cjs.Graphics().p("AvgC2IeatCIDKHXI+aNCg");
	var mask_7_graphics_17 = new cjs.Graphics().p("AvyC+IfAtSIDKHXI/ANSg");
	var mask_7_graphics_18 = new cjs.Graphics().p("AwCDFIfhtgIDKHXI/hNgg");
	var mask_7_graphics_19 = new cjs.Graphics().p("AwODLIf8tsIDKHXI/8Nsg");
	var mask_7_graphics_20 = new cjs.Graphics().p("AwYDQMAgRgN2IDKHXMggRAN2g");
	var mask_7_graphics_21 = new cjs.Graphics().p("AwgDTMAgigN8IDKHXMggiAN8g");
	var mask_7_graphics_22 = new cjs.Graphics().p("AwlDWMAgtgOCIDKHXMggtAOCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:17.3,y:46.6}).wait(1).to({graphics:mask_7_graphics_1,x:26.3,y:46.5}).wait(1).to({graphics:mask_7_graphics_2,x:35.3,y:46.4}).wait(1).to({graphics:mask_7_graphics_3,x:44.3,y:46.4}).wait(1).to({graphics:mask_7_graphics_4,x:53.1,y:46.3}).wait(1).to({graphics:mask_7_graphics_5,x:61.4,y:46.2}).wait(1).to({graphics:mask_7_graphics_6,x:69.2,y:45.8}).wait(1).to({graphics:mask_7_graphics_7,x:76.5,y:42.7}).wait(1).to({graphics:mask_7_graphics_8,x:83.1,y:40}).wait(1).to({graphics:mask_7_graphics_9,x:89,y:37.5}).wait(1).to({graphics:mask_7_graphics_10,x:94.4,y:35.2}).wait(1).to({graphics:mask_7_graphics_11,x:99.1,y:33.3}).wait(1).to({graphics:mask_7_graphics_12,x:103.4,y:31.5}).wait(1).to({graphics:mask_7_graphics_13,x:107.1,y:29.9}).wait(1).to({graphics:mask_7_graphics_14,x:110.3,y:28.6}).wait(1).to({graphics:mask_7_graphics_15,x:113.1,y:27.4}).wait(1).to({graphics:mask_7_graphics_16,x:115.6,y:26.4}).wait(1).to({graphics:mask_7_graphics_17,x:117.6,y:25.5}).wait(1).to({graphics:mask_7_graphics_18,x:119.3,y:24.8}).wait(1).to({graphics:mask_7_graphics_19,x:120.8,y:24.2}).wait(1).to({graphics:mask_7_graphics_20,x:121.9,y:23.8}).wait(1).to({graphics:mask_7_graphics_21,x:122.8,y:23.4}).wait(1).to({graphics:mask_7_graphics_22,x:123.4,y:23.2}).wait(7));

	// Layer_1
	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(126.5,37.5,1,1,0,0,0,126.5,37.5);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,41.8,35.3,33.2);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
		this.dispatchEvent('playEnd');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_3
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(218.5,67.4,1,1,0,0,0,137.5,28.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).wait(55));

	// Layer_9
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(354.5,141,1,1,0,0,0,55.5,34);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(71));

	// Layer_8
	this.instance_2 = new lib.Sapling010();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210,88.9,1,1,0,0,0,0.1,18.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).wait(89));

	// Layer_7
	this.instance_3 = new lib.money_all();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62,105,1,1,0,0,0,23.5,41.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(106));

	// lin
	this.instance_4 = new lib.lin_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174.5,167.5,1,1,0,0,0,126.5,37.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_2
	this.anibox = new lib.Symbol18();
	this.anibox.name = "anibox";
	this.anibox.parent = this;
	this.anibox.setTransform(26,13,1,1,0,0,0,26,13);

	this.timeline.addTween(cjs.Tween.get(this.anibox).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,125,970,250);
// library properties:
lib.properties = {
	id: '3BB307B172DB49828ACE1FB554EA61E7',
	width: 450,
	height: 250,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Arrow.png?1536229957838", id:"Arrow"},
		{src:"images/glass.png?1536229957838", id:"glass"},
		{src:"images/lin.png?1536229957838", id:"lin"},
		{src:"images/plate.png?1536229957838", id:"plate"}
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
an.compositions['3BB307B172DB49828ACE1FB554EA61E7'] = {
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


AdobeAn[1] = an;
})(createjs,{});
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.l2_lin = function() {
	this.initialize(img.l2_lin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,561,114);


(lib.l2_lin2 = function() {
	this.initialize(img.l2_lin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,120);


(lib.soil = function() {
	this.initialize(img.soil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,220);// helper functions:

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


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#73E7C1").ss(1.5,1,1).p("AhqiCIDVEFQgxgCgsghQgsghgng6Qgng6AChNg");
	this.shape.setTransform(10.7,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1,-1,23.4,28.3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#73E7C1").ss(1.5,1,1).p("ABsiEQAHAAAEAJQADAJgDAIQgEAIgKAMQgLANAAAZIACAZQAAAFgEAFQgNAOgBACQgCADgQAHQgRAHgKAGQgLAGgFAPQAAASgBAIQgCALgLALQgNAMgZAFQgfAGg2APg");
	this.shape.setTransform(12.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1,-1,26.1,28.6), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#73E7C1").ss(1.5,1,1).p("AiDjmQgaBEgEATQgBAFgDAXQgEAZAAAFQAAAKAQAWQAPAUAYAXQAEAEAbAVQAGAFAAARQAAALgFASQgCAJgBAFIgDAGIgBABQAAAlAdANQAwAWAHAHQADADATAeQAOAVANADQAcAIAfAAQAnAAAcgPAiBjkIEoG3");
	this.shape.setTransform(17,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,35.9,48.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#73E7C1").ss(1.5,1,1).p("AByAzQA7hzgZiDIj/FEICYALQhaBRhrgkIgCABAhrCBIgtA4AAjgtIBsAEAgkAuICWAFQgKAUgNAUQgWAdgYAU");
	this.shape.setTransform(15.5,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-1,33.1,41.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#73E7C1").ss(2,1,1).p("AAAkhIAAJD");
	this.shape.setTransform(0,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,2,60), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.l2_lin2();
	this.instance.parent = this;
	this.instance.setTransform(17,2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(17,2,186,60), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.l2_lin();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,280.5,57), null);


(lib.ruand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00713D").s().p("AgNAPQgHgHAAgIQAAgIAHgFQAFgHAIAAQAIAAAHAHQAFAFABAIQgBAIgFAHQgHAFgIABQgIgBgFgFg");
	this.shape.setTransform(2.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ruand2, new cjs.Rectangle(0,0,4.1,4.1), null);


(lib.ruand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008BB1").s().p("AAGU0QiXgEh9gQQjngZjGh8QiyhxiCimIhch3QhfiJg+ieQhDitgQi4QgGg+gDhCQgWnfFFlwQAignAngmQGPmJI0AAQIyAAGOGJQGPGIAAIpQAAIqmPGIQmBF9oOAAIgigBg");
	this.shape.setTransform(135.1,133.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ruand, new cjs.Rectangle(0,0,270.1,266.6), null);


(lib.round_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("AhKBNQgeggAAgtQAAgtAeggQAggfAqgBQAsABAfAfQAeAgAAAtQAAAtgeAgQgfAhgsAAQgqAAggghg");
	this.shape.setTransform(9,9,0.853,0.822);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_b, new cjs.Rectangle(0,0,18,18), null);


(lib.round_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EF3BD").s().p("AhKBNQgeggAAgtQAAgtAeggQAggfAqgBQAsABAfAfQAeAgAAAtQAAAtgeAgQgfAhgsAAQgqAAggghg");
	this.shape.setTransform(10,10,0.948,0.913);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_a, new cjs.Rectangle(0,0,20,20), null);


(lib.money_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EF3BD").s().p("Ah8EEIAAoHID5AAIAAIHg");
	this.shape.setTransform(12.5,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_b, new cjs.Rectangle(0,0,25,52), null);


(lib.money_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00733B").s().p("Ah3EEIAAoHIDvAAIAAIHg");
	this.shape.setTransform(12,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_a, new cjs.Rectangle(0,0,24,52), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjRAbIAAg1IGjAAIAAA1g");
	mask.setTransform(18.4,41.7);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(101.5,37,1,1,0,0,0,101.5,37);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy2, new cjs.Rectangle(17,39,22.4,5.4), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai1AbIAAg1IFrAAIAAA1g");
	mask.setTransform(21.8,32.3);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(101.5,37,1,1,0,0,0,101.5,37);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(17,29.6,23,5.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AOKFGIgKAAIgKAAQ1EgBgZgGIg6gMIgcgHIgUgGQhFgYgjgsQgZghgGgrIAIiFQAHiZgog6Qg0g8hegSIgVgDQAQgzADACQAqAPAiAQIAJAEQCGA+AHA8QAKBOgBAqQgBC5ABAKQACARAGAPQAMAcAbASQAiAWA7AGQCRANAwAAQTjgCABAPIABAIIABAMIAAAOQgBAMgEAAIgKAAg");
	mask.setTransform(112.4,30.4);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(101.5,37,1,1,0,0,0,101.5,37);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(20.3,2,182.8,60), null);


(lib.money_anicopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(78));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");
	var mask_graphics_51 = new cjs.Graphics().p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.7,y:28.6}).wait(51).to({graphics:mask_graphics_51,x:1.7,y:28.6}).wait(78));

	// round_a
	this.instance = new lib.round_a();
	this.instance.parent = this;
	this.instance.setTransform(-7,50.3,0.89,0.475,0,39.9,0,9.8,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regY:10.3,scaleY:0.68,skewX:25.5,x:-1.3,y:48.3,alpha:1},3).to({regX:10,regY:10.1,scaleY:0.89,skewX:0,x:1.7,y:38.3},4).to({y:21.8},5).to({scaleY:0.6,skewX:24.2,x:4.5,y:10.6},3).to({scaleY:0.36,skewX:46.5,x:11.3,y:6.8},2).wait(105));

	// money_a copy 3
	this.instance_1 = new lib.money_a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.8,47.3,1.626,0.73,0,0,0,1.1,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:-0.1,x:-15.7,y:19.2,alpha:1},10).to({regY:-0.2,x:-15.8,y:-28.7},17).to({_off:true},1).wait(97));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:10.5,y:50.2}).wait(51).to({graphics:mask_1_graphics_51,x:10.5,y:50.2}).wait(78));

	// Layer_12
	this.instance_2 = new lib.round_b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.5,-10,1,1,0,0,0,9,9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(1).to({y:-6.5},0).wait(1).to({y:-2.9},0).wait(1).to({y:0.6},0).wait(1).to({y:4.2},0).wait(1).to({y:7.7},0).wait(1).to({y:11.2},0).wait(1).to({y:14.7},0).wait(1).to({y:18.2},0).wait(1).to({y:21.6},0).wait(1).to({y:25},0).wait(1).to({y:28.4},0).wait(1).to({y:31.6},0).wait(1).to({y:34.8},0).wait(1).to({y:37.9},0).to({y:89.3},20,cjs.Ease.sineOut).wait(78));

	// money_b
	this.instance_3 = new lib.money_b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.5,-16.7,1,1,0,0,0,12.5,26);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(1).to({y:-13.2},0).wait(1).to({y:-9.7},0).wait(1).to({y:-6.1},0).wait(1).to({y:-2.5},0).wait(1).to({y:1},0).wait(1).to({y:4.6},0).wait(1).to({y:8.1},0).wait(1).to({y:11.6},0).wait(1).to({y:15.1},0).wait(1).to({y:18.5},0).wait(1).to({y:21.8},0).wait(1).to({y:25.1},0).wait(1).to({y:28.2},0).wait(1).to({y:31.4},0).to({y:82.9},20,cjs.Ease.sineOut).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.money_anicopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(115));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");
	var mask_graphics_33 = new cjs.Graphics().p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.7,y:28.6}).wait(33).to({graphics:mask_graphics_33,x:1.7,y:28.6}).wait(115));

	// round_a
	this.instance = new lib.round_a();
	this.instance.parent = this;
	this.instance.setTransform(-7,50.3,0.89,0.475,0,39.9,0,9.8,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regY:10.3,scaleY:0.68,skewX:25.5,x:-1.3,y:48.3,alpha:1},3).to({regX:10,regY:10.1,scaleY:0.89,skewX:0,x:1.7,y:38.3},4).to({y:21.8},5).to({scaleY:0.6,skewX:24.2,x:4.5,y:10.6},3).to({scaleY:0.36,skewX:46.5,x:11.3,y:6.8},2).wait(124));

	// money_a copy 3
	this.instance_1 = new lib.money_a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.8,47.3,1.626,0.73,0,0,0,1.1,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:-0.1,x:-15.7,y:19.2,alpha:1},10).to({y:-20.2},19,cjs.Ease.sineOut).wait(115));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:10.5,y:50.2}).wait(33).to({graphics:mask_1_graphics_33,x:10.5,y:50.2}).wait(115));

	// Layer_12
	this.instance_2 = new lib.round_b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.5,-10,1,1,0,0,0,9,9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({y:27.7},16,cjs.Ease.sineOut).wait(115));

	// money_b
	this.instance_3 = new lib.money_b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.5,-16.7,1,1,0,0,0,12.5,26);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:21.1},16,cjs.Ease.sineOut).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.money_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(1));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AixC9IADgBQBCgDgDhWIAAjEQAAhYBDgCIDeAAQhFABAEBZIAADEQAABYhEACg");
	mask.setTransform(1.7,28.6);

	// round_a
	this.instance = new lib.round_a();
	this.instance.parent = this;
	this.instance.setTransform(-7,50.3,0.89,0.475,0,39.9,0,9.8,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regY:10.3,scaleY:0.68,skewX:25.5,x:-1.3,y:48.3,alpha:1},3).to({regX:10,regY:10.1,scaleY:0.89,skewX:0,x:1.7,y:38.3},4).to({y:21.8},5).to({scaleY:0.6,skewX:24.2,x:4.5,y:10.6},3).to({scaleY:0.36,skewX:46.5,x:11.3,y:6.8},2).wait(34));

	// money_a copy 3
	this.instance_1 = new lib.money_a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.8,47.3,1.626,0.73,0,0,0,1.1,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:-0.1,x:-15.7,y:19.2,alpha:1},10).to({regY:-0.2,x:-15.8,y:-28.7},17).to({_off:true},1).wait(26));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhoGUIAArIQgChZgmgGIDMAAQBSgHADBcIAALSg");
	mask_1.setTransform(10.5,50.2);

	// Layer_12
	this.instance_2 = new lib.round_b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.5,-10,1,1,0,0,0,9,9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({y:123.5},39).to({_off:true},1).wait(1));

	// money_b
	this.instance_3 = new lib.money_b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.5,-16.7,1,1,0,0,0,12.5,26);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:117.3},39).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.money_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(178));

	// Layer_1 copy 3
	this.instance = new lib.money_ani("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41.6,-41.3,1,1,0,0,0,19,-74.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146).to({_off:false},0).to({_off:true},57).wait(41));

	// Layer_1 copy 7
	this.instance_1 = new lib.money_anicopy("synched",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.6,-41.3,1,1,0,0,0,19,-74.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({_off:true},57).wait(151));

	// Layer_1 copy 6
	this.instance_2 = new lib.money_anicopy2("synched",4);
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.6,-41.3,1,1,0,0,0,19,-74.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({_off:true},57).wait(169));

	// Layer_1
	this.instance_3 = new lib.money_ani("synched",4);
	this.instance_3.parent = this;
	this.instance_3.setTransform(41.6,-41.3,1,1,0,0,0,19,-74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},57).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.lin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjnG3IEKulIDFA4IkKOlg");
	var mask_graphics_1 = new cjs.Graphics().p("Ak5GfIEMulIFnBoIkMOlg");
	var mask_graphics_2 = new cjs.Graphics().p("AmMGIIEMulIINCWIkMOlg");
	var mask_graphics_3 = new cjs.Graphics().p("AneFwIEMulIKxDGIkMOlg");
	var mask_graphics_4 = new cjs.Graphics().p("AouFZIEMulINRD0IkMOlg");
	var mask_graphics_5 = new cjs.Graphics().p("Ap7FDIEMulIPrEgIkMOlg");
	var mask_graphics_6 = new cjs.Graphics().p("ArDEvIEMumIR7FJIkMOmg");
	var mask_graphics_7 = new cjs.Graphics().p("AsGEbIEMulIUBFwIkLOlg");
	var mask_graphics_8 = new cjs.Graphics().p("AtEEJIEMulIV9GUIkMOlg");
	var mask_graphics_9 = new cjs.Graphics().p("At9D5IEMulIXvG0IkMOlg");
	var mask_graphics_10 = new cjs.Graphics().p("AuwDrIEMumIZVHRIkMOmg");
	var mask_graphics_11 = new cjs.Graphics().p("AvdDeIELumIaxHrIkMOmg");
	var mask_graphics_12 = new cjs.Graphics().p("AwGDSIELulIcCICIkLOlg");
	var mask_graphics_13 = new cjs.Graphics().p("AwrDHIEMulIdLIYIkMOlg");
	var mask_graphics_14 = new cjs.Graphics().p("AxLC+IEMulIeLIqIkMOlg");
	var mask_graphics_15 = new cjs.Graphics().p("AxnC2IEMulIfDI6IkMOlg");
	var mask_graphics_16 = new cjs.Graphics().p("Ax/CvIEMulIfzJIIkMOlg");
	var mask_graphics_17 = new cjs.Graphics().p("AyUCpIEMulMAgdAJUIkMOlg");
	var mask_graphics_18 = new cjs.Graphics().p("AymCkIEMulMAhBAJeIkMOlg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay1CgIEMumMAhfAJnIkMOmg");
	var mask_graphics_20 = new cjs.Graphics().p("AzCCcIEMulMAh5AJuIkMOlg");
	var mask_graphics_21 = new cjs.Graphics().p("AzMCZIEMulMAiNAJ0IkMOlg");
	var mask_graphics_22 = new cjs.Graphics().p("AzUCXIEMulMAidAJ4IkMOlg");
	var mask_graphics_23 = new cjs.Graphics().p("AzZCVIELulMAioAJ8IkLOlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-3,y:9.7}).wait(1).to({graphics:mask_graphics_1,x:5.3,y:12.1}).wait(1).to({graphics:mask_graphics_2,x:13.7,y:14.5}).wait(1).to({graphics:mask_graphics_3,x:22,y:16.9}).wait(1).to({graphics:mask_graphics_4,x:30.1,y:19.2}).wait(1).to({graphics:mask_graphics_5,x:37.9,y:21.4}).wait(1).to({graphics:mask_graphics_6,x:45.2,y:23.5}).wait(1).to({graphics:mask_graphics_7,x:52,y:25.5}).wait(1).to({graphics:mask_graphics_8,x:58.3,y:27.3}).wait(1).to({graphics:mask_graphics_9,x:64,y:28.9}).wait(1).to({graphics:mask_graphics_10,x:69.2,y:30.4}).wait(1).to({graphics:mask_graphics_11,x:73.9,y:31.7}).wait(1).to({graphics:mask_graphics_12,x:78,y:32.9}).wait(1).to({graphics:mask_graphics_13,x:81.7,y:34}).wait(1).to({graphics:mask_graphics_14,x:84.9,y:34.9}).wait(1).to({graphics:mask_graphics_15,x:87.8,y:35.7}).wait(1).to({graphics:mask_graphics_16,x:90.2,y:36.4}).wait(1).to({graphics:mask_graphics_17,x:92.4,y:37}).wait(1).to({graphics:mask_graphics_18,x:94.2,y:37.6}).wait(1).to({graphics:mask_graphics_19,x:95.7,y:38}).wait(1).to({graphics:mask_graphics_20,x:97,y:38.4}).wait(1).to({graphics:mask_graphics_21,x:98,y:38.7}).wait(1).to({graphics:mask_graphics_22,x:98.8,y:38.9}).wait(1).to({graphics:mask_graphics_23,x:100.5,y:39.4}).wait(1));

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(101.5,37,1,1,0,0,0,101.5,37);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgRC1IAAhjIAjAAIAABjg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AggC1IAAhjIBBAAIAABjg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AguC1IAAhjIBeAAIAABjg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Ag9C1IAAhjIB8AAIAABjg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AhLC1IAAhjICYAAIAABjg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhYC1IAAhjICzAAIAABjg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhlC1IAAhjIDNAAIAABjg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhxC1IAAhjIDlAAIAABjg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ah8C1IAAhjID7AAIAABjg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AiGC1IAAhjIEPAAIAABjg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AiOC1IAAhjIEgAAIAABjg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AiXC1IAAhjIEyAAIAABjg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AieC1IAAhjIFAAAIAABjg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AikC1IAAhjIFMAAIAABjg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AiqC1IAAhjIFYAAIAABjg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AivC1IAAhjIFiAAIAABjg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AizC1IAAhjIFrAAIAABjg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Ai3C1IAAhjIFyAAIAABjg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ai6C1IAAhjIF5AAIAABjg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Ai8C1IAAhjIF9AAIAABjg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Ai/C1IAAhjIGDAAIAABjg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjAC1IAAhjIGFAAIAABjg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjCC1IAAhjIGJAAIAABjg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjCC1IAAhjIGKAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:1.8,y:18.1}).wait(1).to({graphics:mask_1_graphics_1,x:3.3,y:18.1}).wait(1).to({graphics:mask_1_graphics_2,x:4.8,y:18.1}).wait(1).to({graphics:mask_1_graphics_3,x:6.3,y:18.1}).wait(1).to({graphics:mask_1_graphics_4,x:7.7,y:18.1}).wait(1).to({graphics:mask_1_graphics_5,x:9.1,y:18.1}).wait(1).to({graphics:mask_1_graphics_6,x:10.4,y:18.1}).wait(1).to({graphics:mask_1_graphics_7,x:11.6,y:18.1}).wait(1).to({graphics:mask_1_graphics_8,x:12.7,y:18.1}).wait(1).to({graphics:mask_1_graphics_9,x:13.7,y:18.1}).wait(1).to({graphics:mask_1_graphics_10,x:14.6,y:18.1}).wait(1).to({graphics:mask_1_graphics_11,x:15.5,y:18.1}).wait(1).to({graphics:mask_1_graphics_12,x:16.2,y:18.1}).wait(1).to({graphics:mask_1_graphics_13,x:16.8,y:18.1}).wait(1).to({graphics:mask_1_graphics_14,x:17.4,y:18.1}).wait(1).to({graphics:mask_1_graphics_15,x:17.9,y:18.1}).wait(1).to({graphics:mask_1_graphics_16,x:18.4,y:18.1}).wait(1).to({graphics:mask_1_graphics_17,x:18.7,y:18.1}).wait(1).to({graphics:mask_1_graphics_18,x:19.1,y:18.1}).wait(1).to({graphics:mask_1_graphics_19,x:19.3,y:18.1}).wait(1).to({graphics:mask_1_graphics_20,x:19.6,y:18.1}).wait(1).to({graphics:mask_1_graphics_21,x:19.7,y:18.1}).wait(1).to({graphics:mask_1_graphics_22,x:19.9,y:18.1}).wait(1).to({graphics:mask_1_graphics_23,x:20,y:18.1}).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.5,37,1,1,0,0,0,101.5,37);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// Layer_6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AgXDlIAAhjIAkAAIAABjg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AghDlIAAhjIBDAAIAABjg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AgyDlIAAhjIBlAAIAABjg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AhCDlIAAhjICFAAIAABjg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AhSDlIAAhjIClAAIAABjg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AhhDlIAAhjIDDAAIAABjg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AhwDlIAAhjIDhAAIAABjg");
	var mask_2_graphics_7 = new cjs.Graphics().p("Ah9DlIAAhjID7AAIAABjg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AiJDlIAAhjIETAAIAABjg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AiUDlIAAhjIEpAAIAABjg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AifDlIAAhjIE/AAIAABjg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AioDlIAAhjIFRAAIAABjg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AiwDlIAAhjIFhAAIAABjg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Ai3DlIAAhjIFvAAIAABjg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Ai9DlIAAhjIF7AAIAABjg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AjDDlIAAhjIGHAAIAABjg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AjIDlIAAhjIGRAAIAABjg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AjMDlIAAhjIGZAAIAABjg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AjPDlIAAhjIGfAAIAABjg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AjSDlIAAhjIGlAAIAABjg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AjVDlIAAhjIGrAAIAABjg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AjXDlIAAhjIGvAAIAABjg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AjYDlIAAhjIGxAAIAABjg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AjaDlIAAhjIG1AAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-2.4,y:22.9}).wait(1).to({graphics:mask_2_graphics_1,x:-1.3,y:22.9}).wait(1).to({graphics:mask_2_graphics_2,x:0.4,y:22.9}).wait(1).to({graphics:mask_2_graphics_3,x:2,y:22.9}).wait(1).to({graphics:mask_2_graphics_4,x:3.7,y:22.9}).wait(1).to({graphics:mask_2_graphics_5,x:5.2,y:22.9}).wait(1).to({graphics:mask_2_graphics_6,x:6.7,y:22.9}).wait(1).to({graphics:mask_2_graphics_7,x:8.1,y:22.9}).wait(1).to({graphics:mask_2_graphics_8,x:9.3,y:22.9}).wait(1).to({graphics:mask_2_graphics_9,x:10.5,y:22.9}).wait(1).to({graphics:mask_2_graphics_10,x:11.5,y:22.9}).wait(1).to({graphics:mask_2_graphics_11,x:12.4,y:22.9}).wait(1).to({graphics:mask_2_graphics_12,x:13.3,y:22.9}).wait(1).to({graphics:mask_2_graphics_13,x:14,y:22.9}).wait(1).to({graphics:mask_2_graphics_14,x:14.7,y:22.9}).wait(1).to({graphics:mask_2_graphics_15,x:15.2,y:22.9}).wait(1).to({graphics:mask_2_graphics_16,x:15.7,y:22.9}).wait(1).to({graphics:mask_2_graphics_17,x:16.1,y:22.9}).wait(1).to({graphics:mask_2_graphics_18,x:16.5,y:22.9}).wait(1).to({graphics:mask_2_graphics_19,x:16.8,y:22.9}).wait(1).to({graphics:mask_2_graphics_20,x:17.1,y:22.9}).wait(1).to({graphics:mask_2_graphics_21,x:17.3,y:22.9}).wait(1).to({graphics:mask_2_graphics_22,x:17.4,y:22.9}).wait(1).to({graphics:mask_2_graphics_23,x:17.7,y:22.9}).wait(1));

	// Layer_5
	this.instance_2 = new lib.Symbol3copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(101.5,37,1,1,0,0,0,101.5,37);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-2.1,22.9,61.4);


(lib.lin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ALQD7IAAiKIBLAAIAACKg");
	var mask_graphics_1 = new cjs.Graphics().p("ALGD7IAAiKIBeAAIAACKg");
	var mask_graphics_2 = new cjs.Graphics().p("AK9D7IAAiKIBxAAIAACKg");
	var mask_graphics_3 = new cjs.Graphics().p("AK0D7IAAiKICDAAIAACKg");
	var mask_graphics_4 = new cjs.Graphics().p("AKqD7IAAiKICWAAIAACKg");
	var mask_graphics_5 = new cjs.Graphics().p("AKhD7IAAiKICoAAIAACKg");
	var mask_graphics_6 = new cjs.Graphics().p("AKZD7IAAiKIC4AAIAACKg");
	var mask_graphics_7 = new cjs.Graphics().p("AKRD7IAAiKIDIAAIAACKg");
	var mask_graphics_8 = new cjs.Graphics().p("AKKD7IAAiKIDXAAIAACKg");
	var mask_graphics_9 = new cjs.Graphics().p("AKDD7IAAiKIDkAAIAACKg");
	var mask_graphics_10 = new cjs.Graphics().p("AJ9D7IAAiKIDwAAIAACKg");
	var mask_graphics_11 = new cjs.Graphics().p("AJ4D7IAAiKID7AAIAACKg");
	var mask_graphics_12 = new cjs.Graphics().p("AJzD7IAAiKIEFAAIAACKg");
	var mask_graphics_13 = new cjs.Graphics().p("AJuD7IAAiKIEOAAIAACKg");
	var mask_graphics_14 = new cjs.Graphics().p("AJqD7IAAiKIEWAAIAACKg");
	var mask_graphics_15 = new cjs.Graphics().p("AJnD7IAAiKIEdAAIAACKg");
	var mask_graphics_16 = new cjs.Graphics().p("AJkD7IAAiKIEjAAIAACKg");
	var mask_graphics_17 = new cjs.Graphics().p("AJhD7IAAiKIEoAAIAACKg");
	var mask_graphics_18 = new cjs.Graphics().p("AJfD7IAAiKIEtAAIAACKg");
	var mask_graphics_19 = new cjs.Graphics().p("AJdD7IAAiKIExAAIAACKg");
	var mask_graphics_20 = new cjs.Graphics().p("AJbD7IAAiKIE0AAIAACKg");
	var mask_graphics_21 = new cjs.Graphics().p("AJaD7IAAiKIE3AAIAACKg");
	var mask_graphics_22 = new cjs.Graphics().p("AJZD7IAAiKIE5AAIAACKg");
	var mask_graphics_23 = new cjs.Graphics().p("AJYD7IAAiKIE7AAIAACKg");
	var mask_graphics_24 = new cjs.Graphics().p("AJXD7IAAiKIE8AAIAACKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:79.5,y:25.1}).wait(1).to({graphics:mask_graphics_1,x:80.4,y:25.1}).wait(1).to({graphics:mask_graphics_2,x:81.4,y:25.1}).wait(1).to({graphics:mask_graphics_3,x:82.3,y:25.1}).wait(1).to({graphics:mask_graphics_4,x:83.2,y:25.1}).wait(1).to({graphics:mask_graphics_5,x:84.1,y:25.1}).wait(1).to({graphics:mask_graphics_6,x:84.9,y:25.1}).wait(1).to({graphics:mask_graphics_7,x:85.7,y:25.1}).wait(1).to({graphics:mask_graphics_8,x:86.5,y:25.1}).wait(1).to({graphics:mask_graphics_9,x:87.1,y:25.1}).wait(1).to({graphics:mask_graphics_10,x:87.7,y:25.1}).wait(1).to({graphics:mask_graphics_11,x:88.3,y:25.1}).wait(1).to({graphics:mask_graphics_12,x:88.8,y:25.1}).wait(1).to({graphics:mask_graphics_13,x:89.2,y:25.1}).wait(1).to({graphics:mask_graphics_14,x:89.6,y:25.1}).wait(1).to({graphics:mask_graphics_15,x:90,y:25.1}).wait(1).to({graphics:mask_graphics_16,x:90.3,y:25.1}).wait(1).to({graphics:mask_graphics_17,x:90.5,y:25.1}).wait(1).to({graphics:mask_graphics_18,x:90.8,y:25.1}).wait(1).to({graphics:mask_graphics_19,x:91,y:25.1}).wait(1).to({graphics:mask_graphics_20,x:91.1,y:25.1}).wait(1).to({graphics:mask_graphics_21,x:91.3,y:25.1}).wait(1).to({graphics:mask_graphics_22,x:91.4,y:25.1}).wait(1).to({graphics:mask_graphics_23,x:91.5,y:25.1}).wait(1).to({graphics:mask_graphics_24,x:91.5,y:25.1}).wait(1));

	// Layer_9
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(125,42.5,1,1,0,0,0,125,42.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Layer_8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgsDLIAAiKIBKAAIAACKg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AiFDLIAAiKIELAAIAACKg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjnDLIAAiKIHPAAIAACKg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlIDLIAAiKIKRAAIAACKg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AmoDLIAAiKINRAAIAACKg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AoDDLIAAiKIQHAAIAACKg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ApaDLIAAiKIS1AAIAACKg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AqsDLIAAiKIVZAAIAACKg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ar3DLIAAiKIXvAAIAACKg");
	var mask_1_graphics_9 = new cjs.Graphics().p("As8DLIAAiKIZ5AAIAACKg");
	var mask_1_graphics_10 = new cjs.Graphics().p("At7DLIAAiKIb3AAIAACKg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Au0DLIAAiKIdpAAIAACKg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AvnDLIAAiKIfPAAIAACKg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AwVDLIAAiKMAgrAAAIAACKg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Aw+DLIAAiKMAh9AAAIAACKg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AxhDLIAAiKMAjDAAAIAACKg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AyBDLIAAiKMAkDAAAIAACKg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AydDLIAAiKMAk7AAAIAACKg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ay1DLIAAiKMAlrAAAIAACKg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AzJDLIAAiKMAmTAAAIAACKg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AzaDLIAAiKMAm1AAAIAACKg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AzpDLIAAiKMAnTAAAIAACKg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Az1DLIAAiKMAnrAAAIAACKg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Az+DLIAAiKMAn9AAAIAACKg");
	var mask_1_graphics_24 = new cjs.Graphics().p("A0EDLIAAiKMAoJAAAIAACKg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-4.5,y:20.3}).wait(1).to({graphics:mask_1_graphics_1,x:4.5,y:20.3}).wait(1).to({graphics:mask_1_graphics_2,x:14.3,y:20.3}).wait(1).to({graphics:mask_1_graphics_3,x:24,y:20.3}).wait(1).to({graphics:mask_1_graphics_4,x:33.5,y:20.3}).wait(1).to({graphics:mask_1_graphics_5,x:42.7,y:20.3}).wait(1).to({graphics:mask_1_graphics_6,x:51.4,y:20.3}).wait(1).to({graphics:mask_1_graphics_7,x:59.5,y:20.3}).wait(1).to({graphics:mask_1_graphics_8,x:67.1,y:20.3}).wait(1).to({graphics:mask_1_graphics_9,x:74,y:20.3}).wait(1).to({graphics:mask_1_graphics_10,x:80.3,y:20.3}).wait(1).to({graphics:mask_1_graphics_11,x:85.9,y:20.3}).wait(1).to({graphics:mask_1_graphics_12,x:91.1,y:20.3}).wait(1).to({graphics:mask_1_graphics_13,x:95.6,y:20.3}).wait(1).to({graphics:mask_1_graphics_14,x:99.7,y:20.3}).wait(1).to({graphics:mask_1_graphics_15,x:103.3,y:20.3}).wait(1).to({graphics:mask_1_graphics_16,x:106.5,y:20.3}).wait(1).to({graphics:mask_1_graphics_17,x:109.2,y:20.3}).wait(1).to({graphics:mask_1_graphics_18,x:111.6,y:20.3}).wait(1).to({graphics:mask_1_graphics_19,x:113.7,y:20.3}).wait(1).to({graphics:mask_1_graphics_20,x:115.4,y:20.3}).wait(1).to({graphics:mask_1_graphics_21,x:116.8,y:20.3}).wait(1).to({graphics:mask_1_graphics_22,x:118,y:20.3}).wait(1).to({graphics:mask_1_graphics_23,x:118.9,y:20.3}).wait(1).to({graphics:mask_1_graphics_24,x:119.6,y:20.3}).wait(1));

	// Layer_7
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125,42.5,1,1,0,0,0,125,42.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

	// Layer_6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("ADMCVIAAiKIBLAAIAACKg");
	var mask_2_graphics_1 = new cjs.Graphics().p("ACaCVIAAiKIC0AAIAACKg");
	var mask_2_graphics_2 = new cjs.Graphics().p("ABoCVIAAiKIEeAAIAACKg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AA2CVIAAiKIGHAAIAACKg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AAFCVIAAiKIHuAAIAACKg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AgqCVIAAiKIJRAAIAACKg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AhXCVIAAiKIKwAAIAACKg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AiACVIAAiKIMHAAIAACKg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AinCVIAAiKINZAAIAACKg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AjLCVIAAiKIOkAAIAACKg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AjrCVIAAiKIPoAAIAACKg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AkJCVIAAiKIQmAAIAACKg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AkjCVIAAiKIRdAAIAACKg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Ak7CVIAAiKISPAAIAACKg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AlPCVIAAiKIS6AAIAACKg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AliCVIAAiKITiAAIAACKg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AlyCVIAAiKIUEAAIAACKg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AmBCVIAAiKIUiAAIAACKg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AmNCVIAAiKIU8AAIAACKg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AmXCVIAAiKIVRAAIAACKg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AmgCVIAAiKIVkAAIAACKg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AmoCVIAAiKIV0AAIAACKg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AmuCVIAAiKIWBAAIAACKg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AmzCVIAAiKIWLAAIAACKg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AnXCVIAAiKIWSAAIAACKg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:27.9,y:14.9}).wait(1).to({graphics:mask_2_graphics_1,x:33.4,y:14.9}).wait(1).to({graphics:mask_2_graphics_2,x:39,y:14.9}).wait(1).to({graphics:mask_2_graphics_3,x:44.5,y:14.9}).wait(1).to({graphics:mask_2_graphics_4,x:49.9,y:14.9}).wait(1).to({graphics:mask_2_graphics_5,x:55.1,y:14.9}).wait(1).to({graphics:mask_2_graphics_6,x:60.1,y:14.9}).wait(1).to({graphics:mask_2_graphics_7,x:64.7,y:14.9}).wait(1).to({graphics:mask_2_graphics_8,x:69,y:14.9}).wait(1).to({graphics:mask_2_graphics_9,x:72.9,y:14.9}).wait(1).to({graphics:mask_2_graphics_10,x:76.5,y:14.9}).wait(1).to({graphics:mask_2_graphics_11,x:79.7,y:14.9}).wait(1).to({graphics:mask_2_graphics_12,x:82.6,y:14.9}).wait(1).to({graphics:mask_2_graphics_13,x:85.2,y:14.9}).wait(1).to({graphics:mask_2_graphics_14,x:87.5,y:14.9}).wait(1).to({graphics:mask_2_graphics_15,x:89.6,y:14.9}).wait(1).to({graphics:mask_2_graphics_16,x:91.4,y:14.9}).wait(1).to({graphics:mask_2_graphics_17,x:92.9,y:14.9}).wait(1).to({graphics:mask_2_graphics_18,x:94.3,y:14.9}).wait(1).to({graphics:mask_2_graphics_19,x:95.4,y:14.9}).wait(1).to({graphics:mask_2_graphics_20,x:96.4,y:14.9}).wait(1).to({graphics:mask_2_graphics_21,x:97.2,y:14.9}).wait(1).to({graphics:mask_2_graphics_22,x:97.9,y:14.9}).wait(1).to({graphics:mask_2_graphics_23,x:98.4,y:14.9}).wait(1).to({graphics:mask_2_graphics_24,x:95.5,y:14.9}).wait(1));

	// Layer_5
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125,42.5,1,1,0,0,0,125,42.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// Layer_4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AGoBlIAAiJIBLAAIAACJg");
	var mask_3_graphics_1 = new cjs.Graphics().p("AF2BlIAAiJIC0AAIAACJg");
	var mask_3_graphics_2 = new cjs.Graphics().p("AFDBlIAAiJIEfAAIAACJg");
	var mask_3_graphics_3 = new cjs.Graphics().p("AERBlIAAiJIGJAAIAACJg");
	var mask_3_graphics_4 = new cjs.Graphics().p("ADfBlIAAiJIHxAAIAACJg");
	var mask_3_graphics_5 = new cjs.Graphics().p("ACwBlIAAiJIJVAAIAACJg");
	var mask_3_graphics_6 = new cjs.Graphics().p("ACDBlIAAiJIKzAAIAACJg");
	var mask_3_graphics_7 = new cjs.Graphics().p("ABZBlIAAiJIMMAAIAACJg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AAyBlIAAiJINeAAIAACJg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AAOBlIAAiJIOpAAIAACJg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AgSBlIAAiJIPtAAIAACJg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AgvBlIAAiJIQrAAIAACJg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AhKBlIAAiJIRjAAIAACJg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AhiBlIAAiJISVAAIAACJg");
	var mask_3_graphics_14 = new cjs.Graphics().p("Ah3BlIAAiJITCAAIAACJg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AiJBlIAAiJIToAAIAACJg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AiaBlIAAiJIULAAIAACJg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AioBlIAAiJIUpAAIAACJg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Ai0BlIAAiJIVDAAIAACJg");
	var mask_3_graphics_19 = new cjs.Graphics().p("Ai/BlIAAiJIVZAAIAACJg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AjIBlIAAiJIVsAAIAACJg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AjPBlIAAiJIV7AAIAACJg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AjWBlIAAiJIWJAAIAACJg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AjaBlIAAiJIWSAAIAACJg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AkBBlIAAiJIWaAAIAACJg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:49.9,y:10.1}).wait(1).to({graphics:mask_3_graphics_1,x:55.4,y:10.1}).wait(1).to({graphics:mask_3_graphics_2,x:61,y:10.1}).wait(1).to({graphics:mask_3_graphics_3,x:66.6,y:10.1}).wait(1).to({graphics:mask_3_graphics_4,x:72,y:10.1}).wait(1).to({graphics:mask_3_graphics_5,x:77.3,y:10.1}).wait(1).to({graphics:mask_3_graphics_6,x:82.2,y:10.1}).wait(1).to({graphics:mask_3_graphics_7,x:86.9,y:10.1}).wait(1).to({graphics:mask_3_graphics_8,x:91.2,y:10.1}).wait(1).to({graphics:mask_3_graphics_9,x:95.1,y:10.1}).wait(1).to({graphics:mask_3_graphics_10,x:98.7,y:10.1}).wait(1).to({graphics:mask_3_graphics_11,x:102,y:10.1}).wait(1).to({graphics:mask_3_graphics_12,x:104.9,y:10.1}).wait(1).to({graphics:mask_3_graphics_13,x:107.5,y:10.1}).wait(1).to({graphics:mask_3_graphics_14,x:109.9,y:10.1}).wait(1).to({graphics:mask_3_graphics_15,x:111.9,y:10.1}).wait(1).to({graphics:mask_3_graphics_16,x:113.7,y:10.1}).wait(1).to({graphics:mask_3_graphics_17,x:115.3,y:10.1}).wait(1).to({graphics:mask_3_graphics_18,x:116.7,y:10.1}).wait(1).to({graphics:mask_3_graphics_19,x:117.8,y:10.1}).wait(1).to({graphics:mask_3_graphics_20,x:118.8,y:10.1}).wait(1).to({graphics:mask_3_graphics_21,x:119.6,y:10.1}).wait(1).to({graphics:mask_3_graphics_22,x:120.3,y:10.1}).wait(1).to({graphics:mask_3_graphics_23,x:120.8,y:10.1}).wait(1).to({graphics:mask_3_graphics_24,x:117.7,y:10.1}).wait(1));

	// Layer_3
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125,42.5,1,1,0,0,0,125,42.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AgBBFIAAiJIBKAAIAACJg");
	var mask_4_graphics_1 = new cjs.Graphics().p("AhKBFIAAiJIDnAAIAACJg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AiUBFIAAiJIGGAAIAACJg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AjdBFIAAiJIIkAAIAACJg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AklBFIAAiJIK+AAIAACJg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AlqBFIAAiJINTAAIAACJg");
	var mask_4_graphics_6 = new cjs.Graphics().p("AmrBFIAAiJIPfAAIAACJg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AnpBFIAAiJIRkAAIAACJg");
	var mask_4_graphics_8 = new cjs.Graphics().p("AohBFIAAiJITdAAIAACJg");
	var mask_4_graphics_9 = new cjs.Graphics().p("ApWBFIAAiJIVOAAIAACJg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AqFBFIAAiJIW0AAIAACJg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AqwBFIAAiJIYQAAIAACJg");
	var mask_4_graphics_12 = new cjs.Graphics().p("ArWBFIAAiJIZjAAIAACJg");
	var mask_4_graphics_13 = new cjs.Graphics().p("Ar5BFIAAiJIauAAIAACJg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AsXBFIAAiJIbvAAIAACJg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AszBFIAAiJIcqAAIAACJg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AtKBFIAAiJIddAAIAACJg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AtfBFIAAiJIeKAAIAACJg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AtxBFIAAiJIewAAIAACJg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AuBBFIAAiJIfSAAIAACJg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AuOBFIAAiJIfuAAIAACJg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AuZBFIAAiJMAgGAAAIAACJg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AuhBFIAAiJMAgYAAAIAACJg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AuoBFIAAiJMAgnAAAIAACJg");
	var mask_4_graphics_24 = new cjs.Graphics().p("Av1BFIAAiJMAgyAAAIAACJg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:7.3,y:2.1}).wait(1).to({graphics:mask_4_graphics_1,x:15.7,y:2.1}).wait(1).to({graphics:mask_4_graphics_2,x:24.2,y:2.1}).wait(1).to({graphics:mask_4_graphics_3,x:32.7,y:2.1}).wait(1).to({graphics:mask_4_graphics_4,x:40.9,y:2.1}).wait(1).to({graphics:mask_4_graphics_5,x:48.9,y:2.1}).wait(1).to({graphics:mask_4_graphics_6,x:56.4,y:2.1}).wait(1).to({graphics:mask_4_graphics_7,x:63.5,y:2.1}).wait(1).to({graphics:mask_4_graphics_8,x:70,y:2.1}).wait(1).to({graphics:mask_4_graphics_9,x:76,y:2.1}).wait(1).to({graphics:mask_4_graphics_10,x:81.5,y:2.1}).wait(1).to({graphics:mask_4_graphics_11,x:86.4,y:2.1}).wait(1).to({graphics:mask_4_graphics_12,x:90.9,y:2.1}).wait(1).to({graphics:mask_4_graphics_13,x:94.9,y:2.1}).wait(1).to({graphics:mask_4_graphics_14,x:98.4,y:2.1}).wait(1).to({graphics:mask_4_graphics_15,x:101.5,y:2.1}).wait(1).to({graphics:mask_4_graphics_16,x:104.3,y:2.1}).wait(1).to({graphics:mask_4_graphics_17,x:106.7,y:2.1}).wait(1).to({graphics:mask_4_graphics_18,x:108.7,y:2.1}).wait(1).to({graphics:mask_4_graphics_19,x:110.5,y:2.1}).wait(1).to({graphics:mask_4_graphics_20,x:112,y:2.1}).wait(1).to({graphics:mask_4_graphics_21,x:113.3,y:2.1}).wait(1).to({graphics:mask_4_graphics_22,x:114.3,y:2.1}).wait(1).to({graphics:mask_4_graphics_23,x:115.1,y:2.1}).wait(1).to({graphics:mask_4_graphics_24,x:108.5,y:2.1}).wait(1));

	// Layer_1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(125,42.5,1,1,0,0,0,125,42.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,0,151.9,50.1);


(lib.land = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// Layer_8
	this.instance = new lib.ruand2();
	this.instance.parent = this;
	this.instance.setTransform(55.7,-41.7,0.244,0.244,0,0,0,2,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({scaleX:1.34,scaleY:1.34,x:55.6,y:-41.8},13).to({scaleX:1,scaleY:1},3).wait(4));

	// Layer_8
	this.instance_1 = new lib.ruand2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.7,-41.9,0.244,0.244,0,0,0,2,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({scaleX:1.34,scaleY:1.34,x:43.6,y:-42},13).to({scaleX:1,scaleY:1},3).wait(7));

	// Layer_8
	this.instance_2 = new lib.ruand2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.7,-56.9,0.244,0.244,0,0,0,2,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({scaleX:1.34,scaleY:1.34,x:49.6,y:-57},13).to({scaleX:1,scaleY:1},3).wait(10));

	// Layer_7
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.3,-47.7,0.068,0.068,0,0,0,22,26.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).to({regX:21.9,scaleX:1,scaleY:1,x:49.2},20,cjs.Ease.quadOut).wait(20));

	// Layer_6
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(50.4,-47.9,0.054,0.054,0,0,0,0,26.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({regX:0.4,scaleX:1,scaleY:1},20,cjs.Ease.quadOut).wait(20));

	// Layer_4
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(48.8,-2.2,0.046,0.046,0,0,0,33.5,45.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).wait(1).to({regX:16.9,regY:23.1,scaleX:0.13,scaleY:0.13,x:46.6,y:-5.1},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:45.2,y:-7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:43.8,y:-8.9},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:42.4,y:-10.7},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:41.2,y:-12.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:39.9,y:-14},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:38.8,y:-15.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:37.9,y:-16.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:37,y:-18.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:36.2,y:-19.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:35.5,y:-20},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:34.9,y:-20.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:34.3,y:-21.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:33.9,y:-22.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:33.5,y:-22.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:33.1,y:-23.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:32.9,y:-23.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:32.6,y:-23.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:32.4,y:-24.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:32.3,y:-24.3},0).wait(1).to({regX:34,regY:45.3,scaleX:1,scaleY:1,x:48.8,y:-2.3},0).wait(30));

	// Layer_3
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(49.9,-5.2,0.031,0.031,0,0,0,0,38.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).to({regX:0.6,regY:37.8,scaleX:1,scaleY:1,x:50.3,y:-5.3},21,cjs.Ease.quadOut).wait(30));

	// Layer_2
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(49.6,10.3,1,0.014,0,0,0,0.4,57.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).to({scaleY:1,y:10.2},31,cjs.Ease.quadOut).wait(30));

	// Layer_1
	this.instance_8 = new lib.soil();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4,1,0.5,0.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_90 = function() {
		this.dispatchEvent('stopMiddle');
	}
	this.frame_231 = function() {
		this.stop();
		this.dispatchEvent('playEnd');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(141).call(this.frame_231).wait(1));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AsPQUMAAAggnIYfAAMAAAAgng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:381.4,y:104.4}).wait(231));

	// Layer_8
	this.instance = new lib.land();
	this.instance.parent = this;
	this.instance.setTransform(381,275.9,1,1,0,0,0,48,67.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).to({y:165.5},38,cjs.Ease.quadOut).wait(61));

	// Layer_4
	this.firstAni = new lib.money_all();
	this.firstAni.name = "firstAni";
	this.firstAni.parent = this;
	this.firstAni.setTransform(158.5,60.3,1.2,1.2,0,0,0,23.6,41.3);
	this.firstAni._off = true;

	this.timeline.addTween(cjs.Tween.get(this.firstAni).wait(19).to({_off:false},0).wait(213));

	// Layer_3
	this.instance_1 = new lib.lin();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,189.5,1,1,0,0,0,125,42.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(216));

	// ruand
	this.instance_2 = new lib.ruand();
	this.instance_2.parent = this;
	this.instance_2.setTransform(192.4,80.6,0.071,0.071,0,0,0,135.2,133.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:135.1,regY:133.2,scaleX:1.1,scaleY:1.1,alpha:1},17,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadOut).wait(207));

	// Layer_7
	this.instance_3 = new lib.lin2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(354.5,186,1,1,0,0,0,101.5,37);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134).to({_off:false},0).wait(98));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_219 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// Layer_6
	this.anibox = new lib.Symbol9();
	this.anibox.name = "anibox";
	this.anibox.parent = this;
	this.anibox.setTransform(25.5,13.5,1,1,0,0,0,25.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.anibox).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,125,970,250);
// library properties:
lib.properties = {
	id: '713C5F2F26C547BD8EBC2AD466E28D9A',
	width: 500,
	height: 250,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/l2_lin.png?1536636038062", id:"l2_lin"},
		{src:"images/l2_lin2.png?1536636038062", id:"l2_lin2"},
		{src:"images/soil.png?1536636038062", id:"soil"}
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
an.compositions['713C5F2F26C547BD8EBC2AD466E28D9A'] = {
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


AdobeAn[2] = an;
})(createjs,{});
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


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E2D28").ss(2,1,1).p("AAOj3QACAEACADQA+B1A9B3QABACABACQA+B6A9B+AALjtQAFB0AAB1QAAACAAACQAABvgFB/AALj2QgCAEgBADQg5B3hEB0QgCACAAACQhEBwhOBu");
	this.shape.setTransform(38.2,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80F4BE").s().p("AgnDEQlOgogClbIACgEIGFAOID/AKIBpADIAAAFQguFmlwABIgBAAg");
	this.shape_1.setTransform(37.6,66.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,-1,75.2,87.3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E2D28").ss(2,1,1).p("AvDBMQNWhyQxgl");
	this.shape.setTransform(96.4,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1,-1,194.8,17.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3025").s().p("AggAgQgNgNAAgTQAAgSANgOQAOgNASAAQATAAANANQANAOAAASQAAATgNANQgNANgTAAQgSAAgOgNg");
	this.shape.setTransform(4.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,9.1,9.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01733B").s().p("ABDDqQhAgSgXgTIgagVQiMhjgxj+IgBgEQgThJAVAGIHgHgIgCADQgcAMgqACIgHABQgogBg8gPg");
	this.shape.setTransform(24.6,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,49.2,49.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01733B").s().p("AkADxIAAAAQDpjxDujlIAighQAIAHgBANQADAAgCANQgDAUgNAaQhMF+jwA3QgvAJgmAAQg8AAgkgWg");
	this.shape.setTransform(25.7,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,51.5,52.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01733B").s().p("AEpErQgegCgUgEQnhhWhUmyIgPgSQgSglASgMQAFgIAPAHIABABIKPI+QgPATgaAAIgFAAg");
	this.shape.setTransform(34.3,29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,68.6,59.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01733B").s().p("AlnErIK8pZQANgEACAGQACAGACAxQABAwgHCWQgJBFg2ARQg8ASgsAHQg0AagDAyIgFAyQgZBFhMADQiLAriNAAQg1AAg0gGg");
	this.shape.setTransform(36,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,72,61), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E2D28").ss(2,1,1).p("AAAutIAAdb");
	this.shape.setTransform(0,94.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,2,190.4), null);


(lib.balance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
		this.dispatchEvent('playEnd');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_10
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(97.1,48.9,0.039,0.039,3.7,0,0,39.3,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({regX:39.5,regY:2.9,scaleX:1.06,scaleY:1.06,rotation:-1,x:96.6,y:39.1},21,cjs.Ease.quadOut).to({regX:39.6,regY:3,scaleX:1.06,scaleY:1.06,rotation:-2.1,x:96.8,y:50.7},19,cjs.Ease.quadInOut).to({regY:3.1,rotation:-0.9,x:96.7,y:43},18,cjs.Ease.quadInOut).to({regX:39.7,rotation:-2.6,x:96.8,y:48},21,cjs.Ease.quadInOut).wait(1));

	// Layer_9
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-95,50.2,0.032,0.032,3.7,0,0,37.8,3.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({regX:39.2,regY:2.8,scaleX:1,scaleY:1,rotation:-0.5,x:-93.9,y:63.1},21,cjs.Ease.quadOut).to({regX:38.9,regY:2.9,rotation:-1.7,x:-95.4,y:51.6},19,cjs.Ease.quadInOut).to({rotation:-0.5,x:-95,y:59.1},18,cjs.Ease.quadInOut).to({rotation:-0.7,x:-95.4,y:54.1},21,cjs.Ease.quadInOut).wait(1));

	// Layer_8
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,46.3,0.012,0.086,3.7,0,0,92.5,6.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regX:95.6,regY:5.8,scaleX:1,scaleY:1},11,cjs.Ease.quadInOut).wait(1).to({regX:96.4,regY:7.6,rotation:3.2,x:1,y:48.1},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:1.7},0).wait(1).to({rotation:1.3},0).wait(1).to({rotation:0.8,x:1.1,y:48.2},0).wait(1).to({rotation:0.4,y:48.1},0).wait(1).to({rotation:0,y:48.2},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-1,x:1.2},0).wait(1).to({rotation:-1.3,x:1.1},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.8,x:1.2},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-2.4},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.6},0).wait(1).to({regX:95.5,regY:5.9,rotation:-2.7,x:0.4,y:46.5},0).to({regX:95.4,regY:6,rotation:4.4,x:0.2,y:46.6},19,cjs.Ease.quadInOut).to({regY:5.9,rotation:-0.2,x:0.1,y:46.4},18,cjs.Ease.quadInOut).to({rotation:2.7,x:0.2,y:46.5},21,cjs.Ease.quadInOut).wait(1));

	// Layer_7
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9,-25.4,0.187,0.187,0,0,0,4.5,4.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:8.9,y:-25.5},15).to({scaleX:1,scaleY:1},3).wait(65));

	// Layer_7
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.4,-12.6,0.187,0.187,0,0,0,4.5,4.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-0.5,y:-12.9},15).to({scaleX:1,scaleY:1},3).wait(70));

	// Layer_7
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-13,-24.8,0.187,0.187,0,0,0,4.5,4.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-13.1},15).to({scaleX:1,scaleY:1},3).wait(75));

	// Layer_5
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1,-0.6,0.029,0.029,0,0,0,48,48);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({regX:48.8,scaleX:1,scaleY:1},17,cjs.Ease.quadOut).wait(79));

	// Layer_4
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.9,-0.4,0.032,0.032,0,0,0,1.6,51.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({regX:1.2,scaleX:1,scaleY:1,y:-0.5},17,cjs.Ease.quadOut).wait(79));

	// Layer_3
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.5,31.6,0.054,0.054,0,0,0,68.9,58.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).to({regY:58.3,scaleX:1,scaleY:1,x:-0.6,y:31.5},18,cjs.Ease.quadOut).wait(85));

	// Layer_2
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.3,31.6,0.031,0.031,0,0,0,0,60.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).to({regX:0.1,regY:60.5,scaleX:1,scaleY:1,x:0.4,y:31.5},18,cjs.Ease.quadOut).wait(85));

	// Layer_1
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,197.7,1,0.053,0,0,0,0,188.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({regY:188.2,scaleY:1,y:188.2},19,cjs.Ease.quadOut).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_2
	this.anibox = new lib.balance();
	this.anibox.name = "anibox";
	this.anibox.parent = this;
	this.anibox.setTransform(150,159.8,1,1,0,0,0,0,94.2);

	this.timeline.addTween(cjs.Tween.get(this.anibox).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-381,125,970,250);
// library properties:
lib.properties = {
	id: '23355ADA11C04978B6D584A07E81FA05',
	width: 300,
	height: 250,
	fps: 40,
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
an.compositions['23355ADA11C04978B6D584A07E81FA05'] = {
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
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Map = function() {
	this.initialize(img.Map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1142,476);// helper functions:

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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Map_1, new cjs.Rectangle(0,0,571,238), null);


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
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(4,4,0.064,0.064,0,0,0,3.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:3.8,regY:3.8,scaleX:1.44,scaleY:1.44,x:3.9,y:3.9},20,cjs.Ease.quadInOut).to({regX:3.9,regY:3.9,scaleX:1,scaleY:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,3.7,0.6,0.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_22
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(871.4,136,1,1,0,0,0,3.9,3.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(100));

	// Layer_21
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(849.8,141.4,1,1,0,0,0,3.9,3.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(101));

	// Layer_20
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(871.4,70.6,1,1,0,0,0,3.9,3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(102));

	// Layer_19
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(823.2,91,1,1,0,0,0,3.9,3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(103));

	// Layer_18
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(836.8,132.4,1,1,0,0,0,3.9,3.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).wait(104));

	// Layer_17
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(816.4,131.5,1,1,0,0,0,3.9,3.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(105));

	// Layer_16
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(705.4,116.5,1,1,0,0,0,3.9,3.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).wait(106));

	// Layer_15
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(707.4,128.4,1,1,0,0,0,3.9,3.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(107));

	// Layer_14
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(694.9,139.1,1,1,0,0,0,3.9,3.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).wait(108));

	// Layer_13
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(703.9,144.8,1,1,0,0,0,3.9,3.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).wait(109));

	// Layer_12
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(694.4,155.9,1,1,0,0,0,3.9,3.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(110));

	// Layer_11
	this.instance_11 = new lib.Symbol1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(542.6,157.4,1,1,0,0,0,3.9,3.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).wait(111));

	// Layer_10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(572.8,150.5,1,1,0,0,0,3.9,3.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},0).wait(112));

	// Layer_9
	this.instance_13 = new lib.Symbol1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(530.6,147.2,1,1,0,0,0,3.9,3.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).wait(113));

	// Layer_8
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(530.1,130.4,1,1,0,0,0,3.9,3.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).wait(114));

	// Layer_7
	this.instance_15 = new lib.Symbol1copy();
	this.instance_15.parent = this;
	this.instance_15.setTransform(513.8,110.7,1,1,0,0,0,3.9,3.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5).to({_off:false},0).wait(115));

	// Layer_6
	this.instance_16 = new lib.Symbol1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(528.6,67.5,1,1,0,0,0,3.9,3.9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(4).to({_off:false},0).wait(116));

	// Layer_5
	this.instance_17 = new lib.Symbol1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(505.2,103.3,1,1,0,0,0,3.9,3.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({_off:false},0).wait(117));

	// Layer_4
	this.instance_18 = new lib.Symbol1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(491.5,100.5,1,1,0,0,0,3.9,3.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({_off:false},0).wait(118));

	// Layer_3
	this.instance_19 = new lib.Symbol1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(468.8,76.5,1,1,0,0,0,3.9,3.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
		this.dispatchEvent('playEnd');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_25
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-348.4,15.2,1,1,0,0,0,19.6,15.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,8,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(119));

	// Layer_2
	this.instance_1 = new lib.Map_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(298,119.5,1,1,0,0,0,286,119.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// Layer_3
	this.anibox = new lib.Symbol7();
	this.anibox.name = "anibox";
	this.anibox.parent = this;
	this.anibox.setTransform(26.5,19,1,1,0,0,0,26.5,19);

	this.timeline.addTween(cjs.Tween.get(this.anibox).wait(121));

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
		{src:"images/Map.png?1536229984151", id:"Map"}
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


AdobeAn[4] = an;
})(createjs,{});
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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C9C9").s().p("AgoIbQj3jWj9loQiokShYl6IQzAEQAvCJBLB1QAUAfBGBaIAGAIIAEAGIACAAIEMEZIAaAcIqbKhIiqiVg");
	this.shape.setTransform(79.7,68.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,159.5,137.5), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C9C9").s().p("ABlCiQghgGhMgTQhVgWgZgKIAEAFQjthagei8QDfBICuAoIA2AMQBWAWBXAJQAuADAvgCQAbAFAGAKQADAGAFATQAFAVgBAJQgEBBg8AZQgzAVg3AAQg3AAg3gHg");
	this.shape.setTransform(38.2,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,76.3,33.8), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C9C9").s().p("AFTF+QhHgvjHifQjFieh4hhQh4hiiDheQgIiTCigIQFSE4DqC8IDqC9QBPCShNAQQgMADgPgBIgDAAQgaAAhEgtg");
	this.shape.setTransform(50.1,42.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,100.2,85.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C9C9").s().p("AFNGgIs5qtQgQiYCzgMQFvFwGME2QBmB5hIAnQgfAdglAAQgeAAghgSg");
	this.shape.setTransform(49.4,43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,98.8,86.8), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C9C9").s().p("AFJGlQm/lbl0lGQAIiiClgNQGEFyFAEGIgDABQCeCPhTA4QghAXguAAQgaAAgdgHg");
	this.shape.setTransform(47.3,42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1.8,-0.6,98.3,85.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C9C9").s().p("AFAGJQl1k6melAQgIiQDEgZIALAXQAIAVEJDqQEKDqBBA5QBCA4AlAqQAmAqgKAnQgKAngbAQQgbAPgVADQgqgDgUgPg");
	this.shape.setTransform(45.9,40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-0.6,93.8,82.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmvFQIFQj5IgGgHIgPgRIlSDwQgZgNgCgYIFXj1QgLgcAAgiQAAhIAwgzQAwgzBDABQA3AAApAgIE0jDQAaAFgFAeIkqDAQAPATAJAWIEpjFQAZAGgHAZIkvDYIAAASQAABHgvAyQgwAzhEAAQglAAgfgPIlcEGQgagRgDgZgAhAiCQgiAjAAAyQAAAyAiAjQAhAkAvAAQAwAAAhgkQAigjAAgyQAAgygigjQghgkgwAAQgvAAghAkg");
	this.shape.setTransform(48.2,37.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,96.4,75.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am0i0IAXgjQFkE2F0D2IgVAfQl4jolilAgAlWlSIAaghQGHE8FqD5IgQAiQmNj9luk5g");
	this.shape.setTransform(43.7,37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,87.4,74.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_18
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(139.7,54.6,1,1,0,0,0,9.7,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37));

	// Layer_19
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.7,46.3,1,1,0,0,0,48.1,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37));

	// Layer_2
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(79.8,68.8,1,1,0,0,0,79.8,68.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C9C9").s().p("ACHKYQh1gwiriIQjNijiMiEQhYhUiChxQgIiUCjgIQgRiYCzgMQAIihClgOIgLgJQgHiQDEgZIADAEQAbAWESDeQEMDZAVAWQBnBwAWAfQA7BRgPAsQgPAqgxAQQgRAFgVACQgpgCgxgUIgHgDQB7CghUA4Qg/AshxgpIADAEQBWCGhJAnQg3AzhdgjIgCAAQBPCRhNARQgLACgPAAIgFAAQgbAAg1gWg");
	this.shape.setTransform(164.4,138.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).wait(37));

	// Symbol 5
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(217.5,133,0.94,0.94,-3.5,0,0,9.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({regY:7.8,scaleX:1.03,scaleY:1.03,x:144.1,y:79.8},23,cjs.Ease.quadOut).wait(1));

	// Symbol 6
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(205.1,151.3,0.935,0.935,-0.4,0,0,13,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({regY:9.6,scaleX:0.99,scaleY:0.99,x:137.6,y:97.4},23,cjs.Ease.quadOut).wait(1));

	// Symbol 7
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(186.2,170.1,1,1,1.7,0,0,11.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({regY:10.1,scaleX:1.06,scaleY:1.06,x:115,y:107.4},23,cjs.Ease.quadOut).wait(1));

	// Symbol 8
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160.3,178.3,1,1,5,0,0,9.1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({regX:9.2,scaleX:1.07,scaleY:1.07,x:100.5,y:118.7},23,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.4,261.6);


(lib.hand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(170.8,46,1,1,0,0,0,43.6,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:157.3,y:37.5},36,cjs.Ease.quadOut).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01733B").s().p("AhtHvQijAvgFidIgBgQIgBgCQjOAeBJjYQiNAugchWQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAlIgCAFQgXAvgMAVQiIDVj4E7QgBAhArANIHJoXQBDg0AiAhQAiAhgXA6QgsBMgzBOIgXAjIg9BWQhxCaiRCiIAqAoQB3icBhhyIA9hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAgAsIAbgjIAOgRIA9hOQGnoTAvA8IACACQBRAqkEFbIklGAQhCArgsAAQhUAAgSiOg");
	this.shape.setTransform(77.4,155.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01733B").s().p("AhtHxIAAgCQiiAvgGicIAAgCIgBgOIAAgCIgBgBQjNAdBHjWIABgBQiLAugdhUIgBgCQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAugMAWQiIDVj4E6IAAABQAAAhAqANIABgBIHIoWIABgBQBDgzAhAgIABABQAgAhgWA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BWQhxCaiRCiIABAAIApAnIABAAQB3ibBghyIA9hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAAAAIAgAsIAbgjIAOgSIA7hLIACgCQGhoLAzAyIACABIABABIABACQBRAqkDFZIgBACIkkF/IgBABQhCArgsAAQhTAAgTiMg");
	this.shape_1.setTransform(76.4,154.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01733B").s().p("AhtHxIAAgCQiiAvgHicIAAgCIAAgOIAAgCIgCgBQjNAdBHjWIABgCQiLAugdhTIAAgCQgchWAlhSIAJgTQDkkeD5kQIADgCQBUgxAWAgQAXAigQAkIgCAFQgWAvgNAVQiHDWj5E6IAAABQAAAhAqAMIABAAIHIoWIABgBQBDgzAiAgIABABQAgAhgXA5IgBABQgrBMgyBNIgBABIgXAiIgBABIg8BWQhwCaiSChIABABIApAnIABAAQB3ibBghyIA9hHQBIhRA5g4QA/g9AugfQBagPgOBlIgDAGQhJCDh3B6Ij8FRIgBABIAgArIAcgjIANgRIA8hLIACgCQGhoLAzAyIABABIABABIACACQBQArkCFYIgBACIklF/IgBABQhBArgsAAQhTAAgTiMg");
	this.shape_2.setTransform(75.5,153.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01733B").s().p("AhtHxIAAgCQiiAvgGicIAAgBIgBgPIAAgBIAAgBIgCgBQjMAeBHjXIAAgBQiLAugdhUIAAgCQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAlIgCAFQgXAvgMAVQiIDVj4E7IAAABQgBAgAqANIABgBIHIoWIABgBQBDgzAiAhIABABQAgAggWA6IgBABQgrBLgzBOIgBABIgWAiIgBABIg8BVQhxCaiRCiIAAABIApAnIABgBQB3ibBghyIA+hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAgAsIAbgjIAOgRIA7hMIACgCQGhoMAzAzIABABIABABIACACQBQArkCFYIgBACIklF/IgBABQhBArgtAAQhSAAgTiMg");
	this.shape_3.setTransform(74.5,153);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01733B").s().p("AhtHxIAAgCQiiAvgHicIAAgCIAAgOIAAgCIgCgBQjNAdBIjWIAAgBQiLAugdhUIAAgCQgchWAlhRIAJgUQDkkeD5kPIADgDQBUgxAWAhQAXAhgQAkIAAABIgCAFQgWAugNAWQiHDVj4E6IgBABQAAAhAqANIABgBIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BWQhxCaiSCiIABAAIApAnIABAAQB3ibBghyIA9hGQBIhSA5g3QA/g+AugeQBagQgOBmIgDAGQhJCDh3B6Ij8FRIgBAAIAgAsIAcgjIAOgSIA7hLIACgCQGhoMAzAzIABABIABABIACACQBQArkCFYIgBACIklF/IgBABQhBArgsAAQhTAAgTiMg");
	this.shape_4.setTransform(73.6,152.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01733B").s().p("AhtHxIAAgCQiiAvgGicIAAgCIgBgOIAAgCIgCgBQjMAdBHjWIAAgBQiLAugchUIgBgCQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAvgMAVQiIDVj4E6IAAABQAAAhApANIABgBIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BWQhxCaiRCiIApAnIABAAQB4ibBghyIA9hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAgAsIAbgjIAOgRIA7hMIACgCQGioNAzA0IABABIABABIABACQBQArkCFZIgBACIklF+IgBABQhBArgsAAQhTAAgTiMg");
	this.shape_5.setTransform(72.7,151.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGicIAAgCIgBgOIAAgCIAAAAIgCgBQjMAdBHjWIAAgCQiLAugchUIgBgBQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAigPAkIgCAFQgXAvgMAVQiIDWj4E6IAAABQAAAhApAMIABAAIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBMgyBNIgBABIgXAiIgBABIg8BVQhxCbiRChIAAABIApAnIABAAQB4ibBghyIA9hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA7hMIACgCQGioMAzA0IABABIABABIABACQBQArkCFZIgBACIklF+IgBABQhBArgsAAQhTAAgTiNg");
	this.shape_6.setTransform(71.9,151.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGicIAAgCIgBgOIAAgCIAAAAIgCgBQjMAdBHjWIAAgCQiLAugdhUIAAgBQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAigPAkIgCAFQgXAvgMAVQiIDWj4E6IAAABQgBAhAqAMIABAAIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BVQhxCbiRChIAAABIApAnIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA7hMIACgCQGjoNAyA1IABABIABABIABACQBQAskCFYIgBACIklF+IgBABQhBArgsAAQhTAAgTiNg");
	this.shape_7.setTransform(71.1,150.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGicIAAgCIgBgOIAAgCIgCgBQjMAdBHjWIAAgBQiLAugdhVIAAgBQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAugMAWQiIDVj4E6IAAABQgBAhAqANIABgBIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBMgyBNIgBABIgXAiIgBABQgdArgfAqQhxCbiRCiIApAnIABAAQB3ibBghyIA+hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAAAAIAgAsIAbgjIAOgSIA7hMIACgCQGjoNAyA1IABACIABABIABABQBQAskCFYIgBACIklF+IgBABQhBArgsAAQhTAAgTiNg");
	this.shape_8.setTransform(70.3,149.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGicIAAgCIgBgOIAAgCIgBAAIgBgBQjMAdBHjWIAAgBQiLAugdhVIAAgBQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAugMAWQiIDVj4E6IAAABQgBAhAqANIABgBIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BVQhxCbiRCiIApAnIABAAQB3ibBghyIA+hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAAAAIAgAsIAbgjIAOgSIA7hMIACgCQGjoNAyA1IABACIABABIABABQBPAskBFYIgBACIklF+IgBABQhBArgsAAQhTAAgTiNg");
	this.shape_9.setTransform(69.5,149.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGicIAAgCIgBgOIAAgCIgBAAIgBgBQjMAdBHjWIAAgBQiLAugdhVIAAgBQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAugMAWQiIDVj4E6IAAABQgBAhAqANIABgBIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBMgyBNIgBABIgXAiIgBABIg8BVQhxCbiRCiIApAnIABAAQB3ibBghyIA+hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAAAAIAgAsIAbgjIAOgSIA8hMIACgCQGioOAyA3IABABIABABIACACQBOArkBFYIgBACIklF/IgBABQhBAqgsAAQhTAAgTiNg");
	this.shape_10.setTransform(68.8,148.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGidIAAgBIgBgPIAAgBIgBAAIgBgBQjMAdBHjXIAAgBQiLAugdhUIAAgBQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAigPAkIAAAAIgCAFQgXAvgMAVQiIDVj4E7IAAABQgBAhAqAMIABAAIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBLgyBOIgBABIgXAiIgBABQgdAqgfArQhxCbiRChIAAABIApAnIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA8hMIACgCQGjoOAxA2IABACIABABIACABQBOAskBFYIgBACIklF+IgBABQhBArgsAAQhTAAgTiNg");
	this.shape_11.setTransform(68.1,148.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGidIAAgBIgBgPIAAgBIgBAAIgBgBQjMAdBHjXIAAgBQiLAugdhUIAAgBQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAigPAkIAAAAIgCAFQgXAvgMAVQiIDVj4E7IAAABQgBAhAqAMIABAAIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBLgyBOIgBABIgXAiIgBABQgdAqgfArQhwCbiSChIAAABIApAnIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAAAAIAgArIAbgjIAOgRIA8hMIACgCQGjoPAxA4IACABIABABIABACQBOAskBFXIgBACIklF+IgBABQhBArgsAAQhTAAgTiNg");
	this.shape_12.setTransform(67.4,147.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGidIAAgBIgBgPIAAgBIgBAAIgBgBQjMAdBHjXIAAAAQiLAugdhVIAAgBQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAugMAWQiIDVj4E6IAAABQgBAhAqANIABgBIHIoWIABgBQBDgzAiAgIABABQAgAhgWA5IgBABQgrBMgyBNIgBABIgXAiIgBABIg8BVQhwCbiSCiIApAnIABAAQB3ibBghyIA+hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAgAsIAbgjIAOgSIA8hMIACgCQGjoPAxA4IACABIABABIABACQBOAskBFXIgBACIklF/IgBABQhBAqgsAAQhTAAgTiNg");
	this.shape_13.setTransform(66.7,147.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01733B").s().p("AhtHwIgBgBQiiAvgGidIAAgBIAAgPIgBgBIgBgBQjNAdBIjXIAAAAQiLAugdhVIAAgBQgchWAlhRIAJgUQDkkeD5kPIADgDQBUgxAWAhQAXAhgQAkIAAABIgCAFQgWAugNAWQiHDUj4E7IgBABQAAAhAqANIABgBIHIoWIABgBQBDgzAhAgIABABQAhAhgWA5IgBABQgrBLgyBOIgBABIgXAiIgBABQgdAqgfArQhxCbiSCiIABAAIApAnIABAAQB3ibBghyIA9hGQBIhSA5g3QA/g+AugeQBagQgOBmIgDAGQhJCDh3B6Ij8FRIgBAAIAgAsIAcgjIAOgSIA8hMIACgCQGjoPAxA4IACABIABABIABACQBOAskCFXIgBACIkkF/IgBABQhBAqgsAAQhTAAgTiNg");
	this.shape_14.setTransform(66.1,146.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01733B").s().p("AhtHwIgBgBQiiAvgFidIAAgBIgBgPIgBgBIAAAAIgBgBQjMAdBHjXIAAAAQiLAugdhVIAAgBQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAugMAWQiIDVj4E6IAAABQgBAhAqANIABgBIHIoWIABgBQBDgzAhAgIABABQAhAhgWA5IgBABQgrBMgyBNIgBABIgXAiIgBABIg8BVQhxCbiRCiIAAAAIApAnIABAAQB3ibBghyIA+hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAAAAIAgAsIAbgjIAOgSIA8hMIACgCQGkoPAwA4IACACIABABIABABQBOAskCFXIgBACIkkF/IgBABQhBAqgsAAQhTAAgTiNg");
	this.shape_15.setTransform(65.5,146.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGidIAAgBIgBgPIAAgBIgBgBIgBAAQjMAdBHjXIAAgBQiLAugdhUIAAgBQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAigPAkIAAAAIgCAFQgXAvgMAVQiIDVj4E7IAAABQgBAhAqAMIABAAIHIoWIABgBQBDgzAiAgIABABQAgAggWA6IgBABQgrBLgyBOIgBABIgXAiIgBABIg8BVQhwCbiSChIAAABIApAnIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAAAAIAgArIAbgjIAOgRIA8hMIACgCQGkoQAxA5IABACIABABIABABQBOAskBFXIgBACIklF/IgBABQhBAqgsAAQhTAAgTiNg");
	this.shape_16.setTransform(64.9,146);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01733B").s().p("AhtHwIAAgBQiiAvgGidIAAgBIgBgPIAAgBIgBgBIgBAAQjMAdBIjXIgBAAQiLAugchVIgBgBQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAugMAWQiIDUj3E7IgBABQAAAhApANIABgBIHIoWIABgBQBDgzAiAgIABABQAgAggVA6IgBABQgrBLgzBOIgBABIgWAiIgBABIg8BVQhxCbiSCiIAAAAIApAnIABAAQB4ibBghyIA9hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAgAsIAbgjIAOgSIA8hMIACgCQGkoQAxA5IABACIABABIABABQBOAtkBFWIgBACIklF/IgBABQhBAqgsAAQhTAAgTiNg");
	this.shape_17.setTransform(64.4,145.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01733B").s().p("AhtHvIAAAAQiiAugGicIAAgBIgBgPIAAgBIgBgBIgBAAQjMAdBIjXIgBgBQiLAugdhVIAAAAQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAlIAAAAIgCAFQgXAvgMAVQiIDVj3E7IgBABQgBAgAqANIABAAIHIoWIABgBQBDgzAiAgIABABQAgAggVA6IgBABQgrBLgzBOIgBABIgWAiIgBABIg8BUQhxCbiSCiIApAoIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA8hNIACgCQGloPAwA5IABACIABABIABABQBOAtkBFWIgBACIklF/IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_18.setTransform(63.9,145.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#01733B").s().p("AhtHvIAAAAQiiAugGicIAAgCIgBgOIAAgCIgBAAIgBAAQjMAcBIjWIgBgBQiLAugchVIgBAAQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAkIAAABIgCAFQgXAvgMAVQiIDVj3E6IgBABQAAAhApANIABAAIHIoWIABgBQBDgzAiAfIABABQAgAhgVA5IgBABQgrBMgzBNIgBABIgWAiIgBABQgdArgfAqQhxCbiSCiIAAAAIApAnIABABQB4ibBghyIA9hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA8hNIACgCQGloQAwA6IABACIABABIABABQBOAtkBFWIgBACIklF+IgBABQhBAqgsAAQhTAAgTiNg");
	this.shape_19.setTransform(63.4,144.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#01733B").s().p("AhtHvIAAAAQiiAugGicIAAgBIgBgPIAAgBIgBgBIgBAAQjMAdBIjXIgBgBQiLAugdhVIAAAAQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAlIAAAAIgCAFQgXAvgMAVQiIDVj3E7IgBABQgBAgAqANIABAAIHIoWIABgBQBDgzAiAgIABABQAgAggVA6IgBABQgrBLgzBOIgBABIgWAiIgBABIg8BUQhxCbiSCiIApAoIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA8hNIACgCQGloQAwA6IABACIABABIABABQBNAtkAFWIgBACIklF/IgBABQhAAqgtAAQhTAAgTiOg");
	this.shape_20.setTransform(62.9,144.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugFicIAAgCIgBgOIgBgCIAAAAIgBAAQjMAcBHjWIAAgBQiMAugchVIAAAAQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAkIAAABIgCAFQgXAvgMAVQiIDVj4E6IAAABQgBAhAqANIABAAIHIoWIABgBQBCgzAiAfIABABQAhAhgWA5IgBABQgrBMgyBNIgBABIgXAiIgBABIg8BVQhxCbiRCiIApAnIABABQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAAAIAAABIAgArIAbgjIAOgRIA8hNIACgCQGloQAwA6IABACIABABIABABQBNAtkBFWIgBACIkkF+IgBABQhBAqgsAAQhTAAgTiNg");
	this.shape_21.setTransform(62.5,144.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugGicIAAgCIAAgOIgBgCIAAAAIgBAAQjNAcBIjWIAAgBQiMAugchVIAAAAQgchWAlhSIAJgTQDkkeD5kQIADgCQBUgxAWAgQAXAhgQAkIAAABIgCAFQgWAvgNAVQiHDVj4E6IgBABQAAAhAqANIABAAIHIoWIABgBQBCgzAiAfIABABQAhAhgWA5IgBABQgrBMgyBNIgBABIgXAiIgBABIg8BVQhxCbiSCiIABAAIApAnIABABQB3ibBghyIA9hHQBIhRA5g4QA/g9AugfQBagPgOBlIgDAGQhJCDh3B6Ij8FRIgBABIAgArIAcgjIAOgRIA8hNIACgCQGloQAwA6IABACIABABIABABQBNAtkBFWIgBACIkkF/IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_22.setTransform(62.1,144);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAvgFidIAAgBIgBgPIgBgBIAAgBIgBAAQjMAdBIjXIgBgBQiMAugchVIAAAAQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAigPAkIAAAAIgCAFQgXAvgMAVQiIDVj3E7IgBABQgBAhAqAMIABAAIHIoWIABgBQBCgzAiAgIABABQAhAggVA6IgBABQgrBLgzBOIgBABIgWAiIgBABIg8BUQhxCciSChIAAABIApAnIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAAAAIAgArIAbgjIAOgRIA8hNIACgCQGloQAwA6IABACIABABIABABQBNAtkBFXIgBACIkkF+IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_23.setTransform(61.7,143.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugFicIAAgBIgBgPIgBgBIAAgBIgBAAQjMAdBIjXIgBgBQiMAugchVIAAAAQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAlIAAAAIgCAFQgXAvgMAVQiIDVj3E7IgBABQgBAgAqANIABAAIHIoWIABgBQBCgzAiAgIABABQAhAggVA6IgBABQgrBLgzBOIgBABIgWAiIgBABIg8BUQhxCbiSCiIAAABIApAnIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA9hNIACgCQGkoRAwA7IABACIABABIACABQBMAtkBFXIgBACIkkF+IgBABQhBAqgsAAQhUAAgSiOg");
	this.shape_24.setTransform(61.4,143.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAvgFieIAAgBIgBgOIgBgCIAAAAIgBAAQjMAdBHjXIAAAAQiMAtgchVQgchWAlhRIAJgUQDkkeD6kQIACgCQBUgxAXAgQAWAigPAkIAAAAIgCAGQgXAugMAVQiIDVj4E7IAAABQgBAgAqANIABAAIHIoWIABgBQBCgzAiAfIABABQAhAhgWA5IgBACQgrBLgyBOIgBABIgXAhIgBACIg8BUQhwCbiSCiIApAoIABAAQB3ibBghyIA+hGQBHhSA6g3QA/g+AugfQBagPgOBmIgDAGQhKCCh3B7Ij8FQIAAABIAgArIAbgjIAOgRIA8hNIACgCQGloRAwA7IABACIABABIABABQBNAukBFWIgBABIkkF/IgBABQhBApgsAAQhTAAgTiNg");
	this.shape_25.setTransform(61.1,143.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugFicIAAgBIgBgPIgBgBIAAgBIgBAAQjMAdBIjXIgBgBQiMAugchVIAAAAQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAlIAAAAIgCAFQgXAvgMAVQiIDVj3E7IgBABQgBAgAqANIABAAIHIoWIABgBQBCgzAiAgIABABQAhAggVA6IgBABQgrBLgzBOIgBABIgWAiIgBABIg8BUQhxCbiSCiIAAABIApAnIABAAQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA8hNIACgCQGmoRAvA7IABACIABABIABABQBNAukBFWIgBACIkkF+IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_26.setTransform(60.8,143);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAvgFidIAAgBIgBgPIgBgBIAAgBIgBAAQjMAdBHjXIAAAAQiMAugchWQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAkIAAABIgCAFQgXAugMAWQiIDUj4E7IAAABQgBAhAqANIABgBIHIoWIABgBQBCgzAiAgIABABQAhAggWA6IgBABQgrBLgyBOIgBABIgXAiIgBABIg8BUQhxCciRCiIApAnIABAAQB3ibBghyIA+hGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAAAAIAgAsIAbgjIAOgSIA8hNIACgCQGmoRAvA7IABACIABABIABABQBNAukBFWIgBACIkkF+IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_27.setTransform(60.5,142.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugFidIAAgBIgBgPIgBgBIAAAAIgBAAQjMAcBIjXIgBAAQiMAugchVQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAkIAAABIgCAFQgXAvgMAVQiIDVj3E6IgBABQgBAhAqANIABAAIHIoWIABgBQBCgzAiAfIABABQAhAhgVA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BVQhxCbiSCiIApAnIABABQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA9hNIACgCQGloRAvA7IACACIABABIABABQBMAukBFWIgBACIkkF+IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_28.setTransform(60.3,142.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugFidIAAgBIgBgPIgBgBIAAAAIgBAAQjMAcBIjXIgBAAQiMAugchVQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAkIAAABIgCAFQgXAvgMAVQiIDVj3E6IgBABQgBAhAqANIABAAIHIoWIABgBQBCgzAiAfIABABQAhAhgVA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BVQhxCbiSCiIApAnIABABQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA8hNIACgCQGmoRAvA7IABACIABABIABABQBNAukBFWIgBACIkkF+IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_29.setTransform(60.1,142.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugFidIAAgBIgBgPIgBgBIAAAAIgBAAQjMAcBIjXIgBAAQiMAugchVQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAkIAAABIgCAFQgXAvgMAVQiIDVj3E6IgBABQgBAhAqANIABAAIHIoWIABgBQBCgzAiAfIABABQAhAhgVA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BVQhxCbiSCiIApAnIABABQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA9hNIACgCQGloSAvA8IACACIABABIABABQBMAukBFWIgBACIkkF+IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_30.setTransform(59.7,142.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugFidIAAgBIgBgPIgBgBIAAAAIgBAAQjMAcBIjXIgBAAQiMAugchVQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAkIAAABIgCAFQgXAvgMAVQiIDVj3E6IgBABQgBAhAqANIABAAIHIoWIABgBQBCgzAiAfIABABQAhAhgVA5IgBABQgrBMgzBNIgBABIgWAiIgBABIg8BVQhxCbiSCiIApAnIABABQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAABIAgArIAbgjIAOgRIA9hNIACgCQGloSAvA8IACACIABABIABABQBMAukBFWIgBACIkkF+IgBABQhBAqgsAAQhUAAgSiOg");
	this.shape_31.setTransform(59.6,142.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01733B").s().p("AhtHvIgBAAQiiAugFidIAAgBIgBgPIgBgBIAAAAIgBAAQjMAcBHjXIAAAAQiMAugchVQgchWAlhSIAJgTQDkkeD6kQIACgCQBUgxAXAgQAWAhgPAkIAAABIgCAFQgXAvgMAVQiIDVj4E6IAAABQgBAhAqANIABAAIHIoWIABgBQBCgzAiAfIABABQAhAhgWA5IgBABQgrBMgyBNIgBABIgXAiIgBABIg8BVQhxCbiRCiIApAnIABABQB3ibBghyIA+hHQBHhRA6g4QA/g9AugfQBagPgOBlIgDAGQhKCDh3B6Ij8FRIAAAAIAAABIAgArIAbgjIAOgRIA8hNIACgCQGmoSAvA8IABACIABABIABABQBNAukBFWIgBACIkkF+IgBABQhBAqgsAAQhTAAgTiOg");
	this.shape_32.setTransform(59.5,142.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#01733B").s().p("AhtHvQijAvgFidIgBgQIgBgCQjOAeBJjYQiNAugchWQgchWAlhRIAJgUQDkkeD6kPIACgDQBUgxAXAhQAWAhgPAlIgCAFQgXAvgMAVQiIDVj4E7QgBAhArANIHJoXQBDg0AiAhQAiAhgXA6QgsBMgzBOIgXAjQiFDDi6DPIAqAoQCejOB3iGQBHhSA6g3QA/g+AugeQBagQgOBmIgDAGQhKCDh3B6Ij8FRIAAAAIAgAsIAbgjIBLhfQGnoTAvA8IACACQBRAqkEFbIklGAQhCArgsAAQhUAAgSiOg");
	this.shape_33.setTransform(59.4,141.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28,p:{x:60.3,y:142.6}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28,p:{x:59.9,y:142.3}}]},1).to({state:[{t:this.shape_30,p:{x:59.7,y:142.2}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_30,p:{x:59.4,y:142}}]},1).to({state:[{t:this.shape_30,p:{x:59.4,y:142}}]},1).to({state:[{t:this.shape_33}]},1).wait(1));

	// Layer_1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#01733B").s().p("AAtKKIgegeQg1g2h+haQhXhAiDhGIjeh5IAAAAIgVgMIgWAKQgZAKgrAXQgvAZgPAHQi4BThZARQg/ALgVgXIAAAAIgCgDQgVgfACgVQACgSADgHIABgBQAOgYAdgWQA5guBzgqIEVhgIARgGIAkgOIA1gWIAQgIQChhXDpjJQD0jUCAjAIOdAIQmtJnkYFRIglAtQinDHheBdQgvAugeAUQgCgGgZgag");
	this.shape_34.setTransform(142.1,66.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#01733B").s().p("ABNKlQgHgJgSgSIgdgfQgrgrhUhAIg0gmQhXhAiDhIIg2geIioheIAAAAIgVgMIgWAIIgQAHIgUAKIggAPIgeAPQgWANgKAEIgbALQilBIhTAPIgKABQg4AIgSgVIgBgBIgCgDIAAAAIgCgDQgSgdACgUQACgSADgGIABgCIACgEIACgCQAPgUAYgUIAMgIQA4goBoglIAkgNIDvhSIASgFIAjgOIAUgHIAhgNIAQgJQBbguBwhTQBahBBlhXQAZgUAWgVQDQi5BtisIADgEIFSACIJGAFIgDAFQhpCfhlCQQifDgiLC0QhlCFhZBrIglAtIgDAEIhKBXQhMBYg7A8IgBACIgvAxQgvAtgdAUIgDgDg");
	this.shape_35.setTransform(140.5,66.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#01733B").s().p("ABUKkQgHgKgSgRIgdgfQgsgrhShBIg1gmQhXhAiDhKIg2ggIinhfIAAAAIgVgMIgWAHQgIABgIAFIgUAJIggAPIgeAQIghAPIgbALQimBHhTAPIgLABQg3AHgTgVIAAAAIgCgDIgCgDQgTgeADgTQACgRADgIIABgBIACgEIACgDQAPgUAYgTIAMgIQA4goBngkIAlgNIDuhPIARgFIAjgNIAUgHIAhgOIAQgHQBbguBwhQQBbhABlhUIAugpQDQi3BoiuIADgFIFRADIJCAFIgDAEQhiCfhkCSQiaDciNC4QhkCDhZBsIglAsIgDAEIhKBWQhMBXg6A9IgBABIgwAxQgtAtgeAVIgDgDg");
	this.shape_36.setTransform(139,66.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#01733B").s().p("ABbKjQgHgJgSgSIgegeQgsgthRhAIg1gnQhWhAiEhNIg2gfIimhhIgBAAIgVgNIgVAFQgIACgIADIgUAKIghAPIgeAPIghAPIgbAMQioBFhTAOIgLACQg3AGgTgUIAAgBIgCgDIgCgDQgSgeADgTQACgSADgGIABgCIACgEIACgDQAOgTAZgTIAMgIQA4goBmgjIAlgMIDthNIARgGIAjgMIAUgHIAhgMIAQgIQBcgtBvhOQBcg/BjhSIAvgoQDRi2BhivIAEgEIFPACII/AFIgCAEQhcCehkCUQiVDYiOC8QhjCChZBrIgmAtIgDAEIhJBVQhLBWg7A9IgBACIgwAwQgsAsgfAWIgCgDg");
	this.shape_37.setTransform(137.6,66.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01733B").s().p("ABiKiIgZgbIgegeQgtguhQhAIg1gnQhWhBiEhOIg1ggIinhjIAAAAIgVgNIgVAEQgIABgIADIgUAKIghAPIgeAOIgiAQIgbALQipBFhTANIgLACQg4AGgSgVIgBAAIgCgEIgCgDQgRgeACgTQADgRADgHIABgCIACgEIACgCQAOgUAZgSIAMgJQA4gnBmgiIAkgMIDthLIARgFIAjgMIATgHIAhgMIAQgHQBdgsBuhMQBeg+BihQIAugnQDRi1BdiwIAEgEIFMACII9AEIgCAEQhVCdhjCXQiSDViPC+QhiCBhaBsIglAsIgDAEQglAtgkAoQhKBUg8A+IgBACIgvAwQgsArgfAXIgCgDg");
	this.shape_38.setTransform(136.1,66.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#01733B").s().p("ABoKhQgIgKgRgRIgegeQgvgvhOhAIg1gnQhVhBiEhQIg2ghIimhkIAAAAIgVgOIgVAEQgJAAgGADIgVAJIghAPIgfAOIghAPIgcALQipBEhUANIgLACQg4AGgSgVIgBgBIgCgDIgCgDQgRgeADgUQADgRACgGIABgCIADgEIABgCQAPgUAYgSIAMgIQA4gnBmgiIAkgLIDshJIARgGIAjgLIASgGIAigMIAPgHQBegrBthJQBfg9BhhPIAvgnQDRizBXixIAEgEIFMACII5AEIgBAEQhPCchjCZQiNDRiRDBQhhCAhZBsIglAsIgDAEIhJBVQhKBTg8A+IgBACIgvAwQgsAqgeAYIgDgDg");
	this.shape_39.setTransform(134.8,66.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#01733B").s().p("ABvKgQgIgKgRgQIgegfQgwgwhNg/Ig1goQhVhBiEhRIg2giIimhnIAAAAIgVgNIgVACQgIgBgHADIgVAJIghAPIgfAOIgiAPIgbALQirBDhUANIgLABQg4AGgSgVIgBAAIgCgEIgCgDQgRgeADgUQADgRADgGIABgCIACgEIACgCQAOgUAZgRIAMgJQA4gmBlghIAkgLIDrhHIARgGIAjgKIASgHQARgFARgGIAPgHQBegpBthIQBgg8BghNQAYgTAWgTQDTiyBRizIAFgDIFJACII3ADIgBAEQhJCchiCaQiJDPiSDEQhgB+haBtIglAsIgDADIhJBVQhIBSg9A+IgBACIgvAvQgrAqgfAZIgCgDg");
	this.shape_40.setTransform(133.4,66.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#01733B").s().p("AB1KgIgZgbIgegfQgxgxhMg+Ig1gpQhVhAiEhUIg2gjIilhoIAAAAIgVgNIgVABQgIgBgGACIgWAJIghAPIgfAOIgiAPIgcAKQirBDhVAMIgLABQg4AGgTgWIAAAAIgCgDIAAAAIgCgDQgRgfADgUQADgQADgHIABgCIACgDIACgCQAPgTAYgTIAMgIQA4glBlghIAkgLIDqhFIARgFIAigKIATgHIAhgLIAQgHQBfgoBshFQBgg8BghLIAugmQDTiwBMi0IAFgDIFIACII0ADIAAADQhECbhhCeQiFDKiUDHQheB+hbBsIglAsIgDAEIhIBTQhIBSg+A+IAAACIgwAvQgqAqgfAZIgCgCg");
	this.shape_41.setTransform(132.1,66.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#01733B").s().p("AB7KfIgZgaIgeggQgygxhLg/Ig1gpQhVhAiEhWIg2giIikhqIgBAAIgUgOIgVgBQgJgBgGACIgVAJIgiAPIgfANIgiAPIgcALQisBBhVAMIgLABQg5AGgSgWIAAAAIgDgDIgBgEQgRgeADgUQADgQADgHIABgCIACgDIACgDQAPgTAYgSIAMgIQA4glBlgfIAjgLIDqhEIAQgEIAjgLIASgFIAigMIAPgGQBggnBrhDQBig7BehKIAvglQDTivBHi1IAFgDIFHABIIxAEIAAADQg9CahhCfQiCDIiVDKQhdB8hbBtIglArIgDAEIhIBTQhHBQg+A/IgBACIgvAvQgqApgfAaIgCgCg");
	this.shape_42.setTransform(130.9,66.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#01733B").s().p("ACBKeIgZgbIgegfQgzgyhKg/Ig1goQhVhCiEhWIg2gkIikhrIgBAAIgUgNIgVgCQgJgCgFACIgVAIIgjAOIgfAPIgiAOIgcAKQitBBhWAMIgLABQg4AFgTgWIAAAAIgCgDIAAAAIgCgEQgRgfAEgTQADgQADgHIABgCIACgDIACgDQAPgSAYgSIAMgIQA4glBkgfIAkgKIDohCIARgEIAigLIATgFIAhgLIAPgHQBhglBqhCQBjg5BdhJQAZgRAWgTQDTiuBDi2IAGgDIFEABIIvAEIABACQg4CZhhChQh9DGiXDMQhcB7hbBuIglArIgDAEIhIBSQhHBPg+A/IgBACIgvAvQgpAogfAbIgCgCg");
	this.shape_43.setTransform(129.7,66.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#01733B").s().p("ACGKdQgJgKgQgQIgfgfQgzgzhJg/Ig1gpQhUhBiFhYIg2gkIikhtIAAAAQgQgLgEgEIgVgCQgJgCgFACIgVAIIgjAOIggAOIgiAOIgcAKQiuBAhWAMIgLABQg5AEgSgVIgDgDIAAgBIgBgDQgRggAEgTQADgPADgIIABgBIACgDIACgDQAPgTAYgRIAMgIQA4glBkgeIAjgKIDog/IARgGIAigJIASgHIAigKIAPgFQBhglBqhBQBjg4BdhHQAYgRAWgTQDUisA/i4IAFgDIFEACIIsADIABACQgzCZhgCiQh6DDiYDPQhbB6hcBuIgkArIgDAEQgkArgkAnQhGBOg/BAIAAABIgwAvQgoAogfAcIgCgDg");
	this.shape_44.setTransform(128.6,66.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#01733B").s().p("ACMKcIgagaIgegfQg0g0hIg/Ig2gpQhUhBiEhaIg2glIikhuIgUgOIgVgDQgJgDgEACIgWAIQgPAFgUAIIggAOIgjAOIgcALQiuA/hXALIgLABQg4AEgTgVIAAgBIgCgDIgCgDQgQggAEgTQADgQADgHIABgBIACgEIACgCQAPgTAYgRIAMgIQA4glBjgdIAkgKIDng+IAQgEIAjgLIASgEIAhgLIAPgGQBigjBpg/QBlg3BbhFQAZgSAWgTQDUirA6i4IAGgDIFCACIIqACIABACQguCZhfCkQh3DAiZDRQhaB5hcBuIgkArIgDAEIhIBSQhFBNhABAIAAABIgvAvQgoAngfAcIgCgCg");
	this.shape_45.setTransform(127.4,66.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#01733B").s().p("ACQKcIgZgaIgfgfQg0g1hIg/Ig1gpQhUhBiFhbIg2gmIijhvIAAAAIgUgPIgVgEQgIgDgFABIgWAIIgjAOIggANIgjAOIgcALQiwA+hWAKIgLABQg5AFgTgWIgCgDIAAgBIgCgDQgQgfAFgUQADgPADgHIABgCIACgDIABgDQAPgSAZgRIAMgIQA3gkBkgdIAjgKIDmg8IARgFIAigJIASgGIAhgKIAPgFQBigjBpg8QBmg3BbhEIAugkQDViqA2i5IAGgDIFAACIIoACIACACQgpCYhfCmQh0C9iaDTQhZB4hcBvIglArIgDADIhIBSQhEBMhABAIAAACIgvAvQgnAmggAdIgCgCg");
	this.shape_46.setTransform(126.4,66.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#01733B").s().p("ACVKcQgKgMgPgPIgfgfQg1g2hGg+Ig2gqQhThBiFhcIg3gmIiihxIgVgPIgUgFQgJgEgEACIgWAIIgjANIghANIgjAOIgcALQiwA9hXAKIgLABQg5AEgTgVIgCgEIAAAAIgCgDQgQggAFgUQADgPADgHIABgBIACgEIACgCQAPgSAYgRIAMgIQA4gkBjgdIAjgJIDmg7IAQgEIAigKIASgFIAhgJIAPgGQBjghBog7QBng3BahCIAugjQDVipAyi7IAGgCIFAABIIlACIACACQgkCXhfCoQhwC6ibDWQhZB4hcBuIgkArIgDAEIhIBRQhEBLhABAIgBACIgvAvQgmAmggAdIgCgBg");
	this.shape_47.setTransform(125.4,66.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#01733B").s().p("ACaKbIgagaIgeggQg2g2hGg+Ig2gqQhThCiFhdIg2gnIiihyIgBAAIgUgOIgUgGQgKgFgDACIgWAHIgkANIggAOIgjAOIgdAKQixA9hXAJIgLABQg5AEgSgVIgBAAIgCgEIAAAAIgCgDQgPggAEgUQAEgPADgHIABgCIACgDIABgCQAPgSAZgRIAMgIQA3gjBjgcIAjgKIDlg5IARgEIAigKIASgFIAhgJIAPgFQBjghBog5QBng2BZhBQAYgRAWgSQDWioAui7IAGgCIE/ABIIjACIADACQghCWheCpQhtC4idDYQhXB3hdBvIgkAqIgDAEQgjApgkAoQhEBKhABAIgBACIgvAvIhGBDIgBgBg");
	this.shape_48.setTransform(124.4,66.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#01733B").s().p("ACeKaIgZgZIgfggQg3g3hEg+Ig2grQhThBiFheIg3goIihhzIgBAAIgUgOIgUgHQgJgFgEABIgWAHIgkAOIghAMIgjAPIgcAKQiyA8hXAJIgLABQg6AEgSgVIgCgFIgCgDQgQggAFgUQAEgOADgHIABgCIACgEIABgCQAPgSAZgRIALgHQA4gjBjgcIAigJIDlg4IARgEIAhgJIASgFIAigJIAOgFQBkggBng4QBog1BZg/QAYgRAWgSQDWioAqi8IAHgCIE9ABIIiADIACABQgcCWheCqQhqC3idDaQhXB1hdBvIgkArIgDADQgjApgkAoQhDBJhBBBIAAACIgvAuQgmAlggAfIgCgCg");
	this.shape_49.setTransform(123.5,66.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#01733B").s().p("ACiKaIgZgbIgfgfQg3g3hEg/Ig2gqQhThCiFhfIg3goIihh0IgUgPIgVgIQgJgFgDABIgWAHIgkANIgiANIgjAOIgcAKQiyA8hYAJIgLABQg6ADgSgVIgDgEIAAAAIgBgDQgQghAFgUQAEgOADgHIABgCIACgDIABgCQAPgSAZgRIAMgHQA3gjBjgbIAigKIDkg2IARgEIAigJIARgFIAigIIAOgFQBkgfBng3QBpg0BYg/IAugiQDWimAni9IAHgCIE8ABIIgACIADABQgYCWheCrQhnC0ifDcQhWB1hdBvIgkArIgDADQgjApgkAnQhCBJhCBBIAAACIgvAuIhFBEIgCgBg");
	this.shape_50.setTransform(122.6,66.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#01733B").s().p("ACmKZIgZgaIgfgfQg4g5hDg9Ig2grQhThCiFhgIg3goIihh2IAAAAIgUgPIgUgIQgKgGgDABIgWAHIgkANIghANIgkAOIgcAKQizA7hYAIIgLABQg6ADgSgVIAAAAIgCgDIAAgBIgCgDQgQggAGgUQADgPAEgHIABgCIABgCIACgCQAPgTAYgQIAMgIQA4giBigbIAigJIDkg1IAQgEIAigJIASgFIAhgIIAOgEQBlgfBmg2QBqgzBXg9QAYgRAWgSQDXikAji+IAHgCIE7ABIIeABIADACQgUCUhdCuQhkCxigDeQhVB0heBvIgkArIgDADIhHBQQhBBJhCBAIAAACIgvAvIhFBDIgCgBg");
	this.shape_51.setTransform(121.8,66.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#01733B").s().p("ACqKZIgagaIgegfQg5g6hCg9Ig2grQhThCiFhhIg3gqIihh2IgUgPIgUgJQgKgGgCABIgWAHIglANIghAMIgkAOIgdAKQizA6hYAJIgLABQg6ADgSgVIgDgFIgBgCQgPgiAFgTIAHgVIABgCIACgDIABgCQAPgTAYgQIAMgHQA4gjBigaIAigJIDjgzIARgFIAhgIIASgEIAhgIIAPgFQBkgeBng0QBpgzBXg8IAvgiQDXilAgi+IAHgCIE6ACIIcABIAEABQgRCUhdCvQhiCvihDgQhUB0hdBvIgkAqIgDADIhHBQQhCBIhCBAIAAADIgvAuIhEBDIgCAAg");
	this.shape_52.setTransform(121,66.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#01733B").s().p("ACuKZIgagaIgfggQg5g5hCg+Ig2grQhShCiGhjIg2gpIihh3IAAAAIgUgPIgUgKQgKgGgCAAIgWAHIglANIgiANIgjANIgdAKQi0A6hYAIIgMABQg5ADgSgWIgBAAIgCgDIAAgBIgCgDQgPghAGgUQADgOAEgGIABgCIABgDIACgCQAPgSAYgRIAMgHQA4giBhgaIAjgIIDig0IARgDIAhgJIASgEIAhgIIAOgEQBmgdBlgzQBrgzBWg7IAvghQDXikAdjAIAHgBIE5ABIIbABIAEABQgNCUhdCwQhgCuihDhQhUBzheBwIgkAqIgDADQgiAoglAoQhABGhDBBIAAACIgvAuIhEBEIgBAAIAAAAg");
	this.shape_53.setTransform(120.2,66);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01733B").s().p("ACxKYIgagaIgfgfQg5g6hCg+Ig2grQhShCiFhkIg3gpIigh5IgUgPIgUgKQgKgHgCABIgXAHQgPAEgVAIIgiANIgkANIgdAKQi0A5hZAIIgLABQg6ADgSgVIAAgBIgDgDIAAgBIgBgDQgPghAFgUIAHgUIABgCIACgDIABgCQAQgSAYgQIAMgIQA3ghBigZIAigJIDigzIARgDIAhgIIASgEIAhgIIAOgEQBmgdBlgyQBrgyBWg6QAYgQAWgRQDYijAajAIAHgBIE5AAIIZABIAEABQgKCUhcCxQheCsiiDjQhTByheBwIgkAqIgDADIhHBQQhABFhDBBIAAADIgvAuIhEBDIgBAAg");
	this.shape_54.setTransform(119.5,66);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#01733B").s().p("AC0KYIgagaIgfggQg6g6hBg+Ig2grQhShCiFhlIg3gpIigh6IgUgPIgUgLQgKgHgCABIgWAGIglANIgiAMIgkANIgdALQi1A4hZAIIgLABQg6ADgSgWIAAAAIgCgEIAAAAIgCgDQgPghAGgUIAHgVIABgCIACgDIABgCQAPgSAZgQIALgHQA4giBhgYIAigIIDigyIAQgEIAigIIARgEIAhgIIAPgDQBmgcBlgxQBrgyBVg5IAvghQDYiiAXjBIAIgBIE3ABIIYABIAEABQgHCThcCyQhbCqijDkQhTByheBwIgkAqIgDADQgiAogkAnQhABGhDBBIAAACIgvAuIhEBEIgBAAg");
	this.shape_55.setTransform(118.9,66);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#01733B").s().p("AC3KXIgagaIgfgfQg6g7hBg+Ig1grQhShCiGhlIg3grIigh6IgTgPIgUgMQgKgHgCABIgXAGIglAMIgiANIgkANIgdAKQi1A4hZAIIgLABQg6ADgSgWIgBAAIgCgEIAAgBIgCgDQgOghAGgUQADgNAEgHIABgCIABgDIABgCQAQgSAYgQIAMgHQA3ghBigYIAigIIDhgyIAQgDIAigIIARgEIAhgHIAPgEQBmgcBlgvQBsgxBUg5QAZgQAWgRQDYihAVjCIAHAAIE3AAIIWABIAFABQgECThcCyQhZCpikDmQhSBxheBwIgkAqIgDADQgiAogkAnQhABFhDBBIAAADIgvAuIhEBDIAAAAIgBAAg");
	this.shape_56.setTransform(118.2,66);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#01733B").s().p("ACgJ8IgfgfQg7g7hAg+Ig2gsQhRhBiGhmIg3grIigh7IgTgPIgUgNQgKgGgCgBIgWAHIgmANIgiAMIgkAMIgdALQi1A3haAIIgLABQg6ADgSgWIAAgBIgDgDIAAgBIgBgCQgPgiAGgUQAEgOADgGIABgCIACgDIABgCQAPgSAZgQIALgHQA4ghBhgXIAigJIDhgwIAQgEIAigIIARgDIAhgHIAOgEQBngbBkgvQBtgxBUg3IAvghQDYihATjBIAHgBIE2ABIIVAAIAFABQgBCShcC0QhYCnikDoQhRBwhfBwIgjAqIgDAEIhHBOQg/BEhEBBIAAADIguAuIhEBEIgBAAIgagbg");
	this.shape_57.setTransform(117.6,66.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01733B").s().p("ACiJ8IgfgfQg7g8hAg+Ig1gsQhShBiGhnIg3grIifh8IgUgPIgUgMQgKgIgBAAIgXAHIglALIgjANIgkANIgdAKQi2A4hZAHIgMAAQg6ADgSgWIAAAAIgCgDIAAgBIgCgDQgOghAGgVIAHgUIABgBIACgEIABgCQAPgRAYgQIAMgHQA4ghBggYIAigIIDhgvIAQgDIAigIIARgDIAhgIIAOgEQBngaBkguQBtgwBUg3QAZgQAWgRQDYifARjDIAHAAIE2AAIIUAAIAFABQABCShbC0QhXCnilDoQhQBvhfByIgkApIgDAEQgiAngkAnQg/BEhEBBIAAACIgvAuIhDBEIgBABIgagbg");
	this.shape_58.setTransform(117.1,66.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#01733B").s().p("AClJ8IgfgfQg8g8hAg+Ig1gsQhShCiFhnIg3grIigh8IgTgQIgUgNIgLgIIgXAHIgmAMIgiAMIgkANIgdAKQi3A3hZAHIgMABQg6ACgSgWIgCgEIgCgDQgOgiAGgTIAHgUIABgCIACgEIABgBQAPgSAYgQIAMgHQA4ghBggXIAigIIDhguIAQgEIAhgHIARgEIAhgHIAPgEQBngZBkguQBtgvBTg2QAZgQAWgRQDYigAPjDIAIAAIE1AAIITABIAFAAQADCShbC1QhUClimDqQhQBvhfBxIgkAqIgDADQgiAngkAnQg/BDhEBCIAAACIguAuIhDBEIgCAAIgZgag");
	this.shape_59.setTransform(116.6,66);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#01733B").s().p("ACnJ8IgfggIh8h6Ig1gsQhRhCiGhoIg3grIifh9IgUgPIgUgOIgLgIIgXAGIglAMIgjANIgkAMIgdAKQi3A3haAHIgLABQg6ADgSgXIgDgDIAAgBIgBgDQgPgiAGgUQAEgNAEgHIABgBIABgDIABgCQAQgSAYgPIAMgIQA3gfBhgYIAigIIDgguIAQgEIAhgHIASgDIAhgIIAOgDQBngaBkgsQBtgvBUg1QAYgQAWgRQDZifANjDIAHgBIE1AAIISABIAFAAQAGCRhbC3QhTCkinDqQhPBvhfBxIgkApIgDAEQgiAmgkAoQg/BDhEBBIAAACIguAuIhDBFIgBAAIgagag");
	this.shape_60.setTransform(116.2,66.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#01733B").s().p("ACpJ7IgfggIh8h5Ig1gtQhRhBiGhpIg3gsIifh9IgUgPIgUgOIgLgJIgXAHIglALIgjANIgkANIgdAKQi3A2haAHIgMABQg6ACgSgWIgCgEIAAgBIgCgCQgOgiAGgUQAEgNADgHIABgCIACgDIABgBQAPgSAZgQIALgHQA4gfBggYIAigIIDgguIAQgDIAhgHIASgDIAhgIIAOgCQBngaBkgsQBugvBTg0IAughQDZieALjEIAIAAIE0AAIIRAAIAFAAQAICShbC2QhSCjimDsQhQBuhfBxIgkApIgDAEQghAmglAoQg+BDhEBBIAAACIgvAuIhCBEIgCABIgZgbg");
	this.shape_61.setTransform(115.8,66.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#01733B").s().p("ACqJ7IgfggIh7h5Ig1gtQhShCiGhpIg3gsIifh+IgTgQIgUgNIgLgIIgXAGIgmALIgiAMIglANIgdAKQi3A2haAHIgLABQg7ACgSgWIgCgEIAAAAIgCgDQgOgiAGgUQAEgOAEgGIABgCIABgDIABgBQAQgSAYgQIAMgHQA3ggBhgWIAhgJIDggtIAQgCIAhgIIARgDIAhgHIAOgEQBogYBjgrQBvgvBSg0IAvghQDZieAKjEIAIAAIEzAAIIQAAIAGAAQAJCRhbC4QhQChinDtQhQBuhfBxIgjApIgDAEQgiAmglAnQg9BDhFBCIAAACIguAuIhDBEIgBABIgagbg");
	this.shape_62.setTransform(115.4,66.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#01733B").s().p("ACrJ7IgfggIh7h6Ig1gsQhRhCiGhqIg3gsIifh+IgUgQIgTgOIgLgJIgXAHIgmALIgjAMIgkANIgeAKQi3A2haAHIgMAAQg6ACgSgVIgCgEIAAgBIgCgDQgOgiAGgUQAEgNAEgGIABgCIABgDIABgCQAQgSAYgPIAMgHQA3ggBggXIAigHIDggtIAQgDIAhgHIARgEIAhgGIAOgEQBogYBjgrQBvguBSg0IAvggQDZieAIjFIAIAAIEzAAIIQAAIAFAAQALCShaC3QhQCiioDsQhOBuhgBxIgjAqIgDADQgiAngkAnQg+BChFBCIAAACIguAuIhDBEIgBAAIgagag");
	this.shape_63.setTransform(115.1,66);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#01733B").s().p("ACtJ7IgfggIh7h6Ig2gtQhRhCiGhpIg3gtIieh+IgUgQIgUgPIgLgJIgXAGIglAMIgjANIglAMIgdAKQi4A2haAGIgLABQg7ACgSgWIgCgEIAAgBIgCgDQgOgiAGgUQAEgMAEgHIABgCIABgDIABgCQAQgRAYgQIAMgHQA3gfBhgXIAhgHIDggsIAQgEIAhgHIARgDIAhgHIAOgDQBogYBjgqQBvgvBSgzQAYgQAWgRQDaidAHjFIAIAAIEzAAIIPAAIAFAAQAMCShaC4QhPCginDtQhPBuhfBxIgkAqIgDADQgiAmgkAnQg+BChEBCIAAACIgvAuIhCBEIgBABIgagag");
	this.shape_64.setTransform(114.8,66.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#01733B").s().p("ACuJ7IgfggIh7h7Ig2gsIjXisIg3gsIifh/IgTgQIgUgQIgLgIIgXAGIgmALIgjANIgkAMIgdAKQi4A1haAIIgMAAQg6ACgSgWIgDgEIAAgBIgBgCQgOgjAGgTIAHgUIABgCIACgDIABgBQAQgSAYgQIAMgHQA3gfBggXIAigIIDfgrIAQgDIAhgHIARgEIAhgGIAOgDQBogYBjgqQBvguBSgzQAZgQAWgQQDZieAHjFIAIAAIEyAAIIOAAIAGAAQANCRhaC5QhOCfioDvQhPBthfByIgjApIgDADQgiAmglAnQg9BChFBCIAAACIguAuIhCBEIgBABIgagag");
	this.shape_65.setTransform(114.6,66.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#01733B").s().p("ACvJ7IgfghIh7h6Ig2gsIjXitIg3gsIifh/IgTgQIgUgQIgLgJIgXAHIgmALIgjAMIgkANIgdAKQi4A1hbAHIgLABQg7ACgSgXIgCgEIAAAAIgCgDQgOgiAHgUQAEgNADgHIABgCIACgCIABgCQAPgRAZgQIALgHQA4ggBggWIAhgIIDggrIAQgDIAhgHIARgEIAhgGIAOgDQBogYBjgpQBvgvBSgyQAYgQAWgQQDaidAGjGIAHAAIEyAAIIPAAIAGAAQANCRhaC5QhNCfioDvQhPBthfByIgkApIgDADQghAmglAnQg9BChFBCIAAACIguAuIhCBEIgBABIgagag");
	this.shape_66.setTransform(114.4,66.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#01733B").s().p("ACvJ7IgfghIh7h6Ig1gsIjXitIg3gtIifh/IgTgQIgUgPIgLgKIgXAHIgmAMIgjALIgkANIgeAKQi4A1haAGIgMABQg6ACgSgWIgCgEIAAAAIgCgEQgOghAGgVQAEgNAEgGIABgCIABgDIABgBQAQgSAYgPIAMgIQA3gfBggWIAigIIDfgrIAQgDIAhgHIARgDIAhgHIAOgCQBpgYBigpQBwgvBRgyQAZgQAWgQQDZidAFjGIAIAAIEyAAIIOAAIAGAAQAPCRhbC6QhNCeioDvQhOBthgByIgjApIgDADQgiAmgkAnQg9BChFBCIAAACIgvAtIhCBFIgBABIgagag");
	this.shape_67.setTransform(114.3,66.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#01733B").s().p("ACwJ7IgfghIh7h6Ig2gtQhRhCiGhqIg3gtIieiAIgUgPIgTgQIgLgJIgXAGIgmAMIgjALIglANIgdAKQi4A1hbAGIgLABQg7ACgSgWIgCgEIAAAAIgCgEQgOghAHgVQAEgNADgGIABgCIACgDIABgCQAPgRAZgPIALgHQA4gfBggXIAhgIIDfgrIAQgCIAhgIIARgCIAhgHIAOgDQBpgXBigqQBwguBRgyQAZgQAWgQQDZidAFjGIAIAAIEyAAIINAAIAGAAQAQCRhaC6QhNCeipDvQhOBthfByIgkApIgDADQghAmglAnQg9BChFBCIAAACIguAtIhCBFIgBABIgagag");
	this.shape_68.setTransform(114.2,66.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#01733B").s().p("ACwJ7IgfghIh7h6Ig2gtIjXitIg3gsIieiAIgUgQIgTgPIgLgJIgXAGIgmALIgjAMIglANIgdAKQi4A0hbAHIgLAAQg7ACgSgWIgCgDIAAgBIgCgDQgOgiAHgUQAEgNADgHIABgBIACgDIABgCQAPgRAZgQIALgHQA4gfBggWIAhgIIDfgrIAQgDIAhgHIARgDIAhgHIAOgCQBpgYBigpQBwguBRgyQAZgQAWgQQDZidAFjGIAIAAIEyAAIINAAIAGAAQAPCRhaC6QhMCeipDvQhOBthfByIgkApIgDADQghAmglAnQg9BChFBCIAAACIguAtIhCBFIgBABIgagag");
	this.shape_69.setTransform(114.1,66.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#01733B").s().p("AAWHgQhghQjki2IjQioIgXAGQgaAGgvARQgzASgPAFQjFA4hZADQhAACgPgZIAAgBIgCgDQgOgiAHgUQAGgTAEgFIABgCQATgWAggSQBBglB4gYIEhg4QCCgYB4gyQCRg8BfhEQDZidAFjGIE5AAIIUAAQAPCRhaC6QhMCeipDvQhdCCh3CJQghAnglAmQg8BChGBBIAAADQg3A1g6A+g");
	this.shape_70.setTransform(114.1,66.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,-2,239.7,220.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.dispatchEvent('stopMiddle');
	}
	this.frame_196 = function() {
		this.stop();
		this.dispatchEvent('playEnd');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(157).call(this.frame_196).wait(4));

	// Layer_1
	this.instance = new lib.hand1();
	this.instance.parent = this;
	this.instance.setTransform(269.1,-108.2,1,1,0,0,0,109.4,102.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[269,-108.1,204.3,19.6,108.8,102.7]}},35,cjs.Ease.quadOut).wait(164));

	// Layer_3
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-207.9,-169.5,1,1,0,0,0,118,103.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).to({guide:{path:[-207.8,-169.4,-122.6,-13.2,21.4,104.4]}},36,cjs.Ease.quadOut).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_219 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// Layer_3
	this.anibox = new lib.Symbol1();
	this.anibox.name = "anibox";
	this.anibox.parent = this;
	this.anibox.setTransform(302.8,101.6,1,1,0,0,0,109.4,102.8);

	this.timeline.addTween(cjs.Tween.get(this.anibox).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,125,970,250);
// library properties:
lib.properties = {
	id: '52492F5A9F3B4197A277DD800299CC4E',
	width: 550,
	height: 250,
	fps: 40,
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
an.compositions['52492F5A9F3B4197A277DD800299CC4E'] = {
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


AdobeAn[5] = an;
})(createjs,{});
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


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#007338").ss(2.5,1,1).p("AAAEVQACgCABgCIgDABIAAADIACJZAgCttIACR/");
	this.shape.setTransform(0.3,87.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1.2,-1.2,3.2,178), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#007338").ss(2.5,1,1).p("AC2JfQAnAKAcgBQAFgBAFAAQAfgFAggQQAggRBdgeIsYyKQhMC3gUB+QgKA7ALA6QAIArAhAdQCsBkAXBLQAGATABAaQAAACAAACQAAAfgQAuQgGAQgKAoQgKAkAVAsQAGANAPAKQAdASBAAIQA7AIARAeQA/CTCQA1");
	this.shape.setTransform(44.7,61.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1.2,-1.2,91.9,125.7), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#007338").ss(2.5,1,1).p("AGNoDIgBAGQANBoAABeQAABngPBcQAAAEgBAFQgLA8gQA2QgCAGgCAFQgaBSgoBGQgPAZgQAYQgBABgCACQghA1gnAqQgWAYgaAVIAFAAABghuQgVAbgUAbQgJALgJALQgPATgOASQgCACgCACQgZAhgaAiQgRAVgRAWQgNAQgMAPQgIAKgIAKQgMAQgNAQQg9BLg9BLIGbAMABghuIEpADAGMn9QhIBjhLBjQgmAzgnAzQgmAygmAxAkSFeIAFAAQgMAOgLAOQgGAIgHAHQgzA/g0A+QA1gBAygDQAHgBAGAAQBNgHBEgOQANgDAMgDQBmgZBNgqQAqgXAkgcQAEgDADgDAhRB1IGRAAAGSoFQgDAEgDAE");
	this.shape.setTransform(40.9,51.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-1.2,-1.2,84.4,106.1), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#007338").ss(2.5,1,1).p("AkblTQAED6C7DgQACACABACQCYDCDdAHg");
	this.shape.setTransform(28.4,34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1.2,-1.2,59.3,70.5), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#007338").ss(2.5,1,1).p("AE6lkQgKBvgZBvQgKA2gXAyQgUArgrAbQgSAMgTAJQgZAMgcAGQAQBXgtA7QgSANgXANQhsA7jkAvg");
	this.shape.setTransform(31.4,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1.2,-1.2,65.4,73.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#724D31").ss(2.5,1,1).p("AgbhxQAqA3gRA+QgFBJAvApABUgTQANAygQAqQgQArgjAIQgiAJghgfQghgegNgzQgMgzAPgqQAQgqAjgJQAigIAhAeQAiAfAMAzg");
	this.shape.setTransform(8.9,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1.2,-1.2,20.4,27.7), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7EF3BC").ss(4,1,1).p("ACmjDQh/CblrGxQETguBkh/QBmiAAOgYQC1kugbieQgcAqh/Cbg");
	this.shape.setTransform(32.5,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-2,-2,68.9,82.6), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7EF3BC").ss(4,1,1).p("AkcgjQAgBGA3AWQA4AXAOANQAOANABAgQABAgADAOQALA4ApAaQDIB6DQALIq/sdQALDJA4Cig");
	this.shape.setTransform(35.2,39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-2,-2,74.3,83.8), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7EF3BC").ss(4,1,1).p("Am3pMIABAGIIoLLIFVG5Am5iWIFWAMAm8iWIADAAQAYCWBACBQBKCVCAB2IHIgKAlhCBIHTAEAiXGMQBVBPBsBBQAjAVBrAUQBrATCkgaQABAAABAAAm2pGQgjDrAgDF");
	this.shape.setTransform(45.7,58.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-2,-2,95.5,121.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7EF3BC").ss(4,1,1).p("AGWq5QCbF/gmBiQgBADgBAEQgJAihWBHQgWASg+AyQg/AwgcAxQgeAwA0B9QAbBAgPAoQgHARgOANQgpAlgsAEQgGAAgGAAQglgBgvAWQgRAIgcAdQggAjhcBsQhcBslfgYg");
	this.shape.setTransform(53,69.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-2,-2,110,143.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7EF3BC").ss(4,1,1).p("AAAqRIAAUj");
	this.shape.setTransform(0,65.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-2,-2,4,135.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(9,12.6,0.045,0.045,0,0,0,9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:12.6,scaleX:1.1,scaleY:1.1},14,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},4,cjs.Ease.none).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,12,0.9,1.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// Layer_3
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(77.8,28.8,1,1,0,0,0,9,12.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(29));

	// Layer_2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99,43.2,1,1,57.5,0,0,9,12.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).wait(26));

	// Layer_4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(134.5,123.4,0.996,0.996,0,5.3,-174.7,9.1,12.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(42));

	// Layer_5
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(113.2,138.1,0.998,0.998,0,-50.5,129.5,9.1,12.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).wait(40));

	// Layer_6
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(71.9,150.1,1,1,52.7,0,0,9.1,12.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).wait(53));

	// Layer_7
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(50.5,136.3,1,1,-0.3,0,0,9.2,12.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).wait(52));

	// Layer_9
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(91.4,221.3,0.093,0.093,0,0,0,1.1,139.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({regX:1,regY:139.3,scaleX:1,scaleY:1,x:91.3},24,cjs.Ease.quadOut).wait(50));

	// Layer_10
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(92.2,214.2,0.071,0.071,0,0,0,92,117.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({regX:92.2,scaleX:1,scaleY:1},24,cjs.Ease.quadOut).wait(43));

	// Layer_11
	this.instance_8 = new lib.Symbol7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(91.7,79.5,0.019,0.019,0,0,0,69.7,80);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({regY:79.4,scaleX:1,scaleY:1,y:79.4},23,cjs.Ease.quadOut).wait(31));

	// Layer_1
	this.instance_9 = new lib.Symbol8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(94.5,80.8,0.034,0.034,0,0,0,1.4,79.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({regX:1,regY:79.2,scaleX:1,scaleY:1,y:80.7},23,cjs.Ease.quadOut).wait(34));

	// Layer_8
	this.instance_10 = new lib.Symbol4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(92.4,212.3,1,0.02,0,0,0,-0.5,132.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:131.2,scaleY:1,y:212.2},21,cjs.Ease.quadOut).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.9,209.6,4,2.7);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(85).call(this.frame_85).wait(1));

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(104.7,25.6,0.868,0.868,0,5.3,-174.7,9.1,12.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(32));

	// Layer_3
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.1,38.3,0.87,0.87,0,-50.5,129.5,9.1,12.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).wait(31));

	// Layer_4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128.1,120.5,0.868,0.868,0,5.3,-174.7,9.1,12.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).wait(41));

	// Layer_5
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(109.6,133.2,0.87,0.87,0,-50.5,129.5,9.1,12.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).wait(43));

	// Layer_6
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(73.2,123.2,0.87,0.87,50.5,0,0,9.1,12.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).wait(31));

	// Layer_7
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(54.7,110.5,0.868,0.868,-5.3,0,0,9.1,12.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).wait(33));

	// Layer_8
	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(92.3,71.3,0.045,0.045,0,0,0,1.1,71.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).to({regX:0.8,scaleX:1,scaleY:1,x:92.2,y:71.2},15).wait(35));

	// Layer_9
	this.instance_7 = new lib.Symbol11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(90.7,70.7,0.054,0.054,0,0,0,56.9,68);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).to({scaleX:1,scaleY:1,y:70.6},15).wait(42));

	// Layer_10
	this.instance_8 = new lib.Symbol12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(91.4,188.3,0.024,0.024,0,0,0,0,103);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({regX:-0.1,regY:103.8,scaleX:1,scaleY:1},17,cjs.Ease.quadOut).wait(57));

	// Layer_11
	this.instance_9 = new lib.Symbol13();
	this.instance_9.parent = this;
	this.instance_9.setTransform(90,188.8,0.036,0.036,0,0,0,89.9,116.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({_off:false},0).to({regY:116,scaleX:1,scaleY:1,x:89.9},14,cjs.Ease.quadOut).wait(57));

	// Layer_12
	this.instance_10 = new lib.Symbol14();
	this.instance_10.parent = this;
	this.instance_10.setTransform(91.2,247.1,1,0.01,0,0,0,0.3,175.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:175.6,scaleY:1},24,cjs.Ease.quadOut).wait(62));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#007338").ss(2.5,1,1).p("AAAAAIABAA");
	this.shape.setTransform(89.5,189);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88.2,187.8,4.6,59.3);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_108 = function() {
		this.stop();
		this.dispatchEvent('playEnd');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(108).call(this.frame_108).wait(1));

	// Layer_4
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(275.7,140.3,1,1,0,0,0,86.7,124.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).wait(76));

	// Layer_2
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.2,155.8,1,1,0,0,0,98.2,110.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// Layer_1
	this.anibox = new lib.Symbol15();
	this.anibox.name = "anibox";
	this.anibox.parent = this;
	this.anibox.setTransform(14.5,10,1,1,0,0,0,14.5,10);

	this.timeline.addTween(cjs.Tween.get(this.anibox).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-370,125,970,250);
// library properties:
lib.properties = {
	id: '529A33B0094E46F283198F907DCCF8BC',
	width: 400,
	height: 250,
	fps: 40,
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
an.compositions['529A33B0094E46F283198F907DCCF8BC'] = {
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


AdobeAn[6] = an;
})(createjs,{});
