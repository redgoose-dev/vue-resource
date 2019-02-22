import Vue from 'vue';
import router from './router';
import store from './store';
import Layout from './docs/layout';

Vue.config.productionTip = false;

// import base css
import './css/normalize.css';
import './docs/app.scss';

new Vue({
	router,
	store,
	render: h => h(Layout)
}).$mount('#app');
