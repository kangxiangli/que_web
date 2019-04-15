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
		border-bottom: 1px solid #dbdbdb;
	}
	
	.my_color {
		color: #42a5f6;
		height: 40px;
		line-height: 40px;
		text-align: right;
	}
	
	.proof_tit img {
		vertical-align: middle;
	}
	
	.row-bg {
		background: none !important;
	}
	
	.grid-content {
		min-height: 36px;
		line-height: 36px;
		padding-left: 0 !important;
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	
	.el-row {
		margin-bottom: 0px !important;
	}
	
	a {
		color: #42a5f6;
		padding: 10px;
		text-decoration: none;
	}
	
	.row_bg_tit {}
</style>
<template>
	<el-dialog custom-class="dialog_content" :append-to-body="true" :before-close="cancel" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" width="70%">
		<el-dialog custom-class="dialog_content1" :title="myPdfTitle" :visible.sync="innerVisible" append-to-body>
			<imp-panel>
				<!--Img-->
				<div class="img_box" v-if="showImg">
					<el-row type="flex" justify="center">
						<el-col :span="12">
							<el-card class="box-card">
								<img style="width: 100%;height: 100%;" :src="imgUrl" />
							</el-card>
						</el-col>
					</el-row>
				</div>
				<!--Img-->
				<!--txt格式的显示和隐藏-->
				<div class="txt_box" v-if="showIxt">
				</div>
				<!--txt格式的显示和隐藏-->
				<!--pdf-->
				<pdf v-if="showPdf" ref="myPdfComponent" :src="fdfUrl"></pdf>
				<!--pdf-->
			</imp-panel>
		</el-dialog>
		<!--<imp-panel>-->
		<el-row class="proof_nav">
			<el-col :span="24">
				<el-col :span="12">
					<div class="grid-xinxi">{{$t('m.proofPage.detail.1')}}</div>
				</el-col>
				<el-col :span="12">
				</el-col>
			</el-col>
		</el-row>
		<el-row type="flex" class="row_bg_tit" justify="center">
			<el-col :span="23" :offset="1">
				{{$t('m.proofPage.detail.2')}}：{{ruleForm.ftitle}}
			</el-col>
		</el-row>

		<el-row type="flex" justify="space-around">
			<el-col :span="23" :offset="1">
				<div class="grid-content ">{{$t('m.proofPage.detail.3')}}：{{ruleForm.fattribute}}</div>
			</el-col>
			<el-col :span="10">
				<div class="grid-content ">{{$t('m.proofPage.detail.5')}}：{{ruleForm.famountDes}}</div>
			</el-col>
		</el-row>
		<el-row type="flex" justify="space-around">
			<el-col :span="23" :offset="1">
				<div class="grid-content ">{{$t('m.proofPage.detail.6')}}：{{ruleForm.fuse}}</div>
			</el-col>
			<el-col :span="10">
				<div class="grid-content ">{{$t('m.proofPage.detail.7')}}：{{ruleForm.fstatus == 8 ? $t('m.proofPage.table.7') : (ruleForm.fstatus == 1 ?$t('m.proofPage.table.8'):(ruleForm.fstatus == 2?$t('m.proofPage.table.9'):((ruleForm.fstatus == 6||ruleForm.fstatus == 7)?$t('m.proofPage.table.10'):$t('m.proofPage.table.11'))))}}
				</div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row_bg_tit" justify="center">
			<el-col :span="23" :offset="1">
				{{$t('m.proofPage.detail.4')}}：{{ruleForm.ftime}}
			</el-col>
		</el-row>
		<el-row class="proof_nav" style="margin-bottom: 20px;">
			<el-col :span="24">
				<el-col :span="12">
					<div class="grid-yangben">{{$t('m.proofPage.detail.8')}}</div>
				</el-col>

			</el-col>
		</el-row>
		<file-list :ruleForm="ruleForm" :downLoadUrl="downLoadUrl" :packageUrl="packageUrl"></file-list>

		<el-row type="flex" class="row_bg_tit" justify="center">
			<el-col :span="23" :offset="1">
				{{$t('m.proofPage.detail.15')}}：{{ruleForm.fdesc}}
			</el-col>
		</el-row>
		<el-row type="flex" justify="space-around">
			<el-col :span="23" :offset="1">
				<div class="grid-content ">{{$t('m.proofPage.detail.16')}}：{{ruleForm.fmemberName}}</div>
			</el-col>
			<el-col :span="10">
				<div class="grid-content ">{{$t('m.proofPage.detail.17')}}：{{ruleForm.fmobile}}</div>
			</el-col>
		</el-row>
		<el-row type="flex" justify="space-around">
			<el-col :span="23" :offset="1">
				<div class="grid-content ">{{$t('m.proofPage.detail.18')}}：{{ruleForm.femail}}</div>
			</el-col>
			<el-col :span="10">
				<!--<div class="grid-content ">{{$t('m.proofPage.detail.19')}}：{{ruleForm.faddDetail}}</div>-->
			</el-col>
		</el-row>
		<el-row type="flex" class="row_bg_tit" justify="center">
			<el-col :span="23" :offset="1">
				{{$t('m.proofPage.detail.19')}}：{{ruleForm.faddDetail}}
			</el-col>
		</el-row>
		<el-row class="proof_nav">
			<el-col :span="24">
				<el-col :span="12">
					<div class="grid-qkl">{{$t('m.proofPage.detail.20')}}</div>
				</el-col>

			</el-col>
		</el-row>
		<!--举证时间-->

		<el-row type="flex" class="row_bg_tit" justify="center">
			<el-col :span="23" :offset="1">
				{{$t('m.proofPage.detail.22')}}：{{ruleForm.fdepNo}}
			</el-col>
		</el-row>
		<!--举证信息文件-->
		<el-row class="proof_nav_bootom" v-if="ruleForm.quoteAttachs==null?false:(ruleForm.quoteAttachs.length>0?true:false)">
			<el-col :span="24" :offset="1">
				<el-col :span="12">
					<div class="">证书下载</div>
				</el-col>
				<el-col :span="3" :offset="6">
					<a :href="myPath+'/pub/cert/quote/zipDownload?fid='+ruleForm.fid" target="_blank">打包下载</a>
				</el-col>
			</el-col>
		</el-row>
		<el-row class="proof_tit" v-for="val in ruleForm.quoteAttachs">
			<el-col :span="2" :offset="1">
				<div v-if="val.fileSuffix=='hash'">
					<img src="../img/file/hash.png">
				</div>
				<div v-else-if="val.fileSuffix=='png'">
					<img src="../img/file/png.png">
				</div>
				<div v-else-if="val.fileSuffix=='jar'">
					<img src="../img/file/jar.png">
				</div>
				<div v-else-if="val.fileSuffix=='jpg'">
					<img src="../img/file/jpg.png">
				</div>
				<div v-else-if="val.fileSuffix=='xls'||val.fileSuffix=='xlsx'">
					<img src="../img/file/excel.png">
				</div>
				<div v-else-if="val.fileSuffix=='doc'||val.fileSuffix=='docx'">
					<img src="../img/file/word.png">
				</div>
				<div v-else-if="val.fileSuffix=='pdf'">
					<img src="../img/file/pdf.png">
				</div>
				<div v-else-if="val.fileSuffix=='rar'">
					<img src="../img/file/rar.png">
				</div>
				<div v-else-if="val.fileSuffix=='zip'">
					<img src="../img/file/zip.png">
				</div>
				<div v-else-if="val.fileSuffix=='txt'">
					<img src="../img/file/txt.png">
				</div>
				<div v-else>
					<img src="../img/file/icon_uk.png">
				</div>
			</el-col>
			<el-col :span="17">
				<div class="grid-content " style="display: inline-block;color:#3EB9F8;width:200px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{val.fname}}&nbsp;&nbsp;({{val.fisUse}})</div>
			</el-col>
			<el-col :span="2">
				<div class="my_color" v-if="val.fileSuffix=='jpg'||val.fileSuffix=='png'" @click="preview(val.fpath,val.fname,val.fileSuffix)">
					<a href="javascript:void(0)">预览</a>
				</div>
				<div class="my_color" v-else-if="val.fileSuffix=='pdf'">
					<a :href="myPath + val.fpath" target="_blank">预览</a>
				</div>
			</el-col>
			<el-col :span="2">
				<div class="my_color" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命下载中。。。">
					<a :href="myPath+'/pub/cert/quote/downloadQuote?fid='+val.fid" target="_blank" :download="val.fname">下载</a>
				</div>
				<!--<div class="my_color" v-loading.fullscreen.lock="fullscreenLoading" :element-loading-text="$t('m.proofPage.loading.1')" @click="downBookLoad(val.fpath,val.fname)">
						<a :href="myPath+val.fpath" target="_blank" :download="val.fname">{{$t('m.proofPage.detail.24')}}</a>
					</div>-->
			</el-col>
			<!--举证信息文件end-->
		</el-row>
		<!--</imp-panel>-->
		<span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">{{$t('m.proofPage.detail.23')}}</el-button>
        <!--<el-button type="primary" @click="save('ruleForm')" >保存</el-button>-->
      </span>
	</el-dialog>

</template>
<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	//	import texts from '../../test/index.vue' //ceshi
	import fileDisplay from '../fileDisplay/fileDisplay.vue'
	import pdf from 'vue-pdf'
	//	import addRouter from "@/components/addRouter" //新增
	export default {
		components: {
			'imp-panel': panel,
			pdf,
			"file-list": fileDisplay
			//			texts
		},
		data() {
			let validfmobile = (rule, value, callback) => { //手机号正则
				let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!reg.test(value)) {
					callback(new Error(this.$t('m.proofPage.errors.1')))
				} else {
					callback()
				}
			};
			return {
				myPath: this.getServerUrl(),
				allBookHref: "",
				myBookhref: "",
				isShow: false,
				showView: true, //是否显示预览
				typeView: "",
				showPdf: false, //pdf显示和隐藏
				showImg: false, //图片显示隐藏
				showIxt: false, //txt显示隐藏
				innerVisible: false,
				dialogTitle: "详情",
				dialogFormVisible: false,
				fullscreenLoading: false,
				fdfUrl: "", //pdf预览地址
				txtUrl: "",
				imgUrl: "",
				myPdfTitle: "",
				fileName: "", //文件名称
				allFileName: "", //打包下载文件名称
				downLoadUrl: "/api/cert/quote/attach/download?fid=",
				packageUrl: "",
				myhref: "",
				allHref: "",
				ruleForm: {
					fid: "",
					fdepNo: "",
					fstatus: "",
					ftime: "",
					fdataHash: "",
					fmemberId: "",
					ftitle: "",
					fsize: "",
					ftype: "",
					fendTime: "",
					fdesc: "",
					fattribute: "",
					fuse: "",
					fisLaw: "",
					fmemberName: "",
					fmobile: "",
					femail: "",
					faddDetail: "",
					famountDes: "",
					quoteAttachs: [
						//					{
						//						fid: "",
						//						fquoteId: "",
						//						fname: "",
						//						fpath: "",
						//						fisUse: "",
						//						fileSuffix:""
						//					}
					],
					metas: [
						//					{
						//						fid: "",
						//						name: "",
						//						value: "",
						//						seq: ""
						//					}
					],
					files: [
						//					{
						//						fid: "",
						//						name: "",
						//						path: "",
						//						fsize: "",
						//							fileSuffix:"",
						//
						//					}
					],

				},

			}
		},
		props: ['myFid'],
		watch: {

		},
		methods: {
			typeFormat(path) {
				this.typeView = path.toLowerCase().split('.').pop();
			},
			downBookLoad(path, name) { //数据样本下载
				let _this = this;
				_this.fullscreenLoading = true;
				setTimeout(function() {
					_this.fullscreenLoading = false;
					//					_this.myBookhref = _this.getServerUrl() + path;
					//					_this.fileName = name

				}, 500);
			},

			//			downloadBookAll() { //举证信息打包下载
			//				let _this = this;
			//				_this.fullscreenLoading = true;
			//				_this.$http.post(_this.getServerUrl() + api.PROOF_BOOK_DOWNLOAD_ALL + "?fid=" + _this.ruleForm.fid)
			//					.then(res => {
			//						if(res.data.success == true) {
			//							_this.fullscreenLoading = false;
			//							_this.allBookHref = _this.getServerUrl() + res.data.data.path;
			//						} else {
			//							_this.fullscreenLoading = false;
			//						}
			//
			//					})
			//			},
			downloadAll() { //数据样本打包下载
				let _this = this;
				_this.fullscreenLoading = true;
				_this.$http.post(_this.getServerUrl() + api.PROOF_FORM_DOWNLOAD_ALL + "?fid=" + _this.ruleForm.fid)
					.then(res => {
						if(res.data.success == true) {
							_this.fullscreenLoading = false;
							_this.allHref = _this.getServerUrl() + res.data.data.path;
							_this.allFileName = res.data.data.name;

						} else {
							_this.fullscreenLoading = false;
						}

					})
			},
			preview(path, name, type) { //数据样本预览
				this.innerVisible = true;
				//				let type = path.toLowerCase().split('.').pop();
				if(!(type == "jpeg" || type == "png" || type == "jpg" || type == "txt" || type == "pdf" || type == "jar")) {
					//					this.showView = false; //隐藏预览
				} else {
					//					this.showView = true; //显示预览
					if(type == "pdf") {
						this.fdfUrl = this.getServerUrl() + path;
						//						this.fdfUrl = "http://192.168.1.181:8080/CarLoad/system/20180413143126中链存证平台一期开发计划v0.8.pdf"
						this.showImg = false;
						this.showIxt = false;
						this.showPdf = true;
					} else if(type == "png" || type == "jpeg" || type == "jpg") {
						this.showImg = true;
						this.showPdf = false;
						this.imgUrl = this.getServerUrl() + path;
					} else if(type == "txt") {
						//										

					}

				}

			},
			downLoad(path, name) { //数据样本下载
				let _this = this;
				_this.fullscreenLoading = true;
				setTimeout(function() {
					_this.fullscreenLoading = false;
					//					_this.myhref = _this.getServerUrl() + path;
					_this.fileName = name

				}, 500);
			},

			cancel() { //取消
				let _this = this;
				this.allHref = ""
				this.myhref = "";
				this.allBookHref = ""
				this.myBookhref = ""
				_this.dialogFormVisible = false;

				//				_this.$refs.ruleForm.resetFields();
			},

			details(id) { //详情赋值
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.PROOF_FORM_DETAILS + "?fid=" + id)
					.then(res => {
						if(res.data.success == true) {
							_this.dialogFormVisible = true;
							_this.$nextTick(function() {
								_this.ruleForm = res.data.data;
							_this.packageUrl = '/api/cert/quote/attach/downloadPack?fid=' + res.data.data.fid;
							})
							
						} else {

						}
					})
			},

		},
		mounted: function() {
			this.$nextTick(function() {

			})

		},
		created() {

		},
	}
</script>