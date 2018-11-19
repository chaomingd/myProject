// offsetX
function getOffsetX(event) {
	var e = event || window.event
	if (e.offsetX) {
			return e.offsetX
	}else {
			var rect = obj.getBoundingClientRect();
			var clientX = e.clientX;
			return clientX - rect.left
	}
}

// pageX

function pageX(event) {  
	//兼容写法  
	event = event || window.event;  //event的兼容写法  
	var pagex = event.pageX || event.clientX + scroll().left;  //获取pageX的兼容写法
	var pagey = event.pageY || event.clientY + scroll().top;
}  

//获取滚动时,卷起的高度和宽度的兼容写法
function scroll(){  
 return {  
		 "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,  
		 "left": window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft  
 }  
}

