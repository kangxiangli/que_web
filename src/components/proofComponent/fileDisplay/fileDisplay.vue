<style scoped="scoped">
.proof_nav {
  height: 50px;
  background: #dbdbdb;
  line-height: 50px;
}

.proof_nav_bootom {
  height: 50px;
  border-bottom: 2px solid #dbdbdb;
  line-height: 50px;
}

.grid-qkl {
  background: url(../img/icon_block.png) no-repeat;
  background-position: 16px 11px;
  padding-left: 50px;
  color: #42a5f6;
}

.grid-xinxi {
  background: url(../img/icon_xx.png) no-repeat;
  background-position: 16px 11px;
  padding-left: 50px;
  color: #42a5f6;
}

.grid-yangben {
  background: url(../img/icon_yb.png) no-repeat;
  background-position: 16px 11px;
  padding-left: 50px;
  color: #42a5f6;
}

.grid-load {
  height: 50px;
  width: 90px;
  color: #42a5f6;
  line-height: 50px;
  background: url(../img/icon_db.png) no-repeat;
  background-position: 0px 13px;
  float: right;
  text-align: right;
  cursor: pointer;
}

.proof_tit {
  width: 93%;
  /*height: 40px;
  margin: 0 auto; */
  border-bottom: 1px solid #dbdbdb;
  line-height: 50px;
}

.my_color {
  color: #42a5f6;
  cursor: pointer;
  text-align: right;
}

.proof_tit img {
  vertical-align: middle;
}
</style>
<template>
	<div>
    <el-dialog :title="myPdfTitle" :visible.sync="innerVisible" append-to-body>
			<imp-panel>
				<div class="img_box" v-if="showImg">
					<el-row type="flex" class="row-bg" justify="center">
						<el-col :span="12">
							<el-card class="box-card">
								<img style="width: 100%;height: 100%;" :src="imgUrl" />
							</el-card>
						</el-col>
					</el-row>

				</div>
				<div class="txt_box" v-if="showIxt">

				</div>
			</imp-panel>
		</el-dialog>
		<el-row :gutter="20">
			<el-col :span="4" :push="1">
					<div class="grid-content bg-purple">文本</div>
			</el-col>
		</el-row>
		<el-row :gutter="20" v-for="item in ruleForm.metas">
				<el-col :span="4" :push="2">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple">{{item.name}}</div>
				</el-col>
				<el-col :span="12" >
					<div class="grid-content bg-purple">：{{item.value}}</div>
				</el-col>
			</el-row>
       <div v-show="ruleForm.files.length>0">
			<el-row class="proof_nav_bootom">
				<el-col :span="24" :push="1">
          <el-row>
					<el-col :span="12">
						<div class="">文件</div>
					</el-col>
					<el-col :span="2" :offset="6">
            <a :href="myPath+packageUrl"  target="_blank">打包下载</a>
						<!-- <div class="grid-load" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命下载中。。。" @click="downloadAll">
							打包下载
						</div> -->
						<!-- <iframe :src="allHref" width="" height="" v-show="isShow" ></iframe> -->
					</el-col>
          </el-row>
				</el-col>
			</el-row>
     

      
      <div v-for="(item, index) in ruleForm.files">
			<el-row  class="proof_tit">
			 <el-col :span="2" :offset="1">
				 <div v-if="item.fileSuffix=='hash'">
          <img src="../img/file/hash.png">
        </div>
         <div v-else-if="item.fileSuffix=='png'">
          <img src="../img/file/png.png">
        </div>
        <div v-else-if="item.fileSuffix=='jar'">
          <img src="../img/file/jar.png">
        </div>
         <div v-else-if="item.fileSuffix=='jpg'">
          <img src="../img/file/jpg.png">
        </div>
         <div v-else-if="item.fileSuffix=='xls'||item.fileSuffix=='xlsx'">
          <img src="../img/file/excel.png">
        </div>
         <div v-else-if="item.fileSuffix=='doc'||item.fileSuffix=='docx'">
          <img src="../img/file/word.png">
        </div>
         <div v-else-if="item.fileSuffix=='pdf'">
          <img src="../img/file/pdf.png">
        </div>
         <div v-else-if="item.fileSuffix=='rar'">
          <img src="../img/file/rar.png">
        </div>
         <div v-else-if="item.fileSuffix=='zip'">
          <img src="../img/file/zip.png">
        </div>
         <div v-else-if="item.fileSuffix=='txt'">
            <img src="../img/file/txt.png">
          </div>
        <div v-else>
           <img src="../img/file/icon_uk.png">
        </div>
				</el-col>
			<el-col :span="17">
					<div class="grid-content bg-purple" style="display: inline-block;color:#3EB9F8;width:200px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.name}}&nbsp;&nbsp;({{item.fsize}})</div>
				</el-col>
				<el-col :span="2">
					<div class="my_color" v-if="item.fileSuffix=='jpg'||item.fileSuffix=='png'">
						<!-- <a href="javascript:void(0)">预览</a> -->
             <a :href="myPath + item.path" target="_blank" >预览</a>
					</div>
          <div class="my_color" v-else-if="item.fileSuffix=='pdf'">
              <a :href="myPath + item.path" target="_blank" >预览</a>
          </div>
				</el-col>
				<el-col :span="2">
					<div class="my_color" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命下载中。。。">
						<!--<a :href="myPath+'/api/web/download?fid='+item.fid" target="_blank" :download="item.name">下载</a>-->
							<a :href="myPath+oneDownloadUrl+item.fid" target="_blank" :download="item.name">下载</a>
					</div>
				</el-col> 
			</el-row>
      </div>
      </div>
      </div>
</template>
<script>
import panel from "../component/panel.vue";
import * as api from "../api";
//	import VDistpicker from 'v-distpicker'
import pdf from "vue-pdf";
//	import addRouter from "@/components/addRouter" //新增
export default {
  components: {
    "imp-panel": panel,
    pdf
    //			addRouter
  },
  data() {
    return {
      myPath: this.getServerUrl(),
      isShow: false,
      showView: true, //是否显示预览
      showImg: false, //图片显示隐藏
      showIxt: false, //txt显示隐藏
      isDisplay: false, //是否显示元数据和文件
      innerVisible: false,
      dialogTitle: "",
      showSuccess: false, //是否显示存证成功
      dialogFormVisible: false,
      fullscreenLoading: false,
      fdfUrl: "", //pdf预览地址
      txtUrl: "",
      imgUrl: "",
      myPdfTitle: "",
      fileName: "", //文件名称
      allFileName: "", //打包下载文件名称
      myhref: "",
      allHref: "",
      ruleForm: {
        certValidate: {
          fid: "", //id
          ftitle: "", //存证名称
          fdepNo: "", //存证号
          ftype: "", //存证类型
          famount: "", //费用
          fdataHash: "", //数据指纹
          fmemberId: "",
          fsize: "",
          fformat: "",
          fendTime: "",
          frollNum: "",
          fisEnable: "",
          version: ""
        },
        depNo: "", //存证ID
        metas: [
          {
            fid: null,
            fname: "",
            fvalue: "",
            seq: ""
          }
        ],
        files: [
          {
            fid: "",
            fname: "",
            fvalue: "",
            fsize: ""
          }
        ]
      }
    };
  },
  props: ["ruleForm", "downLoadUrl", "packageUrl","oneDownloadUrl"],
  watch: {},
  methods: {
    // downloadAll() {
    //   //打包下载
    //   let _this = this;
    //   _this.fullscreenLoading = true;
    //   _this.$http
    //     .post(
    //       _this.getServerUrl() +
    //         _this.downLoadUrl +
    //         "?fid=" +
    //         _this.ruleForm.certValidate.fid
    //     )
    //     .then(res => {
    //       if (res.data.success == true) {
    //         _this.fullscreenLoading = false;
    //         _this.allHref = _this.getServerUrl() + res.data.data.path;
    //         _this.allFileName = res.data.data.name;
    //       } else {
    //         _this.fullscreenLoading = false;
    //       }
    //     });
    // },
    preview(path, name, type) {
      //预览
      this.innerVisible = true;
      if (
        !(
          type == "jpeg" ||
          type == "png" ||
          type == "jpg" ||
          type == "txt" ||
          type == "pdf"
        )
      ) {
        this.showView = false; //隐藏预览
      } else {
        this.showView = true; //显示预览
        if (type == "png" || type == "jpeg" || type == "jpg") {
          this.showImg = true;
          this.imgUrl = this.getServerUrl() + path;
        } else if (type == "txt") {
          //
        }
      }
    },
    downLoad(path, name) {
      //下载
      let _this = this;
      _this.fullscreenLoading = true;
      setTimeout(function() {
        _this.fullscreenLoading = false;
        _this.myhref = _this.getServerUrl() + path;
        _this.fileName = name;
      }, 500);
    },

    loadData() {}
  },
  mounted: function() {},
  created() {
    //			this.details();
  }
};
</script>