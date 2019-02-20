import axios from 'axios';

/* Background Start */
import Background from '../Background/Background.vue';
/* Background End */

/* ChartDesktop Start */
import ChartDesktop from '../ChartDesktop/ChartDesktop.vue';
/* ChartDesktop End */

/* ChartMobile Start */
import ChartMobile from '../ChartMobile/ChartMobile.vue';
/* ChartMobile End */

/* Legal Start */
import Legal from '../Legal/Legal.vue';
/* Legal End */

/* Notes Start */
import Notes from '../Notes/Notes.vue';
/* Notes End */

const MAX_WIDTH = 1464;
const BREAKPOINT = 767;
const version = 'V4';
const panelName = 'Processors';
export default {
    name: 'App',
    created() {
        axios.get(require('./../../data/config.txt'))
            .then(response => {
                this.configData = response.data.info;
				
                window.moduleName = this.configData.moduleName;
				this.trackingLabels = this.configData.trackingLabels;

				axios.get(require('./../../data/copy.txt'))
					.then(response => {
						this.copyData = response.data.info;
						this.legalData = this.copyData.legal;
                        this.legalData.trackingLabels = this.trackingLabels;

						this.$nextTick(function () {
							this.isDataLoaded = true;
							this.initApp();
						});
					})
					.catch(error => {
						console.log(error);
					});
            })
            .catch(error => {
                console.log(error);
            });
    },
    data() {
        return {
            configData: null,
			copyData: null,
			trackingLabels: null,
			legalData: null,
            isDataLoaded: false,
			isMounted: false,
        };
    },
    mounted() {
        window.addEventListener('message', this.messageHandler);
        this.$nextTick(function () {
            this.isMounted = true;
            this.$nextTick(function () {
                this.initApp();
            });
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

			$(window).bind('load', () => {
				console.log(this.trackingLabels.load);
				Utils.trackPreview(this.trackingLabels.load);
			});
		},
		outPutVersion() {
			console.log(`${panelName} version: ${version}`);
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
            } else if (type === 'double') {
                if (e.data.value) $('html').addClass('hasDouble');
            }
        },
        resizeWeb() {
			if (window.parent === window){
				const scrollWidth = this.hasScrollBar() ? 15 : 0;
				const $container = $('.Processors');
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
		/* Background Start */
		Background,
		/* Background End */

		/* ChartDesktop Start */
		ChartDesktop,
		/* ChartDesktop End */
		
		/* ChartMobile Start */
		ChartMobile,
		/* ChartMobile End */

		/* Legal Start */
        Legal,
		/* Legal End */

		/* Notes Start */
		Notes,
		/* Notes End */
    },
    watch:{
        
    },
};
