<template>
<main id="main" class="viewport">
	<header class="layout-header">
		<h2>Vue resource</h2>
		<nav>
			<a href="https://github.com/redgoose-dev/vue-redgoose-source" target="_blank">GitHub</a>
			<a href="https://note.redgoose.me" target="_blank">note.redgoose.me</a>
			<a href="https://redgoose.me" target="_blank">redgoose.me</a>
		</nav>
	</header>

	<div class="container">
		<aside id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/stylesheet/normalize">/stylesheet/normalize</router-link>
		</aside>

		<div class="container__body">
			<router-view/>
		</div>
	</div>
</main>
</template>

<script>
export default {
	name: 'layout',
}
</script>

<style src="./layout.scss" lang="scss" scoped></style>
