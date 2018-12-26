import Vue from 'vue';
import Router from 'vue-router';
import map from './docs/map';

Vue.use(Router);

// set base map
const baseMap = [
	{
		path: '*',
		name: '404',
		component: () => import(`@/docs/pages/404`),
	},
];

// set contents map
const contentMap = function(src) {
	let map = [];
	src.forEach((group) => {
		if (group.link)
		{
			map.push({
				path: group.link,
				name: group.name ? group.name : group.link,
				component: group.component || (() => import(`@/docs/pages${group.link}`)),
			});
		}
		else if (group.items && group.items.length)
		{
			group.items.forEach((item) => {
				if (item.link)
				{
					map.push({
						path: item.link,
						name: item.name ? item.name : item.link,
						component: item.component || (() => import(`@/docs/pages${item.link}`)),
					});
				}
				else if (item.items)
				{
					item.items.forEach((item2) => {
						map.push({
							path: item2.link,
							name: item2.name ? item2.name : item2.link,
							component: item2.component || (() => import(`@/docs/pages${item2.link}`)),
						});
					});
				}
			});
		}
	});
	console.log(map);
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
