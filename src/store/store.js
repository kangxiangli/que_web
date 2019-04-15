import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	getters: {
		visitedViews: state => state.visitedViews,
		loginShow: state => state.loginShow,
	},
	state: {
		musicMes: [],
		loginShow: true,
		visitedViews: true,
	},
	mutations: {
		INITMUSICMES(state, value) {
			state.musicMes = value
		},

	},
	actions: {
		initmusicmes({
			commit
		}, value) {
			commit('INITMUSICMES', value)
		}
	}
})

export default store