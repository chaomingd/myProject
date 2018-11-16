import ScrollMagic from 'scrollmagic'
import throttle from '../../util/throttle'
// import io from 'socket.io-client'
// const socket = io('http://192.168.1.59:3000');

function calcSize() {
  const {
    width,
    height
  } = this.headerImg.getBoundingClientRect();
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
  this.canvas = this.headerImg.getElementsByTagName('canvas')[0];
  this.canvasWidth = 1605;
  this.canvasHeight = 872;
  this.canvasRatio = this.canvasWidth / this.canvasHeight;
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


const controller = new ScrollMagic.Controller();

function udpateScene(scene, scene1, scene2) {
  let bbox, offsetTop, duration, offsetTop_Intro, offset, duration_2, duration_3, offsetTop_s, offsetTop_H;
  bbox = this.header.getBoundingClientRect();
  offsetTop_s = getElementTop(this.subTitle);
  offsetTop_H = getElementTop(this.headerBox)
  if (window.innerWidth > 540) {
    offsetTop = this.header.offsetTop;
    duration = offsetTop + this.header.offsetHeight + 300;
    offset = 118;
    duration_2 = 0;
    duration_3 = 300;
  } else {
    offset = offsetTop_H;
    duration =
      offsetTop_s - offsetTop_H + this.subTitle.getBoundingClientRect().height;
    duration_2 =
      offsetTop_s - getElementTop(this.header_inner) - this.title.getBoundingClientRect().height - 20 / 320 * window.innerWidth;
    duration_3 = offsetTop_s - offsetTop_H - this.headerImg.getBoundingClientRect().height;
  }
  offset *= -1;
  scene.duration(duration);
  scene.offset(offset);
  scene1.duration(duration_2);
  scene1.offset(offset);
  scene2.duration(duration_3);
  scene2.offset(offset);
}


export default function didMount() {
  setCanvasViewPoint.call(this);
  const triggerElement = this.headerImg;
  let bbox, offsetTop, duration, offsetTop_Intro, offset, duration_2, duration_3, offsetTop_s, offsetTop_H;
  bbox = this.header.getBoundingClientRect();
  offsetTop_s = getElementTop(this.subTitle);
  offsetTop_H = getElementTop(this.headerBox)
  if (window.innerWidth > 540) {
    offsetTop = this.header.offsetTop;
    duration = offsetTop + this.header.offsetHeight + 300;
    offset = 118;
    duration_2 = 0;
    duration_3 = 300;
  } else {
    offset = offsetTop_H;
    duration =
      offsetTop_s - offsetTop_H + this.subTitle.getBoundingClientRect().height;
    duration_2 =
      offsetTop_s - getElementTop(this.header_inner) - this.title.getBoundingClientRect().height - 20 / 320 * window.innerWidth;
    duration_3 = offsetTop_s - offsetTop_H - this.headerImg.getBoundingClientRect().height;
  }
  offset *= -1;


  const scene = new ScrollMagic.Scene({
      triggerElement: triggerElement,
      triggerHook: 0,
      duration,
      offset: offset,
    })
    .setPin(triggerElement)
    .addTo(controller)



  const scene1 = new ScrollMagic.Scene({
      triggerElement: triggerElement,
      triggerHook: 0,
      duration: duration_2,
      offset: offset,
    })
    .addTo(controller)

  const scene2 = new ScrollMagic.Scene({
      triggerElement,
      triggerHook: 0,
      duration: duration_3,
      offset: offset
    })
    .on('progress', (e) => {
      if (this.cjs.aniObj) {
        this.cjs.aniObj.playRato(e.progress);
      }
    })
    .addTo(controller)

  if (window.innerWidth < 540) {
    if (!this.isPin) {
      scene1.setPin(this.title);
      this.isPin = true;
    }
  }
  if (window.innerWidth > 540) {
    if (!this.isPin1) {
      scene2.setPin(this.header_inner);
      this.isPin1 = true;
    }
  }
  window.addEventListener('resize', () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      calcSize.call(this);
      udpateScene.call(this, scene, scene1, scene2);
      if (window.innerWidth < 540) {
        if (!this.isPin) {
          scene1.setPin(this.title);
          this.isPin = true;
        }
        scene2.removePin(true);
        this.isPin1 = false;
      } else {
        this.isPin = false;
        if (!this.isPin1) {
          scene2.setPin(this.header_inner);
          this.isPin1 = true;
        }
        scene1.removePin(this.title);
      }
    }, 500)
  })
}
