(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,103);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1296,306);


(lib.house = function() {
	this.initialize(img.house);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1098,838);


(lib.rivers = function() {
	this.initialize(img.rivers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1094,63);


(lib.sea = function() {
	this.initialize(img.sea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1094,811);


(lib.ship = function() {
	this.initialize(img.ship);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,758,226);


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,277);// helper functions:

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


(lib.sun_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sun();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sun_1, new cjs.Rectangle(0,0,278,277), null);


(lib.ship_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ship();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ship_1, new cjs.Rectangle(0,0,758,226), null);


(lib.sea_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sea();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sea_1, new cjs.Rectangle(0,0,1094,811), null);


(lib.rivers_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rivers();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rivers_1, new cjs.Rectangle(0,0,1094,63), null);


(lib.house_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.house();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.house_1, new cjs.Rectangle(0,0,1098,838), null);


(lib.cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_1, new cjs.Rectangle(0,0,1296,306), null);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(0,0,286,103), null);


(lib.birdAnicopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag/hbQALgBAMAQQAXAfAGBQQADAjAGAXQAGgjACgbQAHhOAageQANgPAMAA");
	this.shape.setTransform(15.6,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag6hbQAJAAAKARQAUAgAIBOQADAiAGAXQAGgjADgbQAIhKAXggQALgQAKgB");
	this.shape_1.setTransform(15.5,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ag1hcQAHACAIASQARAiAIBKQAFAjAGAXQAGgkAEgaQAIhGAUgjQAKgRAIgD");
	this.shape_2.setTransform(15.6,-3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgwhdQAFAEAHASQAPAkAIBHQAFAjAGAXQAGgjAFgbQAKhDAQgkQAIgSAGgE");
	this.shape_3.setTransform(15.5,-3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgshdQAEAFAFATQAMAmAJBEQAGAiAGAYQAGgkAGgaQALhAAMgmQAHgTAEgG");
	this.shape_4.setTransform(15.6,-3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgnheQACAHAEAUQAJAnAKBBQAGAiAGAYQAHgkAGgaQALg7AKgoQAFgUADgI");
	this.shape_5.setTransform(15.5,-3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgiheQAAAIADAVQAFAqALA8QAHAiAGAZQAHgkAGgaQANg4AHgqQADgVABgK");
	this.shape_6.setTransform(15.6,-3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AgdheQgBAKABAVQACArALA6QAIAiAGAYQAHgkAIgaQANg0ADgsQACgWgBgL");
	this.shape_7.setTransform(15.5,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgYhfQgDALAAAXQgBAtAMA2QAJAiAGAZQAHglAIgZQAOgwAAgvQABgXgDgN");
	this.shape_8.setTransform(15.5,-3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgThgQgFANgCAXQgDAvANAzQAJAhAGAaQAHglAJgZQAPgtgDgvQgBgYgFgP");
	this.shape_9.setTransform(15.5,-3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgOhgQgHAOgDAYQgHAxAOAvQAKAiAGAZQAIglAJgZQAQgogGgyQgDgZgGgQ");
	this.shape_10.setTransform(15.5,-3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AgKhhQgIAQgFAZQgJAyAOAtQALAhAGAaQAIglAKgZQARglgKg0QgEgagIgS");
	this.shape_11.setTransform(15.5,-4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgVhZQgGANgDAUQgGAsALAiQAOAkAFATQACAIACAHQACgKADgJQAHgXAJgQQADgGACgGQANgegFgoQAAgFgBgFQgDgTgFgO");
	this.shape_12.setTransform(15.5,-3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AgghTQgFAOgCATQgCApANAeQAQAgAFASQADAIACAHQACgKADgJQAIgWAKgOQADgGADgFQAPgZgCgnQAAgEAAgFQgBgSgFgO");
	this.shape_13.setTransform(15.6,-2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgrhMQgEANAAASQABAmAPAaQASAdAGARQADAIABAHQADgJADgJQAJgVALgNQADgFAEgEQASgXAAgjQAAgFAAgEQABgSgEgN");
	this.shape_14.setTransform(15.6,-2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("Ag2hFQgDAMABARQAEAkASAXQATAZAHAQQADAIABAHQAEgKACgIQAKgUANgLQADgEAEgEQAUgUADghQABgEAAgEQACgRgDgO");
	this.shape_15.setTransform(15.7,-1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AhBg9QgCALACAQQAIAhAUASQAVAWAHAPQAEAIABAHQAEgJACgJQAKgSAPgKQADgDAEgEQAXgQAGgeQABgEABgEQADgQgCgO");
	this.shape_16.setTransform(15.8,-1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AhNg3QAAAMAEAOQAKAdAXARQAXASAHAOQAEAHABAHQAEgJADgIQALgRAPgIQAFgDAEgDQAZgNAJgcQACgEABgEQAFgPgCgN");
	this.shape_17.setTransform(15.8,-0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AhYgvQABALAGANQANAaAZAMQAZAPAIANQAEAHABAHQAEgIADgJQALgQARgGQAFgCAEgCQAcgKAMgZQACgEACgDQAGgPgBgN");
	this.shape_18.setTransform(15.9,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AhjgoQACAKAHAMQARAYAbAJQAbALAIAMQAFAGAAAIQAFgJADgIQAMgPASgEQAFgCAFgBQAegGAPgYQADgDACgEQAHgNABgO");
	this.shape_19.setTransform(15.9,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AhtghQACAJAJALQAUAVAeAFQAcAIAJAMQAEAGABAHQAFgIAEgIQAMgOATgDQAFgBAGgBQAhgDARgVQADgDACgDQAJgNACgN");
	this.shape_20.setTransform(16,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("Ah5gaQAEAJAKAKQAXASAhABQAeAFAJAKQAFAGAAAHQAFgIAFgIQANgMAUgCQAGAAAGAAQAjAAAUgSQADgDADgDQALgMABgN");
	this.shape_21.setTransform(16,1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AiEgTQAFAJAMAIQAXAQAmgDQAdgCAMANQAGAGAAAGIAKgPQAQgOAfAEQAsAEAYgWQAMgMADgM");
	this.shape_22.setTransform(16.1,2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AiEgPQAFAIANAHQAjAMAagDQAKgCAIABQAPgBAHAIQAGAHAAAHQAGgIADgIQALgJAQAAQAJAAALACQAcAEAVgHQAKgDAIgGQANgKAEgL");
	this.shape_23.setTransform(16,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AiEgLQAHAHAMAEQAlAKAZgFQAJgBAIgBQAPgDAHAJQAGAHAAAHQAFgIAEgHQALgKAPACQAJAAALAEQAaAEAWgEQAKgEAJgEQAMgJAFgJ");
	this.shape_24.setTransform(16,3.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AiEgHQAHAFANAEQAmAHAYgGQAKgDAHAAQAOgFAIAJQAFAGAAAIQAFgIAEgIQALgKAOAFQAIABALADQAaAGAWgDQALgCAJgEQAMgGAGgJ");
	this.shape_25.setTransform(15.9,4.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AiFgDQAIAEAOADQAnADAYgGQAKgDAGgCQAOgHAHAJQAFAHABAHQAFgIADgHQALgMAOAIQAHACAMAFQAYAFAYgBQAKgBAJgDQANgEAHgH");
	this.shape_26.setTransform(15.9,4.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AiFAFQAJADAOACQApABAWgIQAKgDAGgDQAOgKAHALQAFAGAAAIQAFgIADgIQALgMANAKQAHADAMAEQAXAHAYACQALAAAJgDQANgDAIgE");
	this.shape_27.setTransform(15.8,4.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AiFALQAKADANABQArgDAVgJQAKgEAGgEQANgMAIALQAEAHABAIQAEgJAEgHQAKgNAOAMQAGAEALAFQAVAIAaAEQALAAAJgBQANgCAJgD");
	this.shape_28.setTransform(15.8,4.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AiFARQALABANAAQAtgGAUgKQAJgEAGgFQANgOAHALQAFAIAAAHQAEgHAEgJQAKgNANAOQAGAFALAFQAUAJAaAGQALACAKAAQANgBAKgB");
	this.shape_29.setTransform(15.7,5.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AiGAXQAMAAAOgCQAugJATgLQAKgFAGgGQAMgQAHAMQAEAIABAHQADgHAFgJQAJgOANARQAFAFAMAHQASAJAcAIQAKACAKACQAOABALAA");
	this.shape_30.setTransform(15.7,5.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AiGAbQANgBAOgDQAvgMATgLQAJgHAFgGQANgTAGANQAEAIABAIQAEgIADgKQAKgOAMATQAFAHALAHQASAKAcAKQALADAKACQAOADAMAC");
	this.shape_31.setTransform(15.6,6.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AiGAfQAOgCAOgEQAxgPARgNQAJgHAFgIQAMgUAHANQAEAIABAJQADgJAEgJQAJgQAMAWQAFAHALAJQAQAKAdAMQALAEAKAEQAOAEANAD");
	this.shape_32.setTransform(15.6,6.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AiGAjQAWgEAZgKQAxgTANgXQAMgXAHANQADAHABALIAHgUQAJgPALAYQAJAUA0AXQAZAMAYAI");
	this.shape_33.setTransform(15.5,7.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AiCAkQAQgFATgJQA0gXAQgWQANgVAHANQAFALAAAFQAGgOACgEQAIgMAKAQQACACABABQAMATAvAXQAEACAEADQAUAKARAI");
	this.shape_34.setTransform(15.5,7.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("Ah9AlQANgHARgKQAvgZAUgUQANgSAHALQAGALAAAFQAHgOACgDQAIgMALAPQABABABACQAPAQArAYQAEADAEACQASAMAPAK");
	this.shape_35.setTransform(15.6,7.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("Ah5AlQALgIAPgMQAqgaAWgSQAOgQAHAKQAHAKABAFQAHgNACgDQAJgKAKAMQACABABACQATAOAmAZQAEADADADQARANAMAL");
	this.shape_36.setTransform(15.6,7.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("Ah1AmQAJgLANgMQAlgdAZgQQAOgNAJAJQAHAJABAFQAIgMACgDQAJgIALAJQABABACACQAVAMAiAaQAEADADADQAPAOAKAN");
	this.shape_37.setTransform(15.6,7.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AhwAmQAGgMAMgOQAggeAcgOQAOgKAJAHQAIAJABAFQAJgMACgCQAJgIALAIQACABABABQAYALAeAZQADAEADADQAOAQAHAO");
	this.shape_38.setTransform(15.5,8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AhsAnQADgOAKgPQAbghAggLQAPgIAJAGQAJAJABAEQAJgLADgBQAJgHALAGQACAAABABQAcAJAZAaQADAEACAEQAMAQAGAQ");
	this.shape_39.setTransform(15.6,8.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AhoAoQABgQAJgQQAWgjAigJQAPgFAKAFQAKAHABAFQAKgKADgCQAJgFALADQACAAACABQAeAHAVAcQACADADAEQAKASAEAR");
	this.shape_40.setTransform(15.6,8.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AhjAoQgBgRAGgSQANgkApgHQAVgEALAIQAFAEABAEIAIgHQALgIAQACQAoAEASAmQAJATAAAS");
	this.shape_41.setTransform(15.5,8.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AhpAnQABgQAGgRQAPgdAagKQAfgFAIADQAGACAFAEQAFAFABAEQADgEAEgEQAFgEAHgDQAGgCAHAAQAQgBAOAHQAUAKANAWQACAEACAEQAGAPACAP");
	this.shape_42.setTransform(15.5,7.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AhvAlQADgQAIgRQASgcAagJQAggDAIAFQAGADAEAFQAFAEABAFQADgEADgEQAFgGAGgDQAGgDAIgBQAPgDAPAGQAVAJAPAXQACAEADAEQAIAPACAO");
	this.shape_43.setTransform(15.4,7.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("Ah1AkQAFgQAJgRQAVgcAcgIQAgAAAIAHQAGADAEAGQAEAFAAAFQADgFAEgEQAEgGAGgFQAGgEAHgCQAPgEAQAFQAXAIAQAYQADADACAEQAKAPAEAO");
	this.shape_44.setTransform(15.3,6.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("Ah7AiQAHgQALgQQAZgdAbgGQAhADAIAIQAGAEADAHQADAFAAAFQAEgFADgFQAEgHAFgFQAGgFAGgDQAQgGARAFQAXAHATAYQADADADAEQAKAPAFAO");
	this.shape_45.setTransform(15.2,6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AiCAhQAKgPAMgQQAcgeAcgFQAjAGAHAJQAFAGADAHQACAFABAFQADgFADgFQAEgHAEgHQAFgFAHgEQAPgJATAFQAYAHAVAXQAEADACAEQAMAPAHAP");
	this.shape_46.setTransform(15.2,5.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AiIAgQAMgPAOgQQAfgdAdgEQAjAIAHALQAFAHADAHQACAFAAAGQADgGACgFQAEgHAEgIQAFgHAHgEQAPgLATAEQAaAGAXAYQADADAEAEQANAPAHAO");
	this.shape_47.setTransform(15.1,4.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AiOAfQAOgPAPgQQAjgdAdgDQAkALAHANQAFAHABAIQACAFABAGQACgFACgGQAEgIADgJQAFgHAGgGQAPgMAVADQAbAFAYAYQAEADAEAEQAOAPAJAO");
	this.shape_48.setTransform(15,4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AiUAeIAggeQAngeAdgBQAegCAOAeQAHANABAPIAKgeQAQgfAfAFQAgAEAfAeQAPAPAKAP");
	this.shape_49.setTransform(14.9,3.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AiOAXQAJgJAKgHQAygkAcABQAMABAKAFQALAIAIAPQAGAOABAPQAFgPAFgPQAHgOAKgHQAMgJAQABQAeABAeAcQARAOAIAL");
	this.shape_50.setTransform(14.9,2.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("AiIALQAJgIAKgFQAvgfAbAFQALABAJAGQALAIAIAPQAFAPACAOQAEgPAFgQQAHgOAJgHQALgJAPAAQAdgCAdAXQARAMAIAK");
	this.shape_51.setTransform(15,2.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AiDAAQAKgHAKgEQAtgZAZAIQALACAIAGQALAJAGAPQAGAOABAPQAFgQAEgQQAHgNAIgIQALgKAOgBQAbgGAcAUQARAKAJAJ");
	this.shape_52.setTransform(15,2.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("Ah9gJQAKgHAKgDQAsgUAXAMQAKACAIAHQAJAJAHAPQAFAPABAOQAFgQAEgQQAGgNAIgIQAKgLANgCQAZgJAbAQQASAIAIAI");
	this.shape_53.setTransform(15.1,2.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("Ah4gTQAKgGAKgBQAqgOAWAPQAJADAHAHQAJAKAGAOQAFAPACAOQAEgQAEgQQAFgNAIgJQAJgLAMgDQAYgNAaAMQASAGAIAH");
	this.shape_54.setTransform(15.1,2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("AhygdQAKgFAKAAQAogIAUASQAIAEAHAIQAIAKAFAOQAGAPABAOQAEgQAEgQQAGgNAHgKQAIgLAKgEQAWgRAaAJQARACAKAI");
	this.shape_55.setTransform(15.2,1.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AhsgmQAKgFAKACQAmgCASAVQAIAFAGAIQAHAKAFAPQAFAQABANQAEgQAEgQQAFgOAGgKQAIgLAKgGQAUgUAZAFQARAAAKAG");
	this.shape_56.setTransform(15.2,1.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AhmgtQAKgFAKAEQAkADARAZQAGAFAGAJQAHAKAEAPQAFAPABAOQAEgRAEgPQAEgPAGgKQAHgMAJgHQATgXAYABQARgCAJAF");
	this.shape_57.setTransform(15.2,0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("Ahhg0QALgFAKAGQAiAJAPAcQAGAGAFAIQAGAMAEAPQAFAPABANQAEgQADgQQAEgPAFgKQAGgNAJgIQARgbAXgCQARgFAKAF");
	this.shape_58.setTransform(15.3,0.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("Ahbg7QAKgEALAIQAgAOANAgQAFAGAFAIQAFANAEAPQAEAPACANQADgQADgQQAEgPAFgLQAFgNAHgJQAQgeAWgGQARgIAKAE");
	this.shape_59.setTransform(15.3,-0.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AhVhCQAKgDALAJQAeAVAMAiQAEAHADAJQAFAOADAOQAEAPADANQACgQADgQQAEgPAEgMQAEgNAHgKQAOgiAVgKQARgKAKAD");
	this.shape_60.setTransform(15.4,-0.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("AhPhIQAKgCALAKQAcAaAKAmQAEAHADAKQADAOAEAOQADAQADANQACgRADgQQADgPAEgMQADgOAGgLQAMgmAUgNQARgNALAD");
	this.shape_61.setTransform(15.4,-1.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AhKhOQAKgCAMAMQAaAgAJApQACAIADAKQADAPACAOQAEAQACAMQADgRACgPQADgQACgMQAEgQAEgLQALgpATgRQARgPALAB");
	this.shape_62.setTransform(15.5,-2.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("AhEhVQAKgBALAOQAZAlAGAsQADAJABALQACAPADAOQACAQADAMQADgRACgPQADgQACgNQACgQAEgMQAJgtASgVQARgSALAC");
	this.shape_63.setTransform(15.5,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-13.7,31.8,21.3);


(lib.birdAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiUAeIAggeQAngeAdgBQAegCAOAeQAHANABAPIAKgeQAQgfAfAFQAgAEAfAeQAPAPAKAP");
	this.shape.setTransform(14.9,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AiNATQAKgIAKgHQAxgjAbADQAMAAAKAGQALAIAIAPQAGAOABAPQAFgPAFgPQAHgOAKgIQALgIAQABQAeAAAdAaQASAOAIAL");
	this.shape_1.setTransform(14.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AiGAGQAKgHAKgFQAugdAaAHQALABAJAHQAKAIAHAPQAGAPACAOQAEgQAEgPQAIgOAJgHQAKgKAPAAQAbgEAdAVQARAMAJAJ");
	this.shape_2.setTransform(15,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Ah/gHQAKgHAKgCQAsgWAYALQAKACAIAHQAKAJAGAPQAFAPACAOQAEgQAFgQQAGgNAJgJQAJgKANgCQAagIAbARQASAIAJAJ");
	this.shape_3.setTransform(15.1,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ah4gTQAKgGAKgBQAqgOAWAPQAJADAHAHQAJAKAGAOQAFAPACAOQAEgQAEgQQAFgNAIgJQAJgLAMgDQAYgNAaAMQASAGAIAH");
	this.shape_4.setTransform(15.1,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AhwgfQAKgFAKABQAngHAUATQAIAEAGAIQAIAKAGAOQAFAQABANQAEgQAEgQQAFgOAHgJQAIgLALgFQAVgRAaAHQARACAJAH");
	this.shape_5.setTransform(15.2,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AhpgqQAKgFAKADQAlABASAXQAHAFAFAIQAHAKAFAPQAFAPABAOQAEgQAEgQQAFgPAGgJQAHgMAKgGQATgWAYADQASgBAJAG");
	this.shape_6.setTransform(15.2,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AhigzQAKgEALAFQAiAIAQAbQAFAGAFAIQAGALAFAPQAFAPABAOQAEgRADgPQAEgPAGgKQAGgNAIgHQASgbAXgBQASgEAJAF");
	this.shape_7.setTransform(15.3,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Ahbg7QAKgEALAIQAgAOANAgQAFAGAFAIQAFANAEAPQAEAPACANQADgQADgQQAEgPAFgLQAFgNAHgJQAQgeAWgGQARgIAKAE");
	this.shape_8.setTransform(15.3,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AhUhDQALgDALAJQAdAWALAkQAEAGAEAKQAEANAEAOQADAQADANQACgRADgPQAEgQAEgMQAEgNAGgKQANgjAVgLQARgLALAE");
	this.shape_9.setTransform(15.4,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AhNhLQALgCALALQAbAdAJAnQADAIADAKQADAOADAOQAEAQACANQADgRACgQQADgPADgNQAEgPAFgKQALgoAUgPQARgOALAC");
	this.shape_10.setTransform(15.4,-1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AhGhTQALgCALAOQAZAkAHArQACAJACALQACAPADAOQACAQADAMQADgRACgQQADgQACgMQADgQADgMQAKgsATgUQAQgRAMAB");
	this.shape_11.setTransform(15.5,-2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("Ag/hbQALgBAMAQQAXAfAGBQQADAjAGAXQAGgjACgbQAHhOAageQANgPAMAA");
	this.shape_12.setTransform(15.6,-3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("Ag4hcQAIACAJAQQATAiAIBMQAEAiAGAXQAGgjAEgbQAIhIAVghQALgRAJgB");
	this.shape_13.setTransform(15.6,-3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgyhcQAGADAIASQAOAjAJBIQAFAjAGAXQAGgjAEgbQAKhEARgjQAJgSAHgE");
	this.shape_14.setTransform(15.6,-3.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AgrhdQADAFAGATQAKAmAKBEQAGAiAGAYQAGgkAGgaQALg/AMgmQAGgUAFgG");
	this.shape_15.setTransform(15.6,-3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AglheQACAIADAUQAHApAKA+QAHAiAGAYQAHgkAGgaQAMg5AIgpQAFgUACgJ");
	this.shape_16.setTransform(15.6,-3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AgehfQgBAKABAVQADArAMA6QAHAiAGAZQAHgkAIgaQANg0AEgsQACgWgBgL");
	this.shape_17.setTransform(15.5,-3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AgXhfQgDALgBAXQgBAtAMA2QAJAiAGAZQAHglAJgZQAOgwgBguQAAgXgDgO");
	this.shape_18.setTransform(15.5,-3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AgQhgQgGAOgDAYQgFAvANAxQAKAiAGAZQAHgkAKgaQAPgqgFgxQgCgZgGgP");
	this.shape_19.setTransform(15.5,-3.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AgKhhQgIAQgFAZQgJAyAOAtQALAhAGAaQAIglAKgZQARglgKg0QgEgagIgS");
	this.shape_20.setTransform(15.5,-4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AgVhZQgGANgDAUQgGAsALAiQAOAkAFATQACAIACAHQACgKADgJQAHgXAJgQQADgGACgGQANgegFgoQAAgFgBgFQgDgTgFgO");
	this.shape_21.setTransform(15.5,-3.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AgghTQgFAOgCATQgCApANAeQAQAgAFASQADAIACAHQACgKADgJQAIgWAKgOQADgGADgFQAPgZgCgnQAAgEAAgFQgBgSgFgO");
	this.shape_22.setTransform(15.6,-2.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AgrhMQgEANAAASQABAmAPAaQASAdAGARQADAIABAHQADgJADgJQAJgVALgNQADgFAEgEQASgXAAgjQAAgFAAgEQABgSgEgN");
	this.shape_23.setTransform(15.6,-2.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("Ag2hFQgDAMABARQAEAkASAXQATAZAHAQQADAIABAHQAEgKACgIQAKgUANgLQADgEAEgEQAUgUADghQABgEAAgEQACgRgDgO");
	this.shape_24.setTransform(15.7,-1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AhBg9QgCALACAQQAIAhAUASQAVAWAHAPQAEAIABAHQAEgJACgJQAKgSAPgKQADgDAEgEQAXgQAGgeQABgEABgEQADgQgCgO");
	this.shape_25.setTransform(15.8,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AhNg3QAAAMAEAOQAKAdAXARQAXASAHAOQAEAHABAHQAEgJADgIQALgRAPgIQAFgDAEgDQAZgNAJgcQACgEABgEQAFgPgCgN");
	this.shape_26.setTransform(15.8,-0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AhYgvQABALAGANQANAaAZAMQAZAPAIANQAEAHABAHQAEgIADgJQALgQARgGQAFgCAEgCQAcgKAMgZQACgEACgDQAGgPgBgN");
	this.shape_27.setTransform(15.9,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AhjgoQACAKAHAMQARAYAbAJQAbALAIAMQAFAGAAAIQAFgJADgIQAMgPASgEQAFgCAFgBQAegGAPgYQADgDACgEQAHgNABgO");
	this.shape_28.setTransform(15.9,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AhtghQACAJAJALQAUAVAeAFQAcAIAJAMQAEAGABAHQAFgIAEgIQAMgOATgDQAFgBAGgBQAhgDARgVQADgDACgDQAJgNACgN");
	this.shape_29.setTransform(16,1.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("Ah5gaQAEAJAKAKQAXASAhABQAeAFAJAKQAFAGAAAHQAFgIAFgIQANgMAUgCQAGAAAGAAQAjAAAUgSQADgDADgDQALgMABgN");
	this.shape_30.setTransform(16,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AiEgTQAFAJAMAIQAXAQAmgDQAdgCAMANQAGAGAAAGIAKgPQAQgOAfAEQAsAEAYgWQAMgMADgM");
	this.shape_31.setTransform(16.1,2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AiEgPQAFAIANAHQAjAMAagDQAKgCAIABQAPgBAHAIQAGAHAAAHQAGgIADgIQALgJAQAAQAJAAALACQAcAEAVgHQAKgDAIgGQANgKAEgL");
	this.shape_32.setTransform(16,3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AiEgLQAHAHAMAEQAlAKAZgFQAJgBAIgBQAPgDAHAJQAGAHAAAHQAFgIAEgHQALgKAPACQAJAAALAEQAaAEAWgEQAKgEAJgEQAMgJAFgJ");
	this.shape_33.setTransform(16,3.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AiEgHQAHAFANAEQAmAHAYgGQAKgDAHAAQAOgFAIAJQAFAGAAAIQAFgIAEgIQALgKAOAFQAIABALADQAaAGAWgDQALgCAJgEQAMgGAGgJ");
	this.shape_34.setTransform(15.9,4.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AiFgDQAIAEAOADQAnADAYgGQAKgDAGgCQAOgHAHAJQAFAHABAHQAFgIADgHQALgMAOAIQAHACAMAFQAYAFAYgBQAKgBAJgDQANgEAHgH");
	this.shape_35.setTransform(15.9,4.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AiFAFQAJADAOACQApABAWgIQAKgDAGgDQAOgKAHALQAFAGAAAIQAFgIADgIQALgMANAKQAHADAMAEQAXAHAYACQALAAAJgDQANgDAIgE");
	this.shape_36.setTransform(15.8,4.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AiFALQAKADANABQArgDAVgJQAKgEAGgEQANgMAIALQAEAHABAIQAEgJAEgHQAKgNAOAMQAGAEALAFQAVAIAaAEQALAAAJgBQANgCAJgD");
	this.shape_37.setTransform(15.8,4.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AiFARQALABANAAQAtgGAUgKQAJgEAGgFQANgOAHALQAFAIAAAHQAEgHAEgJQAKgNANAOQAGAFALAFQAUAJAaAGQALACAKAAQANgBAKgB");
	this.shape_38.setTransform(15.7,5.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AiGAXQAMAAAOgCQAugJATgLQAKgFAGgGQAMgQAHAMQAEAIABAHQADgHAFgJQAJgOANARQAFAFAMAHQASAJAcAIQAKACAKACQAOABALAA");
	this.shape_39.setTransform(15.7,5.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AiGAbQANgBAOgDQAvgMATgLQAJgHAFgGQANgTAGANQAEAIABAIQAEgIADgKQAKgOAMATQAFAHALAHQASAKAcAKQALADAKACQAOADAMAC");
	this.shape_40.setTransform(15.6,6.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AiGAfQAOgCAOgEQAxgPARgNQAJgHAFgIQAMgUAHANQAEAIABAJQADgJAEgJQAJgQAMAWQAFAHALAJQAQAKAdAMQALAEAKAEQAOAEANAD");
	this.shape_41.setTransform(15.6,6.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AiGAjQAWgEAZgKQAxgTANgXQAMgXAHANQADAHABALIAHgUQAJgPALAYQAJAUA0AXQAZAMAYAI");
	this.shape_42.setTransform(15.5,7.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AiCAkQAQgFATgJQA0gXAQgWQANgVAHANQAFALAAAFQAGgOACgEQAIgMAKAQQACACABABQAMATAvAXQAEACAEADQAUAKARAI");
	this.shape_43.setTransform(15.5,7.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("Ah9AlQANgHARgKQAvgZAUgUQANgSAHALQAGALAAAFQAHgOACgDQAIgMALAPQABABABACQAPAQArAYQAEADAEACQASAMAPAK");
	this.shape_44.setTransform(15.6,7.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("Ah5AlQALgIAPgMQAqgaAWgSQAOgQAHAKQAHAKABAFQAHgNACgDQAJgKAKAMQACABABACQATAOAmAZQAEADADADQARANAMAL");
	this.shape_45.setTransform(15.6,7.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("Ah1AmQAJgLANgMQAlgdAZgQQAOgNAJAJQAHAJABAFQAIgMACgDQAJgIALAJQABABACACQAVAMAiAaQAEADADADQAPAOAKAN");
	this.shape_46.setTransform(15.6,7.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AhwAmQAGgMAMgOQAggeAcgOQAOgKAJAHQAIAJABAFQAJgMACgCQAJgIALAIQACABABABQAYALAeAZQADAEADADQAOAQAHAO");
	this.shape_47.setTransform(15.5,8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AhsAnQADgOAKgPQAbghAggLQAPgIAJAGQAJAJABAEQAJgLADgBQAJgHALAGQACAAABABQAcAJAZAaQADAEACAEQAMAQAGAQ");
	this.shape_48.setTransform(15.6,8.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AhoAoQABgQAJgQQAWgjAigJQAPgFAKAFQAKAHABAFQAKgKADgCQAJgFALADQACAAACABQAeAHAVAcQACADADAEQAKASAEAR");
	this.shape_49.setTransform(15.6,8.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AhjAoQgBgRAGgSQANgkApgHQAVgEALAIQAFAEABAEIAIgHQALgIAQACQAoAEASAmQAJATAAAS");
	this.shape_50.setTransform(15.5,8.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("AhrAmQABgQAIgRQAPgcAagKQAggEAHADQAHADAFAEQAEAEABAFQADgEAEgEQAFgFAHgDQAGgCAHgBQAQgBAOAGQAVAKANAXQACAEACAEQAHAPACAO");
	this.shape_51.setTransform(15.4,7.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AhzAkQAEgQAJgRQAUgcAbgIQAggBAIAGQAGADAEAGQAEAEABAFQADgEADgFQAFgGAGgEQAGgDAHgCQAPgEAQAGQAWAIAQAYQADADACAEQAJAPADAO");
	this.shape_52.setTransform(15.3,6.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("Ah7AiQAHgQALgQQAZgdAbgGQAhADAIAIQAGAEADAHQADAFAAAFQAEgFADgFQAEgHAFgFQAGgFAGgDQAQgGARAFQAXAHATAYQADADADAEQAKAPAFAO");
	this.shape_53.setTransform(15.2,6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AiEAgQAKgPANgQQAegdAbgFQAjAHAHAKQAGAGADAHQACAEAAAGQADgFADgFQAEgHAEgIQAFgGAHgDQAPgKATAFQAZAGAWAYQACADAEAEQAMAPAHAO");
	this.shape_54.setTransform(15.1,5.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("AiMAfQANgPAOgQQAjgdAcgDQAkAKAHAMQAFAHACAIQACAFABAGQACgGADgFQADgIADgJQAFgHAHgFQAPgMAUAEQAaAFAYAYQAEADAEAEQAOAPAIAP");
	this.shape_55.setTransform(15,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,31.8,8.6);


(lib.shipAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ship_1();
	this.instance.parent = this;
	this.instance.setTransform(189.5,56.5,0.5,0.5,0,0,0,379,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shipAni, new cjs.Rectangle(0,0,379,113), null);


(lib.seaAni5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlWCqQlghegIgBQgBgEhUibQhLiKgJgMQAfACNIgRQNmgRACACQADADhkClQhkCkACACQAFAFqFC+IgBAAQgWAAlkhfg");
	mask.setTransform(352.9,163);

	// Layer 1
	this.instance = new lib.sea_1();
	this.instance.parent = this;
	this.instance.setTransform(273.5,176.5,0.5,0.5,0,0,0,547,353);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seaAni5, new cjs.Rectangle(265.8,136.5,174.4,53.1), null);


(lib.seaAni4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aw/DNQoPgMgKACQAAgIiSmCQADADaQgKQaQgKACACQADADBVAZQBVAZACACQADADg/BLQg+BLACACQADADioBAQinBBACACQADADuqAoQupAoADACIgOAAQhKAAnCgKg");
	mask.setTransform(163.1,117);

	// Layer 1
	this.instance = new lib.sea_1();
	this.instance.parent = this;
	this.instance.setTransform(273.5,176.5,0.5,0.5,0,0,0,547,353);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seaAni4, new cjs.Rectangle(0,95.5,340.1,43.1), null);


(lib.seaAni3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgvCtQm1gmACADQADACstAUQstAUADADQACACjtgRQjfgRgMACQAGgJAYjiQACADEWgNQEVgMADACQACADJMAWQJLAXADACQACADBxhEQBxhDACACQADADYhgPQYigPADACQACADhXC0QhYCzADADQACACvyAXQvyAWACADIgBAAQgYAAmZgjg");
	mask.setTransform(273.4,81.3);

	// Layer 1
	this.instance = new lib.sea_1();
	this.instance.parent = this;
	this.instance.setTransform(273.5,176.5,0.5,0.5,0,0,0,547,353);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seaAni3, new cjs.Rectangle(16.2,60.5,514.5,41.6), null);


(lib.seaAni2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0EBxIhag3QAFgDgFi6QACACCtgUQCsgUADADQACACHPANQHPAMACADQADACG8gPQG9gPACADQADACDAAZQDBAZACADQADACBaA1QBaAzACADQADACh9BLQh9BLACADQADACksgCQksgDACADQADACtjADQtkACADADIAAAAIhag3g");
	mask.setTransform(236.1,51.2);

	// Layer 1
	this.instance = new lib.sea_1();
	this.instance.parent = this;
	this.instance.setTransform(273.5,176.5,0.5,0.5,0,0,0,547,353);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seaAni2, new cjs.Rectangle(98.6,34.5,275.1,33.6), null);


(lib.seaAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnJADjIhVg0QADgEA5jVQAniVAOgqQCKABG6AAQKAAAACADQADACB9ADQB9ACACADIBLBBQADACh2BGQh1BGACADQADACjkAxQjjAyACADQAEADi+A+Qi6A8gXAFIjdAbQjKAZADADIAAAAIhVg1gAVrC7QjSg3ADADQACACiOgtQiDgpgJgBQABgGgkhnQACACNdgMQNcgNACADQADACgKA/QgKA9ACADQADACigAmQigAlACADQADAClPA1QlQA0ADADIAAAAQgHAAjJg1g");
	mask.setTransform(240.1,28);

	// Layer 1
	this.instance = new lib.sea_1();
	this.instance.parent = this;
	this.instance.setTransform(273.5,176.5,0.5,0.5,0,0,0,547,353);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seaAni, new cjs.Rectangle(0,4.7,499.2,51.4), null);


(lib.riversAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rivers_1();
	this.instance.parent = this;
	this.instance.setTransform(-272.5,15.8,0.5,0.5,0,0,0,547,31.5);

	this.instance_1 = new lib.rivers_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.5,15.8,0.5,0.5,0,0,0,547,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.riversAni, new cjs.Rectangle(-546,0,1093,31.5), null);


(lib.clound3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtHAHXQg3AAgVi5QgViuAbhHQT2npBQgUQA5gPMGgaQMAgbBGAIUAkvADmABQAAAQAyAADcCCQBuBBBkBBIjcDvIqoAeIqeAKIq8AeIm5AAIhui0IlJhGIo6AAIoSg7Ii+F7IjcCMIpEAyQocg8hQAAg");
	mask.setTransform(307.9,41.9);

	// Layer 1
	this.instance = new lib.cloud_1();
	this.instance.parent = this;
	this.instance.setTransform(324,76.5,0.5,0.5,0,0,0,648,153);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clound3, new cjs.Rectangle(10.6,0,594.7,95.1), null);


(lib.clound2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az1FFQg8AAq8goIF8jcICClTIGQg8IGaCCIKeAyICzCfIITgTIJXhkII7AUIC+CfIirDIIm4BGg");
	mask.setTransform(321.1,73.6);

	// Layer 1
	this.instance = new lib.cloud_1();
	this.instance.parent = this;
	this.instance.setTransform(324,76.5,0.5,0.5,0,0,0,648,153);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clound2, new cjs.Rectangle(118.1,40.1,406.1,67), null);


(lib.clound1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtTAC7IGGi9IMhgKIO2AKIAAAJMAkjAAAIAAl+QSri3AGAaIB2JHMggXADqUggcADsgAfAAGQgyAK0BAAg");
	mask.setTransform(358,109.4);

	// Layer 1
	this.instance = new lib.cloud_1();
	this.instance.parent = this;
	this.instance.setTransform(324,76.5,0.5,0.5,0,0,0,648,153);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clound1, new cjs.Rectangle(68.1,55.8,580,97.3), null);


(lib.cloudAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.clound1();
	this.instance.parent = this;
	this.instance.setTransform(354,76.5,1,1,0,0,0,324,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:324},249,cjs.Ease.sineInOut).to({x:354},250,cjs.Ease.sineInOut).wait(1));

	// Layer 3
	this.instance_1 = new lib.clound2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(344,76.5,1,1,0,0,0,324,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:324},249,cjs.Ease.sineInOut).to({x:344},250,cjs.Ease.sineInOut).wait(1));

	// Layer 1
	this.instance_2 = new lib.clound3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(334,76.5,1,1,0,0,0,324,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:324},249,cjs.Ease.sineInOut).to({x:334},250,cjs.Ease.sineInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-11.7,668,174.8);


(lib.carAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car_1();
	this.instance.parent = this;
	this.instance.setTransform(231.5,25.8,0.5,0.5,0,0,0,143,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-488.5},257).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,0,143,51.5);


(lib.birdAni1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.birdAnicopy();
	this.instance.parent = this;
	this.instance.setTransform(-9.3,-14.4,1,1,0,0,0,14.8,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6.3,y:-13.2},43,cjs.Ease.quadInOut).to({y:-18.2},87,cjs.Ease.quadInOut).to({x:-16.3},71,cjs.Ease.quadInOut).to({x:-9.3,y:-14.4},88,cjs.Ease.quadInOut).wait(1));

	// Layer 1
	this.instance_1 = new lib.birdAni();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.8,3.2,1,1,0,0,0,14.8,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:12.3,y:0.7},78,cjs.Ease.quadInOut).to({y:5.7},68,cjs.Ease.quadInOut).to({x:17.3,y:0.7},67,cjs.Ease.quadInOut).to({x:14.8,y:3.2},76,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-30.9,45.7,37.9);


(lib.shipAni1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shipAni();
	this.instance.parent = this;
	this.instance.setTransform(189.5,54.5,1,1,0,0,0,189.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:58.5},49,cjs.Ease.quadInOut).to({y:54.5},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,379,113);


(lib.seaAni1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.seaAni5();
	this.instance.parent = this;
	this.instance.setTransform(248.5,202.8,1,1,0,0,0,273.5,202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:273.5},149,cjs.Ease.sineInOut).to({x:248.5},150,cjs.Ease.sineInOut).wait(1));

	// Layer 4
	this.instance_1 = new lib.seaAni4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(253.5,202.8,1,1,0,0,0,273.5,202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:273.5},149,cjs.Ease.sineInOut).to({x:253.5},150,cjs.Ease.sineInOut).wait(1));

	// Layer 3
	this.instance_2 = new lib.seaAni3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.5,202.8,1,1,0,0,0,273.5,202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:273.5},149,cjs.Ease.sineInOut).to({x:258.5},150,cjs.Ease.sineInOut).wait(1));

	// Layer 2
	this.instance_3 = new lib.seaAni2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(263.5,202.8,1,1,0,0,0,273.5,202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:273.5},149,cjs.Ease.sineInOut).to({x:263.5},150,cjs.Ease.sineInOut).wait(1));

	// Layer 1
	this.instance_4 = new lib.seaAni();
	this.instance_4.parent = this;
	this.instance_4.setTransform(268.5,202.8,1,1,0,0,0,273.5,202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:273.5},149,cjs.Ease.sineInOut).to({x:268.5},150,cjs.Ease.sineInOut).wait(1));

	// Layer 6
	this.instance_5 = new lib.sea_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(273.5,202.8,0.5,0.5,0,0,0,547,405.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,0,581.5,405.5);


(lib.riversAni1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.riversAni();
	this.instance.parent = this;
	this.instance.setTransform(819.5,15.8,1,1,0,0,0,273.5,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1365.5},799).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1093,31.5);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.cloudAni();
	this.instance.parent = this;
	this.instance.setTransform(324,76.5,1,1,0,0,0,324,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgqpApGMAAAhSLMBVTAAAMAAABSLg");
	mask.setTransform(326,302);

	// Layer 2
	this.instance_1 = new lib.riversAni1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.5,552.8,1,1,0,0,0,546.5,15.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300));

	// Layer 3
	this.instance_2 = new lib.shipAni1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(241.5,503.5,1,1,0,0,0,189.5,56.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(300));

	// Layer 9
	this.instance_3 = new lib.carAni();
	this.instance_3.parent = this;
	this.instance_3.setTransform(523.5,488.8,1,1,0,0,0,71.5,25.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(300));

	// Layer 10
	this.instance_4 = new lib.birdAni1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(436.4,130.6,1,1,0,0,0,14.8,-3.1);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(300));

	// Layer 4
	this.instance_5 = new lib.house_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(325.5,304.5,0.5,0.5,0,0,0,549,419);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(300));

	// Layer 5
	this.instance_6 = new lib.seaAni1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(326.5,362.8,1,1,0,0,0,273.5,202.8);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(300));

	// Layer 6
	this.instance_7 = new lib.sun_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(319,168.6,0.5,0.5,0,0,0,139,138.5);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(324,292.8,678,620.7);
// library properties:
lib.properties = {
	id: '14FC4F5EDC53404E8649113F9EC4684B',
	width: 648,
	height: 609,
	fps: 60,
	color: "#00CCFF",
	opacity: 0.00,
	manifest: [
		{src:require('./images/car.png?1534038964771'), id:"car"},
		{src:require('./images/cloud.png?1534038964771'), id:"cloud"},
		{src:require('./images/house.png?1534038964771'), id:"house"},
		{src:require('./images/rivers.png?1534038964771'), id:"rivers"},
		{src:require('./images/sea.jpg?1534038964771'), id:"sea"},
		{src:require('./images/ship.png?1534038964771'), id:"ship"},
		{src:require('./images/sun.png?1534038964771'), id:"sun"}
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
an.compositions['14FC4F5EDC53404E8649113F9EC4684B'] = {
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