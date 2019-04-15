<style scoped="scoped">
</style>
<template>
	<div class="">
    <!-- <el-row style="width: 100%;">
          <el-col :span="12" :offset="12">
            <div class="el-input" style="width: 300px; float: right;">
              <i class="el-input__icon el-icon-search" style="position: absolute; right: 5px; cursor: pointer;" @click="search($event)"></i>
              <input type="text" :placeholder="$t('m.certCenter.19')" v-model="searchKey" @keyup.enter="search($event)" class="el-input__inner">
            </div>
          </el-col>
    </el-row> -->
    <div style="margin:20px auto 80px auto;">
      
        
      <el-table
    :data="tableData.rows"
      stripe
      tooltip-effect="dark"
      style="width: 100%"
      border
     @selection-change="handleSelectionChange">
	 <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" class="demo-table-expand">
          <!-- <el-form-item label="问题类型">
            <span>{{ props.row.ftypeName}}</span>
          </el-form-item> -->
          <el-form-item label="问题描述：">
            <span>{{ props.row.fdesc }}</span>
          </el-form-item>
		  <el-form-item label="问题回复：">
            <span>{{ props.row.fanswer }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
  	<el-table-column  type="index" label="序号" width="70"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      label="类型"
	   prop="ftypeName"
      width="100">
    </el-table-column>
	    <el-table-column
      label="时间"
	   prop="ftime"
      width="200">
    </el-table-column>
	 <el-table-column
      label="状态"
	   prop="fstatus" 
      width="100"
	   :formatter="fstatusFormat"
	  >
    </el-table-column>
    <el-table-column
      label="问题描述内容"
	   prop="fdesc" >
    </el-table-column>
    </el-table-column>

  </el-table>
  		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[5, 10, 20]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total">
					</el-pagination>
    </div>
     <!-- <valid-modify ref="validModify" :fid="this.certId"></valid-modify> -->
     <!-- <el-button @click="modifyId">111</el-button>    -->
	</div>

</template>

<script>
import * as api from "@/api";
import Vue from "vue";
import Element from "element-ui";
// import tag from "../../tag/index2.vue";
// import modify from "./modify.vue";

export default {
  components: {
    // "tag-add": tag,
    // "valid-modify":modify
  },
  data() {
    return {
      activeName: "second",
      isShow: false,
      searchKey: "",
      tableData: {
        pagination: {
          total: 0,
          pageNo: 1,
          pageSize: 10,
          parentId: 0
        },
        rows: []
      },
      dialogVisible: false,
      dialogCertList: false,
      certId: "cert1111",
      currentRow: [],
      fileName: "", //文件名称
      allFileName: "", //打包下载文件名称
      myhref: "",
      allHref: ""
    };
  },
  methods: {
    /**@augments
     * 保存修改标签
     */
   
	fstatusFormat: function(row, column) {
      return row.fstatus == 0 ? "未解决" : "已解决";
    },
    
    indexMethod(index) {
        return index + 1;
    },
    
    handleSelectionChange(val) {
      //取消选择触发
      this.currentRow = val.map(i => i.fid);
    },
    handleSizeChange(val) {
      this.tableData.pagination.pageSize = val;
      this.loadData(this.searchKey);
    },
    handleCurrentChange(val) {
      this.tableData.pagination.pageNo = val;
      this.loadData(this.searchKey);
    },
    search(target) {
      this.loadData(this.searchKey);
    },
    loadData() {
      //初始化表格
      // alert("load");
      // str = str == undefined ? "" : str;
      this.$http
        .get(
          this.getServerUrl() +
            api.COMMEN_PROBLEM_LIST +
            "?&rows=" +
            this.tableData.pagination.pageSize +
            "&page=" +
            this.tableData.pagination.pageNo
        )
        .then(res => {
          var d = res.data;
          this.tableData.rows = d.data.content;
          this.tableData.pagination.total = d.data.totalElements;
        });
    },
    /**@augments
     * 打开标签窗口
     */
    modifyId(index, row) {
      this.certId = row.fid;
        
      // this.certId="111";
      this.$refs.validModify.dialogFormVisible = true;
      this.$refs.validModify.loadFormData(this.certId);
    },
    /**
     * 验证
     */
    valid(index,row) {
      this.$http
        .get(
          this.getServerUrl() +
            api.VALIDCERT_DATACERT_GETPAYINFO +
            "?fid=" +row.fid
        )
        .then(res => {
          this.$parent.active='2';
           this.$parent.payForm.fid=res.data.data.fid;
          this.$parent.payForm.ftitle=res.data.data.ftitle;
          this.$parent.payForm.fmemberId=res.data.data.fmemberId;
          this.$parent.payForm.famount=res.data.data.famount;
        });
    }
  },
  mounted: function() {
    this.loadData();
  },
  created: function() {}
};
</script>