// myPromise
function Promise(executor) { //executor是一个执行器（函数）
	let _this = this // 先缓存this以免后面指针混乱
	_this.status = 'pending' // 默认状态为等待态
	_this.value = undefined // 成功时要传递给成功回调的数据，默认undefined
	_this.reason = undefined // 失败时要传递给失败回调的原因，默认undefined
	_this.onResolvedCallbacks = []; // 存放then成功的回调
	_this.onRejectedCallbacks = []; // 存放then失败的回调

	function resolve(value) {
		if (_this.status === 'pending') {
			_this.status = 'resolved'
			_this.value = value
			_this.onResolvedCallbacks.forEach(function (fn) { // 当成功的函数被调用时，之前缓存的回调函数会被一一调用
				fn()
			})
		}
	}
	function reject(reason) {
		if (_this.status === 'pending') {
			_this.status = 'rejected'
			_this.reason = reason
			_this.onRejectedCallbacks.forEach(function (fn) {// 当失败的函数被调用时，之前缓存的回调函数会被一一调用
				fn()
			})
		}
	}
	try {
		executor(resolve, reject)
	} catch (e) { // 如果捕获发生异常，直接调失败，并把参数穿进去
		reject(e)
	}
}

Promise.prototype.then = function (onFulfilled, onRjected) {
	//成功和失败默认不传给一个函数，解决了问题8
	onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) {
		return value;
	}
	onRjected = typeof onRjected === 'function' ? onRjected : function (err) {
		throw err;
	}
	let _this = this;
	let promise2; //返回的promise
	if (_this.status === 'resolved') {
		promise2 = new Promise(function (resolve, reject) {
			// 当成功或者失败执行时有异常那么返回的promise应该处于失败状态
			setTimeout(function () {// 根据规范让那俩家伙异步执行
				try {
					let x = onFulfilled(_this.value);//这里解释过了
					// 写一个方法统一处理问题1-7
					resolvePromise(promise2, x, resolve, reject);
				} catch (e) {
					reject(e);
				}
			})
		})
	}
	if (_this.status === 'rejected') {
		promise2 = new Promise(function (resolve, reject) {
			setTimeout(function () {
				try {
					let x = onRjected(_this.reason);
					resolvePromise(promise2, x, resolve, reject);
				} catch (e) {
					reject(e);
				}
			})
		})
	}
	if (_this.status === 'pending') {
		promise2 = new Promise(function (resolve, reject) {
			_this.onResolvedCallbacks.push(function () {
				setTimeout(function () {
					try {
						let x = onFulfilled(_this.value);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e)
					}
				})
			});
			_this.onRejectedCallbacks.push(function () {
				setTimeout(function () {
					try {
						let x = onRjected(_this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				})
			});
		})
	}
	return promise2;
}

Promise.prototype.finally = function(callback) {
	return this.then(callback,callback)
}



function resolvePromise(promise2, x, resolve, reject) {
	// 接受四个参数，新Promise、返回值，成功和失败的回调
	// 有可能这里返回的x是别人的promise
	// 尽可能允许其他乱写
	if (promise2 === x) { //这里应该报一个类型错误，来解决问题4
		return reject(new TypeError('循环引用了'))
	}
	// 看x是不是一个promise,promise应该是一个对象
	let called; // 表示是否调用过成功或者失败，用来解决问题7
	//下面判断上一次then返回的是普通值还是函数，来解决问题1、2
	if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
		// 可能是promise {},看这个对象中是否有then方法，如果有then我就认为他是promise了
		try {
			let then = x.then;// 保存一下x的then方法
			if (typeof then === 'function') {
				// 成功
				//这里的y也是官方规范，如果还是promise，可以当下一次的x使用
				//用call方法修改指针为x，否则this指向window
				x.then(function (y) {
					if (called) return //如果调用过就return掉
					called = true
					// y可能还是一个promise，在去解析直到返回的是一个普通值
					resolvePromise(promise2, y, resolve, reject)//递归调用，解决了问题6
				}, function (err) { //失败
					if (called) return
					called = true
					reject(err);
				})
			} else {
				resolve(x)
			}
		} catch (e) {
			if (called) return
			called = true;
			reject(e);
		}
	} else { // 说明是一个普通值1
		resolve(x); // 表示成功了
	}
}


// 捕获错误的方法，在原型上有catch方法，返回一个没有resolve的then结果即可
Promise.prototype.catch = function (callback) {
	return this.then(null, callback)
}
// 解析全部方法，接收一个Promise数组promises,返回新的Promise，遍历数组，都完成再resolve
Promise.all = function (promises) {
	//promises是一个promise的数组
	return new Promise(function (resolve, reject) {
		let arr = []; //arr是最终返回值的结果
		let i = 0; // 表示成功了多少次
		function processData(index, y) {
			arr[index] = y;
			if (++i === promises.length) {
				resolve(arr);
			}
		}
		for (let i = 0; i < promises.length; i++) {
			promises[i].then(function (y) {
				processData(i, y)
			}, reject)
		}
	})
}
// 只要有一个promise成功了 就算成功。如果第一个失败了就失败了
Promise.race = function (promises) {
	return new Promise(function (resolve, reject) {
		for (var i = 0; i < promises.length; i++) {
			promises[i].then(resolve, reject)
		}
	})
}
// 生成一个成功的promise
Promise.resolve = function (value) {
	return new Promise(function (resolve, reject) {
		resolve(value);
	})
}
// 生成一个失败的promise
Promise.reject = function (reason) {
	return new Promise(function (resolve, reject) {
		reject(reason);
	})
}

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
		resolve('ok');
	})
});
// this.status = 'resolved'
// promise.then(() => {

// })




// module.exports=Promise  // 导出模块，否则别的文件没法使用

