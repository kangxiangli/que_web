// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store/index'
import axios from "./axios";
import auth from "./auth";
import Util from "./util";
import Public from "./public";
//import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/common.css'
import VueI18n from 'vue-i18n'
import VDistpicker from 'v-distpicker'
import carousel from './components/mycarousel' //轮播中间件
import changeCarousel from './components/mycarousel/slide' //轮播
import message from './components/mymessage/message' //短信验证
import getCode from './components/mymessage' //短信验证中间件
import advantage from './components/myadvantage/advantage' //公司优势
import advantageList from './components/myadvantage' //公司优势中间件
import imageMessage from './components/myImagecode/imagecode' //图片验证码
import getImageCode from './components/myImagecode' //图片验证码中间件
import gotop from './components/mybacktotop/gotop' //回到顶部
import backToTop from './components/mybacktotop' //回到顶部中间件
import help from './components/myhelp/help' //帮助
import getHelp from './components/myhelp' //帮助中间件
import navigation from './components/mynavigation/navigation' //导航
import getNavigation from './components/mynavigation' //导航中间件

// import proof from 'com.sinochainproof'
// Vue.use(proof)
Vue.use(VDistpicker) //三级联动
Vue.use(carousel)
Vue.use(changeCarousel)
Vue.use(message)
Vue.use(getCode)
Vue.use(advantage)
Vue.use(advantageList)
Vue.use(imageMessage)
Vue.use(getImageCode)
Vue.use(gotop)
Vue.use(backToTop)
Vue.use(help)
Vue.use(getHelp)
Vue.use(navigation)
Vue.use(getNavigation)
Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(Util);
Vue.use(Public);
const i18n = new VueI18n({
	//  locale: window.localStorage.getItem('ELEMENT_LANGUAGE'),    // 语言标识
	locale: "zh-CN", // 语言标识
	messages: {
		'zh-CN': require('./common/lang/zh'), // 中文语言包
		'en-US': require('./common/lang/en') // 英文语言包
	}
})


//加载路由中间件
Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
let Vm=new Vue({
	el: '#app',
	i18n,
	store,
	router,
	template: '<App/>',
	components: {
		App
	}
})
/**
 * 路由拦截器
 */
router.beforeEach((to, from, next) => {
	let licenseFlag = window.sessionStorage.getItem('licenseFlag');
	if((licenseFlag == "true" && (to.path == '/licensePage'))) {
		next("/homePage");
	} else if(licenseFlag == "false" && (to.path == '/forgetPage')) { //没有license认证
		next("/licensePage");
	} else {
		if(to.path == '/proofPage' || to.path == '/verifyPage') {
			debugger
			if(window.sessionStorage.getItem("quoteAuth")!='true') {
				debugger
			axios.get(config.serverUrl + '/cd/memberAuth/isAuth').then(res => {
   					if(res.data.success == true) {
   						store.state.navMenuIndex=5;
						if(res.data.data!='3') {
							Vm.$alert(res.data.msg, '温馨提示', {
								confirmButtonText: '确定',
								  type: 'warning',
//								center: true,
								callback: action => {
									next("/peoplePage");
								}
							});
						} else {
							next();
						}

					} else {
						next();
					}
				})
			} else {
						next();
					}

		} else {
			next();
		}

		//		let Auth = !window.sessionStorage.getItem(config.prefix);
		//		if(Auth &&( to.path != '/homePage')) {
		//			next("/homePage");
		//			location.reload();
		//		}else{
		//
		//			next();
		//		}
	}

	//	if(to.matched.some( m => m.meta.auth)){
	//			//验证是否实名认证
	//			if(window.sessionStorage.getItem("auth")=='true'){
	//				next();
	//			}else{
	//				debugger;
	//				Element.MessageBox({
	//					type: "warning",
	//					message: "请完成实名认证",
	//					title: "温馨提示"
	//				});
	//					next("/peoplePage");
	//					// this.$store.state.navMenuIndex=5;
	//			}
	//		}else{
	//			next();
	//		}
	// next();

})
