var _nameSpace = {com: {greensock: {test: 'test'}}};
function nameSpace(ns) {
	var a = ns.split('.');
	var p = _nameSpace || {};
	for(i = 0;i < a.length; i ++) {
		p[a[i]] = p[a[i]] || {}
		p = p[a[i]];
	} 
	return p;
}
gs = nameSpace('com.greensock')
console.log(gs)

