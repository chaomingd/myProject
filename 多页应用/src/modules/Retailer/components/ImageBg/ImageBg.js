export default {
	name: 'ImageBg',
	props: ['showLink', 'link'],
    data() {
        return {
        };
    },
    methods: {
        panelClickHandler(){
            if (this.showLink && this.link !== undefined && this.link !== ''){
				Utils.trackPreview('ACPC_Light_Promo_Page_Provider_Get_Connected');
                window.open(this.link, '_blank');
            } else {
                return false;
            }
        },
		initImage(callback){
			$('.ImageBg').imageLoader({delay:0})
                .on('progress', (evt, progress) => {
                }).on('loaded', () => {
					if (callback){
						callback();
					}
                });
		},
    },
};
