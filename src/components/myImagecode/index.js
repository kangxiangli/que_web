import getImagecomponent from './index.vue'
const getImageCode = {
	install: function(Vue, option) {
		Vue.component('getImageCode', getImagecomponent);
		
	},

};
export default getImageCode

