function Timeline() {
	this._startTime = 0;
	this._lastTime = 0;
	this._tweens = [];
	this.requestAnimationFrameTimer = 0;
}

Timeline.prototype.ticker = function() {
	requestAnimationFrame(this.ticker);
}

Timeline.prototype.startTimeline = function(startTime) {
	var me = this;
	this._startTime = startTime;
	this.update(this._startTime)
	function nextTick() {
		var now = me.now();
		this.update(now);
		me.requestAnimationFrameTimer = requestAnimationFrame(nextTick);
	}
	nextTick();
}
Timeline.prototype.now = function() {
	return +new Date();
}
Timeline.prototype.update = function(time) {

}