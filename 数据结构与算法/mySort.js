var arr = [1,4,2,6,0,19,3,18,90];

// 冒泡
function bubbleSort(arr) {
	var len = arr.length;
	for(var count = 0; count < len - 1; count ++) {
		for(var i = 0; i < len - count - 1; i ++) {
			if(arr[i] > arr[i + 1]) {
				swap(arr,i,i + 1);
			}
		}
	}
}

function swap(arr,i,j) {
	var tmp = arr[i];
	arr[i] = arr[j]
	arr[j] = tmp;
}

// 选择排序

function selectionSort(arr) {
	var len = arr.length;
	var min;
	for(var i = 0; i < len - 1; i ++) {
		min = i;
		for(var j = i + 1; j < len; j ++) {
			if(arr[j] < arr[min]) {
				min = j;
			}
		}
		if(min !== i) {
			swap(arr,i,min)
		}
	}
}

// 插入排序

function insertionSort(arr) {
	var len = arr.length;
	var tmp,j;
	for(var i = 1; i < len; i ++) {
		tmp = arr[i];
		j = i;
		while(j > 0 && arr[j - 1] > tmp) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = tmp;
	}
}

// 归并排序

function mergeSort(arr) {
	return mergeInner(arr);
}

function mergeInner(arr) {
	if(arr.length === 1) return arr;
	var mid = Math.floor(arr.length / 2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid);
	return merge(mergeInner(left),mergeInner(right));
}

function merge(left,right) {
	var result = [];
	var il = 0,
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
	if(arr.length > 1) {
		index = partition(arr,left,right);
		if(left < index - 1) {
			quick(arr,left,index - 1)
		}
		if(index < right) {
			quick(arr,index,right);
		}
	}
}

function partition(arr,left,right) {
	var pivot = arr[Math.floor((left + right) / 2)];
	var il = left,
			ir = right;
	while(il <= ir) {
		while(arr[il] < pivot) {
			il ++;
		}
		while(arr[ir] > pivot) {
			ir --;
		}
		if(il <= ir) {
			swap(arr,il,ir);
			il ++;
			ir --;
		}
	}
	return il;
}

quickSort(arr);

console.log(arr)