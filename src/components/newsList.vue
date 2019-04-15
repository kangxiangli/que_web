<style scoped="scoped">
	.new_list_detaile {
		border-bottom: 1px solid #D1D1D1;
		padding: 57px 15px 36px 15px;
	}
	
	.news_img {
		border: 1px solid #D1D1D1;
		width: 240px;
		height: 172px;
		line-height: 172px;
		text-align: center;
		overflow: hidden;
	}
	
	#news_font {
		font-size: 12px;
		color: #434343;
		line-height: 2;
		height: 60px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.news_title {
		font-size: 16px;
		color: #434343;
	}
	
	.news_r {
		text-align: right;
		color: #959595;
		font-size: 12px;
	}
	
	.details_btn {
		float: right;
		font-size: 14px;
		display: inline-block;
		color: #434343;
		cursor: pointer;
		height: 46px;
		line-height: 46px;
		margin: 0;
	}
	
	.pagination {
		margin: 100px auto;
		text-align: center;
		width: 43%;
		height: 50px;
	}
</style>

<template>
	<div class="news_list">
		<div class="new_list_detaile" v-for="(item, index) in myData">
			<el-row :gutter="20">
				<el-col :span="6">
					<div class="news_img">
						<img :src="item.furlPath" alt=""  style="width:100%;height:100%;">
					</div>
				</el-col>
				<el-col :span="18">
					<div class="grid-content bg-purple">
						<el-row type="flex" class="row-bg" justify="space-between">
							<el-col :span="16">
								<h2 class="news_title">{{item.ftitle}}</h2>
							</el-col>

							<el-col :span="8">
								<p class="news_r"> &nbsp;&nbsp;&nbsp;&nbsp;发布于：<span>{{item.ftime}}</span></p>
							</el-col>
						</el-row>
					</div>
					<el-row>
						<el-col :span="24">
							<div id="news_font" style="-webkit-box-orient: vertical;" v-html="item.fcontent">
								<!--{{item.fcontent}}-->
							</div>
						</el-col>
					</el-row>
					<!--<router-link  :to="'/newsDetail/'+item.fid">-->
						<span class="details_btn" @click="checkDe(item.fid)">详情&gt;&gt;</span>
					<!--</router-link>-->
				</el-col>
			</el-row>
		</div>
		<div class="pagination">
			<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[2, 4, 8]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total"></el-pagination>
		</div>
	</div>
</template>
<script>
	import * as api from "@/api";

	export default {
		components: {

		},
		data() {
			return {
				myFid: "",
				searchKey: "",
				myType: "",
				myData: [{
					fid: "",
					furlPath: "",
					ftitle: "",
					fcreateId: "",
					ftime: "",
					fcontent: "",
				}],
				listLoading: false,
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 4,
						parentId: 0
					},
					rows: []
				}
			};
		},
		methods: {
			checkDe(fid){
				let newFid = window.sessionStorage.setItem('newFid', fid);
				this.$router.push({
					path: '/newsDetail'
				})
			
			},
			proofMySearch(index, row) {
				let _this = this;
				_this.myFid = row.fid;
				_this.$refs.form.dialogFormVisible = true;
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
			handleSelectionChange(val) {

			},
			handleSizeChange(val) {
				this.tableData.pagination.pageSize = val;
				this.getNewsList(this.myType);

			},
			handleCurrentChange(val) {
				this.tableData.pagination.pageNo = val;
				this.getNewsList(this.myType);

			},

			getNewsList(type) { //获取新闻资讯列表1代表官方公告  2代表资讯新闻  3代表信息披露
				let _this = this;
				_this.myType = type;
				_this.$http.get(_this.getServerUrl() + api.SOLVE_NEWS_ALL + "?type=" + type + "&rows=" + this.tableData.pagination.pageSize + "&page=" + this.tableData.pagination.pageNo)
					.then(res => {
						if(res.data.success == true) {
							this.tableData.pagination.total = res.data.data.totalElements;
							_this.myData = res.data.data.content;
							for(let i = 0; i < res.data.data.content.length; i++) {
								let myurl = "";
								myurl = this.getServerUrl() + res.data.data.content[i].furlPath;
								_this.myData[i].furlPath = myurl;
							}
						} else {

						}
					})
			},

		},
		mounted: function() {

		},
		created: function() {}
	};
</script>