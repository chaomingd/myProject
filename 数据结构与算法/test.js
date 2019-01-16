function jumpFloorII(number)
{
    if(number < 1)
        return 0;
    if(number === 1)
        return  1;
    return 2*jumpFloorII(number-1)
}

function jumpFloorII1(number) {
	var arr = [0,1];
	for(var i = 2;i <= number;i ++) {
		arr[i] = 2 * arr[i - 1];
	}
	return arr[number];
}


