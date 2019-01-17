function remove(arr, item) {
	var result = [];
	arr.forEach(data => {
		if(data !== item) {
			result.push(data)
		}
	})
	return result;
}

function curryIt(fn) {
	var slice = [].slice;
	var args = slice.call(arguments,1);
	return function curry() {
		args = args.concat(slice.call(arguments))
		if(args.length < 3) {
			return curry;
		}
		return fn.apply(null,args);
	}
}


var fn = function (a, b, c) {return a + b + c}; 
console.log(curryIt(fn,1)(1)(2));



