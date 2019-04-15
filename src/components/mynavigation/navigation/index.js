import navigationcomponent from './index.vue'
const navigation = {
	install: function (Vue,option ) {
 Vue.component('navigation',navigationcomponent)
}
};

export default navigation
