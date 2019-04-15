<template>
	<gotop transitionName="fade" :visibilityHeight="300" :backPosition="0" :customStyle="customStyle"></gotop>
</template>
<script>
	export default {
		name: "",
		components: {},
		computed: {

		},
		props: {
			visibilityHeight: {
				type: Number,
				default: 400
			},
			backPosition: {
				type: Number,
				default: 0
			},
			customStyle: {
				type: Object,
				default: function() {
					return {
						right: '52px',
						bottom: '50px',
						width: '40px',
						height: '40px',
						position: "absolute",
						zIndex: "999",
						'border-radius': '4px',
						'line-height': '45px',
						background: '#e7eaf1'
					}
				}
			},
		},
		data() {
			return {

			}
		},
		methods: {

		},
		created: function() {

		}
	};
</script>
<style>

</style>