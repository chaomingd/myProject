var _this = this;
// var pipe = function(value) {
// 	var fns = [];
// 	var proxy = new Proxy({},{
// 		get: (target,keyName,receiver) => {
// 			if(keyName === 'get') {
// 				return fns.reduce((val,fn) => fn(val),value)
// 			}else {
// 				fns.push(window[keyName]);
// 				return proxy;
// 			}
// 		}
// 	})
// 	return proxy;
// }

// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;

// console.log(pipe(3).double.pow.reverseInt.get); // 63


const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';