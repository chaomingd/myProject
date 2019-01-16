function throttle_debounce(fn,delay){
	let last=0,timer=null;
	return function (){
		let context=this;
		let args=arguments;
		let now=+new Date();
		if(now-last<delay){
			clearTimeout(timer);
			setTimeout(()=>{
				return fn.apply(context,args)
			},delay)
		}else{
			last=now;
			return fn.apply(context,args);
		}
	}
}