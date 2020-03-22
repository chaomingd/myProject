//蹦床函数
function trampoline(f) {
	while(f && f instanceof Function) {
		f = f();
	}
	return f;
}

function sum(x, y) {
  if (y > 0) {
    return sum( x + 1, y - 1);
  } else {
    return x;
  }
}

console.log(tco(sum)(1,10000))

function tco(f) {
  var value;
  var active = false;
  var accumulated = [];

  return function() {
		accumulated.push(arguments)
		if(!active) {
			active = true;
			while(accumulated.length) {
				value = f.apply(this,accumulated.shift())
			}
			active = false;
			return value;
		}
	}
}