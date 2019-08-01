
var next_id = 0;

function Tween(object) {
	this._object = object;
	this._valuesStart = {};
	this._valuesEnd = {};
	this._isPlaying = false;
	this._repeatValuesStart = {};
	this._yoyo = false;
	this._repeat = 0;
	this._reverse = false;
	this._startTime = 0;
	this._duration = 1000;
	this._delayTime = 0;
	this._repeateDelayTime = undefined;
	this._onUpdateCallback = null;
	this._onStartCallback = null;
	this._startCallbackFired = false;
	this._onCompleteCallback = null;
	this._repeatCallback = null;
	this._onStopCallback = null;
	this._easingFunction = Easing.Linear.None;
	this._id = this.getId();
	this._requestAnimationFrameTimer = undefined;
	this._lastUpdateTime = 0;
	this._isComplete = undefined;
	this._autoPlay = true;
}

if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
	Tween.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use window.performance.now if it is available.
else if (typeof (window) !== 'undefined' &&
				 window.performance !== undefined &&
		 window.performance.now !== undefined) {
	// This must be bound, because directly assigning this function
	// leads to an invocation exception in Chrome.
	Tween.now = window.performance.now.bind(window.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
	Tween.now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
	Tween.now = function () {
		return +new Date();
	};
}


Tween.prototype = {
	getId: function () {  
		return next_id ++;
	},
	now: function () {
		return Tween.now();
	},
	repeat: function(num) {
		this._repeat = num;
		return this;
	},
	onStart: function(fn,contxt) {
		this._onStartCallback = contxt ? fn.bind(contxt): fn;
	},
	delay: function(time) {
		this._delayTime = time;
		return this;
	},
	yoyo: function(yoyo) {
		this._yoyo = yoyo;
		return this;
	},
	to: function(propertis,duration,autoPlay) {
		this._valuesEnd = propertis;
		this._autoPlay = autoPlay || false;
		duration && (this.duration = duration);
		for(var key in this._valuesEnd) {
			if(this._object[key] === undefined) { // 如果源对象没有key就忽略
				continue;
			}
			this._valuesStart[key] = this._object[key];
			this._repeatValuesStart[key] = this._valuesStart[key];
		}
		if(this._autoPlay) {
			this.start();
			this.play();
		}
		return this;
	},
	start: function (time) {
		this._startCallbackFired = false;
		this._startTime = time !== undefined ? time : Tween.now();
		this._startTime = this._startTime + this._delayTime;
		return this;
	},
	easing: function(easingFn) {
		this._easingFunction = easingFn;
		return this;
	},
	onUpdate: function(fn,contxt) {
		this._onUpdateCallback = contxt ? fn.bind(contxt) : fn;
		return this;
	},
	update: function(time) {
		var elapsed, start, end,value;
		if(time < this._startTime) {
			return true;
		}
		this._lastUpdateTime = time;
		if(this._startCallbackFired === false) {
			this._onStartCallback && this._onStartCallback(this._object);
		}
		elapsed = (time - this._startTime) / this.duration;
		elapsed = (this.duration === 0 || elapsed > 1) ? 1: elapsed;
		value = this._easingFunction(elapsed);
		for(var key in this._valuesStart) {
			start = this._valuesStart[key];
			end = this._valuesEnd[key];
			this._object[key] = start + (end - start) * value;
		}
		this._onUpdateCallback && this._onUpdateCallback(this._object); // updateCallback
		if(elapsed === 1) {
			if(this._repeat > 0) {
				this._repeat --;
				if(this._yoyo) {
					for(var key in this._repeatValuesStart) {
						var tmp = this._repeatValuesStart[key];
						this._repeatValuesStart[key] = this._valuesStart[key] = this._valuesEnd[key];
						this._valuesEnd[key] = tmp;
					}
					this._reverse = !this._reverse;
				}
				if(this._repeateDelayTime !== undefined) {
					this._startTime = time + this._repeateDelayTime;
				}else {
					this._startTime = time + this._delayTime;
				}
				this._repeatCallback && this._repeatCallback(this._object);
				return true;
			}
			this._isPlaying = false;
			this._isComplete = true;
			return false;
		}
		return true;
	},
	play: function() {
		if(this._isPlaying) return;
		this._isPlaying = true;
		if(this._isComplete) {
			this.start();
			this._isComplete = false;
		}else {
			if(!this._lastUpdateTime) { // 第一次调用
				this.start();
			}else {
				this._startTime = Tween.now() - (this._lastUpdateTime - this._startTime);
			}
		}
		this.ticker();
		return this;
	},
	ticker: function() {
		var me = this;
		function frameTicker() {
			var time = Tween.now();
			if(!me.update(time)) {
				return me.pause();
			}
			me._requestAnimationFrameTimer = requestAnimationFrame(frameTicker);
		}
		frameTicker();
	},
	pause: function () {  
		this._isPlaying = false;
		cancelAnimationFrame(this._requestAnimationFrameTimer);
	},
	resume: function() {
		if(this._isPlaying || !this._lastUpdateTime) return;
		if(this._isComplete) {
			this.start();
			this._isComplete = false;
		}else {
			this._startTime = Tween.now() - (this._lastUpdateTime - this._startTime);
		}
		this.ticker();
	},
	restart: function() {
		this.start();
		if(this._isPlaying) return;
		this._isPlaying = true;
		this.ticker();
	},
	reverse: function() {
		for(var key in this._repeatValuesStart) {
			var tmp = this._repeatValuesStart[key];
			this._repeatValuesStart[key] = this._valuesStart[key] = this._valuesEnd[key];
			this._valuesEnd[key] = tmp;
		}
		this._reverse = !this._reverse;
	}
}


var Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

		},

		Out: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};