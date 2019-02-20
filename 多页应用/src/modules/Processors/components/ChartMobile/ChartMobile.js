import {
    swiper,
    swiperSlide,
} from 'vue-awesome-swiper';

export default {
    name: 'ChartMobile',
	props: ['configData', 'copyData', 'trackingLabels'],
    created() {
    },
    data() {
        const context = this;
        return {
            swiperOption: {
                initialSlide: 0,
				// effect : 'fade',
				observer: true,
				observeParents: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					clickableClass : 'my-pagination-clickable',
				},
                on: {
                    init(){
                    },
                    slideChange(){
						// context.swiperChanged = true;
                        TweenMax.killTweensOf(context.lightAnimate);
						if (context.$refs.swiperObj && context.$refs.swiperObj.swiper){
							context.lightAnimate();
                        }
                    },
                    touchEnd(){
                        // context.swiperClicked = true;
                    },
                    tap() {
                        // context.swiperClicked = true;
                    },
                    slideNextTransitionStart(){
                        setTimeout(function(){
                            // context.swiperClicked = false;
                            // context.swiperChanged = false;
                        }, 50);
                    },
                    slidePrevTransitionStart(){
                        setTimeout(function(){
                            // context.swiperClicked = false;
                            // context.swiperChanged = false;
                        }, 50);
                    },
                },
			},
			timer: null,
			count: 0,
        };
    },
    mounted() {
        this.$nextTick(function () {
			this.initApp();
        });
	},
	computed: {
	},
    methods: {
        initApp() {
			const self = this;
			
			$(window).on('resize', function(){
			});

			$('.ChartMobile .swiper-pagination .swiper-pagination-bullet').each(function(index){
				$(this).on('click', function(){
                    Utils.track(`${self.trackingLabels.dotBtn}${self.trackingLabels.labels[index]}`);
				});
			});

		},
        lightAnimate(){
			const self = this;
			TweenMax.killTweensOf(self.lightAnimate);
			if (this.$refs.swiperObj && this.$refs.swiperObj.swiper){
				if (this.$refs.swiperObj.swiper.realIndex === 1){
					TweenMax.set($('.ChartMobile .swiper-slider2 .light-box .light'), {
						x: '-140%',
						y: '100%',
						rotationZ: -45,
						scaleY: 2,
					});
					TweenMax.staggerTo($('.ChartMobile .swiper-slider2 .light-box .light'), 0.6, {
						x: '250%',
						y: '-80%',
						rotationZ: -45,
						scaleY: 2,
					}, 0.3);
					setTimeout(() => {
						self.showHookMob();
					},1000)
				} else if (this.$refs.swiperObj.swiper.realIndex === 2){
                    TweenMax.set($('.ChartMobile .swiper-slider3 .light-box .light'), {
						x: '-140%',
						y: '100%',
						rotationZ: -45,
						scaleY: 2,
					});
					TweenMax.staggerTo($('.ChartMobile .swiper-slider3 .light-box .light'), 0.6, {
						x: '250%',
						y: '-80%',
						rotationZ: -45,
						scaleY: 2,
					}, 0.3, () => {
						TweenMax.delayedCall(3, self.lightAnimate);
					});
                }
			}
        },
        showHookMob(){
            const self = this;
            const chipData = [[], [], []];
            const featuresData = this.configData.leftSideInfo.chartsInfo.features;
            for (let i = 0; i < featuresData.length; i++){
                for (let j = 0; j < featuresData[i].options.length; j++){
                    if (featuresData[i].options[j] === 1){
                        chipData[j].push($('.ChartMobile .swiper-slider2 ul li').eq(i).find('.hook').eq(j).find('img'));
                    }
                }
            }
            TweenMax.to($('.ChartMobile .swiper-slider2 ul li img'), .3, {
							autoAlpha: 0,
							onComplete: () => {
								TweenMax.staggerTo(chipData, 0.6, {
									autoAlpha: 1,
								}, 0.2, () => {
										TweenMax.delayedCall(3, self.lightAnimate);
								});
							}
						});
		},
        showTrack(type){
            if (type === 0){
                Utils.track(`${this.trackingLabels.backBtn}${this.$refs.swiperObj.swiper.realIndex + 1}_9thGenCore`);
            } else {
                Utils.track(`${this.trackingLabels.nextBtn}${this.$refs.swiperObj.swiper.realIndex + 1}_9thGenCore`);
            }
        },
    },
   
    components: {
        swiper,
		swiperSlide,
    },
};
