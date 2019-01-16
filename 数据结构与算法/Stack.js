let Stack = (function () {
	class Stack {
		constructor() {
			this.items = [];
		}
		push(element) {
			let s = this.items; //{3}
			s.push(element);
		}
		pop() {
			let s = this.items;
			let r = s.pop();
			return r;
		}
		clear() {
			this.items = [];
		}
		peek() {
			return this.items[0]
		}
		length() {
			return this.items.length;
		}
		//其他方法
	}
	return Stack;
})();

//  进制转换

function baseConverter(decNumber, base) {
	var remStack = new Stack(),
		rem,
		baseString = '',
		digits = '0123456789ABCDEF'; //{6}
	while (decNumber > 0) {
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}
	while (!remStack.isEmpty()) {
		baseString += digits[remStack.pop()]; //{7}
	}
	return baseString;
}


// 平衡（括号的问题

function matchBracket(str) {
	var stack = new Stack();
	for(var i = 0 ;i < str.length; i ++ ) {
		if(str[i] === '('){
			stack.push(i);
		}
		if(str[i] === ')'){
			stack.pop();
		}
	}
	if(stack.length() > 0) {
		return stack.peek();
	}
	return '匹配'
}

console.log(matchBracket('2.3 + 23 / 12 + (3.14159×0.24'));