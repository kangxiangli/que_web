<template>
	<div class="footerComponent">
		<div class="container">
			<div class="footer_about">
				{{$t('m.firstPage.footer.1')}}
			</div>
			
			<el-row type="flex" class="row-bg" justify="space-between">
				<el-col :span="18">
				<ul class="footer_ul">
				<li>{{$t('m.firstPage.footer.2')}}{{tel}}</li>
				<li>{{$t('m.firstPage.footer.3')}}{{email}}</li>
				<li>{{$t('m.firstPage.footer.4')}}{{address}}</li>
			</ul>
				</el-col>
				<el-col :span="6" >
					<div class="warn_text">
						<img src="../assets/image/ewm_sd.jpg"/>
						<p>{{$t('m.firstPage.footer.5')}}</p>
					</div>
				</el-col>

			</el-row>
			
			<div class="footer_border"></div>
			<p style="text-align: center;font-size: 12px; padding-bottom: 10px; color: rgba(255,255,255,0.4)">{{copyright}}</p>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
		tel:"",
		email:"",
		address:"",
		copyright:""
	};
  },
  methods: {
    loadData() {
		let _this=this;
		// _this.tel="000";
		// 		_this.email="111";
		// 		_this.address="222";
		// 		_this.copyright="333";
      this.$http
        .get(
          this.getServerUrl() +'/pub/getSysList')
        .then(res => {
          	if(res.data.success == true) {
				_this.tel=res.data.data.phone;
				_this.email=res.data.data.email;
				_this.address=res.data.data.companyAdd;
				_this.copyright=res.data.data.copyright; 
			}
        });
    }
  },
 mounted: function() {
	this.loadData();
},
};
</script>
<style scoped>
.footerComponent {
  position: relative;
  width: 100%;
  color: #fff;
  border: 1px solid #535353;
  background-color: #535353;
  box-sizing: border-box;
  clear: both;
}
.footer_about {
  border-bottom: 3px solid #fff;
  width: 105px;
  font-size: 18px;
  padding: 10px 0px;
}
.footer_about a {
  display: inline-block;
  color: #fff;
}
.footer_border {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
}
.footer_ul {
  clear: both;
}
.footer_ul li {
  font-size: 13px;
  height: 32px;
  line-height: 32px;
}
.warn_text {
  float: right;
	margin-top:-20px;
	width:102px;
	height:102px;
}

.container {
  width: 72%;
  margin: 0 auto;
}
.footerComponent .container .row-bg {
  /*margin-top: 2%;*/
}
.warn_text img {
  width: 90%;
}
.warn_text {
  font-size: 12px;
}
.warn_text p {
  margin: 5px 0;
}
</style>