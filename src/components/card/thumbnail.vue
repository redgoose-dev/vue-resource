<template>
<i
	class="card-thumbnail"
	:class="[
		`card-thumbnail--type-${type}`,
		full && `card-thumbnail--full`,
	]">
	<img :src="src" :alt="title"/>
</i>
</template>

<script>
export default {
	name: 'card-thumbnail',
	props: {
		src: { type: String, default: null }, // image url
		title: { type: String, default: 'image' }, // alt
		type: { type: String, default: 'cover' }, // cover,contain
		full: { type: Boolean, default: false }, // false: 높이가 임의 크기로 지정, true: 높이가 100%
	},
};
</script>

<style lang="scss" scoped>
$image-height: 180px; // image height

.card-thumbnail {
	display: block;
	background: #fafafa;
	font-size: 0;

	> img {
		display: block;
		max-width: 100%;
		margin: 0 auto;
	}

	&--type {
		&-cover {
			height: $image-height;
			position: relative;
			overflow: hidden;
			> img {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
			@supports (object-fit: cover) {
				position: static;
				overflow: auto;
				> img {
					position: static;
					width: 100%;
					height: 100%;
					object-fit: cover;
					transform: none;
				}
			}
		}
		&-contain {
			height: $image-height;
			max-height: 100%;
			> img {
				max-width: none;
				height: 100%;
			}
			@supports (object-fit: contain) {
				max-height: none;
				> img {
					width: 100%;
					object-fit: contain;
				}
			}
		}
	}
	&--full {
		height: 100%;
	}
}
</style>
