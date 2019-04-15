import getHelpcomponent from './index.vue'
const getHelp = {
	install: function(Vue, option) {
		Vue.component('getHelp', getHelpcomponent);
		
	},

};
export default getHelp

