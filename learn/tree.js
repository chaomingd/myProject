var BinTreeNode = function(data) {
	this.data = data;
	this.leftChild = null;
	this.rightChild = null;
	this.parentNode = null;
}

function Stack() {
	var item = [];
	this.push = function(data) {
		item.push(data)
	}
	this.pop = function() {
		return item.pop();
	}
	this.top = function() {
		return item[item.length - 1]
	}
	this.getItem = function() {
		return item;
	}
}


function BinaryTree() {
	var root = null;
	this.init = function(string) {
		var stack = new Stack();
		var k = 0;
		var newNode = null;
		for(var i = 0;i < string.length; i ++) {
			var item = string[i];
			if(item === '#') {
				break;
			}
			if(item === "(") {
				stack.push(newNode);
				k = 1;
			}else if(item === ','){
				k = 2;
			}else if(item === ')') {
				stack.pop();
			}else {
				newNode = new BinTreeNode(item);
				if(root === null) {
					root = newNode;
				}else {
					if(k === 1) { // 左
						var topItem = stack.top();
						topItem.leftChild = newNode;
						newNode.parentNode = topItem; 
					}else if(k === 2){ // 右
						var topItem = stack.top();
						topItem.rightChild = newNode;
						newNode.parentNode = topItem;
					}
				}
			}
		}
		return root;
	}
	this.getRoot = function() {
		return root;
	}
	this.inOrder = function(node) {
		if(node === null) {
			return;
		}
		this.inOrder(node.leftChild);
		console.log(node.data);
		this.inOrder(node.rightChild);
	}
	this.preOrder = function(node) {
		if(node === null) {
			return;
		}
		console.log(node.data);
		this.preOrder(node.leftChild);
		this.preOrder(node.rightChild);
	}
	this.postOrder = function(node) {
		if(node === null) return;
		this.postOrder(node.leftChild);
		this.postOrder(node.rightChild);
		// console.log(node.data);
	}
	var treeNodeCount = function(node) {
		if(node === null) return 0;
		var leftNodeCount = treeNodeCount(node.leftChild);
		var rightChild = treeNodeCount(node.rightChild);
		return leftNodeCount + rightChild + 1;
	}
	this.size = function() {
		return treeNodeCount(root);
	}
	var treeHeight = function(node) {
		if(node === null) return 0;
		var leftChildHeight = treeHeight(node.leftChild);
		var rightChildHeight = treeHeight(node.rightChild);
		if(leftChildHeight > rightChildHeight) {
			return leftChildHeight + 1;
		}
		return rightChildHeight + 1;
	}
	this.height = function() {
		return treeHeight(root);
	}

	var findNode = function(node,data) {
		if(node === null) return null;
		if(node.data === data) return node;
		var leftRes = findNode(node.leftChild,data);
		if(leftRes) return leftRes;
		return findNode(node.rightChild,data);
	}
	this.find = function(node,data) {
		return findNode(node,data);
	}
}

var bt = new BinaryTree();
var root = bt.init('A(B(D,E(G,)),C(,F))#')
// bt.preOrder(root);
// var size = bt.size();
// console.log(size);

var mirror_1 = function(node) {
	if(node === null) return;
	var temp = node.leftChild;
	node.leftChild = node.rightChild;
	node.rightChild = temp;
	mirror_1(node.leftChild);
	mirror_1(node.rightChild);
}

var mirror_2 = function(node) {
	if(node === null) return;
	var left = mirror_2(node.leftChild);
	var right = mirror_2(node.rightChild);
	node.leftChild = right;
	node.rightChild = left;
	return node;
}

var preOrder = function(node) {
	var stack = new Stack();
	var currNode = node;
	while(currNode){
		console.log(currNode.data);
		if(currNode.rightChild) {
			stack.push(currNode.rightChild);
		}
		if(currNode.leftChild) {
			currNode = currNode.leftChild;
		}else {
			currNode = stack.pop();
		}
	}
}

var inOrder = function(node) {
	var stack = [];
	var currNode = node;
	while(stack.length !== 0 || currNode){
		if(currNode) {
			stack.push(currNode);
			currNode = currNode.leftChild;
		}else {
			currNode = stack.pop();
			console.log(currNode.data);
			currNode = currNode.rightChild;
		}
	}
}

function Tag(node,state) {
	this.node = node 
	this.state = state;
}

var postOrder = function(node) {
	if(node === null) return;
	var stack = [];
	var currNode = node;
	while(stack.length !== 0 || currNode) {
		if(currNode) {
			var tag = new Tag(currNode,0);
			stack.push(tag);
			currNode = currNode.leftChild;
		}else {
			var popItem = stack.pop();
			if(popItem.node.rightChild && popItem.state === 0) {
				popItem.state = 1;
				stack.push(popItem);
				currNode = popItem.node.rightChild;
			}else {
				// console.log(popItem.node.data);
			}
		}
	}
}

console.time('digui')
bt.postOrder(root);
console.timeEnd('digui')

console.time('nodigui')
postOrder(root);
console.timeEnd('nodigui')

// preOrder(root)


///   最近的公共祖先
//  分层打印

// 指定层的节点数
