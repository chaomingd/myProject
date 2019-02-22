Function.prototype._apply = function(context,arr) {
	var context = Object(context) || window;
	context.fn = this;
	var result;
	var args = [];
	if(!arr) {
		result = context.fn();
	}else {
		for(var i = 0, len = arr.length; i < len; i ++) {
			args.push('arr[' + i + ']')
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

bar._apply(foo, ['kevin', 18]);
console.log(foo)