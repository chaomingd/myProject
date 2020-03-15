class MinHeap {
	constructor (size) {
		this._heap = [];
		this.size = size;
	}
	init(arr) {
		this._heap.push(...arr);
		this.size = this._heap.length;
		var leafNodeIndex = Math.floor((this._heap.length - 2) / 2); // 最后一个非叶节点
		while (leafNodeIndex >= 0) {
			this.down(leafNodeIndex);
			leafNodeIndex--;
		}
	}
	down(start) {
		var parentIndex = start;
		var childIndex = 2 * parentIndex + 1; // 一定有左子节点
		var maxIndex = this._heap.length - 1;
		var minIndex;
		while (childIndex <= maxIndex) {
			minIndex = childIndex;
			if (childIndex < maxIndex && this._heap[childIndex] > this._heap[childIndex + 1]) {
				minIndex = childIndex + 1;
			}
			if (this._heap[parentIndex] <= this._heap[minIndex]) return;
			var temp = this._heap[parentIndex];
			this._heap[parentIndex] = this._heap[minIndex];
			this._heap[minIndex] = temp;
			parentIndex = minIndex;
			childIndex = 2 * parentIndex + 1;
		}
	}
	min() {
		return this._heap[0];
	}
	insert(item) {
		if (this._heap.length === this.size) return false;
		this._heap.push(item);
		this.up(this._heap.length - 1);
	}
	up(start) {
		var childIndex = start;
		var parentIndex = Math.floor((childIndex - 1) / 2);
		while (parentIndex >= 0) {
			if (this._heap[parentIndex] <= this._heap[childIndex]) return;
			var temp = this._heap[parentIndex];
			this._heap[parentIndex] = this._heap[childIndex];
			this._heap[childIndex] = temp;
			childIndex = parentIndex;
			parentIndex = Math.floor((childIndex - 1) / 2);
		}
	}
	remove() {
		if (this._heap.length === 0) return null;
		if (this._heap.length === 1) return this._heap[0];
		var maxIndex = this._heap.length - 1;
		var deleteItem = this._heap[0];
		this._heap[0] = this._heap[maxIndex];
		this._heap.pop();
		this.down(0);
		return deleteItem;
	}
}

var minHeap = new MinHeap();
minHeap.init([9, 2,5,10,22,1]);
// minHeap.insert(9)
// minHeap.insert(2)
// minHeap.insert(5)
// minHeap.insert(10)
// minHeap.insert(22)
// minHeap.insert(1)
// minHeap.remove();
console.log(minHeap._heap)