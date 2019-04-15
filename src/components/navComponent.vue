<style scoped="scoped">
	.bg-purple-dark {
		background: #EEEEEE;
	}
	
	.bg-purple {
		background: #EEEEEE;
	}
	
	.grid-content {
		min-height: 36px;
	}
	
	.header_help {
		cursor: pointer;
		text-align: center;
		display: inline-block;
		width: 77px;
	}
	
	.header_imgage {
		width: 25px;
		height: 25px;
		cursor: pointer;
		vertical-align: middle;
		display: inline-block;
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	.header_img {
		background-image: url(../assets/image/dltx.png);
	}
	
	.header_img:hover {
		background-image: url(../assets/image/tc.png);
	}
	
	.dropdown-menu {
		width: 100px;
		height: 50px;
		text-align: center;
		background: lavenderblush;
		position: absolute;
	}
	
	.nav_box {
		width: 72%;
		text-align: right;
		margin: 0 auto;
	}
	
	.header_box {
		margin-right: 2%;
		margin-right: 2%;
		color: #666666;
		font-size: 12px;
	}
	
	.nav_isShow {
		display: inline-block;
	}
	
	.header_help>a {
		color: #666666;
	}
	.logintOut{
		cursor: pointer;
	}
</style>
<template>
	<div class="navComponent">
		<div class="nav_box" >
			<div class="header_box">
				<span class="header_help"><a :href="router" target="_blank">{{ $t("m.header.9") }}</a></span> |
				<span class="header_help" @click="help_btn">{{ $t("m.header.10") }}</span>
				<!--|  <span class="header_help">{{ $t("m.header.11") }}	</span> -->
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span class="nav_isShow" v-if="loginShow">
				<span class="header_help" @click="login_btn">{{ $t("m.login.1") }}</span>
				<span class="header_help" @click="register_btn">{{ $t("m.login.6") }}</span>
				</span>
				<span class="nav_isShow" v-if="!loginShow">
					<!--<el-tooltip class="item" effect="dark" content="点我退出" placement="left">-->
				     	<span class="header_img header_imgage" ></span>
				    <!--</el-tooltip>-->
					<span class="">{{ floginName }}</span>&nbsp;&nbsp;|
					<span  @click="logout" class="logintOut">退出</span>
				</span>
			</div>

		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import * as api from "../api"
	import auth from "@/auth"
	export default {
		computed: mapState([
			'loginShow'
		]),

		data() {
			return {
				router: "",
				showProfileBox: false,
				loginShow: this.$store.state.loginShow,
				floginName: ""
			}
		},

		methods: {
			help_btn() {
				this.$router.push({
					path: '/help'
				})
			},
			login_btn() { //首页
				this.$router.push({
					path: '/homePage'
				})
			},
			register_btn() { //跳转注册页
				this.$router.push({
					path: '/registerPage'
				})
			},
			cur_btn() { //在线客服接口 
				var _this = this;
				_this.$http.get(_this.getServerUrl() + api.FIRSTPAGE_GET_ONLINE)
					.then(res => {
						if(res.data.success == true) {
							_this.router = res.data.data;
						}
					});

			},
			logout() {
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.LOGOUT).then(res => {
					if(res.data.success == true) {
						_this.$store.state.loginShow = true; //
						_this.$store.state.navMenuIndex = 0;
						_this.$store.state.loginDivShow = true;
						window.sessionStorage.setItem('loginShow', true);
						window.sessionStorage.setItem('loginDivShow', true);
						window.sessionStorage.setItem('navMenuIndex', 0);
						auth.logout();
						_this.$router.push({
							path: '/homePage'
						})
					}
				});
			},
			getUserInfo() { //基本信息
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.MER_INFO).then(res => {
					if(res.data.success == true) {
						this.$nextTick(function() {
							_this.floginName = res.data.data.floginName;
							if(res.data.data.fidAuthStatus=='3'){//认证完成
								window.sessionStorage.setItem("quoteAuth",true);
							}
						})

					} else {
						//						this.$message(res.data.msg);
					}
				})
			},

		},
		mounted() {
			let flag = window.sessionStorage.getItem('loginShow');
			if(flag == "false") {
				this.$store.state.loginShow = false;
			}
		},
		watch: {
			getLoginFlag(val) {
				if(val) {
					this.loginShow = true;
				} else {
					this.loginShow = val;
					this.getUserInfo();
				}
			}
		},
		computed: {
			getLoginFlag() {
				return this.$store.state.loginShow;
			}
		},

		created: function() {
			this.cur_btn()

		}
	}
</script>
<style scoped>
	.navComponent {
		width: 100%;
		height: 30px;
		line-height: 30px;
		background-color: #EEEEEE;
		position: fixed;
		top: 0;
		color: #000;
		z-index: 999;
	}
</style>