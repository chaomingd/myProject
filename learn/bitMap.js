function BitMap(size) {
	var data = [];
	for(var i =0;i < size; i ++) {
		data[i] = 0;
	}

	this.addNumber = function(num) {
		var arrIndex = Math.floor(num / 32);
		var bitIndex = num % 32;
		data[arrIndex] = data[arrIndex] | 1 << bitIndex;
	}

	this.isExit = function(num) {
		var arrIndex = Math.floor(num / 32);
		var bitIndex = num % 32;
		return  (data[arrIndex] & 1 << bitIndex)   !== 0;
	}
}

var bitMap = new BitMap(4);

bitMap.addNumber(4)
bitMap.addNumber(4)
bitMap.addNumber(4)

console.log(bitMap.isExit(4))

