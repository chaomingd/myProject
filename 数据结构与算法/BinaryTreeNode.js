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


function BinaryTreeNode(data) {
	this.data = data;
	this.leftChild = null;
	this.rightChild = null;
	this.parentNode = null;
}


function BinaryTree() {
	this._root = null;
}

BinaryTree.prototype = {
	constructor: BinaryTree,
	init: function(str) {
		var stack = new Stack();
		var k = 0;
		var newNode = null;
		for(var i = 0, len = str.length; i < len; i ++) {
			var item = str[i];
			if(item === '(') {
				stack.push(newNode);
				k = 1;
			}else if(item === ',') {
				k = 2;
			}else if(item === ')'){
				stack.pop();
			}else {
				newNode = new BinaryTreeNode(item);
				if(this._root === null) {
					this._root = newNode;
				}else {
					var topItem = stack.top();
					if(k === 1) {
						topItem.leftChild = newNode;
						newNode.parentNode = topItem;
					}else { // k === 2
						topItem.rightChild = newNode;
						newNode.parentNode = topItem;
					}
				}
			}
		}
	},
	getRoot: function() {
		return this._root;
	},
	_inOrder: function(node,callback) {
		if(!node) return;
		this._inOrder(node.leftChild,callback);
		callback && callback(node);
		this._inOrder(node.rightChild,callback)
	},
	inOrder: function(callback) {
		this._inOrder(this._root,callback)
	},
	_preOrder: function(node,callback) {
		if(!node) return;
		callback && callback(node);
		this._preOrder(node.leftChild,callback);
		this._preOrder(node.rightChild,callback);
	},
	preOrder: function(callback) {
		this._preOrder(this._root,callback);
	},
	_postOrder: function(node,callback) {
		if(!node) return;
		this._postOrder(node.leftChild,callback);
		this._postOrder(node.rightChild,callback);
		callback && callback(node);
	},
	postOrder: function(callback) {
		this._postOrder(this._root,callback);
	},
	_getSize: function(node) {
		if(!node) {
			return 0;
		};
		let leftCount = this._getSize(node.leftChild);
		let rightChild = this._getSize(node.rightChild);
		return leftCount + rightChild + 1;
	},
	size: function() {
		return this._getSize(this._root)
	},
	_getHeight: function (node) {
		if (!node) return 0;
		var leftHeight = this._getHeight(node.leftChild);
		var rightHeight = this._getHeight(node.rightChild);
		return Math.max(rightHeight, leftHeight) + 1;
	},
	height: function () {
		return this._getHeight(this._root)
	},
	_find: function (node,data) {
		if (!node) return null;
		if (node.data === data) return node;
		var findedNode = this._find(node.leftChild,data);
		if (findedNode) return findedNode;
		return this._find(node.rightChild, data);
	},
	find: function (data) {
		return this._find(this._root,data)
	},
	mirror: function (node) {
		if (!node) return;
		var temp = node.leftChild;
		node.leftChild = node.rightChild;
		node.rightChild = temp;
		this.mirror(node.leftChild);
		this.mirror(node.rightChild);
	},
	mirror1: function (node) {
		if (!node) return;
		var left = this.mirror1(node.leftChild);
		var right = this.mirror1(node.rightChild);
		node.leftChild = right;
		node.rightChild = left; 
		return node;
	},
	preOrder1: function (callback) {
		var stack = new Stack();
		var currNode = this._root;
		while (currNode || !stack.isEmpty()) {
			if (currNode) {
				callback && callback(currNode);
				if (currNode.rightChild) {
					stack.push(currNode.rightChild);
				}
				currNode = currNode.leftChild;
			} else {
				currNode = stack.pop();
			}
		}
	},
	inOrder1: function (callback) {
		var stack = new Stack();
		var currNode = this._root;
		while (currNode || !stack.isEmpty()) {
			if (currNode) {
				stack.push(currNode);
				currNode = currNode.leftChild;
			} else {
				var popItem = stack.pop();
				callback && callback(popItem);
				if (popItem.rightChild) {
					currNode = popItem.rightChild;
				}	
			}
		}
	},
	postOrder1: function (callback) {
		var currNode = this._root;
		var stack = new Stack();
		while (currNode || !stack.isEmpty()) {
			if (currNode) {
				stack.push(currNode);
				currNode = currNode.leftChild;
			} else {
				var topItem = stack.top();
				if (topItem.rightChild && topItem.rightChild.k !== 1) {
					currNode = topItem.rightChild;
					currNode.k = 1;
				} else {
					callback && callback(stack.pop())
				}
			}
		}
	}
}

var binaryTree = new BinaryTree();
binaryTree.init('A(B(D,E(G)),C(,F))');
binaryTree.preOrder(function(node) {
	console.log(node.data)
})

