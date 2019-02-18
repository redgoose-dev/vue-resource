<template>
<router-link
	v-if="to"
	:to="to"
	:title="title"
	:class="classNames"
	@click.native="onClick">
	<span class="button__wrap">
		<slot/>
	</span>
</router-link>
<a
	v-else-if="href"
	:href="href"
	:target="target"
	:title="title"
	:class="classNames"
	@click="onClick">
	<span class="button__wrap">
		<slot/>
	</span>
</a>
<button
	v-else
	:type="type"
	:title="title"
	:class="classNames"
	@click="onClick">
	<span class="button__wrap">
		<slot/>
	</span>
</button>
</template>

<script>
export default {
	name: 'button-basic',
	props: {
		to: { type: String, default: null },
		href: { type: String, default: null },
		target: { type: String, default: null },
		type: { type: String, default: 'button' }, // button,reset,submit
		title: { type: String, default: null },
		size: { type: String, default: null }, // small,large
		color: { type: String, default: null }, // none,sub,gray
		round: { type: Boolean, default: false }, // true,false
		disabled: { type: Boolean, default: false }, // true,false
		outline: { type: Boolean, default: false }, // true,false
		inline: { type: Boolean, default: false }, // true,false
	},
	computed: {
		buttonType()
		{
			if (!!this.to)
			{
				return 'router';
			}
			else if (!!this.href)
			{
				return 'a';
			}
			else
			{
				return 'button';
			}
		},
		classNames()
		{
			return [
				'button',
				`button--type-${this.buttonType}`,
				this.size && `button--size-${this.size}`,
				this.color && `button--size-${this.color}`,
				this.round && 'button--round',
				this.disabled && 'button--disabled',
				this.outline && 'button--outline',
				this.inline && 'button--inline',
			];
		}
	},
	methods: {
		onClick(e)
		{
			e.preventDefault();
			// TODO: router-link 에서 클릭 이벤트 막는법 찾아보기
			this.$emit('click', e);
		}
	},
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
