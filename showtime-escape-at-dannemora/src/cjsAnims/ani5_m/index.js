(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1605,872);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,628);


(lib.Needle = function() {
	this.initialize(img.Needle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,357);


(lib.woman = function() {
	this.initialize(img.woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,614);// helper functions:

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


(lib.woman_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.woman();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.woman_1, new cjs.Rectangle(0,0,173,614), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2.5,1,1).p("EAuoghHILsFtQGqDVECkbQEzlThNiYQgPgPgYABQgaABgaASIlhEEEA88gTXQB/g0BpgSQm6gXluF8IhUBIItytbQigj+BLirQAnhEBWAIEBHSgQ3QhpjIlEgeQgBAAAAAAQD6grCACWQAvA3AFBEQAODGlQE4EBIDgMlQAJijg6hvEAiZgUCQo+BMAeDeQAHCJDGDOIDnD/ID0DFIA9AyIDdCTQBRhgBih9QBChVB/ilQCxjkB7iMQAigmAdggEA0BgMaIgmglIgzgxIhCA6EAo7AAIIFBDWQJWGtJun9QH/mmg4ozEAnjABvQh1hYihggIhbgSIg/A5QkEDWA3DnQAcBEDdgUIGEmcIA7hFQAOgRAPgRAXUgTQgBACAAACQgTBCAjBzQAQAvAPAsQAkBkAlBOQDeHQEJlIIAtgwQAhgDAmgFEAkhgC9IivCiImLhSQjYgkgmCNEAjhAREQgBACgBAAQgpAngoATQgIAEgHADQhSAfhRgtQgegWACgmQAAgBAAgBQABgXARgbQAFgJAHgJQAPgGAQgEQAXgFAYABQBPADBSBHIASATIBpBuIAoApQAnArArApQEXBhAtmQQAOh/gJizQgqlfivi7QglgngqggEhJJgdQMAreARYMA7nAbKIBWA3IC8B3ICKBYQg0ApgzAxQgRAQgQARIjaDBQhFBGgPBLQgYB2BvCEQBjBZBjgEEAkYATYIAdASQBMAxBBAWQDMDCEmCSQDOBnD5BOQIJDSE1n4QAshMgNhAEAlIAS0QgYARgYATEAsGAQCQg6ANg8AMQiqApieBwEBDOAWIQghhQjKg9QjggyiWgBQiXAAhzAxQhqAuhsBnQhSBQiHCnQgBABAAABQhmBZAQBuQAOBlBgAxICtBQEBJHAPVQgGj/jmgFQkCgsjlAoQiJAYh/A3QmTCDnTBjEA9bAjVQG7ExDbwfQBdlRgEjBEAoJgGUIjoDX");
	this.shape.setTransform(468.2,233);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-1.2,-1.2,939,468.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.5,1,1).p("EAuoghHILsFtQGqDVECkbQEzlThNiYQgPgPgYABQgaABgaASIlhEEEBHSgQ3QhpjIlEgeQgBAAAAAAQm6gXluF8IhUBIItytbQigj+BLirQAnhEBWAIEA88gTXQB/g0BpgSQD6grCACWQAvA3AFBEEBIDgMlQAJijg6hvQAODGlQE4EAiZgUCQo+BMAeDeQAHCJDGDOIDnD/ID0DFIA9AyIDdCTQBRhgBih9QBChVB/ilQCxjkB7iMIgzgxIhCA6EA0BgMaIgmglQAigmAdggEAo7AAIIFBDWQJWGtJun9QH/mmg4ozEAnjABvIA7hFQAOgRAPgREAnjABvQh1hYihggIhbgSIg/A5QkEDWA3DnQAcBEDdgUQAhgDAmgFAXUgTQgBACAAACQgTBCAjBzQAQAvAPAsQAkBkAlBOQDeHQEJlIIAtgwIGEmcEAkhgC9IivCiImLhSQjYgkgmCNAfSQJQAFgJAHgJQAPgGAQgEQAXgFAYABQBPADBSBHIASATIBpBuQgYARgYATQg0ApgzAxQgRAQgQARIjaDBQhFBGgPBLQgYB2BvCEQBjBZBjgEEAjhAREQgBACgBAAQgpAngoATQgIAEgHADQhSAfhRgtQgegWACgmQAAgBAAgBQABgXARgbIC8B3ICKBYIAdASQBMAxBBAWQEXBhAtmQQg6ANg8AMQiqApieBwIAoApQAnArArApQDMDCEmCSQDOBnD5BOQIJDSE1n4QAshMgNhAEhJJgdQMAreARYMA7nAbKIBWA3EAsGAQCQAOh/gJizQgqlfivi7QglgngqggEBDOAWIQghhQjKg9QjggyiWgBQiXAAhzAxQhqAuhsBnQhSBQiHCnQgBABAAABQhmBZAQBuQAOBlBgAxICtBQEBJHAPVQgGj/jmgFQkCgsjlAoQiJAYh/A3QmTCDnTBjEA9bAjVQG7ExDbwfQBdlRgEjBEAoJgGUIjoDX");
	this.shape.setTransform(468.2,233);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.2,-1.2,939,468.4), null);


(lib.needle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Needle();
	this.instance.parent = this;
	this.instance.setTransform(-137.8,56.9,1,1,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.needle, new cjs.Rectangle(-137.8,-3.9,282.8,499.3), null);


(lib.man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_1, new cjs.Rectangle(0,0,204,628), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0B0C0C","rgba(12,66,48,0)"],[0,1],-267.8,0,360.3,0).s().p("Eg4SBIXMAAAiQtMBwlAAAMAAACQtg");
	this.shape.setTransform(267.8,463.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-92.5,0,720.7,926.2), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh9YBEIMAAAiIPMD6xAAAMAAACIPg");
	this.shape.setTransform(802.5,436);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,1605,872), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,1605,872), null);


(lib.red_line2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2.5,1,1).p("AlRr8QCig7g5ErQlsUcOmgJ");
	this.shape.setTransform(1059.5,238.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2.5,1,1).p("AlQr8QChg7g4ErQltUcOlgJ");
	this.shape_1.setTransform(1059.6,238.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2.5,1,1).p("AlQr8QCig6g5EqQlsUbOkgI");
	this.shape_2.setTransform(1059.9,238);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(2.5,1,1).p("AlPr7QChg6g4EqQlsUZOigI");
	this.shape_3.setTransform(1060.3,237.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(2.5,1,1).p("AlOr6QChg6g4EqQlrUWOfgH");
	this.shape_4.setTransform(1060.9,237.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(2.5,1,1).p("AlNr4QChg7g4ErQlqUROcgG");
	this.shape_5.setTransform(1061.7,237.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(2.5,1,1).p("AlMr3QCig6g5EqQloUNOYgE");
	this.shape_6.setTransform(1062.6,236.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(2.5,1,1).p("AlKr1QChg6g4EqQlnUHOTgC");
	this.shape_7.setTransform(1063.8,236.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(2.5,1,1).p("AlIryQChg7g4ErQllUAONgB");
	this.shape_8.setTransform(1065.1,235.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(2.5,1,1).p("AlGrwQCig6g5EqQljT5OHAC");
	this.shape_9.setTransform(1066.5,235.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(2.5,1,1).p("AlDrtQChg6g4EqQlhTwN/AE");
	this.shape_10.setTransform(1068.2,234.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(2.5,1,1).p("AlArqQChg6g4EqQleTnN2AH");
	this.shape_11.setTransform(1070,233.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(2.5,1,1).p("Ak9rmQChg6g4EqQlbTdNtAK");
	this.shape_12.setTransform(1072,232.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#666666").ss(2.5,1,1).p("Ak6riQChg7g4ErQlYTSNkAN");
	this.shape_13.setTransform(1074.2,231.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(2.5,1,1).p("Ak2reQChg6g4EqQlVTGNZAR");
	this.shape_14.setTransform(1076.5,230.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#666666").ss(2.5,1,1).p("AkzrZQCig7g5ErQlRS5NPAU");
	this.shape_15.setTransform(1079,229.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#666666").ss(2.5,1,1).p("AkurVQChg6g4EqQlOSsNCAY");
	this.shape_16.setTransform(1081.7,228.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#666666").ss(2.5,1,1).p("AkqrPQChg7g4ErQlKScM2Ad");
	this.shape_17.setTransform(1084.6,227.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#666666").ss(2.5,1,1).p("AklrKQChg6g4EqQlGSOMoAh");
	this.shape_18.setTransform(1087.6,225.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#666666").ss(2.5,1,1).p("AkgrEQChg7g4ErQlBR9MZAm");
	this.shape_19.setTransform(1090.8,224.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#666666").ss(2.5,1,1).p("Akbq+QChg7g4ErQk9RsMLAr");
	this.shape_20.setTransform(1094.2,223);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#666666").ss(2.5,1,1).p("AkWq4QCig6g5EqQk3RaL7Aw");
	this.shape_21.setTransform(1097.7,221.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#666666").ss(2.5,1,1).p("AkQqxQChg6g4EqQkzRHLrA2");
	this.shape_22.setTransform(1101.5,219.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#666666").ss(2.5,1,1).p("AkKqqQCig6g5EqQktQzLZA8");
	this.shape_23.setTransform(1105.4,218.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#666666").ss(2.5,1,1).p("AkEqjQCig6g5EqQknQeLGBC");
	this.shape_24.setTransform(1109.4,216.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#666666").ss(2.5,1,1).p("Aj9qbQChg7g4ErQkiQIK0BJ");
	this.shape_25.setTransform(1113.7,214.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#666666").ss(2.5,1,1).p("Aj2qTQChg7g4ErQkbPxKfBQ");
	this.shape_26.setTransform(1118.1,212.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#666666").ss(2.5,1,1).p("AjvqLQChg6g4EqQkVPbKLBW");
	this.shape_27.setTransform(1122.7,210.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#666666").ss(2.5,1,1).p("AjoqCQCig7g5ErQkOPCJ2Bd");
	this.shape_28.setTransform(1127.4,208.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#666666").ss(2.5,1,1).p("Ajgp5QChg7g4ErQkIOpJgBk");
	this.shape_29.setTransform(1132.4,206.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#666666").ss(2.5,1,1).p("AjZpwQCig7g5ErQj/OPJJBs");
	this.shape_30.setTransform(1137.5,204.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#666666").ss(2.5,1,1).p("AjQpnQChg7g4ErQj5N1IyB0");
	this.shape_31.setTransform(1142.6,201.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#666666").ss(2.5,1,1).p("AjJpeQCig7g5ErQjzNcIdB7");
	this.shape_32.setTransform(1147.6,199.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#666666").ss(2.5,1,1).p("AjCpWQCig6g5EqQjrNEIHCC");
	this.shape_33.setTransform(1152.3,197.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#666666").ss(2.5,1,1).p("Ai7pNQCig7g5ErQjlMsHzCJ");
	this.shape_34.setTransform(1156.9,195.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#666666").ss(2.5,1,1).p("Ai0pFQCig7g5ErQjfMVHfCQ");
	this.shape_35.setTransform(1161.3,193.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#666666").ss(2.5,1,1).p("Aito+QChg6g4EqQjaMAHMCX");
	this.shape_36.setTransform(1165.6,191.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#666666").ss(2.5,1,1).p("Aino3QCig6g5EqQjTLrG5Cd");
	this.shape_37.setTransform(1169.6,190.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#666666").ss(2.5,1,1).p("AihowQChg6g4EqQjOLYGoCi");
	this.shape_38.setTransform(1173.5,188.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#666666").ss(2.5,1,1).p("AibopQCgg6g3EqQjJLFGXCo");
	this.shape_39.setTransform(1177.3,186.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#666666").ss(2.5,1,1).p("AiWoiQChg7g4ErQjEKyGICt");
	this.shape_40.setTransform(1180.8,185.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#666666").ss(2.5,1,1).p("AiQocQCgg7g3ErQjAKhF4Cy");
	this.shape_41.setTransform(1184.2,183.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#666666").ss(2.5,1,1).p("AiMoXQChg6g4EqQi7KRFqC3");
	this.shape_42.setTransform(1187.4,182.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#666666").ss(2.5,1,1).p("AiHoRQChg7g4ErQi3KBFdC8");
	this.shape_43.setTransform(1190.4,181);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#666666").ss(2.5,1,1).p("AiDoMQChg6g4EqQizJzFQDA");
	this.shape_44.setTransform(1193.3,179.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#666666").ss(2.5,1,1).p("Ah+oHQCgg7g3ErQivJlFDDE");
	this.shape_45.setTransform(1196,178.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#666666").ss(2.5,1,1).p("Ah6oDQCgg6g3EqQisJYE4DI");
	this.shape_46.setTransform(1198.5,177.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#666666").ss(2.5,1,1).p("Ah3n+QChg7g4ErQioJMEuDL");
	this.shape_47.setTransform(1200.8,176.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#666666").ss(2.5,1,1).p("Ah0n7QChg6g4EqQilJBElDP");
	this.shape_48.setTransform(1203,175.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#666666").ss(2.5,1,1).p("Ahwn3QCgg6g3EqQijI3EbDS");
	this.shape_49.setTransform(1205,174.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#666666").ss(2.5,1,1).p("Ahtn0QCgg6g3EqQigIuESDV");
	this.shape_50.setTransform(1206.8,173.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#666666").ss(2.5,1,1).p("AhrnxQCgg6g3EqQieImEMDW");
	this.shape_51.setTransform(1208.5,173.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#666666").ss(2.5,1,1).p("AhpnuQChg7g4ErQibIeEFDZ");
	this.shape_52.setTransform(1209.9,172.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#666666").ss(2.5,1,1).p("AhnnsQChg6g5EqQiZIXEADb");
	this.shape_53.setTransform(1211.2,172);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#666666").ss(2.5,1,1).p("AhlnqQChg6g5EqQiXISD6Dc");
	this.shape_54.setTransform(1212.4,171.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#666666").ss(2.5,1,1).p("AhjnoQCgg7g4ErQiWIMD1Df");
	this.shape_55.setTransform(1213.3,171.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#666666").ss(2.5,1,1).p("AhinnQCgg6g4EqQiVIJDzDf");
	this.shape_56.setTransform(1214.1,170.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#666666").ss(2.5,1,1).p("AhhnmQCgg6g4EqQiUIGDwDg");
	this.shape_57.setTransform(1214.7,170.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#666666").ss(2.5,1,1).p("AhhnlQChg6g5EqQiTIDDuDh");
	this.shape_58.setTransform(1215.1,170.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#666666").ss(2.5,1,1).p("AhhnkQChg7g4ErQiUICDuDh");
	this.shape_59.setTransform(1215.4,170.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#666666").ss(2.5,1,1).p("AhgnkQCgg7g4ErQiTIBDsDi");
	this.shape_60.setTransform(1215.5,170.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[]},21).wait(6));

	// Layer_12
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#666666").ss(2.5,1,1).p("AsVDuQMekzMNio");
	this.shape_61.setTransform(724.7,326.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#666666").ss(2.5,1,1).p("AsUDtQMdkyMMin");
	this.shape_62.setTransform(724.7,326.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#666666").ss(2.5,1,1).p("AsSDsQMbkxMKim");
	this.shape_63.setTransform(724.7,326.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#666666").ss(2.5,1,1).p("AsPDrQMYkwMHim");
	this.shape_64.setTransform(724.7,326.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#666666").ss(2.5,1,1).p("AsMDqQMVkvMEil");
	this.shape_65.setTransform(724.8,326.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#666666").ss(2.5,1,1).p("AsIDpQMRktMAik");
	this.shape_66.setTransform(724.8,326.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#666666").ss(2.5,1,1).p("AsDDoQMLksL8ii");
	this.shape_67.setTransform(724.9,326.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#666666").ss(2.5,1,1).p("Ar+DmQMGkpL2ii");
	this.shape_68.setTransform(725,326.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#666666").ss(2.5,1,1).p("Ar3DkQMAknLvig");
	this.shape_69.setTransform(725,326.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#666666").ss(2.5,1,1).p("ArwDiQL5kjLoif");
	this.shape_70.setTransform(725.1,326.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#666666").ss(2.5,1,1).p("AroDfQLwkgLhid");
	this.shape_71.setTransform(725.2,326.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#666666").ss(2.5,1,1).p("ArfDcQLnkcLZib");
	this.shape_72.setTransform(725.3,326.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#666666").ss(2.5,1,1).p("ArWDZQLekYLPiZ");
	this.shape_73.setTransform(725.4,326.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#666666").ss(2.5,1,1).p("ArMDWQLUkULFiW");
	this.shape_74.setTransform(725.5,326.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#666666").ss(2.5,1,1).p("ArBDSQLJkPK6iU");
	this.shape_75.setTransform(725.7,326.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#666666").ss(2.5,1,1).p("Aq2DOQK+kKKviR");
	this.shape_76.setTransform(725.8,326.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#666666").ss(2.5,1,1).p("AqpDKQKwkEKjiP");
	this.shape_77.setTransform(725.9,326.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#666666").ss(2.5,1,1).p("AqcDGQKjj/KWiM");
	this.shape_78.setTransform(726.1,326.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#666666").ss(2.5,1,1).p("AqODCQKVj5KIiK");
	this.shape_79.setTransform(726.2,326);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#666666").ss(2.5,1,1).p("AqAC9QKHjzJ6iF");
	this.shape_80.setTransform(726.4,325.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#666666").ss(2.5,1,1).p("ApwC4QJ3jsJriC");
	this.shape_81.setTransform(726.6,325.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#666666").ss(2.5,1,1).p("AphCyQJnjkJch/");
	this.shape_82.setTransform(726.8,325.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#666666").ss(2.5,1,1).p("ApQCtQJWjeJLh7");
	this.shape_83.setTransform(727,325.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#666666").ss(2.5,1,1).p("Ao+CnQJEjWI5h3");
	this.shape_84.setTransform(727.2,325.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#666666").ss(2.5,1,1).p("AosChQIyjOInhz");
	this.shape_85.setTransform(727.4,325.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#666666").ss(2.5,1,1).p("AoZCbQIfjGIUhv");
	this.shape_86.setTransform(727.6,325.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#666666").ss(2.5,1,1).p("AoFCUQILi9IAhq");
	this.shape_87.setTransform(727.8,325.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#666666").ss(2.5,1,1).p("AnxCOQH2i1Hthm");
	this.shape_88.setTransform(728.1,324.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#666666").ss(2.5,1,1).p("AnbCGQHgirHXhg");
	this.shape_89.setTransform(728.3,324.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#666666").ss(2.5,1,1).p("AnFCAQHKiiHBhd");
	this.shape_90.setTransform(728.6,324.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#666666").ss(2.5,1,1).p("AmvB5QG0iZGrhY");
	this.shape_91.setTransform(728.8,324.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#666666").ss(2.5,1,1).p("AmZBxQGdiPGXhS");
	this.shape_92.setTransform(729.1,324.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#666666").ss(2.5,1,1).p("AmFBrQGJiHGChO");
	this.shape_93.setTransform(729.3,324.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#666666").ss(2.5,1,1).p("AlxBkQF0h+FvhJ");
	this.shape_94.setTransform(729.5,324.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#666666").ss(2.5,1,1).p("AleBeQFhh2FchF");
	this.shape_95.setTransform(729.7,324);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#666666").ss(2.5,1,1).p("AlMBYQFPhuFKhB");
	this.shape_96.setTransform(730,323.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#666666").ss(2.5,1,1).p("Ak7BSQE9hmE5g9");
	this.shape_97.setTransform(730.2,323.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#666666").ss(2.5,1,1).p("AkqBNQEthfEog6");
	this.shape_98.setTransform(730.4,323.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#666666").ss(2.5,1,1).p("AkaBHQEchXEZg2");
	this.shape_99.setTransform(730.5,323.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#666666").ss(2.5,1,1).p("AkKBDQEMhREJgz");
	this.shape_100.setTransform(730.7,323.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#666666").ss(2.5,1,1).p("Aj8A+QD+hLD7gv");
	this.shape_101.setTransform(730.9,323.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#666666").ss(2.5,1,1).p("AjuA5QDwhFDtgs");
	this.shape_102.setTransform(731,323.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#666666").ss(2.5,1,1).p("AjhA1QDjg/Dggq");
	this.shape_103.setTransform(731.2,323.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#666666").ss(2.5,1,1).p("AjUAxQDVg6DUgn");
	this.shape_104.setTransform(731.3,323);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#666666").ss(2.5,1,1).p("AjJAtQDKg0DJgl");
	this.shape_105.setTransform(731.5,323);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#666666").ss(2.5,1,1).p("Ai+AqQC/gxC+gh");
	this.shape_106.setTransform(731.6,322.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#666666").ss(2.5,1,1).p("Ai0AmQC1gsC0gf");
	this.shape_107.setTransform(731.7,322.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#666666").ss(2.5,1,1).p("AiqAjQCrgoCrgd");
	this.shape_108.setTransform(731.8,322.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#666666").ss(2.5,1,1).p("AiiAhQCjgkCigd");
	this.shape_109.setTransform(731.9,322.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#666666").ss(2.5,1,1).p("AiaAeQCaghCbgZ");
	this.shape_110.setTransform(732,322.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#666666").ss(2.5,1,1).p("AiTAcQCUgeCTgZ");
	this.shape_111.setTransform(732.1,322.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#666666").ss(2.5,1,1).p("AiMAZQCNgbCMgW");
	this.shape_112.setTransform(732.2,322.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#666666").ss(2.5,1,1).p("AiHAYQCHgYCIgX");
	this.shape_113.setTransform(732.2,322.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#666666").ss(2.5,1,1).p("AiCAWQCCgWCDgV");
	this.shape_114.setTransform(732.3,322.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#666666").ss(2.5,1,1).p("Ah+AVQB+gVB/gU");
	this.shape_115.setTransform(732.3,322.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#666666").ss(2.5,1,1).p("Ah7ATQB7gTB8gS");
	this.shape_116.setTransform(732.4,322.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#666666").ss(2.5,1,1).p("Ah4ATQB4gTB5gS");
	this.shape_117.setTransform(732.4,322.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#666666").ss(2.5,1,1).p("Ah2ASQB2gSB3gR");
	this.shape_118.setTransform(732.4,322.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#666666").ss(2.5,1,1).p("Ah1ASQB1gSB2gR");
	this.shape_119.setTransform(732.4,322.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#666666").ss(2.5,1,1).p("Ah1ASIDrgj");
	this.shape_120.setTransform(732.4,322.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},4).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[]},21).wait(6));

	// Layer_13
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#666666").ss(2.5,1,1).p("AqeI1QNWk/Hmsq");
	this.shape_121.setTransform(952.2,222.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#666666").ss(2.5,1,1).p("AqeI1QDphXDOh7QC7hxCkiPQCgiKCLioQCJilBzjA");
	this.shape_122.setTransform(952.2,222.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#666666").ss(2.5,1,1).p("AqgI2QDqhYDOh7QC8hxCkiPQCgiKCMipQCJikB0jB");
	this.shape_123.setTransform(952.4,222.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#666666").ss(2.5,1,1).p("AqjI3QDrhYDOh8QC9hxCliPQChiLCMioQCLilB0jB");
	this.shape_124.setTransform(952.5,222.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#666666").ss(2.5,1,1).p("AqnI4QDrhZDQh8QC+hyCmiPQChiLCPipQCLilB1jA");
	this.shape_125.setTransform(952.8,222.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#666666").ss(2.5,1,1).p("AqtI5QDthYDRh9QC/hzCniQQCjiLCQipQCNilB3jA");
	this.shape_126.setTransform(953.1,222);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#666666").ss(2.5,1,1).p("Aq0I7QDvhZDSh+QDBhzCoiRQCliLCSipQCOimB6jA");
	this.shape_127.setTransform(953.5,222);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#666666").ss(2.5,1,1).p("Aq8I9QDxhaDUh/QDDh0CqiRQCmiMCUipQCRimB8jA");
	this.shape_128.setTransform(953.9,221.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#666666").ss(2.5,1,1).p("ArFJAQDzhcDWiAQDGh1CriRQCoiNCXiqQCUimB+jA");
	this.shape_129.setTransform(954.5,221.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#666666").ss(2.5,1,1).p("ArPJCQD1hcDZiCQDIh2CuiSQCqiNCaiqQCXimCAjA");
	this.shape_130.setTransform(955.1,221.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#666666").ss(2.5,1,1).p("ArbJFQD4heDciCQDLh4CwiSQCsiOCeiqQCbioCDi/");
	this.shape_131.setTransform(955.7,221.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#666666").ss(2.5,1,1).p("AroJJQD8hgDfiEQDOh5CyiTQCviPCiiqQCfioCGjA");
	this.shape_132.setTransform(956.4,221.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#666666").ss(2.5,1,1).p("Ar2JNQD/hhDiiGQDSh8C1iTQCyiPCmirQCjipCKjA");
	this.shape_133.setTransform(957.2,221.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#666666").ss(2.5,1,1).p("AsGJRQEDhkDmiHQDWh9C4iVQC1iQCrisQCoipCOi/");
	this.shape_134.setTransform(958.1,221.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#666666").ss(2.5,1,1).p("AsWJVQEHhlDqiJQDah/C7iVQC4iRCwitQCuiqCSi/");
	this.shape_135.setTransform(959.1,221.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#666666").ss(2.5,1,1).p("AsoJZQEMhmDuiMQDeiBC/iWQC7iSC2itQCzirCWi/");
	this.shape_136.setTransform(960.1,221);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#666666").ss(2.5,1,1).p("As8JfQEShpDyiOQDjiEDDiWQC/iTC7iuQC5irCcjA");
	this.shape_137.setTransform(961.2,220.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#666666").ss(2.5,1,1).p("AtQJkQEWhrD3iQQDoiGDHiYQDDiUDCivQC/isChi/");
	this.shape_138.setTransform(962.3,220.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#666666").ss(2.5,1,1).p("AtlJqQEahuD9iSQDtiJDLiZQDIiVDJiwQDFitCmi/");
	this.shape_139.setTransform(963.6,220.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#666666").ss(2.5,1,1).p("At8JvQEhhwEBiUQD0iMDPiaQDMiXDQixQDMitCsi+");
	this.shape_140.setTransform(964.8,220.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#666666").ss(2.5,1,1).p("AuVJ2QEnhzEIiYQD5iODUicQDRiXDXiyQDVivCyi+");
	this.shape_141.setTransform(966.2,220.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#666666").ss(2.5,1,1).p("AuuJ8QEth2EOiaQD/iSDZicQDWiZDfizQDciwC5i9");
	this.shape_142.setTransform(967.7,219.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#666666").ss(2.5,1,1).p("AvIKDQE0h5ETidQEGiVDfieQDbibDmizQDlixC/i9");
	this.shape_143.setTransform(969.2,219.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#666666").ss(2.5,1,1).p("AvkKLQE7h9EaigQENiZDkifQDhicDvi0QDtizDGi9");
	this.shape_144.setTransform(970.7,219.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#666666").ss(2.5,1,1).p("AwBKSQFCh/EhikQEUicDqihQDmidD4i2QD3izDNi9");
	this.shape_145.setTransform(972.4,219.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#666666").ss(2.5,1,1).p("AwfKaQFKiDEoinQEcigDviiQDsifECi3QD/i1DVi8");
	this.shape_146.setTransform(974.1,219);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#666666").ss(2.5,1,1).p("Aw+KiQFRiHEwiqQEkijD1ikQDzihELi4QEJi2Ddi8");
	this.shape_147.setTransform(975.9,218.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#666666").ss(2.5,1,1).p("AxfKrQFZiKE3iuQEtioD7imQD6iiEVi6QETi3Dli8");
	this.shape_148.setTransform(977.7,218.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#666666").ss(2.5,1,1).p("AyBK0QFiiPE/ixQE1isECioQEAikEgi7QEdi4Dui8");
	this.shape_149.setTransform(979.6,218.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#666666").ss(2.5,1,1).p("AykK9QFriSFHi2QE9iwEKipQEHinEqi8QEpi6D2i7");
	this.shape_150.setTransform(981.6,217.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#666666").ss(2.5,1,1).p("AzJLGQF0iWFQi6QFHi0EQirQEOioE2i+QE0i8EAi6");
	this.shape_151.setTransform(983.7,217.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#666666").ss(2.5,1,1).p("AztLQQF9ibFYi9QFQi5EXitQEWiqFBi/QE/i+EJi6");
	this.shape_152.setTransform(985.8,217.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#666666").ss(2.5,1,1).p("A0QLZQGGieFgjDQFZi8EeivQEdisFLjBQFKi/ESi5");
	this.shape_153.setTransform(987.8,217.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#666666").ss(2.5,1,1).p("A0yLiQGPijFojFQFhjCEliwQEjiuFWjBQFVjAEai6");
	this.shape_154.setTransform(989.7,216.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#666666").ss(2.5,1,1).p("A1TLqQGXilFwjKQFpjFEsiyQEpiwFhjDQFejCEji5");
	this.shape_155.setTransform(991.6,216.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#666666").ss(2.5,1,1).p("A1yLyQGeipF4jNQFxjJExizQExiyFpjEQFojDEri4");
	this.shape_156.setTransform(993.3,216.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#666666").ss(2.5,1,1).p("A2QL7QGmiuF/jPQF4jNE3i0QE3i0FzjGQFxjEEyi5");
	this.shape_157.setTransform(995.1,216);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#666666").ss(2.5,1,1).p("A2uMCQGuiwGGjTQF/jRE9i1QE8i2F8jGQF7jGE6i4");
	this.shape_158.setTransform(996.7,215.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#666666").ss(2.5,1,1).p("A3KMJQG2izGLjXQGHjTFDi3QFBi3GFjIQGDjGFBi4");
	this.shape_159.setTransform(998.3,215.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#666666").ss(2.5,1,1).p("A3kMQQG8i2GRjaQGOjXFIi4QFHi5GMjIQGMjIFHi3");
	this.shape_160.setTransform(999.8,215.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#666666").ss(2.5,1,1).p("A39MXQHCi6GYjcQGTjaFNi6QFMi6GUjJQGTjJFOi3");
	this.shape_161.setTransform(1001.2,215.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#666666").ss(2.5,1,1).p("A4VMdQHHi8GejfQGajdFRi7QFRi7GbjKQGbjKFUi3");
	this.shape_162.setTransform(1002.6,214.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#666666").ss(2.5,1,1).p("A4sMjQHNi+GjjiQGgjgFWi9QFVi7GijMQGjjLFZi2");
	this.shape_163.setTransform(1003.9,214.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#666666").ss(2.5,1,1).p("A5CMpQHTjCGojkQGljiFai9QFai+GpjMQGojLFgi3");
	this.shape_164.setTransform(1005.1,214.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#666666").ss(2.5,1,1).p("A5WMuQHYjDGsjnQGrjlFei+QFei/GvjNQGvjMFki2");
	this.shape_165.setTransform(1006.3,214.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#666666").ss(2.5,1,1).p("A5pMzQHdjGGxjoQGvjnFii/QFhjAG1jOQG1jNFpi2");
	this.shape_166.setTransform(1007.3,214.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#666666").ss(2.5,1,1).p("A57M4QHhjIG2jqQGzjqFljAQFljAG7jPQG6jOFui2");
	this.shape_167.setTransform(1008.4,214.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#666666").ss(2.5,1,1).p("A6MM8QHmjJG5jsQG4jsFojBQFojCHAjOQHAjPFyi2");
	this.shape_168.setTransform(1009.3,214);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#666666").ss(2.5,1,1).p("A6bNAQHpjMG9juQG7jtFsjCQFrjCHFjQQHEjPF2i1");
	this.shape_169.setTransform(1010.2,213.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#666666").ss(2.5,1,1).p("A6pNEQHsjNHBjwQG/jvFujCQFujDHJjRQHJjPF5i2");
	this.shape_170.setTransform(1011,213.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#666666").ss(2.5,1,1).p("A63NHQHwjOHEjxQHCjxFxjDQFxjEHNjRQHMjQF+i1");
	this.shape_171.setTransform(1011.7,213.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#666666").ss(2.5,1,1).p("A7CNKQHzjQHGjyQHFjyF0jEQFzjEHRjRQHPjRGAi1");
	this.shape_172.setTransform(1012.4,213.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#666666").ss(2.5,1,1).p("A7MNNQH1jRHJjzQHIj0F1jEQF1jFHUjRQHTjSGCi1");
	this.shape_173.setTransform(1013,213.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#666666").ss(2.5,1,1).p("A7WNPQH4jSHLj0QHKj1F3jFQF3jFHXjSQHWjSGFi0");
	this.shape_174.setTransform(1013.5,213.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#666666").ss(2.5,1,1).p("A7eNRQH6jTHNj1QHMj2F5jFQF4jGHZjSQHZjSGHi1");
	this.shape_175.setTransform(1013.9,213.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#666666").ss(2.5,1,1).p("A7lNTQH8jUHOj2QHOj2F6jGQF6jGHbjSQHbjTGJi0");
	this.shape_176.setTransform(1014.3,213.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#666666").ss(2.5,1,1).p("A7qNVQH9jUHPj3QHQj4F7jGQF7jGHdjSQHcjTGKi0");
	this.shape_177.setTransform(1014.7,213.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#666666").ss(2.5,1,1).p("A7vNWQH+jVHRj3QHQj4F8jGQF8jHHfjTQHdjSGLi1");
	this.shape_178.setTransform(1014.9,213.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#666666").ss(2.5,1,1).p("A7yNXQH/jVHSj5QHRj4F8jFQF9jIHfjSQHejTGNi1");
	this.shape_179.setTransform(1015.1,213.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#666666").ss(2.5,1,1).p("A7zNXQH/jVHSj4QHRj5F9jGQF9jHHgjTQHfjTGMi0");
	this.shape_180.setTransform(1015.2,213.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#666666").ss(2.5,1,1).p("A70NXQIAjVHRj5QHSj4F9jGQF9jHHgjTQHgjTGMi0");
	this.shape_181.setTransform(1015.2,213.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121}]},4).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[]},21).wait(6));

	// Layer_7
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#666666").ss(2.5,1,1).p("AIPDNQNXk+HmsrA9LOdQMfk0MNin");
	this.shape_182.setTransform(832.5,258.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_182).to({_off:true},4).wait(87));

	// Layer_9 copy
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#666666").ss(2.5,1,1).p("AJ0iaQq2DdoxBY");
	this.shape_183.setTransform(762.4,-12.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#666666").ss(2.5,1,1).p("ApyCbQIwhYK1jd");
	this.shape_184.setTransform(762.4,-12.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#666666").ss(2.5,1,1).p("ApxCbQIvhYK0jd");
	this.shape_185.setTransform(762.4,-12.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#666666").ss(2.5,1,1).p("ApwCaQIuhXKzjc");
	this.shape_186.setTransform(762.3,-12.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#666666").ss(2.5,1,1).p("ApuCaQIshXKxjc");
	this.shape_187.setTransform(762.3,-12.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#666666").ss(2.5,1,1).p("AprCZQIqhWKtjb");
	this.shape_188.setTransform(762.2,-12.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#666666").ss(2.5,1,1).p("ApnCYQImhWKpjZ");
	this.shape_189.setTransform(762.2,-12.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#666666").ss(2.5,1,1).p("ApjCXQIjhWKkjX");
	this.shape_190.setTransform(762.1,-12.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#666666").ss(2.5,1,1).p("ApeCWQIehVKfjW");
	this.shape_191.setTransform(762,-12.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#666666").ss(2.5,1,1).p("ApZCVQIZhUKajV");
	this.shape_192.setTransform(762,-12.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#666666").ss(2.5,1,1).p("ApTCTQIVhTKSjS");
	this.shape_193.setTransform(761.8,-12.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#666666").ss(2.5,1,1).p("ApMCRQIOhSKLjP");
	this.shape_194.setTransform(761.7,-12.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#666666").ss(2.5,1,1).p("ApFCPQIIhRKDjM");
	this.shape_195.setTransform(761.6,-12.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#666666").ss(2.5,1,1).p("Ao9CNQIBhQJ6jJ");
	this.shape_196.setTransform(761.5,-12.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#666666").ss(2.5,1,1).p("Ao0CLQH5hPJwjG");
	this.shape_197.setTransform(761.3,-12.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#666666").ss(2.5,1,1).p("AorCJQHxhOJmjD");
	this.shape_198.setTransform(761.2,-12.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#666666").ss(2.5,1,1).p("AohCHQHohNJbjA");
	this.shape_199.setTransform(761,-12.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#666666").ss(2.5,1,1).p("AoWCEQHfhLJPi8");
	this.shape_200.setTransform(760.9,-12.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#666666").ss(2.5,1,1).p("AoLCBQHVhKJCi3");
	this.shape_201.setTransform(760.6,-12.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#666666").ss(2.5,1,1).p("AoAB+QHLhII2iz");
	this.shape_202.setTransform(760.5,-12.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#666666").ss(2.5,1,1).p("AnzB7QG/hGIoiv");
	this.shape_203.setTransform(760.3,-12.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#666666").ss(2.5,1,1).p("AnmB4QG1hFIYiq");
	this.shape_204.setTransform(760,-12);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#666666").ss(2.5,1,1).p("AnYB0QGohCIJil");
	this.shape_205.setTransform(759.8,-11.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#666666").ss(2.5,1,1).p("AnKBwQGbhAH6if");
	this.shape_206.setTransform(759.6,-11.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#666666").ss(2.5,1,1).p("Am7BtQGOg/Hpia");
	this.shape_207.setTransform(759.3,-11.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#666666").ss(2.5,1,1).p("AmrBpQGAg9HXiU");
	this.shape_208.setTransform(759,-11.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#666666").ss(2.5,1,1).p("AmbBkQFyg5HFiO");
	this.shape_209.setTransform(758.8,-11.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#666666").ss(2.5,1,1).p("AmKBgQFjg4GyiH");
	this.shape_210.setTransform(758.5,-11.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#666666").ss(2.5,1,1).p("Al4BcQFTg2GeiB");
	this.shape_211.setTransform(758.2,-11.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#666666").ss(2.5,1,1).p("AlmBXQFDgzGKh6");
	this.shape_212.setTransform(757.9,-11.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#666666").ss(2.5,1,1).p("AlTBSQEygwF1h0");
	this.shape_213.setTransform(757.6,-11.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#666666").ss(2.5,1,1).p("AlABOQEigvFfhs");
	this.shape_214.setTransform(757.3,-11);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#666666").ss(2.5,1,1).p("AkvBJQESgsFMhl");
	this.shape_215.setTransform(757,-10.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#666666").ss(2.5,1,1).p("AkdBFQECgqE5hf");
	this.shape_216.setTransform(756.7,-10.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#666666").ss(2.5,1,1).p("AkMBBQD0goElhZ");
	this.shape_217.setTransform(756.4,-10.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#666666").ss(2.5,1,1).p("Aj8A8QDlgkEUhT");
	this.shape_218.setTransform(756.1,-10.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#666666").ss(2.5,1,1).p("AjsA4QDYgiEBhN");
	this.shape_219.setTransform(755.8,-10.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#666666").ss(2.5,1,1).p("AjdA1QDKghDxhI");
	this.shape_220.setTransform(755.6,-10.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#666666").ss(2.5,1,1).p("AjPAxQC+gfDhhC");
	this.shape_221.setTransform(755.4,-10.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#666666").ss(2.5,1,1).p("AjBAuQCxgdDSg+");
	this.shape_222.setTransform(755.1,-10.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#666666").ss(2.5,1,1).p("Ai0AqQCmgbDDg4");
	this.shape_223.setTransform(754.9,-10.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#666666").ss(2.5,1,1).p("AinAnQCbgaC0gz");
	this.shape_224.setTransform(754.7,-10.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#666666").ss(2.5,1,1).p("AibAkQCPgYCogv");
	this.shape_225.setTransform(754.5,-10);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#666666").ss(2.5,1,1).p("AiQAhQCGgWCbgr");
	this.shape_226.setTransform(754.3,-10);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#666666").ss(2.5,1,1).p("AiGAeQB9gVCQgn");
	this.shape_227.setTransform(754.1,-9.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#666666").ss(2.5,1,1).p("Ah8AcQB0gUCFgj");
	this.shape_228.setTransform(754,-9.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#666666").ss(2.5,1,1).p("AhyAaQBrgTB7gg");
	this.shape_229.setTransform(753.8,-9.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#666666").ss(2.5,1,1).p("AhqAYQBkgSBxgd");
	this.shape_230.setTransform(753.7,-9.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#666666").ss(2.5,1,1).p("AhiAWQBegRBnga");
	this.shape_231.setTransform(753.5,-9.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#666666").ss(2.5,1,1).p("AhaAUQBXgQBegX");
	this.shape_232.setTransform(753.4,-9.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#666666").ss(2.5,1,1).p("AhUASQBRgOBYgV");
	this.shape_233.setTransform(753.3,-9.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#666666").ss(2.5,1,1).p("AhOARQBMgOBRgS");
	this.shape_234.setTransform(753.2,-9.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#666666").ss(2.5,1,1).p("AhJAPQBHgNBMgQ");
	this.shape_235.setTransform(753.1,-9.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#666666").ss(2.5,1,1).p("AhEAOQBDgMBGgP");
	this.shape_236.setTransform(753,-9.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#666666").ss(2.5,1,1).p("AhAANQA/gMBBgN");
	this.shape_237.setTransform(753,-9.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#666666").ss(2.5,1,1).p("Ag8AMQA8gLA9gM");
	this.shape_238.setTransform(752.9,-9.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#666666").ss(2.5,1,1).p("Ag5ALQA5gKA6gL");
	this.shape_239.setTransform(752.8,-9.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#666666").ss(2.5,1,1).p("Ag3ALQA3gLA4gK");
	this.shape_240.setTransform(752.8,-9.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#666666").ss(2.5,1,1).p("Ag1AKQA1gKA2gJ");
	this.shape_241.setTransform(752.8,-9.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#666666").ss(2.5,1,1).p("AA1gJIhpAT");
	this.shape_242.setTransform(752.8,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_183}]}).to({state:[{t:this.shape_183}]},4).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[]},21).wait(6));

	// Layer_2 copy
	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#666666").ss(2.5,1,1).p("AI6k6IxzJ1");
	this.shape_243.setTransform(736.2,190.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#666666").ss(2.5,1,1).p("Ao5E7IRyp1");
	this.shape_244.setTransform(736.2,190.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#666666").ss(2.5,1,1).p("Ao4E7IRxp0");
	this.shape_245.setTransform(736.2,190.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#666666").ss(2.5,1,1).p("Ao2E6IRtpz");
	this.shape_246.setTransform(736.2,190.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#666666").ss(2.5,1,1).p("Ao0E5IRppx");
	this.shape_247.setTransform(736.2,190.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#666666").ss(2.5,1,1).p("AoyE3IRlpt");
	this.shape_248.setTransform(736.3,190.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#666666").ss(2.5,1,1).p("AouE1IRdpp");
	this.shape_249.setTransform(736.3,190.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#666666").ss(2.5,1,1).p("AoqEzIRVpl");
	this.shape_250.setTransform(736.3,190.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#666666").ss(2.5,1,1).p("AomEwIRNpf");
	this.shape_251.setTransform(736.3,190.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#666666").ss(2.5,1,1).p("AohEuIRDpb");
	this.shape_252.setTransform(736.3,190.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#666666").ss(2.5,1,1).p("AobEqIQ3pT");
	this.shape_253.setTransform(736.4,190.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#666666").ss(2.5,1,1).p("AoVEnIQrpN");
	this.shape_254.setTransform(736.4,190.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#666666").ss(2.5,1,1).p("AoOEjIQdpF");
	this.shape_255.setTransform(736.4,191);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#666666").ss(2.5,1,1).p("AoGEfIQNo9");
	this.shape_256.setTransform(736.5,191);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#666666").ss(2.5,1,1).p("An+EbIP9o1");
	this.shape_257.setTransform(736.5,191.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#666666").ss(2.5,1,1).p("An2EWIPtor");
	this.shape_258.setTransform(736.6,191.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#666666").ss(2.5,1,1).p("AnsERIPZoh");
	this.shape_259.setTransform(736.6,191.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#666666").ss(2.5,1,1).p("AniELIPFoV");
	this.shape_260.setTransform(736.7,191.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#666666").ss(2.5,1,1).p("AnYEFIOxoJ");
	this.shape_261.setTransform(736.7,191.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#666666").ss(2.5,1,1).p("AnMD/IOan9");
	this.shape_262.setTransform(736.8,191.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#666666").ss(2.5,1,1).p("AnBD4IODnv");
	this.shape_263.setTransform(736.9,191.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#666666").ss(2.5,1,1).p("Am1DxINrnh");
	this.shape_264.setTransform(736.9,191.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#666666").ss(2.5,1,1).p("AmoDqINRnT");
	this.shape_265.setTransform(737,191.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#666666").ss(2.5,1,1).p("AmaDjIM1nF");
	this.shape_266.setTransform(737.1,191.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#666666").ss(2.5,1,1).p("AmMDbIMZm1");
	this.shape_267.setTransform(737.2,191.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#666666").ss(2.5,1,1).p("Al+DTIL9ml");
	this.shape_268.setTransform(737.3,192);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#666666").ss(2.5,1,1).p("AluDKILdmT");
	this.shape_269.setTransform(737.3,192.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#666666").ss(2.5,1,1).p("AleDBIK9mB");
	this.shape_270.setTransform(737.4,192.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#666666").ss(2.5,1,1).p("AlOC4IKdlv");
	this.shape_271.setTransform(737.5,192.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#666666").ss(2.5,1,1).p("Ak9CuIJ7lb");
	this.shape_272.setTransform(737.6,192.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#666666").ss(2.5,1,1).p("AkrClIJXlI");
	this.shape_273.setTransform(737.7,192.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#666666").ss(2.5,1,1).p("AkaCbII1k1");
	this.shape_274.setTransform(737.8,192.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#666666").ss(2.5,1,1).p("AkICRIIRkh");
	this.shape_275.setTransform(737.9,192.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#666666").ss(2.5,1,1).p("Aj4CIIHxkP");
	this.shape_276.setTransform(738,193);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#666666").ss(2.5,1,1).p("AjoB/IHRj9");
	this.shape_277.setTransform(738.1,193.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#666666").ss(2.5,1,1).p("AjZB2IGzjr");
	this.shape_278.setTransform(738.2,193.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#666666").ss(2.5,1,1).p("AjKBuIGVjb");
	this.shape_279.setTransform(738.2,193.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#666666").ss(2.5,1,1).p("Ai8BmIF5jL");
	this.shape_280.setTransform(738.3,193.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#666666").ss(2.5,1,1).p("AiuBfIFdi9");
	this.shape_281.setTransform(738.4,193.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#666666").ss(2.5,1,1).p("AihBYIFDiv");
	this.shape_282.setTransform(738.5,193.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#666666").ss(2.5,1,1).p("AiVBRIErih");
	this.shape_283.setTransform(738.6,193.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#666666").ss(2.5,1,1).p("AiKBKIEViT");
	this.shape_284.setTransform(738.6,193.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#666666").ss(2.5,1,1).p("Ah+BEID9iH");
	this.shape_285.setTransform(738.7,194);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#666666").ss(2.5,1,1).p("Ah0A+IDph7");
	this.shape_286.setTransform(738.7,194);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#666666").ss(2.5,1,1).p("AhqA5IDVhx");
	this.shape_287.setTransform(738.8,194.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#666666").ss(2.5,1,1).p("AhhAzIDDhl");
	this.shape_288.setTransform(738.9,194.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#666666").ss(2.5,1,1).p("AhYAvICxhd");
	this.shape_289.setTransform(738.9,194.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#666666").ss(2.5,1,1).p("AhQAqIChhT");
	this.shape_290.setTransform(738.9,194.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#666666").ss(2.5,1,1).p("AhIAmICRhL");
	this.shape_291.setTransform(739,194.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#666666").ss(2.5,1,1).p("AhBAiICDhD");
	this.shape_292.setTransform(739,194.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#666666").ss(2.5,1,1).p("Ag7AfIB3g8");
	this.shape_293.setTransform(739.1,194.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#666666").ss(2.5,1,1).p("Ag1AbIBrg1");
	this.shape_294.setTransform(739.1,194.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#666666").ss(2.5,1,1).p("AgwAYIBhgw");
	this.shape_295.setTransform(739.1,194.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#666666").ss(2.5,1,1).p("AgsAWIBZgr");
	this.shape_296.setTransform(739.1,194.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#666666").ss(2.5,1,1).p("AgoAUIBRgn");
	this.shape_297.setTransform(739.1,194.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#666666").ss(2.5,1,1).p("AglASIBLgj");
	this.shape_298.setTransform(739.2,194.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#666666").ss(2.5,1,1).p("AgiARIBFgh");
	this.shape_299.setTransform(739.2,194.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#666666").ss(2.5,1,1).p("AggAPIBBgd");
	this.shape_300.setTransform(739.2,194.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#666666").ss(2.5,1,1).p("AgeAPIA9gc");
	this.shape_301.setTransform(739.2,194.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#666666").ss(2.5,1,1).p("AgeAOIA8gb");
	this.shape_302.setTransform(739.2,194.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#666666").ss(2.5,1,1).p("AAegNIg7Ab");
	this.shape_303.setTransform(739.2,194.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_243}]}).to({state:[{t:this.shape_243}]},4).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[]},21).wait(6));

	// Layer_11
	this.instance = new lib.Symbol1copy();
	this.instance.parent = this;
	this.instance.setTransform(730.8,114.4,1.673,1.005,0,-3.4,2.9,778.1,208.8);
	this.instance.cache(-3,-3,943,472);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:778.2,regY:209,scaleX:1,scaleY:1,skewX:0,skewY:0,x:738.2,y:128.2},60,cjs.Ease.quadInOut).to({_off:true},21).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-756.8,-313.1,1851.3,700);


(lib.red_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlRr8QCig7g5ErQlsUcOmgJ");
	this.shape.setTransform(1059.5,238.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlQr8QChg7g4ErQltUcOlgJ");
	this.shape_1.setTransform(1059.6,238.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlQr8QCig6g5EqQlsUbOkgI");
	this.shape_2.setTransform(1059.9,238);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlPr7QChg6g4EqQlsUZOigI");
	this.shape_3.setTransform(1060.3,237.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlOr6QChg6g4EqQlrUWOfgH");
	this.shape_4.setTransform(1060.9,237.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlNr4QChg7g4ErQlqUROcgG");
	this.shape_5.setTransform(1061.7,237.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlMr3QCig6g5EqQloUNOYgE");
	this.shape_6.setTransform(1062.6,236.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlKr1QChg6g4EqQlnUHOTgC");
	this.shape_7.setTransform(1063.8,236.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlIryQChg7g4ErQllUAONgB");
	this.shape_8.setTransform(1065.1,235.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlGrwQCig6g5EqQljT5OHAC");
	this.shape_9.setTransform(1066.5,235.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlDrtQChg6g4EqQlhTwN/AE");
	this.shape_10.setTransform(1068.2,234.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlArqQChg6g4EqQleTnN2AH");
	this.shape_11.setTransform(1070,233.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ak9rmQChg6g4EqQlbTdNtAK");
	this.shape_12.setTransform(1072,232.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ak6riQChg7g4ErQlYTSNkAN");
	this.shape_13.setTransform(1074.2,231.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ak2reQChg6g4EqQlVTGNZAR");
	this.shape_14.setTransform(1076.5,230.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkzrZQCig7g5ErQlRS5NPAU");
	this.shape_15.setTransform(1079,229.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkurVQChg6g4EqQlOSsNCAY");
	this.shape_16.setTransform(1081.7,228.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkqrPQChg7g4ErQlKScM2Ad");
	this.shape_17.setTransform(1084.6,227.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(2.5,1,1).p("AklrKQChg6g4EqQlGSOMoAh");
	this.shape_18.setTransform(1087.6,225.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkgrEQChg7g4ErQlBR9MZAm");
	this.shape_19.setTransform(1090.8,224.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(2.5,1,1).p("Akbq+QChg7g4ErQk9RsMLAr");
	this.shape_20.setTransform(1094.2,223);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkWq4QCig6g5EqQk3RaL7Aw");
	this.shape_21.setTransform(1097.7,221.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkQqxQChg6g4EqQkzRHLrA2");
	this.shape_22.setTransform(1101.5,219.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkKqqQCig6g5EqQktQzLZA8");
	this.shape_23.setTransform(1105.4,218.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkEqjQCig6g5EqQknQeLGBC");
	this.shape_24.setTransform(1109.4,216.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aj9qbQChg7g4ErQkiQIK0BJ");
	this.shape_25.setTransform(1113.7,214.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aj2qTQChg7g4ErQkbPxKfBQ");
	this.shape_26.setTransform(1118.1,212.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjvqLQChg6g4EqQkVPbKLBW");
	this.shape_27.setTransform(1122.7,210.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjoqCQCig7g5ErQkOPCJ2Bd");
	this.shape_28.setTransform(1127.4,208.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ajgp5QChg7g4ErQkIOpJgBk");
	this.shape_29.setTransform(1132.4,206.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjZpwQCig7g5ErQj/OPJJBs");
	this.shape_30.setTransform(1137.5,204.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjQpnQChg7g4ErQj5N1IyB0");
	this.shape_31.setTransform(1142.6,201.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjJpeQCig7g5ErQjzNcIdB7");
	this.shape_32.setTransform(1147.6,199.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjCpWQCig6g5EqQjrNEIHCC");
	this.shape_33.setTransform(1152.3,197.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ai7pNQCig7g5ErQjlMsHzCJ");
	this.shape_34.setTransform(1156.9,195.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ai0pFQCig7g5ErQjfMVHfCQ");
	this.shape_35.setTransform(1161.3,193.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aito+QChg6g4EqQjaMAHMCX");
	this.shape_36.setTransform(1165.6,191.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aino3QCig6g5EqQjTLrG5Cd");
	this.shape_37.setTransform(1169.6,190.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(2.5,1,1).p("AihowQChg6g4EqQjOLYGoCi");
	this.shape_38.setTransform(1173.5,188.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(2.5,1,1).p("AibopQCgg6g3EqQjJLFGXCo");
	this.shape_39.setTransform(1177.3,186.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiWoiQChg7g4ErQjEKyGICt");
	this.shape_40.setTransform(1180.8,185.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiQocQCgg7g3ErQjAKhF4Cy");
	this.shape_41.setTransform(1184.2,183.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiMoXQChg6g4EqQi7KRFqC3");
	this.shape_42.setTransform(1187.4,182.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiHoRQChg7g4ErQi3KBFdC8");
	this.shape_43.setTransform(1190.4,181);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiDoMQChg6g4EqQizJzFQDA");
	this.shape_44.setTransform(1193.3,179.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah+oHQCgg7g3ErQivJlFDDE");
	this.shape_45.setTransform(1196,178.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah6oDQCgg6g3EqQisJYE4DI");
	this.shape_46.setTransform(1198.5,177.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah3n+QChg7g4ErQioJMEuDL");
	this.shape_47.setTransform(1200.8,176.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah0n7QChg6g4EqQilJBElDP");
	this.shape_48.setTransform(1203,175.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ahwn3QCgg6g3EqQijI3EbDS");
	this.shape_49.setTransform(1205,174.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ahtn0QCgg6g3EqQigIuESDV");
	this.shape_50.setTransform(1206.8,173.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhrnxQCgg6g3EqQieImEMDW");
	this.shape_51.setTransform(1208.5,173.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhpnuQChg7g4ErQibIeEFDZ");
	this.shape_52.setTransform(1209.9,172.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhnnsQChg6g5EqQiZIXEADb");
	this.shape_53.setTransform(1211.2,172);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhlnqQChg6g5EqQiXISD6Dc");
	this.shape_54.setTransform(1212.4,171.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhjnoQCgg7g4ErQiWIMD1Df");
	this.shape_55.setTransform(1213.3,171.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhinnQCgg6g4EqQiVIJDzDf");
	this.shape_56.setTransform(1214.1,170.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhhnmQCgg6g4EqQiUIGDwDg");
	this.shape_57.setTransform(1214.7,170.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhhnlQChg6g5EqQiTIDDuDh");
	this.shape_58.setTransform(1215.1,170.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhhnkQChg7g4ErQiUICDuDh");
	this.shape_59.setTransform(1215.4,170.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhgnkQCgg7g4ErQiTIBDsDi");
	this.shape_60.setTransform(1215.5,170.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[]},21).wait(6));

	// Layer_12
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsVDuQMekzMNio");
	this.shape_61.setTransform(724.7,326.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsUDtQMdkyMMin");
	this.shape_62.setTransform(724.7,326.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsSDsQMbkxMKim");
	this.shape_63.setTransform(724.7,326.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsPDrQMYkwMHim");
	this.shape_64.setTransform(724.7,326.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsMDqQMVkvMEil");
	this.shape_65.setTransform(724.8,326.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsIDpQMRktMAik");
	this.shape_66.setTransform(724.8,326.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsDDoQMLksL8ii");
	this.shape_67.setTransform(724.9,326.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ar+DmQMGkpL2ii");
	this.shape_68.setTransform(725,326.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ar3DkQMAknLvig");
	this.shape_69.setTransform(725,326.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF0000").ss(2.5,1,1).p("ArwDiQL5kjLoif");
	this.shape_70.setTransform(725.1,326.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF0000").ss(2.5,1,1).p("AroDfQLwkgLhid");
	this.shape_71.setTransform(725.2,326.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF0000").ss(2.5,1,1).p("ArfDcQLnkcLZib");
	this.shape_72.setTransform(725.3,326.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF0000").ss(2.5,1,1).p("ArWDZQLekYLPiZ");
	this.shape_73.setTransform(725.4,326.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF0000").ss(2.5,1,1).p("ArMDWQLUkULFiW");
	this.shape_74.setTransform(725.5,326.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF0000").ss(2.5,1,1).p("ArBDSQLJkPK6iU");
	this.shape_75.setTransform(725.7,326.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aq2DOQK+kKKviR");
	this.shape_76.setTransform(725.8,326.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqpDKQKwkEKjiP");
	this.shape_77.setTransform(725.9,326.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqcDGQKjj/KWiM");
	this.shape_78.setTransform(726.1,326.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqODCQKVj5KIiK");
	this.shape_79.setTransform(726.2,326);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqAC9QKHjzJ6iF");
	this.shape_80.setTransform(726.4,325.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApwC4QJ3jsJriC");
	this.shape_81.setTransform(726.6,325.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FF0000").ss(2.5,1,1).p("AphCyQJnjkJch/");
	this.shape_82.setTransform(726.8,325.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApQCtQJWjeJLh7");
	this.shape_83.setTransform(727,325.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ao+CnQJEjWI5h3");
	this.shape_84.setTransform(727.2,325.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF0000").ss(2.5,1,1).p("AosChQIyjOInhz");
	this.shape_85.setTransform(727.4,325.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoZCbQIfjGIUhv");
	this.shape_86.setTransform(727.6,325.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoFCUQILi9IAhq");
	this.shape_87.setTransform(727.8,325.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnxCOQH2i1Hthm");
	this.shape_88.setTransform(728.1,324.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnbCGQHgirHXhg");
	this.shape_89.setTransform(728.3,324.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnFCAQHKiiHBhd");
	this.shape_90.setTransform(728.6,324.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmvB5QG0iZGrhY");
	this.shape_91.setTransform(728.8,324.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmZBxQGdiPGXhS");
	this.shape_92.setTransform(729.1,324.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmFBrQGJiHGChO");
	this.shape_93.setTransform(729.3,324.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlxBkQF0h+FvhJ");
	this.shape_94.setTransform(729.5,324.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FF0000").ss(2.5,1,1).p("AleBeQFhh2FchF");
	this.shape_95.setTransform(729.7,324);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlMBYQFPhuFKhB");
	this.shape_96.setTransform(730,323.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ak7BSQE9hmE5g9");
	this.shape_97.setTransform(730.2,323.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkqBNQEthfEog6");
	this.shape_98.setTransform(730.4,323.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkaBHQEchXEZg2");
	this.shape_99.setTransform(730.5,323.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkKBDQEMhREJgz");
	this.shape_100.setTransform(730.7,323.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aj8A+QD+hLD7gv");
	this.shape_101.setTransform(730.9,323.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjuA5QDwhFDtgs");
	this.shape_102.setTransform(731,323.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjhA1QDjg/Dggq");
	this.shape_103.setTransform(731.2,323.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjUAxQDVg6DUgn");
	this.shape_104.setTransform(731.3,323);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjJAtQDKg0DJgl");
	this.shape_105.setTransform(731.5,323);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ai+AqQC/gxC+gh");
	this.shape_106.setTransform(731.6,322.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ai0AmQC1gsC0gf");
	this.shape_107.setTransform(731.7,322.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiqAjQCrgoCrgd");
	this.shape_108.setTransform(731.8,322.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiiAhQCjgkCigd");
	this.shape_109.setTransform(731.9,322.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiaAeQCaghCbgZ");
	this.shape_110.setTransform(732,322.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiTAcQCUgeCTgZ");
	this.shape_111.setTransform(732.1,322.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiMAZQCNgbCMgW");
	this.shape_112.setTransform(732.2,322.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiHAYQCHgYCIgX");
	this.shape_113.setTransform(732.2,322.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiCAWQCCgWCDgV");
	this.shape_114.setTransform(732.3,322.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah+AVQB+gVB/gU");
	this.shape_115.setTransform(732.3,322.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah7ATQB7gTB8gS");
	this.shape_116.setTransform(732.4,322.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah4ATQB4gTB5gS");
	this.shape_117.setTransform(732.4,322.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah2ASQB2gSB3gR");
	this.shape_118.setTransform(732.4,322.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah1ASQB1gSB2gR");
	this.shape_119.setTransform(732.4,322.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah1ASIDrgj");
	this.shape_120.setTransform(732.4,322.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},4).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[]},21).wait(6));

	// Layer_13
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqeI1QNWk/Hmsq");
	this.shape_121.setTransform(952.2,222.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqeI1QDphXDOh7QC7hxCkiPQCgiKCLioQCJilBzjA");
	this.shape_122.setTransform(952.2,222.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqgI2QDqhYDOh7QC8hxCkiPQCgiKCMipQCJikB0jB");
	this.shape_123.setTransform(952.4,222.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqjI3QDrhYDOh8QC9hxCliPQChiLCMioQCLilB0jB");
	this.shape_124.setTransform(952.5,222.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqnI4QDrhZDQh8QC+hyCmiPQChiLCPipQCLilB1jA");
	this.shape_125.setTransform(952.8,222.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FF0000").ss(2.5,1,1).p("AqtI5QDthYDRh9QC/hzCniQQCjiLCQipQCNilB3jA");
	this.shape_126.setTransform(953.1,222);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aq0I7QDvhZDSh+QDBhzCoiRQCliLCSipQCOimB6jA");
	this.shape_127.setTransform(953.5,222);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aq8I9QDxhaDUh/QDDh0CqiRQCmiMCUipQCRimB8jA");
	this.shape_128.setTransform(953.9,221.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FF0000").ss(2.5,1,1).p("ArFJAQDzhcDWiAQDGh1CriRQCoiNCXiqQCUimB+jA");
	this.shape_129.setTransform(954.5,221.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FF0000").ss(2.5,1,1).p("ArPJCQD1hcDZiCQDIh2CuiSQCqiNCaiqQCXimCAjA");
	this.shape_130.setTransform(955.1,221.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FF0000").ss(2.5,1,1).p("ArbJFQD4heDciCQDLh4CwiSQCsiOCeiqQCbioCDi/");
	this.shape_131.setTransform(955.7,221.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FF0000").ss(2.5,1,1).p("AroJJQD8hgDfiEQDOh5CyiTQCviPCiiqQCfioCGjA");
	this.shape_132.setTransform(956.4,221.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ar2JNQD/hhDiiGQDSh8C1iTQCyiPCmirQCjipCKjA");
	this.shape_133.setTransform(957.2,221.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsGJRQEDhkDmiHQDWh9C4iVQC1iQCrisQCoipCOi/");
	this.shape_134.setTransform(958.1,221.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsWJVQEHhlDqiJQDah/C7iVQC4iRCwitQCuiqCSi/");
	this.shape_135.setTransform(959.1,221.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FF0000").ss(2.5,1,1).p("AsoJZQEMhmDuiMQDeiBC/iWQC7iSC2itQCzirCWi/");
	this.shape_136.setTransform(960.1,221);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FF0000").ss(2.5,1,1).p("As8JfQEShpDyiOQDjiEDDiWQC/iTC7iuQC5irCcjA");
	this.shape_137.setTransform(961.2,220.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FF0000").ss(2.5,1,1).p("AtQJkQEWhrD3iQQDoiGDHiYQDDiUDCivQC/isChi/");
	this.shape_138.setTransform(962.3,220.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FF0000").ss(2.5,1,1).p("AtlJqQEahuD9iSQDtiJDLiZQDIiVDJiwQDFitCmi/");
	this.shape_139.setTransform(963.6,220.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FF0000").ss(2.5,1,1).p("At8JvQEhhwEBiUQD0iMDPiaQDMiXDQixQDMitCsi+");
	this.shape_140.setTransform(964.8,220.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FF0000").ss(2.5,1,1).p("AuVJ2QEnhzEIiYQD5iODUicQDRiXDXiyQDVivCyi+");
	this.shape_141.setTransform(966.2,220.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FF0000").ss(2.5,1,1).p("AuuJ8QEth2EOiaQD/iSDZicQDWiZDfizQDciwC5i9");
	this.shape_142.setTransform(967.7,219.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FF0000").ss(2.5,1,1).p("AvIKDQE0h5ETidQEGiVDfieQDbibDmizQDlixC/i9");
	this.shape_143.setTransform(969.2,219.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FF0000").ss(2.5,1,1).p("AvkKLQE7h9EaigQENiZDkifQDhicDvi0QDtizDGi9");
	this.shape_144.setTransform(970.7,219.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FF0000").ss(2.5,1,1).p("AwBKSQFCh/EhikQEUicDqihQDmidD4i2QD3izDNi9");
	this.shape_145.setTransform(972.4,219.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FF0000").ss(2.5,1,1).p("AwfKaQFKiDEoinQEcigDviiQDsifECi3QD/i1DVi8");
	this.shape_146.setTransform(974.1,219);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aw+KiQFRiHEwiqQEkijD1ikQDzihELi4QEJi2Ddi8");
	this.shape_147.setTransform(975.9,218.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FF0000").ss(2.5,1,1).p("AxfKrQFZiKE3iuQEtioD7imQD6iiEVi6QETi3Dli8");
	this.shape_148.setTransform(977.7,218.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FF0000").ss(2.5,1,1).p("AyBK0QFiiPE/ixQE1isECioQEAikEgi7QEdi4Dui8");
	this.shape_149.setTransform(979.6,218.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FF0000").ss(2.5,1,1).p("AykK9QFriSFHi2QE9iwEKipQEHinEqi8QEpi6D2i7");
	this.shape_150.setTransform(981.6,217.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FF0000").ss(2.5,1,1).p("AzJLGQF0iWFQi6QFHi0EQirQEOioE2i+QE0i8EAi6");
	this.shape_151.setTransform(983.7,217.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FF0000").ss(2.5,1,1).p("AztLQQF9ibFYi9QFQi5EXitQEWiqFBi/QE/i+EJi6");
	this.shape_152.setTransform(985.8,217.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FF0000").ss(2.5,1,1).p("A0QLZQGGieFgjDQFZi8EeivQEdisFLjBQFKi/ESi5");
	this.shape_153.setTransform(987.8,217.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FF0000").ss(2.5,1,1).p("A0yLiQGPijFojFQFhjCEliwQEjiuFWjBQFVjAEai6");
	this.shape_154.setTransform(989.7,216.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FF0000").ss(2.5,1,1).p("A1TLqQGXilFwjKQFpjFEsiyQEpiwFhjDQFejCEji5");
	this.shape_155.setTransform(991.6,216.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FF0000").ss(2.5,1,1).p("A1yLyQGeipF4jNQFxjJExizQExiyFpjEQFojDEri4");
	this.shape_156.setTransform(993.3,216.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FF0000").ss(2.5,1,1).p("A2QL7QGmiuF/jPQF4jNE3i0QE3i0FzjGQFxjEEyi5");
	this.shape_157.setTransform(995.1,216);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FF0000").ss(2.5,1,1).p("A2uMCQGuiwGGjTQF/jRE9i1QE8i2F8jGQF7jGE6i4");
	this.shape_158.setTransform(996.7,215.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FF0000").ss(2.5,1,1).p("A3KMJQG2izGLjXQGHjTFDi3QFBi3GFjIQGDjGFBi4");
	this.shape_159.setTransform(998.3,215.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FF0000").ss(2.5,1,1).p("A3kMQQG8i2GRjaQGOjXFIi4QFHi5GMjIQGMjIFHi3");
	this.shape_160.setTransform(999.8,215.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FF0000").ss(2.5,1,1).p("A39MXQHCi6GYjcQGTjaFNi6QFMi6GUjJQGTjJFOi3");
	this.shape_161.setTransform(1001.2,215.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FF0000").ss(2.5,1,1).p("A4VMdQHHi8GejfQGajdFRi7QFRi7GbjKQGbjKFUi3");
	this.shape_162.setTransform(1002.6,214.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FF0000").ss(2.5,1,1).p("A4sMjQHNi+GjjiQGgjgFWi9QFVi7GijMQGjjLFZi2");
	this.shape_163.setTransform(1003.9,214.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FF0000").ss(2.5,1,1).p("A5CMpQHTjCGojkQGljiFai9QFai+GpjMQGojLFgi3");
	this.shape_164.setTransform(1005.1,214.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FF0000").ss(2.5,1,1).p("A5WMuQHYjDGsjnQGrjlFei+QFei/GvjNQGvjMFki2");
	this.shape_165.setTransform(1006.3,214.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FF0000").ss(2.5,1,1).p("A5pMzQHdjGGxjoQGvjnFii/QFhjAG1jOQG1jNFpi2");
	this.shape_166.setTransform(1007.3,214.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FF0000").ss(2.5,1,1).p("A57M4QHhjIG2jqQGzjqFljAQFljAG7jPQG6jOFui2");
	this.shape_167.setTransform(1008.4,214.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FF0000").ss(2.5,1,1).p("A6MM8QHmjJG5jsQG4jsFojBQFojCHAjOQHAjPFyi2");
	this.shape_168.setTransform(1009.3,214);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FF0000").ss(2.5,1,1).p("A6bNAQHpjMG9juQG7jtFsjCQFrjCHFjQQHEjPF2i1");
	this.shape_169.setTransform(1010.2,213.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FF0000").ss(2.5,1,1).p("A6pNEQHsjNHBjwQG/jvFujCQFujDHJjRQHJjPF5i2");
	this.shape_170.setTransform(1011,213.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FF0000").ss(2.5,1,1).p("A63NHQHwjOHEjxQHCjxFxjDQFxjEHNjRQHMjQF+i1");
	this.shape_171.setTransform(1011.7,213.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7CNKQHzjQHGjyQHFjyF0jEQFzjEHRjRQHPjRGAi1");
	this.shape_172.setTransform(1012.4,213.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7MNNQH1jRHJjzQHIj0F1jEQF1jFHUjRQHTjSGCi1");
	this.shape_173.setTransform(1013,213.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7WNPQH4jSHLj0QHKj1F3jFQF3jFHXjSQHWjSGFi0");
	this.shape_174.setTransform(1013.5,213.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7eNRQH6jTHNj1QHMj2F5jFQF4jGHZjSQHZjSGHi1");
	this.shape_175.setTransform(1013.9,213.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7lNTQH8jUHOj2QHOj2F6jGQF6jGHbjSQHbjTGJi0");
	this.shape_176.setTransform(1014.3,213.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7qNVQH9jUHPj3QHQj4F7jGQF7jGHdjSQHcjTGKi0");
	this.shape_177.setTransform(1014.7,213.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7vNWQH+jVHRj3QHQj4F8jGQF8jHHfjTQHdjSGLi1");
	this.shape_178.setTransform(1014.9,213.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7yNXQH/jVHSj5QHRj4F8jFQF9jIHfjSQHejTGNi1");
	this.shape_179.setTransform(1015.1,213.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FF0000").ss(2.5,1,1).p("A7zNXQH/jVHSj4QHRj5F9jGQF9jHHgjTQHfjTGMi0");
	this.shape_180.setTransform(1015.2,213.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FF0000").ss(2.5,1,1).p("A70NXQIAjVHRj5QHSj4F9jGQF9jHHgjTQHgjTGMi0");
	this.shape_181.setTransform(1015.2,213.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121}]},4).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[]},21).wait(6));

	// Layer_7
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FF0000").ss(2.5,1,1).p("AIPDNQNXk+HmsrA9LOdQMfk0MNin");
	this.shape_182.setTransform(832.5,258.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_182).to({_off:true},4).wait(87));

	// Layer_9 copy
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FF0000").ss(2.5,1,1).p("AJ0iaQq2DdoxBY");
	this.shape_183.setTransform(762.4,-12.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApyCbQIwhYK1jd");
	this.shape_184.setTransform(762.4,-12.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApxCbQIvhYK0jd");
	this.shape_185.setTransform(762.4,-12.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApwCaQIuhXKzjc");
	this.shape_186.setTransform(762.3,-12.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApuCaQIshXKxjc");
	this.shape_187.setTransform(762.3,-12.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FF0000").ss(2.5,1,1).p("AprCZQIqhWKtjb");
	this.shape_188.setTransform(762.2,-12.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApnCYQImhWKpjZ");
	this.shape_189.setTransform(762.2,-12.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApjCXQIjhWKkjX");
	this.shape_190.setTransform(762.1,-12.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApeCWQIehVKfjW");
	this.shape_191.setTransform(762,-12.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApZCVQIZhUKajV");
	this.shape_192.setTransform(762,-12.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApTCTQIVhTKSjS");
	this.shape_193.setTransform(761.8,-12.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApMCRQIOhSKLjP");
	this.shape_194.setTransform(761.7,-12.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FF0000").ss(2.5,1,1).p("ApFCPQIIhRKDjM");
	this.shape_195.setTransform(761.6,-12.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ao9CNQIBhQJ6jJ");
	this.shape_196.setTransform(761.5,-12.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ao0CLQH5hPJwjG");
	this.shape_197.setTransform(761.3,-12.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FF0000").ss(2.5,1,1).p("AorCJQHxhOJmjD");
	this.shape_198.setTransform(761.2,-12.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FF0000").ss(2.5,1,1).p("AohCHQHohNJbjA");
	this.shape_199.setTransform(761,-12.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoWCEQHfhLJPi8");
	this.shape_200.setTransform(760.9,-12.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoLCBQHVhKJCi3");
	this.shape_201.setTransform(760.6,-12.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoAB+QHLhII2iz");
	this.shape_202.setTransform(760.5,-12.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnzB7QG/hGIoiv");
	this.shape_203.setTransform(760.3,-12.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnmB4QG1hFIYiq");
	this.shape_204.setTransform(760,-12);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnYB0QGohCIJil");
	this.shape_205.setTransform(759.8,-11.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnKBwQGbhAH6if");
	this.shape_206.setTransform(759.6,-11.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FF0000").ss(2.5,1,1).p("Am7BtQGOg/Hpia");
	this.shape_207.setTransform(759.3,-11.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmrBpQGAg9HXiU");
	this.shape_208.setTransform(759,-11.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmbBkQFyg5HFiO");
	this.shape_209.setTransform(758.8,-11.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmKBgQFjg4GyiH");
	this.shape_210.setTransform(758.5,-11.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FF0000").ss(2.5,1,1).p("Al4BcQFTg2GeiB");
	this.shape_211.setTransform(758.2,-11.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlmBXQFDgzGKh6");
	this.shape_212.setTransform(757.9,-11.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlTBSQEygwF1h0");
	this.shape_213.setTransform(757.6,-11.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlABOQEigvFfhs");
	this.shape_214.setTransform(757.3,-11);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkvBJQESgsFMhl");
	this.shape_215.setTransform(757,-10.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkdBFQECgqE5hf");
	this.shape_216.setTransform(756.7,-10.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkMBBQD0goElhZ");
	this.shape_217.setTransform(756.4,-10.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aj8A8QDlgkEUhT");
	this.shape_218.setTransform(756.1,-10.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjsA4QDYgiEBhN");
	this.shape_219.setTransform(755.8,-10.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjdA1QDKghDxhI");
	this.shape_220.setTransform(755.6,-10.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjPAxQC+gfDhhC");
	this.shape_221.setTransform(755.4,-10.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjBAuQCxgdDSg+");
	this.shape_222.setTransform(755.1,-10.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ai0AqQCmgbDDg4");
	this.shape_223.setTransform(754.9,-10.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FF0000").ss(2.5,1,1).p("AinAnQCbgaC0gz");
	this.shape_224.setTransform(754.7,-10.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FF0000").ss(2.5,1,1).p("AibAkQCPgYCogv");
	this.shape_225.setTransform(754.5,-10);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiQAhQCGgWCbgr");
	this.shape_226.setTransform(754.3,-10);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiGAeQB9gVCQgn");
	this.shape_227.setTransform(754.1,-9.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah8AcQB0gUCFgj");
	this.shape_228.setTransform(754,-9.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhyAaQBrgTB7gg");
	this.shape_229.setTransform(753.8,-9.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhqAYQBkgSBxgd");
	this.shape_230.setTransform(753.7,-9.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhiAWQBegRBnga");
	this.shape_231.setTransform(753.5,-9.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhaAUQBXgQBegX");
	this.shape_232.setTransform(753.4,-9.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhUASQBRgOBYgV");
	this.shape_233.setTransform(753.3,-9.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhOARQBMgOBRgS");
	this.shape_234.setTransform(753.2,-9.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhJAPQBHgNBMgQ");
	this.shape_235.setTransform(753.1,-9.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhEAOQBDgMBGgP");
	this.shape_236.setTransform(753,-9.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhAANQA/gMBBgN");
	this.shape_237.setTransform(753,-9.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ag8AMQA8gLA9gM");
	this.shape_238.setTransform(752.9,-9.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ag5ALQA5gKA6gL");
	this.shape_239.setTransform(752.8,-9.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ag3ALQA3gLA4gK");
	this.shape_240.setTransform(752.8,-9.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ag1AKQA1gKA2gJ");
	this.shape_241.setTransform(752.8,-9.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FF0000").ss(2.5,1,1).p("AA1gJIhpAT");
	this.shape_242.setTransform(752.8,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_183}]}).to({state:[{t:this.shape_183}]},4).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[]},21).wait(6));

	// Layer_2 copy
	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FF0000").ss(2.5,1,1).p("AI6k6IxzJ1");
	this.shape_243.setTransform(736.2,190.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ao5E7IRyp1");
	this.shape_244.setTransform(736.2,190.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ao4E7IRxp0");
	this.shape_245.setTransform(736.2,190.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ao2E6IRtpz");
	this.shape_246.setTransform(736.2,190.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ao0E5IRppx");
	this.shape_247.setTransform(736.2,190.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoyE3IRlpt");
	this.shape_248.setTransform(736.3,190.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FF0000").ss(2.5,1,1).p("AouE1IRdpp");
	this.shape_249.setTransform(736.3,190.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoqEzIRVpl");
	this.shape_250.setTransform(736.3,190.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FF0000").ss(2.5,1,1).p("AomEwIRNpf");
	this.shape_251.setTransform(736.3,190.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FF0000").ss(2.5,1,1).p("AohEuIRDpb");
	this.shape_252.setTransform(736.3,190.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FF0000").ss(2.5,1,1).p("AobEqIQ3pT");
	this.shape_253.setTransform(736.4,190.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoVEnIQrpN");
	this.shape_254.setTransform(736.4,190.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoOEjIQdpF");
	this.shape_255.setTransform(736.4,191);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FF0000").ss(2.5,1,1).p("AoGEfIQNo9");
	this.shape_256.setTransform(736.5,191);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FF0000").ss(2.5,1,1).p("An+EbIP9o1");
	this.shape_257.setTransform(736.5,191.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FF0000").ss(2.5,1,1).p("An2EWIPtor");
	this.shape_258.setTransform(736.6,191.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnsERIPZoh");
	this.shape_259.setTransform(736.6,191.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FF0000").ss(2.5,1,1).p("AniELIPFoV");
	this.shape_260.setTransform(736.7,191.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnYEFIOxoJ");
	this.shape_261.setTransform(736.7,191.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnMD/IOan9");
	this.shape_262.setTransform(736.8,191.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FF0000").ss(2.5,1,1).p("AnBD4IODnv");
	this.shape_263.setTransform(736.9,191.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FF0000").ss(2.5,1,1).p("Am1DxINrnh");
	this.shape_264.setTransform(736.9,191.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmoDqINRnT");
	this.shape_265.setTransform(737,191.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmaDjIM1nF");
	this.shape_266.setTransform(737.1,191.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FF0000").ss(2.5,1,1).p("AmMDbIMZm1");
	this.shape_267.setTransform(737.2,191.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FF0000").ss(2.5,1,1).p("Al+DTIL9ml");
	this.shape_268.setTransform(737.3,192);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FF0000").ss(2.5,1,1).p("AluDKILdmT");
	this.shape_269.setTransform(737.3,192.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FF0000").ss(2.5,1,1).p("AleDBIK9mB");
	this.shape_270.setTransform(737.4,192.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FF0000").ss(2.5,1,1).p("AlOC4IKdlv");
	this.shape_271.setTransform(737.5,192.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ak9CuIJ7lb");
	this.shape_272.setTransform(737.6,192.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkrClIJXlI");
	this.shape_273.setTransform(737.7,192.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkaCbII1k1");
	this.shape_274.setTransform(737.8,192.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FF0000").ss(2.5,1,1).p("AkICRIIRkh");
	this.shape_275.setTransform(737.9,192.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FF0000").ss(2.5,1,1).p("Aj4CIIHxkP");
	this.shape_276.setTransform(738,193);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjoB/IHRj9");
	this.shape_277.setTransform(738.1,193.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjZB2IGzjr");
	this.shape_278.setTransform(738.2,193.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FF0000").ss(2.5,1,1).p("AjKBuIGVjb");
	this.shape_279.setTransform(738.2,193.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ai8BmIF5jL");
	this.shape_280.setTransform(738.3,193.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiuBfIFdi9");
	this.shape_281.setTransform(738.4,193.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FF0000").ss(2.5,1,1).p("AihBYIFDiv");
	this.shape_282.setTransform(738.5,193.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiVBRIErih");
	this.shape_283.setTransform(738.6,193.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FF0000").ss(2.5,1,1).p("AiKBKIEViT");
	this.shape_284.setTransform(738.6,193.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah+BEID9iH");
	this.shape_285.setTransform(738.7,194);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ah0A+IDph7");
	this.shape_286.setTransform(738.7,194);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhqA5IDVhx");
	this.shape_287.setTransform(738.8,194.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhhAzIDDhl");
	this.shape_288.setTransform(738.9,194.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhYAvICxhd");
	this.shape_289.setTransform(738.9,194.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhQAqIChhT");
	this.shape_290.setTransform(738.9,194.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhIAmICRhL");
	this.shape_291.setTransform(739,194.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FF0000").ss(2.5,1,1).p("AhBAiICDhD");
	this.shape_292.setTransform(739,194.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ag7AfIB3g8");
	this.shape_293.setTransform(739.1,194.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FF0000").ss(2.5,1,1).p("Ag1AbIBrg1");
	this.shape_294.setTransform(739.1,194.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FF0000").ss(2.5,1,1).p("AgwAYIBhgw");
	this.shape_295.setTransform(739.1,194.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FF0000").ss(2.5,1,1).p("AgsAWIBZgr");
	this.shape_296.setTransform(739.1,194.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FF0000").ss(2.5,1,1).p("AgoAUIBRgn");
	this.shape_297.setTransform(739.1,194.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FF0000").ss(2.5,1,1).p("AglASIBLgj");
	this.shape_298.setTransform(739.2,194.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FF0000").ss(2.5,1,1).p("AgiARIBFgh");
	this.shape_299.setTransform(739.2,194.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FF0000").ss(2.5,1,1).p("AggAPIBBgd");
	this.shape_300.setTransform(739.2,194.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FF0000").ss(2.5,1,1).p("AgeAPIA9gc");
	this.shape_301.setTransform(739.2,194.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FF0000").ss(2.5,1,1).p("AgeAOIA8gb");
	this.shape_302.setTransform(739.2,194.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FF0000").ss(2.5,1,1).p("AAegNIg7Ab");
	this.shape_303.setTransform(739.2,194.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_243}]}).to({state:[{t:this.shape_243}]},4).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[]},21).wait(6));

	// Layer_11
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(730.8,114.4,1.673,1.005,0,-3.4,2.9,778.1,208.8);
	this.instance.cache(-3,-3,943,472);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:778.2,regY:209,scaleX:1,scaleY:1,skewX:0,skewY:0,x:738.2,y:128.2},60,cjs.Ease.quadInOut).to({_off:true},21).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-584.2,-161.2,1678.8,548.1);


// stage content:
(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.black();
	this.instance.parent = this;
	this.instance.setTransform(311.7,272,0.678,0.678,0,0,0,802.5,436);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({alpha:0.102},11).to({alpha:0},11).to({alpha:0.102},11).to({alpha:0},11).wait(25));

	// Layer_6 copy
	this.instance_1 = new lib.green();
	this.instance_1.parent = this;
	this.instance_1.setTransform(660.5,272.1,0.805,0.678,0,0,180,314,463.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:533.1,alpha:0.852},60,cjs.Ease.quadInOut).wait(21));

	// Layer_6
	this.instance_2 = new lib.green();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-95.4,272.1,0.725,0.678,0,0,0,314.1,463.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:-14.1,alpha:0.852},60,cjs.Ease.quadInOut).wait(21));

	// Layer_8
	this.instance_3 = new lib.red_line("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(268.7,287.6,0.678,0.678,0,0,0,755.1,165.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85));

	// needle
	this.instance_4 = new lib.needle();
	this.instance_4.parent = this;
	this.instance_4.setTransform(444.9,300,0.678,0.678,22.8,0,0,3.6,394.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({regX:3.7,rotation:50,x:560.2,y:267.5},60,cjs.Ease.quadInOut).wait(21));

	// man
	this.instance_5 = new lib.man_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(314.7,290.3,0.678,0.678,0,0,0,102,314);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({x:274},60,cjs.Ease.quadInOut).wait(21));

	// woman
	this.instance_6 = new lib.woman_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(196.4,284.9,0.678,0.678,0,0,0,86.6,307.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({regX:86.5,x:237.1},60,cjs.Ease.quadInOut).wait(21));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.498)").s().p("AK4GhQhWggh2gTQhdgMhCg7QhagnhJhOQhdgIhhgrQkWgihmBJQjTChixgoQh2AEhvgvQiOgwgHhQQARgjhYg8QhAhOB9iAQFnkcE1A5QBqAhAQgUQA8AAAlAoQAmApAABIQAAAUARBCQALAtgSAgQAbgLAXAzQAaAcBEgJQBBgHBNAZQA1AQBPgQQCmAYBXg2QAZg8BAgPQA7gVALg/QBYi4D1BXQD1BWAWBcQAMAfAgAXQAfAigOBGQAaBSgwA4QgcBehsA/QhPA1heAAQhKAehSAAQghAAgigFg");
	this.shape.setTransform(247.6,471.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AQDJoQh+gviugcQiJgShihXQiFg6hrhzQiJgMiRg/QmZgyiXBsQk4DtkEg8QiuAHikhFQjRhIgLh2QAZgziChZQhehzC4i9QISmiHHBTQCdAwAXgcQBZAAA2A6QA5A9AABqQAAAeAZBhQAQBDgaAuQAogPAhBLQAmApBmgOQBfgKByAmQBOAXB1gXQD0AiCAhPQAmhZBfgVQBXgfAPheQCCkPFpCAQFpB/AhCIQASAtAvAjQAuAygVBoQAnB5hHBRQgpCLifBeQh2BOiJgBQhvAth4AAQgxAAgygHg");
	this.shape_1.setTransform(247.6,471.3,0.678,0.678);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.498)").s().p("AK4GiIgFgCQhUgfhygSQhTgLg+gwIgPgMQhZgnhJhOQg3gFg4gRQgogMgogRQhvgOhTAEIghACQhkAJg1AmQggAYgfAUQivBviWgjIgdABQhmgChhgpQhPgbgmglQgdgdgDgkQAQgjhWg7IgBgBQhAhNB8iBQA4gsA2gkQEpjDEFAwQBqAhAQgTQA8AAAlAnQAnApAABIQAAAVAQBCQALAtgRAfQAYgJAUAmIAFAMQAaAbBFgJQAwgFA2ANQATAEAUAHQA1APBOgPIABAAQA6AHAxgBQBagBA4gkQAZg8BBgOQAxgSAPgvIAFgUQBYi3D1BWQBKAaA1AbQA6AdAjAdQAnAhAIAiQANAfAfAYIAJAMQAUAhgMA7QAZBOgrA3IgEAEQgcBehrBAQg1Ajg7ALQgeAGgfAAQhLAehSAAQghAAgigEg");
	this.shape_2.setTransform(247.6,471.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.498)").s().p("AK4GhIgFgCQhUgehzgTQhTgKg+gwIgOgMQhZgnhJhOQg3gFg4gRQgogMgogRQhvgOhTAEIghACQhjAJg1AmQggAYggAUQivBuiVgiIgdAAQhngChggpQhPgbgmgkQgegegDgkQARgihXg8IgBgBQhAhNB9iAQA4gsA2gkQEpjDEFAwQBpAgAQgTQA8AAAlAnQAnAqAABHQAAAVARBCQALAtgSAfQAYgJAUAmIAFALQAbAcBEgJQAwgFA2AMQATAFAUAGQA1AQBOgQIABAAQA6AIAxgBQBZgBA5gkQAZg8BAgOQAxgSAQgvIAFgTQBYi3D1BWQBJAaA2AbQA5AdAjAdQAnAhAIAiQANAeAfAYIAJAMQAUAigMA6QAZBPgrA2IgEAFQgbBehsA/Qg1Ajg7AMQgeAGgfAAQhLAehSAAQggAAgigFg");
	this.shape_3.setTransform(247.6,471.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,51,51,0.498)").s().p("AK3GhIgFgCQhUgehygSQhTgLg+gwIgOgMQhagnhJhOQg2gFg4gQQgogMgogSQhvgNhTADIghADQhjAJg1AlQggAYgfAUQivBuiVgiIgdAAQhngChggpQhPgbgmglQgdgdgDgkQAQgihWg8IgBgBQhAhNB8iAQA4gsA2gkQEojDEFAwQBqAgAQgTQA8AAAkAnQAnApAABIQAAAUARBCQALAtgRAfQAYgJAUAmIAFALQAaAcBEgJQAwgFA2AMQAUAFAUAGQA0AQBOgQIABAAQA6AIAwAAQBagCA5gkQAZg7BAgPQAxgRAQgvIAFgUQBYi2D0BWQBJAaA2AbQA5AdAjAdQAnAhAIAiQANAfAfAYIAJAMQAUAhgMA7QAZBOgrA2IgEAFQgcBehrA/Qg1Ajg7AMQgdAGggAAQhLAehRAAQghAAgigFg");
	this.shape_4.setTransform(247.6,471.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,51,51,0.498)").s().p("AK2GhIgFgCQhUgehygSQhSgLg+gvIgPgNQhZgnhJhNQg2gFg5gQQgngMgogSQhvgNhTADIggACQhkAJg1AlQgfAZggATQiuBuiVgjIgdABQhngChggpQhPgbglglQgdgdgEgkQARgjhXg7IgBgBQg/hNB8iAQA3gsA2gkQEojCEEAvQBqAgAQgTQA8AAAlAnQAmApABBHQAAAVAQBBQALAtgRAeQAYgJAUAnIAFALQAbAbBEgJQAwgEA1AMQAUAEAUAHQA0APBOgPIABAAQA6AJAwgBQBagDA4gjQAZg7BBgPQAwgRAQguIAFgUQBZi1DzBWQBJAaA1AaQA6AdAiAdQAnAiAJAiQAMAeAfAYIAJAMQAUAigMA6QAZBOgrA2IgEAFQgbBdhsBAQg0Ajg7ALQgeAGgfAAQhMAfhSAAQggAAghgFg");
	this.shape_5.setTransform(247.6,471.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,51,51,0.498)").s().p("AK1GhIgFgCQhUgehygSQhSgKg+gwIgOgMQhZgnhJhNQg3gFg4gQQgogMgngSQhvgNhSADIghACQhjAJg1AlQggAYgfAUQiuBtiVgjIgdABQhmgDhggpQhPgbglgkQgdgdgDgkQAQgjhWg7IgBgBQhAhMB8iAQA3gsA2gkQEnjCEEAuQBpAgAQgTQA8AAAlAnQAmAoABBHQAAAVARBBQALAsgRAfQAYgJAUAmIAFALQAbAbBEgIQAwgFA1AMQATAEAUAHQA1APBNgPIABAAQA6AJAwAAQBZgDA5gjQAZg7BAgPQAxgRAPguIAFgUQBZi0DzBWQBJAaA1AbQA5AdAiAdQAnAhAJAiQAMAfAfAYIAJAMQAUAhgMA6QAYBOgqA2IgEAFQgcBdhrBAQg0Aig7AMQgeAGgfAAQhKAfhSAAQghAAghgFg");
	this.shape_6.setTransform(247.6,471.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,51,51,0.498)").s().p("AKzGhIgFgCQhTgehygSQhSgKg+gvIgOgMQhZgnhJhNQg2gFg4gQQgogMgngRQhugOhTADIghACQhiAJg1AlQggAYgfATQiuBtiUgjIgdAAQhmgChggpQhOgbglglQgdgdgDgkQAPgihVg7IgBgBQhAhMB8iAQA2gsA3gkQEmjBEDAuQBoAfARgTQA7AAAlAmQAnApAABGQABAUARBBQALAsgRAfQAYgJAUAmIAFALQAbAbBDgJQAwgEA1AMIAoAKQA0AQBNgPIABAAQA6AJAvAAQBZgDA5gjQAZg7BAgOQAxgRAQguIAFgTQBZizDxBWQBJAaA1AbQA5AdAiAdQAnAhAIAiQAMAeAfAYQAFAGAEAGQAUAigMA5QAYBOgqA2IgEAFQgcBdhqA/Qg0Ajg7AMQgeAGgfAAQhLAehRAAQghAAghgEg");
	this.shape_7.setTransform(247.6,471.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,51,51,0.498)").s().p("AKxGgIgEgCQhUgdhxgSQhSgKg+gvIgOgMQhZgnhIhMQg2gFg4gQQgogMgngRQhugOhSADIghACQhiAJg1AkQggAYgfATQitBsiVgjIgcABQhmgDhfgpQhOgbglglQgdgdgDgjQAPgjhVg6IgBgBQg/hNB7h/QA2gsA2gkQEmjBECAtQBoAgAQgTQA8AAAlAlQAmAoABBGQABAUARBBQALArgQAfQAXgJAUAmIAFALQAbAbBDgJQAwgEA1ALQATAFAUAGQA0AQBNgPIABAAQA5AJAwAAQBZgDA4giQAZg7BAgOQAxgRAQgtIAFgTQBZixDwBVQBJAaA0AbQA5AdAiAdQAnAhAIAiQAMAeAfAYIAJAMQATAigLA5QAYBOgrA2IgEAEQgbBdhqBAQg0Aig7AMQgdAGgfAAQhLAfhSAAQggAAghgFg");
	this.shape_8.setTransform(247.6,471.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,51,51,0.498)").s().p("AKvGgIgEgCQhUgdhwgRQhSgKg+gvIgOgMQhYgmhJhMQg2gFg4gQQgngMgngRQhugOhSACIggACQhiAJg1AkQggAYgfATQitBriTgjIgdAAQhlgDhfgoQhOgbgkglQgdgdgDgkQAPgihVg6IgBgBQg/hMB6h/QA2gsA2gkQEkjBECAtQBnAeARgSQA7gBAlAmQAmAoACBFQABAUARA/QALAsgQAeQAYgJAUAmIAFALQAaAbBDgJQAwgEA1ALIAnALQA0AQBNgPIABAAQA4AJAvAAQBZgDA4giQAZg6BAgNQAwgRAQgtQAEgJACgKQBaivDuBVQBIAaA0AbQA5AdAiAdQAmAhAJAiQAMAeAeAYIAJAMQATAhgLA6QAYBNgrA2IgEAEQgbBdhqA/QgzAjg7AMQgdAGgfAAQhLAehRAAQggAAghgEg");
	this.shape_9.setTransform(247.6,471.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,51,51,0.498)").s().p("AKtGgIgFgCQhTgchwgSQhRgKg+guIgOgMQhYgmhJhLQg2gFg3gQQgogMgmgRQhugOhRACIggACQhiAJg1AkQgfAXgfATQisBpiUgiIgcAAQhlgDhfgpQhNgbgkglQgcgdgEgjQAPgihUg6IgBgBQhAhMB6h/QA2grA2gkQEjjAEAArQBnAeARgSQA7gBAkAlQAnAoACBEQABAUARA/QALArgPAeQAXgJAUAlIAFALQAbAbBDgIQAvgFA0AMQAUAEATAGQA0AQBNgOIABAAQA4AJAvABQBYgEA4giQAZg5BAgNQAwgRAQgsIAFgTQBbitDtBVQBIAbAzAaQA4AdAjAdQAmAhAIAiQAMAeAeAYIAIAMQAUAhgMA5QAYBNgqA2IgEAEQgbBdhqA/QgzAig6AMQgdAGgfABQhLAehRAAQggAAgggEg");
	this.shape_10.setTransform(247.6,471.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,51,51,0.498)").s().p("AKqGfIgEgCQhTgbhwgRQhRgKg9guIgPgMQhXgmhJhKQg1gFg4gQQgngMgmgRQhtgNhRABIggABQhhAKg1AjQggAXgfASQirBpiTgjIgcAAQhlgDhegoQhNgcgjgkQgcgdgEgkQAPghhUg6IgBgBQg/hMB4h+QA2grA1gkQEijAD/AqQBmAeASgSQA6gBAlAlQAmAnACBEQACATARA+QAMArgPAdQAXgIAUAkIAFALQAbAbBCgIQAwgFAzAMQATAEAUAGQA0AQBMgOIABAAQA4AJAuABQBXgDA5ghQAZg5BAgNQAvgQARgsIAFgTQBbiqDrBUQBIAbAzAbQA3AdAiAdQAmAgAJAiQALAeAeAYQAFAFADAHQAUAhgMA5QAYBNgqA1IgEAEQgbBdhpA+QgzAjg6AMQgdAGgfAAQhKAehSAAQgfAAgggEg");
	this.shape_11.setTransform(247.6,471.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,51,51,0.498)").s().p("AKoGfIgFgCQhTgbhvgRQhQgKg+gtIgOgMQhXgmhJhJQg1gFg3gQQgngMgngQQhsgOhQAAIggACQhhAJg1AjQgfAXgfASQirBniSgjIgcAAQhlgDhdgpQhMgbgjglQgbgcgFgkQAPghhUg6IgBgBQg/hLB4h+QA2grA1gkQEgi+D9AoQBmAeASgTQA6AAAkAkQAnAmACBDQACATARA+QAMAqgOAdQAXgIAUAkIAFALQAbAaBBgIQAwgEAzALQATAEAUAGQA0AQBLgOIABAAQA3AKAuABQBXgDA4ghQAag4A/gNQAwgQAQgrIAGgTQBbinDpBUQBHAbAzAbQA3AdAiAcQAmAhAIAiQAMAeAdAYIAIAMQATAhgLA4QAXBMgqA2IgEAEQgbBchoA+QgzAig5ANQgdAGgfAAQhKAfhSAAQgeAAgfgEg");
	this.shape_12.setTransform(247.6,471.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,51,51,0.498)").s().p("AKkGeIgEgCQhSgahvgQQhQgKg9gsIgPgMQhWgmhJhJQg1gFg3gPQgmgMgngQQhrgOhQgBIggACQhgAJg1AiQgfAXgfASQiqBmiSgjIgcAAQhkgEhcgoQhMgcgigkQgbgdgFgjQAOgihTg5IgBgBQg+hLB3h9QA0grA1gkQEfi+D8AoQBlAdASgTQA5AAAlAjQAnAmADBCQACATARA8QAMAqgOAdQAXgJAUAkIAFALQAbAaBBgIQAwgEAyALQATAEAUAGQAzAQBLgNIABAAQA3AKAtABQBXgDA4ghQAag3A+gNQAwgPAQgrQAEgIACgKQBcikDnBUQBHAaAxAbQA3AdAiAdQAlAgAIAiQAMAeAdAYIAIAMQATAhgLA4QAXBMgqA1IgEAEQgbBbhnA/QgzAig5AMQgdAGgeABQhKAehRAAQgeAAgggEg");
	this.shape_13.setTransform(247.6,471.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,51,51,0.498)").s().p("AKhGdIgFgBQhSgahtgQQhQgJg9gsIgOgMQhWglhJhIQg1gGg2gPQgngLgmgRQhrgOhPgBIggACQhfAJg1AiQgfAWgfARQipBliRgjIgcAAQhkgEhbgpQhLgbgiglQgbgcgEgjQANgihSg4IgBgBQg+hLB2h8QA0grA0gkQEdi9D7AmQBkAcASgSQA5gBAlAjQAmAlAEBBQACASASA8QAMApgOAcQAYgIATAkIAFAKQAbAaBBgIQAwgDAxAKQATAEAUAGQAzAQBKgMIABAAQA3AKAsACQBWgEA4ggQAag3A+gMQAwgPAQgqIAGgRQBdiiDkBUQBHAaAxAcQA2AdAiAcQAlAgAIAiQALAeAcAYIAIALQAUAigLA3QAWBMgqA0IgDAFQgbBahnA+QgyAig5ANQgdAGgeABQhJAfhRAAQgeAAgfgFg");
	this.shape_14.setTransform(247.6,471.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,51,51,0.498)").s().p("AKdGcIgFgBQhRgZhtgQQhPgJg9grIgOgMQhWglhIhHQg0gFg3gPQgmgMgmgQQhqgOhPgBIggABQheAJg1AhQgfAWgfARQioBjiQgjIgcAAQhjgFhagoQhLgcgigkQgZgdgFgiQAMgihRg4IgBgBQg+hKB1h8QA0gqA0glQEai7D6AkQBiAbATgSQA5gBAkAiQAnAlAEBAQADASARA7QANAogNAcQAXgIATAjIAGAKQAbAaBAgIQAwgDAxAKQATAEATAGQAzAPBJgLIABAAQA2AKAsADQBVgFA4gfQAbg2A+gLQAugPARgpIAGgRQBeieDhBTQBGAbAxAbQA1AdAiAdQAlAgAIAhQALAdAcAYIAHAMQATAhgKA3QAWBLgqA1IgEAEQgaBahmA+QgyAig4ANQgdAGgeABQhJAfhQAAQgeAAgfgFg");
	this.shape_15.setTransform(247.6,471.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,51,51,0.498)").s().p("AKZGcIgEgCQhRgXhtgQQhOgJg9grIgOgLQhVglhJhGQgzgFg2gPQgngLglgQQhpgOhPgCIgfABQheAJg1AgQgfAVgeARQinBhiQgjIgbAAQhjgFhagoQhJgbghglQgagcgFgjQAMghhRg4IAAgBQg+hKB0h7QAzgqA0gkQEYi7D4AjQBhAaATgSQA5gBAkAiQAnAjAEA/QAEASARA6QANAngMAcQAXgIATAiIAFAKQAcAaA/gIQAwgDAwAKQATADATAGQAzAQBIgLIABAAQA2ALArADQBUgFA5gfQAag0A9gMQAvgOARgoIAGgRQBfiaDeBSQBGAbAvAcQA1AdAiAdQAkAfAIAiQALAdAbAYQAFAGADAGQATAhgLA2QAWBLgqA0IgDAEQgbBahlA+QgxAhg4ANQgcAHgeABQhKAehQAAQgdAAgegEg");
	this.shape_16.setTransform(247.6,471.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,51,51,0.498)").s().p("AKVGbIgFgCQhQgWhsgPQhOgJg8gqIgOgLQhVglhIhFQgzgFg2gPQgmgLglgQQhpgOhOgDIgfABQhdAJg0AgQgfAVgfAQQilBfiPgjIgcAAQhigGhYgnQhJgcghglQgYgcgGgiQAMghhQg3IgBgBQg+hKBzh6QAygqA0gkQEWi6D2AhQBgAaAUgSQA4gCAkAhQAnAjAFA9QAEASASA5QAMAmgLAbQAXgHATAhIAFAKQAcAaA+gIQAwgDAvAJQATAEATAGQAzAPBHgKIABAAQA1ALArAEQBTgFA4geQAbgzA9gLQAugPASgmIAGgRQBgiWDbBSQBFAbAvAcQAzAdAiAcQAkAgAIAhQALAdAaAYQAFAGADAGQASAhgKA2QAVBKgpAzIgDAFQgbBZhkA9QgxAig3ANQgcAGgeABQhJAfhRAAQgcAAgdgEg");
	this.shape_17.setTransform(247.6,471.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,51,51,0.498)").s().p("AKRGaIgFgCQhQgVhqgPQhOgIg8gqIgOgLQhUgkhIhDQgzgGg1gPQgmgKglgQQhogOhNgEIgfAAQhcAKg0AfQgfAUgfAQQikBdiOgjIgbgBQhigFhXgoQhIgcggglQgYgbgGgjQALgghPg3IgBgBQg9hJBxh5QAygqAzgkQEUi5DzAfQBgAZAUgSQA3gBAkAgQAnAhAGA9IAWBIQANAmgKAbQAWgIATAhIAGAKQAbAZA+gHQAwgDAuAJIAmAJQAzAPBGgJIABAAQA0ALAqAFQBTgFA4geQAbgyA8gLQAugNASgmIAGgQQBhiSDYBRQBEAcAuAbQAzAeAiAcQAjAfAIAiQALAcAaAYIAHAMQASAhgKA1QAVBKgpAzIgEAEQgaBZhjA9QgwAhg4ANQgbAHgdABQhKAfhRAAQgbAAgcgEg");
	this.shape_18.setTransform(247.5,471.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,51,51,0.498)").s().p("AKMGaIgFgCQhQgVhpgOQhNgIg8gpIgOgLQhTgjhIhDQgzgFg1gPQglgKglgQQhmgOhNgFIgfABQhbAJg0AeQgfAUgeAPQijBciNgkIgbAAQhhgHhWgnQhIgcgfglQgXgbgGgjQAKgghPg2IAAgBQg9hJBwh4QAxgqAzgkQERi3DxAdQBeAYAVgSQA3gBAkAfQAmAgAHA7QAFARASA2QAOAlgKAaQAWgHATAgIAFAKQAcAZA9gHQAwgDAuAIIAlAKQAyAPBGgIIABAAQAzALAqAFQBRgFA4gdQAbgxA8gKQAtgOATgkIAGgQQBiiNDUBQQBEAcAtAcQAyAdAiAcQAjAfAIAiQAKAcAZAYIAHAMQASAhgJA0QAUBJgpAzIgDAEQgaBYhiA9QgwAhg3ANQgcAHgcACQhJAehQAAQgbAAgcgDg");
	this.shape_19.setTransform(247.6,471.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(51,51,51,0.498)").s().p("AKHGZIgFgCQhPgThogOQhMgIg8goIgOgLQhSgjhIhBQgzgFg0gPQglgKglgPQhlgPhMgGIgeABQhaAJg1AdQgeAUgfAOQihBaiMgkIgbgBQhggGhVgoQhHgcgfglQgWgbgGgiQAJgghNg1IgBgBQg8hJBuh3QAwgqAzgkQEOi1DvAaQBdAXAVgRQA2gCAkAeQAnAgAHA5IAYBFQAOAkgJAaQAWgHATAfIAFAKQAcAYA8gGQAwgCAtAHQASAEASAFQAzAPBEgHIABAAQAzALApAGQBQgFA4gdQAbgvA8gKQAtgNASgjIAHgPQBjiJDQBQQBDAcAtAcQAxAdAhAcQAjAfAIAhQAKAdAYAYIAHALQASAhgKA0QAUBIgoAzIgEAEQgZBXhhA9QgwAhg2ANQgbAHgdACQhJAehPAAQgbAAgbgDg");
	this.shape_20.setTransform(247.5,471.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(51,51,51,0.498)").s().p("AKCGYIgFgCQhOgShogOQhLgHg8gnIgNgLQhSgihIhAQgygGg0gOQglgKgkgPQhkgPhLgGIgeAAQhZAJg1AdQgeASgeAPQihBWiLgjIgagBQhggHhUgnQhFgdgeglQgVgbgHghQAIgghMg1IgBgBQg8hIBth2QAvgpAzgkQELi1DtAZQBbAVAVgRQA2gCAkAdQAnAfAIA4IAZBDQAOAjgIAZQAWgGASAeIAGAKQAcAXA7gGQAvgCAsAHQATAEASAFQAyAPBEgGIAAAAQAzAMAnAGQBQgGA4gbQAbgvA7gJQAtgMASgiQAEgHADgIQBkiDDNBPQBCAcArAcQAwAeAiAbQAiAfAIAhQAKAcAYAYIAGAMQASAggKA0QAUBHgpAyIgDAEQgaBXhfA8QgvAhg2ANQgbAHgcACQhJAfhQAAQgZAAgagDg");
	this.shape_21.setTransform(247.5,471.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(51,51,51,0.498)").s().p("AJ7GXIgEgCQhOgRhmgMQhLgHg7gmIgOgLQhRgihHg/QgygFgzgOQglgKgkgPQhjgOhKgIIgegBQhYAKg0AcQgfASgdANQifBViKgkIgagBQhfgIhTgnQhEgcgdglQgVgbgHghQAIgghMg0IAAgBQg8hHBrh1QAvgpAyglQEIiyDqAVQBaAVAWgRQA1gCAkAcQAmAeAKA2IAZBBQAOAigHAZQAWgHATAeIAFAJQAdAYA5gGQAwgCArAHIAkAIQAyAPBCgFIABAAQAxAMAnAHQBPgGA3gbQAcgtA7gIQAsgMATghIAHgOQBlh+DIBPQBCAcAqAcQAvAdAiAcQAiAeAHAhQAKAcAXAYIAGAMQASAggKAzQATBHgoAxIgDAEQgaBWheA8QguAhg2ANQgaAHgcADQhIAehQAAQgZAAgagDg");
	this.shape_22.setTransform(247.6,471.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(51,51,51,0.498)").s().p("AJ2GWIgEgCQhOgPhlgMQhJgHg8glIgNgLQhQghhIg9QgxgGgzgNQgkgKgjgPQhigPhKgIIgdgBQhXAKg0AaQgfASgdANQidBSiJgkIgagCQhegIhRgnQhEgcgcglQgUgbgIghQAHgfhKgzIgBgBQg7hHBph0QAugpAygkQEFixDoATQBYATAWgQQA1gDAkAbQAmAdAKA0QAHAPATAwQAPAigGAXQAVgGATAdIAGAJQAcAXA5gGQAvgBAqAGQASADASAGQAyAOBBgEIABAAIBWAVQBNgHA4gaQAcgsA6gIQAsgLATgfIAHgOQBnh4DEBOQBAAcAqAdQAuAdAhAcQAiAdAHAhQAJAcAWAYIAGAMQASAfgJAzQASBGgoAxIgDAEQgZBVhdA8QguAgg1AOQgaAHgcACQhIAfhOAAQgZAAgZgDg");
	this.shape_23.setTransform(247.5,471.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(51,51,51,0.498)").s().p("AJwGVIgFgBQhMgOhkgMQhJgGg7glIgNgKQhPghhIg7QgwgGgzgNQgkgKgjgOQhggPhJgKIgdgBQhWAKg0AZQgeARgeANQibBPiIgkIgZgCQhegIhPgnQhDgcgbgmQgTgagIghQAGgfhJgyIgBgBQg6hHBnhyQAtgpAxgkQEBiwDmARQBWASAXgQQA0gDAkAaQAmAbALAzQAIAOATAvQAPAggFAXQAWgGASAcIAGAJQAcAWA4gFQAwgBAoAFQASAEASAFQAxAOBAgDIABAAIBVAWQBLgHA4gZQAcgqA6gIQArgKAUgeIAHgNQBohyC/BMQBAAdAoAdQAtAdAiAcQAhAdAGAhQAKAbAVAYIAGAMQARAggJAxQARBFgnAxIgDAEQgZBUhcA7QgtAgg0APQgaAHgbACQhIAfhOAAQgYAAgYgDg");
	this.shape_24.setTransform(247.5,471.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(51,51,51,0.498)").s().p("AJpGUIgEgBQhNgNhhgLQhJgGg7gjIgMgKQhPghhIg5QgvgGgzgNQgjgJgjgPIimgaIgdgBQhVAKg0AYQgdAQgeAMQiaBMiGgkIgagCQhcgJhOgmQhCgdgaglQgRgagKghQAGgehIgyIgBgBQg5hGBkhxQAsgoAxglQD+iuDiAOQBVASAYgRQAzgDAkAZQAmAaAMAxQAJANATAuQAPAegDAXQAVgGASAbIAGAJQAcAWA3gFQAvAAAoAEQASADASAFQAwAOA/gCIABAAIBSAYQBLgIA4gYQAcgpA5gGQAqgKAVgdIAHgMQBqhsC6BMQA/AcAoAeQArAdAhAbQAgAdAIAhQAIAbAUAYQAEAGACAGQARAfgJAxQASBEgoAxIgCAEQgZBThbA7QgsAfg0APQgZAHgbADQhHAfhPAAQgXAAgXgDg");
	this.shape_25.setTransform(247.6,471.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,51,51,0.498)").s().p("AJjGTIgFgBQhLgLhhgLQhHgFg6giIgOgKQhNgghHg4QgwgGgxgNQgjgJgigNIilgcIgdgCQhTAKg0AYQgdAPgdALQiYBKiGglIgZgCQhcgJhMgnQhAgcgagmQgQgZgJghQAEgehHgxIAAgBQg6hFBjhwQArgoAwgkQD7itDfALQBTAQAYgQQAzgDAjAYQAnAZANAuQAJANAUArQAQAegDAVQAVgFASAaIAGAJQAdAVA1gEQAvAAAnAEIAjAHQAxAOA9AAIAAAAIBRAYQBJgIA4gXQAdgnA4gGQAqgJAUgbIAIgMQBrhlC2BLQA+AdAmAdQAqAeAhAbQAgAcAHAhQAIAbAUAYIAFAMQAQAfgIAwQAQBDgmAwIgDAEQgZBShZA6QgrAggzAPQgZAHgbADQhHAfhOAAQgWAAgWgDg");
	this.shape_26.setTransform(247.5,471.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,51,51,0.498)").s().p("AJcGTIgFgCQhKgJhggKQhGgFg6ghIgNgJQhNgghHg2QgugGgxgNQgjgIgigOQhcgPhGgOIgcgCQhSAKg0AWQgdAPgdAKQiWBHiEglIgZgCQhbgKhKgmQhAgdgYgmQgQgZgJggQADgehFgwIgBgBQg5hEBhhvQAqgoAwgkQD2iqDdAIQBRAOAZgQQAxgDAkAWQAmAYAOAsQAKAMAUAqQAQAdgBAUQAUgFASAZIAGAIQAeAVA0gEQAvABAlADIAiAHQAxANA8ABIABAAIBOAbQBIgJA3gWQAeglA3gFQApgJAVgZIAIgLQBthfCwBKQA+AdAkAeQApAdAhAbQAgAcAGAhQAJAbASAYIAFALQAQAfgIAvQAPBDgmAvIgDAEQgYBRhXA6QgrAfgzAPQgYAIgaADQhHAfhOAAQgVAAgVgCg");
	this.shape_27.setTransform(247.5,471.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(51,51,51,0.498)").s().p("AJUGSIgEgBIiogRQhFgFg6gfIgNgJQhLgghHg0QgugGgxgMQgigIghgOQhbgPhFgPIgcgDQhQALg0AVQgdANgdAKQiUBDiCgkIgZgDQhagLhJglQg+gdgXgmQgPgZgKggQADgehEguIgBgBQg5hEBfhuQAqgnAugkQDzipDZAFQBQANAZgPQAxgEAjAVQAmAWAQAqQALAMAUAoQAQAbAAAUQAUgFASAYIAGAIQAeAVAygEQAvABAkACQASADAQAEQAxANA6ADIABAAQArAOAhANQBHgJA3gVQAdgjA3gFQApgHAVgYIAIgKQBuhZCsBKQA8AdAjAeQAoAdAhAbQAfAcAGAhQAIAaARAYIAFALQAQAfgIAvQAPBBgmAvIgDADQgYBRhVA5QgrAfgxAPQgZAIgZAEQhGAfhNAAQgUAAgWgDg");
	this.shape_28.setTransform(247.5,471.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(51,51,51,0.498)").s().p("AJNGSIgEgBIimgPQhEgEg6gfIgNgIQhKgfhHgyQgtgGgwgMQgigIgggNQhagQhEgQIgbgDQhPAKg0AUQgdANgcAJQiSBAiBglIgYgCQhZgMhIgmQg8gdgXgmQgNgYgLggQACgdhDguIgBgBQg4hDBdhsQAognAvgkQDuinDWACQBNAMAagQQAxgEAiAUQAnAVAQAoQAMALAVAlQARAaAAATQAUgEASAXIAGAHQAeAUAxgDIBSADQARACARAFQAwAMA4AEIABAAQArAQAfAOQBFgKA3gUQAeghA2gEQAogHAWgWIAIgKQBwhRCmBIQA7AeAiAeIBHA4QAeAcAGAgQAIAaAQAYIAFAMQAPAfgHAtQAOBAgmAuIgCAEQgYBQhUA4QgpAfgxAPQgYAIgZAEQhGAfhOAAQgTAAgTgCg");
	this.shape_29.setTransform(247.5,471.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,51,51,0.498)").s().p("AJFGSIgEgBIikgMQhDgFg5gcIgMgJQhKgehGgwQgtgGgvgMQgigHgggNQhYgQhCgSIgbgDQhOAKgzATQgdAMgcAIQiQA9iAglIgYgDQhYgMhFgmQg7gdgWgmQgMgYgLgfQAAgdhBgtIgBgBQg3hDBahqQAngmAuglQDqikDTgCQBLAKAbgPQAvgEAjASQAmATASAmQANAKAVAkQARAZACARQAUgDARAVIAGAHQAeAUAwgDIBRACQAQADARAFQAwAMA3AFIAAAAQAqAQAeAOQBEgJA3gTQAegfA1gEQAngGAXgUIAIgJQByhJCgBGQA6AeAgAfIBGA4QAdAbAGAhQAIAZAPAYIAEAMQAPAfgHAsQANA/glAtIgCAEQgYBPhSA3QgpAfgwAQQgXAIgZAEQhFAfhNAAQgTAAgSgCg");
	this.shape_30.setTransform(247.5,471.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,51,51,0.498)").s().p("AI9GSIgEgBQhIgDhZgHQhCgEg5gbIgMgJQhIgdhHguQgsgGgugLQgigIgfgMQhWgQhCgUIgagDQhMAKg0ARQgcAMgcAHQiOA5h+glIgYgDQhXgNhDglQg6gegUgmIgXg2QAAgdhAgsIgBAAQg3hCBYhpQAmgnAtgkQDmiiDPgFQBJAIAcgPQAugEAjARQAmARATAjQANAKAWAiQARAXAEARQATgEASAVIAGAHQAeATAvgDQAuACAgAAIAhAHQAwAMA1AHIABAAQAoAQAdAQQBCgLA3gRQAegeA1gCQAngFAXgTIAIgIQBzhBCbBGQA5AeAfAeQAjAeAhAaQAcAbAGAgQAHAZAOAYIAEAMQAPAfgHArQAMA+gkAtIgDADQgXBOhQA4QgoAdgwARQgXAIgYAEQhFAfhNAAQgRAAgRgBg");
	this.shape_31.setTransform(247.5,471.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(51,51,51,0.498)").s().p("AI1GSIgEgBQhHgBhYgGQhAgDg5gbIgNgIQhGgchHgtQgrgGgugLQghgHgfgMQhUgQhAgVIgagEQhLALgzAPQgdALgcAGQiLA2h9glIgXgEQhWgOhBgkQg4gegUgmIgWg2QgBgcg/grIAAAAQg3hCBWhnQAlgmAsglQDiifDLgJQBHAHAcgPQAugFAiAQQAnAQAUAhQAOAJAVAfQATAVAFARQATgEARAUIAGAGQAfATAtgCQAuADAfgBQAQACAQAEQAvALA0AJIABAAQAnARAcARQBAgLA3gQQAfgcA0gCQAmgEAXgRIAJgHQB1g6CUBFQA4AeAeAfQAhAeAhAaQAcAaAGAhQAGAYANAYIADAMQAPAegGAqQALA+gkAsIgDADQgXBNhOA3QgnAdgvARQgWAIgYAFQhEAfhNAAIgggBg");
	this.shape_32.setTransform(247.5,471.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(51,51,51,0.498)").s().p("AItGRIgEgBQhGABhWgFQhAgDg4gZIgMgIQhGgchGgqQgrgGgtgLQghgHgegLQhTgRg/gWIgagEQhJALgzAOQgcAKgcAFQiJAzh7gmIgXgEQhVgOg/gkQg3gegTgmIgVg2QgDgcg9gqIAAAAQg2hBBThmQAkglArglQDeidDIgMQBFAFAdgOQAsgFAjAOQAmAOAWAeQAOAJAWAdQATAUAGAQQATgDARASIAGAGQAfASAsgBQAuADAegCQAQACAPAEQAvALAzAKQAmARAaATQA/gMA3gPQAfgaA0AAQAlgEAYgPIAJgGQB2gzCPBEQA3AfAcAfQAgAeAhAaQAbAZAGAhQAGAYAMAYIACAKQAPAggGApQALA8gkArIgDAEQgWBLhNA3QgmAdguARQgWAJgXAEQhFAghMAAIgegCg");
	this.shape_33.setTransform(247.5,471.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(51,51,51,0.498)").s().p("AIlGRIgEgBQhFAChUgEQg/gCg4gYIgMgIQhFgbhGgoQgqgGgsgLQgggHgegLQhSgQg+gYIgZgEQhIAKgzANQgcAJgbAFQiIAvh5glIgXgEQhUgQg9gkQg2gegRgmQgHgXgOgeQgEgbg8gpQg1hABRhlQAiglAsglQDZibDFgQQBCAEAegOQAsgFAiAMQAnANAWAdQAQAHAWAcQATASAIAPQASgDARASIAGAGQAfARArgBQAuADAcgCQAQACAQAEIBfAWIAAAAQAlASAZATQA+gMA3gOQAfgYAzAAQAkgDAZgNIAJgGQB4grCJBDQA2AfAbAfQAfAeAgAaQAbAZAFAgQAGAYALAYIACALQAOAfgFAoQAKA7gkArIgCAEQgXBKhLA2QglAdgtARQgWAJgWAFQhFAfhNAAIgbgBg");
	this.shape_34.setTransform(247.5,471.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(51,51,51,0.498)").s().p("AGCGQQg9gCg3gWIgNgIQhDgahGgnQgqgGgsgKQgfgHgegLQhQgQg9gZIgYgFQhHALgzAMQgcAIgbAEQiFAsh4gmIgXgEQhTgQg8gkQg0gegQgmQgGgXgOgdQgFgbg7gpQg0g/BOhjQAiglAqglQDWiaDBgSQBBACAegNQAsgGAhALQAnAMAYAaQAQAHAXAZQATASAJAOQASgDARARIAGAFQAfARApAAQAvADAagDQAQACAQAEQAuAKAvANQAkASAYAVIBzgaQAggWAyABQAkgDAZgLIAJgFQB6gkCEBCQA0AfAaAfQAdAeAhAaQAaAZAFAgQAGAXAJAYIACALQAOAfgFAnQAJA6gjArIgCADQgWBKhKA1QgkAdgtARQgVAJgWAFQhQAlhagGIgEgBQgiACgmAAQgmAAgqgCg");
	this.shape_35.setTransform(247.5,471.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(51,51,51,0.498)").s().p("AF+GSQg9gCg3gVIgMgHQhDgahGglQgogGgsgKQgfgGgdgLQhPgRg7gaIgZgFQhFALgzAKQgcAIgbADQiDAph3gmIgWgEQhSgRg6gjQgzgfgQgmQgFgWgOgeQgGgag5goIgBAAQgzg/BMhhQAhglAqglQDRiXC/gWQA/ABAfgNQAqgGAiAKQAmAKAZAYQARAGAXAYQAUAQAKANQASgCARAQIAGAFQAfAQAoAAQAuAEAagEQAPACAPAEQAuAKAuAOIABAAQAiATAYAVIBxgZQAggUAxABQAjgCAagJIAJgEQB8geB+BBQA0AfAYAgQAdAeAgAZQAaAZAEAgQAGAXAIAXIACALQAOAggFAmQAIA5gjAqIgCADQgWBJhHA1QgkAcgsASQgVAJgWAFQhOAlhZgGIgEgBQgsAEgxAAIg4gBg");
	this.shape_36.setTransform(247.5,471.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(51,51,51,0.498)").s().p("AF5GTQg8gBg2gVIgNgHQhBgZhGgjQgogGgrgKQgfgGgcgKQhOgRg6gcIgZgFIh2AUQgcAHgaACQiCAnh2gmIgVgFQhSgRg4gkQgygegPgmQgEgWgOgdQgHgbg4gmIgBAAQgzg+BKhhQAggkAqglQDNiWC8gYQA9gBAggNQApgGAiAJQAnAJAZAWQASAGAXAVQAVAQALALQARgBARAOIAGAFQAgAQAnAAQAuAFAYgFQAPACAPADQAuAKAtAQQAiATAWAWQA5gNA3gLQAggTAxACQAigBAagIIAKgDQB9gYB5BAQAzAgAXAgQAbAeAhAZQAZAYAEAgQAGAXAHAXIACALQANAggEAlQAHA4gjApIgCAEQgVBHhHA1QgjAcgrASQgVAJgVAGQhNAkhYgFIgEgBQgxAFg5AAIgpAAg");
	this.shape_37.setTransform(247.5,471.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(51,51,51,0.498)").s().p("AF1GUQg7gBg3gTIgMgHQhBgZhFghQgogHgqgJQgfgGgcgKQhMgRg5gdIgYgGIh2AUQgbAGgaACQiBAjh0gmIgVgFQhRgRg3gjQgxgfgNgnQgDgVgPgdQgIgag3gmIAAAAQgzg9BIhgQAfgkApgkQDLiVC4gbQA8gBAggNQApgHAhAIQAnAIAbAUQASAFAYAUQAUAOAMALQASgBAQANIAHAFQAgAQAlAAQAuAFAXgFQAPABAPAEQAuAJArARIAAAAQAhAUAVAXQA4gOA2gKQAhgRAwADQAigBAagGIAKgDQB/gSB1BAQAyAfAWAhQAZAeAhAZQAYAYAFAfIALAuIABALQANAfgEAlQAHA3giApIgCADQgVBHhFA1QgjAbgrASQgUAKgVAGQhMAkhWgFIgEgBQg4AHhBAAIgYAAg");
	this.shape_38.setTransform(247.5,471.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(51,51,51,0.498)").s().p("AFwGVQg6AAg2gTIgMgGQhAgZhFgfQgngHgqgJQgegFgcgKQhLgRg5geIgXgGIh0ASQgbAFgbACQh+AghzgmIgVgFQhQgSg2gjQgvgfgNgmQgCgWgQgcQgIgag2glQgzg9BHheQAegkAogkQDHiTC2geQA6gCAhgNQAogHAhAHQAnAGAcASQATAFAYATQAUAMAOALQARgBAQANIAHAEQAgAPAkABQAuAFAWgGQAPACAPADQAtAJAqASIAAAAQAgAUAUAYQA3gOA2gJQAigQAvAEQAhAAAbgFIAKgDQCAgLBwA+QAyAgAUAhQAZAeAgAZQAYAXAEAgIALAtIABAMQAMAfgDAjQAGA3giAoIgCADQgVBGhEA0QghAcgrASQgTAKgVAGQhLAkhWgFIgDAAQg5AIhCAAIgVAAg");
	this.shape_39.setTransform(247.5,471.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(51,51,51,0.498)").s().p("AFsGWQg5AAg2gSIgMgGQg/gYhFgeIhQgPQgdgGgcgJQhKgSg4geIgXgHQhAALgzAHQgbAEgaABQh9AehygmIgVgFQhPgTg0gjQgvgfgMgmQAAgWgRgcQgJgZg1gkIAAAAQgyg9BFhdQAdgjAoglQDEiRCzggQA4gEAigNQAngHAiAGQAmAFAdARQAUAEAXARQAWAMAOAJQARAAAQALIAHAFQAgAOAiACQAvAFAVgGQAPABAOADQAtAJApATQAgAVATAZQA1gPA3gIQAhgPAvAEQAhABAbgEIAKgBQCBgGBsA9QAxAgATAhQAYAfAgAYQAXAXAFAgIAJAtIABALQAMAfgDAjQAFA2giAoIgBADQgVBFhCA0QgiAbgpATQgUAJgUAGQhKAkhUgEIgEAAQg8AKhFAAIgNAAg");
	this.shape_40.setTransform(247.5,471.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(51,51,51,0.498)").s().p("AD6GGIgMgFQg+gYhFgdQgngGgpgJQgcgFgcgKQhIgRg4ggIgXgHQg/AMgyAFQgbAEgaAAQh7AchxgmIgVgGQhOgTgzgjQgugegLgnQAAgVgRgcQgKgZgzgkIgBAAQgxg8BDhcQAcgjAoglQDBiPCxgjQA2gFAigMQAngHAhAEQAnAEAdAPQAVAEAYAPIAkAUQARAAARALIAGAEQAgAOAiACQAvAGAUgHQAOABAPADQAsAJAoAUIAAAAQAeAUATAaQA0gPA2gHQAigNAuAEQAhACAbgDIALgBQCCAABoA8QAwAhASAhQAXAeAgAZQAXAWAEAgIAIAtIAAALQANAfgDAiQAEA1ghAnIgCAEQgUBEhBAzQghAbgpATQgTAKgUAGQhJAkhUgEIgDgBQhBANhLAAQg4AAg2gRg");
	this.shape_41.setTransform(247.6,471.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(51,51,51,0.498)").s().p("AD3GIIgMgFIiCgzIhOgPQgdgFgbgJQhHgSg3ggIgXgIQg+AMgyAFQgbADgaAAQh6AZhwgnIgUgFQhOgUgxgiQgtgfgKgnQAAgVgRgcQgLgYgygjQgyg8BChbQAbgiAoglQC+iPCuglQA1gGAjgMQAmgHAhADQAnAEAeANQAVADAYAOIAmATQARgBAQALIAHADQAgAOAgACQAvAGATgHQAPABAOADQAtAJAmAVQAeAVARAaQA0gQA2gGQAigMAtAGQAhABAbgBIALgBQCDAFBkA8QAvAhASAhQAVAeAhAZQAWAWAEAgIAHAsIAAAMQAMAegCAhQAEA1ghAnIgCADQgVBEg/AzQggAagpAUQgTAJgTAHQhIAjhTgDIgDgBQhBAOhKAAIgDAAQg2AAg0gPg");
	this.shape_42.setTransform(247.6,471.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(51,51,51,0.498)").s().p("AD0GLIgLgGIiCgxIhNgOQgcgFgcgJQhGgSg2giIgWgHQg9ALgyAEQgbADgagBQh4AXhvgmIgUgGQhNgUgxgiQgsgggJgnQABgUgRgbQgMgZgxgiIgBAAQgwg7A/haQAbgjAnglQC7iNCtgnQA0gHAigMQAmgHAhACQAnADAfALQAWADAYANIAnARQARAAAPAJIAHAEQAhANAfADQAvAGASgIQAPABANADQAtAIAlAWQAdAWARAbQAygQA2gGQAjgKAtAFQAgADAbAAIALgBQCFAKBgA8QAuAgARAiQAVAeAgAYQAVAWAEAgQAEAVADAXIAAAMQAMAegDAhQAEAzghAnIgCADQgUBDg/AzQgfAagoAUQgTAJgTAHQhIAjhRgDIgDAAQhAAPhJAAIgHAAQgzAAgzgNg");
	this.shape_43.setTransform(247.6,471.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(51,51,51,0.498)").s().p("ADyGNIgMgGIiBgvIhMgOQgcgFgbgJQhFgSg1giIgWgIQg8AMgzADQgaACgagBQh3AVhugnIgUgGQhMgVgvgiQgsgfgJgnQADgUgSgbQgNgZgwghQgxg7A/hZQAagiAmglQC5iMCqgpQAzgIAjgMQAlgHAhABQAnACAgAKQAWACAYAMIAoAPQARABAQAIIAGAEQAhANAfACQAuAHASgIQAOAAAOADQAsAJAkAXIABAAQAcAVAQAcQAxgQA2gFQAigJAtAGIA8AEIALAAQCFAOBdA7QAuAgAPAiQAUAeAgAZQAWAVAEAgQADAVACAXIAAALQALAfgCAgQADAzggAmIgCADQgUBDg+AyQgfAagnAUQgTAJgTAIQhGAjhRgDIgDAAQhAAPhIABIgKAAQgxAAgwgMg");
	this.shape_44.setTransform(247.6,471.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(51,51,51,0.498)").s().p("ADwGOIgMgFQg7gWhFgYIhMgOQgbgFgbgIQhEgSg1gkIgWgHQg7ALgyADQgbABgZgCQh2AUhtgnIgUgGQhMgVgugiQgqgfgJgoQADgUgSgbQgNgYgwghQgwg6A9hYQAagiAmglQC2iLCogrQAygJAjgLQAlgIAhABQAmAAAhAJQAXACAYAKIAqAPQAQAAAQAIIAGAEQAhAMAeADQAvAHAQgJQAOABAOACQAsAJAkAYQAbAVAPAdQAxgRA2gEQAigIAtAGIA7AGIALAAQCHATBZA6QAtAhAPAiQATAeAgAYQAVAWAEAfQADAVACAXIgBAMQAMAegDAfQADAzggAmIgCADQgUBCg8AyQgfAagnATQgSAKgTAIQhGAihPgCIgEAAQg/AQhHACIgLAAQgwAAgvgMg");
	this.shape_45.setTransform(247.6,471.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(51,51,51,0.498)").s().p("ADuGQIgMgFQg7gWhEgWIhMgOQgbgFgagIQhEgSgzgkIgWgIQg6ALgzACQgaABgagCQh0ARhtgnIgTgGQhLgWgtghQgqgfgIgoQAEgTgTgbQgNgYgvghIgBAAQgvg6A7hXQAZgiAmglQC0iJCmgtQAxgKAkgLQAkgIAhAAQAmgBAiAIQAXACAZAJIAqANQAQABAPAHIAHADQAhANAdADQAvAHAQgJQAOAAANADQAsAIAjAYQAbAXAOAdQAwgRA2gEQAjgHAsAHIA7AHIALABQCIAWBWA6QAsAhAPAiQASAeAgAZQAUAVAEAfQADAVABAXIgBALQALAfgCAeQADAyggAmIgCADQgUBBg7AyQgeAagnAUQgSAKgSAHQhGAjhPgDIgDAAQg/AShGACIgOAAQguAAgtgLg");
	this.shape_46.setTransform(247.6,471.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(51,51,51,0.498)").s().p("ADrGSIgLgFQg6gWhFgVIhKgOQgbgEgagJQhDgSgzglIgWgIQg5AMgzABQgaABgZgDQh0AQhsgnIgTgHQhLgWgsghQgpgfgHgoQAEgTgSgbQgOgYgvggQgvg5A6hXQAYgiAmgkQCyiJCkgvQAwgKAkgLQAkgIAhgBQAmgBAiAGQAYACAZAIIAqAMQAQAAAQAHIAHADQAhANAcADQAvAHAPgKQAOABANACQAsAIAiAaQAaAWAOAeQAvgRA2gDQAjgGArAHIA8AIIALABQCIAbBUA5QAsAhANAiQASAeAfAYQAVAVADAgQADAVAAAXIAAALQALAegCAeQACAyggAlIgBADQgUBBg7AxQgeAagmAUQgSAKgSAHQhEAjhPgCIgDAAQg+AShGADIgPAAQgsAAgugKg");
	this.shape_47.setTransform(247.6,471.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(51,51,51,0.498)").s().p("ADqGTIgMgEQg6gWhEgUIhKgOQgbgEgagIQhBgSgzgmIgVgIQg5ALgzABQgaAAgZgDQhzAOhrgnIgTgGQhKgXgrghQgpgfgGgoQAFgTgTgbQgPgXguggQgvg5A5hWQAYghAmglQCviHCjgxQAugLAlgLQAkgIAggCQAngCAiAGQAYABAZAHQAYAFAUAGQAQABAPAGIAHADQAiAMAbADQAvAIAOgKQAOAAANACQAsAIAhAaIAAAAQAaAXANAeQAvgRA1gDQAjgFAsAIIA7AJIALACQCJAeBRA4QArAiANAiQARAeAgAYQAUAVADAfQADAVAAAXIgBALQAKAegBAeQABAxgfAlIgCADQgTBAg6AyQgeAZgmAUQgRAKgSAIQhEAihNgBIgEgBQg9AUhFADIgPAAQgsAAgtgKg");
	this.shape_48.setTransform(247.6,471.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(51,51,51,0.498)").s().p("ADoGVIgLgEQg6gVhEgUIhJgOQgbgEgagIQhBgSgygmIgVgJQg4AMgzAAQgaAAgZgDQhyAMhqgnIgTgGQhKgXgqghQgogggGgnQAFgTgTgbQgPgXgtgfQgvg5A4hVQAYgiAlglQCtiGCigyIBSgXQAkgIAggCQAmgDAjAFQAZAAAZAHIAtAJQAPACAQAFIAHADQAhAMAbADQAvAIANgKQAOAAANADQAsAHAgAbQAZAXANAfQAugSA2gCQAjgEArAIIA7AKIALACQCKAhBOA4QArAiANAiQAQAfAfAXQAUAVAEAfQACAVgBAXIgBALQALAegCAdQACAxggAkIgBAEQgUA/g5AxQgdAagmAUQgRAKgSAIQhDAihNgBIgDAAQg+AUhEADIgTAAQgpAAgrgJg");
	this.shape_49.setTransform(247.6,471.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(51,51,51,0.498)").s().p("ADmGXIgLgFQg5gUhEgTIhJgOQgagEgagIQhAgSgygnIgVgIQg4ALgyAAQgagBgZgDQhxALhpgnIgTgHQhKgXgpghQgogggFgnQAFgTgTgaQgQgYgsgeQgvg5A4hUQAWgiAlglQCsiFChgzIBRgYQAjgIAhgDQAmgDAkAEQAYAAAaAFIAtAJQAPABAQAGIAHACQAhAMAbAEQAuAIANgLQAOAAANADQArAHAgAcQAZAWAMAgQAtgSA2gCQAjgDArAIQAdAFAeAHIALACQCLAkBMA4QArAhALAjQAQAeAfAYQAUAUADAgQADATgCAYIgBALQALAegBAdQAAAwgfAkIgBAEQgUA/g4AxQgdAZglAUQgRALgSAIQhDAihMgCIgDAAQg9AVhEAEIgUAAQgpAAgqgIg");
	this.shape_50.setTransform(247.6,471.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(51,51,51,0.498)").s().p("ADlGZIgLgFQg5gUhEgSIhIgOQgbgEgZgHQhAgTgxgnIgVgJQg3AMgygBQgagBgZgEQhwAKhpgnIgTgHQhJgXgpghQgngggFgnQAGgTgTgaQgRgXgsgfQgug4A2hUQAXghAkglQCriFCfg0IBRgYQAjgJAggDQAngEAjADQAaAAAZAFIAuAIQAPABAQAFIAHADQAhALAaAEQAvAIAMgLQAOAAANACQArAIAfAcQAZAXALAgQAtgSA2gBQAjgDArAIQAdAFAdAIIAMACQCLAnBKA4QAqAhALAjQAPAeAgAYQATAUAEAfQACAUgCAYIgBALQAKAegBAcQABAwggAkIgBADQgTA/g4AxQgcAZgmAUQgQALgSAIQhCAihMgBIgDAAQg9AVhDAEIgVAAQgoAAgpgHg");
	this.shape_51.setTransform(247.6,471.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(51,51,51,0.498)").s().p("ADjGaIgLgFQg4gUhEgRIhIgOQgagEgZgHQg/gSgygoIgUgJQg3AMgygCQgagBgZgEQhvAJhpgoIgSgGQhJgYgoghQgngfgFgoQAHgTgUgaQgQgXgsgeQgug4A2hTQAWghAkglQCpiECeg2IBRgYQAigJAhgDQAmgFAkACQAaAAAZAEIAvAHQAPACAPAEIAHADQAiALAZAEQAvAIAMgLQAOAAANACQArAIAeAcQAZAXALAgQAsgSA2AAQAjgDAqAJQAdAGAeAIIAMACQCMAqBHA3QAqAhALAjQAOAfAgAXQATAUADAgQADATgDAYIgBALQAKAegBAcQAAAvgfAkIgBADQgTA/g3AwQgcAZglAVQgRAKgRAIQhCAihMgBIgDAAQg8AWhDAEIgYABQgmAAgogHg");
	this.shape_52.setTransform(247.6,471.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(51,51,51,0.498)").s().p("ADiGbIgLgEQg4gUhEgRIhHgNQgagEgZgHQg/gTgxgoIgUgJQg3AMgygCQgZgBgZgFQhvAIhognIgTgHQhIgYgoghQgmgggEgnQAHgTgUgaQgRgXgrgdQgug4A1hTQAWghAkglQCoiDCcg3IBRgZQAigIAggEQAngFAkABQAaAAAZADQAYADAXAEQAQABAPAEIAHADQAhALAaAEQAuAIAMgLQAOAAAMACQArAHAeAdQAYAYALAgQAsgSA1gBQAkgBAqAJQAdAFAeAJIALADQCNAsBGA2QAqAiAKAjQAOAeAfAYQATAUADAfQADATgDAYIgCALQALAegBAcQAAAvgfAkIgBADQgUA+g2AwQgcAZglAVQgQAKgRAIQhCAihLAAIgDAAQg8AWhCAEIgZABQgmAAgngHg");
	this.shape_53.setTransform(247.6,471.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(51,51,51,0.498)").s().p("ADhGdIgLgEQg3gUhFgRQgigHglgGQgZgEgZgHQg/gSgwgpIgVgJQg1AMgygDQgagBgZgFQhuAHhognIgSgHQhJgYgnghQglgggFgnQAIgTgUgaQgRgWgrgeQgug3A0hTQAWghAkglQCmiDCcg3QAqgPAngKQAhgJAggEQAngFAlAAQAaAAAZACIAwAGQAPACAPAEIAHACQAhALAaAEQAuAJAMgMQANAAANACQArAIAeAdQAXAXALAhQArgTA1AAQAkgBAqAKQAcAGAeAIIAMAEQCNAtBFA3QApAiAKAiQAOAfAfAXQATAUADAfQACATgDAYIgCALQALAegBAcQAAAvgfAjIgBADQgUA+g2AwQgbAZglAVQgQAKgRAJQhBAhhLAAIgDAAQg8AXhCAEIgaABQglAAgmgGg");
	this.shape_54.setTransform(247.6,471.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(51,51,51,0.498)").s().p("ADgGeIgLgEQg3gUhEgQIhHgNQgagEgZgHQg+gSgwgpIgUgKQg1AMgygCQgagCgZgFQhuAGhngnIgSgHQhIgYgnghQglgggFgnQAIgTgUgZQgRgXgrgdQgug4A0hSQAWghAjglQCmiCCbg5QAqgOAmgLQAigJAggEQAmgGAmAAQAaAAAZACQAZACAXADIAeAGIAHACQAhALAaAEQAuAJALgMQAOAAAMACQArAHAeAeQAXAYAKAgQArgSA2AAQAjgBAqAKQAcAGAeAJIAMAEQCOAvBDA2QApAiAJAjQAOAeAfAYQATAUADAfQACASgDAYIgCALQAKAeAAAcQgBAugfAkIgBADQgTA9g2AxQgbAYgkAVQgRALgRAIQhAAihLgBIgDAAQg8AYhBAEIgbABQglAAglgGg");
	this.shape_55.setTransform(247.6,471.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(51,51,51,0.498)").s().p("ADgGfIgMgEQg3gUhEgPQghgHglgGQgagEgZgHQg9gSgwgqIgUgJQg2AMgygDQgZgCgZgFQhtAGhngoIgTgHQhIgYgmggQglgggEgoQAIgSgUgaQgSgXgqgdQgug3A0hSQAVghAkglQCliCCag5QApgPAngKQAhgJAggFQAngGAlAAQAagBAaACQAYABAYAEIAeAFIAHACQAhALAZAEQAvAJALgMQANAAANACQAqAHAeAeQAXAYAKAhQAqgTA2ABQAkgBApAKQAcAGAfAKIAMAEQCNAwBCA2QApAiAJAjQAOAeAfAYQASAUADAfQADASgEAYIgCALQAKAfAAAaQgBAvgfAjIgBADQgTA+g1AwQgbAZglAUQgQALgRAIQhAAihKAAIgDAAQg8AXhBAFIgeABQgjAAgjgGg");
	this.shape_56.setTransform(247.6,471.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(51,51,51,0.498)").s().p("ADfGgIgLgEQg3gUhEgPQgigHgkgGQgagEgZgHQg9gSgwgqIgUgJQg1AMgygDQgagCgYgFQhtAFhngoIgSgHQhIgYgmghQglgggEgnQAIgTgUgZQgSgXgpgdQgug3AzhSQAVggAkglQCkiCCag6QAogPAngKQAhgJAggFQAngGAlgBQAbgBAaACQAYABAYADIAeAFIAHADQAhAKAZAFQAvAIAKgMQAOAAAMACQArAHAdAeQAWAYAKAhQArgSA1AAQAkAAApAKQAdAGAeAKIAMAEQCOAyBBA2QApAiAJAjQANAeAfAYQASATADAfQACATgDAYIgCALQAKAegBAbQAAAugfAjIgBADQgTA+g1AwQgbAYglAVQgQALgQAIQhBAihKgBIgDAAQg7AYhBAFIgeABQgjAAgjgFg");
	this.shape_57.setTransform(247.6,471.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(51,51,51,0.498)").s().p("ADeGhIgLgEQg3gUhEgPQghgHglgGQgagDgYgHQg9gTgwgqIgUgJQg1AMgygDQgZgCgZgGQhtAFhngoIgSgHQhHgYgmggQglgggDgoQAIgSgVgaQgRgXgqgcQgug3AzhSQAVghAjglQCkiBCag6QAogPAngLQAhgJAggFQAngGAlgBQAbgBAaABQAYABAYADIAeAGIAHACQAhAKAZAFQAvAJAKgNQANAAANACQAqAHAdAfQAXAXAKAiQAqgTA1ABQAkAAApAKQAdAGAeAKIAMAEQCOAzBBA2QAoAiAJAjQANAeAfAYQASATADAfQACATgDAYIgCALQAKAegBAaQgBAvgeAjIgBADQgTA9g1AwQgbAZgkAUQgRALgQAIQhAAihKAAIgDAAQg8AYhAAFIgfABQgiAAgjgFg");
	this.shape_58.setTransform(247.6,471.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(51,51,51,0.498)").s().p("ADeGhIgLgEQg3gUhEgOQghgHglgGQgZgEgZgHQg9gSgvgqIgUgKQg1AMgygDQgagCgYgFQhtAEhmgoIgSgHQhIgYgmghQgkgggEgnQAJgTgVgZQgSgXgpgcQgug3AzhSQAUggAkglQCjiCCZg6QApgPAngLQAhgJAggFQAmgHAmgBQAbgBAZABQAZABAYADIAeAGIAHACQAhAKAZAFQAuAJALgNQANAAANACQAqAHAdAfQAWAYAKAhQAqgTA2ABQAjAAAqAKQAcAHAeAKIAMAEQCOAzBAA2QApAiAIAjQANAeAgAYQASAUADAfQACASgEAYIgCALQAKAegBAbQgBAugeAjIgBADQgTA9g1AwQgbAYgkAVQgQALgRAIQhAAihJAAIgDAAQg8AYhAAFIgfABQgiAAgjgFg");
	this.shape_59.setTransform(247.6,471.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(51,51,51,0.498)").s().p("ADdGhIgLgEQg2gThEgPQgigHgkgGQgagDgYgHQg9gTgwgqIgUgJQg0AMgygEQgagCgYgFQhtAEhmgoIgSgHQhIgYglghQglgggDgnQAIgTgVgZQgRgXgqgcQgug3AzhSQAVggAjglQCjiBCZg7QAogPAngLQAhgJAggFQAngHAmgBQAagBAaABQAZABAYADIAeAFIAHACQAhAKAZAFQAuAJAKgNQAOAAAMACQArAHAcAfQAXAYAJAhQAqgTA2ABQAkABApAKQAcAGAeALIAMAEQCPA0A/A1QApAiAIAjQANAfAfAXQASAUADAfQACASgDAYIgCALQAKAegBAbQgBAugeAjIgBADQgTA9g1AwQgbAYgkAVQgQALgRAIQhAAihJAAIgDAAQg8AYhAAFIgfACQghAAgkgGg");
	this.shape_60.setTransform(247.6,471.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(51,51,51,0.498)").s().p("ADeGhQhWggh2gTQhcgMhCg7IgUgJQhQAShJgRQh2AEhvgvQiOgwgHhQQARgjhYg8QhAhOB9iAQFnkcE1A5QBpAhAQgUQA8AAAlAoQAWAXAKAiQBZgoCOAyQD1BWAWBcQAMAfAgAXQAfAigOBGQAaBSgwA4QgcBehsA/QhPA1heAAQhLAehRAAQghAAgigFg");
	this.shape_61.setTransform(247.6,471.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(21));

	// needle copy 2
	this.instance_7 = new lib.needle();
	this.instance_7.parent = this;
	this.instance_7.setTransform(444.9,484.5,0.629,0.314,0,56.8,6.6,3.7,394.9);
	this.instance_7.alpha = 0.5;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_7.cache(-140,-6,287,503);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({regX:3.8,regY:395.2,x:445,y:483.9},0).to({regY:394.9,scaleX:0.46,scaleY:0.53,skewX:77,skewY:18.1,x:560.3,y:479.6},60,cjs.Ease.quadInOut).wait(21));

	// Layer_8 copy
	this.instance_8 = new lib.red_line2("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(268.7,474.1,0.678,0.17,0,0,1.9,755.1,165.9);
	this.instance_8.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(311.7,272,0.678,0.678,0,0,0,802.5,436);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.2,245,1493,592.6);
// library properties:
lib.properties = {
	id: 'F56A4CDCB87D4F9AA0E7636C88009A28',
	width: 540,
	height: 540,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:require('./images/bg.jpg?1541756739678'), id:"bg"},
		{src:require('./images/man.png?1541756739678'), id:"man"},
		{src:require('./images/Needle.png?1541756739678'), id:"Needle"},
		{src:require('./images/woman.png?1541756739678'), id:"woman"}
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
an.compositions['F56A4CDCB87D4F9AA0E7636C88009A28'] = {
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