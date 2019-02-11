var swap = function (array, index1, index2) {
	var aux = array[index1];
	array[index1] = array[index2];
	array[index2] = aux;
};

function bubbleSort(arr) {
	for (var i = 0, len = arr.length; i < len; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}
}

function selectionSort(arr) {
	var len = arr.length,
		minIndex;
	for (var i = 0; i < len; i++) {
		minIndex = i;
		for (var j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		if (minIndex !== i) {
			swap(arr, minIndex, i);
		}
	}
}

function insertionSort(arr) {
	var len = arr.length,
		j, temp;
	for (var i = 1; i < len; i++) {
		j = i;
		temp = arr[i];
		while (j > 0 && arr[j - 1] > temp) {
			arr[j] = arr[j - 1];
			j--;
		}
		if (j !== i) {
			arr[j] = temp;
		}
	}
}

function mergeSort(arr) {
	return mergeRec(arr)
}

function mergeRec(arr) {
	var length = arr.length;
	if (length === 1) return arr;
	var mid = Math.floor(length / 2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid);
	return merge(mergeRec(left), mergeRec(right));
}

function merge(left, right) {
	var result = [],
		ir = 0,
		il = 0;
	while (il < left.length && ir < right.length) {
		if (left[il] < right[ir]) {
			result.push(left[il++])
		} else {
			result.push(right[ir++])
		}
	}
	while (il < left.length) {
		result.push(left[il++])
	}
	while (ir < right.length) {
		result.push(right[ir++])
	}
	return result;
}

function quickSort(arr) {
	return quick(arr,0,arr.length - 1)
}

function quick(arr,left,right) {
	var index;
	if(arr.length > 1) {
		index = parition(arr,left,right);
		if(left < index - 1) {
			quick(arr,left, index - 1);
		}
		if(index < right) {
			quick(arr,index, right)
		}
	}
	return arr;
}

function parition(arr,left,right) {
	var pivot = arr[Math.floor((left + right) / 2)],i = left,j = right;
	while(i <= j) {
		while(arr[i] < pivot){
			i ++;
		}
		while(arr[j] > pivot){
			j --;
		}

		if(i <= j) {
			swap(arr,i,j);
			i ++;
			j --;
		}
	}
	return i;
}




var arr = [1, 4, 3, 4, 5, 6, 2, 10, 12];
console.log(quickSort(arr));