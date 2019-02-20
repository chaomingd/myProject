export default {
    name: 'CjsAnim',
    props: [
        'compositionId',
    ],
    data() {
        return {
            cjsAnim: null,
        };
    },
    mounted() {
        this.$nextTick(function () {
            // this.initCjs();
        });
    },
    methods: {
        initCjs(compositionId, callBack){
            Utils.cjsLoader(compositionId, this.$refs.cjsCon, aniObj => {
                if (callBack) callBack(aniObj);
            });
        },
    },
};
