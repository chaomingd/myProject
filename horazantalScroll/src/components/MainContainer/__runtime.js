import {
	TweenMax
} from "gsap/TweenMax";

function getScrollTop(document) {
	return document.body.scrollTop || document.documentElement.scrollTop;
}

function containerScroll(pageFooter,window) {
	if (window.innerWidth < 854) return;
	let scrollTop = getScrollTop(document);
	let scrollRatio = scrollTop / this.canVerticalScroll;
	this.scrollContainer.scrollLeft = this.canHorizantalScroll * scrollRatio;
	var bbox = pageFooter.getBoundingClientRect();
	if (bbox.top <= window.innerHeight) {
		let changedTop = 118 - (window.innerHeight - bbox.top);
		this.scrollContainer.style.top = changedTop + 'px'
	} else {
		this.scrollContainer.style.top = '118px'
	}
}

function windowScroll(window, pageFooter) {

	if (window.innerWidth < 854) return;
	this.scrollLeft = this.scrollContainer.scrollLeft;
	let scrollRatio = this.scrollLeft / this.canHorizantalScroll;
	window.scrollTo(0, scrollRatio * this.canVerticalScroll);
	var bbox = pageFooter.getBoundingClientRect();
	if (bbox.top <= window.innerHeight) {
		let changedTop = 118 - (window.innerHeight - bbox.top);
		this.scrollContainer.style.top = changedTop + 'px'
	} else {
		this.scrollContainer.style.top = '118px'
	}
}


function checkScrollDirection(dir,window) {
	if (window.innerWidth < 854) return;
	if (!this.direction) {
		this.direction = dir;
	}
	clearTimeout(this.timer);
	this.timer = setTimeout(() => {
		this.direction = '';
	}, 300)
	if (this.direction !== dir) {
		return false;
	}
	return true;

}


function checkScrollIndexAndActiveNavDot(scrollLeft, scrollLeftsVal,window) {
	if (this.fistTimer) {
		clearTimeout(this.fistTimer);
	}
	if (window.innerWidth < 854) return;
	let len = scrollLeftsVal.length;
	for (let i = 0; i < len; i++) {
		if (scrollLeftsVal[i + 1] === undefined) {
			this.index = len - 1
		}else {
			if (scrollLeft >= scrollLeftsVal[i] && scrollLeft < scrollLeftsVal[i + 1]) {
				this.index = i;
				break;
			}
		}
	}
	//remove active attibute
	var AE = document.querySelector('.navdot[active]');
	if (AE) {
		AE.removeAttribute('active')
	}
	if (!this.navDot[this.index].getAttribute('active')) {
		this.navDot[this.index].setAttribute('active', 'active')
	}
}

function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;

	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}

	return actualLeft;
}


export default function didMount() {
	//scroll
	this.canVerticalScroll = document.body.scrollHeight - window.innerHeight;
	this.canHorizantalScroll = this.scrollContainer.scrollWidth - this.scrollContainer.getBoundingClientRect().width;
	let pageFooter = document.querySelector('.paid-bottom-border');
	containerScroll.call(this, pageFooter,window);



	// navdot 
	this.navDotContainer = document.getElementById('navdotContainer');
	this.activeEl = document.querySelectorAll('.activeEl');
	this.navDot = document.querySelectorAll('.navdot');
	this.scrollLeftsVal = [];
	this.activeEl.forEach((el, index) => {
		let bbox = el.getBoundingClientRect();
		let left = Math.floor(getElementLeft(el) - window.innerWidth + bbox.width * .5);
		this.scrollLeftsVal[index] = index === 0 ? 0 : left;
	});
	console.log(this.scrollLeftsVal);
	this.fistTimer = setTimeout(() => {
		checkScrollIndexAndActiveNavDot.call(this, this.scrollContainer.scrollLeft, this.scrollLeftsVal,window);
	}, 100);
	this.navDotContainer.addEventListener('click', (e) => {
		if (window.innerWidth < 854) return;
		var ev = e || event;
		var target = ev.target;
		if (target.className.indexOf('inner') > -1) {
			var index = parseInt(target.getAttribute('data-index'));
			var scrollLeft = this.scrollLeftsVal[index] + 1;
			TweenMax.to(this.scrollContainer, .5, {
				scrollLeft: scrollLeft,
			});
		}
	})



	// listeners 
	window.addEventListener('scroll', () => {
		if (!checkScrollDirection.call(this, 'vertical',window)) return;
		containerScroll.call(this, pageFooter,window);
	})
	this.scrollContainer.addEventListener('scroll', () => {
		checkScrollIndexAndActiveNavDot.call(this, this.scrollContainer.scrollLeft, this.scrollLeftsVal,window);
		if (!checkScrollDirection.call(this, 'horizantal',window)) return;
		windowScroll.call(this, window, pageFooter);
	});
	window.addEventListener('resize', () => {
		containerScroll.call(this, pageFooter,window);
		console.log('resize');
		if(window.innerWidth > 853) {
			this.activeEl.forEach((el, index) => {
				let bbox = el.getBoundingClientRect();
				let left = Math.floor(getElementLeft(el) - window.innerWidth + bbox.width * .5);
				this.scrollLeftsVal[index] = index === 0 ? 0 : left;
			});
		}
		
		checkScrollIndexAndActiveNavDot.call(this, this.scrollLeft, this.scrollLeftsVal,window);
	});
}