<style type="text/css" scoped="scoped">
	.forgetPage {
		width: 100%;
		height: auto;
	}
	
	.container {
		width: 73%;
		margin: 0 auto;
	}
	
	.phontFind {
		margin-top: 130px;
	}
	
	.adv_list {
		padding-top: 67px;
		padding-bottom: 60px;
		text-align: center;
	}
	
	.about-title {
		text-align: center;
		font-weight: normal;
		font-size: 20px;
		letter-spacing: 5px;
	}
	
	.phone_con {
		width: 424px;
		margin: 0 auto 76px auto;
		border: 1px solid #d1d1d1;
		border-radius: 5px;
	}
	
	.detaile_img {
		padding: 60px 114px 40px 114px;
	}
	
	.detaile_img img {
		width: 100%;
	}
	
	.forget_btn {
		width: 160px;
		height: 40px;
		line-height: 40px;
		border-radius: 5px;
		background-color: #00ABF1;
		color: #fff;
		text-align: center;
		cursor: pointer;
		margin: 35px 125px 97px 125px;
	}
	
	.findtex {
		font-size: 26px;
		text-align: center;
	}
	
	.find_txt {
		font-size: 13px;
		text-align: center;
	}
	/*手机找回end*/
	
	.step_width {
		width: 750px;
		margin: 76px auto 45px auto;
	}
	
	.phontFindWidth {
		width: 750px;
	}
	
	.phontFindOne {
		margin: 0px auto 214px auto;
	}
	
	.phontFindTow {
		margin: 0px auto 403px auto;
	}
	
	.findOne_tex {
		height: 53px;
		line-height: 53px;
		padding-left: 15px;
		font-size: 14px;
		margin: 0px auto 10px auto;
		border-bottom: 1px solid #CCCCCC;
		color: #656565;
		background-color: #f2f2f2;
	}
	
	.findOne_color {
		color: #00abf1;
	}
	
	.find_form {
		padding: 26px 223px 49px 77px;
	}
	
	.find_form_box {
		background-color: #f2f2f2;
	}
	
	.next_btn {
		width: 350px;
		cursor: pointer;
	}
	
	.phontFindThree {
		margin: 0px auto 351px auto;
	}
	
	.findSuc_txt {
		padding: 86px 256px 50px 256px;
	}
	
	.findSuc_box {
		height: 160px;
	}
	
	.findSuc_btn {
		font-size: 20px;
		line-height: 94px;
		height: 94px;
		color: #fff;
		letter-spacing: 9px;
		width: 94px;
		cursor: pointer;
		text-align: center;
		margin: 0 auto;
		background: url(../../assets/image/mmzh1.png) no-repeat;
	}
	
	.btn-imgcode {
		right: 0;
		cursor: pointer;
	}
		.btn-imgcode {
		height: 40px;
		width: 113px;
		border-bottom-right-radius: 4px;
		border-top-right-radius: 4px;
	}
	
</style>

<template>
	<div class="forgetPage">
		<div class="container">
			<div class="phontFind">
				<!--开始找回-->
				<div class="phontFindDiv" v-if="phontFindDiv">
					<!--<el-row :gutter="24">
						<div class="adv_list">
							<p><img src="../../assets/image/mmzh_03.png" /></p>
						</div>
					</el-row>-->
					<div class="phone_con">
						<div class="detaile_img">
							<img src="../../assets/image/mmzh_07.png" />
						</div>
						<h3 class="findtex">通过手机找回</h3>
						<p class="find_txt">需要手机验证找回密码</p>
						<div class="forget_btn" @click="phone_find">点击找回</div>
					</div>
				</div>
				<!--开始找回end-->
				<div class="fond_step_box" v-if="findStepBox">
					<div class="step_width">
						<el-steps :active="active" finish-status="success">
							<el-step title="填写用户信息"></el-step>
							<el-step title="设置登录密码"></el-step>
							<el-step title="成功"></el-step>
						</el-steps>
					</div>

					<div class="phontFindOne phontFindWidth" v-if="phontFindOne">
						<div class="findOne_tex">
							您正在通过<span class="findOne_color">手机</span>找回登录密码
						</div>
						<div class="find_form_box">
							<el-form class="card-box find_form" :model="registerValidateForm" :rules="rules" label-width="100px" ref="registerValidateForm">
								<el-form-item prop="floginName" label="手机号码">
									<el-input placeholder="请输入绑定的手机号码" style="width: 350px;" v-model="registerValidateForm.floginName"></el-input>
								</el-form-item>
								<el-form-item prop="fcodeImg" label="验证码">
									<div style="display: flex;">
										<el-input placeholder="图片验证码" style="width: 350px;" v-model="registerValidateForm.fcodeImg"></el-input>
										<img @click="getImages()" class="btn-imgcode register-imgmsg" v-bind:src="imgData" />
									</div>
								</el-form-item>
								<!--图片验证码-->
								<!--<getImageCode :imageMessageUrl="imageMessageUrl" :imgCodeStyle="getImageCodeStyle"></getImageCode>-->
								<el-form-item prop="fcode" label="短信验证码">
									<el-input placeholder="短信验证码" style="width: 350px;" v-model="registerValidateForm.fcode">
										<el-button slot="append" @click="getcode" :disabled="disabled" class="input_btn">{{yzm}}</el-button>
									</el-input>
								</el-form-item>
								<el-form-item prop="fidentityType" label="证件类型">
									<el-select v-model="registerValidateForm.fidentityType" clearable placeholder="请选择" style="width: 350px;">
										<el-option v-for="item in soptions" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item prop="fidentityNo" label="证件号码">
									<el-input style="width: 350px;" placeholder="如果账户未实名认证此项可不填写" v-model="registerValidateForm.fidentityNo"></el-input>
								</el-form-item>
								<el-form-item>
									<el-button class="next_btn primary" @click="submitForm('registerValidateForm')">下一步</el-button>
								</el-form-item>
							</el-form>
						</div>
					</div>
					<!--填写信息end-->
					<div class="phontFindWidth phontFindTow" v-if="phontFinTow">
						<div class="findOne_tex">
							您正在通过<span class="findOne_color">手机</span>找回登录密码
						</div>
						<div class="find_form_box">
							<el-form class="card-box find_form" :model="findValidateForm" :rules="rules" label-width="100px" ref="findValidateForm">
								<el-form-item prop="fpassword" label="新密码">
									<el-input type="password" style="width: 350px;" placeholder="输入密码" v-model="findValidateForm.fpassword"></el-input>
								</el-form-item>
								<el-form-item prop="checkPass" label="确认密码">
									<el-input type="password" style="width: 350px;" placeholder="确认密码" v-model="checkPass"></el-input>
								</el-form-item>
								<el-form-item>
									<el-button class="next_btn primary" @click="passNext('findValidateForm')">下一步</el-button>
								</el-form-item>
							</el-form>
						</div>
					</div>
					<!--找回密码操作成功-->
					<div class="phontFindWidth phontFindThree" v-if="phontFinThree">
						<div class="findOne_tex">
							您正在通过<span class="findOne_color">手机</span>找回登录密码
						</div>
						<div class="find_form_box">
							<div class="findSuc_txt">您已成功找回密码,请重新登录</div>
							<div class="findSuc_box">
								<div class="findSuc_btn" @click="findSuccessBtn">确定</div>
							</div>

						</div>
					</div>

				</div>

			</div>

		</div>

	</div>
</template>
<style>

</style>
<script>
	//	import Element from 'element-ui'
	import * as api from "../../api";
	import auth from "../../auth";

	import addRouter from "@/components/addRouter" //新增	
	//import VDistpicker from 'v-distpicker'
	export default {
		components: {

		},
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
				} else if(this.checkPass !== this.findValidateForm.fpassword) {

					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			let validatePhone = (rule, value, callback) => { //手机号正则
				let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
				if(!reg.test(value)) {
					callback(new Error('手机号码有误，请重填'))
				} else {
					callback()
				}
			};
			return {
				userReg: '', //用户密码正则
				userRegTxt: '',
				active: 0,
				soptions: [],
				ftype: "",
				imgData: "",
				phontFindDiv: true,
				findStepBox: false, //步骤是否显示
				phontFindOne: false, //填写信息
				phontFinTow: false, //是否显示设置密码
				phontFinThree: false, //
				count: 60,
				disabled: false,
				yzm: "获取验证码",
				checkPass: "",
				findValidateForm: {
					fpassword: '',
				},
				registerValidateForm: {
					floginName: '',
					//					fpassword: '',
					fcode: "",
					fcodeImg: "",
					fidentityNo: "",
					fidentityType: ""
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
							required: false,
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

				},
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 10,
						parentId: 0
					},
					rows: []
				},

			}
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
			findSuccessBtn() {
		this.$router.push('/homePage')
			},
			passNext(formName) { //设置密码下一步
				var _this = this;
				_this.$refs[formName].validate((valid) => {
					if(valid) {
						let opt = _this.findValidateForm.fpassword;
						this.$http.get(_this.getServerUrl() + api.FIND_PASSWORD_REVERED + "?floginName=" + _this.registerValidateForm.floginName + "&fpwd=" + opt).then(res => {
							if(res.data.success == true) {
								_this.phontFinTow = false;
								_this.phontFinThree = true;
								_this.active = 3;

							} else {}
						}).catch((err) => {
							console.log(err);
						}).catch((err) => {
							console.log(err);
						})
					} else {
						console.log('Error Submit!!');
						return false;
					}
				});

			},
			phone_find() { //点击找回
				this.phontFindDiv = false;
				this.findStepBox = true;
				this.getImages() //加载图片验证码
				this.phontFindOne = true;
				this.active = 1;
				//				this.getImages()//加载图片验证码
				this.getIdType(api.FIND_PASSWORD_TYPE, this.soptions) //获取证件类型
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
					this.getCodeMessage(this.getServerUrl() + api.FIND_PASSWORD_PHONE, _this.registerValidateForm.floginName)
				}
			},
			getCodeMessage(url, val) { //获取短信ajax
				var _this = this;
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
				this.$http.get(this.getServerUrl() + api.FIND_PASSWORD_CODE).then(res => {
					if(res.data.success == true) {
						this.imgData = "data:image/png;base64," + res.data.msg;
						console.log("zhuce" + res.data.data)
						auth.login(res.data.data);
					} else {

					}

				})
			},

			submitForm(formName) { //下一步
				var _this = this;
//				_this.phontFindOne = false;
//				_this.phontFinTow = true;
//				_this.active = 2;
				_this.$refs[formName].validate((valid) => {
					if(valid) {
						let opt = _this.registerValidateForm;
						this.$http.post(_this.getServerUrl() + api.FIND_PASSWORD, opt).then(res => {
							if(res.data.success == true) {
								_this.phontFindOne = false;
								_this.phontFinTow = true;
								_this.active = 2;

							} else {

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

		},
		created() {
this.getValidatePass();
		},
		mounted: function() {

		}
	}
</script>