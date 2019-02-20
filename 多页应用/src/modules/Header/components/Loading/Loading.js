export default {
	name: 'Loading',
	props: [
        'allImageLoaded',
    ],
    data() {
        return {
            progress: 0,
        };
    },
    computed: {
        percentage() {
            if (!this.allImageLoaded){
				return `${this.progress}%`;
			}
            return '100%';
        },
        barWidth() {
            return `calc(${this.percentage} - 6px)`;
        },
	},
	methods: {
		initImage(callback){
			$('.loading-img').imageLoader({delay:0})
                .on('progress', (evt, progress) => {
                    this.progress = progress - 1;
                }).on('loaded', () => {
					if (callback){
						callback();
					}
                });
		},
	},
};
