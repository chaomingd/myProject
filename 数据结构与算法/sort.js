function CArray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	for (var i = 0; i < numElements; ++i) {
		this.dataStore[i] = i;
	}
}

CArray.prototype = {
	constructor: CArray,
	setData() {
		for (var i = 0; i < this.numElements; ++i) {
			this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
		}
	},
	clear() {
		for (var i = 0; i < this.dataStore.length; ++i) {
			this.dataStore[i] = 0;
		}
	},
	insert(element) {
		this.dataStore[this.pos++] = element;
	},
	toString() {
		var restr = "";
		for (var i = 0; i < this.dataStore.length; ++i) {
			restr += this.dataStore[i] + " ";
			if (i > 0 & i % 10 == 0) {
				restr += "\n";
			}
		}
		return restr;
	},
	swap(arr, index1, index2) {
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}
}

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData()
// 冒泡排序
function bubbleSort(arr) {
	let len = arr.length;
	for(var outer = len; outer >= 2; outer--) {
		for(var inner = 0; inner < outer - 1; inner ++) {
			if(arr[inner] > arr[inner + 1]) {
				var tmp = arr[inner];
				arr[inner] = arr[inner + 1];
				arr[inner + 1] = tmp;
			}
		}
	}
	return arr;
}

// 选择排序
function selectionSort(arr) {
	let len = arr.length;
	let min,tmp;
	for(var outer = 0; outer < len - 1; outer++) {
		min = outer;
		for(var inner = outer + 1; inner < len; inner ++) {
			if(arr[inner] < arr[min]) {
				min = inner
			}
		}
		tmp = arr[min];
		arr[min] = arr[outer];
		arr[outer] = tmp;
	}
	return arr;
}	

function insertionSort(arr) {
	let len = arr.length;
	let tmp;
	for(let i = 1; i < len; i ++) {
		j = i;
		tmp = arr[i]
		while(j > 0 && arr[j - 1] > tmp) {
			arr[j] = arr[j - 1];
		}
		arr[j] = tmp;
	 }
	 return arr;
}


function mergeSort(arr) {
	return mergeSortRect(arr)
}

function mergeSortRect(arr) {
	if(arr.length === 1) return arr;
	var mid = Math.floor(arr.length / 2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid);
	return merge(mergeSortRect(left),mergeSortRect(right));
}

function merge(left,right) {
	var result = [],
	il = 0,
	ir = 0;
	while(il < left.length && ir < right.length) {
		if(left[il] < right[ir]) {
			result.push(left[il++])
		}else {
			result.push(right[ir++])
		}
	}
	while(il < left.length) {
		result.push(left[il++])
	}
	while(ir < right.length) {
		result.push(right[ir++])
	}
	return result;
}

function quickSort(arr) {
	quick(arr,0,arr.length - 1)	
}

function quick(arr,left,right) {
	var index;
	if(arr.length > 1 ) {
		index = partition(arr,left,right)
	}
	if(left < index - 1) {
		quick(arr,left,index - 1);
	}
	if(index < right) {
		quick(arr,index,right);
	}
}

function partition(arr,left,right) {
	var pivot = arr[Math.floor((left + right) / 2)];
	var l = left, r = right,tmp;
	while(l <= r) {
		while(arr[l] < pivot) {
			l++;
		}
		while(arr[r] > pivot) {
			r--;
		}
		if(l <= r) {
			tmp = arr[l];
			arr[l] = arr[r];
			arr[r] = tmp;
			l++;
			r--;
		}
	}
	return l;
}

var arr = [1,4,2,6,0,19,3,18,90]
quickSort(arr)

console.log(arr)
