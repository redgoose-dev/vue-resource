import Vue from 'vue';
import router from './router';
import store from './store';
import Layout from './views/layout.vue';

Vue.config.productionTip = false;

// import base css
import './css/app.scss';

new Vue({
	router,
	store,
	render: h => h(Layout)
}).$mount('#app');
