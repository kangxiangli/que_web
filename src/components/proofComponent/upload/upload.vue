<style scoped="scoped">
  .el-upload__tip{
    color:#FF4645;
    margin-top:-20px
  }
</style>
<template>
	<div>
		<el-upload class="upload-demo my_upload_demo" ref="upload" drag :action="actionUrl" multiple :file-list="fileList" :on-success="handleSuccess" :on-error="handleError" :on-remove="handleRemove" :before-upload="handleBefore">
			<!--<i class="el-icon-upload"></i>-->
			<!--<div class="el-upload__text">{{$t('m.message.1')}}</div>-->
			<!--<div class="el-upload__tip" style="color:#FF4645;" slot="tip">{{$t('m.message.2')}}</div>-->
      <i class="el-icon-upload"></i>
      <div class="el-upload__tip" slot="tip">{{$t('m.message.2')}}</div>
		</el-upload>
	</div>
</template>

<script>
	import * as api from "../api";
	import Vue from "vue";
	import Element from "element-ui";

	export default {
		components: {},

		data() {
			return {
				actionUrl: this.getServerUrl() + this.action,
				fids: [] //文件id集合，返回给父组件
			};
		},
		props: {
			action: {
				type: String,
				default: ''
			},
			delUrl: {
				type: String,
				default: ''
			},
			fileSize: {
				type: String,
				default: '100'
			},
			fileNamePath: {
				type: String,
				default: '50'
			},
			fileList: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		methods: {
			handleSuccess(response, file, fileList) {
				this.fids.push({
					fid: response.data
				});
				this.finish();
				this.$emit("disableElement", false);

			},
			handleBefore(file) {
				let size = file.size / 1024 / 1024; //换算为M
				if(size > this.fileSize) {
					this.$message({
						message: "文件大小不符",
						type: 'warning'
					});
					return false;
				}
				let index = file.name.lastIndexOf(".");
				if(index > this.fileNamePath) {
					this.$message({
						message: "文件名字不能超过50个字",
						type: 'warning'
					});
					return false;
				}
				this.$emit("disableElement", true);
			},
			handleError(err, file, fileList) {
				this.$message({
					message: "上传失败，请检查文件是否符合要求",
					type: 'warning'
				});

			},

			handleRemove(file, fileList) {
				let fid = file.response.data;
				for(let i = 0; i < this.fids.length; i++) {
					if(this.fids[i].fid == fid) {
						this.fids.splice(i, 1);
					}
				}
				this.$http.get(this.getServerUrl() + this.delUrl + "?fid=" + fid).then(res => {
					if(res.data.success == true) {
						this.$message({
							message: "删除成功",
							type: 'success'
						});
						this.finish();
					}
				});
			},
			finish() {
				this.$emit("finish", this.fids);
			},
			reset() {
				this.fids = [];
				this.$refs.upload.clearFiles();
			}
		},
		mounted: function() {},
		created: function() {}
	};
</script>
