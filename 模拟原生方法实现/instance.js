function instance(left,right) {
	let proto = left.__proto__;
	let rightPrototype = right.prototype;
	while(true) {
		if(!proto) return false;
		if(proto === rightPrototype) return true;
		proto = proto.__proto__;
	}
}