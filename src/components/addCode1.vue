<template>
	<!--bank dialog star-->
	<el-dialog custom-class="dialog_content1" :append-to-body="true" :before-close="cancel" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" size="small">
		<imp-panel>
			<h3 class="box-title" slot="header" style="width: 100%;">
      <el-row style="width: 100%;">
        <el-col :span="6" :offset="9">
        <div>
          <div id='code'></div>
          <canvas id="canvas"></canvas>
          <!-- <a href='' id='address'>打开访问地址</a> -->
        </div>
        </el-col>
      </el-row>
		    <el-row type="flex" class="row-bg" justify="space-around">
		 
		  <el-col :span="6">
		  <el-button type="success" @click="payFunc">支付成功</el-button>
		  </el-col>
		  <el-col :span="6">
		   <el-button type="danger" @click="payFunc">支付失败</el-button>
		  </el-col>
		</el-row>
		</h3>
		</imp-panel>
		<span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
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
      dialogTitle: "",
      dialogFormVisible: false,
      codes: "",
      out_trade_no: "",
      payType: "",
      queryUrl: "api.PROOF_ZHIFUBAO_PAY_OR",
      stepNum: 4,
      isValid: false
    };
  },
  methods: {
    payFunc() {
      //支付成功或者失败
      let _this = this;
        _this.dialogFormVisible = false;
        if (this.isValid) {
          _this.valid(this.fid);
        }
      // _this.$http
      //   .get(
      //     _this.getServerUrl() +
      //       this.queryUrl +
      //       "?out_trade_no=" +
      //       _this.out_trade_no +
      //       "&payType=" +
      //       _this.payType
      //   )
      //   .then(res => {
      //     if (res.data.success == true) {
      //       _this.dialogFormVisible = false;
        // if (this.isValid) {
        //   _this.valid(this.fid);
        // }
      //     }
      //   });
    },
    useqrcode(str) {
      //				console.log(str);
      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, str, function(error) {
        if (error) console.error(error);
        //					console.log("success!");
      });
      //				document.getElementById("address").href = str;
    },
    cancel() {
      //取消
      let _this = this;
      _this.dialogFormVisible = false;
      _this.$parent.active = 2;
      //	_this.$refs.ruleForm.resetFields();
    },
    myCodeFid(bank, fsid, url) {
      //获取二维码code
      let _this = this;
      this.fid = fsid;
      _this.payType = bank;
      _this.$http
        .get(
          _this.getServerUrl() +
            url +
            "?txnAmt=" +
            1 +
            "&fsid=" +
            fsid +
            "&payType=" +
            _this.payType
        )
        .then(res => {
          if (res.data.success == true) {
            _this.useqrcode(res.data.data.url);
            _this.out_trade_no = res.data.data.out_trade_no;
            // _this.$parent.active = 3;
          } else {
          }
        });
    },
    /**@augments
     * 验证
     */
    valid(fid) {
      let _this = this;
      //  _this.$parent.$parent.active='3';
      _this.$http
        .get(
          _this.getServerUrl() + api.VALIDCERT_FINGERCERT_VALID + "?fids=" + fid
        )
        .then(res => {
          if (res.data.success == true) {
           _this.$parent.$parent.active='3';
           _this.$message(res.data.msg);
          } else {
          }
        });
    }
  },
  mounted() {
    this.$nextTick(function() {});
  },
  watch: {
    fid() {
      //				this.myCodeFid("04",this.fid);
    }
  },
  props: {
    //			fid: {
    //				type: String
    //			}
  },
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