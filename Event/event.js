function Event() {
	this.listeners = {};
}
Event.prototype = {
	constructor: Event,
	on(type, fn) {
		if (!type || fn instanceof Array) return;
		if (!this.listeners[type]) {
			this.listeners[type] = [];
		}
		this.listeners[type].push(fn)
	},
	emit(type, ...args) {
		if (!type || typeof type !== 'string') return;
		let fns = this.listeners[type];
		if (!fns instanceof Array) return;
		fns.forEach(fn => {
			fn({
				type,
				data: args.length <= 1 ? args[0]: [...args]
			}, args);
		})
	},
	remove(type, fn) {
		if (!type || typeof type !== 'string') return;
		if (!fn) {
			this.listeners[type] = [];
		} else {
			var fns = this.listeners[type];
			var len = fns.length;
			for (var i = len - 1; i >= 0; --i) {
				var f = fns[i];
				if (f === fn) {
					fns.splice(i, 1);
				}
			}
		}
	}
}