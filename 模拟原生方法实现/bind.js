
Function.prototype.bind2 = function(context) {
	if (typeof this !== "function") {
		throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
	}
	context = Object(context) || window;
	var self = this;
	var boundArgs = Array.prototype.slice.call(arguments,1);
	function fNOP() {}
	function fBound() {
		var args = Array.prototype.slice.apply(arguments);
		self.apply(this instanceof fBound ? this : context, boundArgs.concat(args));
	}
	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP;
	return fBound;
}
