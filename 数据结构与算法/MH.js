function MH(size) {
	var maxSize = size,currSize = 0,heap = new Array(size);

	this.init = function(arr) {
		maxSize = arr.length;
		currSize = maxSize;
		for(var i = 0;i < currSize;i ++) {
			heap[i] = arr[i];
		}
		var currPos = Math.floor((currSize - 2) / 2);
		while(currPos >= 0) {
			shiftDown(currPos,currSize - 1);
			currPos --;
		}
		return this;
	}

	function shiftDown(start,m){
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
				minChildIndex = parentIndex * 2 + 1;
			}
		}
	} 
	this.getMin = function() {
		return heap[0]
	}
	this.insert = function(item) {
		if(currSize === maxSize) return;
		heap[currSize] = item;
		shiftUp(currSize);
		currSize ++;
		return true;
	}

	function shiftUp(start) {
		var childIndex = start;
		var parentIndex = Math.floor((childIndex - 1) / 2);
		while(childIndex > 0) {
			if(heap[parentIndex] < heap[childIndex]){
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
		var min = heap[0];
		heap[0] = heap[currSize - 1];
		shiftDown(0,currSize - 1);
		currSize --;
		return min;
	}
}

var arr = [];
for(var i = 0;i < 10000000;i ++) {
	arr[i] = Math.floor(1000000 * Math.random())
}

function topK(k,arr) {
	var length = arr.length;
	var result = [];
	var mh = new MH();
	for(var i = 0;i < k ;i ++) {
		mh.insert(arr[i]);
	}
	
	for(var j = k;j < length;j ++){
		if(arr[j] > mh.getMin()){
			mh.remove();
			mh.insert(arr[j]);
		}
	}
	for(var i = 0;i < k ;i ++) {
		result.push(mh.remove());
	}
	return result;
}

topK(5,arr);

// console.log(mh.getMin())
