<style type="text/css" scoped="scoped">
	.login_box {
		width: 380px;
		height: 397px;
		position: absolute;
		top: 2.5%;
		right: 18%;
		z-index: 9;
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.8);
	}
	
	.login-bg {
		/*padding: 26px;*/
		z-index: 0;
		/*	background: rgba(255, 255, 255, 0.35);*/
	}
	
	.my_ruleForm .el-form-item .el-input {
		margin-left: -50px !important;
	}
	
	.my_ruleForm .input_group {
		margin-bottom: 20px;
	}
	
	.login_text {
		text-align: center;
		color: #434343;
		margin: 0;
		font-size: 25px;
		line-height: 116px;
		letter-spacing: 10px;
		font-weight: 500;
		height: 116px;
	}
	
	.my_ruleForm .el-button {
		margin-left: 50px !important;
		width: 280px;
		letter-spacing: 8px;
		font-size: 16px;
	}
	
	.my_ruleForm .grid-content {
		cursor: pointer;
		font-size: 14px;
		line-height: 36px;
		color: #333;
	}
	
	.login_L {
		text-align: left;
	}
	
	.login_R {
		text-align: right;
	}
	
	.login_rezgin {
		margin-left: 40px;
	}
	
	.banner_box {
		width: 100%;
		height: 500px;
		background: url(../../assets/image/Banner.png) no-repeat;
		background-size: cover;
	}
	
	.news_content {
		height: 30%;
		background: url(../../assets/image/dt.png) no-repeat;
		background-size: cover;
		position: absolute;
		top: 49%;
		width: 100%;
		z-index: -1;
	}
	

</style>
<style type="text/css">
		.my_ruleForm .el-form-item__error {
		left: -47px !important;
	}
</style>
<template>

	<div class="firstPage">
		<!--<navComponent ref="navC"></navComponent>-->
		<!--登录-->
		<div class="login_box" v-if="loginIsShow">
			<div class="login-bg">
				<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="my_ruleForm">
					<h1 class="login_text"> {{$t('m.login.1')}}</h1>
					<div>{{$store.state.count}}</div>
					<el-form-item label="" prop="floginName">
						<el-input type="text" placeholder="请输入手机号码"  v-model="ruleForm2.floginName" auto-complete="off" v-on:input="changeValue"></el-input>
					</el-form-item>
					 <!--<getCode :messageUrl="messageUrl" :getCodeStyle="getCodeStyle"></getCode>-->
					<el-form-item label="" prop="fpassword">
						<el-input type="password" placeholder="请输入密码" v-model="ruleForm2.fpassword" auto-complete="off" v-on:input="changeValue" @keyup.enter.native="submitForm('ruleForm2')"></el-input>
					</el-form-item>
					<el-row>
						<el-col :span="24">
						<div class="" style="color:red; margin: 0 auto 22px auto;text-align:center;" v-show="errorIsShow">提示：{{errorMessage}}</div>
						</el-col>
					</el-row>
					<el-button type="primary" @click="submitForm('ruleForm2')">
						<!--<div class="login_btn">
						</div>-->
						{{$t('m.login.4')}}
					</el-button>
					<el-row type="flex" class="row-bg" justify="space-around">
						<el-col :span="6">
							<div class="grid-content login_word login_L" @click="forget_btn"> {{$t('m.login.5')}}</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content login_rezadvatagegin login_R" @click="register_btn">{{$t('m.login.6')}}</div>
						</el-col>
					</el-row>
					<!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
				</el-form>
			</div>

		</div>
		<div class="banner_box">
			<!--<img class="banner_img" src="../../assets/image/Banner.png" />-->
		</div>
		<!--轮播图-->
		<!--<carousel ref="carousel" :autoplay="autoplay" :slides="slides" :inv="invTime" :arrow="arrow" :height="height"></carousel>-->
		<!--图片验证码-->
		<!--<getImageCode :imageMessageUrl="imageMessageUrl" :imgCodeStyle="getImageCodeStyle"></getImageCode>-->
		<!--短信验证码-->
		<!--<getCode :messageUrl="messageUrl" :getCodeStyle="getCodeStyle"></getCode>-->
		<!--帮助-->
		<!--<getHelp :helpData="helpData"></getHelp>-->
		<!--公司优势-->
		<advantageList ref="advantageList" :introduceData="introduceData" :platformData="platformData" :newsData="newsData" :advantageUrl="advantageUrl"></advantageList>
		<div class="news_content"> </div>

	</div>
</template>
<script>
	import Element from 'element-ui'
	import * as api from "../../api"
	import navComponent from '@/components/navComponent'
	import auth from "../../auth";
	import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
	import re_img1 from '../../assets/image/a.png'
	import re_img2 from '../../assets/image/b.png'
	import re_img3 from '../../assets/image/c.png'
	import mews_img1 from '../../assets/image/aa.png'
	import mews_img2 from '../../assets/image/bb.png'
	import mews_img3 from '../../assets/image/cc.png'
	import platform_img1 from '../../assets/image/e.png'
	import platform_img2 from '../../assets/image/d.png'
	import platform_img3 from '../../assets/image/f.png'

	export default {
		components: {
			navComponent,
		},
		data() {
			var validateLoginName = (rule, value, callback) => {
				if(value === '') {
					callback(new Error(this.$t('m.login.8')));
				} else {
					//					if(this.ruleForm2.floginName !== '') {
					//						this.$refs.ruleForm2.validateField('floginName');
					//					}
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error(this.$t('m.login.9')));
				} else {
					//					if(this.ruleForm2.fpassword !== '') {
					//						this.$refs.ruleForm2.validateField('fpassword');
					//					}
					callback();
				}
			};
			return {
				myRouter:"",
				loginIsShow:this.$store.state.loginDivShow,
				ruleForm2: {
					floginName: '',
					fpassword: ''
				},
				errorIsShow:false,
				errorMessage:"",
				rules2: {
					floginName: [{
						required: true,
						message: '请输入手机号码',
						trigger: 'blur'
					}, {
						validator: validateLoginName,
						trigger: 'blur'
					}],
				fpassword: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}, {
						validator: validatePass,
						trigger: 'blur'
					}],
					

				},
				//				invTime: 20000, //轮播时间
				//				autoplay: false, //是否自动轮播
				//				height: "400px", //轮播图的高
				//				arrow: "always", //always/hover/never是否显示切换
				//				slides: [], //轮播数据
								messageUrl: "/api/vtweb/message/sendPhone", //短信验证接口
				advantageUrl: "/api/vtweb/message/test", //公司优势接口
				//				imageMessageUrl: "static/data/mockdata.json", //图片验证接口
								getCodeStyle: { //短信验证样式
									width: '300px',
								},
				//				getImageCodeStyle: { //图片验证样式
				//					width: '500px',
				//				},

				introduceData: [{ //解决方案数据
						introduceHref: '/planDetail',
						ftitle: "",
						furl: "",
						fid: ""
					}

				],
				platformData: [{ //平台优势数据
						platformTitle: this.$t('m.firstPage.advatage.1'),
						platformImages: platform_img3,
						platformContent: this.$t('m.firstPage.advatage.4'),
					},
					{
						platformTitle: this.$t('m.firstPage.advatage.2'),
						platformImages: platform_img2,
						platformContent: this.$t('m.firstPage.advatage.5'),
					},
					{
						platformTitle: this.$t('m.firstPage.advatage.3'),
						platformImages: platform_img1,
						platformContent: this.$t('m.firstPage.advatage.6'),
					}
				],
				newsData: [{ //新闻资讯数据
						newsHref: '/news',
						newsTitle: this.$t('m.firstPage.title.5'),
						newsImages: mews_img1,
						myNews: [{
							ftitle: "",
							ftime: "",

						}]
					},
					{
						newsHref: '/news',
						newsTitle: this.$t('m.firstPage.title.6'),
						newsImages: mews_img2,
						myNews: [{
							ftitle: "",
							ftime: "",

						}]
					},
					{
						newsHref: '/news',
						newsTitle: this.$t('m.firstPage.title.7'),
						newsImages: mews_img3,
						myNews: [{
							ftitle: "",
							ftime: "",

						}]
					},

				],

			}
		},

		computed:{
			getLoginDivShow() {
				return this.$store.state.loginDivShow;
			}
		},
		watch: {
			getLoginDivShow(val) {
				this.loginIsShow=val;
				this.ruleForm2.floginName= '';
				this.ruleForm2.fpassword= '';
			}
		},


		methods: {
			newsDatas() { //获取新闻资讯前6条
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.SOLVE_NEWS).then(res => {
					if(res.data.success == true) {
						_this.newsData[0].myNews = res.data.data.fnoticeList;
						_this.newsData[1].myNews = res.data.data.fnewsList;
						_this.newsData[2].myNews = res.data.data.finfoDiscList;
					} else {}
				})
			},
			solveData() { //获取解决方法前三条
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.SOLVE_PLAN).then(res => {
					if(res.data.success == true) {
						_this.introduceData = res.data.data;
						for(let i = 0; i < res.data.data.length; i++) {
							let myurl = "";
							myurl = this.getServerUrl() + res.data.data[i].furl;
							_this.introduceData[i].furl = myurl;
						}

					} else {}
				})
			},
			record() {
				this.$http.get(this.getServerUrl() + api.LOGIN_RECORD).then(res => {
					if(res.data.success == true) {} else {

					}
				})
			},
			changeValue(){
				this.errorIsShow=false;
				this.errorMessage="";
			},
			submitForm(formName) { //登录
				var _this = this;
				_this.$refs[formName].validate((valid) => {
					if(!valid) {
						_this.myMessageBox("error", "请正确填写信息", "温馨提示")
					} else {
						this.$http.post(_this.getServerUrl() + api.LOGIN, _this.ruleForm2).then(res => {
								if(res.data.success == true) {
								//登陆成功
								this.$store.state.loginShow = false; //
								_this.$store.state.navMenuIndex = 0;
								_this.$store.state.loginDivShow = false;
								window.sessionStorage.setItem('loginDivShow', false);
								window.sessionStorage.setItem('navMenuIndex', 0);
								window.sessionStorage.setItem('loginShow', false);
								auth.login(res.data.data);
								_this.record() //获取登录时间
								_this.loginIsShow = false; //隐藏登录框
								this.errorIsShow = false;
								this.errorMessage = "";
									if(window.sessionStorage.getItem("quoteAuth") != 'true') {
									this.$http.get(_this.getServerUrl() + '/cd/memberAuth/isAuth').then(res => {
										if(res.data.success == true) {
											if(res.data.data != '3') {
												this.$store.state.navMenuIndex = 5;
												this.$alert(res.data.msg, '温馨提示', {
													confirmButtonText: '确定',
													type: 'warning',
													callback: action => {
														this.$router.push({
															path: '/peoplePage'
														})
													}
												});
											} else {

											}

										}
									})
								}
								
							} else {
								this.errorIsShow = true;
								this.errorMessage = res.data.msg;

							}
						})
					}
				});
			},
			forget_btn() { //忘记密码
				this.$router.push({
					path: '/forgetPage'
				})
			},
			register_btn() { //跳转注册页
				this.$router.push({
					path: '/registerPage'
				})
			},

		},

		mounted: function() {
			if(window.sessionStorage.getItem('loginDivShow')=="false"){
				this.$store.state.loginDivShow=false;
			}else{
				this.$store.state.loginDivShow=true;
			}
			 this.$store.state.navMenuIndex = 0;
		},
		created: function() {
			this.solveData();
			this.newsDatas();

		}
	}
</script>
<style scoped>
	.firstPage {
		width: 100%;
		height: auto;
		margin-top: 100px;
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