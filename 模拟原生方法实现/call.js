Function.prototype.myCall = function(context) {
	var ctx = context || window;
	ctx.__fn__ = this;
	var args = []
	for(var i = 1,len = arguments.length; i < len; i ++) {
		args.push('arguments['+i+']')
	}
	console.log(args)
	let result = eval('ctx.__fn__('+args+')');
	delete ctx.__fn__;
	return result;
}

function getData(arg2) {
	console.log(arg2)
	return this.data;
}

var ctx = {
	data: '2'
}

console.log(getData.myCall(ctx,'arg2'))