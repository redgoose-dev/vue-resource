<template>
<label class="form-checkbox">
	<input
		type="checkbox"
		:name="name"
		:id="id"
		:value="value"
		:checked="checked === value"
		:disabled="disabled"
		:required="required"
		@change="onChange"/>
	<span>
		<i>icon</i>
		<em v-if="!!label">{{label}}</em>
	</span>
</label>
</template>

<script>
export default {
	name: 'form-checkbox',
}
</script>

<style src="./checkbox.scss" lang="scss" scoped></style>
