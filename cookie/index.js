// 设置过期时间

function deleteCookie(name){ // 删除cookie
	var date=new Date();
	date.setTime(date.getTime()-10000);
	document.cookie=name+"=v; expire="+date.toGMTString()+"; path=/";
}
function clearCookie() {  // 清除所有cookie
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; "); 
	for (var i = 0; i < arrCookie.length; i++) { 
		var arr = arrCookie[i].split("=");
		if (arr.length > 0)
		deleteCookie(arr[0]);
	}
}


function setCookie(c_name, value, expiredays){
	　　　　var exdate=new Date();
 　　　　exdate.setDate(exdate.getDate() + expiredays);
 　　　　document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	　　}
	
 //读取cookies
 function getCookie(name)
 {
		 var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	
		 if(arr=document.cookie.match(reg))
	
				 return (arr[2]);
		 else
				 return null;
 }