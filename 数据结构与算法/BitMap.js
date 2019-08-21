function BitMap() {
	this._bitContainer = [];
}

BitMap.prototype = {
	constructor: BitMap,
	addNumber: function (num) {
		var arrIndex = Math.floor(num / 32);
		var bitIndex = num % 32;
		// if(typeof this._bitContainer[arrIndex] !== 'number') {
		// 	this._bitContainer[arrIndex] = 0;
		// }  // 自动转换 undefined => 0
		this._bitContainer[arrIndex] |= 1 << bitIndex; // 1010 & 0010;
	},
	isExist: function (num) {
		var arrIndex = Math.floor(num / 32);
		var bitIndex = num % 32;
		// if(typeof this._bitContainer[arrIndex] !== 'number') {
		// 	this._bitContainer[arrIndex] = 0;
		// }  // 自动转换 undefined => 0
		var value = this._bitContainer[arrIndex] & 1 << bitIndex;
		if (value === 0) return false;
		return true;
	}
}

/**
 * MurmurHash
 * 
 * 参考 http://murmurhash.googlepages.com/ 
 * 
 * data：待哈希的值
 * 0：
 * seed：种子集
 *
 */
function MurmurHash(data, seed) {
	let len = data.length,
		m = 0x5bd1e995,
		r = 24,
		h = seed ^ len,
		len_4 = len >> 2;

	for (let i = 0; i < len_4; i++) {
		let i_4 = (i << 2) + 0,
			k = data[i_4 + 3];

		k = k << 8;
		k = k | (data[i_4 + 2] & 0xff);
		k = k << 8;
		k = k | (data[i_4 + 1] & 0xff);
		k = k << 8;
		k = k | (data[i_4 + 0] & 0xff);
		k *= m;
		k ^= k >>> r;
		k *= m;
		h *= m;
		h ^= k;
	}

	// avoid calculating modulo  
	let len_m = len_4 << 2,
		left = len - len_m,
		i_m = len_m + 0;

	if (left != 0) {
		if (left >= 3) {
			h ^= data[i_m + 2] << 16;
		}
		if (left >= 2) {
			h ^= data[i_m + 1] << 8;
		}
		if (left >= 1) {
			h ^= data[i_m];
		}

		h *= m;
	}

	h ^= h >>> 13;
	h *= m;
	h ^= h >>> 15;

	return h;
}

function BoolmFilter(maxKeys, errorRate) {
	// 布隆过滤器位图映射变量
	this.bitMap = new BitMap();
	// 布隆过滤器中最多可放的数量
	this.maxKeys = maxKeys;
	// 布隆过滤器错误率
	this.errorRate = errorRate;
	// 位图变量的长度，需要根据maxKeys和errorRate来计算
	this.bitSize = Math.ceil(maxKeys * (-Math.log(errorRate) / (Math.log(2) * Math.log(2))));
	// 哈希数量
	this.hashCount = Math.ceil(Math.log(2) * (this.bitSize / maxKeys));
	// 已加入元素数量
	this.keyCount = 0;

	// 初始化位图数组
	// for (let i = Math.ceil(this.bitSize / 32) - 1; i >=0; i--) {
	//   this.bitMap[i] = 0;
	// }
}

/**
 * 设置位
 *
 */

/**
 * 加入布隆过滤器
 *
 */
BoolmFilter.prototype.add = function (key) {
	if (this.contain(key)) {
		return -1;
	}

	for (let i = 0; i < this.hashCount; i++) {
		var hashValue = MurmurHash(key, i);
		this.bitMap.addNumber(Math.abs(hashValue % this.bitSize));
	}
	this.keyCount++;
}

/**
 * 检测是否已经存在
 *
 */
BoolmFilter.prototype.contain = function (key) {
	for (let i = 0; i < this.hashCount; i++) {
		var hashValue = MurmurHash(key, i);
		if (!this.bitMap.isExist(Math.abs(hashValue % this.bitSize))) {
			return false;
		}
	}
	return true;
}

var boolmFilter = new BoolmFilter(1000000000, 0.01);

boolmFilter.add('http://www.baidu.com');
boolmFilter.add('http://www.baidu1.com');
boolmFilter.add('http://www.baidu2.com');

// console.log(boolmFilter.contain('http://www.baidu1.com'))

var bitMap = new BitMap();

bitMap.addNumber(1);

var num = '110';

function twoToTen(binaryStr) {
	var result = 0;
	var index = 0;
	for(var i = binaryStr.length - 1; i >= 0; i --) {
		result += +binaryStr[i] * Math.pow(2,index);
		index ++;
	}
	return result;
}
console.log(twoToTen(num))
// console.log(bitMap.isExist(2));

