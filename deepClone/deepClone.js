function deepClone(obj) {
	var _toString = Object.prototype.toString;
	// null, undefined, non-object, function
	if (!obj || typeof obj !== 'object') {
			return obj;
	}

	// DOM Node
	if (obj.nodeType && 'cloneNode' in obj) {
			return obj.cloneNode(true);
	}

	// Date
	if (_toString.call(obj) === '[object Date]') {
			return new Date(obj.getTime());
	}

	// RegExp
	if (_toString.call(obj) === '[object RegExp]') {
		var flags = [];
		if (obj.global) { flags.push('g'); }
		if (obj.multiline) { flags.push('m'); }
		if (obj.ignoreCase) { flags.push('i'); }
		return new RegExp(obj.source, flags.join(''));
	}

	var result = Array.isArray(obj) ? [] :
		obj.constructor ? new obj.constructor() : {};
	for (var key in obj ) {
		result[key] = deepClone(obj[key]);
	}
	return result;
}