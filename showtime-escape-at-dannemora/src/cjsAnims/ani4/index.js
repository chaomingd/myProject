(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);


(lib.light1 = function() {
	this.initialize(img.light1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1329,764);


(lib.light2 = function() {
	this.initialize(img.light2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,895,753);


(lib.peo = function() {
	this.initialize(img.peo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,674,692);


(lib.Snow1 = function() {
	this.initialize(img.Snow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,867);


(lib.Snow2 = function() {
	this.initialize(img.Snow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,867);


(lib.Snow3 = function() {
	this.initialize(img.Snow3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,867);


(lib.Snow4 = function() {
	this.initialize(img.Snow4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,867);


(lib.Snow5 = function() {
	this.initialize(img.Snow5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,867);


(lib.Snow6 = function() {
	this.initialize(img.Snow6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,867);// helper functions:

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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,1605,872), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg61BKBMAAAiUBMB1qAAAMAAACUBg");
	mask.setTransform(665.7,438);

	// Layer_1
	this.instance = new lib.peo();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(289.1,0,384.9,692), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.light2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,895,753), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.light1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1330.4,764), null);


(lib.sonw6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snow6();
	this.instance.parent = this;
	this.instance.setTransform(0,-364);

	this.instance_1 = new lib.Snow6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,988);

	this.instance_2 = new lib.Snow6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,640);

	this.instance_3 = new lib.Snow6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,288);

	this.instance_4 = new lib.Snow6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-252);

	this.instance_5 = new lib.Snow6();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sonw6, new cjs.Rectangle(0,-364,1605,2219), null);


(lib.sonw5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snow5();
	this.instance.parent = this;
	this.instance.setTransform(0,1171);

	this.instance_1 = new lib.Snow5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-648);

	this.instance_2 = new lib.Snow5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,895);

	this.instance_3 = new lib.Snow5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,447);

	this.instance_4 = new lib.Snow5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-420);

	this.instance_5 = new lib.Snow5();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sonw5, new cjs.Rectangle(0,-648,1605,2686), null);


(lib.sonw4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snow4();
	this.instance.parent = this;
	this.instance.setTransform(0,867);

	this.instance_1 = new lib.Snow4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-867);

	this.instance_2 = new lib.Snow4();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sonw4, new cjs.Rectangle(0,-867,1605,2601), null);


(lib.sonw3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snow3();
	this.instance.parent = this;
	this.instance.setTransform(0,892);

	this.instance_1 = new lib.Snow3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-867);

	this.instance_2 = new lib.Snow3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sonw3, new cjs.Rectangle(0,-867,1605,2626), null);


(lib.sonw2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snow2();
	this.instance.parent = this;
	this.instance.setTransform(0,867);

	this.instance_1 = new lib.Snow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-867);

	this.instance_2 = new lib.Snow2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sonw2, new cjs.Rectangle(0,-867,1605,2601), null);


(lib.shadown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EBWmA22QgIBUhEAMQmviMm8j2Qg8hAAegwIw7o+IhTBBQChDmoiipQAXCQ13lqIAAgIQknAEkpgdQ8Hiv9g1gIgHADIAnBhIiYhQQjZhzh7ipQjGhGipjTQiggwh9ibQjNiMhnh/QixhZhsiBIgEgDIgEgBQhEgYhrhyIgHgIIgEgFQhIhZgqgvQgugyi5iwQhBg/gugyQhJhQgagxIgHgPQg1i0iSiYQjFiYgfk8QhkhlAMjzIADgEIgFgEIjFigQkQjegRgVQgWgdgSgQQkEjshnh1QhyiBgRgQQkXkPgBgEIgBgKQgCgMgCAAIgIgBQgOgCgGgGQgHgIAAgCQgBgGgCgBIgagVQgTgPAAgDIABgNQABgdgBgBIgFgDQgQgLAKgEQAMgGAGgBIAEAAIAdgGQAtgLAFACIAPAFQA7AVgBAFIgBAJQgEAXADgCQADgCAVAHIA0AaQDzCPCpBeQC+BpA8AfIG5DhQi/iEjkiEQkxivl0iuIgUgJIgNgGIATgpIB9AgIBzArQHwDPGqDHQHdC+F6CsQDJAsB1BaIAwAUQHtDOHOBVQBugIC7AsIAMAEQK/DgKxC1QCzAvCyAtIELARQEtBgCmCXQEkgCE/EvQEQA7D5CpQFiCZAeARIA5AiQGADhBAAKQBKAMAdAMQA1AWAHAHIArAsQGeGoAWCUQAXCigBAtQgKGEBxgCIAGAAQLeClgKEkQgLEmAPAlQAQAlAEAOIAGAGIAGAKQDkFdVNiEIALABIBeAdIJkgQICIgkQF/ACDNA6IA4AsQJrgeDNC4QEbHkhXJSQhaIEpbCOIgGABQl/gql+iNg");
	this.shape.setTransform(704.2,370.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadown, new cjs.Rectangle(0,0,1410,748), null);


(lib.peo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxXbjMAAAg3FMAivAAAMAAAA3Fg");
	mask.setTransform(37.7,206.6);

	// Layer_1
	this.instance = new lib.peo();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peo_1, new cjs.Rectangle(0,30.4,148.9,352.5), null);


(lib.snow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snow1();
	this.instance.parent = this;
	this.instance.setTransform(0,867);

	this.instance_1 = new lib.Snow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-869);

	this.instance_2 = new lib.Snow1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow1, new cjs.Rectangle(0,-869,1605,2603), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh9YBEIMAAAiIPMD6xAAAMAAACIPgEhKNgy+IAAGuQA9DLDmCZQBfhZA5g8QBGhLAmg4IAAn6Qh+hiiNgBQiMABiQBig");
	mask.setTransform(802.5,436);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiFdBIXMAAAiQtMEK7AAAMAAACQtg");
	this.shape.setTransform(794.2,433.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,1605,872), null);


(lib.snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{snow:0});

	// timeline functions:
	this.frame_156 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(156).call(this.frame_156).wait(84));

	// Layer_1
	this.instance = new lib.snow1();
	this.instance.parent = this;
	this.instance.setTransform(802.5,-294.5,1,1,0,0,0,802.5,433.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:605.5},239).wait(1));

	// Layer_6
	this.instance_1 = new lib.sonw2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(802.5,-294.5,1,1,0,0,0,802.5,433.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:405.5},239).wait(1));

	// Layer_5
	this.instance_2 = new lib.sonw3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(802.5,-294.5,1,1,0,0,0,802.5,433.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:541.5},239).wait(1));

	// Layer_4
	this.instance_3 = new lib.sonw4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(802.5,-294.5,1,1,0,0,0,802.5,433.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:645.5},239).wait(1));

	// Layer_3
	this.instance_4 = new lib.sonw5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(802.5,-294.5,1,1,0,0,0,802.5,433.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:145.5},239).wait(1));

	// Layer_2
	this.instance_5 = new lib.sonw6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(802.5,-294.5,1,1,0,0,0,802.5,433.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:165.5},239).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1597,1605,2907);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 大雪
	this.instance = new lib.snow("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(804.5,568.5,1,1,0,0,0,802.5,433.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(256));

	// Layer_4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(895.1,578.6,1.384,1.384,0,0,0,337.1,346.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({regX:337,regY:346,scaleX:1,scaleY:1,x:795,y:526,alpha:1},218).wait(4));

	// 人物，前
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(895.1,578.6,1.384,1.384,0,0,0,337.1,346.1);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(287,-2,389,696);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({regX:337,regY:346,scaleX:1,scaleY:1,x:795,y:526},218).wait(4));

	// 人物，后
	this.instance_3 = new lib.peo_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(874.6,578.7,1.1,1.1,0,0,0,337.1,346.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({regX:337,regY:346,scaleX:1,scaleY:1,x:795,y:526},218).wait(4));

	// 人物投影
	this.instance_4 = new lib.shadown();
	this.instance_4.parent = this;
	this.instance_4.setTransform(546.4,567.3,0.014,0.014,0,0,0,3.7,3.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({regX:1.4,regY:1,scaleX:1,scaleY:1,x:479.4,y:515},203).wait(4));

	// Layer_2
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(395.6,522.4,0.153,0.139,0,0,-17.9,662.5,358.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},34).to({regX:661.5,regY:357.1,scaleX:1,scaleY:1,skewY:0,x:1100.5,y:859.1},218).wait(4));

	// Layer_5
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(340.2,130.9,0.302,0.618,0,12.1,25,0.8,-0.1);
	this.instance_6.alpha = 0;
	this.instance_6.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},34).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:309,y:119},218).wait(4));

	// 闪灯前
	this.instance_7 = new lib.bg_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(882.7,479.6,1.1,1.1,0,0,0,802.5,436);
	this.instance_7.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({scaleX:1,scaleY:1,x:802.5,y:436,alpha:0},218).wait(4));

	// 闪灯后
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(882.8,479.6,1.1,1.1,0,0,0,802.5,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34).to({scaleX:1,scaleY:1,x:801.5,y:436},218).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-1026,2925,2907);
// library properties:
lib.properties = {
	id: '2F72D865394848BFA0172219E6246FAD',
	width: 1605,
	height: 872,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:require('./images/bg.jpg?1541930436917'), id:"bg"},
		{src:require('./images/light1.png?1541930436917'), id:"light1"},
		{src:require('./images/light2.png?1541930436917'), id:"light2"},
		{src:require('./images/peo.png?1541930436917'), id:"peo"},
		{src:require('./images/Snow1.png?1541930436917'), id:"Snow1"},
		{src:require('./images/Snow2.png?1541930436917'), id:"Snow2"},
		{src:require('./images/Snow3.png?1541930436917'), id:"Snow3"},
		{src:require('./images/Snow4.png?1541930436917'), id:"Snow4"},
		{src:require('./images/Snow5.png?1541930436917'), id:"Snow5"},
		{src:require('./images/Snow6.png?1541930436918'), id:"Snow6"}
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
an.compositions['2F72D865394848BFA0172219E6246FAD'] = {
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