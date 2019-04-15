<style scoped="scoped">
	.help_list li {
		position: relative;
		margin-top: 2px;
		list-style: none;
	}
	
	.help_list li span {
		
	display: inline-block;
    text-align: center;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 36px;
    height: 36px;
    line-height: 36px;
    font-size: 11px;
    color: #fff;
    background-color:#003172   
	}
	
	.help_content {
		position: fixed;
		z-index: 99999;
		bottom: 100px;
		right: 0;
	}
	
	.help_list li i {
		width: 34px;
		height: 34px;
		display: inline-block;
	}
	
	.help_list li img {
		background-color: #0068b4;
		/*opacity: .5;
		filter: alpha(opacity=50);*/
	}
	

</style>

<template>
	<!--帮助-->
	<div class="help_content">
		<ul class="help_list">
			<li v-for="item in helpData">
				<a :href="item.href" target="_blank" v-on:mouseenter="dataDetails($event)" v-on:mouseleave="hiddenDetail($event)">
					<span style="width:0px;">{{item.content}}</span>
					<img :src="item.images" />
   				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		computed: {

		},
		props: {
			helpData:{
				type: Array,
				default: []
			}
		},
		data() {
			return {

			};
		},
		methods: {
			dataDetails(e) { //鼠标经过事件
				e.target.timer = null; //给每个DIV加一个定时器
				var _this = this;
				var el=e.target.parentNode.firstElementChild.firstChild;//获取鼠标经过的时候展示的当前元素节点
				_this.starMove(el,140);
			},
			hiddenDetail(e) { //鼠标离开事件
				var _this = this;
				var el=e.target.parentNode.firstElementChild.firstChild;
				_this.starMove(el,0);

			},
			starMove(obj, iTarget) {
				clearInterval(obj.timer);
				obj.timer = setInterval(function() {
				let	speed = (iTarget - obj.offsetWidth) / 6;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if(obj.offsetWidth == iTarget) {
						clearInterval(obj.timer);
					} else {
						obj.style.width = obj.offsetWidth + speed + "px";
					}
				}, 30);
			}

		},
		created: function() {

		},
		mounted: function() {
			this.$nextTick(function() {

			})
		}
	};
</script>

