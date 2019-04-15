<style type="text/css" src='../css/index.css'></style>
<template>
	<div class="proof_dialog" id="proofPage">

		<div class="steps_box">
			<div class="steps_cen">
				<el-steps :active="active" finish-status="success">
					<el-step title="用户告知"></el-step>
					<el-step title="填写信息"></el-step>
					<el-step title="支付"></el-step>
					<el-step title="完成"></el-step>
				</el-steps>
			</div>
		</div>
		<div class="proof_dialog_one" v-if="dialog_one_show">
			<el-row :gutter="24">
				<div class="adv_list">
					<h2 class="adv_title">{{$t('m.proofPage.content.1')}}</h2>
					<p><img src="../img/zl_03.png"/></p>
				</div>
			</el-row>
			<imp-panel>
				<div class="message_cent" v-html="informData">

				</div>
			</imp-panel>
			<p class="proof_c">
				<el-checkbox v-model="myradio" label="1" @change="myradioF(myradio)"><span style="color: #41a4f5;">{{$t('m.proofPage.content.2')}}</span></el-checkbox>
			</p>
			<div class="proof_c">{{$t('m.proofPage.content.3')}}</div>
			<div class="proof_c"> {{$t('m.proofPage.content.4')}}</div>
			<div class="proof_c">{{$t('m.proofPage.content.5')}}</div>
			<p class="proof_c">
				<!--<span class="proop_submit" @click="nextThree">确定</span>-->
				<el-button  type="primary"  class="is_proof_true" @click="nextOne" :disabled="disabled">
				<a :href="disHref" :class="isDefault==true?'isPointer':'isDefault'" style="color: #fff; height: 50px;width: 180px;">{{$t('m.proofPage.content.6')}}</a>
				</el-button>

			</p>
		</div>
		<div class="proof_dialog_tow" v-if="dialog_tow_show">
			<el-row>
				<el-col>
					<el-form :model="formData" ref="formData" label-width="80px">
						<el-row>
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.detail.2')" prop="quote.ftitle" :rules="[{ required: true, message: '请输入举证名称'}]">
									<el-input v-model="formData.quote.ftitle" clearable="true"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.12')" prop="depNo" :rules="[{ required: true, message: '请输入存证号'}]">
									<el-input v-model="formData.depNo"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.13')+(index+1)" v-for="(item,index) in metas">
									<!-- <div v-for="(item,index) in metas"> -->
										<el-row>
											<el-col :span="4">
												<el-input v-model="metas[index].name" :placeholder="$t('m.certCenter.5')" clearable></el-input>
											</el-col>
											<el-col :span="12" :offset="1">
												<el-input v-model="metas[index].value" :placeholder="$t('m.certCenter.8')" clearable></el-input>
												<!-- <el-input v-show="true" v-model="formData.specList.index" :placeholder="$t('m.certCenter.8')" clearable></el-input> -->
											</el-col>

											<el-col :span="6" style="margin-left:10px;">
												<el-button type="primary" icon="el-icon-plus" @click="addSpec(index)"></el-button>
												<el-button type="primary" icon="el-icon-delete" @click="delSpec(index)"></el-button>
											</el-col>
										</el-row>
									<!-- </div> -->
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24" class="my_el_three">
								<!--<el-form-item :label="$t('m.certCenter.9')">
								</el-form-item>-->
								<!--<el-upload class="upload-demo my_upload_demo" drag :action="uploadUrl" multiple :on-success="handleSuccess" :on-remove="handleRemove"  :before-upload="handleBefore">-->
									<!--<i class="el-icon-upload"></i>-->
									<!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
									<!--<div class="el-upload__tip" slot="tip">上传单个文件不超过100M</div>-->
								<!--</el-upload>-->
                <el-form-item>
								  <my-upload :action='uploadUrl' ref="uploadFile" :delUrl='delUrl' @finish='uploadFinish' @disableElement="disableElement"></my-upload>
                </el-form-item>
              </el-col>
						</el-row>
						<el-row>
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.14')">
									<el-input type="textarea" v-model="formData.quote.fdesc"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row style="margin-bottom: 0;">
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.15')">
									<el-radio-group v-model="formData.quote.fattribute" @change="fattribute(formData.quote.fattribute)">
										<el-radio :label="$t('m.proofPage.content.7')">{{$t('m.proofPage.content.7')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.8')">{{$t('m.proofPage.content.8')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.9')">{{$t('m.proofPage.content.9')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.10')">{{$t('m.proofPage.content.10')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.11')">{{$t('m.proofPage.content.11')}}</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row style="margin-bottom: 0;">
							<el-col :span="16" :offset="4">
								<el-form-item label="鉴定用途">
									<el-radio-group v-model="formData.quote.fuse" @change="fuse(formData.quote.fuse)">
										<el-radio :label="$t('m.proofPage.content.12')">{{$t('m.proofPage.content.12')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.13')">{{$t('m.proofPage.content.13')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.14')">{{$t('m.proofPage.content.14')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.15')">{{$t('m.proofPage.content.15')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.16')">{{$t('m.proofPage.content.16')}}</el-radio>
										<el-radio :label="$t('m.proofPage.content.17')">{{$t('m.proofPage.content.17')}}</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row style="margin-bottom: 0;">
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.17')">
									<el-radio v-model="formData.quote.fisLaw" :label="$t('m.proofPage.content.18')" @change="fisLaw(formData.quote.fisLaw)">{{$t('m.proofPage.content.18')}}</el-radio>
									<el-radio v-model="formData.quote.fisLaw" :label="$t('m.proofPage.content.19')" @change="fisLaw(formData.quote.fisLaw)">{{$t('m.proofPage.content.19')}}</el-radio>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :span="24">
							<p style="font-size: 12px; color: #666666;">{{$t('m.proofPage.content.20')}}<span style="color: #d8534a;font-size: 14px;">请下载下面的各项文件</span>，{{$t('m.proofPage.content.22')}} &nbsp;&nbsp;&nbsp;&nbsp;{{$t('m.proofPage.content.23')}} &nbsp;&nbsp;&nbsp;&nbsp;{{$t('m.proofPage.content.24')}}</p>
						</el-row>
						<el-row class="my_el">
							<el-row type="flex"  justify="space-around">
								<el-col :span="6" v-for="(item, index) in myData">
									<div class="grid_download bg-purple">
										<el-tooltip class="item" effect="light" :content="item.fname" placement="top-end">
											<a :href="myHref" target="_blank" :download="item.fname">
												<el-button v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命下载中。。。" @click="downLoad(item.fpath,item.fname)">
													<i class="el-icon-download"></i> {{item.fname}}
													<!--<iframe id="" :src="item.fpath" width="" height="" v-show="isShow"></iframe>-->
												</el-button>
											</a>
										</el-tooltip>

									</div>
								</el-col>

							</el-row>
						</el-row>
						<div style="float: right;height: 30px;padding: 0;line-height: 30px; color: #666;">{{$t('m.proofPage.content.25')}}</div>
						<el-row :span="24" class="my_el_one">
							<i class="el-icon-location-outline"></i><span>{{$t('m.proofPage.content.26')}}</span>
						</el-row>
						<el-row>
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.18')">
									<el-input v-model="formData.quote.fmemberName"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.19')">
									<el-input v-model="formData.quote.fmobile"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.20')">
									<el-input v-model="formData.quote.femail"></el-input>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row>
							<el-col :span="16" :offset="4">
								<el-form-item :label="$t('m.proofPage.table.21')">
									<el-input type="textarea" v-model="formData.quote.faddDetail"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :span="24" class="my_el_tow">
								<el-button  type="primary"  class="is_proof_true" @click="save('formData')" :disabled="disabled">
									<a :href="disHref"  style="color: #fff; height: 50px;width: 180px;"> {{$t('m.proofPage.table.22')}}</a>
								</el-button>
							<!-- <a href="javascript:void(0)" :class="isEnable==true?'isDefault proop_submit':'isPointer proop_submit'"  @click="save('formData')"> {{$t('m.proofPage.table.22')}}</a> -->
							<!-- <el-button type="primary" :disabled="isEnable" @click="save('formData')"> {{$t('m.proofPage.table.22')}}</el-button> -->
						</el-row>
					</el-form>
				</el-col>
			</el-row>
		</div>

		<div class="proof_dialog_three" v-if="dialog_three_show">
			<el-row :span="24">
				<span class="my_color">订单信息</span>
			</el-row>
			<el-row :span="24" class="my_el_site">
				<el-col :span="12" :push="4">
					<div class="grid_de colSpan"> <span class="myInfo ftitle"></span> 商品名称:{{orderData.ftitle}}</div>
				</el-col>
				<el-col :span="12" :push="4">
					<div class="grid_de"><span class="myInfo ftime"></span> 购买时间:{{orderData.ftime}}</div>
				</el-col>
				<el-col :span="12" :push="4">
					<div class="grid_de "><span class="myInfo fmemberName"></span> 购买人:{{orderData.fmemberName}}</div>
				</el-col>
				<el-col :span="12" :push="4">
					<div class="grid_de"><span class="myInfo famount"></span> 交易金额:{{orderData.famount}} 元</div>
				</el-col>
				<el-col :span="19" :push="4">
					<div class="grid_de"><span class="myInfo fid"></span> 订单号:{{orderData.fid}}</div>
				</el-col>
			</el-row>
			<el-row :span="24">
				<span class="my_color">支付方式</span>
			</el-row>
			<el-row :span="24" class="my_el_site">
				<el-row type="flex" class="row-bg" justify="center">
					<!--<el-col :span="6">
						<div>
							<el-radio v-model="bank" label="01" @change="bankChange(bank)"> <span class="grid-icon grid-icon1"></span>中国银行</el-radio>
						</div>
					</el-col>
					<el-col :span="6">
						<div>
							<el-radio v-model="bank" label="02" @change="bankChange(bank)"><span class="grid-icon grid-icon2"></span>北京银行</el-radio>
						</div>
					</el-col>-->
					<el-col :span="6">
						<div>
							<el-radio v-model="bank" label="03" @change="bankChange(bank)"><span class="grid-icon grid-icon3"></span>支付宝</el-radio>
						</div>
					</el-col>
					<el-col :span="6">
						<div>
							<el-radio v-model="bank" label="04" @change="bankChange(bank)"><span class="grid-icon grid-icon4"></span>微信</el-radio>
						</div>
					</el-col>
				</el-row>
			</el-row>
			<el-row :span="24" class="my_el_tow my_el_three" style="margin-top: 110px;">
				<span class="proop_submit" @click="nextThree">确定</span>
			</el-row>
			<!--生成支付二维码-->
			<addCode ref="codeComponent"></addCode>

		</div>
		<!--支付完成 star-->
		<div class="proof_dialog_four" v-if="dialog_four_show">
			<el-row :span="24" class="my_el_site">
				<el-row type="flex" class="row-bg" justify="center">

					<el-col :span="6">
						<img src="../img/icon_suc.png" />
					</el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="center">
					<el-col :span="6">
						恭喜您提交成功
					</el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="center">
					<el-col :span="24">
						如果材料不完全我们工作人员会联系您，请您确保已经下载和填写了有关举证文件，我们会在收到邮件后审理您的申请！
					</el-col>
				</el-row>
			</el-row>
		</div>

	</div>
</template>
<style>
	.my_upload_demo>.el-upload,
	.my_upload_demo>.el-upload .el-upload-dragger {
		width: 100% !important;
		background-color: rgba(0, 0, 0, 0.1);
		border-color: #666;
	}

	.el-upload-dragger .el-icon-upload {
		color: #6b727c !important;
	}
</style>
<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	import addCode from "./addCode" //二维码
	import upload from "../upload/upload.vue"
	//	import addZfCode from "@/components/addZfCode.vue" //支付宝二维码
	export default {
		components: {
			'imp-panel': panel,
			addCode,
			"my-upload":upload
			//			addZfCode
		},
		data() {
			return {
				isDefault:false,
				disHref:"javscript:void(0)",
				bank: '04', //默认微信支付
				fsid: "",
				orderData: {
					ftitle: "",
					famount: "",
					fmemberName: "",
					ftime: "",
					fid: ""
				},
				isEnable:false,
				disabled: true,
				myradio: false,
				informData: "", //用户告知内容
				fullscreenLoading: false,
				fileName: "",
				myHref: "",
				isShow: false,
				dialog_one_show: true,
				dialog_tow_show: false,
				dialog_three_show: false,
				dialog_four_show: false,
				active: 0,
				myFlag: false,
				myNewData: [],
				myData: [],
				metas: [{
						name: "",
						value: ""
				}],
				formData: {
					depNo: "",
					quote: {
						ftitle: "",
						fdesc: "",
						fattribute: "",
						fuse: "",
						fisLaw: "",
						fmemberName: "",
						fmobile: "",
						femail: "",
						fadd: "",
						faddDetail: "",
					},
					files: [],
					metas: []
				},
				uploadUrl: api.PROOF_FORM_UPLOAD,
      			delUrl:api.PROOF_FORM_UPLOAD_DEL,
			}
		},
		props: {

		},
		watch: {

		},
		created() {

		},
		methods: {
			bankChange(val) { //银行

			},
			myradioF(val) {
//				this.disabled = !val;
				if(val == true) {
					this.disabled = false;
					this.disHref="#proofPage"
					this.isDefault=true;//鼠标经过显示小手
				} else {
					this.disabled = true;
					this.disHref="javscript:;"
					this.isDefault=false;//鼠标经过显示禁用
				}
			},
			fisLaw(val) {
				this.fisLaw = val;
			},

			fattribute(val) {
				this.fattribute = val;
			},
			fuse(val) { //鉴定用途
				this.fuse = val;
			},
			downLoad(path, name) { //下载文件
				let _this = this;
				_this.fullscreenLoading = true;
				setTimeout(function() {
					_this.fullscreenLoading = false;
					_this.myHref = _this.getServerUrl() + path;

				}, 500);
			},
			dataLoad() { //获取可下载在的文件
				let _this = this;
				this.$http.get(_this.getServerUrl() + api.PROOF_FORM_DOWNLOAD_FILE)
					.then(res => {
						if(res.data.success == true) {
							let data = res.data.data;
							_this.myData = res.data.data;
						} else {

						}
					})
			},
			addSpec: function() {
				var data = {};
				data.value = "";
				data.name = "";
				this.metas.push(data);
			},
			delSpec: function(index) {
      if (this.metas.length<= 1) {
        this.$message({
          type: "warning",
          showClose: true,
          message: "最后一个不能删除"
        });
        return false;
      }
      if (index !== -1) {
          this.metas.splice(index, 1)
      }

    },
			// handleSuccess(response, file, fileList) {
			// 	this.formData.files.push({
			// 		"fid": response.data
			// 	});
			// },
			// handleRemove(file, fileList) {
			// 	let fid = file.response.data;
			// 	for(let i = 0; i < this.formData.files.length; i++) {
			// 		if(this.formData.files[i].fid == fid) {
			// 			this.formData.files.splice(i, 1);

			// 		}
			// 	}
			// 	this.$http.get(this.getServerUrl() + api.PROOF_FORM_UPLOAD_DEL + "?fid=" + fid).then(res => {
			// 		if(res.data.success == true) {
			// 			this.$message({
			// 				message: "删除成功",
			// 				type: 'success'
			// 			});
			// 		} else {

			// 		}
			// 	})
			// },
			// handleBefore(file){
			// 	this.isEnable=true;
			// 	if(file.size>104857600){
			// 		this.$message({
			// 		message: "文件大小不符",
			// 		type: 'warning'
			// 		});
			// 		return false;
			// 	}

			// 	},
			uploadFinish(data){
				// this.form.files=[];
				this.formData.files=data;
			},
			disableElement(data){
				data==true?this.isEnable=true:this.isEnable=false;
			},
			save(formName) {
				let _this = this;
				_this.$refs[formName].validate((valid) => {
					if(!valid) {

					} else {
						if(_this.metas.length==1&&!_this.metas[0].value){//只有一项且为空
							_this.formData.metas=[];
						}else if(_this.metas.length==1&&!!_this.metas[0].value){//只有一项且不为空
							_this.formData.metas=_this.metas;
						}else if(_this.metas.length>1){//多项去除空
							for (let i=0;i<_this.metas.length;i++) {
								if(!_this.metas[i].value){
									_this.metas.splice(i,1)
								}
							}
							_this.formData.metas=_this.metas;
						}
						_this.$http.post(_this.getServerUrl() + api.PROOF_FORM_SUBMIT, _this.formData).then(res => {
							if(res.data.success == true) {
								_this.formData.files = [];
								_this.dialog_tow_show = false;
								_this.dialog_three_show = true;
								_this.active = 2;
								_this.fsid = res.data.data.fid;
								_this.getOrderInfo(res.data.data.fid)
							} else {

							}
						});
					}
				});

			},
			getOrderInfo(fid) { //获取订单基本信息
				let _this = this;
				this.$http.get(this.getServerUrl() + api.PROOF_ORDER_INFO + "?fid=" + fid).then(res => {
					if(res.data.success == true) {
						_this.orderData.famount = res.data.data.famount;
						_this.orderData.fmemberName = res.data.data.fmemberName;
						_this.orderData.ftitle = res.data.data.ftitle;
						_this.orderData.fid = res.data.data.fid;
						_this.orderData.ftime = res.data.data.ftime;

					} else {

					}
				})
			},
			saveToChain() {
				this.$http.post(this.getServerUrl() + api.SAVECERT_FINGER_SAVETOCHAIN, this.formData).then(res => {
					if(res.data.success == true) {
						this.formData.files = [];
						Element.MessageBox({
							type: "success",
							message: res.data.msg,
							title: "温馨提示"
						});
					} else {

					}
				});
			},
			nextOne() { //确认申请举证
				this.active = 1
				this.dialog_one_show = false;
				this.dialog_tow_show = true;
				this.loadDefaultSite(); //默认地址
				this.dataLoad(); //获取可下载在的文件
			},

			nextThree() { //支付
				let _this = this;
				if(this.bank == "03") {
					_this.$refs.codeComponent.dialogFormVisible = true;
					_this.$refs.codeComponent.dialogTitle = "支付宝支付";
					_this.$refs.codeComponent.myCodeFid("03", this.fsid, api.PROOF_FORM_PAY_ZHIFUBAO,_this.orderData.famount);
				} else if(this.bank == "04") {
					this.$refs.codeComponent.dialogFormVisible = true;
					this.$refs.codeComponent.dialogTitle = "微信支付";
					this.$refs.codeComponent.myCodeFid("04", this.fsid, api.PROOF_FORM_PAY_ZHIFUBAO,_this.orderData.famount);
				} else if(this.bank == "01") {
					//					this.$refs.codeComponent.dialogFormVisible=true;
					//					this.$refs.codeComponent.dialogTitle="中国银行支付";
					//					this.$refs.codeComponent.myCodeFid("01",this.fsid,api.PROOF_FORM_PAY_ZHIFUBAO);
				} else if(this.bank == "02") {
					//					this.$refs.codeComponent.dialogFormVisible=true;
					//					this.$refs.codeComponent.dialogTitle="北京银行支付";
					//					this.$refs.codeComponent.myCodeFid("02",this.fsid,api.PROOF_FORM_PAY_ZHIFUBAO);
				}
			},
			loadDefaultSite() { //默认地址
				this.$http.get(this.getServerUrl() + api.PROOF_FORM_SITE).then(res => {
					if(res.data.success == true) {
						this.formData.quote.fmemberName = res.data.data.fname;
						this.formData.quote.fmobile = res.data.data.fmobile;
						this.formData.quote.faddDetail = res.data.data.faddDetail.replace(new RegExp(',','gm'),'');
						this.formData.quote.femail = res.data.data.femail; //邮件地址

					} else {

					}
				});
			},
			informDatas() { //
				this.$http.get(this.getServerUrl() + api.PROOF_FORM_INFORM).then(res => {
					if(res.data.success == true) {
						this.informData = res.data.data.fcontent;

					} else {

					}
				});
			}
		},
		mounted: function() {
			this.$nextTick(function() {

			})

		},
		created() {

			this.informDatas();
		}

	}
</script>
