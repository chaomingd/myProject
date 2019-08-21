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
		return true;
	},
	print: function() {
		var currNode = this._head;
		while(currNode) {
			console.log(currNode.data);
			currNode = currNode.next;
		}
	},
	insert: function(index,data) {
		if(index < 0 || index > this._length) {
			return false;
		}
		if(index === this._length) {
			return this.append(data);
		}
		var newNode = new Node(data);
		if(index === 0) {
			newNode.next = this._head;
			this._head = newNode;
		}else {
			var insertIndex = 1;
			var currNode = this._head;
			while(insertIndex < index) {
				currNode = currNode.next;
				insertIndex ++;
			}
			var nextNode = currNode.next;
			currNode.next = newNode;
			newNode.next = nextNode;
			this._length ++;
			return true;
		}
	},
	remove: function(index) {
		var currNode = this._head;
		if(index < 0 || index > this._length - 1) {
			return false;
		}
		if(index === 0) {
			this._head =  currNode.next;
		}
		var findIndex = 1;
		while(findIndex < index) {
			findIndex ++;
			currNode = currNode.next;
		}
		var nextNode = currNode.next.next;
		currNode.next = nextNode;
		if(index === this._length - 1) {
			this._tail = currNode;
		}
		this._length --;
		return true;
	},
	get: function(index) {
		if(index < 0 || index > this._head - 1) {
			return null;
		}
		if(index === 0) {
			return this._head.data;
		}
		var getIndex = 1;
		var currNode = this._head;
		while(getIndex <= index) {
			currNode = currNode.next;
			getIndex ++;
		}
		return currNode.data;
	},
	reverse: function() {
		var preNode = null;
		var currNode = this._head;
		this._tail = currNode;
		var nextNode;
		while(currNode) {
			nextNode = currNode.next;
			currNode.next = preNode;
			preNode = currNode;
			currNode = nextNode;
		}
		this._head = preNode;
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
	}
}

var link = new LinkList();
link.append(2);
link.append(3);
link.append(4);
link.append(5)
link.append(6);
link.reverse()
link.reverse()
link.print();