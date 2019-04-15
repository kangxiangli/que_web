<style scoped="scoped">
</style>
<template>
	<div>
        <el-upload
            class="upload-demo my_upload_demo"
                      drag
                      :action="uploadUrl"
                      multiple
                      :on-success="handleSuccess"
                      :on-remove="handleRemove"
                     >
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">{{$t('m.message.1')}}</div>
                      <div class="el-upload__tip" slot="tip">{{$t('m.message.2')}}</div>
        </el-upload>
	</div>
</template>

<script>
import * as api from "@/api";
import Vue from "vue";
import Element from "element-ui";
export default {
  components: {
  },

  data() {
    return {
      uploadUrl: this.getServerUrl() + api.VALIDCERT_DATACERT_UPLOAD,
      fileList: [],
    };
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.formData.files.push({ fid: response.data });
    },
    handleRemove(file, fileList) {
      let fid = file.response.data;
      for (let i = 0; i < this.formData.files.length; i++) {
        if (this.formData.files[i].fid == fid) {
          this.formData.files.splice(i, 1);
        }
      }
      this.$http
        .get(this.getServerUrl() + api.PROOF_FORM_UPLOAD_DEL + "?fid=" + fid)
        .then(res => {
          if (res.data.success == true) {
            this.$message({
              message: "删除成功",
              type: "success"
            });
          } else {
          }
        });
    }
    
  },
  mounted: function() {
  },
  created: function() {}
};
</script>