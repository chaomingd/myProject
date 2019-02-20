import axios from 'axios';
/* Legal Start */
import Legal from '../Legal/Legal.vue';
/* Legal End */

/* Notes Start */
import Notes from '../Notes/Notes.vue';
/* Notes End */

const MAX_WIDTH = 1464;
const BREAKPOINT = 767;

const version = 'V4';
const panelName = 'Blade2';

/* use css do animation */
const { stagger, removeAttr} = window.Utils;
export default {
    name: 'App',
    created() {
			if(navigator.userAgent.indexOf('UCBrowser') > -1){
				// socket.emit('message',navigator.userAgent)
				// fix ucBrowser svg font bug
				document.documentElement.setAttribute('uc','')
			}
        axios.get(require('./../../data/config.txt'))
            .then(response => {
				if (typeof response.data === 'string'){
					throw new Error(`there are some errors in ${response.request.responseURL}`);
				}
                this.configData = response.data.info;

                this.trackingLabels = this.configData.trackingLabels;
				window.moduleName = this.configData.moduleName;
				
                axios.get(require('./../../data/copy.txt'))
                    .then(response => {
						if (typeof response.data === 'string'){
							throw new Error(`there are some errors in ${response.request.responseURL}`);
						}
                        this.copyData = response.data.info;
                        this.legalData = this.copyData.legal;
                        this.legalData.trackingLabels = this.trackingLabels;

                        this.$nextTick(function () {
                            this.isDataLoaded = true;
                            this.initApp();
                        });
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    },
    data() {
        return {
            configData: null,
            copyData: null,
			legalData: null,
			trackingLabels: null,

            isDataLoaded: false,
            isMounted: false,
        };
    },
    mounted() {
        window.addEventListener('message', this.messageHandler);
        window.addEventListener('resize', this.resizeHandler);
        this.$nextTick(function () {
            this.isMounted = true;
            this.initApp();
        });
    },
    methods: {
        initApp() {
            const self = this;
            if (!this.isMounted || !this.isDataLoaded) return;
            this.outPutVersion();
            if (window.parent === window) {
                $('html').addClass('alone-pre');
            }

            self.resizeWeb();
            $(window).on('resize', function () {
                self.resizeWeb();
            });
			
			$(window).bind('load', () => {
				console.log(this.trackingLabels.load);
				Utils.trackPreview(this.trackingLabels.load);
			});
				$('.Blade2').imageLoader({
					delay: 0,
				}).on('loaded', () => {
						TweenMax.delayedCall(1, this.startTextAnimate);
				});
        },
        outPutVersion() {
			console.log(`${panelName} version: ${version}`);
		},
        startTextAnimate() {
			const self = this;
			stagger([$('.Blade2 .left-box .headline'),$('.Blade2 .left-box .hardware-box'),$('.Blade2 .left-box .chip')],.1);
				stagger($('.Blade2 .right-box .text-box'),.1,() => {
					setTimeout(() => {
						removeAttr([
								$('.Blade2 .left-box .headline'),
								$('.Blade2 .left-box .hardware-box'),
								$('.Blade2 .left-box .chip'),
								$('.Blade2 .right-box .text-box')
						],() => {
							setTimeout(() => {
								self.startTextAnimate();
							},500)
						})
					},7500);
				});
        },
        messageHandler(e) {
            const type = e.data.type;
            if (type === 'hasScrollBar') {
                if (e.data.value) {
                    $('html').addClass('hasScrollBar');
                    $('html').removeClass('noScrollBar');
                } else {
                    $('html').addClass('noScrollBar');
                    $('html').removeClass('hasScrollBar');
                }
            } else if (type === 'rtl') {
                if (e.data.value) $('html').addClass('rtl');
            } else if (type === 'desktopDouble') {
				if (e.data.value) $('html').addClass('hasDesktopDouble');
            } else if (type === 'mobileDouble') {
                if (e.data.value) $('html').addClass('hasMobileDouble');
            }
        },
        resizeWeb() {
            if (window.parent === window) {
                const scrollWidth = this.hasScrollBar() ? 15 : 0;
                const $container = $('.Blade2');
                const panelSizeData = {
                    desktopScale: 1200 / 600,
                    mobileScale: 414 / 600,
                };
				let num = 1;

                // fixed ie calculation bug
                for (let j = 0; j < 2; j++) {
                    let bWidth = document.body.clientWidth;
                    if (bWidth > MAX_WIDTH) bWidth = MAX_WIDTH;

                    let viewHeight = bWidth + scrollWidth > BREAKPOINT ? bWidth / panelSizeData.desktopScale >> 0 : bWidth / panelSizeData.mobileScale >> 0;
					if (bWidth + scrollWidth > BREAKPOINT){
						num = 1;
					} else {
						num = 1;
					}
                    if (bWidth >= 1200) {
                        viewHeight = 600;
                    }
                    $container.height(viewHeight * num);
                }
            }
        },
        hasScrollBar() {
            if (window.innerWidth === document.body.clientWidth) return false;
            return true;
        },
    },

    components: {
        /* Legal Start */
        Legal,
        /* Legal End */

        /* Notes Start */
        Notes,
        /* Notes End */
    },
    watch: {

    },
};
