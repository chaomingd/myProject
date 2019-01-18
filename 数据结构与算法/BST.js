function BST() {
	var Node = function(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	var root = null;
	this.getRoot = function() {
		return root;
	}
	function insert(node,newNode) {
		if(newNode.data < node.data) {
			if(node.left === null) {
				node.left = newNode;
			}else {
				insert(node.left,newNode);
			}
		}else {
			if(node.right === null) {
				node.right = newNode;
			}else {
				insert(node.right,newNode);
			}
		}
	}
	this.insert = function(data) {
		var node = new Node(data);
		if(root === null){
			root = node;
		}else {
			// var current = root;
			// var parent;
			// while(current) {
			// 	parent = current;
			// 	if(data < current.data) {
			// 		current = current.left;
			// 		if(current === null) {
			// 			parent.left = node;
			// 			return true;
			// 		}
			// 	}else {
			// 		current = current.right;
			// 		if(current === null) {
			// 			parent.right = node;
			// 			return true;
			// 		}
			// 	}
			// }
			insert(root,node);
		}
	}
	function inOrder(node,callback) {
		if(node === null) return;
		inOrder(node.left,callback);
		callback && callback(node);
		inOrder(node.right,callback);
	}

	this.inOrder = function(callback) {
		inOrder(root,callback)
	}
	function preOrder(node,callback) {
		if(node === null) return;
		callback && callback(node);
		preOrder(node.left,callback);
		preOrder(node.right,callback);
	}

	this.preOrder = function(callback) {
		preOrder(root,callback)
	}
	function postOrder(node,callback) {
		if(node === null) return;
		postOrder(node.left,callback);
		postOrder(node.right,callback);
		callback && callback(node);
	}

	this.postOrder = function(callback) {
		postOrder(root,callback)
	}

	this.getMin = function() {
		var current = root;
		while(current && current.left !== null) {
			current = current.left;
		}
		return current;
	}
	this.getMax = function() {
		var current = root;
		while(current && current.right !== null) {
			current = current.right;
		}
		return current;
	}

	function search(node,data) {
		if(node === null) return false;
		if(data < node.data) {
			return search(node.left,data)
		}else if(data > node.data){
			return search(node.right,data);
		}else {
			return true;
		}
	}

	function treeCount(node) {
		if(node === null) return 0;
		return treeCount(node.left) + treeCount(node.right) + 1;
	}
	this.size = function() {
		return treeCount(root)
	}
	function treeHeight(node) {
		if(node === null) return 0;
		return Math.max(treeHeight(node.left),treeHeight(node.right)) + 1;
	}
	this.height = function() {
		return treeHeight(root)
	}

	this.search = function(data) {
		// var current = root;
		// while(current) {
		// 	if(data < current.data) {
		// 		current = current.left;
		// 	}else if(data > current.data){
		// 		current = current.right;
		// 	}else {
		// 		return true;
		// 	}
		// }
		// return false;
		return search(root,data);
	}

	function findMinNode(node) {
		while(node && node.left !== null) {
			node = node.left
		} 
		return node;
	}

	function remove(node,data) {
		if(node === null) return null;
		if(data < node.data) {
			node.left = remove(node.left,data);
			return node;
		}else if(data > node.data) {
			node.right = remove(node.right,data)
			return node;
		}else {
			if(node.right === null && node.left === null) {
				node = null;
				return node;
			}
			if(node.left === null) {
				node = node.left;
				return node;
			}
			if(node.right === null) {
				node = node.left;
				return node;
			}
			var minNode = findMinNode(node.right);
			node.data = minNode.data;
			node.right = remove(node.right,minNode.data);
			return node;
		}
	}

	this.remove = function(data) {
		return remove(root,data)
	}
	this.print = function() {
		var node = root;
		var Q = [];
		var result = [];
		result.push(node.data);
		if(node.left !== null) {
			Q.push(node.left);
		}
		if(node.right !== null) {
			Q.push(node.right);
		}
		console.log(node.data + '');
		while(true) {
			var len = Q.length;
			var str = '';
			if(len === 0) break;
			for(var i = 0; i < len; i ++) {
				var shiftNode = Q.shift();
				result.push(shiftNode.data);
				str += shiftNode.data + ' '
				if(shiftNode.left !== null) {
					Q.push(shiftNode.left);
				}
				if(shiftNode.right !== null) {
					Q.push(shiftNode.right);
				}
			}
			console.log(str);
		}
		// console.log(result)
	}
}


var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);


nums.print();

function inOrder(node) {
	var current = node;
	var stack = [];
	while(current || stack.length > 0) {
		if(current){
			stack.push(current);
			current = current.left;
		}else {
			var popItem = stack.pop();
			console.log(popItem.data);
			current = popItem.right;
		}
	}
}

function preOrder(node) {
	var current = node;
	var stack = [];
	while(current || stack.length > 0) {
		console.log(current.data);
		if(current.right !== null) {
			stack.push(current.right)
		}
		if(current.left !== null) {
			current = current.left;
		}else {
			current = stack.pop();
		}
	}
}

var Tag = function(node,state) {
	this.node = node;
	this.state = state;
}

function postOrder(node) {
	var stack = [];
	var current = node;
	while(current || stack.length > 0){
		if(current){
			var tag = new Tag(current,0);
			stack.push(tag);
			current = current.left;
		}else {
			var popItem = stack[stack.length - 1];
			if(popItem.node.right && popItem.state === 0) {
				popItem.state = 1;
				current = popItem.node.right;
			}else {
				console.log(stack.pop().node.data)
			}
		}
	}
}



// postOrder(nums.getRoot());
// console.log('--------')
// nums.postOrder(function(node) {
// 	console.log(node.data)
// })

console.log(nums.height())