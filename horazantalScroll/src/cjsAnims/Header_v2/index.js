(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,330);


(lib.bubble = function() {
	this.initialize(img.bubble);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,303);


(lib.fallingMan = function() {
	this.initialize(img.fallingMan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,82);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,525);


(lib.person_house = function() {
	this.initialize(img.person_house);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,183);


(lib.tap = function() {
	this.initialize(img.tap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,364);


(lib.Triangle7 = function() {
	this.initialize(img.Triangle7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,224);


(lib.Triangle8 = function() {
	this.initialize(img.Triangle8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,541,461);// helper functions:

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


(lib.Triangle8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Triangle8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Triangle8_1, new cjs.Rectangle(0,0,541,461), null);


(lib.Triangle7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Triangle7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Triangle7_1, new cjs.Rectangle(0,0,137,224), null);


(lib.tap_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tap();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tap_1, new cjs.Rectangle(0,0,209,364), null);


(lib.red_line4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(190,12,1,0.8)").s().p("EgBtAn+QBKiYBSjjQClnFAnlwICPhvIFFT3IA2nbQAjkuASiMIAIgxIBNnKQBWoIAIg3QAfjaAijkQBEnGAOgsIBVqBQBXqKALgwIBIp9QAFgXADglQAGhIgOhBIC2gRUgEvAhugAJAAyIjgVwQhKHIgOBgIgoEKQgoEXgFA9IgoGWIkZAbIjtvEIiQHaQiXHjgmAvgEgH4An+InX3+Ij1L1QjXKNg4B8IhhAAICNmlQCtoEAOgsQC2oFAFgyQABgRAShKQAPg9gDgaICPh5IAGAGQAGAHgDAOIIrccg");
	this.shape.setTransform(158.9,261.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_line4, new cjs.Rectangle(0,0,317.9,523.2), null);


(lib.person_house_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.person_house();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.person_house_1, new cjs.Rectangle(0,0,523,183), null);


(lib.man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_1, new cjs.Rectangle(0,0,570,525), null);


(lib.fallingMan_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fallingMan();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fallingMan_1, new cjs.Rectangle(0,0,206,82), null);


(lib.bubble_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubble();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble_1, new cjs.Rectangle(0,0,424,303), null);


(lib.tap6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlODNIAAmZIKdAAIAAGZg");
	mask.setTransform(144.4,209.7);

	// Layer 1
	this.instance = new lib.tap_1();
	this.instance.parent = this;
	this.instance.setTransform(104.5,182,1,1,0,0,0,104.5,182);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tap6, new cjs.Rectangle(110.9,189.2,67,41), null);


(lib.tap5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlODNIAAmZIKdAAIAAGZg");
	mask.setTransform(53.5,220.6);

	// Layer 1
	this.instance = new lib.tap_1();
	this.instance.parent = this;
	this.instance.setTransform(104.5,182,1,1,0,0,0,104.5,182);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tap5, new cjs.Rectangle(20,200.1,67,41), null);


(lib.tap3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8CtIAAlZIJ5AAIAAFZg");
	mask.setTransform(60.1,179.2);

	// Layer 1
	this.instance = new lib.tap_1();
	this.instance.parent = this;
	this.instance.setTransform(104.5,182,1,1,0,0,0,104.5,182);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tap3, new cjs.Rectangle(28.4,162,63.4,34.5), null);


(lib.tap2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak8CtIAAlZIJ5AAIAAFZg");
	mask.setTransform(43.9,46.3);

	// Layer 1
	this.instance = new lib.tap_1();
	this.instance.parent = this;
	this.instance.setTransform(104.5,182,1,1,0,0,0,104.5,182);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tap2, new cjs.Rectangle(12.2,29,63.4,34.5), null);


(lib.runningMan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al9D8IhCoyIHAiGIG/HWImqGkg");
	mask.setTransform(180.3,37.2);

	// Layer 1
	this.instance = new lib.fallingMan_1();
	this.instance.parent = this;
	this.instance.setTransform(103,41,1,1,0,0,0,103,41);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.runningMan, new cjs.Rectangle(135.5,0,70.5,81.8), null);


(lib.red_line_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_61 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(1));

	// Layer 26 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("EBhEBRtMAMEhTGIGxA+MgMEBTHg");
	var mask_graphics_46 = new cjs.Graphics().p("EBhgBOxMAMFhTGIGxA/MgMEBTGg");
	var mask_graphics_47 = new cjs.Graphics().p("EBh9BL2MAMEhTHIGyA/MgMFBTGg");
	var mask_graphics_48 = new cjs.Graphics().p("EBiaBI6MAMEhTGIGxA+MgMEBTHg");
	var mask_graphics_49 = new cjs.Graphics().p("EBi3BF+MAMEhTGIGxA/MgMEBTGg");
	var mask_graphics_50 = new cjs.Graphics().p("EBjTBDDMAMFhTHIGxA/MgMFBTGg");
	var mask_graphics_51 = new cjs.Graphics().p("EBjwBAHMAMEhTGIGxA+MgMEBTHg");
	var mask_graphics_52 = new cjs.Graphics().p("EBkNA9LMAMEhTGIGxA/MgMEBTGg");
	var mask_graphics_53 = new cjs.Graphics().p("EBkpA6QMAMFhTHIGxA/MgMEBTGg");
	var mask_graphics_54 = new cjs.Graphics().p("EBlGA3UMAMEhTGIGyA+MgMFBTHg");
	var mask_graphics_55 = new cjs.Graphics().p("EBljA0YMAMEhTGIGxA/MgMEBTGg");
	var mask_graphics_56 = new cjs.Graphics().p("EBl/AxdMAMFhTHIGxA/MgMEBTGg");
	var mask_graphics_57 = new cjs.Graphics().p("EBmcAuhMAMEhTGIGyA+MgMFBTHg");
	var mask_graphics_58 = new cjs.Graphics().p("EBm5ArlMAMEhTGIGxA/MgMEBTGg");
	var mask_graphics_59 = new cjs.Graphics().p("EBnWApEMAMEhTGIGxA/MgMEBTGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:741.7,y:529.2}).wait(1).to({graphics:mask_graphics_46,x:744.6,y:510.4}).wait(1).to({graphics:mask_graphics_47,x:747.5,y:491.6}).wait(1).to({graphics:mask_graphics_48,x:750.3,y:472.9}).wait(1).to({graphics:mask_graphics_49,x:753.2,y:454.1}).wait(1).to({graphics:mask_graphics_50,x:756.1,y:435.3}).wait(1).to({graphics:mask_graphics_51,x:758.9,y:416.6}).wait(1).to({graphics:mask_graphics_52,x:761.8,y:397.8}).wait(1).to({graphics:mask_graphics_53,x:764.7,y:379}).wait(1).to({graphics:mask_graphics_54,x:767.6,y:360.3}).wait(1).to({graphics:mask_graphics_55,x:770.4,y:341.5}).wait(1).to({graphics:mask_graphics_56,x:773.3,y:322.7}).wait(1).to({graphics:mask_graphics_57,x:776.2,y:304}).wait(1).to({graphics:mask_graphics_58,x:779,y:285.2}).wait(1).to({graphics:mask_graphics_59,x:781.9,y:263.8}).wait(3));

	// red_line4
	this.instance = new lib.red_line4();
	this.instance.parent = this;
	this.instance.setTransform(1381.6,261.6,1,1,0,0,0,158.9,261.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(17));

	// Layer 24 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_37 = new cjs.Graphics().p("EBjFAGAIGqhjIFpYZImrBig");
	var mask_1_graphics_38 = new cjs.Graphics().p("EBjYAHaIGrhiIFoYYImqBjg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EBjsAI0IGrhiIFoYZImrBig");
	var mask_1_graphics_40 = new cjs.Graphics().p("EBkAAKPIGqhjIFpYZImrBig");
	var mask_1_graphics_41 = new cjs.Graphics().p("EBkUALpIGqhjIFpYZImrBjg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EBknANDIGrhiIFoYYImqBjg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EBk7AOdIGrhiIFoYZImrBig");
	var mask_1_graphics_44 = new cjs.Graphics().p("EBlPAP4IGqhjIFpYZImrBig");
	var mask_1_graphics_45 = new cjs.Graphics().p("EBljARSIGqhjIFpYZImrBjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_1_graphics_37,x:712.8,y:194.5}).wait(1).to({graphics:mask_1_graphics_38,x:714.7,y:203.5}).wait(1).to({graphics:mask_1_graphics_39,x:716.7,y:212.5}).wait(1).to({graphics:mask_1_graphics_40,x:718.7,y:221.5}).wait(1).to({graphics:mask_1_graphics_41,x:720.7,y:230.6}).wait(1).to({graphics:mask_1_graphics_42,x:722.6,y:239.6}).wait(1).to({graphics:mask_1_graphics_43,x:724.6,y:248.6}).wait(1).to({graphics:mask_1_graphics_44,x:726.6,y:257.6}).wait(1).to({graphics:mask_1_graphics_45,x:728.6,y:266.7}).wait(17));

	// red_line4
	this.instance_1 = new lib.red_line4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1381.6,261.6,1,1,0,0,0,158.9,261.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(25));

	// Layer 22 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_29 = new cjs.Graphics().p("EBjSA06IC743IGzAzIi7Y3g");
	var mask_2_graphics_30 = new cjs.Graphics().p("EBjjAzZIC743IGzAzIi7Y3g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EBj0Ax4IC743IGzA0Ii7Y3g");
	var mask_2_graphics_32 = new cjs.Graphics().p("EBkFAwYIC743IGzAzIi7Y3g");
	var mask_2_graphics_33 = new cjs.Graphics().p("EBkVAu3IC843IGzAzIi8Y3g");
	var mask_2_graphics_34 = new cjs.Graphics().p("EBkmAtWIC743IGzAzIi7Y3g");
	var mask_2_graphics_35 = new cjs.Graphics().p("EBk3Ar1IC743IGzA0Ii7Y3g");
	var mask_2_graphics_36 = new cjs.Graphics().p("EBlIAqVIC743IGzAzIi7Y3g");
	var mask_2_graphics_37 = new cjs.Graphics().p("EBlZAo0IC743IGzAzIi7Y3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_2_graphics_29,x:697.6,y:343.7}).wait(1).to({graphics:mask_2_graphics_30,x:699.3,y:334}).wait(1).to({graphics:mask_2_graphics_31,x:701,y:324.4}).wait(1).to({graphics:mask_2_graphics_32,x:702.7,y:314.7}).wait(1).to({graphics:mask_2_graphics_33,x:704.4,y:305}).wait(1).to({graphics:mask_2_graphics_34,x:706,y:295.3}).wait(1).to({graphics:mask_2_graphics_35,x:707.7,y:285.7}).wait(1).to({graphics:mask_2_graphics_36,x:709.4,y:276}).wait(1).to({graphics:mask_2_graphics_37,x:711.1,y:266.3}).wait(25));

	// red_line4
	this.instance_2 = new lib.red_line4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1381.6,261.6,1,1,0,0,0,158.9,261.6);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(33));

	// Layer 20 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("EBXjgHYIFphhMAJAAhjIlpBhg");
	var mask_3_graphics_10 = new cjs.Graphics().p("EBYFgFdIFqhgMAI/AhjIlpBhg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EBYogDhIFphhMAJAAhkIlqBgg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EBZKgBlIFphhMAJAAhjIlpBhg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EBZsAAVIFphfMAJAAhjIlpBhg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EBaOACRIFqhhMAJAAhlIlqBhg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EBaxAENIFphhMAJAAhlIlpBgg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EBbTAGJIFphhMAJAAhkIlpBhg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EBb1AIEIFqhgMAI/AhkIlpBhg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:654,y:167.5}).wait(1).to({graphics:mask_3_graphics_10,x:657.4,y:179.9}).wait(1).to({graphics:mask_3_graphics_11,x:660.9,y:192.2}).wait(1).to({graphics:mask_3_graphics_12,x:664.3,y:204.6}).wait(1).to({graphics:mask_3_graphics_13,x:667.7,y:217}).wait(1).to({graphics:mask_3_graphics_14,x:671.2,y:229.4}).wait(1).to({graphics:mask_3_graphics_15,x:674.6,y:241.7}).wait(1).to({graphics:mask_3_graphics_16,x:678,y:254.1}).wait(1).to({graphics:mask_3_graphics_17,x:681.4,y:266.5}).wait(45));

	// red_line4
	this.instance_3 = new lib.red_line4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1381.6,261.6,1,1,0,0,0,158.9,261.6);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(53));

	// Layer 18 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("EBNyA3pMAI/ghlIJbCiMgI/Ahkg");
	var mask_4_graphics_1 = new cjs.Graphics().p("EBOWA14MAI/ghlIJbChMgJAAhlg");
	var mask_4_graphics_2 = new cjs.Graphics().p("EBO6A0GMAI/ghkIJbChMgJAAhlg");
	var mask_4_graphics_3 = new cjs.Graphics().p("EBPeAyVMAI/ghkIJbChMgJAAhlg");
	var mask_4_graphics_4 = new cjs.Graphics().p("EBQBAwkMAJAghlIJbCiMgJAAhkg");
	var mask_4_graphics_5 = new cjs.Graphics().p("EBQlAuzMAJAghlIJaCiMgI/Ahkg");
	var mask_4_graphics_6 = new cjs.Graphics().p("EBRJAtCMAJAghlIJaChMgI/Ahlg");
	var mask_4_graphics_7 = new cjs.Graphics().p("EBRtArQMAJAghkIJaChMgI/Ahlg");
	var mask_4_graphics_8 = new cjs.Graphics().p("EBSRApfMAI/ghlIJbCiMgI/Ahlg");
	var mask_4_graphics_9 = new cjs.Graphics().p("EBS1AnuMAI/ghlIJbCiMgI/Ahkg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:615.6,y:372.2}).wait(1).to({graphics:mask_4_graphics_1,x:619.2,y:360.9}).wait(1).to({graphics:mask_4_graphics_2,x:622.8,y:349.6}).wait(1).to({graphics:mask_4_graphics_3,x:626.4,y:338.3}).wait(1).to({graphics:mask_4_graphics_4,x:630,y:326.9}).wait(1).to({graphics:mask_4_graphics_5,x:633.5,y:315.6}).wait(1).to({graphics:mask_4_graphics_6,x:637.1,y:304.3}).wait(1).to({graphics:mask_4_graphics_7,x:640.7,y:293}).wait(1).to({graphics:mask_4_graphics_8,x:644.3,y:281.7}).wait(1).to({graphics:mask_4_graphics_9,x:647.9,y:270.3}).wait(53));

	// red_line4
	this.instance_4 = new lib.red_line4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1381.6,261.6,1,1,0,0,0,158.9,261.6);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1222.7,513.5,8.5,9.8);


(lib.house2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AovGnQABgBAIvCQAAABImgNIIkgOQALQRABABQAAABlDAsIlCAtIAAABQgEAAnWiQgAovGnIAAAAIAAAAIAAAAg");
	mask.setTransform(260,55.7);

	// Layer 1
	this.instance = new lib.person_house_1();
	this.instance.parent = this;
	this.instance.setTransform(261.5,91.5,1,1,0,0,0,261.5,91.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.house2, new cjs.Rectangle(204,0,112,112.4), null);


(lib.fallingMan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkeGOQBPg/A0iQQAchMADg7QADg8gbgNQgsgVhHibQgZg4gVg2IJSifIAZOdg");
	mask.setTransform(61.4,40.4);

	// Layer 1
	this.instance = new lib.fallingMan_1();
	this.instance.parent = this;
	this.instance.setTransform(103,41,1,1,0,0,0,103,41);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fallingMan2, new cjs.Rectangle(30.4,0,62,82), null);


(lib.bubble10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOF8IAAr3IKdAAIAAL3g");
	mask.setTransform(290.5,235.7);

	// Layer 1
	this.instance = new lib.bubble_1();
	this.instance.parent = this;
	this.instance.setTransform(212,151.5,1,1,0,0,0,212,151.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble10, new cjs.Rectangle(257,197.7,67,76), null);


(lib.bubble8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj+DrIAAnVIH9AAIAAHVg");
	mask.setTransform(391.6,208.1);

	// Layer 1
	this.instance = new lib.bubble_1();
	this.instance.parent = this;
	this.instance.setTransform(212,151.5,1,1,0,0,0,212,151.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble8, new cjs.Rectangle(366.1,184.6,51,47), null);


(lib.bubble7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlLE/IAAp9IKXAAIAAJ9g");
	mask.setTransform(399.6,48);

	// Layer 1
	this.instance = new lib.bubble_1();
	this.instance.parent = this;
	this.instance.setTransform(212,151.5,1,1,0,0,0,212,151.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble7, new cjs.Rectangle(366.4,16.1,57.6,63.9), null);


(lib.bubble2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkuEvIAApdIJdAAIAAJdg");
	mask.setTransform(174.3,40.6);

	// Layer 1
	this.instance = new lib.bubble_1();
	this.instance.parent = this;
	this.instance.setTransform(212,151.5,1,1,0,0,0,212,151.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble2, new cjs.Rectangle(143.9,10.3,60.7,60.7), null);


(lib.bubble10ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubble10();
	this.instance.parent = this;
	this.instance.setTransform(33.5,38.1,1,1,0,0,0,290.5,235.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:31.7},80,cjs.Ease.quadInOut).to({y:38.1},79,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257,-197.6,424,303);


(lib.bubble8ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubble8();
	this.instance.parent = this;
	this.instance.setTransform(25.5,23.5,1,1,0,0,0,391.6,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.5},109,cjs.Ease.quadInOut).to({y:23.5},115,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.1,-184.6,424,303);


(lib.bubble7ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubble7();
	this.instance.parent = this;
	this.instance.setTransform(28.8,32,1,1,0,0,0,395.2,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41.8},83,cjs.Ease.quadInOut).to({y:32},113,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.4,-16,432.9,303);


(lib.bubble2ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubble2();
	this.instance.parent = this;
	this.instance.setTransform(30.3,30.4,1,1,0,0,0,174.2,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24.6},67,cjs.Ease.quadInOut).to({y:30.4},74,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.9,-10.2,424,303);


(lib.bubble_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubble2ani
	this.instance = new lib.bubble2ani();
	this.instance.parent = this;
	this.instance.setTransform(1205.2,537.6,1,1,0,0,0,68.1,141.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bubble7ani
	this.instance_1 = new lib.bubble7ani();
	this.instance_1.parent = this;
	this.instance_1.setTransform(686.3,272.4,1,1,0,0,0,-150,135.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bubble8ani
	this.instance_2 = new lib.bubble8ani();
	this.instance_2.parent = this;
	this.instance_2.setTransform(963.8,415.8,1,1,0,0,0,-154.1,-33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bubble10ani
	this.instance_3 = new lib.bubble10ani();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1163.6,154.7,1,1,0,0,0,-45,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble_ani, new cjs.Rectangle(-12,-136.6,1429.2,825.7), null);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_342 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(342).call(this.frame_342).wait(1));

	// Layer 45
	this.instance = new lib.tap5();
	this.instance.parent = this;
	this.instance.setTransform(202,247.6,0.072,0.088,0,0,0,56.8,223);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({regX:53.8,regY:220.7,scaleX:0.76,scaleY:0.76,x:202.1},11,cjs.Ease.quadInOut).to({regY:220.8,scaleX:0.72,scaleY:0.72,x:201.9,y:247.7},9,cjs.Ease.quadInOut).wait(293));

	// Layer 43
	this.instance_1 = new lib.tap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-168.4,303.7,0.072,0.088,0,0,0,59.5,181);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({regX:60,regY:179.5,scaleX:0.76,scaleY:0.76,x:-168.3},11,cjs.Ease.quadInOut).to({regX:59.9,scaleX:0.72,scaleY:0.72,x:-168.4},9,cjs.Ease.quadInOut).wait(300));

	// Layer 42
	this.instance_2 = new lib.tap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-427,229.3,0.723,0.723,0,0,0,43.7,46.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({regX:43.4,x:-429,y:202.5},18,cjs.Ease.quadOut).wait(302));

	// Layer 34
	this.instance_3 = new lib.house2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(328.5,396.5,0.723,0.723,0,0,0,261.8,91.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({regY:91.7,y:344.4},17,cjs.Ease.quadOut).to({regY:91.8,y:350.3},10,cjs.Ease.quadInOut).wait(311));

	// red_line_ani
	this.instance_4 = new lib.red_line_ani();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-30.9,135.8,0.76,0.76,0,0,0,769.9,261.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).wait(320));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("EgiJgUyMA55gGVIAVBNMAKFAmLIqFCeMgjNAIlIvsD0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:395,y:191.1}).wait(338));

	// Layer 14
	this.instance_5 = new lib.Triangle8_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(477.1,504.5,0.723,0.723,0,0,0,270.9,230.7);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({regX:270.8,regY:230.9,x:417.7,y:210.2},17,cjs.Ease.quadOut).to({regY:230.8,y:218.6},10,cjs.Ease.quadInOut).wait(311));

	// Layer 13
	this.instance_6 = new lib.Triangle7_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(232.9,462.2,0.723,0.723,0,0,0,68.8,112.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({y:303.4},17,cjs.Ease.quadOut).to({regY:112.3,x:232.8,y:313.2},10,cjs.Ease.quadInOut).wait(314));

	// Layer 39
	this.instance_7 = new lib.man_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(167,524.9,0.723,0.723,0,0,0,284.7,262.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({y:164},17,cjs.Ease.quadOut).to({y:175.2},10,cjs.Ease.quadInOut).wait(302));

	// Layer 46
	this.instance_8 = new lib.tap6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(418.9,232.4,0.036,0.036,0,0,0,152.5,217.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({regX:146.6,regY:210,scaleX:0.76,scaleY:0.76,y:232.5},11,cjs.Ease.quadInOut).to({scaleX:0.72,scaleY:0.72,y:232.4},9,cjs.Ease.quadInOut).wait(316));

	// bubble_ani
	this.instance_9 = new lib.bubble_ani();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-25.6,53,0.723,0.723,0,0,0,754.3,230.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(342));

	// runningMan
	this.instance_10 = new lib.runningMan();
	this.instance_10.parent = this;
	this.instance_10.setTransform(440,145.9,0.723,0.723,-16,0,0,103.2,41.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(178).to({_off:false},0).to({regX:103.3,rotation:0,x:456.5,y:42.1},157,cjs.Ease.quadOut).wait(8));

	// fallingMan2
	this.instance_11 = new lib.fallingMan2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(228.5,48.4,0.723,0.723,-30,0,0,60.9,41.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({_off:false},0).to({regX:61.1,regY:41.3,rotation:0,x:229.2,y:194.9},307,cjs.Ease.quadOut).wait(8));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(342));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504,166,1314,329);
// library properties:
lib.properties = {
	id: '8E8413534CFF4C2B9CBDB6FD0CFAD527',
	width: 540,
	height: 330,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:require('./images/bg.jpg?1539941270356'), id:"bg"},
		{src:require('./images/bubble.png?1539941270356'), id:"bubble"},
		{src:require('./images/fallingMan.png?1539941270356'), id:"fallingMan"},
		{src:require('./images/man.png?1539941270356'), id:"man"},
		{src:require('./images/person_house.png?1539941270356'), id:"person_house"},
		{src:require('./images/tap.png?1539941270356'), id:"tap"},
		{src:require('./images/Triangle7.png?1539941270356'), id:"Triangle7"},
		{src:require('./images/Triangle8.png?1539941270356'), id:"Triangle8"}
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
an.compositions['8E8413534CFF4C2B9CBDB6FD0CFAD527'] = {
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