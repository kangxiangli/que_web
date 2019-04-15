<template>
	<el-dialog custom-class="dialog_content1" :before-close="cancels" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" width="70%">
		<imp-panel>
			<el-row type="flex" class="row-bg" justify="center">
				<el-col :span="12">
					<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
						<el-form-item label="原始密码" prop="oldPwd">
							<el-input type="password" v-model="ruleForm2.oldPwd"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="newPwd">
							<el-input type="password" v-model="ruleForm2.newPwd"></el-input>
						</el-form-item>
						<el-form-item label="确认密码" prop="checkPass">
							<el-input type="password" v-model="ruleForm2.checkPass"></el-input>
						</el-form-item>

					</el-form>
				</el-col>
			</el-row>

		</imp-panel>
		<span slot="footer" class="dialog-footer">
        <el-button @click="cancels()">取 消</el-button>
        <el-button type="primary" @click="submitForms('ruleForm2')" >保存</el-button>
      </span>
	</el-dialog>

</template>
<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	import auth from "../auth"
	import VDistpicker from 'v-distpicker'
	//	import addRouter from "@/components/addRouter" //新增
	export default {
		components: {
			'imp-panel': panel,
		},
		data() {

			// 密码安全性要求
			let validatePass = (rule, value, callback) => {
				//用户名正则，4到16位（字母，数字，下划线，减号）
				let reg = eval(this.userReg)
				if(!reg.test(value)) {
					callback(new Error(this.userRegTxt))

				} else {
					callback()
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.newPwd) {
					callback(new Error('两次输入密码不一致'));
				} else {
					callback();
				}
			};
			return {
				userReg: '', //用户密码正则
				userRegTxt: '',
				idjnd: "",
				dialogFormVisible: false,
				dialogTitle: "修改密码",
				ruleForm2: {
					newPwd: '',
					checkPass: '',
					oldPwd: ""

				},
				rules2: {
					oldPwd: [{
						required: true,
						message: '请输入原始密码',
						trigger: 'blur'
					}, {
						//						validator: validatePass2,
						trigger: 'blur'
					}],

					newPwd: [{
						required: true,
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						required: true,
						validator: validatePass2,
						trigger: 'blur'
					}],

				}

			}
		},
		props: {

		},
		watch: {

		},
		created() {
			
		},
		methods: {
			getValidatePass() { //获取密码正则
				this.$http.get(this.getServerUrl()+ '/api/member/rule').then(res => {
					if(res.data.success == true) {
						this.userReg = res.data.data.registrRule;
						this.userRegTxt = res.data.data.registrErr;
						this.dialogFormVisible=true;
					} else {

					}

				})
			},
		
			cancels() {
				let _this = this;
				_this.dialogFormVisible = false;
				_this.$refs.ruleForm2.resetFields();
			},
			submitForms(formName) {
				let _this = this;
				_this.$refs[formName].validate((valid) => {
					if(!valid) {

					} else {
						_this.$http.get(_this.getServerUrl() + api.MER_RESRT_PASSWORD + "?oldPwd=" + _this.ruleForm2.oldPwd + "&newPwd=" + _this.ruleForm2.newPwd).then(res => {
							if(res.data.success == true) {
								var d = res.data.data;
								_this.dialogFormVisible = false;
								_this.$message({
									duration: 800,
									showClose: true,
									type: 'success',
									message: "修改成功,请重新登录"
								})
								auth.signOut(_this);
							} else {
								//								_this.dialogFormVisible = false;
							}
						})
					}
				});
			},

		},
		mounted: function() {

		}
	}
</script>