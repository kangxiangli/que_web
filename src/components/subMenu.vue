<template>
	<!--children拥有子集-->
	<el-submenu :index="item.furl"  v-if="item.children && item.children.length>0">
		<!--父标题-->
		<template slot="title"><i :class="item.ficon"></i><span>{{item.fname}}</span></template>
		<template v-for="child in item.children">
			<subMenu  v-if="child.children && child.children.length>0" :param="child"></subMenu>
			<el-menu-item :index="child.findex"  @click="getMuneId(child.id)" v-else><i :class="child.ficon"></i><span>{{child.fname}}</span></el-menu-item>
		</template>
	</el-submenu>
	<!--没有子集-->
	<el-menu-item :index="item.findex" @click="getMuneId(item.id)" v-else><i :class="item.ficon"></i><span>{{item.fname}}</span></el-menu-item>
</template>
<script>
	import subMenu from "./subMenu.vue"
	import * as api from "../api";
	import navComponent from "./navComponent.vue"
	export default {
		name: 'subMenu',
		props: ['param', "firstId"],
		data: function() {
			return {
				item: this.param,
			}
		},
		components: {
			subMenu
		},
		methods: {
			getMuneId(id) {
				var _this = this;
				this.$router.push({
					path: "help"
				})
				
				this.$http.get(_this.getServerUrl() + api.FIRSTPAGE_GET_CONTENT + "?fid=" + id).then(res => {
					if(res.data.success == true) {
						var a = res.data.data;
						_this.$emit('change', a);

					} else {

					}
				}).catch((err) => {
					console.log(err);
				})
			},
				getFirstMune() {
				var _this = this;
				this.$router.push({
					path: "help"
				})
				this.$http.get(_this.getServerUrl() + api.FIRSTPAGE_GET_CONTENT + "?fid=" + this.firstId).then(res => {
					if(res.data.success == true) {
						var a = res.data.data;
						_this.$emit('change', a);

					} else {

					}
				}).catch((err) => {
					console.log(err);
				})
			}

		},
		created() {
			this.getFirstMune()
		},

	}
</script>
<style>
	.el-menu .fa {
		margin-right: 10px;
	}
</style>