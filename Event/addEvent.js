(function() {
	var on = (function() {
		var div = document.createElement('div');
		if(div.addEventListener) {
			return function(el,type,fn) {
				el.addEventListener(type,fn)
			}
		}else {
			return function(el,type,fn) {
				el.attachEvent('on' + type,fn);
			}
		}
	})();
	var remove = (function() {
		var div = document.createElement('div');
		if(div.removeEventListener) {
			return function(el,fn) {
				el.removeEventListener(fn)
			}
		}else {
			return function(el,fn) {
				el.detachEvent(fn);
			}
		}
	})();
})();