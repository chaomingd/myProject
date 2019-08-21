function DoubleLinkList() {
	this._head=null;
	this._length=0;
	this._tail=null;
}

function Node(data) {
	this.data=data;
	this.next=null;
	this.pre=null;
}

DoubleLinkList.prototype={
	constructor: DoubleLinkList,
	append: function (data) {
		var newNode=new Node(data);
		if (this._head===null) {
			this._head=newNode;
			this._tail=newNode;
		} else {
			var tail=this._tail;
			this._tail.next=newNode;
			this._tail=newNode;
			newNode.pre=tail;
		}
		this._length++;
	},
	checkIndex: function (index) {
		if (typeof index!=='number') {
			throw new TypeError('index must be number')
		}
	},
	getNode: function (index) {
		this.checkIndex(index);
		if (index<0||index>this._length-1) {
			return null;
		}
		var getIndex=index;
		var currNode=this._head;
		while (getIndex-->0) {
			currNode=currNode.next;
		}
		return currNode;
	},
	get: function (index) {
		return this.getNode(index).data;
	},
	insert: function (index,data) {
		this.checkIndex(index);
		if (index<0||index>this._length) {
			return false;
		}
		if(index === this._length) {
			return this.append(data);
		}
		var newNode = new Node(data);
		var preNode,nextNode;
		if (index === 0) {
			newNode.next = this._head;
			this._head.pre = newNode;
			this._head = newNode;
		}else {
			preNode = this.getNode(index - 1);
			nextNode = preNode.next;
			newNode.next = nextNode;
			newNode.pre = preNode;
			nextNode.pre = newNode;
			preNode.next = newNode;
		}
		this._length ++;
		return true;
	},
	remove: function (index) {
		this.checkIndex(index);
		if (index<0||index>this._length-1) {
			return false;
		}
		var preNode,nextNode;
		if (index===0) {
			nextNode=this._head.next;
			this._head=nextNode;
			nextNode.pre=null;
		} else {
			preNode=this.getNode(index-1);
			nextNode=preNode.next.next;
			preNode.next=nextNode;
			if (nextNode) {
				nextNode.pre=preNode;
			}
			if (preNode.next===null) {
				this._tail=preNode;
			}
			this._length--;
		}
		return true;
	},
	print: function () {
		var currNode=this._head;
		while (currNode) {
			console.log(currNode.data);
			currNode=currNode.next;
		}
	}
}

var doubleLink=new DoubleLinkList();
doubleLink.append(1);
doubleLink.append(2);
doubleLink.append(3);
doubleLink.insert(2,0);
doubleLink.append(4);
doubleLink.print();

// console.log(doubleLink._head)