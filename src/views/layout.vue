<template>
	<main id="main" class="viewport">
		<aside id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</aside>

		<div class="container">
			<router-view/>
		</div>
	</main>
</template>

