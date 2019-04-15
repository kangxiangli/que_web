<style type="text/css" scoped="scoped">
	.forgetPage {
		width: 100%;
		height: 100%;
	}
	
	.phontFind_title {
		font-size: 18px;
		color: #434343;
		padding-bottom: 5px;
		padding-left: 5px;
		border-bottom: 1px solid #c8c8c8;
	}
	
	.content_question {
		padding: 39px 32px;
	}
</style>

<template>
	<div class="helpComponent">
		<div class="phontFind_title">
			{{myData.ftitle}}
		</div>
		<div class="content_question">
			{{myData.fcontent}}
		</div>

	</div>
</template>

<script>
	import * as api from "../api";
	import auth from "../auth";

	export default {
			props: {
			show: Object,

		},
		components: {

		},
		data() {
			return {
				myData:{
					ftitle:"efseh",
					fcontent:"zkldjchn"
				}
			}
		},
		methods: {
			getContent() { //帮助中心内容
				var _this = this;


			}

		},
		created() {

		},
		mounted() {
//			this.getContent()
		}
	}
</script>