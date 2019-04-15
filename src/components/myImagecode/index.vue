   <template>
<imageMessage :imageMessageUrl="imageMessageUrl" :imgCodeStyle="imgCodeStyle"></imageMessage>
</template>
<script>

	export default {
		name: "",
		components: {
		},
		computed: {
			
		},
		props: {
			imageMessageUrl: {
				type: String,
				default: []
			},
			imgCodeStyle: {
				type: Object,
				default: function() {
					return {
						width: '200px',
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