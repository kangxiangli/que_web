# vboot_web.git-getHelp #


## 功能（帮助组件）

## 使用
* 帮助组件 使用的话需传递需要的值 
```bash
   <getHelp :helpData="helpData"></getHelp>
```
* 项目中需要声明这两个变量helpData类型为array

## helpData类型为array 且不能改变helpData变量名称  因为在实现功能页面哪里循环的是helpData这个
```bash
  helpData: [{
						href: '/question/question.html',
						content: '在线问答',
						images: 'https://51tezi.com/static/front/images/index/fixed_help.png'
					},
					{
						href: 'http://wpa.qq.com/msgrd?v=3&amp;uin=2213834362&amp;menu=yes',
						content: '在线客服',
						images: 'https://51tezi.com/static/front/images/index/help_udesk.png'
					}
					
				]
```

## 在carousel这个组件中调用了changeCarousel（轮播的中间件）参数同上
```shell
<changeCarousel ref="changeCarousel"  :slides="slides" :inv="invTime"></changeCarousel>

```

## help 为帮助的核心代码  











