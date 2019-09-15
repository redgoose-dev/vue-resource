import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
	  url: {
	    github: 'https://github.com/redgoose-dev/vue-resource/',
      redgoose: 'https://redgoose.me',
    },
  },
	mutations: {},
	actions: {}
});
