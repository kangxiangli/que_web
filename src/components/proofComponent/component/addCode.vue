<template>
	<!--bank dialog star-->
	<el-dialog custom-class="dialog_content1" :before-close="cancel" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" width="70%">
		<imp-panel>
			<h3 class="box-title" slot="header" style="width: 100%;">
				<el-row type="flex" class="row-bg" justify="center">
				  <el-col :span="8" style="text-align: center;">
				   <!--<div id='code'></div>-->
         			 <canvas id="canvas"></canvas>
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
		</imp-panel>
		<span slot="footer" class="dialog-footer">
        <el-button @click="cancel(fsid)">取 消</el-button>
        <!--<el-button type="primary" @click="save('ruleForm')" >保存</el-button>-->
      </span>
	</el-dialog>
	<!--bank diaglog end-->

</template>

<script>
	import panel from "./panel.vue";
	import Vue from "vue";
	import * as api from "../api";
	import QRCode from "qrcode";
	Vue.use(QRCode);
	export default {
		components: {
			"imp-panel": panel
		},
		data() {
			return {
				fid: "",
				fsid: "",
				dialogTitle: "",
				dialogFormVisible: false,
				codes: "",
				out_trade_no: "",
				payType: "",
				queryUrl: api.PROOF_ZHIFUBAO_PAY_OR,
				stepNum: 4,
				isValid: false
			};
		},
		beforeDestroy: function() {

		},
		methods: {
			payFunc(flag) {
				//支付成功或者失败
				let _this = this;
				//				_this.$parent.$parent.$refs.getproof.dialog_three_show = false;
				//				_this.$parent.$parent.$refs.getproof.dialog_four_show = true;
				//				_this.$parent.$parent.$refs.getproof.active = this.stepNum;
				//				_this.dialogFormVisible = false;

				_this.$http.get(_this.getServerUrl() + this.queryUrl + "?out_trade_no=" + _this.out_trade_no + "&payType=" + _this.payType).then(res => {
					if(res.data.success == true) {
						if(res.data.data == 1) {//点击支付成功
							_this.$parent.$parent.$refs.getproof.dialog_three_show = false;
							_this.$parent.$parent.$refs.getproof.dialog_four_show = true;
							_this.$parent.$parent.$refs.getproof.active = this.stepNum;
							_this.dialogFormVisible = false;
							if(this.isValid) {
								_this.valid(this.fid);
							}
							_this.dialogFormVisible = false;//需要关闭窗口
						} else {
							if(flag) { //未支付点击支付成功
								this.$message("请确认是否支付完成");
							} else { //未支付点击支付失败
								_this.dialogFormVisible = false;
							}
						}
					} else { //   查询失败为支付失败
						_this.dialogFormVisible = false;
					}
				});
			},
			useqrcode(str) {
				this.$nextTick(function() {
					var canvas = document.getElementById("canvas");
					QRCode.toCanvas(canvas, str, function(error) {
						if(error) console.error(error);
					});
				});
			},
			cancel(fsid) { //取消
				let _this = this;
				_this.$parent.active = 2;
				_this.dialogFormVisible = false;
			},
			myCodeFid(bank, fsid, url,famount) { //获取二维码code
				let _this = this;
				this.fid = fsid;
				_this.payType = bank;
				_this.$http.get(_this.getServerUrl() + url + "?txnAmt=" + famount + "&fsid=" + fsid + "&payType=" + _this.payType).then(res => {
					if(res.data.success == true) {
						_this.useqrcode(res.data.data.url);
						_this.out_trade_no = res.data.data.out_trade_no;
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

		},
		mounted() {
			this.$nextTick(function() {});
		},
		watch: {},
		props: {},
		create() {}
	};
</script>
<style>
	#canvas {
		width: 200px !important;
		height: 200px !important;
		border: 1px solid lavender;
	}
</style>