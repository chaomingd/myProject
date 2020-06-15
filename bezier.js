function Point(x,y) {
  this.x = x;
  this.y = y;
}
function bezierCalculate(poss, precision) {
  //维度，坐标轴数（二维坐标，三维坐标...）
  var dimersion = 2;
  //贝塞尔曲线控制点数（阶数）
  var number = poss.length;
  //控制点数不小于 2 ，至少为二维坐标系
  if (number < 2 || dimersion < 2) return null;
  var result = new Array();
  //计算杨辉三角
  var mi = new Array();
  mi[0] = mi[1] = 1;
  for (var i = 3; i <= number; i++) {
    var t = new Array();
    for (var j = 0; j < i - 1; j++) {
      t[j] = mi[j];
    }

    mi[0] = mi[i - 1] = 1;
    for (var j = 0; j < i - 2; j++) {
      mi[j + 1] = t[j] + t[j + 1];
    }
  }

  //计算坐标点
  for (var i = 0; i < precision; i++) {
    var t = i / precision;
    var p = new Point(0, 0);
    result.push(p);
    for (var j = 0; j < dimersion; j++) {
      var temp = 0.0;
      for (var k = 0; k < number; k++) {
        temp += Math.pow(1 - t, number - k - 1) * (j == 0 ? poss[k].x : poss[k].y) * Math.pow(t, k) * mi[k];
      }
      j == 0 ? p.x = temp : p.y = temp;
    }
  }

  return result;
}