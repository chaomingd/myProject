class Promise {
	constructor (executor) {
		this.status = 'pending';
		this.value = undefined;
		this.reason = undefined;
		this.onResolvedCallbacks = [];
		this.onRejectedCallbacks = [];
		var _this = this;
		function resolve(value) {
			if(_this.status === 'pending') {
				_this.status = 'resolved';
				_this.value = value;
				_this.onResolvedCallbacks.forEach(fn => fn());
			}
		}

		function reject(reason) {
			if(_this.status === 'pending') {
				_this.status = 'rejected';
				_this.reason = reason;
				_this.onRejectedCallbacks.forEach(fn => fn());
			}
		}
		try {
			executor(resolve,reject);
		} catch (e) {
			reject(e);
		}
	}
	then(onFulfilled,onRejected) {
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(value) {
			return value;
		}
		onRejected = typeof onRejected === 'function' ? onRejected : function(err) {
			throw err;
		}
		var _this = this;
		var promise2;
		if(this.status === 'resolved') {
			promise2 = new Promise((resolve,reject) => {
				setTimeout(() => {
					try {
						let x = onFulfilled(_this.value);
						resolvePromise(promise2,x,resolve,reject);
					} catch (error) {
						reject(error)
					}
				});
			})
		}
		if(this.status === 'rejected') {
			promise2 = new Promise((resolve,reject) => {
				setTimeout(() => {
					try {
						let x = onRejected(_this.reason);
						resolvePromise(promise2,x,resolve,reject);
					} catch (error) {
						reject(error)
					}
				});
			})
		}

		if(this.status === 'pending') {
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
}

function resolvePromise(promise2,x,resolve,reject) {
	if(promise2 === x) {
		reject(new TypeError('circle reference'))
	}
	let called;
	if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
		try {
			let then = x.then;
			if(typeof then === 'function') {
				x.then(function(y) {
					if(called) return;
					called = true;
					resolvePromise(promise2,y,resolve,reject);
				},function(err) {
					if(called)  return;
					called = true;
					reject(err);
				})
			}
		} catch (err) {
			if(called) return;
			called = true;
			reject(err);
		}
	}else {
		resolve(x);
	}
}