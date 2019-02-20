import axios from 'axios';

/* Legal Start */
import Legal from '../Legal/Legal.vue';
/* Legal End */

/* Loading Start */
import Loading from '../Loading/Loading.vue';
/* Loading End */

/* Notes Start */
import Notes from '../Notes/Notes.vue';
/* Notes End */

import cjsComputerId from '../../cjs/computer';
import CjsAnim from '../../../../components/CjsAnim/CjsAnim.vue';

const MAX_WIDTH = 1464;
const BREAKPOINT = 767;
const version = 'V4';
const panelName = 'Header';
/* use css do animation */
const { stagger} = window.Utils;
export default {
    name: 'App',
    created() {
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

			cjsComputerAnim: null,

			allImageLoaded: false,
			
            isDataLoaded: false,
			isMounted: false,

			isSamsungNative: window.platform.isSamsungNative,
			isUc: window.platform.isUc,
        };
    },
    mounted() {
        window.addEventListener('message', this.messageHandler);
        window.addEventListener('resize', this.resizeHandler);
        this.$nextTick(function () {
            this.isMounted = true;
            this.initApp();
				});
				$(window).bind('load', () => {
					console.log(this.trackingLabels.load);
					Utils.trackPreview(this.trackingLabels.load);
				});
	},
    methods: {
        initApp() {
			const self = this;
			if (!this.isMounted || !this.isDataLoaded) return;
			this.outPutVersion();

			if (window.parent === window){
				$('html').addClass('alone-pre');
			}
			
			self.resizeWeb();
            $(window).on('resize', function () {
                self.resizeWeb();
			});
			
			

			if (this.$refs){
				this.$refs.LoadingCom.initImage(() => {
					// Image loaded
					this.allImageLoaded = true;
				});
				this.$refs.Computer.initCjs(cjsComputerId, aniObjComputer => {
					this.cjsComputerAnim = aniObjComputer;
					this.cjsComputerAnim.pause(1);
					setTimeout(() => {
						self.startTextAnimate();
					}, 500);
					// this.cjsComputerAnim.play(0, 1, () => {
					// });
				});
			}
		},
		outPutVersion() {
			console.log(`${panelName} version: ${version}`);
		},
        startTextAnimate() {
			const self = this;
			stagger([$('.Header .text-box1'), $('.Header .text-box2'), $('.Header .chip-box')],.1)
			stagger([$('.Header .animate'), $('.Header .text-box3')],.1,() => {
				setTimeout(() => {
				self.cjsComputerAnim.play(0, 1);
					stagger([$('.Header .logo-retailer')],0.5);
				},600);
			})
        },
        messageHandler(e){
            const type = e.data.type;
            if (type === 'hasScrollBar') {
                if (e.data.value){
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
			if (window.parent === window){
				const scrollWidth = this.hasScrollBar() ? 15 : 0;
				const $container = $('.Header');
				const panelSizeData = {
					desktopScale: 1200 / 600,
					mobileScale: 414 / 600,
				};

				// fixed ie calculation bug
				for (let j = 0; j < 2; j++){
					let bWidth = document.body.clientWidth;
					if (bWidth > MAX_WIDTH) bWidth = MAX_WIDTH;
					
					let viewHeight = bWidth + scrollWidth > BREAKPOINT ? bWidth / panelSizeData.desktopScale >> 0 : bWidth / panelSizeData.mobileScale >> 0;
					if (bWidth >= 1200){
						viewHeight = 600;
					}
					$container.height(viewHeight);
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

		/* Loading Start */
		Loading,
		/* Loading End */

		/* Notes Start */
		Notes,
		/* Notes End */

		CjsAnim,
    },
    watch:{
        
    },
};
