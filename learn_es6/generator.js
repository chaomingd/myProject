function co(f) {
	var _this = this;
	var args = Array.prototype.slice.call(arguments,1)
	var gen;
	return new Promise((resolve,reject) => {
		gen = f.apply(_this,args);
		function fulfilled(res) {
			var ret;
			try {
				ret = gen.next(res)
			}catch(e) {
				return reject(ret)
			}
			next(ret);
		}

		function next(ret) {
			if(!ret.done) return resolve(ret.value);
			var value = Promise.resolve(ret.value);
			value.then(fulfilled)
		}
	})
}