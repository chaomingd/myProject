var swap = function (array, index1, index2) {
	var aux = array[index1];
	array[index1] = array[index2];
	array[index2] = aux;
};

function bubbleSort(array) {
	var length = array.length;
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
			}
		}
	}
	console.log(array);
}

function selectionSort(array) {
	var length = array.length,
		indexMin;
	for (var i = 0; i < length - 1; i++) {
		indexMin = i;
		for (var j = i + 1; j < length; j++) {
			if (array[indexMin] > array[j]) {
				indexMin = j;
			}
		}
		if (i !== indexMin) {
			swap(array, i, indexMin);
		}
	}
}


function insertionSort(array) {
	var length = array.length,j,temp;
	for(var i = 1;i < length;i ++ ) {
		j = i;
		temp = array[j];
		while(j > 0 && array[j - 1] > temp) {
			array[j] = array[j - 1];
			j --;
		}
		array[j] = temp;
	}
}

function mergeSort(array) {
	array = mergeSortRec(array);
	console.log(array)
}

function mergeSortRec(array) {
	var length = array.length;
	if(length === 1) {
		return array;
	}
	var mid = Math.floor(length / 2);
	var left = array.slice(0,mid);
	var right = array.slice(mid,length);
	return merge(mergeSortRec(left),mergeSortRec(right))
}

function merge(left,right) {
	var result = [],il = 0;ir = 0;
	while(il < left.length && ir < right.length) {
		if(left[il] < right[ir]) {
			result.push(left[il ++])
		}else {
			result.push(right[ir ++])
		}
	}

	while(il < left.length) {
		result.push(left[il ++])
	}
	while(ir < right.length) {
		result.push(right[ir ++])
	}

	return result;

}

function quickSort(array) {
	quick(array,0,array.length - 1);
}

function quick(array,left,right) {
	var index;
	if(array.length > 1) {
		index = partition(array,left,right);
		if(left < index - 1) {
			quick(array,left,index - 1);
		}

		if(index < right) {
			quick(array,index,right)
		}
	}
}


function partition(array,left,right) {
	var pivot = array[Math.floor((left + right) / 2)],
	i = left,
	j = right;
	while(i <= j) {
		while(array[i] < pivot) {
			i ++;
		}

		while(array[j] > pivot) {
			j --;
		}

		if(i <= j) {
			swap(array,i,j);
			i ++;
			j --;
		}
	}
	return i;
}




var arr = [1, 4, 3, 4, 5, 6, 2, 10, 12];
quickSort(arr);
console.log(arr);