function Node(data) {
	this.data = data;
	this.next = null;
}

Node.prototype = {
	constructor: Node,

}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

console.log(node1.data)