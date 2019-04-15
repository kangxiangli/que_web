<style type="text/css">
	.grid-search .el-collapse-item__header {
		background: lavenderblush;
		color: #42a5f6 !important;
	}
</style>
<style type="text/css" scoped="scoped">
	.proof_nav {
		height: 50px;
		background: #dbdbdb;
		line-height: 50px;
	}

	.grid-search {
		background: url(../img/icon_high.png) no-repeat;
		background-position: 14px 4px;
		padding: 10px 30px;
	}

	.grid-time {
		height: 50px;
		width: 50px;
		line-height: 50px;
		background: url(../img/icon_time.png) no-repeat;
		background-position: 0px 17px;
		float: right;
	}

	.proop_ser {
		display: inline-block;
		height: 40px;
		width: 133px;
		text-align: center;
		color: #fff;
		font-size: 18px;
		letter-spacing: 5px;
		line-height: 40px;
		background-color: #42a5f6;
		border: 1px solid #939393;
		border-radius: 4px;
		cursor: pointer;
	}

	.search_txt {
		color: #42a5f6;
		font-size: 16px;
	}
</style>
<style type="text/css" scoped="scoped">
	.steps_box {
		width: 100%;
		height: 170px;
		margin-top: 70px;
		margin-bottom: 40px;
		position: relative;
		background-color: #edebec;
	}

	.steps_cen {
		width: 100%;
		width: 100%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.el-steps {
		width: 95%;
		margin: 0 auto;
	}

	.adv_list {
		padding-top: 33px;
		padding-bottom: 60px;
		text-align: center;
	}

	.adv_title {
		font-size: 24px;
		font-weight: 500;
		/*color: #434343;*/
	}

	.message_cent {
		padding: 45px 35px;
		padding: 45px 35px;
		height: 750px;
		overflow-x: hidden;
	}

	.message_cent h4 {
		margin: 17px 0;
		color: #666;
	}

	.message_cent p {
		margin: 0px;
	}

	.proof_c {
		text-align: center;
		color: #666;
	}
	/*上传*/

	.my_el {
		background: #ededed;
		height: 157px;
		line-height: 157px;
		text-align: center;
		border: 1px dashed #666;
	}

	.my_el_one {
		height: 40px;
		line-height: 40px;
		margin-top: 100px;
		margin-bottom: 40px;
		border-bottom: 2px solid #d3d3d3;
	}

	.my_el_tow {
		text-align: center;
	}

	.proop_submit {
		display: inline-block;
		height: 50px;
		width: 180px;
		text-align: center;
		color: #fff;
		font-size: 18px;
		letter-spacing: 5px;
		line-height: 50px;
		background-color: #42a5f6;
		border: 1px solid #939393;
		border-radius: 4px;
		cursor: pointer;
	}

	.my_color {
		color: #41a4f5;
	}

	.grid-icon {
		display: inline-block;
		width: 20px;
		vertical-align: middle;
		height: 20px;
		padding: 0 5px;
		background-repeat: no-repeat;
		/*	background-position: 0px 0px;*/
	}

	.grid-icon1 {
		background-image: url(../img/bank_zg.png);
	}

	.grid-icon2 {
		background-image: url(../img/back_bj.png);
	}

	.grid-icon3 {
		background-image: url(../img/icon_zf.png);
	}

	.grid-icon4 {
		background-image: url(../img/icon_wx.png);
	}

	.grid_de {
		height: 45px;
		line-height: 45px;
		text-align: left;
	}

	.my_el_site {
		background: #ededed;
		padding: 20px;
		text-align: center;
		border: 1px dashed #666;
		color: #666666;
	}

	#canvas1 {
		width: 200px !important;
		height: 200px !important;
		border: 1px solid lavender;
	}

	.myInfo {
		margin-right: 5px;
		display: inline-block;
		width: 20px;
		height: 20px;
	}

	.ftime {
		background: url(../img/icon_time.png) no-repeat 0px 0px;
	}

	.fmemberName {
		background: url(../img/icon_people.png) no-repeat 0px 0px;
	}

	.famount {
		background: url(../img/icon_mon.png) no-repeat 0px 0px;
	}

	.fid {
		background: url(../img/icon_pag.png) no-repeat 0px 0px;
	}

	.ftitle {
		background: url(../img/icon_sp.png) no-repeat 0px 0px;
	}
</style>
<template>
	<div id="">
    <el-row>
      <el-col :span="14" :offset="4">
        <div class="el-input">
          <el-input placeholder="举证名称/存证号" v-model="searchKey" class="input-with-select" @keyup.enter="btnCheck($event)">
            <el-button  slot="append" icon="el-icon-search" @click="btnCheck()" style="background-color: #42a5f6; color: #fff;"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="1" style="margin-left:10px;">
        <div v-if="proofManage">
          <el-button type="primary" icon="el-icon-arrow-down" @click="changeDisplay">高级搜索</el-button>
        </div>
        <div v-else>
          <el-button type="primary" icon="el-icon-arrow-left" @click="changeDisplay">高级搜索</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin:10px auto;">
      <el-col :span="22" :offset="2" style="text-align:center;">
        <div v-show="proofManage" style="padding:10px;background:rgba(150,150,150,0.15);margin:20px auto;padding-top:30px;">
          <el-row type="flex" class="row-bg" style="padding: 40px 0;">
            <el-col :span="12">
              <el-col :span="4" :offset="3" style="text-align: center;line-height: 40px; padding-right: 5px;">
                <span>举证名称</span>:
              </el-col>
              <el-col :span="8">
                <el-input placeholder="举证名称" v-model="fname"></el-input>
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-col :span="4" style="text-align: center;line-height: 40px;padding-right: 5px;">
                <span>日期选择</span>:
              </el-col>
              <el-col :span="8">
                <el-date-picker style="width: 100%;" v-model="fbeginTime" type="date" placeholder="开始日期" :picker-options="pickerOptions0">
                </el-date-picker>
              </el-col>
              <el-col class="line" style="text-align: center;line-height: 40px;" :span="2">-</el-col>
              <el-col :span="8">
                <el-date-picker style="width: 100%;" v-model="fendTime" align="center" type="date" placeholder="结束日期" :picker-options="pickerOptions1">
                </el-date-picker>
              </el-col>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6" style="text-align: center;"><span class="proop_ser" @click="btnCheck"> 搜索</span></el-col>
          </el-row>
        </div>
        <!-- </el-collapse-item>
    </el-collapse> -->
      </el-col>
    </el-row>
    <proofList @showF="showF" ref="proofL"></proofList>




		<el-dialog custom-class="dialog_content" :modal="true" :lock-scroll="true" :before-close="cancel" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" width="73%" top="2%">
			<imp-panel>
				<!--支付 star-->
				<div class="zhifu_div" v-if="zhifuShow">
					<div class="proof_dialog_three" v-show="dialog_three_show">
						<!-- <div class="steps_box">
							<div class="steps_cen">
								<el-steps :active="active" finish-status="success">
									<el-step title="用户告知"></el-step>
									<el-step title="填写信息"></el-step>
									<el-step title="支付"></el-step>
									<el-step title="完成"></el-step>
								</el-steps>
							</div>
						</div> -->
						<el-row :span="24">
							<span class="my_color">订单信息</span>
						</el-row>
						<el-row :span="24" class="my_el_site">
							<el-col :span="12" :push="2">
								<div class="grid_de colSpan"><span class="myInfo ftitle"></span>商品名称:{{formData.ftitle}}</div>
							</el-col>
							<el-col :span="12" :push="2">
								<div class="grid_de"><span class="myInfo ftime"></span>购买时间：{{formData.ftime}}</div>
							</el-col>
							<el-col :span="12" :push="2">
								<div class="grid_de"><span class="myInfo fmemberName"></span>购买人:{{formData.fmemberName}}</div>
							</el-col>
							<el-col :span="12" :push="2">
								<div class="grid_de"><span class="myInfo famount"></span>交易金额:{{formData.famount}} 元</div>
							</el-col>
							<el-col :span="19" :push="2">
								<div class="grid_de"><span class="myInfo fid"></span>订单号: {{formData.fid}}</div>
							</el-col>
						</el-row>
						<el-row :span="24">
							<span class="my_color">支付方式</span>
						</el-row>
						<el-row :span="24" class="my_el_site">
							<el-row type="flex" class="row-bg" justify="center">
								<!--<el-col :span="6">
									<div>
										<el-radio v-model="bank" label="01"> <span class="grid-icon grid-icon1"></span>中国银行</el-radio>
									</div>
								</el-col>
								<el-col :span="6">
									<div>
										<el-radio v-model="bank" label="02"><span class="grid-icon grid-icon2"></span>北京银行</el-radio>
									</div>
								</el-col>-->
								<el-col :span="6">
									<div>
										<el-radio v-model="bank" label="03"><span class="grid-icon grid-icon3"></span>支付宝</el-radio>
									</div>
								</el-col>
								<el-col :span="6">
									<div>
										<el-radio v-model="bank" label="04"><span class="grid-icon grid-icon4"></span>微信</el-radio>
									</div>
								</el-col>
							</el-row>
						</el-row>
						<el-row :span="24" class="my_el_tow my_el_three" style="margin-top: 50px;">
							<span class="proop_submit" @click="nextThree">确定</span>
						</el-row>
					</div>
				</div>
				<!--支付 end-->
				<!--支付完成star-->
				<div class="proof_dialog_four" v-show="dialog_four_show">
					<!-- <div class="steps_box">
						<div class="steps_cen">
							<el-steps :active="active" finish-status="success">
								<el-step title="用户告知"></el-step>
								<el-step title="填写信息"></el-step>
								<el-step title="支付"></el-step>
								<el-step title="完成"></el-step>
							</el-steps>
						</div>
					</div> -->
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
				<!--支付完成end-->

				<!--生成支付二维码 star-->
				<div class="zhifuCode" v-if="zhifuCode">
					<el-button type="success" @click="backFunc()">返回上一步</el-button>
					<h3 class="box-title" slot="header" style="width: 100%;">
							<el-row type="flex" class="row-bg" justify="center">
							  <el-col :span="8" style="text-align: center;">
							   <!--<div id='code'></div>-->
			         			 <canvas id="canvas1"></canvas>
							  </el-col>
							</el-row>
					    <el-row type="flex" class="row-bg" justify="space-around" style="text-align: center;">
					  <el-col :span="12">
					  <el-button type="success" @click="payFunc(1)">支付成功</el-button>
					  </el-col>
					  <el-col :span="12">
					   <el-button type="danger" @click="payFunc(0)">支付失败</el-button>
					  </el-col>
					</el-row>
					</h3>
				</div>
				<!--生成支付二维码 end-->
			</imp-panel>
			<!-- <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button> -->
       <!-- <el-button type="primary" @click="save('ruleForm')" >保存</el-button>-->
      <!-- </span> -->
		</el-dialog>
		<!--生成支付二维码-->
		<!--<addCode ref="codeComponent"></addCode>-->
	</div>
</template>
<script>
	import Vue from "vue";
	import panel from "./panel.vue"
	import * as api from "../api"
	import proofList from "./proofList";
	//	import addCode from "@/components/addCodeT" //二维码
	import QRCode from "qrcode";
	Vue.use(QRCode);
	export default {
		components: {
			'imp-panel': panel,
			proofList,
			//			addCode,
			//			proofDetail
		},
		data() {
			return {
				stepNum: 4,
				isValid: false,
				dialogFormVisible: false,
				dialogTitle: "继续支付",
				bank: '04', //默认微信支付
				fsid: "",
				dialog_three_show: false,
				dialog_four_show: true,
				active: 2,
				formData: {
					ftitle: "",
					famount: "",
					fmemberName: "",
					ftime: "",
					fid: ""
				},
				zhifuShow: true,
				zhifuCode: false,
				proofManage: false,
				activeName: '1',
				searchKey: '',
				select: '',
				fname: "",
				fbeginTime: "",
				fendTime: "",
				pickerOptions0: {
					disabledDate: (time) => {
						let beginDateVal = this.fendTime;
						if(beginDateVal) {
							return time.getTime() > beginDateVal;
						}
					}
				},
				pickerOptions1: {
					disabledDate: (time) => {
						let beginDateVal = this.fbeginTime;
						if(beginDateVal) {
							return time.getTime() < beginDateVal;
						}
					}
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
      changeDisplay() {
        return this.proofManage == false ?
          (this.proofManage = true) :
          (this.proofManage = false);
      },
			cancel() {
				let _this = this;
				_this.$refs.proofL.loadData(); //刷新列表
				_this.zhifuShow = true;
				_this.dialog_four_show = false;
				_this.zhifuCode = false;
				_this.active = 2;
				_this.dialogFormVisible = false;

			},

			bankChange(val) { //银行

			},
			showF(row) { //接收列表页传递的值
				let _this = this;
				_this.dialog_three_show = true;
				_this.dialog_four_show = false;
				_this.fsid = row.fid;
				_this.getOrderInfo(row.fid);

			},
			getOrderInfo(fid) { //获取订单基本信息
				let _this = this;
				this.$http.get(this.getServerUrl() + api.PROOF_ORDER_INFO + "?fid=" + fid).then(res => {
					if(res.data.success == true) {
						_this.dialogFormVisible = true;
						_this.formData.famount = res.data.data.famount;
						_this.formData.fmemberName = res.data.data.fmemberName;
						_this.formData.ftitle = res.data.data.ftitle;
						_this.formData.fid = res.data.data.fid;
						_this.formData.ftime = res.data.data.ftime;

					} else {

					}
				})
			},
			backFunc() {
				let _this = this;
				_this.zhifuShow = true;
				_this.dialog_four_show = false;
				_this.zhifuCode = false;
				_this.active = 2;
			},
			nextThree() { //支付
				let _this = this;
				if(_this.bank == "03") {
					_this.zhifuShow = false;
					_this.dialog_four_show = false;
					_this.zhifuCode = true;
					_this.myCodeFid("03", this.fsid, api.PROOF_FORM_PAY_ZHIFUBAO,_this.formData.famount);
				} else if(_this.bank == "04") {
					_this.zhifuShow = false;
					_this.dialog_four_show = false;
					_this.zhifuCode = true;
					_this.myCodeFid("04", this.fsid, api.PROOF_FORM_PAY_ZHIFUBAO,_this.formData.famount);
				}
			},

			payFunc(flag) {
				//支付成功或者失败
				let _this = this;
				//				_this.zhifuShow = false;
				//				_this.zhifuCode = false;
				//				_this.dialog_three_show = false;
				//				_this.dialog_four_show = true;
				//				_this.active = this.stepNum;
				_this.$http.get(_this.getServerUrl() + api.PROOF_ZHIFUBAO_PAY_OR + "?out_trade_no=" + _this.out_trade_no + "&payType=" + _this.payType).then(res => {
					if(res.data.success == true) {
						if(res.data.data == 1) {
							_this.zhifuShow = false;
							_this.zhifuCode = false;
							_this.dialog_three_show = false;
							_this.dialog_four_show = true;
							_this.active = this.stepNum;
							if(this.isValid) {
								_this.valid(this.fid);
							}
						} else {
							if(flag) { //点击支付成功
								this.$message("请确认是否支付完成");
							} else { //点击支付失败
								_this.dialogFormVisible = false;
							}
						}

					} else { //   查询失败为支付失败
						_this.dialogFormVisible = false;
					}
				})

			},
			useqrcode(str) { //	console.log(str);
				this.$nextTick(function() {
					var canvas = document.getElementById("canvas1");
					QRCode.toCanvas(canvas, str, function(error) {
						if(error) console.error(error);
					});
				});

			},
			//			cancel(fsid) { //取消
			//				let _this = this;
			//				_this.$parent.active = 2;
			//				_this.dialogFormVisible = false;
			//			},
			myCodeFid(bank, fsid, url,famount) { //获取二维码code
				let _this = this;
				_this.payType = bank;
				_this.$http.get(_this.getServerUrl() + url + "?txnAmt=" + famount + "&fsid=" + fsid + "&payType=" + _this.payType).then(res => {
					if(res.data.success == true) {
						_this.useqrcode(res.data.data.url);
						_this.out_trade_no = res.data.data.out_trade_no;
						// _this.$parent.active = 3;
					} else {}
				});
			},
			/**@augments
			 * 验证
			 */
			valid(fid) {
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.VALIDCERT_FINGERCERT_VALID + "?fids=" + fid)
					.then(res => {
						if(res.data.success == true) {
							_this.$message(res.data.msg);
						} else {}
					});
			},

			btnCheck() { //搜索
				this.fbeginTime = (this.fbeginTime == null||this.fbeginTime=="") ? "" : this.fbeginTime.getTime();
				this.fendTime = (this.fendTime == null||this.fendTime =="") ? "" : this.fendTime.getTime();
				this.$refs.proofL.loadData(this.searchKey, this.meFormat(this.fbeginTime), this.meFormat(this.fendTime), this.fname)
			},

		},
		mounted: function() {
			this.$nextTick(function() {

			})

		}
	}
</script>
