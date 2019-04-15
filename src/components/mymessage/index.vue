   <template>
<message :messageUrl="messageUrl" :getCodeStyle="getCodeStyle"></message>
</template>
<script>

	export default {
		name: "",
		components: {
		},
		computed: {
			
		},
		props: {
			messageUrl: {
				type: String,
				default: []
			},
			getCodeStyle: {
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