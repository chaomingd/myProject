function LinkList() {
	var Node = function(data) {
		this.data = data;
		this.next = null;
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
			tail = new_node;
		}
		length ++;
		return true;
	}
	this.print = function() {
		var cur_node = head;
		while(cur_node) {
			console.log(cur_node.data);
			cur_node = cur_node.next;	
		}
	}
	this.inset = function(index,data) {
		if(index < 0 || index > length) {
			return false;
		}else if(index === length) {
			return this.append(data);
		}else {
			var new_node = new Node(data);
			if(index === 0) {
				new_node.next = head;
				head = new_node;
			}else {
				var inset_index = 1;
				var cur_node = head;
				while(inset_index < index) {
					inset_index ++;
					cur_node = cur_node.next;
					console.log(curr_node.data);
				}
				var next_node = cur_node.next;
				cur_node.next = new_node;
				new_node.next = next_node;
			}
			length ++;
		}
	}
	this.remove = function(index) {
		if(index < 0 || index >= length) {
			return null;
		}else {
			var del_node = null;
			if(index === 0) {
				del_node = head;
				head = head.next;
			}else {
				var del_index = 0;
				var pre_node = null;
				var curr_node = head;
				while(del_index < index) {
					del_index ++;
					pre_node = curr_node;
					curr_node = curr_node.next;
				}
				del_node = curr_node;
				pre_node.next = curr_node.next;
				if(curr_node.next === null) {
					tail = pre_node;
				}
				length --;
				del_node.next = null;
				return del_node.data;
			}
		}
	}
	this.reverse = function() {
		var pre_node = null;
		var curr_node = head;
		// var next_node;
		while(curr_node) {
			var next_node = curr_node.next;
			curr_node.next = pre_node;
			pre_node = curr_node;
			curr_node = next_node;
		}
		head = pre_node;
	}
}

var link = new LinkList();
link.append(2);
link.append(3);
link.append(4);
link.reverse();
link.print();
