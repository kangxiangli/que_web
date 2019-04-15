//显式的更改state里的数据
export default {
	// 大写
	INITMUSICMES(state, value) {
		state.musicMes = value;
		console.log(state.musicMes)
	},
	refreshStatu(state,value) {
		state.loginShow = value;
	}

}