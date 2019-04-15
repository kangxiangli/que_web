<style type="text/css" scoped="scoped">
	.container {
		width: 73%;
		margin: 0 auto;
	}
	
	.newsPage {
		margin-top: 100px;
	}
	
	.banner_box {
		width: 100%;
		/*height: 500px;*/
	}
	
	.banner_img {
		width: 100%;
	}
	
	.el-pagination {
		background: #fff;
		padding: 10px 0 !important;
	}
	
	.pagination {
		margin: 100px auto;
		text-align: center;
		width: 43%;
		height: 50px;
	}
	
	.tab_title {
		position: absolute;
    top: 26%;
    right: 68%;
    z-index: 2;
    color: #fff;
    letter-spacing: 7px;
    font-size: 20px;
    font-weight: 800;
	}
</style>

<template>
	<div class="newsPage">
		<div class="banner_box">
			<div class="tab_title">{{myTitle}}</div>
			<img class="banner_img" src="../../assets/image/xwzx.png" />
		</div>
		<div class="container">
			<template>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="官方公告" name="first">
						<div>
							<newsList ref="newsList1"></newsList>
						</div>
					</el-tab-pane>
					<el-tab-pane label="资讯新闻" name="second">
					<newsList ref="newsList2"></newsList>
					</el-tab-pane>
					<el-tab-pane label="信息披露" name="third">
						<newsList ref="newsList3"></newsList>
					</el-tab-pane>

				</el-tabs>
			</template>
			<!--<div class="pagination">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[5, 10, 20]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total"></el-pagination>
			</div>-->
		</div>
	</div>
</template>

<script>
	import * as api from "../../api";
	import auth from "../../auth";
	import newsList from "@/components/newsList.vue";
	export default {
		components: {
			newsList
		},
		data() {
			return {
				activeName: 'first',
				myTitle: "官方公告",
				Mytype: "1",
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 10,
						parentId: 0
					},
					rows: []
				},

				currentRow: [],
				listLoading: false,
				//				tableData: {
				//					pagination: {
				//						total: 0,
				//						pageNo: 1,
				//						pageSize: 10,
				//						parentId: 0
				//					},
				//					rows: []
				//				},

			}
		},
		methods: {
			handleClick(tab, event) { //选项卡的切换
				if(tab.index == '0') {
					this.myTitle = "官方公告"
					this.Mytype = "1"
					this.$refs.newsList1.getNewsList(this.Mytype);
				} else if(tab.index == '1') {
					this.myTitle = "资讯新闻"
					this.Mytype = "2"
					this.$refs.newsList2.getNewsList(this.Mytype);
				} else if(tab.index == '2') {
					this.myTitle = "信息披露"
					this.Mytype = "3"
					this.$refs.newsList3.getNewsList(this.Mytype);
				} else {

				}
			},
			//
			//			handlePictureCardPreview(file) {
			//				this.dialogImageUrl = file.url;
			//				this.dialogVisible = true;
			//			},
			//
			//			handleSelectionChange(val) { //分页取消选择触发
			//				this.currentRow = val.map(i => i.fid);
			//			},
			//			handleSizeChange(val) { //分页页面
			//				this.tableData.pagination.pageSize = val;
			//			},
			//			handleCurrentChange(val) { //分页当前页
			//				this.tableData.pagination.pageNo = val;
			//			},

		},
		created() {

		},
		mounted: function() {
			this.$refs.newsList1.getNewsList(this.Mytype);
		}
	}
</script>

