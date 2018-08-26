var colors = [
	'rgb(6,158,219)',
	'rgb(15,164,207)',
	'rgb(24,169,194)',
	'rgb(34,175,182)',
	'rgb(43,180,169)',
	'rgb(52,186,157)'
];
var anis = [{
		id: 'ani1',
		compositionId: '3BB307B172DB49828ACE1FB554EA61E7'
	},
	{
		id: 'ani2',
		compositionId: '713C5F2F26C547BD8EBC2AD466E28D9A'
	},
	{
		id: 'ani3',
		compositionId: '23355ADA11C04978B6D584A07E81FA05'
	},
	{
		id: 'ani4',
		compositionId: '95AC0CCFE134462D85B9E9C955407206'
	},
	{
		id: 'ani5',
		compositionId: '52492F5A9F3B4197A277DD800299CC4E'
	},
	{
		id: 'ani6',
		compositionId: '529A33B0094E46F283198F907DCCF8BC'
	},
];


var showDivTimer = null;

function showDivImg(divImgs,index) {
	
}
var show = (function () {
	var isCtaShow = false;
	var prevShow = false;

	function showSomething(imgtransform, index, cta, prev,canvases,controllers) {
		
		for (var i = 0; i < imgtransform.length; i++) {
			var img = imgtransform[i];
			var canvas = canvases[i];
			var controller = controllers[i].controller;
			controller.offTicker();
			img.style.opacity =  canvas.style.opacity = '0';
		}
		
		if(index === 1 || index === 4){
			var firstImg = imgtransform[index].querySelector('img:nth-child(1)');
			var secondImg = imgtransform[index].querySelector('img:nth-child(2)');
			setTimeout(function() {
				firstImg.style.opacity = '0';
				secondImg.style.opacity = '1';
			},1500);
		}else {
			var divImgs = document.querySelectorAll('[data-imgs="imgs"] div.imgs');
			for(var divindex = 0; divindex < divImgs.length; divindex ++){
				// console.log();
				(function(divindex) {
					setTimeout(function() {
						divImgs[divindex].querySelector('img:nth-child(1)').style.opacity = '1';
						divImgs[divindex].querySelector('img:nth-child(2)').style.opacity = '0';
					},500);
				})(divindex);
			}
		}
		imgtransform[index].style.opacity =  canvases[index].style.opacity = '1';
		controllers[index].controller.play(0);
		if (prevShow === false) {

			prev.style.opacity = '1';
			prevShow = true;
		}
		if (index === 5 && isCtaShow === false) {
			cta.style.opacity = '1';
			isCtaShow = true;
		} else {
			if (isCtaShow) {
				cta.style.opacity = '0';
				isCtaShow = false;
			}
		}
	}
	return showSomething;
})();

function proloadImg(imgs, compelete) {
	var index = 0;
	for (var i = 0; i < imgs.length; i++) {
		var img = imgs[i];
		img.setAttribute('src', img.getAttribute('data-src'))
		img.onload = function () {
			index++;
			if (index === imgs.length) {
				compelete();
			}
		}
	}
}



function loadAni(json, compelete) {
	var result = [];
	var index = 0;
	for (var i = 0; i < json.length; i++) {
		var item = json[i];
		CjsLoader.load(AdobeAn[i],item.compositionId, item.id, function (controller,controllerIndex) {
			index++;
			result[controllerIndex - 1] = {
				id: json[index - 1].id,
				controller: controller,
			}
			if (index === json.length) {
				compelete(result);
			}
		});
	}
}

function loadAllAsstes(imgs, anis, compelete) {
	proloadImg(imgs, function () {
		loadAni(anis, function (controllers) {
			compelete(controllers);
		})
	});
}

function initApp() {
	var swiperContainer = document.getElementById('swiper-container');
	var swiperWrapper = swiperContainer.getElementsByClassName('swiper-wrapper')[0];
	var progress = document.querySelector('[data-progress="progress"]');
	var progressDots = progress.getElementsByClassName('progress-dot');
	var progressBackground = progress.getElementsByClassName('progress-background')[0];
	var cta = swiperContainer.getElementsByClassName('cta')[0];
	var imgs = document.querySelectorAll('[data-imgs="imgs"] img');
	var imgtransform = document.querySelectorAll('[data-imgs="imgs"] .imgs');
	var loading = document.getElementById('floatingCirclesG');
	var canvases = swiperContainer.getElementsByTagName('canvas');
	// var divs = 
	var divImgs = [];
	for(var i = 0; i < imgtransform.length; i ++){
		if(imgtransform[i].nodeName === 'DIV'){
			divImgs.push({
				index: i,
				node: imgtransform[i]
			});
		}
	}
	loadAllAsstes(imgs, anis, function (controllers) {
		controllers[0].controller.play(0);
		// show the swiperConatiner and hide loading
		swiperContainer.style.opacity = '1';
		loading.style.display = 'none';
		var mySwiper = new Swiper('.swiper-container', {
			width: 970,
			speed: 500,
			autoplay: {
				delay: 2700,
				stopOnLastSlide: true,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on: {
				slideChangeTransitionStart: function () {
					swiperContainer.style.background = colors[this.activeIndex];
					progressBackground.style.transform = 'translate3d(-' + (100 - (this.activeIndex) * 20) + '%,0px,0px)';
					show(imgtransform, this.activeIndex, cta, mySwiper.navigation.prevEl,canvases,controllers);
					showDivImg(divImgs,this.activeIndex);
				},
				slideChangeTransitionEnd: function() {
				}
			},
		});
		for (var i = 0; i < progressDots.length; i++) {
			var dot = progressDots[i];
			(function (index) {
				dot.addEventListener('click', function () {
					if (mySwiper.autoplay.running) {
						mySwiper.autoplay.stop();
					}
					mySwiper.slideTo(index);
				})
			})(i);
		}
		mySwiper.navigation.prevEl.addEventListener('click', function (e) {
			var ev = e || event;
			ev.preventDefault();
			Enabler.counter('banner_prev_counter')
			if (mySwiper.autoplay.running) {
				mySwiper.autoplay.stop();
			}
			return false;
		});
		mySwiper.navigation.nextEl.addEventListener('click', function (e) {
			var ev = e || event;
			ev.preventDefault();
			Enabler.counter('banner_next_counter')
			if (mySwiper.autoplay.running) {
				mySwiper.autoplay.stop();
			}
			return false;
		});
		swiperWrapper.addEventListener('click', function () {
			Enabler.exit('banner_background_exit')
		});
		cta.addEventListener('click', function () {
			Enabler.exit('banner_cta_exit');
		})
	});
}