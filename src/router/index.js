import Vue from 'vue'
import Router from 'vue-router'
import NotFoundView from "../components/404.vue";
import registerPage from "../components/registerPage.vue";
import homePage from '../view/home/homePage.vue' //首页
import plan from '../view/home/plan.vue' //解决方案更多
import planDetail from '../view/home/planDetail.vue' //解决方案更多的详情
import news from '../view/home/news.vue' //新闻资讯更多
import newsDetail from '../view/home/newsDetail.vue' //新闻资讯更多的详情
import proofPage from '../view/proof/proofPage.vue' //举证中心
import peoplePage from '../view/people/peoplePage.vue' //会员中心
import forgetPage from '../view/forget/forgetPage.vue' //忘记密码
import helpPage from '../view/help/helpPage.vue' //帮助中心
import licensePage from '../view/license/licensePage.vue' //license申请页面
import help from '@/components/sideMenu.vue';
import onlinePage from '@/components/onlinePage.vue';

// import test from '../../test/index'
Vue.use(Router)
export default new Router({
	
	routes: [{
			path: '/',
			name: '',
			component: homePage,

		},
		{
			path: '/homePage',
			name: 'homePage',
			component: homePage
		},{
			path: '/licensePage',
			name: 'licensePage',
			component: licensePage,
		},
		
		{
			path: '/plan',
			name: 'plan',
			component: plan
		}, {
			path: '/planDetail',
			name: 'planDetail',
			component: planDetail
		},
		{
			path: '/news',
			name: 'news',
			component: news
		}, {
			path: '/newsDetail',
			name: 'newsDetail',
			component: newsDetail
		},
		{
			path: '/registerPage',
			name: 'registerPage',
			component: registerPage
		},
		
		{
			path: '/proofPage',
			name: 'proofPage',
			component: proofPage,
			meta:{
				auth:true
			}
		},
		{
			path: '/peoplePage',
			name: 'peoplePage',
			component: peoplePage
		},
		{
			path: '/onlinePage',
			name: '在线问答',
			component: onlinePage
		},
		{
			path: '/help',
			name: 'helpPage',
			component: help,
//			children: [{
//				path: '/help',
//				name: 'help',
//				component: help
//			} ]

		},
		{
			path: '/forgetPage',
			name: 'forgetPage',
			component: forgetPage
		},

		
		{
			path: '*',
			component: NotFoundView
		}
	],
	scrollBehavior (to, from, savedPosition) {//切换路由回到顶部
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 0)
  })
}
})