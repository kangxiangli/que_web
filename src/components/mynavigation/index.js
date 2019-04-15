import getNavigationcomponent from './index.vue'
const getNavigation = {
	install: function(Vue, option) {
		Vue.component('getNavigation', getNavigationcomponent);	
	},

};
export default getNavigation

