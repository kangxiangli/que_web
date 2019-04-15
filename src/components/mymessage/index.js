import getCodecomponent from './index.vue'
const getCode = {
	install: function(Vue, option) {
		Vue.component('getCode', getCodecomponent);
		
	},

};
export default getCode

