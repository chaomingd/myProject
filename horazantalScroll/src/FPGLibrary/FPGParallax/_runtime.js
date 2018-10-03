import ScrollMagic from 'scrollmagic';
const controller = new ScrollMagic.Controller();

function updatePosition() {
  if (this.durationX) this.targetX += (this.progressDx - this.targetX) * this.props.ease;
  if (this.durationY) this.targetY += (this.progressDy - this.targetY) * this.props.ease;
  this.animContainer.lastChild.style.transform = `translate(${this.props.startX -
    this.targetX}%, ${this.props.startY - this.targetY}%)`;
  requestAnimationFrame(this.updatePosition);
}

export default function didMount() {
  this.durationX = 0;
  this.durationY = 0;
  this.targetX = 0;
  this.targetY = 0;
  this.progressDx = 0;
  this.progressDy = 0;
  this.isUpdating = false;
  this.updatePosition = updatePosition.bind(this);
  this.animContainer.lastChild.style.transform = `translate(${this.props.startX}%, ${
    this.props.startY
  }%)`;
  this.durationY = this.props.startY - this.props.endY;
  this.durationX = this.props.startX - this.props.endX;

  const scene = new ScrollMagic.Scene({
    triggerElement: this.animContainer,
    triggerHook: this.props.triggerPoint,
    duration: window.innerHeight - 118,
  }).on('progress', e => {
    if (this.durationX) this.progressDx = this.durationX * e.progress;
    if (this.durationY) this.progressDy = this.durationY * e.progress;
    if (!this.isUpdating) {
      this.isUpdating = true;
      this.updatePosition();
    }
  });
  scene.addTo(controller);
}
