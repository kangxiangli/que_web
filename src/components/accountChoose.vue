<style type="text/css" scoped="scoped">
	.el-pagination {
		padding: 16px 0px 5px 5px;
	}
</style>
<template>
	<el-dialog custom-class="dialog_content1" :validate-on-rule-change="false" :before-close="cancels" :close-on-click-modal="false" :title="dialogTitle" :visible.sync="dialogFormVisible" width="70%">
		<imp-panel>
			<el-row style="width: 100%;margin-bottom:10px;">
				<el-col :span="24">
					<div class="el-input" style="width: 200px; float: right;">
						<i class="el-input__icon el-icon-search" style="position: absolute; right: 5px; cursor: pointer;" @click="search($event)"></i>
						<input type="text" placeholder="Bid/B端名称" v-model="searchKey" @keyup.enter="search($event)" class="el-input__inner">
					</div>
				</el-col>
			</el-row>
			<el-table :data="tableData.rows" style="width: 100%" border v-loading="listLoading" @selection-change="handleSelectionChange">
				<el-table-column prop="fbid" label="Bid">
				</el-table-column>
				<el-table-column prop="fbname" label="B端名称">
				</el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<a href="javascript:void(0)" @click="chooseBidUser(scope.$index, scope.row)">选择账户</a>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[5, 10, 20]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total"></el-pagination>

		</imp-panel>
		<span slot="footer" class="dialog-footer">
			        <el-button @click="cancels()">取 消</el-button>
			        <!--<el-button type="primary" @click="submitForms('ruleForm2')" >保存</el-button>-->
			      </span>
	</el-dialog>

</template>
<script>
	import panel from "./panel.vue"
	import * as api from "../api"

	export default {
		components: {
			'imp-panel': panel,

		},
		data() {

			return {
				dialogFormVisible: false,
				dialogLoading: false,
				listLoading: false,
				dialogTitle: "选择账户",
				currentRow: [],
				searchKey: '',
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 10,
						parentId: 0
					},
					rows: []
				},
			}
		},
		props: {

		},
		watch: {

		},
		created() {

		},
		methods: {
			chooseBidUser(index, row) { //选择账户 
				this.$emit('BidUser', row.fbid, row.fbname);
				this.dialogFormVisible = false;
			},
			handleSelectionChange(val) { //取消选择触发
				var vals = val.map(i => i.fbid);
				this.currentRow = vals.join(',')
			},

			search(target) {
				this.loadData(this.searchKey);
			},

			handleCurrentChange(val) {
				this.tableData.pagination.pageNo = val;
				this.loadData(this.searchKey);
			},
			handleSizeChange(val) {
				this.tableData.pagination.pageSize = val;
				this.loadData(this.searchKey);
			},

			loadData(str) { //初始化表格
				str = (str == undefined) ? "" : str;
				this.loadTable('/cd/account/selectList', "fbname=" + str);
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
			},
			cancels() {
				let _this = this;
				_this.dialogFormVisible = false;
			},

			modify(data) { //修改回显

			}

		},
		mounted: function() {

		}
	}
</script>