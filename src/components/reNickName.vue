<template>
	<el-dialog custom-class="dialog_content1" :validate-on-rule-change="false" :before-close="cancels" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" width="70%">
		<imp-panel>
			<el-row type="flex" class="row-bg" justify="center">
				<el-col :span="12">
					<el-form :model="ruleForm2"   :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
						<el-form-item label="昵称" prop="nickname" >
							<el-input v-model="ruleForm2.nickname" ></el-input>
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
				count: 60,
				dialogFormVisible: false,
				dialogTitle: "修改昵称",
				ruleForm2: {
					nickname: '',

				},
				rules2: {
					nickname: [{
						required: true, message: '请输入昵称',
//						trigger: 'blur'
					} , { min: 1, max: 32, message: '昵称长度限制在 1到 32位', trigger: 'blur' }],

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
			cancels() {
				let _this = this;
				_this.dialogFormVisible = false;  
			},
			submitForms(formName) {
				let _this = this;
				_this.$refs[formName].validate((valid) => {
					if(!valid) {
						
					} else {
						_this.$http.get(_this.getServerUrl() + api.MER_RESRT_NICKNAME + "?nickname=" + _this.ruleForm2.nickname)
							.then(res => {
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
//									_this.dialogFormVisible = false;
								}
							})
					}
				});
			},
			modify(data) { //修改回显
				this.dialogFormVisible=true;
				this.ruleForm2.nickname=data.fnickName;
			}

		},
		mounted: function() {

		}
	}
</script>