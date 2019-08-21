function LinkList() {
	this._head = null;
	this._tail = null;
	this._length = 0;
}
function Node(data) {
	this.data = data;
	this.next = null;
}

LinkList.prototype = {
	constructor: LinkList,
	append: function(data) {
		var newNode = new Node(data);
		if(this._head === null) {
			this._head = newNode;
			this._tail = newNode;
		}else {
			this._tail.next = newNode;
			this._tail = newNode;
		}
		this._length ++;
	},
	checkIndex: function(index) {
		if(typeof index !== 'number') {
			throw new TypeError('index must be number')
		}
	},
	insert: function(index,data) {
		this.checkIndex(index);
		if(index < 0 || index > this._length) {
			return false;
		}
		var newNode = new Node(data);
		if(index === 0) {
			newNode.next = this._head;
			this._head = newNode;
		}else if(index === this._length){
			this.append(data);
		}else {
			var inserIndex = 1;
			var currNode = this._head;
			while(inserIndex < index) {
				currNode = currNode.next;
				inserIndex ++;
			}
			newNode.next = currNode.next;
			currNode.next = newNode;
			this._length ++;
		}
	},
	get: function(index) {
		this.checkIndex(index);
		if(index < 0 || index > this._length - 1) {
			return null;
		}
		if(index === 0) {
			return this._head.data;
		}
		var currNode = this._head;
		var getIndex = 0;
		while(getIndex < index) {
			getIndex ++;
			currNode = currNode.next;
		}
		return currNode.data;
	},
	remove: function(index) {
		this.checkIndex(index);
		if(index < 0 || index > this._length - 1) {
			return false;
		}
		if(index === 0) {
			this._head = this._head.next;
		}else {
			var removeIndex = 1;
			var currNode = this._head;
			while(removeIndex < index) {
				currNode = currNode.next;
				removeIndex ++;
			}
			if(index === this._length - 1) {
				this._tail = currNode;
			}
			currNode.next = currNode.next.next;
		}
		this._length --;
	},
	reverse: function() {
		var prevNode = null;
		var currNode = this._head;
		var nextNode;
		while(currNode) {
			nextNode = currNode.next;
			currNode.next = prevNode;
			prevNode = currNode;
			currNode = nextNode;
		}
		this._tail = this._head;
		this._tail.next = null;
		this._head = prevNode;
	},
	reverseDigui: function() {
		function reverse(head) {
			if(!head) {
				return null;
			}
			if(head.next === null) {
				return head;
			}
			var newHead = reverse(head.next);
			newHead.next = head;
			return head;
		}
		var head = this._head;
		reverse(head);
		this._head = this._tail;
		this._tail = head;
		this._tail.next = null;
	},
	print: function() {
		var currNode = this._head;
		while(currNode) {
			console.log(currNode.data);
			currNode = currNode.next;
		}
	}
}

var link = new LinkList();