<template>
<aside class="sidebar">
	<nav class="sidebar__nav">
		<ul>
			<li v-for="o in nav">
				<router-link v-if="o.link" :to="o.link" @click.native="onClickLink">{{o.title}}</router-link>
				<template v-else-if="o.items && o.items.length">
					<p class="head--dep-1">{{o.title}}</p>
					<ul>
						<li v-for="oo in o.items">
							<router-link v-if="oo.link" :to="oo.link" @click.native="onClickLink">{{oo.title}}</router-link>
							<template v-else-if="oo.items && oo.items.length">
								<p class="head--dep-2">{{oo.title}}</p>
								<ul>
									<li v-for="ooo in oo.items">
										<router-link v-if="ooo.link" :to="ooo.link" @click.native="onClickLink">{{ooo.title}}</router-link>
										<span v-else>{{ooo.title}}</span>
									</li>
								</ul>
							</template>
							<span v-else>{{oo.title}}</span>
						</li>
					</ul>
				</template>
				<span v-else>{{o.title}}</span>
			</li>
		</ul>
	</nav>
</aside>
</template>

<script>
import map from '@/docs/map';

export default {
	computed: {
		nav()
		{
			return map;
		},
	},
	methods: {
		onClickLink()
		{
			this.$emit('click-link');
		},
	},
}
</script>

<style src="./sidebar.scss" lang="scss" scoped></style>
