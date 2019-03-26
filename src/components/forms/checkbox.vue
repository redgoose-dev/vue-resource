<template>
<label
	class="form-checkbox"
	:class="[
		!!color && `form-checkbox--color-${color}`,
		!!size && `form-checkbox--size-${size}`,
		!!animation && `form-checkbox--animation-${animation}`,
		!!disabled && `form-checkbox--disabled`,
	]">
	<input
		type="checkbox"
		:name="name"
		:id="id"
		:value="value"
		:checked="!!checked"
		:disabled="disabled"
		:required="required"
		@change="onChange"/>
	<span v-if="!$slots.default" class="form-checkbox__body">
		<i>icon</i>
		<em v-if="!!label">{{label}}</em>
	</span>
	<slot v-else/>
</label>
</template>

<script>
export default {
	name: 'form-checkbox',
	props: {
		name: { type: String, default: null },
		id: { type: String, default: null },
		label: { type: String, default: null },
		value: { type: [String,Number,Boolean], default: null },
		checked: { type: [Boolean, String], default: false },
		disabled: { type: Boolean, default: false },
		required: { type: Boolean, default: false },
		color: { type: String, default: null }, // sub,success,error
		size: { type: String, default: null }, // small,large
		animation: { type: String, default: null }, // elastic,none
	},
	model: {
		prop: 'checked',
		event: 'change',
	},
	methods: {
		onChange(e)
		{
			this.$emit('change', e.target.checked, e);
		},
	},
}
</script>

<style src="./checkbox.scss" lang="scss" scoped></style>
