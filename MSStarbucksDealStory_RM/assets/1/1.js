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
(lib._1 = function(mode,startPosition,loop) {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;