function indexOf(arr, item) {
	var low = 0,high = arr.length,mid,curr;
	while(low <= high){
			mid = Math.floor((low + high) / 2);
			curr = arr[mid];
			if(curr < item) {
					low = mid + 1;
			}else if(curr > item){
					 high = mid - 1;
			}else {
					return mid
			}
	}
	return - 1;
}
console.log(indexOf([ 1, 2, 3, 4 ], 3))