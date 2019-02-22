Function.prototype._bind = function(context) {
	var context = Object(context) || window;
	var self = this;
	var args = Array.prototype.slice(arguments,1);
	function fNop() {

	}
	function fBound() {
		var bindArgs = Array.prototype.slice(arguments);
		self.apply(this instanceof fNop ? this: context,args.concat(bindArgs));
	}
	fNop.prototype = this.prototype;
	fBound.prototype = new fNop();
	return fBound;
}