import changeCarouselcomponent from './index.vue'//名字不可与常量名字相同
const changeCarousel = {
	install: function(Vue, option) {
		Vue.component('changeCarousel', changeCarouselcomponent)
	},

};
export default changeCarousel

