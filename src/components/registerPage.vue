<style scoped="scoped">
	body .register {
		width: 73%;
		height: auto;
		margin: 0 auto;
	}
	
	body .register-form {
		margin-left: -100px;
	}
	
	.header_register {
		width: 100%;
		height: 125px;
	}
	
	.el-input .el-input__inner {
		width: 257px !important;
	}
	
	.register_right {
		width: 470px;
		background: #fff;
		border: 1px solid #EEEEEE;
		float: right;
		margin-right: 20px;
		margin-top: 45px;
	}
	
	.register_left {
		margin-top: 120px;
	}
	
	.register .el-row {
		height: 660px;
	}
	
	.register_left img {
		width: 100%;
	}
	
	.reg_header {
		height: 97px;
		font-size: 27px;
		font-weight: 500;
		letter-spacing: 7px;
		color: #333;
		line-height: 97px;
		text-align: center;
		border-radius: 4px;
		width: 100%;
		background-color: #EEEEEE;
		background-image: url(../assets/image/sj.png);
		background-repeat: no-repeat;
		background-position: 127px 29px;
	}
	
	.btn-imgcode {
		height: 40px;
		width: 113px;
		border-bottom-right-radius: 4px;
		border-top-right-radius: 4px;
	}
	
	.el-form-item__content .el-input .el-input-group__append {
		background: #00b0f9 !important;
		color: #fff;
	}
	
	.register_form {
		width: 81%;
		margin: 23px auto;
	}
	
	.reg_btn {
		background: #00b0f9 !important;
		width: 380px;
		display: block;
		font-size: 20px;
		letter-spacing: 7px;
	}
	
	.reg_tex {
		color: #00b0f9;
		cursor: pointer;
	}
</style>
<template lang="html">
	<div class="register">
		<div class="header_register"></div>
		<el-row :gutter="24">
			<el-col :span="12">
				<div class="register_left">
					<img src="../assets/image/q.png" />
				</div>
			</el-col>
			<el-col :span="12">
				<div class="register_right">
					<div class="reg_header">手机注册</div>
					<div class="register_form">
						<el-form class="card-box register-form" :model="registerValidateForm" :rules="rules" label-width="100px" ref="registerValidateForm">
							<el-form-item prop="floginName" label="">
								<el-input placeholder="手机号码" v-model.trim="registerValidateForm.floginName"></el-input>
							</el-form-item>
							<el-form-item prop="fcodeImg">
								<div style="display: flex;">
									<el-input placeholder="图片验证码" v-model="registerValidateForm.fcodeImg"></el-input>
									<img @click="getImages()" class="btn-imgcode register-imgmsg" v-bind:src="imgData" />
								</div>
							</el-form-item>
							<!--图片验证码-->
							<!--<getImageCode :imageMessageUrl="imageMessageUrl" :imgCodeStyle="getImageCodeStyle"></getImageCode>-->
							<el-form-item prop="fcode" label="">
								<el-input placeholder="短信验证码" v-model="registerValidateForm.fcode">
									<el-button slot="append" @click="getcode" :disabled="disabled" class="input_btn">{{yzm}}</el-button>
								</el-input>
							</el-form-item>
							<el-form-item prop="fpassword" label="">
								<el-input type="password" placeholder="输入密码" v-model="registerValidateForm.fpassword"></el-input>
							</el-form-item>
							<el-form-item prop="checkPass" label="">
								<el-input type="password" placeholder="确认密码" v-model="checkPass"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" class="reg_btn" :disabled="isDisabled" @click="submitForm('registerValidateForm')">注册</el-button>
							</el-form-item>
						</el-form>
						<span>已有账号？&nbsp;&nbsp;<span class="reg_tex" @click="goBack">直接登录>></span></span>
					</div>

				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	// import * as types from '../store/mutation-types';
	import * as api from "../api";
	import auth from '../auth';
	import Element from "element-ui";
	export default {
		name: '',
		data() {
			// 密码安全性要求
			let validatePass1 = (rule, value, callback) => {
				//用户名正则，4到16位（字母，数字，下划线，减号）
				let reg = eval(this.userReg)
				if(!reg.test(value)) {
					callback(new Error(this.userRegTxt))

				} else {
					callback()
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(this.checkPass === '') {
					callback(new Error('请再次输入密码'));
				} else if(this.checkPass !== this.registerValidateForm.fpassword) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			let validatePhone = (rule, value, callback) => { //手机号正则
				let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if(!reg.test(value)) {
					callback(new Error('手机号码有误，请重填'))
				} else {
					callback()
				}
			};

			return {
				userReg: '', //用户密码正则
				userRegTxt: '',
				imgData: "",
				count: 60,
				disabled: false,
				isDisabled: false,
				yzm: "获取验证码",
				checkPass: "",
				registerValidateForm: {
					floginName: '',
					fpassword: '',
					fcode: "",
					fcodeImg: ""
				},
				rules: {
					checkPass: [{
						required: false,
						message: '请再次输入密码',
						trigger: 'blur'
					}, {
						validator: validatePass2,
						trigger: 'blur'
					}],
					fpassword: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							validator: validatePass1,
							trigger: 'blur'
						}
					],
					floginName: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur'
						},
						{
							validator: validatePhone,
							trigger: 'blur'
						}
					],
					fcode: [{
							required: true,
							message: '请输入验证码',
							trigger: 'blur'
						},
						{
							//							validator: validatePhone,
							trigger: 'blur'
						}
					],
					fcodeImg: [{
							required: true,
							message: '请输入图片验证码',
							trigger: 'blur'
						},
						{
							//							validator: validatePass1,
							trigger: 'blur'
						}
					],

				}
			}
		},
		watch: {
		
		},
		methods: {
			getValidatePass() { //获取密码正则
				this.$http.get(this.getServerUrl()+ '/api/member/rule').then(res => {
					if(res.data.success == true) {
						this.userReg = res.data.data.registrRule;
						this.userRegTxt = res.data.data.registrErr;
					} else {

					}

				})
			},
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
					this.getCodeMessage(this.getServerUrl() + api.REGISTER_MES, _this.registerValidateForm.floginName)
				}
			},
			getCodeMessage(url, val) { //获取短信ajax
				var _this = this;
				_this.count = 60;
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
			getImages() { //获取图片
				this.$http.get(this.getServerUrl() + api.REGISTER_IMG).then(res => {
					if(res.data.success == true) {
						this.imgData = "data:image/png;base64," + res.data.msg;
						auth.login(res.data.data);
					} else {
						//						console.log(res)
					}

				})
			},
			submitForm(formName) { //注册
				if(this.checkPass !== this.registerValidateForm.fpassword) {
					this.$message({
						type: "warning",
						message: "两次输入密码不一致"
					});
					return;
				}
				this.$refs[formName].validate((valid) => {
					if(valid) {
						this.isDisabled = true;
						let opt = this.registerValidateForm;
						this.$http.post(this.getServerUrl() + api.REGISTER, opt).then(res => {
							if(res.data.success == true) {
								this.isDisabled = false;
								//								this.$message({
								//									duration: 800,
								//									showClose: true,
								//									type: 'success',
								//									message: "注册成功,请登录"
								//								})
								//								setTimeout(() => {
								//									this.$router.push('/homePage')
								//								}, 1500);
								this.regSubmit(); //注册成功登录
							} else {
								
								this.getImages();
								this.isDisabled = false;
							}
						}).catch((err) => {
							console.log(err);
						})
					} else {
						console.log('Error Submit!!');
						return false;
					}
				});
			},
			regSubmit() { //登录
				var _this = this;
				let ruleForm2 = {
					floginName: _this.registerValidateForm.floginName,
					fpassword: _this.registerValidateForm.fpassword
				};
				this.$http.post(_this.getServerUrl() + api.LOGIN, ruleForm2).then(res => {
					if(res.data.success == true) {
							//登陆成功
							this.$store.state.loginShow = false;
							_this.$store.state.navMenuIndex = 0;
							_this.$store.state.loginDivShow = false;
							window.sessionStorage.setItem('loginDivShow', false);
							window.sessionStorage.setItem('navMenuIndex', 0);
							window.sessionStorage.setItem('loginShow', false);
							auth.login(res.data.data);
							_this.record() //获取登录时间
							//							_this.loginIsShow = false; //隐藏登录框

							this.$router.push('/peoplePage'); //跳转到会员页面
					
					}else{
						//登陆失败
							this.$router.push('/homePage');
					}
				})

			},
			record() {
				this.$http.get(this.getServerUrl() + api.LOGIN_RECORD).then(res => {
					if(res.data.success == true) {} else {

					}
				})
			},
			goBack() {
				this.$router.push({ //跳转首页
					path: '/homePage'
				})

			},
			//    submitForm(formName) {
			//    
			//    	let opt = this.registerValidateForm;
			//     this.$http.post(api.REGISTER, opt).then(res => {
			//    	if(res.data.success==true){
			//            this.$message({
			//            type: 'success',
			//            message: "注册成功，请登录"
			//          })
			//            //  Register 设计为了 Login 的组件，所以成功跳转时刷新一次页面
			//            setTimeout(() => {
			//         		this.$router.go(0)
			//              this.$router.push('/login')
			//      		}, 1500);
			//            
			//      	}else{
			//      	 Element.MessageBox({type:"error",message:res.data.msg,title:"温馨提示"});
			//
			//      	}
			//        auth.login(res.data.data);
			//        window.sessionStorage.setItem("user-info", JSON.stringify(res.data.data));
			//        this.setUserInfo(res.data.data);
			//        this.loadMenuList();
			//      })
			//    	
			//
			//    }
		},
		created() {
			this.getValidatePass();
		},
		mounted() {
			this.$nextTick(function() {
				this.getImages();
				
			})
			this.$store.state.navMenuIndex = 0;
		}
	}
</script>