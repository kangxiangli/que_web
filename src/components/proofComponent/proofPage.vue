<style type="text/css" scoped="scoped">
.banner_box {
  margin-top: 100px;
  width: 100%;
 height: 300px;
  background: url(img/banner05.png)no-repeat;
background-position: 50% 0;
}
.proof_bg {
  width: 100%;
  /* height: 1111px; */
  /* border:1px solid red; */
  background: url(img/dt.png)no-repeat 0px 0px;
  background-size: cover;
}
.container {
  width: 73%;
  margin: 0 auto;
  padding-top:50px;
  padding-bottom:20px;
}

.grid_right {
  text-align: right;
}

.proof_center {
  width: 73%;
  /*height: 100%;*/
  position: absolute;
  right: 14%;
}

.el-row {
  margin-bottom: 20px;
}

.grid-content {
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
}


.a {
  color: #3a8ee6;
  border-color: #3a8ee6;
}

.b {
}
</style>
<template>
	<div class="proofPage proof_banner">
		<div class="banner_box">
			<!--<img class="banner_img" src="../../../static/img/proofImg/banner05.png" />-->
		</div>
		<div class="proof_bg" >
			<div class="container">
				<el-row>
					<el-tabs v-model="activeName" @tab-click="changeTab">
						<el-tab-pane label="举证申请" name="first"></el-tab-pane>
						<el-tab-pane label="举证管理" name="second"></el-tab-pane>
					</el-tabs>
				</el-row>
            <div v-if="tab=='0'">
              <getProof ref="getproof"></getProof>
            </div>
            <div v-else-if="tab=='1'">
               <proofManage ref="proofManage"> </proofManage>
            </div>
		</div>

		</div>
		

	</div>
</template>
<script>

import getProof from "./component/getProof.vue";
import proofManage from "./component/proofmanage";
export default {
  components: {
    getProof,
    proofManage
  },
  data() {
    return {
		 tab: 0,
      activeName:"first",
    //   isShouProof: true
    };
  },
  watch: {},
  methods: {
    changeTab(obj) {
      this.tab=obj.index;
    }
  },

  mounted: function() {
    this.$store.state.navMenuIndex = 4;
  }
};
</script>
<style scoped>
.firstPage {
  width: 100%;
  height: auto;
  margin-top: 100px;
  position: relative;
}

.hot-box {
  width: 730px;
  height: auto;
  margin: 0 auto;
  border: 1px solid #eee;
  box-sizing: border-box;
}

.hot-box .hot-box-nav {
  width: 100%;
  height: 70px;
  padding-left: 20px;
  border-bottom: 3px solid #c20c0c;
  box-sizing: border-box;
}

.hot-box .hot-box-nav ul {
  float: left;
  width: 100%;
  height: 100%;
}

.hot-box .hot-box-nav li {
  float: left;
  width: 100px;
  height: 100%;
  cursor: pointer;
}

.hot-box .hot-box-nav li span {
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 70px;
  font-size: 0.95rem;
}

.hot-box .hot-box-nav li span.active {
  color: #c20c0c;
}
</style>