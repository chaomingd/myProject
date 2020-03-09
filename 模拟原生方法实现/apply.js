Function.prototype.myApply = function(context, applyAgrs) {
	var ctx = context || window;
	ctx.__fn__ = this;
	var args = [];
	for(var i = 0, len = applyAgrs.length; i < len ;i ++) {
		args.push('arguments['+ i +']')
	}
	var result = eval('ctx.__fn__('+ args +')');
	delete ctx.__fn__;
	return result;
}