function MinHeap(size) {
	var heap = new Array(size);
	var currSize = 0;
	var maxSize = size;

	this.init = function(arr) {
		maxSize = arr.length;
		currSize = maxSize;
		heap = new Array(maxSize);
		for(var i = 0;i < maxSize;i ++) {
			heap[i] = arr[i]
		}

		var currPos = Math.floor((maxSize - 2) / 2);
		while(currPos >= 0) {
			shifDown(currPos,currSize - 1);
			currPos --;
		}
		return this;
	}
	function shifDown(start,m) {
		var parentIndex = start;
		var minChildIndex = parentIndex * 2 + 1;
		while(minChildIndex <= m) {
			if(minChildIndex < m && heap[minChildIndex] > heap[minChildIndex + 1]){
				minChildIndex = minChildIndex + 1;
			}
	
			if(heap[parentIndex] <= heap[minChildIndex]){
				break;
			}else {
				var temp = heap[parentIndex];
				heap[parentIndex] = heap[minChildIndex];
				heap[minChildIndex] = temp;
				parentIndex = minChildIndex;
				minChildIndex = minChildIndex * 2 + 1;
			}
		}
	}
	this.getMin = function() {
		return heap[0];
	}

	this.insert = function(item) {
		if(currSize === maxSize){
			return;
		}
		heap[currSize] = item;
		shift_up(currSize);
		currSize ++;
		return true;
	}

	function shift_up(start) {
		var childIndex = start;
		var parentIndex = Math.floor((childIndex - 1) / 2);
		while(childIndex > 0) {
			if(heap[parentIndex] < heap[childIndex]){
				break;
			}else {
				var temp = heap[childIndex];
				heap[childIndex] = heap[parentIndex];
				heap[parentIndex] = temp;
				childIndex = parentIndex;
				parentIndex = Math.floor((childIndex - 1) / 2);
			}
		}
	}
	this.remove = function() {
		if(currSize === 0) return null;
		var min = heap[0];
		heap[0] = heap[currSize];
		currSize --;
		shifDown(0,currSize - 1)
		return min;
	}
}



var minHeap = new MinHeap();

minHeap.insert(35);
minHeap.insert(32);
minHeap.insert(38);
minHeap.insert(38);
minHeap.insert(100);
minHeap.insert(25);
console.log(minHeap.getMin());
minHeap.remove();
console.log(minHeap.getMin());
