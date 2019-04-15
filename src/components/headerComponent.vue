<template>
	<div class="headerComponent">
		<!--<navComponent ref="navC"></navComponent>-->
		<div class="h-controller">
			<!--<a href="#/findMusicComponent" class="h-logo" @click="changeLangEvent()">
				{{$t('m.music')}}
			</a>-->
			<!--导航-->
			<getNavigation :routerData="routerData" ref="navigation"></getNavigation>
		</div>
	</div>
</template>
<script>
	import { cookie } from '../../static/js/myutil.js'
	import navComponent from '@/components/navComponent'
	import { Loading } from 'element-ui'
	import * as api from "../api"
	import auth from "../auth"
	export default {
		components: {
			navComponent,
		},
		data() {
			return {
				routerData: [{
						router: "/homePage",
						index: 0,
						navigation: this.$t('m.header.1')
					},
					 {
						router: "/plan",
						index: 1,
						navigation: this.$t('m.header.2')
					},
//					  {
//					 	router: "/dataCert",
//					 	index: 2,
//					 	navigation: this.$t('m.header.3')
//					 }, 
//					 {
//					 	router: "/verifyPage",
//					 	index: 3,
//					 	navigation: this.$t('m.header.4')
//					 },
					{
						router:"/proofPage",
						index: 4,
						navigation: this.$t('m.header.5')
					}, 
					{
						router: "/peoplePage",
						index: 5,
						navigation: this.$t('m.header.6')
					}, 
//					{
//						router: "http://192.168.0.98:8081/open/web/#/appCenter",
//						index: 6,
//						navigation: this.$t('m.header.7')
//					}
//					{
//						router: "/peoplePage",
//						index: 0,
//						navigation: this.$t('m.header.6')
//					},
//					{
//						router: "/appCenter",
//						index: 1,
//						navigation: this.$t('m.header.8')
//					},
				],
				//				options: [{
				//					value: 'zh-CN',
				//					label: '中文'
				//				}, {
				//					value: 'en-US',
				//					label: '英文'
				//				}],
				//				value: '',
			}
		},

		methods: {
			/**
			 * @argument e: 传入的参数 代表数组中 index 位置
			 * 
			 */
			// loginEvent() {
			// 	this.$http.post(cookie.getServerUrl() + api.LOGIN , this.login).then(res => {
			// 		if(res.data.success == true) {
			// 			var Authorization = res.data.data;
			// 			auth.login(res.data.data);
			// 			this.$message({
			// 				message: res.data.msg,
			// 				type: 'success'
			// 			});
			// 			this.layout.login.dialogVisible = false;
			// 		}

			// 	})

			// },
			// registerEvent() {
			// 	if(this.register.floginName == null || this.register.fpassword == null) {
			// 		this.layout.login.isShowHint = true;
			// 	} else {
			// 		/**
			// 		 * 注册并登录，将账号密码写入cookie
			// 		 */
			// 		cookie.set('name', this.register.floginName);
			// 		cookie.set('password', this.register.fpassword);

			// 		// 关闭登录框
			// 		this.layout.login.dialogVisible = false;

			// 		let loadingInstance = Loading.service({
			// 			fullscreen: true,
			// 			text: '3秒后自动登录'
			// 		});
			// 		setTimeout(() => {
			// 			loadingInstance.close();
			// 			this.loginName = cookie.get('name');
			// 		}, 3000);

			// 	}
			// },
			isLogined() {
				let name = cookie.get('name');
				let password = cookie.get('password');

				if(name !== null && password !== null) {
					this.loginName = name;
				}
			}
		},
		mounted: function() {
			// this.loginType = this.$store.state.loginType;
			// this.isLogined();
			// let myR=this.$route.fullPath;
			// this.$nextTick(() => {
			// 	this.$router.push({
			// 		path: myR
			// 	})
				
			// })
		}
	}
</script>
<style scoped>
	.headerComponent {
		width: 100%;
		height: 70px;
		line-height: 70px;
		background-color: #42A5F6;
		position: fixed;
		z-index: 99;
		top: 30px;
	}
	
	.h-controller {
		width: 72%;
		min-width: 991px;
		margin: 0 auto;
	}
	
	.h-controller .h-logo {
		float: left;
		margin-right: 30px;
		font-size: 1.5rem;
		font-weight: 600;
		color: #fff;
	}
	
	.h-controller .h-search {
		float: left;
		margin-left: 20px;
	}
	
	.h-controller .h-search input {
		width: 160px;
		height: 25px;
		line-height: 25px;
		padding-left: 10px;
		border-radius: 5px;
		box-sizing: border-box;
	}
	
	.h-controller .h-login {
		position: relative;
		float: left;
		margin-left: 20px;
	}
	
	.h-controller .h-login span {
		font-size: .80em;
		color: #929292;
		cursor: pointer;
	}
	
	.h-controller .h-login .h-login-type {
		z-index: 10;
		position: absolute;
		right: -65px;
		top: 60px;
		width: 150px;
		height: 200px;
		background-color: #333;
	}
	
	.h-controller .h-login .h-login-type li {
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: .85em;
		color: #ccc;
	}
	/* 
 * loginModal登录框
 */
	
	.loginModal {
		text-align: left;
	}
	
	.el-dialog {
		width: 475px;
	}
	
	.loginModal .loginIndex {
		width: 100%;
		height: 100%;
	}
	
	.loginModal .loginIndex .leftBox {
		width: 60%;
		height: 100%;
		border-right: 1px solid #eee;
	}
	
	.loginModal .loginIndex .leftBox .upPic {
		height: 120px;
		background: url('https://s2.music.126.net/style/web2/img/platform.png?42ab2cc5cda8e048cc14758bc2071133') no-repeat 13px 0;
	}
	
	.block button {
		width: 90%;
		height: 35px;
		margin-top: 5px;
	}
	
	.loginModal .sameBox {
		width: 70%;
		height: 80%;
		margin: 0 auto;
	}
	
	.loginModal .sameBox .el-input {
		width: 85%!important;
	}
	
	.loginModal .sameBox .block button {
		width: 85%;
		margin-left: 40px;
	}
	
	.loginModal .sameBox .loginFooter {
		width: 100%;
		height: 35px;
		line-height: 35px;
		text-align: right;
	}
	
	.loginModal .sameBox .registerFooter {
		width: 100%;
		height: 35px;
		line-height: 35px;
		text-align: left;
	}
	
	.loginModal .sameBox .loginFooter span {
		cursor: pointer;
	}
	
	.loginModal .sameBox .registerFooter span {
		cursor: pointer;
	}
	
	.hint {
		color: #C20C0C;
	}
</style>