<template>
	<advantage ref="advantage" :introduceData="introduceData" :platformData="platformData" :newsData="newsData" :advantageUrl="advantageUrl"></advantage>
</template>
<script>
	export default {
		name: "",
		components: {},
		computed: {

		},
		props: {
			newsData: {
				type: Array,
				default: []
			},
			platformData: {
				type: Array,
				default: []
			},
			introduceData: {
				type: Array,
				default: []
			},
			advantageUrl: {
				type: String,
				default: []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			getNews(url) {
				this.$refs.advantage.myNews(url)

			}
		},
		created: function() {

		}
	};
</script>
<style>

</style>