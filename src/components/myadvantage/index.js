import getAdvantageComponent from './index.vue'
const advantageList = {
	install: function(Vue, option) {
		Vue.component('advantageList', getAdvantageComponent);
		
	},

};
export default advantageList

