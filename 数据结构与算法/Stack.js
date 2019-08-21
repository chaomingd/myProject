function Stack() {
	this._item = [];
}
Stack.prototype = {
	constructor: Stack,
	push: function(item) {
		this._item.push(item)
	},
	pop: function() {
		return this._item.pop();
	},
	top: function() {
		return this._item[this._item.length - 1]
	},
	size: function() {
		return this._item.length;
	},
	isEmpty: function() {
		return this._item.length === 0;
	},
	clear: function() {
		this._item.length = 0;
	}
}


function isLegalBrackets(str) {
	var stack = new Stack();
	for(var i = 0,len = str.length;i < len;i ++) {
		if(str[i] === '(') {
			// 遇到左括压人栈中
			stack.push(str[i]);
		}else if(str[i] === ')') {
			// 遇到右括号判断栈是否为空
			if(stack.isEmpty()) {
				return false;
			}else {
				stack.pop();
			}
		}
	}
	return stack.isEmpty();
}
var arr = [4,13,5,'/','+'];


function calc(arr) {
	var stack = new Stack();
	var calc = ['+','/','-','*']
	arr.forEach(item => {
		if(calc.indexOf(item) > -1) {
			var b = stack.pop();
			var a = stack.pop();
			var res = eval(a + item + b);
			stack.push(res.toString());
		}else {
			stack.push(item);
		}
	})
	return +stack.top();
}

