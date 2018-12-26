/**
 * side navigation tree
 */

export default [
	{ link: '/', title: 'Introduce' },
	{ link: '/vue-tips', title: 'vue.js tips' },
	{
		title: 'Stylesheet',
		items: [
			{ link: '/stylesheet', title: 'guide' },
			{ link: '/stylesheet/normalize', title: 'normalize' },
			{ link: '/stylesheet/web-fonts', title: 'web fonts' },
			{ link: '/stylesheet/variables', title: 'variables' },
			{ link: '/stylesheet/mixins', title: 'mixins' },
			{ link: '/stylesheet/elements', title: 'elements' },
			{ link: '/stylesheet/grid', title: 'grid' },
			{ link: '/stylesheet/typography', title: 'typography' },
			{ link: '/stylesheet/forms', title: 'forms' },
			{ link: '/stylesheet/table', title: 'table' },
			{ link: '/stylesheet/etc', title: 'etc' },
		],
	},
	{
		title: 'Components',
		items: [
			{ link: '/components/button-basic', title: 'button-basic' },
			{ link: '/components/icon', title: 'icon' },
			{ link: '/components/card', title: 'card' },
			{ link: '/components/modal', title: 'modal' },
			{ link: '/components/loading', title: 'loading' },
			{
				title: 'Forms',
				items: [
					{ link: '/components/form-text', title: 'text' },
					{ link: '/components/form-radio', title: 'radio' },
					{ link: '/components/form-checkbox', title: 'checkbox' },
					{ link: '/components/form-select', title: 'select' },
					{ link: '/components/form-switch', title: 'switch' },
				],
			},
			{
				title: 'Navigation',
				items: [
					{ link: '/components/nav-paginate', title: 'paginate' },
					{ link: '/components/nav-tab', title: 'tab' },
					{ link: '/components/nav-dropdown', title: 'dropdown' },
				],
			},
			{
				title: 'Error',
				items: [
					{ link: '/components/error-content', title: 'content' },
					{ link: '/components/error-page', title: 'page' },
				],
			},
		],
	},
	{
		title: 'Script library',
		items: [
			{ link: '/libs/sleep', title: 'sleep' },
			{ link: '/libs/custom-event', title: 'custom event' },
			{ link: '/libs/api', title: 'support axios api' },
		],
	},
];
