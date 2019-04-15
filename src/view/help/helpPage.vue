<style type="text/css" scoped="scoped">
	.container {
		width: 73%;
		margin: 0 auto;
	}
	
	.helpPage {
		margin-top: 100px;
		    height: 758px;
	}
	
	.banner_box {
		width: 100%;
		/*height: 500px;*/
	}
	
	.banner_img {
		width: 100%;
	}
	
	.el-pagination {
		background: #fff;
		padding: 10px 0 !important;
	}
	
	.pagination {
		margin: 100px auto;
		text-align: center;
		width: 43%;
		height: 50px;
	}
	
	.tab_title {
		position: absolute;
		top: 26%;
		right: 68%;
		z-index: 999;
		color: #fff;
		letter-spacing: 7px;
		font-size: 20px;
		font-weight: 800;
	}
</style>

<template>
	<div class="helpPage">
		<div class="container">
			<template>
				<el-container style="height: auto; ">
					<sideMenu style="width: 100%;" ref="sideMenu"></sideMenu>
					<!--<el-main>
						<router-view :key="key"></router-view>
					</el-main>-->
				</el-container>
			</template>
		</div>
	</div>
</template>

<script>
	import * as api from "../../api";
	import auth from "../../auth";
	import newsList from "@/components/newsList.vue";
	import sideMenu from '@/components/sideMenu.vue'
	export default {
		components: {
			newsList,
			sideMenu
		},

		computed: {
			key() {
				return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
			},
			isCollapse() {
				//    return !this.sidebar.opened
			}

		},
		data() {
			
			return {
			
		

			}
		},
		methods: {


		},
		created() {
			this.$router.push({
					path: "help"
				})
		},
		mounted: function() {
			
		}
	}
</script>