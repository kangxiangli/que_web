<template>
	<div>
		<div class="content_border">
			<div class="baseinfo-top-icon">
				<el-row type="flex">
					<el-col :span="6">
						<div class="grid_img">
							<span style="width: 170px;height: 170px;display: inline-block;vertical-align: middle;">
										<img src="../assets/image/sq.png" alt="" />
									</span>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid_img_r">
							<div class="grid_img_b"> {{settingData.fmobile}}&nbsp;&nbsp;&nbsp;您的账号安全级别{{(settingData.femail==""||settingData.femail==null?"中":"高")}}</div>
							<div class="grid_img_s">平台为您提供安全防护，实时保障您的账户安全。</div>
						</div>
					</el-col>
				</el-row>

			</div>
		</div>
		<div class="content_border">
			<div class="baseinfo_box">
				<ul class="baseinfo_ul">

					<el-row :gutter="20">
						<el-col :span="4">
							<div class="base_grid">
								<img src="../assets/image/merber.png" /> <span class="base_grid_span">用户昵称</span>
							</div>
						</el-col>
						<el-col :span="3">
							<div :class="settingData.fnickName==''||settingData.fnickName==null? 'class-a base_grid' : 'class-b base_grid' ">{{(settingData.fnickName==""||settingData.fnickName==null?"未设置":"已设置")}}</div>
						</el-col>
						<el-col :span="14">
							<div class="text-left">{{settingData.fnickName}}</div>
						</el-col>
						<el-col :span="2">
							<div class="class-b text-right ponter" @click="fnickNameBind">{{settingData.fnickName==""||settingData.fnickName==null? '设置>>' : '修改>>'}}</div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="4">
							<div class="base_grid">
								<img src="../assets/image/aw.png" /> <span class="base_grid_span">绑定邮箱</span>
							</div>
						</el-col>
						<el-col :span="3">
							<div :class="settingData.femail==''||settingData.femail==null? 'class-a base_grid' : 'class-b base_grid'">{{(settingData.femail==""||settingData.femail==null?"未绑定":"已绑定")}}</div>
						</el-col>
						<el-col :span="14">
							<div class="text-left">{{settingData.femail}}</div>
						</el-col>
						<el-col :span="2">
							<div class="class-b text-right ponter" @click="femailBind">{{settingData.femail==""||settingData.femail==null? '绑定>>' : '修改>>'}}</div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="4">
							<div class="base_grid">
								<img src="../assets/image/ae.png" /> <span class="base_grid_span">绑定手机</span>
							</div>
						</el-col>
						<el-col :span="3">
							<div :class="settingData.fmobile==''? 'class-a base_grid' : 'class-b base_grid' ">{{(settingData.fmobile==""?"未绑定":"已绑定")}}</div>
						</el-col>
						<el-col :span="14">
							<div class="text-left">{{settingData.fmobile}}</div>
						</el-col>
						<el-col :span="2">
							<div class="class-b text-right ponter" @click="fmobileBind">{{settingData.fmobile==""? '设置>>' : '修改>>'}}</div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="4">
							<div class="base_grid">
								<img src="../assets/image/ar.png" /> <span class="base_grid_span">登录密码</span>
							</div>
						</el-col>
						<el-col :span="3">
							<div :class="settingData.fpassword==''? 'class-a base_grid' : 'class-b base_grid' ">{{settingData.fpassword==''? '未设置' : '已设置'}}</div>
						</el-col>
						<el-col :span="14">
							<div class="text-left">登录平台时使用</div>
						</el-col>
						<el-col :span="2">
							<div class="class-b text-right ponter" @click="fpasswordBind">{{settingData.fpassword==''? '设置>>' : '修改>>'}}</div>
						</el-col>
					</el-row>
				</ul>
			</div>
		</div>
		<!--绑定登录密码-->
		<reparssword ref="rePar"></reparssword>
		<!--设置邮箱-->
		<reEmail ref="reEmail"></reEmail>
		<!--设置昵称-->
		<reNickName ref="reNickName"></reNickName>
		<!--设置手机-->
		<rePhone ref="rePhone"></rePhone>

	</div>
</template>

<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	import auth from "../auth";
	import reparssword from "@/components/reParssword.vue" //设置密码
	import reEmail from "@/components/reEmail.vue" //设置邮箱
	import reNickName from "@/components/reNickName.vue" //设置昵称
	import rePhone from "@/components/rePhone.vue" //设置手机
	export default {
		components: {
			reparssword,
			reEmail,
			reNickName,
			rePhone
		},
		data() {
			return {
				myfmobile: "",
				myfemail:"",
				settingData: {
					fmobile: "",
					floginName: "",
					fnickName: "",
					femail: "",
					frealName: "",
					fpassword: ""
				},

			}
		},
		methods: {

			getBaseInfo() { //安全设置基本信息
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.MER_INFO).then(res => {
					if(res.data.success == true) {
						_this.settingData = res.data.data;
						_this.myfmobile = res.data.data.fmobile;//存取原始手机号码
						_this.myfemail = res.data.data.femail;//存取原始邮箱
						_this.settingData.fmobile = (_this.settingData.fmobile == null ? _this.settingData.fmobile : _this.settingData.fmobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));
						_this.settingData.femail = (_this.settingData.femail == null ? _this.settingData.femail : _this.settingData.femail.replace(/(.{2}).+(.{2}@.+)/g, "$1****$2"));
					} else {

					}
				})
			},
			fnickNameBind() { //昵称绑定
				this.$refs.reNickName.ruleForm2.nickname = "";
				this.$refs.reNickName.modify(this.settingData)
			},
			femailBind() { //绑定邮箱
				this.$refs.reEmail.ruleForm2.email = "";
				this.$refs.reEmail.ruleForm2.fcode = "";
				this.$refs.reEmail.modify(this.settingData)
			},
			fmobileBind() { //绑定手机
				this.$refs.rePhone.dialogFormVisible = true;
				this.$refs.rePhone.registerValidateForm.oldCode = '';
				this.$refs.rePhone.registerValidateForm.newMobile = '';
				this.$refs.rePhone.registerValidateForm.newCode = "";
				this.$refs.rePhone.defaulePhone = this.settingData.fmobile; //获取原始手机
					this.$refs.rePhone.mydefaulePhone = this.myfmobile; //获取原始手机
			},
			fpasswordBind() { //绑定登录密码
				this.$refs.rePar.ruleForm2.newPwd = '';
				this.$refs.rePar.ruleForm2.checkPass = '';
				this.$refs.rePar.ruleForm2.oldPwd = "";
				this.$refs.rePar.getValidatePass();
			},

		},
		created() {

		},
		mounted: function() {
			this.getBaseInfo();
		}
	}
</script>

<style type="text/css" scoped="scoped">
	.grid_img_r {
		line-height: 2;
		padding: 80px 0 80px 0;
		text-align: left;
	}
	
	.grid_img_s {
		font-size: 12px;
		color: #434343;
	}
	
	.grid_img_b {
		font-weight: 600;
	}
	
	.ponter {
		cursor: pointer;
	}
	
	.my_ruleForm .el-button {
		margin-left: 50px !important;
	}
	
	.my_ruleForm .grid-content {
		cursor: pointer;
		font-size: 14px;
		line-height: 36px;
	}
	
	.login_rezgin {
		margin-left: 40px;
	}
	
	.banner_box {
		width: 100%;
		/*height: 500px;*/
	}
	
	.banner_img {
		width: 100%;
	}
	
	.baseinfo-top-icon,
	.grid_img {
		text-align: center;
		height: 214px;
		line-height: 214px;
	}
	
	.userbaseinfo-lv p {
		margin-left: 14%;
		padding-top: 4px;
		padding-left: 25px;
		color: #c93e3a;
		font-size: 14px;
	}
	
	.text-right {
		position: absolute;
		right: 4%;
	}
	
	.userbaseinfo-logintime {
		float: right;
		margin-right: 30px;
		line-height: 30px;
	}
	
	.userbaseinfo-lvmax {
		height: 57px;
		margin-top: 145px;
	}
	
	.baseinfo-top-icon,
	.grid_img {
		text-align: center;
		height: 214px;
		line-height: 214px;
	}
	
	.grid_img img {
		width: 100%;
	}
	
	.text-right {
		text-align: right;
		height: 37px;
		line-height: 37px;
	}
	
	.text-left {
		text-align: left;
		height: 37px;
		line-height: 37px;
	}
	
	.userbaseinfo-logintime {
		float: right;
		margin-right: 30px;
		line-height: 30px;
	}
	
	.baseinfo_txt {
		color: #df9800;
	}
	
	.userbaseinfo-lvmax {
		height: 57px;
		margin-top: 145px;
	}
	
	.base_grid {
		text-align: center;
		height: 37px;
		line-height: 37px;
	}
	
	.base_grid img {
		vertical-align: middle;
	}
	
	.baseinfo_ul {
		/*height: 36px;
		line-height: 36px;*/
	}
	
	.baseinfo_ul .el-row {
		/*height: 126px;*/
		padding: 22px 0;
		border-bottom: 1px solid #eee;
	}
	
	.baseinfo_ul .el-row:last-child {
		border-bottom: none;
	}
	
	.class-a {
		color: #000000;
	}
	
	.class-b {
		color: #00ABF1;
	}
	/*认证*/
	
	.goSure {
		display: inline-block;
		width: 180px;
		height: 45px;
		line-height: 45px;
		border-radius: 8px;
		border: 1px solid #00ABF1;
		color: #00ABF1;
		font-size: 18px;
		cursor: pointer;
	}
	
	.realNameIng {
		/*margin-left: 70px;*/
	}
	
	.realSubmit_btn {
		width: 145px;
		height: 35px;
		line-height: 35px;
		display: inline-block;
		border-radius: 5px;
		background: #00ABF1;
		color: #fff;
		font-size: 18px;
		cursor: pointer;
	}
	
	.realSubmit_footer {
		text-align: center;
	}
	
	.base_box {
		display: flex;
	}
	
	.myNewSite {
		/*padding-top: 30px;*/
		display: inline-block;
		padding-bottom: 38px;
		cursor: pointer;
	}
	
	.sjSite {
		width: 100%;
		padding: 5px;
		border-bottom: 1px solid #EEEEEE;
	}
	
	.el-table .header_row {
		background: #F5F7FA;
	}
	
	.content_border {
		border: 1px solid #d1d1d1;
		padding: 10px;
		margin-bottom: 20px;
	}
</style>