<style>
	body {
		margin: 0px;
		padding: 0px;
	}
	
	.my_license {
		position: relative;
		background: #fff;
		z-index: 999;
		width: 100%;
		height: 800px;
	}
	
	.my_headers {
		height: 100px !important;
		line-height: 100px;
		background-color: #42A5F6;
		text-align: center;
		font-size: 22px;
		color: #fff;
		font-weight: 600;
	}
	
	.license_con {
		width: 73%;
		margin: 0 auto;
	}
	
	.license_add {
		border: 1px solid #ccc;
	}
	
	.license_title {
		height: 70px;
		line-height: 70px;
		background-color: #dbdbdb;
		padding-left: 10px;
	}
	
	.license_code_red {
		padding: 10px;
		color: red;
		text-align: center;
	}
	.logo_boxs{
		position: relative;
    height: 100px;
	}
	.license_code {
		padding: 10px;
		white-space: normal;
		word-break: break-all;
		word-wrap: break-word;
		    text-align: center;
	}
	
	.create {
		padding: 40px 0;
		    text-align: center;
	}
</style>
<template>
	<div class="my_license">
		<el-container>
			<el-header class="my_headers">
				<el-col :span="6">
					<div class="grid-content bg-purple  logo_boxs">
						<img class="flogo" alt="举证平台logo" src="../../../static/img/sdlogo.png">
					</div>
				</el-col>
				<el-col :span="12">
					license申请
				</el-col>

			</el-header>
			<el-main class="license_con">
				<div class="license_add">
					<div class="license_title">1.生成license申请码（请将生成的license发送给管理员）</div>
					<div :class="(code==null||code=='')?'license_code_red':'license_code'" v-if="code==null||code==''">~请点击生成~</div>
					<div v-else>
						<div class="license_code" v-html="code"></div>
					</div>
				</div>
				<div class="create">
					<el-button type="primary" plain @click="createdFn()">生成</el-button>
				</div>
				<div class="license_add">
					<div class="license_title">2.上传license</div>
					<div class="license_code">
						<el-upload class="upload-demo" drag :action="actionUrl" :file-list="fileList" :on-success="handleSuccess" :on-error="handleError" :on-remove="handleRemove">
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
							<!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
						</el-upload>
					</div>
				</div>

			</el-main>
		</el-container>

	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				fileList: [],
				actionUrl: this.getServerUrl() + "/license/upload",
				code: "",
			}
		},
		methods: {
			createdFn() {
				this.$http.get(this.getServerUrl() + "/license/get").then(res => {
					if(res.data.success == true) {
						this.code = res.data.data;
					}
				});
			},
			handleSuccess(response, file, fileList) {

				if(response.success == true) {
					this.$alert('上传成功', '温馨提示', {
						confirmButtonText: '确定',
						callback: action => {
							window.sessionStorage.setItem('licenseFlag', true);
							this.$router.push('/homePage');
						}
					});

				} else {
					this.fileList = [];
					window.sessionStorage.setItem('licenseFlag', false);
					this.$message({
						message: response.msg,
						type: 'warning'
					});
				}
			},
			handleError(err, file, fileList) {
				this.$message({
					message: "上传失败",
					type: 'warning'
				});

			},

			handleRemove(file, fileList) {
				let fid = file.response.data;
				//				for(let i = 0; i < this.fids.length; i++) {
				//					if(this.fids[i].fid == fid) {
				//						this.fids.splice(i, 1);
				//					}
				//				}
				//				this.$http.get(this.getServerUrl() + this.delUrl + "?fid=" + fid).then(res => {
				//					if(res.data.success == true) {
				//						this.$message({
				//							message: "删除成功",
				//							type: 'success'
				//						});
				//						this.finish();
				//					}
				//				});
			},
		},
		created() {

		},
		mounted: function() {

		}
	}
</script>