<style type="text/css" scoped="scoped">
	.planDetailPage {
		width: 100%;
		height: auto;
	}
	
	.container {
		width: 73%;
		margin: 0 auto;
	}
	
	.breadcrumb_headr {
		margin-top: 130px;
	}
	
	.adv_list {
		padding-top: 39px;
		padding-bottom: 36px;
		text-align: center;
	}
	
	.about-title {
		text-align: center;
		font-weight: normal;
		font-size: 20px;
		letter-spacing: 5px;
	}
	
	.detail_con {
		margin-top: 70px;
		border: 1px solid #d1d1d1;
		border-bottom: none;
		min-height: 696px;
	}
	
	.detaile_img,
	.detaile_content {
		padding: 0 75px;
	}
	
	.detaile_img img {
		width: 100%;
	}
	
	.detaile_content {
		text-indent: 28px;
		color: #434343;
		font-size: 14px;
		line-height: 2;
	}
	
	p {
		margin: 0;
	}
	
	.adv_title {
		padding: 0 20px;
	}
	

</style>

<template>
	<div class="planDetailPage">
		<div class="container">
			<el-breadcrumb class="breadcrumb_headr" separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/plan' }">解决方案</el-breadcrumb-item>
				<el-breadcrumb-item class="my_nav">{{myData.ftitle}}</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="detail_con">
				<!--<el-row :gutter="24">-->
				<div class="adv_list">
					<h2 class="adv_title">{{myData.ftitle}}</h2>
					<p><img src="../../assets/image/zl_03.png" /></p>
				</div>
				<!--</el-row>-->

				<div class="detaile_content" v-html="myData.fcontent">

				</div>
			</div>

		</div>

	
	</div>
</template>

<script>
	//	import Element from 'element-ui'
	import * as api from "../../api";
	import auth from "../../auth";
	import addRouter from "@/components/addRouter" //新增	
	//import VDistpicker from 'v-distpicker'
	export default {
		components: {

		},
		data() {
			return {
				myFid: "",
				myData: {
					fid: "",
					ftitle: "",
					fcontent: "",
				},
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

			}
		},
		methods: {
			detailInfo() { //详细信息
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.SOLVE_PLAN_DETAILE + "?fid=" + _this.myFid).then(res => {
					if(res.data.success == true) {
						this.myData = res.data.data;
						//						this.myData.furl =_this.getServerUrl()+ res.data.data.furl;
					} else {

					}
				})
			},

		},
		created() {
			//			this.myFid = this.$route.params.fid
			this.myFid = window.sessionStorage.getItem('planFid');
		},
		mounted: function() {
			//			this.$store.state.navMenuIndex=0;
			this.detailInfo();

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