<style scoped="scoped">
	.banner_img {
		width: 100%;
	}
	
	.baseinfo-top-icon,
	.grid_img {
		text-align: center;
		height: 214px;
		line-height: 214px;
	}
	
	.content_border {
		border: 1px solid #d1d1d1;
		padding: 10px;
		margin-bottom: 20px;
	}
	
	.realNameIng {
		font-size: 14px;
		color: #00abf1;
	}
	
	.pagination {
		margin: 100px auto;
		text-align: center;
		width: 43%;
		height: 50px;
	}
	/*列表*/
	
	.content_ul {
		width: 100%;
	}
	
	.content_li {
		font-size: 12px;
		color: #818181;
		width: 100%;
		height: 63px;
		line-height: 63px;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.grid_right {
		text-align: right;
	}
</style>
<template>
	<div class="realNameEnd">
		<div class="content_border">
			<div class="baseinfo-top-icon">
				<el-row>
					<el-col :span="6">
						<div class="grid_img">
							<span style="width: 170px;height: 170px;display: inline-block;vertical-align: middle;">
										<img src="../assets/image/sw.png" alt="" />
									</span>

						</div>
					</el-col>
					<el-col :span="12" style=" text-align: left;">
						<span class="realNameIng">为您每一步操作保驾护航！</span>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="content_box">
			<el-row class="content_li">
				<el-col :span="12">
					<div class="grid_left">登录时间</div>
				</el-col>
				<el-col :span="12">
					<div class="grid_right">登录IP</div>
				</el-col>
			</el-row>
			<el-row class="content_li" v-for="(item, index) in loginData">
				<el-col :span="12">
					<div class="grid_left">{{item.ftime}}</div>
				</el-col>
				<el-col :span="12">
					<div class="grid_right">{{item.fip}}</div>
				</el-col>
			</el-row>

		</div>
		<div class="pagination">
			<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[8, 16, 24]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total"></el-pagination>
		</div>
	</div>
</template>
<style type="text/css">

</style>
<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	import auth from "../auth";
	//import VDistpicker from 'v-distpicker'
	export default {
		data() {
			return {
				fselect: "",
				ftitle: "",
				loginData: [],
				listLoading: false,
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 8,
						parentId: 0
					},
					rows: []
				}

			}
		},
		methods: {
			handleSelectionChange(val) {},
			handleSizeChange(val) {
				this.tableData.pagination.pageSize = val;
				this.loginList();

			},
			handleCurrentChange(val) {
				this.tableData.pagination.pageNo = val;
				this.loginList();
			},

			loginList() { //登录记录
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.MER_LOGIN_RECORD_LIST + "?ftime=" + this.fselect + "&rows=" + this.tableData.pagination.pageSize + "&page=" + this.tableData.pagination.pageNo)
					.then(res => {
						if(res.data.success == true) {
							this.tableData.pagination.total = res.data.data.totalElements;
							_this.loginData = res.data.data.content;

						} else {

						}
					})
			},

		},
		created() {

		},
		mounted: function() {
			//			this.loginList();
		}
	}
</script>