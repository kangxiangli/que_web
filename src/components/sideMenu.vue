<style type="text/css" scoped="scoped">
	.forgetPage {
		width: 100%;
		height: 100%;
	}
	
	.phontFind_title {
		font-size: 18px;
		color: #434343;
		padding-bottom: 5px;
		padding-left: 5px;
		border-bottom: 1px solid #c8c8c8;
	}
	
	.content_question {
		padding: 39px 32px;
	}
</style>
<style type="text/css" scoped="scoped">
	.container {
		width: 73%;
		margin: 0 auto;
	}
	
	.helpPage {
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
		z-index: 999;
		color: #fff;
		letter-spacing: 7px;
		font-size: 20px;
		font-weight: 800;
	}
	
	.title_help {
		width: 200px;
		display: inline-block;
		height: 45px;
		line-height: 45px;
		text-align: center;
		color: #fff;
		font-size: 20px;
		background-color: #02adf3;
		    border: 1px solid #02adf3;
	}
</style>
<template>
	<div class="helpPage">
		<div class="container">
			<span class="title_help">帮助分类</span>
			<el-container>
				<aside class="main-sidebar animated">
					<el-scrollbar tag="div" wrapClass="vue-scrollbar" v-if="(!sidebar.collapsed||device.isMobile)">
						<div class="sidebar">
							<el-menu :unique-opened="true" default-active="0-0" :default-openeds="open" class="el-menu-vertical-demo" theme="dark" router :collapse="isCollapse" @select="handleSelect">
								<template v-for="item in menuList">
									<subMenu ref="subMenuC" @change="change" :msg="msg" :param="item" :firstId="firstId"></subMenu>
								</template>
							</el-menu>
						</div>
					</el-scrollbar>

					<!--<div class="sidebar" v-else>
					<el-menu :default-active="onRoutes" :default-openeds="onRouteKeys" class="el-menu-vertical-demo" theme="dark" router :collapse="sidebar.collapsed&&!device.isMobile" @select="handleSelect">
						<template v-for="item in menuList">
							<subMenu ref="subMenuC"  @change="change"  :msg="msg" :param="item" :firstId="firstId"></subMenu>
						</template>
					</el-menu>
				</div>-->

				</aside>
				<el-main>
					<div class="helpComponent">
						<div class="phontFind_title">
							{{myData.ftitle}}
						</div>
						<div class="content_question" v-html="myData.fcontent">
							<!--	{{myData.fcontent}}-->
						</div>
					</div>
				</el-main>
			</el-container>
		</div>
	</div>
</template>
<script>
	import subMenu from "./subMenu.vue"
	//	import helpComponent from "./helpComponent.vue"
	import * as api from "../api";
	import { mapGetters, mapActions, mapMutations } from 'vuex'
	//import * as types from "../store/mutation-types"
	export default {
		props: {
			show: Boolean,

		},
		computed: {
			key() {
				return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
			},
			isCollapse() {
				//    return !this.sidebar.opened
			}
		},
		data() {
			return {
				open: ['/help0'],
				isCollapse: false,
				msg: {},
				firstId: "",
				myData: {
					ftitle: "",
					fcontent: ""
				},
				device: {
					isMobile: false
				},
				sidebar: {
					collapsed: false,
					show: true,
				},
				menuList: [],
			}
		},
		components: {
			subMenu,

		},
		computed: {
			//    ...mapGetters({
			//      sidebar: 'sidebar',
			//      device:'device',
			//    }),
			onRoutes() {
				return this.$route.path;
			},
			onRouteKeys() {
				const getParentArray = (path, ms, kas = []) => {
					if(ms && ms.length > 0) {
						for(let k = 0, length = ms.length; k < length; k++) {
							if(path == ms[k].furl) {
								kas.push(ms[k].furl);
								break;
							}
							let i = kas.length;
							if(ms[k].children && ms[k].children.length > 0) {
								getParentArray(path, ms[k].children, kas);
							}
							if(i < kas.length) {
								kas.push(ms[k].furl);
							}
						}
					}
					return kas.reverse();
				}
				return getParentArray(this.$route.path, this.menuList);
			},
			// 使用对象展开运算符将 getters 混入 computed 对象中
			//    ...mapGetters([
			//      'menuList'
			//    ])
		},

		methods: {
			change(msg) {

				this.myData = msg; // msg: 123
			},
			getMenu() { //获取菜单
				var _this = this;
				this.$http.get(_this.getServerUrl() + api.FIRSTPAGE_GET_MENU).then(res => {
					if(res.data.success == true) {
						_this.menuList = res.data.data.menuList;
						_this.firstId = res.data.data.menuList[0].children[0].id
						this.$nextTick(function() {
							_this.$refs.subMenuC[0].getMuneId(_this.firstId);
						})

					} else {}
				}).catch((err) => {
					console.log(err);
				})

			},

			handleSelect() {
				if(this.device.isMobile) {
					this.toggleSidebarShow(false);
				}
			},
			//    ...mapMutations({
			//      toggleSidebarShow: types.TOGGLE_SIDEBAR_SHOW,
			//    }),
			//    ...mapActions({
			//      load: 'loadMenuList' // 映射 this.load() 为 this.$store.dispatch('loadMenuList')
			//    })
		},
		mounted() {

		},
		created: function() {
			this.$router.push({
				path: "help"
			})

			this.getMenu();

		},
	}
</script>
<style>
	.showSlide {
		animation-duration: .2s;
		animation-name: slideInLeft;
	}
	
	.hideSlide {
		animation-duration: .2s;
		animation-name: slideOutLeft;
	}
	
	.main-sidebar {
		/*background-color: #265679;*/
		width: 200px !important;
		position: static !important;
		top: 50px;
		left: 0;
		bottom: 0;
		height: calc(100vh - 50px);
		width: 44px;
		overflow: hidden;
		z-index: 10;
		border: 1px solid #E5E5E5;
		-webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
		-moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
		-o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
		transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
	}
	
	.expandSide {
		width: 230px;
	}
	
	.el-menu-vertical-demo .el-submenu .el-menu-item {
		height: 45px;
		line-height: 45px;
	}
	
	.el-menu-vertical-demo .el-menu-item,
	.el-menu-vertical-demo .el-submenu__title {
		height: 45px;
		line-height: 45px;
	}
	
	.main-sidebar .el-menu--collapse {
		width: 44px;
	}
	
	.main-sidebar .el-menu--collapse>.el-menu-item,
	.el-menu--collapse>.el-submenu>.el-submenu__title {
		padding-left: 13px !important;
	}
	
	.helpPage .vue-scrollbar {
		overflow-y: scroll;
		overflow-x: hidden;
		height: calc(100vh - 50px)
	}
	
	.main-sidebar .el-scrollbar__bar.is-vertical {
		display: none;
	}
	
	.sidebar {
		min-height: 450px;
	}
	
	.el-menu--dark .el-menu-item:hover,
	.el-menu--dark .el-submenu__title:hover {
		background-color: #1b4a6d !important;
	}
	
	.el-menu--dark {
		background-color: #265679 !important;
	}
	
	.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
	.el-menu-item.is-active {
		/*color: #fff !important;
	 background-color: rgba(0,0,0,0.2) !important;*/
	}
	
	.el-menu--dark .el-submenu .el-menu {
		/*background-color:#1b3c56 !important;*/
	}
	
	.sidebar .el-menu {
		/*background-color: #265679 !important;*/
	}
	
	.el-menu-item:focus,
	.el-menu-item:hover,
	.el-submenu__title:hover {
		background-color: rgba(0, 0, 0, 0.1) !important;
	}
	
	.el-submenu__title .el-menu {
		background-color: rgba(0, 0, 0, 0.2) !important;
	}
	
	.el-menu-item.is-active {
		background-color: rgba(0, 0, 0, 0.1) !important;
	}
	
	.menubar .el-submenu.is-active {
		/*background-color: red !important;*/
	}
	
	.el-menu-item,
	.el-submenu__title,
	.el-submenu__title i,
	.el-menu-item i {
		/*color:rgba(255,255,255,0.7) !important;*/
	}
	
	.el-submenu.is-opened .el-submenu__title {
		background-color: rgba(0, 0, 0, 0.3) !important;
	}
</style>