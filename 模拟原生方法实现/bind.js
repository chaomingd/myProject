Function.prototype.bind2 = function (context) {
	if (typeof this !== "function") {
		throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
	}
	var self = this;
	var args = Array.prototype.slice.call(arguments, 1);
	var fNOP = function () {};
	var fBound = function () {
			var bindArgs = Array.prototype.slice.call(arguments);
			return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
	}
	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP();
	return fBound;
}


var foo = {
	value: 1
};

var foo1 = {
	value: 2,
}

function bar(name, age) {
	// console.log(this.value);
	// console.log(name);
	// console.log(age);

}

var bindFoo = bar.bind2(foo, 'daisy');
console.log(bindFoo)
// bindFoo('18');
bindFoo.bind2(foo1)('18');

console.log(bindFoo)

Function.prototype.bind3 = function(context) {
	if(typeof this !== 'function') {
		throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
	}

	var self = this;
	var args = Array.prototype.slice.call(arguments,1)
	var fNOP = function() {}
	var fBound = function() {
		var bindArgs = Array.prototype.slice.call(arguments);
		return self.apply(this instanceof fNOP? this: context,args.concat(bindArgs))
	}
	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP();
	return fBound;
}


