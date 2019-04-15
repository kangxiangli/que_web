<style type="text/css" scoped="scoped">
	.planPage {
			margin-top: 100px;
			    min-height: 804px;
	}
	.planPage .container {
		width: 73%;
		margin: 0 auto;
	
	}
	/*.container_bg {
		width: 100%;
		height: auto;
		background: url(../../assets/image/dt.png)no-repeat;
		background-size: cover;
	}*/
	
	.banner_box {
		width: 100%;
		/*height: 500px;*/
	}
	
	.banner_img {
		width: 100%;
	}
	
	.adv_list {
		padding-top: 33px;
		padding-bottom: 60px;
		text-align: center;
	}
	
	.about-title {
		text-align: center;
		font-weight: normal;
		font-size: 20px;
		letter-spacing: 5px;
	}
	
	.about-background .about-con {
		background-color: #063271;
	}
	#adv_title_one {
	    color: #fff;
    letter-spacing: 8px;
    text-align: center;
    height: 80px;
    display: -webkit-box;
   
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-size: 20px;
    
	}
	
	
	.product {
		text-align: center;
		margin-top: 12%;
		cursor: pointer;
		overflow: hidden;
		height: 138px;
	}
	
	.product>img {
		height: 100%;
	}
	
	.about-img {
		height: 11em;
		text-align: center;
	}
	
	.news_box .news-top {
		height: 25px;
		margin: 20px;
		border-left: 3px solid #00a7f8;
	}
	
	.about-con {
		background: #0068b3;
		height: 300px;
		border: 2px solid #fff;
		margin: 0 auto;
	}
	
	.about-con:hover,
	.about-background .about-con:hover {
		background: #009fe6;
		cursor: pointer;
	}
	
	.plan_con {
		width: 100%;
		/*height: 620px;*/
	}
	
	.plan_list {
		width: 33.3%;
		float: left;
	}
	
	.el-pagination {
		background: #fff;
		padding: 10px 0 !important;
	}
	
	.pagination {
		padding: 100px;
		text-align: center;
		width: 43%;
		height: 50px;
		margin: 0 auto;
		clear: both
	}
</style>

<template>
	<div class="planPage">
		<div class="banner_box">
			<img class="banner_img" src="../../assets/image/Banner_01.png" />
		</div>
		<div class="container_bg">
			<div class="container">
				<el-row :gutter="24">
					<div class="adv_list">
						<h2 class="adv_title">{{$t('m.firstPage.title.1')}}</h2>
						<p><img src="../../assets/image/zl_03.png" /></p>
					</div>
				</el-row>
				<div class="plan_con">
					<div class="plan_list" v-for="(item, index) in introduceData">
						<div :class="(index==1||index==3||index==5||index==7)?'about-background':'about-backgr'"  @click="goDetail(item.fid)">
							<div class="about-con about-backg">
								<div class="row">
									<div class="news-top clearfix">
										<p class="product">
											<img :src="item.furl" alt="" />
										</p>
										<div id="adv_title_one" class="adv_title_one" style="-webkit-box-orient: vertical;">{{item.ftitle}}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pagination">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[3, 6,9]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total"></el-pagination>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	//	import Element from 'element-ui'
	import * as api from "../../api";
	import panel from "../../components/panel.vue"
	import auth from "../../auth";
	import re_img1 from '../../assets/image/a.png'
	import re_img2 from '../../assets/image/b.png'
	import re_img3 from '../../assets/image/c.png'
	import addRouter from "@/components/addRouter" //新增	
	//import VDistpicker from 'v-distpicker'
	export default {
		components: {
			'imp-panel': panel,

		},
		data() {

			return {
				myFid: "",
				myData: {
					fid: "",
					ftitle: "",
					fdesc: "",
					fcontent: "",
					furl: "",
				},
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 6,
						parentId: 0
					},
					rows: []
				},
				introduceData: [{ //解决方案数据
					introduceHref: '/planDetail',
					ftitle: "",
					furl: "",
					fid: ""
				}],
				myBackToTopStyle: { //回到顶部的的样式
					right: '52px',
					bottom: '50px',
					width: '40px',
					height: '40px',
					zIndex: "999",
					'border-radius': '4px',
					'line-height': '45px',
					background: '#e7eaf1'
				},
				currentRow: [],
				listLoading: false,
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 6,
						parentId: 0
					},
					rows: []
				},

			}
		},
		methods: {
			goDetail(fid) { //点击查看解决方案详情
				let planFid = window.sessionStorage.setItem('planFid', fid);
				this.$router.push({
					path: '/planDetail',
					name: 'planDetail',
					params: {
						name: 'planDetail',
						fid: fid
					}
				})
			},
			palnInfoAll() { //获取所有解决方案
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.SOLVE_PLAN_ALL + "?rows=" + this.tableData.pagination.pageSize + "&page=" + this.tableData.pagination.pageNo)
					.then(res => {
						if(res.data.success == true) {
							this.tableData.pagination.total = res.data.data.totalElements;
							_this.introduceData = res.data.data.content;
							for(let i = 0; i < res.data.data.content.length; i++) {
								let myurl = "";
								myurl = this.getServerUrl() + res.data.data.content[i].furl;
								_this.introduceData[i].furl = myurl;
							}

						} else {

						}
					})
			},
			handleSelectionChange(val) {
				//取消选择触发
				this.currentRow = val.map(i => i.fid);
			},

			handleSizeChange(val) {
				this.tableData.pagination.pageSize = val;
				this.palnInfoAll();
			},
			handleCurrentChange(val) {
				this.tableData.pagination.pageNo = val;
				this.palnInfoAll();
			},
		},
		created() {
			//				this.newsInfoAll();

		},
		mounted: function() {
			this.palnInfoAll();
			this.$store.state.navMenuIndex = 1;
		}
	}
</script>

<style scoped>
	.firstPage {
		width: 100%;
		height: auto;
		margin-top: 126px;
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
		border-bottom: 3px solid #C20C0C;
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
		font-size: .95rem;
	}
	
	.hot-box .hot-box-nav li span.active {
		color: #C20C0C;
	}
</style>