var TreeNode = function(key) {
	this.key = key;
	this.leftChild = null;
	this.rightChild = null;
	this.parentNode = null;
}

class BinarySearchTree {
	constructor() {
		this._root = null;
	}
	_inOrder(node,callback) {
		if(!node) return;
		this._inOrder(node.leftChild,callback);
		callback && callback(node);
		this._inOrder(node.rightChild,callback)
	}
	inOrder(callback) {
		this._inOrder(this._root,callback)
	}
	_preOrder(node,callback) {
		if(!node) return;
		callback && callback(node);
		this._preOrder(node.leftChild,callback);
		this._preOrder(node.rightChild,callback);
	}
	preOrder(callback) {
		this._preOrder(this._root,callback);
	}
	_postOrder(node,callback) {
		if(!node) return;
		this._postOrder(node.leftChild,callback);
		this._postOrder(node.rightChild,callback);
		callback && callback(node);
	}
	postOrder(callback) {
		this._postOrder(this._root,callback);
	}
	insert(key) {
		var newNode = new TreeNode(key);
		var currNode = this._root;
		if(this._root === null) {
			this._root = newNode;
			return true;
		}
		while(currNode) {
			if(newNode.key <= currNode.key) {
				if(!currNode.leftChild) {
					currNode.leftChild = newNode;
					newNode.parentNode = currNode;
					return true;
				}
				currNode = currNode.leftChild;
			}else {
				if(!currNode.rightChild) {
					currNode.rightChild = newNode;
					newNode.parentNode = currNode;
					return true;
				}
				currNode = currNode.rightChild;
			}
		}
	}
	search(key) {
		var currNode = this._root;
		while(currNode) {
			if(key < currNode.key) {
				currNode = currNode.leftChild;
				continue;
			}
			if(key > currNode.key) {
				currNode =currNode.rightChild;
				continue;
			}
			return true;
		}
		return false;
	}
	findNode(root,key) {
		var currNode = root;
		while(currNode) {
			if(key < currNode.key) {
				currNode = currNode.leftChild;
				continue;
			}
			if(key > currNode.key) {
				currNode = currNode.rightChild;
				continue;
			}
			return currNode;
		}
		return null;
	}
	findMaxNode(root) {
		var currNode = root || this._root;
		while(currNode.rightChild) {
			currNode = currNode.rightChild;
		}
		return currNode;
	}
	findMinNode(root) {
		var currNode = root || this._root;
		while(currNode.leftChild) {
			currNode = currNode.leftChild;
		}
		return currNode;
	}
	_deleteDiGui(node,key) {
		if(!node) return null;
		if(key < node.key) {
			node.leftChild = this._deleteDiGui(node.leftChild,key);
			return node;
		}else if(key > node.key){
			node.rightChild = this._deleteDiGui(node.rightChild,key);
			return node;
		}else {
			if(!node.leftChild && !this.rightChild) {
				node = null;
				return node;
			}
			if(!node.leftChild) {
				node = node.rightChild;
				return node;
			}
			if(!node.rightChild) {
				node = node.leftChild;
				return node;
			}
			var minNode = this.findMinNode(node.rightChild);
			node.key = minNode.key;
			node.rightChild = this._deleteDiGui(node.rightChild,minNode.key);
			return node;
		}
	}
	deleteDiGui(key) {
		this._root = this._deleteDiGui(this._root,key);
	}
	delete(key) {
		var currNode = this._root;
		var parent = null;
		var childKey;
		var rightTreeMinNode;
		var deleteData = key;
		while(currNode) {
			if(deleteData < currNode.key) {
				parent = currNode;
				currNode = currNode.leftChild;
				childKey = 'leftChild';
				continue;
			}
			if(deleteData > currNode.key) {
				parent = currNode;
				childKey = 'rightChild';
				currNode = currNode.rightChild;
				continue;
			}
			if(!currNode.leftChild && !currNode.rightChild) { // 左右都没有
				if(!parent) {
					// 说明删除的是root
					this._root = null;
					return true;
				}
				parent[childKey] = null;
				return true;
			}
			if(currNode.leftChild && !currNode.rightChild) {  // 只有左子节点
				if(!parent) {
					this._root = currNode.leftChild;
					currNode.leftChild.parentNode = null;
				}else {
					parent[childKey] = currNode.leftChild;
					currNode.leftChild.parentNode = parent;
				}
				return true;
			}
			if(!currNode.leftChild && currNode.rightChild) { // 只有右子节点
				if(!parent) {
					this._root = currNode.rightChild;
					currNode.rightChild.parentNode = null;
				}else {
					parent[childKey] = currNode.rightChild;
					currNode.rightChild.parentNode = parent;
				}
				return true;
			}
			// 左右都有
			rightTreeMinNode = this.findMinNode(currNode.rightChild);
			currNode.key = rightTreeMinNode.key;
			deleteData = rightTreeMinNode.key;
			childKey = 'rightChild';
			parent = currNode;
			currNode = currNode.rightChild;
		}
	}
}

var binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(3)
binarySearchTree.insert(2)
binarySearchTree.insert(6)
binarySearchTree.insert(4)
binarySearchTree.insert(5)
binarySearchTree.insert(1)
console.log(binarySearchTree.delete(3))