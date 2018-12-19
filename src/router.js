import Vue from 'vue';
import Router from 'vue-router';
import map from './docs/map';

Vue.use(Router);

// set base map
const baseMap = [
	{
		path: '*',
		name: '404',
		component: () => import('./pages/404'),
	},
	{
		path: '/',
		name: 'home',
		component: () => import('./pages'),
	},
];

// set contents map
const contentMap = function(src) {
	let map = [];
	src.forEach((group) => {
		if (group.items && group.items.length)
		{
			group.items.forEach((item) => {
				map.push({
					path: item.link,
					name: item.name ? item.name : item.link,
					component: item.component || (() => import(`@/pages${item.link}`)),
				});
			});
		}
	});
	return map;
}(map);


// set router
const router = new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: function() {
		return [
			...baseMap,
			...contentMap,
		]
	}()
});

// 페이지 이동에 대한 후크
// router.beforeEach((to, from, next) => {
// 	// do something..
// 	next();
// });

// error
// router.onError(() => {
// 	alert('Unavailable page.');
// });


export default router;
