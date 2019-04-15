<template>
	<el-dialog custom-class="dialog_content1" :before-close="cancels" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" width="70%">
		<imp-panel>
			<el-row type="flex" class="row-bg" justify="center">
				<el-col :span="12">
					<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
						<el-form-item label="邮箱" v-if="false">
							<el-input type="email" v-model="myfemail"></el-input>
						</el-form-item>
						<el-form-item label="邮箱" prop="email">
							<el-input type="email" v-model="ruleForm2.email"></el-input>
						</el-form-item>
						<el-form-item prop="fcode" label="验证码">
							<el-input placeholder="验证码" v-model="ruleForm2.fcode">
								<el-button slot="append" @click="getcode(ruleForm2.email)" :disabled="disabled" class="input_btn">{{yzm}}</el-button>
							</el-input>
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
	export default {
		components: {
			'imp-panel': panel,
		},
		data() {
			return {
				myfemail:"",
				count: 60,
				disabled: false,
				yzm: "获取验证码",
				dialogFormVisible: false,
				dialogTitle: "修改邮箱",
				ruleForm2: {
					email: '',
					fcode: ''
				},
				rules2: {
					email: [{
						required: true, message: '请输入邮箱',trigger: 'blur'},
						{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
						],
					fcode: [{
						required: true, message: '请输入验证码',
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
			modify(data) { //修改回显
				this.dialogFormVisible=true;
				this.ruleForm2.email=data.femail;
			},
			
			getcode(val) { //获取短信验证码
				var _this = this;
				var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				if(val == "" || val == null) {
					_this.$message({
						type: 'warning',
						message: "请输邮箱号"
					});
				} else if(!reg.test(val)) {
					_this.$message({
						type: 'warning',
						message: "邮箱格式不正确"
					});
					return false;
				} else {
					this.getCodeMessage(this.getServerUrl() + api.REGISTER_MES, val)
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

			cancels() {
				let _this = this;
				_this.$refs.ruleForm2.resetFields();
				_this.dialogFormVisible = false;
			},
			submitForms(formName) {
				let _this = this;
				_this.$refs[formName].validate((valid) => {
					if(!valid) {
						
					} else {
						_this.$http.get(_this.getServerUrl() + api.MER_RESRT_EMAIL + "?email=" + _this.ruleForm2.email + "&fcode=" + _this.ruleForm2.fcode).then(res => {
							if(res.data.success == true) {
								var d = res.data.data;
								_this.dialogFormVisible = false;
								_this.$parent.getBaseInfo();
								_this.$message({
									duration: 1000,
									showClose: true,
									type: 'success',
									message: "修改成功"
								})

							} else {
//								_this.dialogFormVisible = false;
							}
						})
					}
				});
			},
			settingDialog(index, row, d) { //修改
				let _this = this;
				_this.ruleForm.fid = row.fid;
				_this.$http.get(_this.getServerUrl() + api.MER_SITE_MIDEFIY + "?fid=" + row.fid)
					.then(res => {
						if(res.data.success == true) {
							var d = res.data.data;

						} else {
							_this[d] = false;
						}
					})
			},

		},
		mounted: function() {

		}
	}
</script>