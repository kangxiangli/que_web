<template>
	<!--<test></test>-->
		<changeCarousel ref="changeCarousel"  :slides="slides" :autoplay="autoplay" :inv="invTime" :arrow="arrow" :height="height"></changeCarousel>
</template>
<script>
	//	import Carousel from '../components/myCompontents/Carousel.vue'
	export default {
		name: "carousel",
		components: {

		},
		computed: {

		},
		props: {
			slides: {
				type: Array,
				default: []
			},
			autoplay: {
				type: Boolean,
				default: true
			},
			arrow: {
				type: String,
				default: "hover"
			},
			height: {
				type: String,
				default:"400px"
			},
			inv: {
				type: Number,
				default: 2000
			}
		},
		data() {
			return {
				//				invTime: 2000,
				//				slides: [],
			}
		},
		methods: {
			getSlides(ary, url) {
				this.$refs.changeCarousel.mySlides(ary, url)
				
			}

		},
		created() {

		},
		mounted: function() {
			this.$nextTick(function() {
			
			})
		}
	};
</script>
<style>

</style>