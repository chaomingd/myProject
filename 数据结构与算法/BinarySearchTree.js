function BST() {
	function Node(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
	var root = null;
	this.getRoot = function() {
		return root;
	}
	this.insert = function (data) {
		var node = new Node(data, null, null);
		if (root === null) {
			root = node;
			return true;
		} else {
			var current = root,
				parent = null;
			while (current) {
				parent = current;
				if (data < current.data) {
					current = current.left;
					if (current === null) {
						parent.left = node;
						return true;
					}
				} else {
					current = current.right;
					if (current === null) {
						parent.right = node;
						return true;
					}
				}
			}
		}
	}

	function inOrder(node,callBack) {
		if(node === null){
			return;
		}
		inOrder(node.left,callBack);
		callBack && callBack(node);
		inOrder(node.right,callBack);
	}


	this.inOrder = function(callBack) {
		inOrder(root,callBack);
	}
	function preOrder(node,callBack) {
		if(node === null){
			return;
		}
		callBack && callBack(node);
		preOrder(node.left,callBack);
		preOrder(node.right,callBack);
	}
	this.preOrder = function(callBack) {
		preOrder(root,callBack)
	}
	function postOrder(node,callBack) {
		if(node === null){
			return;
		}
		postOrder(node.left,callBack);
		postOrder(node.right,callBack);
		callBack && callBack(node);
	}
	this.postOrder = function(callBack) {
		postOrder(root,callBack)
	}


	this.getMin = function() {
		var current = root;
		while(current && current.left) {
			current = current.left;
		}
		return current.data;
	}

	this.getMax = function() {
		var current = root;
		while(current && current.right) {
			current = current.right;
		}
		return current.data;
	}

	this.find = function(data) {
		var current = root;
		while(current) {
			if(current.data === data) {
				return current;
			}
			if(data < current.data) {
				current = current.left;
			}else {
				current = current.right;
			}
		}
		return null;
	}

	function treeNodeCount(node) {
		if(node === null) return 0;
		var leftCount = treeNodeCount(node.left);
		var rightCount = treeNodeCount(node.right);
		return leftCount + rightCount + 1;
	}
	function treeHeightCount(node) {
		if(node === null) return 0;
		var leftHeight = treeHeightCount(node.left);
		var rightHeight = treeHeightCount(node.right);
		if(leftHeight > rightHeight){
			return leftHeight + 1;
		}
		return rightHeight + 1;
	}

	this.size = function() {
		return treeNodeCount(root)
	}

	this.treeHeight = function() {
		return treeHeightCount(root)
	}

	//  找右边最小 或者找左边最大
	
	function getSmallest(node) {
		while(node && node.left !== null) {
			node = node.left;
		}
		return node;
	}

	function remove(node,data) {
		if(node === null){
			return null;
		}
		if(data === node.data) {
			if(node.left === null && node.right === null) {
				return null;
			}
			if(node.left === null) return node.right;
			if(node.right === null) return node.left;
			var tempNode = getSmallest(node.right);
			node.data = tempNode.data;
			node.right = remove(node.right,tempNode.data)
		}else if(data < node.data) {
			node.left = remove(node.left,data);
		}else {
			node.right = remove(node.right,data);
		}
		return node;
	}

	this.remove = function(data) {
		return remove(root,data);
	}

}



var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

var root = nums.getRoot();




function preOrder(node) {
	var stack = [];
	var current = node;
	while(current) {
		console.log(current.data);
		if(current.right) {
			stack.push(current.right)
		}
		if(current.left){
			current = current.left;
		}else {
			current = stack.pop()
		}
	}
}

function inOrder(node) {
	var stack = [];
	var current = node;
	while(stack.length > 0 || current){
		if(current) {
			stack.push(current);
			current = current.left;
		}else {
			current = stack.pop();
			console.log(current.data);
			current = current.right;
		}
	}
}

function Tag(node,state) {
	this.node = node;
	this.state = state;
}


function postOrder(node) {
	var stack = [];
	var current = node;
	while(stack.length !== 0 || current) {
		if(current) {
			var tag = new Tag(current,0)
			stack.push(tag);
			current = tag.node.left;
		}else {
			var popItem = stack[stack.length - 1];
			if(popItem.node.right && popItem.state === 0){
				popItem.state = 1;
				current = popItem.node.right;
			}else {
				console.log(stack.pop().node.data)
			}
		}
	}
}

console.log(nums.remove(23));

// nums.postOrder(function(node) {
// 	console.log(node.data)
// })
