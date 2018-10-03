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
		compositionId: '3BB307B172DB49828ACE1FB554EA61E7',
		name: '1'
	},
	{
		id: 'ani2',
		compositionId: '713C5F2F26C547BD8EBC2AD466E28D9A',
		name: '2'
	},
	{
		id: 'ani3',
		compositionId: '23355ADA11C04978B6D584A07E81FA05',
		name: '3'
	},
	{
		id: 'ani4',
		compositionId: '95AC0CCFE134462D85B9E9C955407206',
		name: '4'
	},
	{
		id: 'ani5',
		compositionId: '52492F5A9F3B4197A277DD800299CC4E',
		name: '5'
	},
	{
		id: 'ani6',
		compositionId: '529A33B0094E46F283198F907DCCF8BC',
		name: '6'
	},
];



var show = (function () {
	var isCtaShow = false;
	var prevShow = false;
	function showSomething(imgtransform, index, cta, prev, canvases,mySwiper,swiperCtr) {
		// prevBtn and nextBtn style updating
		if(index === 0){
			mySwiper.prevBtn.classList.add('swiper-button-disabled');
		}else {
			if(mySwiper.prevBtn.classList.contains('swiper-button-disabled')){
				mySwiper.prevBtn.classList.remove('swiper-button-disabled');
			}
		}
		
		if(index === 5){
			mySwiper.nextBtn.classList.add('swiper-button-disabled');
		}else {
			if(mySwiper.nextBtn.classList.contains('swiper-button-disabled')){
				mySwiper.nextBtn.classList.remove('swiper-button-disabled');
			}
		}
		imgtransform[0].style.transition = 'all .5s';
		var divImgs = document.querySelectorAll('[data-imgs="imgs"] div.twoImg');
		for (var i = 0; i < imgtransform.length; i++) {
			var img = imgtransform[i];
			var canvas = canvases[i];
			img.style.transitionDelay = '0s';
			img.style.zIndex = '0'
			img.style.opacity = canvas.style.opacity = '0';
		}
		if(swiperCtr.playing){
			if (index === 1 || index === 4) {
				var firstImg = imgtransform[index].querySelector('.firstImg');
				var secondImg = imgtransform[index].querySelector('.secondImg');
				firstImg.style.opacity = '1';
				firstImg.style.zIndex = '1';
				secondImg.style.transitionDelay = '.5s';
				setTimeout(function () {
					firstImg.style.opacity = '0';
					firstImg.style.zIndex = '0';
					secondImg.style.opacity = '1';

					setTimeout(function () {
						secondImg.style.transitionDelay = '0s';
					}, 500);
				}, index === 1?5000:4500);
			}else {
				for (var divindex = 0; divindex < divImgs.length; divindex++) {
					(function (divindex) {
						var secondImg = divImgs[divindex].querySelector('.secondImg');
						var firstImg = divImgs[divindex].querySelector('.firstImg');
						if(secondImg) secondImg.style.opacity = '0';
						if(firstImg ) firstImg.style.transitionDelay = '.1s';
						if(firstImg) {firstImg.style.opacity = '1';firstImg.style.zIndex = '1'};
					})(divindex);
				}
			}
		}else {
			for (var divindex = 0; divindex < divImgs.length; divindex++) {
				(function (divindex) {
					var secondImg = divImgs[divindex].querySelector('.secondImg');
					var firstImg = divImgs[divindex].querySelector('.firstImg');
					if(secondImg) secondImg.style.opacity = '0';
					if(firstImg ) firstImg.style.transitionDelay = '.1s';
					if(firstImg) {firstImg.style.opacity = '1';firstImg.style.zIndex = '1'};
				})(divindex);
			}
		}
		if (!swiperCtr.canLastPlay && index === 5) {
			mySwiper.nextBtn.classList.add('notransition');
			mySwiper.prevBtn.classList.add('notransition');
			setTimeout(function() {
				mySwiper.nextBtn.classList.remove('notransition');
			mySwiper.prevBtn.classList.remove('notransition');
			},500);
			for(var i = 0 ; i < imgtransform.length; i ++){
				(function(index) {
					imgtransform[index].classList.add('notransition');
					cta.classList.add('notransition');
					setTimeout(function () {
						imgtransform[index].classList.remove('notransition');
						cta.classList.remove('notransition');
					}, 500);
				})(i);
			}
		}
		imgtransform[index].style.transitionDelay = '.4s';
		imgtransform[index].style.opacity = canvases[index].style.opacity = '1';
		imgtransform[index].style.zIndex = '1000';
		if (prevShow === false) {
			mySwiper.prevBtn.style.opacity = '1';
			prevShow = true;
		}
		if (index === 5 && isCtaShow === false) {
			cta.style.transitionDelay = '.8s';
			cta.style.opacity = '1';
			isCtaShow = true;
		} else {
			cta.style.transitionDelay = '0s'
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
		var srcs = img.getAttribute('data-src').split(';');
		var imgSrc = '';
		if (parseInt(window.devicePixelRatio) > 1) {
			imgSrc = srcs[1];
			img.style.transform = 'scale(.5)';
		} else {
			imgSrc = srcs[0];
		}
		img.setAttribute('src', imgSrc)
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
		CjsLoader.load(AdobeAn[item.name], item.compositionId, item.id, function (controller, controllerIndex) {
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
	var imgs = document.querySelectorAll('[data-imgs="imgs"] .img');
	var imgtransform = document.querySelectorAll('[data-imgs="imgs"] .imgs');
	var loading = document.getElementById('loading');
	var canvases = swiperContainer.getElementsByTagName('canvas');
	var innerDots = progress.getElementsByClassName('inner-dot');
	var imgTrick = document.querySelector('[data-imgs="imgs"]');
	var canvasTrick = document.getElementById('canvas');
	var legal1s = swiperContainer.querySelectorAll('.legal1 a');
	var legal2 = swiperContainer.querySelector('.legal2 a');
	var prevBtn = swiperContainer.querySelector('.swiper-button-prev');
	var nextBtn = swiperContainer.querySelector('.swiper-button-next');
	// util to controll animations
	var swiperCtr = {
		autoplay: true,
		playing: true,
		timer: [],
		interval: 3500,
		length: 5,
		canLastPlay: true,
		play: function(swiper) {
			var that = this;
			var interval = this.interval;
			var realInterval = 0;
			for(var i = 0; i < this.length; i ++){
				(function(i) {
					realInterval += interval;
					if(i === 0){
						realInterval += 750;
					}
					if(i === 1){
						realInterval += 5750;
					}else if(i === 3){
						realInterval += 1500;
					}else if(i === 4){
						realInterval += 5000;
					}
					that.timer[i] = setTimeout(function() {
						if(!that.autoplay) return;
						swiper.slideTo(i + 1);
					},realInterval);
				})(i);
			}
		},
		pause: function(controllers) {
			this.autoplay = false;
			this.playing = false;
			for(var i = 0;i < this.length; i ++){
				clearTimeout(this.timer[i]);
			}
			for(var i = 0;i < controllers.length;i ++){
				controllers[i].controller.autoPlay = false;
			}
		}
	};
	// var divs = 
	var divImgs = [];
	for (var i = 0; i < imgtransform.length; i++) {
		if (imgtransform[i].nodeName === 'DIV') {
			divImgs.push({
				index: i,
				node: imgtransform[i]
			});
		}
	}
	loadAllAsstes(imgs, anis, function (controllers) {
		controllers[0].controller.play(0);
		window.anibox = controllers[1].controller.root.anibox;
		// show the swiperConatiner and hide loading
		loading.style.opacity = 0;
		setTimeout(function () {
			loading.style.display = 'none';
		}, 500);
		var mySwiper = new Swiper('.swiper-container', {
			width: 970,
			speed: 500,
			navigation: {
				nextEl: '.btn-prev',
				prevEl: '.btn-next',
			},
			towImgActiveIndex: 1,
			on: {
				slideChangeTransitionStart: function () {
					var that = this;
					mySwiper.towImgActiveIndex = 1;
					setTimeout(function () {
						swiperContainer.style.background = colors[that.activeIndex];
						for(var i = 0;i < innerDots.length; i ++){
							var dot = innerDots[i];
							dot.style.background = colors[that.activeIndex];
						}
						show(imgtransform, that.activeIndex, cta, mySwiper.navigation.prevEl, canvases,mySwiper,swiperCtr);
						for (var i = 0; i < controllers.length; i++) {
							var controller = controllers[i].controller;
							controller.pause(0);
						}
						if (!swiperCtr.canLastPlay && that.activeIndex === 5) {
							controllers[that.activeIndex].controller.gotoEnd();
							swiperContainer.classList.add('notransition');
							swiperContainer.classList.remove('notransition');
							progressBackground.classList.add('notransition');
							progressBackground.style.transform = 'translate3d(-' + (100 - (that.activeIndex) * 20) + '%,0px,0px)';
							setTimeout(function () {
								progressBackground.classList.remove('notransition');
							}, 500);
							swiperCtr.canLastPlay = false;
							return;
						}
						progressBackground.style.transform = 'translate3d(-' + (100 - (that.activeIndex) * 20) + '%,0px,0px)';
						controllers[that.activeIndex].controller.play(0);
					});
				},
				slideChangeTransitionEnd: function () {
					if(this.activeIndex === 5){
						swiperCtr.playing = false;
						for(var i = 0;i < controllers.length;i ++){
							controllers[i].autoplay = false;
						}
					}
				}
			},
		});
		mySwiper.prevBtn = prevBtn;
		mySwiper.nextBtn = nextBtn;
		// autoplay
		swiperCtr.play(mySwiper);
		for (var i = 0; i < progressDots.length; i++) {
			var dot = progressDots[i];
			(function (index) {
				dot.addEventListener('click', function () {
					dotCounter(index);
					if(swiperCtr.autoplay){
						swiperCtr.pause(controllers);
					}
					mySwiper.slideTo(index);
				})
			})(i);
		}
		prevBtn.addEventListener('click', function (e) {
			var ev = e || event;
			ev.preventDefault();
			if(mySwiper.activeIndex === 0) return;
			if(!swiperCtr.playing){
				if(mySwiper.activeIndex === 1 || mySwiper.activeIndex === 4){
					if(mySwiper.towImgActiveIndex === 2){
						mySwiper.towImgActiveIndex = 1;
						var firstImg = imgtransform[mySwiper.activeIndex].querySelector('.firstImg');
						var secondImg = imgtransform[mySwiper.activeIndex].querySelector('.secondImg');
						firstImg.style.transitionDelay = '.5s';
						secondImg.style.transitionDelay = '0s'
						secondImg.style.opacity = '0';
						firstImg.style.opacity = '1';
						firstImg.style.zIndex ='1';
						// controllers[mySwiper.activeIndex].controller.pause();
						window.anibox = controllers[mySwiper.activeIndex].controller;
						controllers[mySwiper.activeIndex].controller.play(0);
						// setTimeout(function () {
						// 	secondImg.style.transitionDelay = '0s';
						// }, 500);
					}else {
						mySwiper.towImgActiveIndex = 2;
						mySwiper.slideTo(mySwiper.activeIndex - 1);
					}
	
				}else {
					mySwiper.slideTo(mySwiper.activeIndex - 1);
				}
			}else {
				mySwiper.towImgActiveIndex = 1;
				mySwiper.slideTo(mySwiper.activeIndex - 1);
			}
			if (swiperCtr.autoplay) {
				swiperCtr.pause(controllers);
			}
			
			Enabler.counter('carousel_prev_clicked_c');
			return false;
		});
		nextBtn.addEventListener('click', function (e) {
			var ev = e || event;
			ev.preventDefault();
			if(mySwiper.activeIndex === 5) return;
			
			if(!swiperCtr.playing){
				if(mySwiper.activeIndex === 1 || mySwiper.activeIndex === 4){
					if(mySwiper.towImgActiveIndex === 1){
						mySwiper.towImgActiveIndex = 2;
						var firstImg = imgtransform[mySwiper.activeIndex].querySelector('.firstImg');
						var secondImg = imgtransform[mySwiper.activeIndex].querySelector('.secondImg');
						secondImg.style.transitionDelay = '.5s';
						firstImg.style.transitionDelay = '0s';
						firstImg.style.zIndex ='0';
						firstImg.style.opacity = '0';
						secondImg.style.opacity = '1';
						// controllers[mySwiper.activeIndex].controller.pause();
						window.anibox = controllers[mySwiper.activeIndex].controller;
						controllers[mySwiper.activeIndex].controller.play(170);
						// setTimeout(function () {
						// 	secondImg.style.transitionDelay = '0s';
						// }, 500);
					}else {
						mySwiper.towImgActiveIndex = 1;
						mySwiper.slideTo(mySwiper.activeIndex + 1)
					}
	
				}else {
					mySwiper.slideTo(mySwiper.activeIndex + 1);
				}
			}else {
				mySwiper.towImgActiveIndex = 1;
				mySwiper.slideTo(mySwiper.activeIndex + 1);
			}
			if (swiperCtr.autoplay) {
				swiperCtr.pause(controllers);
			}
			Enabler.counter('carousel_next_clicked_c');
			return false;
		});
		swiperWrapper.addEventListener('click', function () {
			setTimeout(function () {
				Enabler.exit('background_clicked_x');
			}, 50);
			if(swiperCtr.autoplay){
				swiperCtr.pause(controllers);
				swiperCtr.canLastPlay = false;
				mySwiper.slideTo(progressDots.length - 1,20);
				mySwiper.autoplay.stop();
				setTimeout(function () {
					swiperCtr.canLastPlay = true;
				}, 1000);
			}
		});
		function legalExite(e,that) {
			var ev = e || event;
			ev.preventDefault();
			ev.stopPropagation();
			ev.cancelable = true;
			if(swiperCtr.autoplay){
				swiperCtr.pause(controllers);
			}
			that.parentNode.classList.add('out');
			return false;
		}
		function legalMounseter(that) {
			if(that.parentNode.classList.contains('out')){
				that.parentNode.classList.remove('out');
			}
		}
		legal1s[0].addEventListener('click',function(e) {
			legalExite(e,this);
			Enabler.exit('legal_url1_clicked_x');
			return false;
		});
		legal1s[0].addEventListener('mouseenter',function() {
			legalMounseter(this);
		});
		legal1s[1].addEventListener('click',function(e) {
			legalExite(e,this);
			Enabler.exit('legal_url1_clicked_x');
			return false;
		});
		legal1s[1].addEventListener('mouseenter',function() {
			legalMounseter(this);
		});
		legal2.addEventListener('click',function(e) {
			legalExite(e,this);
			Enabler.exit('legal_url2_clicked_x');
			return false;
		});
		legal2.addEventListener('mouseenter',function() {
			legalMounseter(this);
		});
		imgTrick.addEventListener('click',function() {
			setTimeout(function () {
				Enabler.exit('background_clicked_x');
			}, 50);
			if(swiperCtr.autoplay){
				swiperCtr.pause(controllers);
				swiperCtr.canLastPlay = false;
				mySwiper.slideTo(progressDots.length - 1,20);
				mySwiper.autoplay.stop();
				setTimeout(function () {
					swiperCtr.canLastPlay = true;
				}, 1000);
			}
			// if (mySwiper.autoplay.running) {
			// 	swiperCtr.canLastPlay = false;
			// 	mySwiper.slideTo(progressDots.length - 1,20);
			// 	mySwiper.autoplay.stop();
			// 	setTimeout(function () {
			// 		swiperCtr.canLastPlay = true;
			// 	}, 1000);
			// }
		})
		canvasTrick.addEventListener('click',function() {
			setTimeout(function () {
				Enabler.exit('background_clicked_x');
			}, 50);
			if(swiperCtr.autoplay){
				swiperCtr.pause(controllers);
				swiperCtr.canLastPlay = false;
				mySwiper.slideTo(progressDots.length - 1,20);
				mySwiper.autoplay.stop();
				setTimeout(function () {
					swiperCtr.canLastPlay = true;
				}, 1000);
			}
			// if (mySwiper.autoplay.running) {
			// 	swiperCtr.canLastPlay = false;
			// 	mySwiper.slideTo(progressDots.length - 1,20);
			// 	mySwiper.autoplay.stop();
			// 	setTimeout(function () {
			// 		swiperCtr.canLastPlay = true;
			// 	}, 1000);
			// }
		})
		cta.addEventListener('click', function () {
			Enabler.exit('cta_clicked_x');
		});
		document.querySelector('.progress-container .left-icon').addEventListener('click', function () {
			Enabler.exit('background_clicked_x');
		})
		document.querySelector('.progress-container .right-icon').addEventListener('click', function () {
			Enabler.exit('background_clicked_x');
		})
	});
}

function dotCounter(index) {
	switch (index) {
		case 0:
			Enabler.counter('dot1_clicked_c');
			break;
		case 1:
			Enabler.counter('dot2_clicked_c');
			break;
		case 2:
			Enabler.counter('dot3_clicked_c');
			break;
		case 3:
			Enabler.counter('dot4_clicked_c');
			break;
		case 4:
			Enabler.counter('dot5_clicked_c');
			break;
		case 5:
			Enabler.counter('dot6_clicked_c');
	}
}