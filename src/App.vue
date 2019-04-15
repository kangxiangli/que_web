<template>
  <div id="app">
    <navComponent></navComponent>
    <headerComponent></headerComponent>
   <!--帮助组件-->
    <getHelp :helpData="helpData"></getHelp>
    <router-view></router-view>
    <footerComponent></footerComponent>
    <!--回到顶部-->
		<el-tooltip placement="top" :content="$t('m.login.7')">
			<back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="0"></back-to-top>
		</el-tooltip>
		
  </div>
</template>

<script >
	import * as api from "./api"
import headerComponent from './components/headerComponent'
import navComponent from './components/navComponent'
import footerComponent from './components/footerComponent'
import help from '../static/img/fixed_help.png'
import tel from '../static/img/fixed_tel.png'
import udesk from '../static/img/help_udesk.png'
export default {
  name: 'app',
  data () {
    return {
    	online:"",
    		myBackToTopStyle: { //回到顶部的的样式
					right: '52px',
					bottom: '50px',
					width: '40px',
					height: '40px',
					//					position: "absolute",
					zIndex: "999",
					'border-radius': '4px',
					'line-height': '45px',
					background: '#e7eaf1'
				},
      helpData: [{ //帮助组件数据
						href: '#onlinePage',
						content: '在线问答',
						images: help
					},
					{
						href:"",
						content: '在线客服',
						images: udesk
					},
					{
						href: 'javascript:void(0)',
						content: '010-82885603',
						images:tel
					}
				]
    }
  },
  components: {
    headerComponent,
    navComponent,
    footerComponent
  },

  methods:{
				getHelpOnline(){//在线客服接口 
					var _this=this;
					_this.$http.get(_this.getServerUrl() + api.FIRSTPAGE_GET_ONLINE)
					.then(res => {
						if(res.data.success == true) {
							_this.helpData[1].href=res.data.data;
						}
					});
				}
  },

  mounted: function() {
    // 指定初始路由
//  this.$router.push('/homePage');
   this.getHelpOnline()
  }
}
</script>

<style>
#app {
  /*width: 100%;
  min-width: 1120px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 position: relative;
  color: #2c3e50;
  background-color: #F5F5F5;
  overflow: auto;*/
}
</style>
