import ScrollMagic from 'scrollmagic'
import throttle from '../../util/throttle'
import Platform from 'joshua-platform'


function calcSize() {
	this.canvasWidth = 1605;
	this.canvasHeight = 872;
	this.canvasRatio = this.canvasWidth / this.canvasHeight;
	if(window.innerWidth < 540) {
		this.canvasRatio = 1;
	}
  const {
    width,
    height
  } = this.fullImg_T.getBoundingClientRect();
  const ratio = width / height;
	let targetWidth;
	
  if (ratio > this.canvasRatio) {
    targetWidth = width;
  } else {
    targetWidth = this.canvasWidth * height / this.canvasHeight;
  }
  if (this.canvas) this.canvas.style.width = `${targetWidth}px`;
}


function setCanvasViewPoint() {
    this.canvas = this.fullImg_T.getElementsByTagName('canvas')[0];
    calcSize.call(this);
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

let controller = new ScrollMagic.Controller();

	
function udpateScene(scene1, scene2,scene3) {
	let triggerHook,bbox_s,offsetTop_f,offsetTop_s,offsetTop_FI,duration,duration_2,offset,distance,duration_3,offsetTop_t;
	triggerHook = 118 / window.innerHeight;
	offsetTop_f = getElementTop(this.fullContent);
	offsetTop_s = getElementTop(this.subTextBox);
	offsetTop_FI = getElementTop(this.fullImg);
	offsetTop_t = getElementTop(this.title)
	this.section = document.getElementById('section');
	if(window.innerWidth > 540) {
		bbox_s = this.subTextBox.getBoundingClientRect();
		duration = offsetTop_s - offsetTop_f + bbox_s.height;
		distance = this.fullContent.getBoundingClientRect().height * 1 / 3;
		duration_2 = offsetTop_s - offsetTop_f - distance; // reach 2/3 point
		duration_3 = offsetTop_s - offsetTop_f - this.fullContent.getBoundingClientRect().height;
		offset = 0;
	}else {
		offset = offsetTop_FI - offsetTop_f+35/320*window.innerWidth;
		// offset = window.innerHeight - 118 - this.fullImg_T.getBoundingClientRect().height;
		duration = offsetTop_s - offsetTop_FI + this.subTextBox.getBoundingClientRect().height + 10/320*window.innerWidth;
		duration_2 = offsetTop_s - offsetTop_f - this.title.getBoundingClientRect().height - 20/320*window.innerWidth;
		duration_3 = offsetTop_s - offsetTop_FI - this.fullImg_T.getBoundingClientRect().height;
	}
	offset *= -1;
	scene1.offset(offset);
	scene1.duration(duration);
	scene1.triggerHook(triggerHook);
	scene2.offset(offset);
	scene2.duration(duration_2);
	scene2.triggerHook(triggerHook);
	scene3.triggerHook(triggerHook)
	scene3.duration(duration_3)
	scene3.offset(offset)
}



export default function didMount() {
	setCanvasViewPoint.call(this);
	let triggerElement = this.fullImg;
	let triggerHook,bbox_s,offsetTop_f,offsetTop_s,offsetTop_FI,duration,duration_2,offset,distance,duration_3,offsetTop_t;
	triggerHook = 118 / window.innerHeight;
	offsetTop_f = getElementTop(this.fullContent);
	offsetTop_s = getElementTop(this.subTextBox);
	offsetTop_FI = getElementTop(this.fullImg);
	offsetTop_t = getElementTop(this.title)
	this.section = document.getElementById('section');
	if(window.innerWidth > 540) {
		bbox_s = this.subTextBox.getBoundingClientRect();
		duration = offsetTop_s - offsetTop_f + bbox_s.height;
		distance = this.fullContent.getBoundingClientRect().height * 1 / 3;
		duration_2 = offsetTop_s - offsetTop_f - distance; // reach 2/3 point
		duration_3 = offsetTop_s - offsetTop_f - this.fullContent.getBoundingClientRect().height;
		offset = 0;
	}else {
		offset = offsetTop_FI - offsetTop_f+35/320*window.innerWidth;
		// offset = window.innerHeight - 118 - this.fullImg_T.getBoundingClientRect().height;
		duration = offsetTop_s - offsetTop_FI + this.subTextBox.getBoundingClientRect().height + 10/320*window.innerWidth;
		duration_2 = offsetTop_s - offsetTop_f - this.title.getBoundingClientRect().height - 20/320*window.innerWidth;
		duration_3 = offsetTop_s - offsetTop_FI - this.fullImg_T.getBoundingClientRect().height;
	}
	offset *= -1;
	let scene1 = new ScrollMagic.Scene({
			triggerElement,
			triggerHook,
			offset,
			duration,
		})
		.setPin(this.fullImg_T)
		.addTo(controller)

	const FullImgThrottled = throttle((e) => {
		if(Platform.isFirefox){
			return;
		}
		this.subTextAni.style.transform = `translateY(${(1- e.progress)*70}%)`;
	},50,{leading: false});
	
	let scene2 = new ScrollMagic.Scene({
			triggerElement,
			triggerHook,
			offset,
			duration: duration_2,
		})
		.on('progress', e => {
			if(window.innerWidth > 853) {
				FullImgThrottled(e);
			}
		})
		.setPin(this.title)
		.addTo(controller)

	let scene3 = new ScrollMagic.Scene({
		triggerElement: this.fullImg,
		triggerHook: triggerHook,
		duration: duration_3,
		offset,
	})
	.on('progress',(e) => {
		if(this.cjs.aniObj) {
			this.cjs.aniObj.playRato(e.progress);
		}
	})
	.addTo(controller)
	window.addEventListener('resize', () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(()=>{
			calcSize.call(this);
			udpateScene.call(this, scene1, scene2,scene3)
		},20)
	})
}