import { IntersectionObserver } from 'spaniel';
import compositionIds from '../../cjsAnims';

function initObserver() {
		const visibleThreshold = this.triggerPoint;
    const threshold = [0.0, visibleThreshold, 1.0];

    const childObserver = new IntersectionObserver(
        entries => {
						const entry = entries[0];
            if (entry.intersectionRatio >= visibleThreshold) {
							if(!this.cjsCon.getAttribute('active')){
								this.cjsCon.setAttribute('active','active');
								if (this.aniObj) {
									if (this.aniObj.innerRender) this.aniObj.play();
									else this.aniObj.play(0);
								}
							}
                
            } else if (entry.intersectionRatio <= 0 || entry.intersectionRatio >= 1) {
							this.cjsCon.removeAttribute('active');
                if (this.aniObj) {
                    if (this.aniObj.innerRender) this.aniObj.pause();
                    else this.aniObj.pause(0);
                }
            }
        }, {
            threshold,
        },
    );
    childObserver.observe(this.cjsCon);
}

export default function didMount() {
    CjsLoader.load(compositionIds[this.cjsName], this.cjsCon, aniObj => {
        this.aniObj = aniObj;
        this.aniObj.innerRender = this.innerRender;
        this.aniObj.pause(0);
    });
    if (!this.props.isControl) {
        initObserver.call(this);
    }
}