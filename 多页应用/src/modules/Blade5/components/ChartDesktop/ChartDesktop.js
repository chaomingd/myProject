import cjsIcon1Id from '../../cjs/icon1';
import cjsIcon2Id from '../../cjs/icon2';
import cjsIcon3Id from '../../cjs/icon3';
import CjsAnim from '../../../../components/CjsAnim/CjsAnim.vue';

export default {
	name: 'ChartDesktop',
	props: ['configData', 'copyData', 'trackingLabels'],
    created() {
    },
    data() {
        return {
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
			$(window).on('resize', function(){
			});
			this.loadAnimate();
		},
        loadAnimate(){
			this.$refs.Icon1[0].initCjs(cjsIcon1Id, aniObjIcon1 => {
				this.cjsIconAnim1 = aniObjIcon1;
				TweenMax.set('.box1 .icon-box .icon', {autoAlpha: 0});
				// this.cjsIconAnim1.play(0, 1, () => {
				// });
				this.$refs.Icon2[0].initCjs(cjsIcon2Id, aniObjIcon2 => {
					this.cjsIconAnim2 = aniObjIcon2;
					TweenMax.set('.box2 .icon-box .icon', {autoAlpha: 0});
					// this.cjsIconAnim2.play(0, 1, () => {
					// });
					this.$refs.Icon3[0].initCjs(cjsIcon3Id, aniObjIcon3 => {
						this.cjsIconAnim3 = aniObjIcon3;
						TweenMax.set('.box3 .icon-box .icon', {autoAlpha: 0});
						// this.cjsIconAnim3.play(0, 1, () => {
							this.playAnimate();
						// });
					});
				});
			});
		},
		playAnimate(){
			this.AnimateTimers = [];
			const { iconLis,textLis } = this.$refs;
			for(let i = 0;i < 3; i++) {
				this.AnimateTimers[i] = setTimeout(() => {
					iconLis[i].setAttribute('active','')
					textLis[i].setAttribute('active','')
					this['cjsIconAnim' + (i + 1)].play(0,1,() => {
						if(i === 2) {
							setTimeout(() => {
								this.playAnimate();
							},100)
						}
					});
				}, 2000 * i)
			}
		},
    },
   
    components: {
		CjsAnim,
    },
};
