import {
	swiper,
	swiperSlide,
} from 'vue-awesome-swiper';

import cjsIcon1Id from '../../cjs/icon1';
import cjsIcon2Id from '../../cjs/icon2';
import cjsIcon3Id from '../../cjs/icon3';
import CjsAnim from '../../../../components/CjsAnim/CjsAnim.vue';

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
											// TweenMax.killTweensOf(context.lightAnimate);
					if (context.$refs.swiperObj && context.$refs.swiperObj.swiper){
						context.playAnimate(context.$refs.swiperObj.swiper.realIndex);
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
		
					cjsIconAnim1: null,
					cjsIconAnim2: null,
					cjsIconAnim3: null,
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
				// window.Utils.track(`18CY3_ExpPage_Retail_Gaming_DT_Processor_${self.$refs.swiperObj.swiper.activeIndex + 1}_Breadcrumb_${index + 1}`);
									Utils.track(`${self.trackingLabels.dotBtn}${self.trackingLabels.labels[index]}`);
			});
		});
		this.loadAnimate();
	},
			loadAnimate(){
		this.$refs.Icon1[0].initCjs(cjsIcon1Id, aniObjIcon1 => {
			this.cjsIconAnim1 = aniObjIcon1;
			TweenMax.set('.ChartMobile .swiper-container .swiper-wrapper .swiper-slider1 .icon-box .icon', {autoAlpha: 0});
			this.cjsIconAnim1.play(0, 1, () => {
			});
			this.$refs.Icon2[0].initCjs(cjsIcon2Id, aniObjIcon2 => {
				this.cjsIconAnim2 = aniObjIcon2;
				this.cjsIconAnim2.pause(0);
				this.$refs.Icon3[0].initCjs(cjsIcon3Id, aniObjIcon3 => {
					this.cjsIconAnim3 = aniObjIcon3;
					this.cjsIconAnim3.pause(0);
				});
			});
		});
	},
	playAnimate(index){
		if (index === 0){
			this.cjsIconAnim2.pause(0);
			this.cjsIconAnim3.pause(0);
			TweenMax.set('.ChartMobile .swiper-container .swiper-wrapper .swiper-slider1 .icon-box .icon', {autoAlpha: 0});
			this.cjsIconAnim1.play(0, 1, () => {
			});
		} else if (index === 1){
			this.cjsIconAnim1.pause(0);
			this.cjsIconAnim3.pause(0);
			TweenMax.set('.ChartMobile .swiper-container .swiper-wrapper .swiper-slider2 .icon-box .icon', {autoAlpha: 0});
			this.cjsIconAnim2.play(0, 1, () => {
			});
		} else {
			this.cjsIconAnim2.pause(0);
			this.cjsIconAnim1.pause(0);
			TweenMax.set('.ChartMobile .swiper-container .swiper-wrapper .swiper-slider3 .icon-box .icon', {autoAlpha: 0});
			this.cjsIconAnim3.play(0, 1, () => {
			});
		}
	},
			showTrack(type){
					if (type === 0){
							Utils.track(`${this.trackingLabels.backBtn}${this.$refs.swiperObj.swiper.realIndex + 1}_Overclocking`);
					} else {
							Utils.track(`${this.trackingLabels.nextBtn}${this.$refs.swiperObj.swiper.realIndex + 1}_Overclocking`);
					}
			},
	},
 
	components: {
			swiper,
	swiperSlide,
	CjsAnim,
	},
};
