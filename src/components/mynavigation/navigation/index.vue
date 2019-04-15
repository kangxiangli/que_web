<style type="text/css">
	.h-tab {
		float: left;
		width: 100%;
		height: 70px;
	}
	
	.h-tab ul {
		float: left;
		width: 100%;
	}
	.h-tab li:last-child {
		/* background: #0061b2; */
	}
	.h-tab li {
	    float: left;
    width: 14%;
    min-width: 105px;
    text-align: center;
    cursor: pointer;
	}
	.h-tab li.active a{
		    border-bottom: 2px solid #1d2089;
	}
	.h-tab li:hover a span ,.h-tab li.active a span{
		color: #002231;
	}
	.h-tab span {
		display: inline-block;
		width: 100%;
	}
	
	.h-tab a {
	font-size: 16px;
    color: #fff;
    font-weight: 600;
    height: 68px;
    width: 100px;
    display: inline-block;
	}
	
	.navbar-brand {
		line-height: 70px;
		display: inline-block;
		height: 70px;
	}
	.logo_box{
		position: relative;
    height: 70px;
	}
	.flogo {
		width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
	}
</style>
<template>
	<div class="h-tab">
		<el-row :gutter="24">
			<el-col :span="6">
				<div class="grid-content bg-purple  logo_box">
						<img class="flogo" alt="举证平台logo" src="../../../../static/img/sdlogo.png">
				</div>
			</el-col>
			<el-col :span="18">
				<div class="grid-content bg-purple" style="float:right;">
					<ul>
						<li v-for="item in routerData"  v-bind:class="{ active: layout.changeColor[item.index] }" @click="changeIndex(item.index)">
							<router-link :to="item.router">
								<span>{{item.navigation}}</span>
							</router-link>
						</li>
						<!-- <li>
							<a href="http://192.168.0.98:8081/open/web/#/appCenter"> 开放平台</a>
						</li> -->
					</ul>
				</div>
			</el-col>
			<el-col :span="4" v-if="isShow">
				<div class="grid-content bg-purple">
					<div class="h-search">
						<template>
							<el-select v-model="value" placeholder="请选择" @change="changeLangEvent(value)">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>

</template>

<script>

export default {
	name:"navigation",
		computed: {
			getNavMenuIndex() {
				return this.$store.state.navMenuIndex;
			}
		},
		props: {
			routerData: {
				type: Array,
				default: []
			},

		},
		data() {
			return {
				isShow:false,
				options: [{
					value: 'zh-CN',
					label: this.$t('m.language.Chinese')
				}, {
					value: 'en-US',
					label: this.$t('m.language.English')
				}],
				value: '',
				lang: '',
				layout: {
					isShowLoginType: false,
					changeColor: [true, false, false, false, false, false],
					//					login: {
					//						dialogVisible: false,
					//						isShowLoginIndex: true,
					//						isShowLogin: false,
					//						isShowRegister: false,
					//						isShowHint: false
					//					}
				},
			};
		},
		watch: {
			value() {
				var _this = this;
				_this.lang = _this.value;
				window.localStorage.setItem('ELEMENT_LANGUAGE', this.value);
				this.$router.go(0);
			},
			getNavMenuIndex(val) {
				this.changeBgcEvent(val);
				// this.getUserInfo();
			}

		},
		methods: {
			changeLangEvent(val) {
				var _this = this;
				_this.$confirm('确定切换语言吗?', '提示', {
					confirmButtonText: '确定',   
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log("val   "+val)
					console.log("lang   "+_this.lang)
					_this.$i18n.locale = _this.lang;

				}).catch(() => {
//					_this.$message({
//						type: 'info',
//						
//					});
				});
			},
			/**
			 * @argument e: 传入的参数 代表数组中 index 位置
			 * 
			 */
			changeBgcEvent(e) {
				let arr = [];
				// _this.$store.state.navMenuIndex=e;
				for(let elem in this.layout.changeColor) {
					parseInt(elem)
					if(e == elem) {
						arr.push(true);
					} else {
						arr.push(false)
					}
				}
				this.layout.changeColor = arr;
			},
			changeIndex(e) {
				this.$store.state.navMenuIndex=e;
				this.changeBgcEvent(e);
			},

		},
		created: function() {

		}
	};
</script>

<style>

</style>