import axios from 'axios';

export default {
    name: 'Legal',
    props: ['legalData'],
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
			$('.legal .legal-content').addClass('legalOpen');
			Utils.track('ACPC_Light_Promo_Page_Provider_Get_Connected_Legal');
        },
        hideLegal() {
			$('.legal .legal-content').removeClass('legalOpen');
			Utils.track('ACPC_Light_Promo_Page_Provider_Get_Connected_Legal_Close');
        },
    },
};
