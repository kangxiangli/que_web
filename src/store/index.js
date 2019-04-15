/**
 * 主要入口文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../auth'
// import serData from '../../static/data/server.json'
Vue.use(Vuex)
// sessionStorage.setItem("serverUrl", config.serverUrl);
sessionStorage.setItem("serverMenu", config.myDefaultMenu);
sessionStorage.setItem("auth",false);//实名认证标识
// 引入actions、mutations
import actions from './actions.js'
import mutations from './mutations.js'


// 定义状态state
const state = {
		serverUrl: config.serverUrl,
		musicMes: [],
		loginType: [
		],
		loginDivShow:true,//true:显示登陆页面div
		loginShow: true,//顶部登陆,true表示显示顶部登陆按钮
		navMenuIndex:100,//100为菜单索引
		licenseFlag:false,//是否需要license， false是显示license， true则不显示
    selectExistCert:false//是否显示选择已有存证按钮 fasle是不显示


	}

// 设置暴露接口
export default new Vuex.Store({
	state,
	mutations,
	actions,
});
