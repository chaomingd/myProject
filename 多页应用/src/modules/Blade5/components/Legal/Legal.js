export default {
    name: 'Legal',
    props: ['legalData','trackingLabels'],
    created() {
	},
	data(){
        const vm = this;
		return {
			loaded: false,
		};
	},
    components: {
	
	},
    mounted() {
		this.$nextTick(function () {
			$(window).on('resize', () => {
				this.resize();
			});
        });
    },
    methods: {
        initScroll() {
            this.myScroll = new IScroll('#swiper-wrapper', {
                scrollbars: true,
                vScroll: true,
                HScroll: false,
                disablePointer: true,
                disableTouch: false,
                disableMouse: false,
				mouseWheel: true,
            });
			
			$('.legal-content a').on('touchend', e => {
                const href = e.target.href;
                window.open(href, '_blank');
            });
        },
        resize() {
			setTimeout(() => {
				if (this.myScroll){
					if (this.myScroll.wrapperHeight >= this.myScroll.scrollerHeight){
						this.myScroll.mouseWheel = false;
						this.myScroll.enabled = false;
					} else {
						this.myScroll.mouseWheel = true;
						this.myScroll.enabled = true;
					}
					this.myScroll.refresh();
				}
			}, 120);
        },
        showLegal() {
			if (!this.loaded){
				this.initScroll();
				this.loaded = true;
			}
			this.resize();
            this.myScroll.refresh();
			$('.Legal .legal-content').addClass('legalOpen');
			Utils.track(this.trackingLabels.legal);
        },
        hideLegal() {
			$('.Legal .legal-content').removeClass('legalOpen');
			Utils.track(this.trackingLabels.legalClose);
        },
		showLegalContent(callback){
			TweenMax.staggerTo($('.animate-opacity'), 0.5, {
				autoAlpha: 1,
				ratationZ: 0.01,
			}, 0.2, () => {
				if (callback){
					callback();
				}
			});
		},
    },
};
