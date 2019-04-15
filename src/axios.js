import Vue from 'vue'
import axios from "axios";
import auth from './auth'
import router from './router'
import Element from 'element-ui'
import store from './store/index'
// import qs from 'qs'  //将对象解析成url形式
// axios.defaults.headers.common['Authorization'] = auth.getUid();
Vue.prototype.$http = axios
Vue.axios = axios

axios.interceptors.request.use(config => {
	config.headers = {
		Authorization: auth.getUid()
	}
	return config
}, error => {
	return Promise.reject(error)
})

axios.interceptors.response.use(response => {
	if(response.data && ((response.data.code!='lg001') && response.data.success == false)) {
		if(response.data.code === '2001') {
			auth.logout()
			store.state.loginDivShow = true;
			store.state.loginShow = true;
			store.state.navMenuIndex = 0;
			router.push({
				path: '/homePage'
			})
		}else if(response.data.code =='li001') {
			 window.sessionStorage.setItem('licenseFlag', false);
			router.push({
				path: '/licensePage'
			})
			//          location.reload();
		} else if(response.data.code === '2003') {
			Element.MessageBox({
				type: "error",
				message: response.data.msg,
				title: "温馨提示"
			});
			auth.logout()
			store.state.loginDivShow = true;
			store.state.loginShow = true;
			store.state.navMenuIndex = 0;
			router.push({
				path: '/homePage'
			})
			//          location.reload();
		} else if(response.data.code === '2004') {
			Element.MessageBox({
				type: "error",
				message: response.data.msg,
				title: "温馨提示"
			});
			auth.logout()
			store.state.loginDivShow = true;
			store.state.loginShow = true;
			store.state.navMenuIndex = 0;
			router.push({
				path: '/homePage'
			})
		} else if(response.data.code === '2005') {
			Element.MessageBox({
				type: "error",
				message: response.data.msg,
				title: "温馨提示"
			});
			auth.logout()
			store.state.loginDivShow = true;
			store.state.loginShow = true;
			store.state.navMenuIndex = 0;
			router.push({
				path: '/homePage'
			})
		} else if(response.data.code === '1') {

		} else if(response.data.code === '-1') {
			Element.MessageBox({
				type: "error",
				message: response.data.msg,
				title: "温馨提示"
			});
		} else if(response.data.code === '') { //code为空不弹窗

		} else if(response.data.code === '5') { //code为5不弹窗

		} else {
			Element.MessageBox({
				type: "error",
				message: response.data.msg,
				title: "温馨提示"
			});
		}

	}
	return response
}, error => {
	return Promise.resolve(error.response)
})

function checkStatus(response) {
	console.log(response)
	// loading
	// 如果http状态码正常，则直接返回数据
	if(response && (response.status === 200 || response.status === 304 || response.status === 400)) {
		return response
		// 如果不需要除了data之外的数据，可以直接 return response.data
	}
	// 异常状态下，把错误信息返回去
	//return {
	//  status: -404,
	//  msg: '网络异常'
	//}
}

function checkCode(res) {
	// 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
//	if(res.status === -404) {
//		console.log(res.msg)
//	}
	//if (res.data && (!res.data.success)) {
	////  alert(res.data.error_msg)
	//}

	return res
}

export default {
	post(url, data) {
		return axios({
			method: 'post',
			//   baseURL: 'https://cnodejs.org/api/v1',
			url,
			data: data,
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8'
				// 下面是请求formData
				// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}).then(
			(response) => {
				return checkStatus(response)
			}
		).then(
			(res) => {
				return checkCode(res)
			}
		)
	},
	get(url, params) {
		return axios({
			method: 'get',
			//   baseURL: 'https://cnodejs.org/api/v1',
			url,
			params, // get 请求时带的参数
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			}
		}).then(
			(response) => {
				//    	console.log("response"+response)
				return checkStatus(response)
			}
		).then(
			(res) => {
				return checkCode(res)
			}
		)
	}
}