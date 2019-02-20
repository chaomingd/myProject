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


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B0F2").s().p("AhfBgQgogoAAg4QAAg3AogoQAogoA3AAQA4AAAoAoQAoAoAAA3QAAA4goAoQgoAog4AAQg3AAgogogAhChCQgbAcgBAmQABAnAbAcQAcAcAmAAQAnAAAcgcQAcgcgBgnQABgmgcgcQgcgcgnAAQgmAAgcAcgAgeAfQgMgNAAgSQAAgRAMgNQANgNARAAQASAAANANQAMANAAARQAAASgMANQgNANgSAAQgRAAgNgNg");
	this.shape.setTransform(13.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(0,0,27.2,27.3), null);


(lib.icon_3ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// circle
	this.instance = new lib.circle();
	this.instance.parent = this;
	this.instance.setTransform(83.6,43.6,1,1,0,0,0,13.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({y:22.8},32,cjs.Ease.quadOut).wait(71).to({y:43.6},33,cjs.Ease.quadOut).wait(35));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_74 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_75 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_76 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_77 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_78 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_79 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_80 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_81 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_82 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_83 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_84 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_85 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_86 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_87 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_88 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_89 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_90 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_91 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_92 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_93 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_94 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_95 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_96 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_97 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_98 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_99 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_100 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_101 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_102 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_103 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_104 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_105 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_106 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_177 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_178 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_179 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_180 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_181 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_182 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_183 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_184 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_185 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_186 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_187 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_188 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_189 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_190 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_191 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_192 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_193 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_194 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_195 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_196 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_197 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_198 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_199 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_200 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_201 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_202 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_203 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_204 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_205 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_206 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_207 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_208 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_209 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");
	var mask_graphics_210 = new cjs.Graphics().p("AwhQeQmxmxAApwQAAppGxmxQG5m5JoAAQJpAAG5G5QGxGxAAJpQAAJwmxGxQm5G5ppAAQpoAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA3A3BMAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhMAAg3A3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:83.7,y:43.7}).wait(74).to({graphics:mask_graphics_74,x:83.7,y:43.7}).wait(1).to({graphics:mask_graphics_75,x:83.7,y:42.5}).wait(1).to({graphics:mask_graphics_76,x:83.7,y:41.3}).wait(1).to({graphics:mask_graphics_77,x:83.7,y:40.1}).wait(1).to({graphics:mask_graphics_78,x:83.7,y:38.8}).wait(1).to({graphics:mask_graphics_79,x:83.7,y:37.6}).wait(1).to({graphics:mask_graphics_80,x:83.7,y:36.5}).wait(1).to({graphics:mask_graphics_81,x:83.7,y:35.4}).wait(1).to({graphics:mask_graphics_82,x:83.7,y:34.3}).wait(1).to({graphics:mask_graphics_83,x:83.7,y:33.2}).wait(1).to({graphics:mask_graphics_84,x:83.7,y:32.3}).wait(1).to({graphics:mask_graphics_85,x:83.7,y:31.4}).wait(1).to({graphics:mask_graphics_86,x:83.7,y:30.5}).wait(1).to({graphics:mask_graphics_87,x:83.7,y:29.7}).wait(1).to({graphics:mask_graphics_88,x:83.7,y:29}).wait(1).to({graphics:mask_graphics_89,x:83.7,y:28.3}).wait(1).to({graphics:mask_graphics_90,x:83.7,y:27.6}).wait(1).to({graphics:mask_graphics_91,x:83.7,y:27.1}).wait(1).to({graphics:mask_graphics_92,x:83.7,y:26.5}).wait(1).to({graphics:mask_graphics_93,x:83.7,y:26}).wait(1).to({graphics:mask_graphics_94,x:83.7,y:25.6}).wait(1).to({graphics:mask_graphics_95,x:83.7,y:25.2}).wait(1).to({graphics:mask_graphics_96,x:83.7,y:24.8}).wait(1).to({graphics:mask_graphics_97,x:83.7,y:24.5}).wait(1).to({graphics:mask_graphics_98,x:83.7,y:24.2}).wait(1).to({graphics:mask_graphics_99,x:83.7,y:23.9}).wait(1).to({graphics:mask_graphics_100,x:83.7,y:23.7}).wait(1).to({graphics:mask_graphics_101,x:83.7,y:23.5}).wait(1).to({graphics:mask_graphics_102,x:83.7,y:23.3}).wait(1).to({graphics:mask_graphics_103,x:83.7,y:23.2}).wait(1).to({graphics:mask_graphics_104,x:83.7,y:23.1}).wait(1).to({graphics:mask_graphics_105,x:83.7,y:23}).wait(1).to({graphics:mask_graphics_106,x:83.7,y:22.9}).wait(71).to({graphics:mask_graphics_177,x:83.7,y:22.9}).wait(1).to({graphics:mask_graphics_178,x:83.7,y:24}).wait(1).to({graphics:mask_graphics_179,x:83.7,y:25.2}).wait(1).to({graphics:mask_graphics_180,x:83.7,y:26.4}).wait(1).to({graphics:mask_graphics_181,x:83.7,y:27.6}).wait(1).to({graphics:mask_graphics_182,x:83.7,y:28.8}).wait(1).to({graphics:mask_graphics_183,x:83.7,y:29.9}).wait(1).to({graphics:mask_graphics_184,x:83.7,y:31}).wait(1).to({graphics:mask_graphics_185,x:83.7,y:32.1}).wait(1).to({graphics:mask_graphics_186,x:83.7,y:33.1}).wait(1).to({graphics:mask_graphics_187,x:83.7,y:34}).wait(1).to({graphics:mask_graphics_188,x:83.7,y:34.9}).wait(1).to({graphics:mask_graphics_189,x:83.7,y:35.8}).wait(1).to({graphics:mask_graphics_190,x:83.7,y:36.6}).wait(1).to({graphics:mask_graphics_191,x:83.7,y:37.3}).wait(1).to({graphics:mask_graphics_192,x:83.7,y:38}).wait(1).to({graphics:mask_graphics_193,x:83.7,y:38.7}).wait(1).to({graphics:mask_graphics_194,x:83.7,y:39.2}).wait(1).to({graphics:mask_graphics_195,x:83.7,y:39.8}).wait(1).to({graphics:mask_graphics_196,x:83.7,y:40.3}).wait(1).to({graphics:mask_graphics_197,x:83.7,y:40.7}).wait(1).to({graphics:mask_graphics_198,x:83.7,y:41.2}).wait(1).to({graphics:mask_graphics_199,x:83.7,y:41.5}).wait(1).to({graphics:mask_graphics_200,x:83.7,y:41.9}).wait(1).to({graphics:mask_graphics_201,x:83.7,y:42.2}).wait(1).to({graphics:mask_graphics_202,x:83.7,y:42.5}).wait(1).to({graphics:mask_graphics_203,x:83.7,y:42.7}).wait(1).to({graphics:mask_graphics_204,x:83.7,y:42.9}).wait(1).to({graphics:mask_graphics_205,x:83.7,y:43.1}).wait(1).to({graphics:mask_graphics_206,x:83.7,y:43.3}).wait(1).to({graphics:mask_graphics_207,x:83.7,y:43.4}).wait(1).to({graphics:mask_graphics_208,x:83.7,y:43.5}).wait(1).to({graphics:mask_graphics_209,x:83.7,y:43.6}).wait(1).to({graphics:mask_graphics_210,x:83.7,y:43.7}).wait(35));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B0F2").s().p("AgRF1QgHgGAAgKIAArKQAAgJAHgHQAIgGAJAAQALAAAGAGQAIAHAAAJIAALKQAAAKgIAGQgHAHgKAAQgJAAgIgHg");
	this.shape.setTransform(83.5,38);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(245));

	// circle
	this.instance_1 = new lib.circle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.6,27.4,1,1,0,0,0,13.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:52.8},32,cjs.Ease.quadOut).wait(77).to({y:27.4},33,cjs.Ease.quadOut).wait(103));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_18 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_30 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_31 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_32 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_109 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_110 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_111 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_112 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_113 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_114 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_115 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_116 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_117 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_118 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_119 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_120 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_121 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_122 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_123 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_124 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_125 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_126 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_127 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_128 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_129 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_130 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_131 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_132 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_133 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_134 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_135 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_136 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_137 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_138 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_139 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_140 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_141 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");
	var mask_1_graphics_142 = new cjs.Graphics().p("AwiQeQmwmxAApwQAAppGwmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiDiDQg2A2AABNQAABNA2A2QA2A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg2A3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:48.7,y:27.5}).wait(1).to({graphics:mask_1_graphics_1,x:48.7,y:28.9}).wait(1).to({graphics:mask_1_graphics_2,x:48.7,y:30.4}).wait(1).to({graphics:mask_1_graphics_3,x:48.7,y:31.9}).wait(1).to({graphics:mask_1_graphics_4,x:48.7,y:33.4}).wait(1).to({graphics:mask_1_graphics_5,x:48.7,y:34.9}).wait(1).to({graphics:mask_1_graphics_6,x:48.7,y:36.3}).wait(1).to({graphics:mask_1_graphics_7,x:48.7,y:37.7}).wait(1).to({graphics:mask_1_graphics_8,x:48.7,y:39}).wait(1).to({graphics:mask_1_graphics_9,x:48.7,y:40.2}).wait(1).to({graphics:mask_1_graphics_10,x:48.7,y:41.4}).wait(1).to({graphics:mask_1_graphics_11,x:48.7,y:42.5}).wait(1).to({graphics:mask_1_graphics_12,x:48.7,y:43.6}).wait(1).to({graphics:mask_1_graphics_13,x:48.7,y:44.6}).wait(1).to({graphics:mask_1_graphics_14,x:48.7,y:45.5}).wait(1).to({graphics:mask_1_graphics_15,x:48.7,y:46.3}).wait(1).to({graphics:mask_1_graphics_16,x:48.7,y:47.1}).wait(1).to({graphics:mask_1_graphics_17,x:48.7,y:47.8}).wait(1).to({graphics:mask_1_graphics_18,x:48.7,y:48.4}).wait(1).to({graphics:mask_1_graphics_19,x:48.7,y:49}).wait(1).to({graphics:mask_1_graphics_20,x:48.7,y:49.6}).wait(1).to({graphics:mask_1_graphics_21,x:48.7,y:50}).wait(1).to({graphics:mask_1_graphics_22,x:48.7,y:50.5}).wait(1).to({graphics:mask_1_graphics_23,x:48.7,y:50.9}).wait(1).to({graphics:mask_1_graphics_24,x:48.7,y:51.3}).wait(1).to({graphics:mask_1_graphics_25,x:48.7,y:51.6}).wait(1).to({graphics:mask_1_graphics_26,x:48.7,y:51.9}).wait(1).to({graphics:mask_1_graphics_27,x:48.7,y:52.1}).wait(1).to({graphics:mask_1_graphics_28,x:48.7,y:52.3}).wait(1).to({graphics:mask_1_graphics_29,x:48.7,y:52.5}).wait(1).to({graphics:mask_1_graphics_30,x:48.7,y:52.6}).wait(1).to({graphics:mask_1_graphics_31,x:48.7,y:52.8}).wait(1).to({graphics:mask_1_graphics_32,x:48.7,y:52.9}).wait(77).to({graphics:mask_1_graphics_109,x:48.7,y:52.9}).wait(1).to({graphics:mask_1_graphics_110,x:48.7,y:51.4}).wait(1).to({graphics:mask_1_graphics_111,x:48.7,y:50}).wait(1).to({graphics:mask_1_graphics_112,x:48.7,y:48.6}).wait(1).to({graphics:mask_1_graphics_113,x:48.7,y:47.1}).wait(1).to({graphics:mask_1_graphics_114,x:48.7,y:45.7}).wait(1).to({graphics:mask_1_graphics_115,x:48.7,y:44.3}).wait(1).to({graphics:mask_1_graphics_116,x:48.7,y:43}).wait(1).to({graphics:mask_1_graphics_117,x:48.7,y:41.7}).wait(1).to({graphics:mask_1_graphics_118,x:48.7,y:40.4}).wait(1).to({graphics:mask_1_graphics_119,x:48.7,y:39.3}).wait(1).to({graphics:mask_1_graphics_120,x:48.7,y:38.2}).wait(1).to({graphics:mask_1_graphics_121,x:48.7,y:37.1}).wait(1).to({graphics:mask_1_graphics_122,x:48.7,y:36.2}).wait(1).to({graphics:mask_1_graphics_123,x:48.7,y:35.3}).wait(1).to({graphics:mask_1_graphics_124,x:48.7,y:34.4}).wait(1).to({graphics:mask_1_graphics_125,x:48.7,y:33.6}).wait(1).to({graphics:mask_1_graphics_126,x:48.7,y:32.9}).wait(1).to({graphics:mask_1_graphics_127,x:48.7,y:32.3}).wait(1).to({graphics:mask_1_graphics_128,x:48.7,y:31.7}).wait(1).to({graphics:mask_1_graphics_129,x:48.7,y:31.1}).wait(1).to({graphics:mask_1_graphics_130,x:48.7,y:30.6}).wait(1).to({graphics:mask_1_graphics_131,x:48.7,y:30.1}).wait(1).to({graphics:mask_1_graphics_132,x:48.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_133,x:48.7,y:29.4}).wait(1).to({graphics:mask_1_graphics_134,x:48.7,y:29}).wait(1).to({graphics:mask_1_graphics_135,x:48.7,y:28.7}).wait(1).to({graphics:mask_1_graphics_136,x:48.7,y:28.5}).wait(1).to({graphics:mask_1_graphics_137,x:48.7,y:28.2}).wait(1).to({graphics:mask_1_graphics_138,x:48.7,y:28}).wait(1).to({graphics:mask_1_graphics_139,x:48.7,y:27.8}).wait(1).to({graphics:mask_1_graphics_140,x:48.7,y:27.7}).wait(1).to({graphics:mask_1_graphics_141,x:48.7,y:27.6}).wait(1).to({graphics:mask_1_graphics_142,x:48.7,y:27.5}).wait(103));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B0F2").s().p("AgRF1QgHgGAAgKIAArKQAAgJAHgHQAIgGAJAAQALAAAGAGQAIAHAAAJIAALKQAAAKgIAGQgHAHgKAAQgJAAgIgHg");
	this.shape_1.setTransform(48.5,38);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(245));

	// circle
	this.instance_2 = new lib.circle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.6,52.2,1,1,0,0,0,13.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({y:21.8},32,cjs.Ease.quadOut).wait(24).to({y:52.2},33,cjs.Ease.quadOut).wait(104));

	// Layer_3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_52 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_53 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_54 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_55 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_56 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_57 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_58 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_59 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_60 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_61 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_62 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_63 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_64 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_65 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_66 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_67 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_68 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_69 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_70 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_71 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_72 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_73 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_74 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_75 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_76 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_77 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_78 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_79 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_80 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_81 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_82 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_83 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_84 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_108 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_109 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_110 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_111 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_112 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_113 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_114 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_115 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_116 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_117 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_118 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_119 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_120 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_121 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_122 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_123 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_124 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_125 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_126 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_127 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_128 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_129 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_130 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_131 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_132 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_133 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_134 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_135 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_136 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_137 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_138 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_139 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_140 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");
	var mask_2_graphics_141 = new cjs.Graphics().p("AwiQeQmxmxAApwQAAppGxmxQG5m5JpAAQJqAAG4G5QGxGxAAJpQAAJwmxGxQm4G5pqAAQppAAm5m5gAiEiDQg2A2AABNQAABNA2A2QA3A3BNAAQBMAAA3g3QA2g2AAhNQAAhNg2g2Qg3g3hMAAQhNAAg3A3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:13.7,y:52.3}).wait(52).to({graphics:mask_2_graphics_52,x:13.7,y:52.3}).wait(1).to({graphics:mask_2_graphics_53,x:13.7,y:50.5}).wait(1).to({graphics:mask_2_graphics_54,x:13.7,y:48.7}).wait(1).to({graphics:mask_2_graphics_55,x:13.7,y:46.9}).wait(1).to({graphics:mask_2_graphics_56,x:13.7,y:45.2}).wait(1).to({graphics:mask_2_graphics_57,x:13.7,y:43.4}).wait(1).to({graphics:mask_2_graphics_58,x:13.7,y:41.7}).wait(1).to({graphics:mask_2_graphics_59,x:13.7,y:40.1}).wait(1).to({graphics:mask_2_graphics_60,x:13.7,y:38.5}).wait(1).to({graphics:mask_2_graphics_61,x:13.7,y:37}).wait(1).to({graphics:mask_2_graphics_62,x:13.7,y:35.6}).wait(1).to({graphics:mask_2_graphics_63,x:13.7,y:34.2}).wait(1).to({graphics:mask_2_graphics_64,x:13.7,y:33}).wait(1).to({graphics:mask_2_graphics_65,x:13.7,y:31.8}).wait(1).to({graphics:mask_2_graphics_66,x:13.7,y:30.7}).wait(1).to({graphics:mask_2_graphics_67,x:13.7,y:29.7}).wait(1).to({graphics:mask_2_graphics_68,x:13.7,y:28.8}).wait(1).to({graphics:mask_2_graphics_69,x:13.7,y:28}).wait(1).to({graphics:mask_2_graphics_70,x:13.7,y:27.2}).wait(1).to({graphics:mask_2_graphics_71,x:13.7,y:26.5}).wait(1).to({graphics:mask_2_graphics_72,x:13.7,y:25.8}).wait(1).to({graphics:mask_2_graphics_73,x:13.7,y:25.3}).wait(1).to({graphics:mask_2_graphics_74,x:13.7,y:24.7}).wait(1).to({graphics:mask_2_graphics_75,x:13.7,y:24.2}).wait(1).to({graphics:mask_2_graphics_76,x:13.7,y:23.8}).wait(1).to({graphics:mask_2_graphics_77,x:13.7,y:23.4}).wait(1).to({graphics:mask_2_graphics_78,x:13.7,y:23.1}).wait(1).to({graphics:mask_2_graphics_79,x:13.7,y:22.8}).wait(1).to({graphics:mask_2_graphics_80,x:13.7,y:22.5}).wait(1).to({graphics:mask_2_graphics_81,x:13.7,y:22.3}).wait(1).to({graphics:mask_2_graphics_82,x:13.7,y:22.1}).wait(1).to({graphics:mask_2_graphics_83,x:13.7,y:22}).wait(1).to({graphics:mask_2_graphics_84,x:13.7,y:21.9}).wait(24).to({graphics:mask_2_graphics_108,x:13.7,y:21.9}).wait(1).to({graphics:mask_2_graphics_109,x:13.7,y:23.6}).wait(1).to({graphics:mask_2_graphics_110,x:13.7,y:25.3}).wait(1).to({graphics:mask_2_graphics_111,x:13.7,y:27}).wait(1).to({graphics:mask_2_graphics_112,x:13.7,y:28.8}).wait(1).to({graphics:mask_2_graphics_113,x:13.7,y:30.5}).wait(1).to({graphics:mask_2_graphics_114,x:13.7,y:32.1}).wait(1).to({graphics:mask_2_graphics_115,x:13.7,y:33.7}).wait(1).to({graphics:mask_2_graphics_116,x:13.7,y:35.3}).wait(1).to({graphics:mask_2_graphics_117,x:13.7,y:36.8}).wait(1).to({graphics:mask_2_graphics_118,x:13.7,y:38.2}).wait(1).to({graphics:mask_2_graphics_119,x:13.7,y:39.5}).wait(1).to({graphics:mask_2_graphics_120,x:13.7,y:40.7}).wait(1).to({graphics:mask_2_graphics_121,x:13.7,y:41.9}).wait(1).to({graphics:mask_2_graphics_122,x:13.7,y:43}).wait(1).to({graphics:mask_2_graphics_123,x:13.7,y:44}).wait(1).to({graphics:mask_2_graphics_124,x:13.7,y:44.9}).wait(1).to({graphics:mask_2_graphics_125,x:13.7,y:45.7}).wait(1).to({graphics:mask_2_graphics_126,x:13.7,y:46.5}).wait(1).to({graphics:mask_2_graphics_127,x:13.7,y:47.3}).wait(1).to({graphics:mask_2_graphics_128,x:13.7,y:47.9}).wait(1).to({graphics:mask_2_graphics_129,x:13.7,y:48.5}).wait(1).to({graphics:mask_2_graphics_130,x:13.7,y:49.1}).wait(1).to({graphics:mask_2_graphics_131,x:13.7,y:49.6}).wait(1).to({graphics:mask_2_graphics_132,x:13.7,y:50}).wait(1).to({graphics:mask_2_graphics_133,x:13.7,y:50.4}).wait(1).to({graphics:mask_2_graphics_134,x:13.7,y:50.8}).wait(1).to({graphics:mask_2_graphics_135,x:13.7,y:51.1}).wait(1).to({graphics:mask_2_graphics_136,x:13.7,y:51.4}).wait(1).to({graphics:mask_2_graphics_137,x:13.7,y:51.6}).wait(1).to({graphics:mask_2_graphics_138,x:13.7,y:51.8}).wait(1).to({graphics:mask_2_graphics_139,x:13.7,y:52}).wait(1).to({graphics:mask_2_graphics_140,x:13.7,y:52.2}).wait(1).to({graphics:mask_2_graphics_141,x:13.7,y:52.3}).wait(104));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B0F2").s().p("AgQF1QgIgGAAgKIAArKQAAgJAIgHQAGgGAKAAQALAAAGAGQAIAHAAAJIAALKQAAAKgIAGQgHAHgKAAQgKAAgGgHg");
	this.shape_2.setTransform(13.5,38);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(245));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.2,76);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon_3ani("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(54.3,43.9,1,1,0,0,0,48.3,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.5,47.5,97.2,76);
// library properties:
lib.properties = {
	id: '60806A2F2D1144D7BE24CAAD2A0B626F',
	width: 107,
	height: 85,
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
an.compositions['60806A2F2D1144D7BE24CAAD2A0B626F'] = {
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