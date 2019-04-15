import backToTopcomponent from './index.vue'
const backToTop = {
	install: function(Vue, option) {
		Vue.component('backToTop', backToTopcomponent);
		
	},

};
export default backToTop

