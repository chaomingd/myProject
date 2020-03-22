var obj = {};
obj.test = 'test';
var symbolKey = Symbol();
obj[symbolKey] = 'test1';

console.log(Object.entries(obj))
