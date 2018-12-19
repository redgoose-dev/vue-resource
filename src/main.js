import Vue from 'vue';
import router from './router';
import store from './store';
import Layout from './docs/layout.vue';

Vue.config.productionTip = false;

// import base css
import './css/app.scss';

// TODO: initial custom event
// util.initCustomEvent();

new Vue({
	router,
	store,
	render: h => h(Layout)
}).$mount('#app');
