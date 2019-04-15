# vboot_web.git-back-to-top  #


## 功能（ 回到顶部）

## 使用
* 帮助组件 使用的话需传递需要的值 
```bash

		<el-tooltip placement="top" content="回到顶部">
			<back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="50"></back-to-top>
		</el-tooltip>
```
* 项目中需要声明这两个变量myBackToTopStyle类型为object

## myBackToTopStyle（回到顶部的的样式）类型为object 格式如下
```bash
 myBackToTopStyle: {
					right: '52px',
					bottom: '50px',
					width: '40px',
					height: '40px',
					position: "absolute",
					zIndex: "999",
					'border-radius': '4px',
					'line-height': '45px',
					background: '#e7eaf1'
				},
```

## gotop 组件 参数同上
```shell
<gotop transitionName="fade" :visibilityHeight="300" :backPosition="50" :customStyle="customStyle"></gotop>

```
## 参数用props接收
```shell
	props: {
				visibilityHeight: {
					type: Number,
					default: 400
				},
				backPosition: {
					type: Number,
					default: 0
				},
				customStyle: {
					type: Object,
					default: function() {
						return {
							right: '52px',
							bottom: '50px',
							width: '40px',
							height: '40px',
							position: "absolute",
							zIndex: "999",
							'border-radius': '4px',
							'line-height': '45px',
							background: '#e7eaf1'
						}
					}
				},
			},

```
## gotop 为货到顶部的核心代码  











