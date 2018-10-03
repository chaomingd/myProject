
import { IntersectionObserver } from 'spaniel';
const visibleThreshold = 0.2;
const threshold = [0.0, visibleThreshold, 1.0];

export default function didMount() {
  const self = this;
  this.parentLocked = true; 
  const observeraEle = this.observeraEle;

    const childObserver = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.intersectionRatio >= visibleThreshold) {
          entry.target.setAttribute('data-active', '');
        } else if (entry.intersectionRatio <= 0) {
          entry.target.removeAttribute('data-active');
        }
      	},
      {
        threshold,
      },
    );
    childObserver.observe(observeraEle);
}
