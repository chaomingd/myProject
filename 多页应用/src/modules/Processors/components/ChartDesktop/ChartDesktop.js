/* use css do animation */
const { stagger, removeAttr} = window.Utils;
export default {
	name: 'ChartDesktop',
	props: ['configData', 'copyData', 'trackingLabels'],
    created() {
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

			this.startLight();
		},
        startLight(){
						const self = this;
						removeAttr($('.ChartDesktop .content-box .light-box .light'))
						setTimeout(() => {
							stagger($('.ChartDesktop .content-box .light-box .light'),.3)
						},100)
						setTimeout(() => {
							self.showHook();
						},1500)
        },
        showHook(){
						const self = this;
						if(!this.chipData) {
							this.chipData = [[], [], []];
							const featuresData = this.configData.leftSideInfo.chartsInfo.features;
							for (let i = 0; i < featuresData.length; i++){
									for (let j = 0; j < featuresData[i].options.length; j++){
											if (featuresData[i].options[j] === 1){
													this.chipData[j].push($('.ChartDesktop .content-box .left-box .compare-box ul li').eq(i).find('.chooice-box .hook').eq(j).find('img')[0]);
											}
									}
							}
						}
            removeAttr($('.chooice-box img'));
						setTimeout(() => {
							stagger(this.chipData,.2,() => {
								setTimeout(self.startLight,3000);
							})
						},300)
		},
    },
   
    components: {
    },
};
