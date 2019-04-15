<style scoped="scoped">
	.container {
		width: 73%;
		margin: 0 auto
	}
	
	.adv_list {
		padding-top: 33px;
		padding-bottom: 60px;
		text-align: center;
	}
	
	.news-all {
		margin-top: 15px;
		padding: 0 13px;
	}
	
	.news-font {
		width: 100%;
		height: 35px;
		line-height: 35px;
		display: block;
		color: #000;
	}
	
	.news-content.speliy {
		width: 120px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		cursor: pointer;
	}
	
	.news-all .date {
		color: #b9b7b7;
		font-size: 12px;
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
	
	.about-title {
		text-align: center;
		font-weight: normal;
		font-size: 20px;
		letter-spacing: 5px;
	}
	
	.newsImages {
		text-align: center;
	}
	
	.about-img {
		height: 11em;
		text-align: center;
	}
	/*介绍*/
	
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
	
	.adv_title {
		font-size: 24px;
		font-weight: 500;
		color: #434343;
	}
	
	.news_box .news-top {
		height: 25px;
		margin: 20px 20px 0 20px;
		font-weight: 600;
		border-left: 3px solid #00a7f8;
	}
	
	.adv_more {
		color: #666;
		cursor: pointer;
		font-size: 14px;
		margin-top: 38px;
		margin-bottom: 20px;
		text-align: center;
	}
	
	#adv_title_one {
		    color: #fff;
    letter-spacing: 8px;
    text-align: center;
    overflow: hidden;
    padding: 0 20px;
    height: 80px;
    display: -webkit-box;
   
    -webkit-line-clamp: 3;
    font-size: 20px;
	}
	
	.news_box {
		padding-bottom: 4%;
		/*height: 780px;
		background: url(../../../assets/image/dt.png) no-repeat;
		background-size:cover;*/
	}
	
	.box-card .el-card_body {
		padding: 0 !important;
	}
	
	.newsImages img {
		width: 100%;
	}
	
	.el-card {
		border-radius: 0px;
		border: 1px solid #ebeef5;
		background-color: #fff;
		overflow: hidden;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		color: #303133;
	}
	
	.news-fist {
		margin-left: 5px;
	}
	
	.text-left {
		width: 65%;
		margin: 0 auto;
		color: #434343;
		font-size: 14px;
		line-height: 1.8;
	}
	
	.news_lis {
		height: 145px;
		padding: 0 20px;
		font-size: 13px;
	}
	
	.news-more {
		padding-bottom: 20px;
		padding-right: 22px;
		font-size: 12px;
	}
	
	.about-background .about-con {
		background-color: #063271;
	}
	
	.row_bottom {
		position: absolute;
		bottom: 0px;
		width: 31.33333%;
		height: 59px;
		line-height: 59px;
	}
</style>
<template>
	<div class="container">
		<!--解决方案-->
		<div class="solution_box">
			<el-row :gutter="24">
				<div class="adv_list">
					<h2 class="adv_title">{{$t('m.firstPage.title.1')}}</h2>
					<p><img src="../../../assets/image/zl_03.png" /></p>
				</div>
			</el-row>
			<el-row>
				<el-col :span="8" v-for="(item, index) in introduceData">
					<div :class="index==1?'about-background':'about-backgr'" @click="goDetail(item.fid)">
						<div class="about-con about-backg">
							<div class="row">
								<div class="news-top clearfix">
									<!--<router-link :to="{path: '/planDetail', params: {fid: item.fid}}" >-->
									<!--<a :href="item.introduceHref" style="text-decoration: none;">-->
									<p class="product">
										<img :src="item.furl" alt="" />
									</p>
									<div class="adv_title_one" id="adv_title_one" style=" -webkit-box-orient: vertical;">{{item.ftitle}}
									</div>
									<!--</a>-->
									<!--</router-link>-->
								</div>

							</div>

						</div>
					</div>
				</el-col>
			</el-row>
			<router-link to="/plan">
				<h2 class="adv_more">{{$t('m.firstPage.advatage.7')}}&gt;&gt;</h2>
			</router-link>

		</div>
		<!--新闻资讯-->
		<div class="news_box">
			<el-row :gutter="24">
				<div class="adv_list">
					<h2 class="adv_title">{{$t('m.firstPage.title.2')}}</h2>
					<p><img src="../../../assets/image/zl_03.png" /></p>
				</div>
			</el-row>
			<el-row :gutter="24">
				<el-col :span="8" v-for="item in newsData">
					<div class="box-card el-card">
						<div class="grid-content newsImages">
							<img :src="item.newsImages" alt="" />
						</div>
						<div class="news-top clearfix">
							<span class="news-fist">{{item.newsTitle}}</span>
						</div>
						<div class="news_lis">
							<a class="news-font clearfix" target="_blank" v-for="val in item.myNews">
								<el-row type="flex" justify="space-between">
									<div class="news-content speliy" @click="newsItem(val.fid)">{{val.ftitle}}</div>
									<div class="news-date date">
										{{val.ftime}}
									</div>
								</el-row>
							</a>
						</div>
						<el-row type="flex" class="row_bottom" justify="space-between">
							<span class="news-more">
							</span>
							<span class="news-more">
								<router-link :to="item.newsHref">
								<span class="adv_more" >{{$t('m.firstPage.advatage.8')}}&gt;&gt;</span>
							</router-link>
							<!--<a :href="item.newsHref">{{$t('m.firstPage.advatage.8')}}&gt;&gt;</a>-->
							</span>
						</el-row>

					</div>

				</el-col>
			</el-row>
		</div>
		<!--平台优势-->
		<div class="platform_box">
			<el-row :gutter="24">
				<div class="adv_list">
					<h2 class="adv_title">{{$t('m.firstPage.title.3')}}</h2>
					<p><img src="../../../assets/image/zl_03.png" /></p>
				</div>
			</el-row>
			<el-row style="margin-bottom: 4%;">
				<el-col :span="8" v-for="(item, index) in platformData">
					<div class="grid-content bg-purple">
						<div class="about-con1">
							<div class="row">
								<div class="col-xs-12 ">
									<div class="about-img security">
										<img :src="item.platformImages" alt="" />
									</div>
								</div>
							</div>
							<h3 class="about-title">{{item.platformTitle}}</h3>
							<p class="text-left">{{item.platformContent}}</p>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>

		<!--平台优势-->

	</div>

</template>

<script>
	export default {
		components: {},
		props: {
			newsData: {
				type: Array,
				default: []
			},
			introduceData: {
				type: Array,
				default: []
			},
			platformData: {
				type: Array,
				default: []
			},
			advantageUrl: {
				type: String,
				default: []
			}
		},
		data() {
			return {
				myNewData: []
			}
		},
		methods: {
			newsItem(fid) {
				console.log("fid" + fid)
				let newFid = window.sessionStorage.setItem('newFid', fid);
				this.$router.push({
					path: '/newsDetail'
				})
			},
			goDetail(fid) { //点击查看解决方案详情
				this.$store.state.navMenuIndex = 1;
				let planFid = window.sessionStorage.setItem('planFid', fid);
				this.$router.push({
					path: '/planDetail'
				})
			},
			myNews(url) { //轮播图
				var _this = this;
				_this.$http.get(url).then(res => {
					let data = res.data.myNews[0]
					this.newsData[0].myNews = res.data.myNews[0].a;
					this.newsData[1].myNews = res.data.myNews[0].b;
					this.newsData[2].myNews = res.data.myNews[0].c;

				})
			}

		},
		created: function() {

		}
	};
</script>