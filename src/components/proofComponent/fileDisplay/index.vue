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
  background: url(img/icon_block.png) no-repeat;
  background-position: 16px 11px;
  padding-left: 50px;
  color: #42a5f6;
}

.grid-xinxi {
  background: url(img/icon_xx.png) no-repeat;
  background-position: 16px 11px;
  padding-left: 50px;
  color: #42a5f6;
}

.grid-yangben {
  background: url(img/icon_yb.png) no-repeat;
  background-position: 16px 11px;
  padding-left: 50px;
  color: #42a5f6;
}

.grid-load {
  height: 50px;
  width: 90px;
  color: #42a5f6;
  line-height: 50px;
  background: url(img/icon_db.png) no-repeat;
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
    <fileDisplay ></fileDisplay>
  </div>
</template>
<script>
import * as api from "../api";
import fileDisplay from "./fileDisplay.vue";
import pdf from "vue-pdf";
export default {
  components: {
   fileDisplay
  },
  data() {
    return {
      ruleForm: {
        certValidate: {
          fid: "", //id
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
            fpath: "",
            fsize: ""
          }
        ]
      }
    };
  },
  props: ["ruleForm","downLoadUrl","packageUrl"],
  watch: {},
  methods: {

  },
  mounted: function() {
  },
  created() {
    //			this.details();
  }
};
</script>