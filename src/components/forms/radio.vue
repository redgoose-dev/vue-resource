<template>
<label
	class="form-radio"
	:class="[
		!!color && `form-radio--color-${color}`,
		!!size && `form-radio--size-${size}`,
		!!animation && `form-radio--animation-${animation}`,
		!!disabled && `form-radio--disabled`,
	]">
	<input
		type="radio"
		:name="name"
		:id="id"
		:value="value"
		:checked="checked"
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
	name: 'form-radio',
	props: {
		name: { type: String, default: null },
		id: { type: String, default: null },
		label: { type: String, default: null },
		value: { type: [String,Number,Boolean] },
		checked: { type: [Boolean, String], default: false },
		disabled: { type: Boolean, default: false },
		required: { type: Boolean, default: false },
		color: { type: String, default: null }, // sub,error
		size: { type: String, default: null }, // small,large
	},
	model: {
		prop: 'checked',
		event: 'change',
	},
	methods: {
		onChange(e)
		{
			this.$emit('change', e);
		},
	},
}
</script>

<style src="./radio.scss" lang="scss" scoped></style>
