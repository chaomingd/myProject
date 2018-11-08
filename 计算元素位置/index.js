// 计算网页大小
function getViewport() {
	if (document.compatMode == "BackCompat") {
		return {
			width: document.body.clientWidth,
			height: document.body.clientHeight
		}
	} else {
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}
}
//包含滚动条在内的该元素的视觉面积。
function getPagearea() {
	if (document.compatMode == "BackCompat") {
		return {
			width: Math.max(document.body.scrollWidth,
				document.body.clientWidth),
			height: Math.max(document.body.scrollHeight,
				document.body.clientHeight)
		}
	} else {
		return {
			width: Math.max(document.documentElement.scrollWidth,
				document.documentElement.clientWidth),
			height: Math.max(document.documentElement.scrollHeight,
				document.documentElement.clientHeight)
		}
	}
}

// 获取元素的绝对位置
function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;

	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}

	return actualLeft;
}
function getAbsPos(el) {
	return {
		top: el.getBoundingClientRect().top + (document.documentElement.scrollTop||document.body.scrollTop),
		left: el.getBoundingClientRect().left + (document.documentElement.scrollTop||document.body.scrollLeft)
	}
}

function getElementTop(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;

	while (current !== null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}

	return actualTop;
}