import axios from 'axios';
import Vue from 'vue';
import App from './components/App/App.vue';
Vue.config.productionTip = false;
 
new Vue({
    el: '#app',
    components: {
        App,
    },
    template: '<App/>',
});