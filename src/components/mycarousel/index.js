import carouselcomponent from './index.vue'
const carousel = {
	install: function(Vue, option) {
		Vue.component('carousel', carouselcomponent);
		
	},

};
export default carousel

