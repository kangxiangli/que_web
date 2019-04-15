# vboot_web.git-getNavigation #


## 功能（导航）

## 使用
* 导航 使用的话需传递需要的值 
```bash
<getNavigation :routerData="routerData"></getNavigation>         
```
* 项目中需要声明routerData类型为array
## routerData的格式 且不能更改变量名称
* router 为路由跳转的页面  index为当前激活的索引 navigation为导航标题   
```bash
		routerData:[{
					router:"/homePage",
					index:0,
					navigation:this.$t('m.header.1')
				},{
					router:"/foundPage",
					index:1,
					navigation:this.$t('m.header.2')
				},{
					router:"/exchangePage",
					index:2,
					navigation:this.$t('m.header.3')
				}],        
```
## navigation 为轮播的核心代码  











