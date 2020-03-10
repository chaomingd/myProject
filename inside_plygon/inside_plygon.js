/**
 * @description 射线法判断点是否在多边形内部
 * @param {Object} p 待判断的点，格式：{ x: X坐标, y: Y坐标 }
 * @param {Array} poly 多边形顶点，数组成员的格式同 p
 * @return {String} 点 p 和多边形 poly 的几何关系
 */
function rayCasting(p, poly) {
	var px = p.x,
		py = p.y,
		flag = false

	for (var i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
		var sx = poly[i].x,
			sy = poly[i].y,
			tx = poly[j].x,
			ty = poly[j].y

		// 点与多边形顶点重合
		if ((sx === px && sy === py) || (tx === px && ty === py)) {
			return 'on'
		}

		// 判断线段两端点是否在射线两侧
		if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
			// 线段上与射线 Y 坐标相同的点的 X 坐标
			var x = sx + (py - sy) * (tx - sx) / (ty - sy)

			// 点在多边形的边上
			if (x === px) {
				return 'on'
			}

			// 射线穿过多边形的边界
			if (x > px) {
				flag = !flag
			}
		}
	}

	// 射线穿过多边形边界的次数为奇数时点在多边形内
	return flag ? 'in' : 'out'
}


function inside(point, vs) {
	// ray-casting algorithm based on
	// http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

	var x = point[0], y = point[1];

	var inside = false;
	for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
		var xi = vs[i][0], yi = vs[i][1];
		var xj = vs[j][0], yj = vs[j][1];
		var intersect = ((yi > y) != (yj > y))
			&& (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
		if (intersect) inside = !inside;
	}

	return inside;
};


console.log(inside([0,0],[
	[0,2],
	[2,2],
	[2,0],
	[0,-1]
]))