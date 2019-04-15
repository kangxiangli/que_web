<template>
	<el-dialog custom-class="dialog_content1" :before-close="cancels" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" width="70%">
		<imp-panel>
			<el-row type="flex" class="row-bg" justify="center">
				<el-col :span="12">
					<el-form class="card-box register-form" :model="registerValidateForm" :rules="rules" label-width="100px" ref="registerValidateForm">
						<el-form-item prop="floginName" label="原始手机">
							<span> {{defaulePhone}}</span>
						</el-form-item>
						<el-form-item prop="oldCode" label="验证码">
							<el-input placeholder="验证码" v-model="registerValidateForm.oldCode">
								<el-button slot="append" @click="getcode(mydefaulePhone,'disabledOne','yzm1','count1')" :disabled="disabledOne" class="input_btn">{{yzm1}}</el-button>
							</el-input>
						</el-form-item>
						<el-form-item prop="newMobile" label="手机号码">
							<el-input placeholder="手机号码" v-model="registerValidateForm.newMobile"></el-input>
						</el-form-item>
						<el-form-item prop="newCode" label="验证码">
							<el-input placeholder="验证码" v-model="registerValidateForm.newCode">
								<el-button slot="append" @click="getcode(registerValidateForm.newMobile,'disabledTow','yzm2','count2')" :disabled="disabledTow" class="input_btn">{{yzm2}}</el-button>
							</el-input>
						</el-form-item>
						<!--图片验证码-->
						<!--<el-form-item prop="fcodeImg" label="图片验证码">
							<div style="display: flex;">
								<el-input placeholder="图片验证码" v-model="registerValidateForm.fcodeImg"></el-input>
								<img @click="getImages()" class="btn-imgcode register-imgmsg" v-bind:src="imgData" />
							</div>
						</el-form-item>-->
					</el-form>
				</el-col>

			</el-row>

		</imp-panel>
		<span slot="footer" class="dialog-footer">
        <el-button @click="cancels()">取 消</el-button>
        <el-button type="primary" @click="submitForms('registerValidateForm')" >保存</el-button>
      </span>
	</el-dialog>

</template>
<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	import auth from "../auth";
	export default {
		name: '',
		components: {
			'imp-panel': panel,

		},
		data() {

			let validatePhone = (rule, value, callback) => { //手机号正则
				let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
				if(!reg.test(value)) {
					callback(new Error('手机号码有误，请重填'))
				} else {
					callback()
				}
			};

			return {
				defaulePhone: "",
				mydefaulePhone:"",
				dialogFormVisible: false,
				dialogTitle: "修改绑定手机",
				imgData: "",
				count1: 60,
				count2: 60,
				disabledOne: false,
				disabledTow: false,
				yzm1: "获取验证码",
				yzm2: "获取验证码",
				registerValidateForm: {
					oldCode: '',
					newMobile: '',
					newCode: "",
				},
				rules: {
					oldCode: [{
							required: true,
							message: '请输入验证码',
							trigger: 'blur'
						},
						{
							trigger: 'blur'
						}
					],
					newMobile: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur'
						},
						{
							validator: validatePhone,
							trigger: 'blur'
						}
					],
					newCode: [{
							required: true,
							message: '请输入验证码',
							trigger: 'blur'
						},
						{
							//							validator: validatePhone,
							trigger: 'blur'
						}
					],

				}
			}
		},
		watch: {

		},
		methods: {
			cancels() {
				let _this = this;
				_this.dialogFormVisible = false;
				_this.$refs.registerValidateForm.resetFields();
			},
			getcode(val, dis, yzm, count) { //获取短信验证码
				var _this = this;
				var reg = /^1\d{10}$/;
				if(val == "" || val == null) {
					_this.$message({
						type: 'warning',
						message: "请输入手机号"
					});
				} else if(!reg.test(val)) {
					_this.$message({
						type: 'warning',
						message: "手机号码有误，请重填"
					});
					return false;
				} else {
					this.getCodeMessage(this.getServerUrl() + api.REGISTER_MES, val, dis, yzm, count)
				}
			},
			getCodeMessage(url, val, dis, yzm, count) { //获取短信ajax
				var _this = this;
				_this.$http.get(url + "?tel=" + val)
					.then(res => {
						if(res.data.success == true) {
							_this[dis] = true;
							var resend = setInterval(function() {
								_this[count]--;
								if(_this[count] > 0) {
									_this[yzm] = _this[count] + "秒后再获取";
								} else {
									clearInterval(resend);
									_this[yzm] = "获取验证码";
									_this[count]=60;
									_this[dis] = false;
								}
							}, 1000);
						} else {
							_this[dis] = false;
						}
					});
			},
			
			submitForms(formName) { //保存
				this.$refs[formName].validate((valid) => {
					if(valid) {
						let opt = this.registerValidateForm;
						this.$http.post(this.getServerUrl() + api.MER_DEFAULT_PHONE + "?oldCode=" + this.registerValidateForm.oldCode + "&newMobile=" + this.registerValidateForm.newMobile + "&newCode=" + this.registerValidateForm.newCode).then(res => {
							if(res.data.success == true) {
								var d = res.data.data;
								this.dialogFormVisible = false;
								this.$parent.getBaseInfo();
								_this.$message({
									duration: 1000,
									showClose: true,
									type: 'success',
									message: "修改成功"
								})

							} else {
//								this.dialogFormVisible = false;
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

		},
		mounted() {
			this.$nextTick(function() {

			})
		}
	}
</script>