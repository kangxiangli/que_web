<style scoped="scoped">
	.footerComponent {
		position: fixed;
		bottom: 0;
	}
</style>
<template>
	<div>
		<div v-if="isSubmit">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="问题类型" :rules="[
				{ required: true, message: '请选择问题类型', trigger: 'blur' }
				]" prop="ftype">
				<el-select v-model="form.ftype" placeholder="请选择问题类型">
					<el-option v-for="item in regionOption" :key="item.fcode" :label="item.fvalue" :value="item.fcode"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="问题描述" prop="fdesc" :rules="[
				{ required: true, message: '请输入问题描述', trigger: 'change' }
				]">
				<el-input type="textarea" v-model="form.fdesc" :rows="6" placeholder="请输入问题描述"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForms('form')">提交问题</el-button>
				<!-- <el-button @click="resetForm('ruleForm')" v-show="false">重置</el-button> -->
			</el-form-item>
		</el-form>
		</div>
		<div v-else>
			<div class="proof_dialog_four" style="margin:50px auto">
					<el-row :span="24" class="my_el_site">
						<el-row type="flex" class="row-bg" justify="center">
							<el-col :span="6">
								<img src="../assets/image/icon_suc.png" />
							</el-col>
						</el-row>
						<el-row type="flex" class="row-bg" justify="center">
							<!-- <el-col :span="6">
								恭喜您提交成功
							</el-col> -->
							<el-col :span="5">
								<el-button type="primary" @click="continueQue">继续提问</el-button>
							</el-col>
						</el-row>
						<!-- <el-row type="flex" class="row-bg" justify="center">
							<el-col :span="24">
								如果材料不完全我们工作人员会联系您，请您确保已经下载和填写了有关举证文件，我们会在收到邮件后审理您的申请！
							</el-col>
						</el-row> -->
					</el-row>
				</div>
		</div>
	</div>
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
				form: {
					ftype: '',
					fdesc: ''
				},
				regionOption: [],
				isSubmit:true
			}
		},
		props: {

		},
		watch: {

		},
		created() {

		},
		methods: {
			/**
			 * 获取问题类型
			 */
			getType() {
				this.$http.get(this.getServerUrl() + api.COMMEN_PROBLEM_GET).then(res => {
					if(res.data.success == true) {
						this.regionOption = res.data.data;

					} else {
						// _this.dialogFormVisible = false;
					}
				})
			},
			submitForms(formName) {
				debugger;
				let _this = this;
				 _this.$refs[formName].validate((valid) => {
				 	if(!valid) {
				 		//						_this.myMessageBox("error", "请正确填写信息", "温馨提示")
				 		Element.MessageBox({
				 			type: "warning",
				 			message: "请正确填写信息",
				 			title: "温馨提示"
				 		});
				 	} else {
				 		_this.$http.post(_this.getServerUrl() + api.COMMEN_PROBLEM_SUBMIT,this.form).then(res => {
				 				if(res.data.success == true) {
				 					this.$message({
				 						showClose: true,
				 						message: res.data.msg,
				 						type: 'success'
				 					});
									 this.isSubmit=false;
									 this.form.ftype='';
									 this.form.fdesc='';

				 		} else {
				 				// _this.dialogFormVisible = false;
				 			}
				 		})
				 	}
				 });
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
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
			continueQue(){
				this.isSubmit=true;
			}

		},
		mounted: function() {
			this.getType();
		}
	}
</script>