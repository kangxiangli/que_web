import messagecomponent from './index.vue'
const message = {
	install: function (Vue,option ) {
 Vue.component('message',messagecomponent)
}
};

export default message
