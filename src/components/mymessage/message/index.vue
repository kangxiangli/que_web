<template>
	
	<el-form :inline="true" :model="registerValidateForm" class="demo-form-inline">
		<el-form-item prop="fcode" label="">
		<el-input placeholder="短信验证码" v-model="registerValidateForm.fcode" :style="getCodeStyle">
			<el-button slot="append" @click="getcode" :disabled="disabled" class="input_btn">{{yzm}}</el-button>
		</el-input>
	</el-form-item>
		<!--<el-form-item label="">
			<el-input v-model="registerValidateForm.fcode" placeholder="短信验证码" ></el-input>
		</el-form-item>
		<el-form-item>
			<el-button @click="getcode" :disabled="disabled">{{yzm}}</el-button>
		</el-form-item>-->
	</el-form>
</template>

<script>
	export default {
		name: "friend",
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
				registerValidateForm: {
					floginName: "17611267756",
				},
				count: "",
				disabled: false,
				yzm: "获取验证码",
				url: "https://freegou.sinocev.com",
			};
		},
		methods: {
				
			getcode() { //获取短信验证码
				var _this = this;
				var reg = /^1\d{10}$/;
				if(_this.registerValidateForm.floginName == "" || _this.registerValidateForm.floginName == null) {
					_this.$message({
						type: 'warning',
						message: "请输入手机号"
					});
				} else if(!reg.test(_this.registerValidateForm.floginName)) {
					_this.$message({
						type: 'warning',
						message: "手机号码有误，请重填"
					});
					return false;
				} else {
					this.getCodeMessage(this.getServerUrl() + this.messageUrl, _this.registerValidateForm.floginName)
				}
			},
			
			getCodeMessage(url, val) { //获取短信ajax
				var _this = this;
				_this.count=60;
				_this.$http.get(url + "?tel=" + val)
					.then(res => {
						if(res.data.success == true) {
							_this.disabled = true;
							var resend = setInterval(function() {
								_this.count--;
								if(_this.count > 0) {
									_this.yzm = _this.count + "秒后再获取";
								} else {
									clearInterval(resend);
									_this.yzm = "获取验证码";
									_this.disabled = false;
								}
							}, 1000);
						} else {
							_this.disabled = false;
						}
					});
			},

		},
		created: function() {

		}
	};
</script>

<style>

</style>