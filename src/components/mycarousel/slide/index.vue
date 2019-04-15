<style scoped="scoped">
	.findMusicComponent .slide-bgc {
		/*clear: both !important;*/
	}
	
	.el-carousel {
		margin: 0 auto;
	}
	
	.slide-img {
		width: 100%;
		height: auto;  
	}
	
	.slide-img img {
		width: 100%;
		
	}
	
</style>
<template>
	<el-carousel :interval="inv" :autoplay="autoplay" :arrow="arrow" :height="height">
		<el-carousel-item v-for="(item,index) in slides" :key="index">
			<div class="slide-img"><img  v-if="isShow" :src='item.src'></div>
		</el-carousel-item>
	</el-carousel>
</template>
<!--<template>
	<div class="slide-bgc" v-bind:style="{background:bgColor}">
		<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
			<div class="slide-img">
				<a>
					<transition name="slide-trans">
						<img v-if="isShow" :src='slides[nowIndex].src'>
					</transition>
					<transition name="slide-trans-old">
						<img v-if="!isShow" :src='slides[nowIndex].src'>
					</transition>
				</a>
			</div>
			<h3>{{ slides[nowIndex].title }}</h3>
			<ul class="slide-pages">
				<li v-for="(item, index) in slides" @click="goto(index)">
					<a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
				</li>
			</ul>
		</div>
		<i class="arrow left-arrow el-icon-arrow-left" @click="goto(prevIndex)" @mouseover="clearInv" @mouseout="runInv"></i>
		<i class="arrow right-arrow el-icon-arrow-right" @click="goto(nextIndex)" @mouseover="clearInv" @mouseout="runInv"></i>
	</div>
</template>-->

<script>
	export default {
		name: "mycarousel",
		props: {
			slides: { //轮播数据
				type: Array,
				default: []
			},
			autoplay: { //是否自動切換
				type: Boolean,
				default: true
			},
			height: { //轮播高
				type: String,
				default: "400px"
			},
			arrow: { //是否显示切换按钮
				type: String,
				default: "hover"
			},
			inv: { //轮播切换时间
				type: Number,
				default: 2000
			}
		},
		data() {
			return {
				bgColor: '',
				nowIndex: 0,
				isShow: true
			}
		},
		computed: {
			prevIndex() {
				if(this.nowIndex === 0) {
					return this.slides.length - 1
				} else {
					return this.nowIndex - 1
				}
			},
			nextIndex() {
				if(this.nowIndex === this.slides.length - 1) {
					return 0
				} else {
					return this.nowIndex + 1
				}
			}
		},
		methods: {
			mySlides(ary, url) { //轮播图
				var _this = this;
				_this.$http.get(url).then(res => {
					_this[ary] = res.data.slides;

				})
			},
			goto(index) {
				this.isShow = false
				setTimeout(() => {
					this.isShow = true
					this.nowIndex = index
					this.bgColor = this.slides[this.nowIndex].bgColor
				}, 10)
			},
			runInv() {
				this.invId = setInterval(() => {
					this.goto(this.nextIndex)
				}, this.inv)
			},
			clearInv() {
				clearInterval(this.invId)
			}
		},
		mounted() {
			//			this.runInv();

		}
	}
</script>

<style scoped>
	/*.slide-trans-enter-active {
		transition: all .5s;
	}
	
	.slide-trans-enter {
		transform: translateX(900px);
	}
	
	.slide-trans-old-leave-active {
		transition: all .5s;
		transform: translateX(-730px);
	}
	
	.slide-bgc {
		position: relative;
		width: 100%;
		height: 336px;
	}
	
	.slide-show {
		position: relative;
		margin: 15px 15px 15px 0;
		width: 730px;
		
		height: 336px;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.slide-show h3 {
		position: absolute;
		width: 100%;
		height: 100%;
		color: #fff;
		background: #000;
		opacity: .5;
		bottom: 0;
		height: 30px;
		line-height: 30px;
		text-align: left;
		padding-left: 15px;
	}
	
	.slide-img {
		width: 100%;
	}
	
	.slide-img img {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.slide-pages {
		position: absolute;
		bottom: 25px;
		right: 15px;
	}
	
	.slide-pages li {
		display: inline-block;
		padding: 0 10px;
		cursor: pointer;
		color: #fff;
	}
	
	.slide-pages li .on {
		text-decoration: underline;
	}
	
	.arrow {
		position: absolute;
		top: 130px;
		font-size: 3em;
		color: #ccc;
		opacity: .6;
		cursor: pointer;
	}
	
	.left-arrow {
		left: 90px;
	}
	
	.right-arrow {
		right: 90px;
	}*/
</style>