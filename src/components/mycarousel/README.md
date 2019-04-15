# vboot_web.git-carousel #


## 功能（横向轮播）

## 使用
* 横向轮播 使用的话需传递需要的值 
```bash
  <carousel ref="carousel" :autoplay="autoplay" :slides="slides" :inv="invTime" :arrow="arrow" :height="height"></carousel>
```
* 项目中需要声明这两个变量invTime: 2000（轮播图的以2秒的速度轮播）,slides: []（轮播的数据）,以及通过ref取到子组件上的方法
## 参数类型
```bash
	 invTime: 20000,//轮播时间
	autoplay:true,//是否自动轮播
	height:"500px",//轮播图的高
	arrow:"always",//always/hover/never是否显示切换
	slides: [],//轮播数据
```
## 及通过ref取到子组件上的方法
```bash
    # slides是数据的  static/data/mockdata.json是接口
  this.$refs.carousel.getSlides("slides", "static/data/mockdata.json")
```

## 在carousel这个组件中调用了changeCarousel（轮播的中间件）参数同上
```shell
<changeCarousel ref="changeCarousel"  :slides="slides" :inv="invTime"></changeCarousel>

```
## 同样通过ref取到子组件changeCarousel上的mySlides方法
```bash
    # ary传递的数据，url为数据接口
getSlides(ary, url) {
				this.$refs.changeCarousel.mySlides(ary, url)
				
			}

```
## changeCarousel 为轮播的核心代码  











