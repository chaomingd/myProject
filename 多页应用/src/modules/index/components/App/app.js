import axios from 'axios';

const MAX_WIDTH = 1464;
const BREAKPOINT = 767;
export default {
    name: 'App',
    created() {
        axios.get(require('../../data/panels-config.txt')).then(response => {
			if (typeof response.data === 'string'){
				throw new Error(`there are some errors in ${response.request.responseURL}`);
			}
			const rootData = response.data.info;
			this.panels = [];
			for (let i = 0; i < rootData.length; i++){
				if (rootData[i].visible){
					this.panels.push(rootData[i]);
				}
			}
            // this.panels = response.data.info;
            if (URL_TYPE !== 'default') {
                for (let i = 0; i < this.panels.length; i++) {
					if (this.panels[i].url === '' && this.panels[i].url.length === 0){
						this.panels[i].url = '';
					} else {
						this.panels[i].url = `${this.panels[i].url}.html`;
					}
                }
            }
            this.$nextTick(() => {
                this.isDataLoaded = true;
                this.initApp();
            });
        }).catch(error => {
			console.error(error);
        });
    },
    data() {
        return {
            panels: null,
            isDataLoaded: false,
            isMounted: false,
        };
    },
    components: {
    },
    mounted() {
        window.addEventListener('message', this.messageHandler);
        this.$nextTick(() => {
            this.isMounted = true;
            this.initApp();
        });
    },
    methods: {
        initApp() {

            if (this.isMounted && this.isDataLoaded) {
				// need two time
                this.resizeWeb();
                this.resizeWeb();
                this.initEvent();
                $('.main-story').addClass('loaded');
            }
        },
        initEvent() {
            const self = this;
            $(window).on('resize', function () {
                self.resizeWeb();
            });
        },
        resizeWeb() {
			const self = this;
            this.$refs.modulePanels.map((modulePanle, index) => {
				const scrollWidth = self.hasScrollBar() ? 15 : 0;
                const $modulePanle = $(modulePanle);
				const $iframe = $modulePanle.find('iframe');
				const panelSizeData = {
                    desktopScale: 1200 / 600,
                    mobileScale: 414 / 600,
				};
				const numDesktop = $modulePanle.data('desktop-double') ? 2 : 1;
				const numMobile = $modulePanle.data('mobile-double') ? 2 : 1;
				let num = 1;

				// fixed ie calculation bug
				for (let j = 0; j < 2; j++){
					let bWidth = document.body.clientWidth;
					if (bWidth > MAX_WIDTH) bWidth = MAX_WIDTH;

					if ($iframe.data('type') === 'video' && ((window.platform.isDesktop || window.platform.isNexus7 || window.platform.isGalaxyTab) && bWidth + scrollWidth <= BREAKPOINT)){
						console.log('video')

						// $iframe.width(bWidth);
						// $iframe.height(500 * numMobile);
						// $modulePanle.height(500 * numMobile);
						$iframe.width(bWidth);
						$iframe.height(bWidth / 2);
						if(window.innerWidth < 1200) {
							$modulePanle.height(bWidth / 2);
						}else {
							$iframe.width(bWidth);
							$iframe.height(viewHeight * num);
							$modulePanle.height(viewHeight * num);
						}
					} else {
						let viewHeight = bWidth + scrollWidth > BREAKPOINT ? bWidth / panelSizeData.desktopScale >> 0 : bWidth / panelSizeData.mobileScale >> 0;
						if (bWidth + scrollWidth > BREAKPOINT){
							num = numDesktop;
						} else {
							num = numMobile;
						}
						if (bWidth >= 1200){
							viewHeight = 600;
						}
					//  for video
					
					if($iframe.data('type') === 'video'){
						console.log('video')
						$iframe.width(bWidth);
						$iframe.height(bWidth / 2);
						if(window.innerWidth < 1200) {
							$modulePanle.height(bWidth / 2);
						}else {
							$iframe.width(bWidth);
							$iframe.height(viewHeight * num);
							$modulePanle.height(viewHeight * num);
						}
					}else {
						$iframe.width(bWidth);
						$iframe.height(viewHeight * num);
						$modulePanle.height(viewHeight * num);
					}
					}
						
				}
            });
        },
        hasScrollBar() {
            if (window.innerWidth === document.body.clientWidth) return false;
            return true;
        },
        messageHandler(e) {
            // const type = e.data.type;
        },
        iframeLoaded(index) {
			const panel = this.$refs.iframePanels[index];
			const desktopDoubelFlag = $(panel).data('desktop-double');
			const mobileDoubelFlag = $(panel).data('mobile-double');
            panel.contentWindow.postMessage({type: 'hasScrollBar', value: this.hasScrollBar()}, '*');
            panel.contentWindow.postMessage({
                type: 'rtl',
                value: document.documentElement.classList.contains('rtl'),
			}, '*');
			
			if (desktopDoubelFlag){
				panel.contentWindow.postMessage({
					type: 'desktopDouble',
					value: true,
				}, '*');
			}
			if (mobileDoubelFlag){
				panel.contentWindow.postMessage({
					type: 'mobileDouble',
					value: true,
				}, '*');
			}
		},
    },
    watch: {

    },

};
