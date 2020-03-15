function Knew(Fun){
	var obj={};
	obj.__proto__=Fun.prototype;
	var result=Fun.apply(obj,Array.prototype.slice.call(arguments,1))
	if((typeof result ==="object" || typeof result ==="function") && result!==null){
		return result;
	}
	return obj;
}

var a = []

console.log(a instanceof Array)

function instanceofFun(son,mom){
	let tempson=son.__proto__;
	if(!tempson) return false;
	while(tempson){
		if(mom.prototype===tempson){
			return true;
		}
		tempson=tempson.__proto__;
	}
	return false;
}
left instanceof right

// left.__proto__ === right.prototype;
// left.__proto__.__proto__ === right.prototype;

// left.__proto__.__prot__

function instanceofFun(left,right) {
	var proto = left.__proto__;
	// if(!proto) return false;
	while(proto) {
		if(proto === right.prototype) return true;
		proto = proto.__proto__;
	}
	return false;
}

function inherit(subClass,supClass){
	subClass.prototype=Object.create(supClass.prototype);
	subClass.prototype.constructor=subClass;
	subClass.__proto__=supClass;
}


function Sup() {}
inherit(Sub,Sup)
function Sub() {
	Sub.__proto__.apply(this,arguments)
}

var Sub = (function(Sup) {
	inherit(Sub,Sup)
	function Sub() {
		Sub.__proto__.apply(this,arguments)
	}
	return Sub;
})(Sup)

