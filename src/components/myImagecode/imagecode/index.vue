<template>
	<el-form :inline="true" :model="formInline" class="demo-form-inline">
		<el-form-item label=" ">
			<el-input v-model="formInline.code" placeholder="验证码" :style="imgCodeStyle"></el-input>
		</el-form-item>
		<el-form-item>
			<img @click="getPicCode()" class="btn-imgcode1 register-imgmsg" v-bind:src="myPicData" />
		</el-form-item>
	</el-form>

</template>

<script>
	export default {
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
				myPicData: "",
				formInline: {
					code: " ",
				},

			};
		},
		methods: {
			getPicCode() { //获取短信验证码
				var _this = this;
				//				if(_this.formInline.code == " " || _this.formInline.code == null) {
				//					_this.$message({
				//						type: 'warning',
				//						message: "请输入验证码 "
				//					});
				//				} else {
				this.getCodeMessage(_this.imageMessageUrl)
				//				}
			},
			getCodeMessage(url) { //获取短信ajax
				var _this = this;
				this.$http.get(url)
					.then(res => {
						_this.myPicData = res.data.imgData;
					});
			}

		},
		created: function() {

		},
		mounted: function() {
			this.$nextTick(function() {
				this.getPicCode();
			})
		}
	};
</script>

<style scoped="scoped">
	.btn-imgcode1 {
		position: relative;
		right: 15px;
		top: 0;
		outline: none;
		padding: 0;
		height: 40px;
	}
</style>