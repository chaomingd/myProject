import axios from 'axios';

/* ImageBg Start */
import ImageBg from '../ImageBg/ImageBg.vue';
/* ImageBg End */

/* Legal Start */
import Legal from '../Legal/Legal.vue';
/* Legal End */

/* Notes Start */
import Notes from '../Notes/Notes.vue';
/* Notes End */

const MAX_WIDTH = 1464;
const BREAKPOINT = 767;
export default {
    name: 'App',
    created() {
        axios.get(require('./../../data/config.txt'))
            .then(response => {
				if (typeof response.data === 'string'){
					throw new Error(`there are some errors in ${response.request.responseURL}`);
				}
                this.configData = response.data.info;
				axios.get(require('./../../data/copy.txt'))
					.then(response => {
						if (typeof response.data === 'string'){
							throw new Error(`there are some errors in ${response.request.responseURL}`);
						}
						this.copyData = response.data.info;
						this.legalData = this.copyData.legal;

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

			if (window.parent === window){
				$('html').addClass('alone-pre');
			}

			self.resizeWeb();
            $(window).on('resize', function () {
                self.resizeWeb();
			});
			
			Utils.trackPreview('ACPC_Light_Promo_Page_Provider_Get_Connected');
			

			// $('.Retailer').imageLoader({
			// 	delay: 0,
			// }).on('progress', (evt, progress) => {
			// }).on('loaded', () => {
			// });
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
				const $container = $('.Retailer');
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
		/* ImageBg Start */
		ImageBg,
		/* ImageBg End */

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
