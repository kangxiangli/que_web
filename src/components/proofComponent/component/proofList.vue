<style scoped="scoped">
	.container {
		width: 73%;
		margin: 0 auto;
	}

	.proof_nav {
		height: 50px;
		background: #dbdbdb;
		line-height: 50px;
	}

	.grid-search {
		background: url(../img/icon_list.png) no-repeat;
		background-position: 16px 14px;
		padding-left: 50px;
	}

	.el-table .cell,
	.el-table th div {
		overflow: inherit !important;
	}

	.el-pagination {
		float: right;
		padding: 20px;
	}
</style>

<template>
	<div class="proof_list">

		<div style="margin:20px auto;">
			<div style="background:#DDDDDD;line-height:60px;">
				<el-row class="proof_nav">
					<el-col :span="6">
						<!--  <img src="../assets/image/certCenter/icon_list.png" />-->
						<div class="grid-search"> 举证列表</div>
					</el-col>
					<el-col :span="6" :offset="12">
					</el-col>
				</el-row>
			</div>
			<el-table :data="tableData.rows" style="width: 100%" border v-loading="listLoading" @selection-change="handleSelectionChange">
				<el-table-column prop="fid" type="index" width="50" label="序号">
				</el-table-column>
				<el-table-column prop="ftitle" :label="$t('m.proofPage.detail.2')" width="120">
				</el-table-column>
				<el-table-column prop="famount" label="费用" width="80" :formatter="famountFormat">
				</el-table-column>
				<el-table-column class-name="status-col" prop="fstatus" width="120" :label="$t('m.proofPage.table.2')">
					<template scope="scope">
						<el-tag :type="scope.row.fstatus | statusFilter">{{scope.row.fstatus == 8 ? $t('m.proofPage.table.7') : (scope.row.fstatus == 1 ?$t('m.proofPage.table.8'):(scope.row.fstatus == 2?$t('m.proofPage.table.9'):((scope.row.fstatus == 6||scope.row.fstatus == 7)?$t('m.proofPage.table.10'):$t('m.proofPage.table.11'))))}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="ftime" :label="$t('m.proofPage.detail.4')">
				</el-table-column>
				<el-table-column prop="fendTime" :label="$t('m.proofPage.table.3')">
				</el-table-column>
				<el-table-column :label="$t('m.proofPage.table.4')" width="180">
					<template slot-scope="scope">
						<a href="javascript:void(0)" @click="proofMySearch(scope.$index, scope.row)">{{$t('m.proofPage.table.5')}}
						</a>
						&nbsp;
						<a href="javascript:void(0)" v-if="scope.row.fstatus == 1" icon="el-icon-arrow-down" @click="proofContinue(scope.$index, scope.row)">{{$t('m.proofPage.table.6')}}
						</a>

						<!--<el-tooltip class="item" effect="dark" :content="$t('m.proofPage.table.5')" placement="top-start">
					     <el-button size="mini"  icon="el-icon-document" @click="proofMySearch(scope.$index, scope.row)"></el-button>
					    </el-tooltip>-->
						<!--<el-tooltip class="item" effect="dark" :content="$t('m.proofPage.table.6')" placement="top-start">
							<el-button size="mini" v-if="scope.row.fstatus == 1" icon="el-icon-arrow-down" @click="proofContinue(scope.$index, scope.row)"></el-button>
						</el-tooltip>-->
					</template>
				</el-table-column>
			</el-table>
			<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[5, 10, 20]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total"></el-pagination>
		</div>
		<proofDetail ref="form" :myFid="myFid"></proofDetail>
	</div>
</template>
<script>
	import * as api from "../api";
	//import Vue from "vue";
	//import Element from "element-ui";
	import proofDetail from "./proofDetail"; //详情

	export default {
		components: {
			proofDetail,

		},
		data() {
			return {
				activeName: "second",
				myFid: "",
				searchKey: "",
				listLoading: false,
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 10,
						parentId: 0
					},
					rows: []
				}
			};
		},
		methods: {
			famountFormat(row, column) {
				return row.famount + "元";
			},
			proofMySearch(index, row) {
				let _this = this;
				_this.myFid = row.fid;
//				_this.$refs.form.dialogFormVisible = true;
				_this.$refs.form.details(row.fid);
			},
			saveFileOrData() {
				this.$http.post(this.getServerUrl() + api.SAVECERT_FINGER_GET, this.formData).then(res => {
					if(res.data.success == true) {
						this.form.finger = res.data.data;
					} else {

					}
				});
			},
			handleSelectionChange(val) { //取消选择触发
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
			proofContinue(index, row) { //继续操作
				let _this = this;
				_this.$emit('showF', row)
			},
			loadData(str, timeStar, timeEnd, ftitle) { //初始化表格
				str = (str == undefined) ? "" : str;
				timeStar = (timeStar == "NaN-aN-aN" || timeStar == undefined) ? "" : timeStar;
				timeEnd = (timeEnd == "NaN-aN-aN" || timeEnd == undefined) ? "" : timeEnd;
				ftitle = (ftitle == undefined) ? "" : ftitle;
				this.loadTable(api.PROOF_FORM_TABLE, "fdepNo=" + str + "&fbeginTime=" + timeStar + "&fendTime=" + timeEnd + "&ftitle=" + ftitle);
				//								this.$http.get(this.getServerUrl() + api.PROOF_FORM_TABLE + "?rows=" + this.tableData.pagination.pageSize + "&page=" + this.tableData.pagination.pageNo)
				//									.then(res => {
				//										if(res.data.success == true) {
				//											var d = res.data;
				//											this.tableData.rows = d.data.content;
				//											this.tableData.pagination.total = d.data.totalElements;
				//										} else {
				//
				//										}
				//
				//									});
			}
		},
		mounted: function() {
			this.loadData();
		},
		created: function() {}
	};
</script>
