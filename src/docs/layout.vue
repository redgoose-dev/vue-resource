<template>
<main id="main" class="viewport" :class="[ openedSidebar && 'viewport--opened-sidebar' ]">
	<header class="layout-header">
		<div class="layout-header__wrap">
			<div class="layout-header__body">
				<nav class="toggle-sidebar">
					<button type="button" @click="toggleSidebar">
						<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon">
							<path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
						</svg>
					</button>
				</nav>
				<h2 class="title">
					<router-link to="/">vue-redgoose-resource</router-link>
				</h2>
			</div>
			<div class="layout-header__side">
				<nav class="external-links">
					<a href="https://github.com/redgoose-dev/vue-redgoose-source" target="_blank">GitHub</a>
					<a href="https://redgoose.me" target="_blank">redgoose.me</a>
				</nav>
			</div>
		</div>
	</header>

	<div class="container">
		<span class="container__sidebar-mask" @click="openedSidebar = false"></span>
		<nav-sidebar class="container__sidebar" @click-link="openedSidebar = false"/>

		<div class="container__body">
			<router-view/>
		</div>
	</div>
</main>
</template>

<script>
export default {
	name: 'layout',
	components: {
		'nav-sidebar': () => import('@/docs/component/sidebar'),
	},
	data()
	{
		return {
			openedSidebar: false,
		};
	},
	methods: {
		toggleSidebar()
		{
			this.openedSidebar = !this.openedSidebar;
		}
	},
}
</script>

<style src="./layout.scss" lang="scss" scoped></style>
