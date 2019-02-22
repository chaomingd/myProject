Function.prototype._call = function(context) {
	var context = Object(context) || window;
	context.fn = this;
	var args = [];
	var result;
	if(arguments.length === 1){
		result = context.fn();
	}else {
		for(var i = 1, len = arguments.length; i < len; i ++) {
			args.push('arguments[' + i + ']')
		}
		result = eval('context.fn(' + args + ')')
	}
	delete context.fn;
	return result;
}
var foo = {
	value: 1
};

function bar(name, age) {
	console.log(name)
	console.log(age)
	console.log(this.value);
}

bar._call(null, 'kevin', 18);