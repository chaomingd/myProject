function MaxHeap(size) {
	var maxSize = size,currSize = 0,heap = new Array(size);
	this.init = function(arr) {
		maxSize = arr.length;
		currSize = maxSize;
		for(var i = 0; i < currSize ;i ++) {
			heap[i] = arr[i];
		}
		var currPos = Math.floor((currSize - 2) / 2);
		while(currPos >= 0){
			shiftDown(currPos,currSize - 1)
			currPos --;
		}
		return this;
	}

	function shiftDown(start,m) {
		var parentIndex = start;
		var maxChildIndex = parentIndex * 2 + 1;
		while(maxChildIndex <= m) {
			if(maxChildIndex < m && heap[maxChildIndex] < heap[maxChildIndex + 1]){
				maxChildIndex = maxChildIndex + 1;
			}

			if(heap[parentIndex] > heap[maxChildIndex]){
				break;
			}else {
				var temp = heap[parentIndex];
				heap[parentIndex] = heap[maxChildIndex];
				heap[maxChildIndex] = temp;
				parentIndex = maxChildIndex;
				maxChildIndex = parentIndex * 2 + 1;
			}
		}
	}
	this.getMax = function() {
		if(currSize === 0) return null;
		return heap[0];
	}
	this.insert = function(item) {
		if(currSize === maxSize) return false;
		heap[currSize] = item;
		shiftUp(currSize);
		currSize ++;
		return true;
	}
	function shiftUp(start) {
		var childIndex = start;
		var parentIndex = Math.floor((childIndex - 1) / 2);
		while(childIndex > 0) {
			if(heap[parentIndex] > heap[childIndex]){
				break;
			}else {
				var temp = heap[parentIndex];
				heap[parentIndex] = heap[childIndex];
				heap[childIndex] = temp;
				childIndex = parentIndex;
				parentIndex = Math.floor((childIndex - 1) / 2);
			}
		}
	}
	this.remove = function() {
		if(currSize === 0) return null;
		var max = heap[0];
		heap[0] = heap[currSize - 1];
		shiftDown(0,currSize - 1);
		currSize --;
		return max;
	}
	this.getHeap = function() {
		return heap;
	}
}

var mh = new MaxHeap();
mh.insert(3)
mh.insert(5)
mh.insert(1000)
mh.insert(3)
mh.insert(10009)
mh.insert(889)
console.log(mh.getMax())