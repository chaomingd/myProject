function concatenate(resultConstructor, ...arrays) {
  let totalLength = 0;
  for (let arr of arrays) {
    totalLength += arr.length;
  }
  let result = new resultConstructor(totalLength);
  let offset = 0;
  for (let arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}


// function str2Uint8Array(input) {
//   const encoder = new TextEncoder()
//   const view = encoder.encode(input)
//   return view
// }
// var uinit8Array = new Uint8Array(4);
// // console.log(concatenate(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4)))

// const littleEndian = (function() {
// 	const buffer = new ArrayBuffer(2);
// 	var dataView = new DataView(buffer);
// 	dataView.setUint16(0, 256, true);
// 	console.log(dataView.getUint16(0))
//   return new Uint16Array(buffer)[0] === 256;
// })();


function curry(fn) {
	var len = fn.length;
	var ctx = this;
	var args = [];
	return function curried() {
		args.push.apply(args,arguments)
		// Function.prototype.apply.call(args.push,args,arguments);
		if(args.length < len) {
			return curried;
		}
		return fn.apply(ctx,args)
	}
}


function test(x,y,z) {
	return x + y + z;
}

// obj.curry = curry;

var curriedFn = curry(test);
