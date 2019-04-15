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
	p{
		margin: 0;
	}
</style>

<template>
	<div class="planDetailPage">
		<div class="container">
			<el-breadcrumb class="breadcrumb_headr" separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/news' }">新闻资讯</el-breadcrumb-item>
				<el-breadcrumb-item>{{myData.ftitle}}</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="detail_con">
				<el-row :gutter="24">
					<div class="adv_list">
						<h2 class="adv_title">{{myData.ftitle}}</h2>
						<p><img src="../../assets/image/zl_03.png" /></p>
					</div>
				</el-row>
				<div class="detaile_content" v-html="myData.fcontent">
					<!--{{myData.fcontent}}-->
				</div>
			</div>

		</div>

	
	</div>
</template>

<script>
	//	import Element from 'element-ui'
	import * as api from "../../api";
	import auth from "../../auth";
	import re_img1 from '../../assets/image/a.png'
	import re_img2 from '../../assets/image/b.png'
	import re_img3 from '../../assets/image/c.png'
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

			}
		},
		methods: {
			detailInfo(fid) { //详细信息xinwen
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.SOLVE_NEWS_DETAILE + "?fid=" + fid).then(res => {
					if(res.data.success == true) {
						this.myData = res.data.data;

					} else {

					}
				})
			},

		},
		created() {
			//			this.myFid = this.$route.params.fid
			this.myFid = window.sessionStorage.getItem('newFid');
		},
		mounted: function() {
			this.detailInfo(this.myFid);

		}
	}
</script>