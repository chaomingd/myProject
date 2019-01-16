var DbLink = function() {
	var Node = function(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
	var length = 0;
	var head = null;
	var tail = null;
	this.append = function(data) {
		var new_node = new Node(data);
		if(head === null) {
			head = new_node;
			tail = new_node;
		}else {
			tail.next = new_node;
			new_node.prev = tail;
			tail = new_node;
		}
		length ++;
		return true;
	}
	this.print = function() {
		var curr_node = head;
		while(curr_node) {
			console.log(curr_node.data)
			curr_node = curr_node.next;
		}
	}
	this.getNode = function(index) {
		var curr_node = head;
		var curr_index = 0;
		while(curr_index < index) {
			curr_index ++;
			curr_node = curr_node.next;
		}
		return curr_node;
	}
	this.inset = function(index,data) {
		if(index < 0 || index > length) {
			return null;
		}else if(index === length) {
			return this.append(data);
		}else {
			var new_node = new Node(data);
			var curr_node = this.getNode(index);
			var prev_node = curr_node.prev;
			prev_node.next = new_node;
			new_node.prev = prev_node;
			new_node.next = curr_node;
			curr_node.prev = new_node
			length ++;
			return true;
		}
	}
	this.remove = function(index) {
		if(index < 0 || index >= length) {
			return false;
		}else if(index === 0){
			head = head.next;
			head.prev = null;
			length --;
		}else {
			var curr_node = this.getNode(index);
			var prev_node = curr_node.prev;
			var next_node = curr_node.next;
			prev_node.next = next_node;
			next_node.prev = prev_node;
			length --;
		}
	}
}

var dblink = new DbLink();
dblink.append(1);
dblink.append(2);
dblink.append(3);
dblink.inset(1,4);
dblink.remove(1);
dblink.inset(1,4);
dblink.print();
