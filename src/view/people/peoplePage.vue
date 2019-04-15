<style type="text/css" scoped="scoped">
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
		text-align: right;
	}
	
	.userbaseinfo-logintime {
		float: right;
		margin-right: 30px;
		line-height: 30px;
	}
	
	.baseinfo_txt {
		color: #df9800;
		padding: 0 0 0 35px;
		display: inline-block;
		background: url(../../assets/image/t.png) no-repeat 2px 89px;
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
	
	.baseinfo_c {
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
		color: #00abf1;
	}
	/*认证*/
	
	.goSure {
		display: inline-block;
		width: 180px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		border-radius: 8px;
		font-weight: 600;
		border: 2px solid #00abf1;
		color: #00abf1;
		font-size: 18px;
		cursor: pointer;
	}
	
	.realNameIng {
			font-size: 14px;
		/*margin-left: 70px;*/
	}
	
	.realSubmit_btn {
		width: 145px;
		height: 35px;
		line-height: 35px;
		display: inline-block;
		border-radius: 5px;
		background: #00abf1;
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
		border-bottom: 1px solid #eeeeee;
	}
	
	.content_border {
		border: 1px solid #d1d1d1;
		padding: 10px;
		margin-bottom: 20px;
	}
	
	.el-table .info-row {
		background: #c9e5f5;
	}
	
	.bg_line {
		height: 57px;
		line-height: 57px;
		position: absolute;
		bottom: 10px;
		right: 40px;
	}
	
	.bg_line_one {
		height: 57px;
		line-height: 57px;
		position: absolute;
		bottom: 35px;
		right: 40px;
	}
	
	.realNameNot {
		min-height: 450px;
	}
	
	.base_grid_red {
		color: red;
	}
	
	.base_grid_brey {
		color: #434343;
	}
</style>
<style>

</style>
<template>
	<div class="peoplePage">
		<div class="banner_box">
			<!--<div class="banner_img"></div>-->
			<img class="banner_img" src="../../assets/image/dhl.png" />
		</div>
		<div class="card_center">
			<el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
				<el-tab-pane name="first">
					<span slot="label"><i class="el-icon-tickets"></i> 基本信息</span>
					<div class="content_border">
						<div class="baseinfo-top-icon">
							<el-row style="height: 214px;">
								<el-col :span="6">
									<div class="grid_img">
										<span style="width: 170px;height: 170px;display: inline-block;vertical-align: middle;">
										<img src="../../assets/image/huiyuan.png" alt="" />
									</span>
									</div>
								</el-col>
								<el-col :span="18" style=" text-align: left; height: 214px;">
									<span class="baseinfo_txt">VIP{{code}} &nbsp;&nbsp;用户名:</span> <span class="baseinfo_c">{{floginName}}</span>
									<div class="bg_line_one">
										区块链地址（bid）:{{fadd}}
									</div>
									<div class="bg_line">
										上次登录时间：{{floginTime}} &nbsp;&nbsp;上次登录IP：{{floginIp}}
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
											<img src="../../assets/image/merber.png" /> <span class="base_grid_span">用户昵称</span>
										</div>
									</el-col>
									<el-col :span="3">
										<div class="base_grid" :class="fnickName==null? 'class-a' : 'class-b' ">{{(fnickName==null?"未设置":"已设置")}}</div>
									</el-col>
									<el-col :span="17">
										<div class="text-left">{{fnickName}}</div>
									</el-col>

								</el-row>
								<el-row :gutter="20">
									<el-col :span="4">
										<div class="base_grid">
											<img src="../../assets/image/aw.png" /> <span class="base_grid_span">绑定邮箱</span>
										</div>
									</el-col>
									<el-col :span="3">
										<div class="base_grid" :class="femail==null? 'class-a' : 'class-b' ">{{(femail==null?"未设置":"已设置")}}</div>
									</el-col>
									<el-col :span="17">
										<div class="text-left">{{femail}}</div>
									</el-col>

								</el-row>
								<el-row :gutter="20">
									<el-col :span="4">
										<div class="base_grid">
											<img src="../../assets/image/ae.png" /> <span class="base_grid_span">绑定手机</span>
										</div>
									</el-col>
									<el-col :span="3">
										<div class="base_grid" :class="fmobile==null? 'class-a' : 'class-b' ">{{(fmobile==null?"未设置":"已设置")}}</div>
									</el-col>
									<el-col :span="17">
										<div class="text-left">{{fmobile}}</div>
									</el-col>

								</el-row>
								<el-row :gutter="20">
									<el-col :span="4">
										<div class="base_grid">
											<img src="../../assets/image/ar.png" /> <span class="base_grid_span">登录密码</span>
										</div>
									</el-col>
									<el-col :span="3">
										<div class="base_grid class-b">已设置</div>
									</el-col>
									<el-col :span="17">
										<div class="text-left"></div>
									</el-col>

								</el-row>
							</ul>
						</div>
					</div>
					<!--<add-router ref="addRouter" :baseData="baseData" :codeData="codeData"></add-router>-->
					<!--<base-info :baseData="baseData" :codeData="codeData"></base-info>-->
				</el-tab-pane>
				<el-tab-pane name="second">
					<span slot="label"><i class="el-icon-success"></i> 实名认证</span>
					<div class="realNameNot" v-if="isShowNameNot">
						<el-row type="flex" class="row-bg" justify="center" style="height: 240px">
							<el-col :span="6">
								<div class="grid-content bg-purple"></div>
							</el-col>
							<el-col :span="6">
								<div class="base_grid">
									<img style="padding: 20px;" src="../../assets/image/weirenzheng.png" />
								</div>
							</el-col>
							<el-col :span="6">
								<div class="grid-content bg-purple"></div>
							</el-col>
						</el-row>
						<el-row type="flex" class="row-bg" justify="center">
							<el-col :span="6">
								<div class="grid-content bg-purple"></div>
							</el-col>
							<el-col :span="6" style="padding: 20px">
								<div class="" style="text-align: center;">
									<span class="goSure" @click="goSure">去认证</span>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="grid-content bg-purple"></div>
							</el-col>
						</el-row>
						<el-row type="flex" class="row-bg" justify="center">
							<el-col :span="6">
								<div class="grid-content bg-purple"></div>
							</el-col>
							<el-col :span="6">
								<div class="base_grid">
									您<span :class="statusTxt=='0'?'base_grid_brey':'base_grid_red'">{{statusTxt=="0"?"未实名认证":statusTxt=='2'?'实名认证失败':''}}</span>，请点击进行认证
								</div>
							</el-col>
							<el-col :span="6">
								<div class="grid-content bg-purple"></div>
							</el-col>
						</el-row>
					</div>
					<div class="realNameIng" v-if="isShowNameIng">
						<div class="content_border">
							<div class="baseinfo-top-icon">
								<el-row>
									<el-col :span="6">
										<div class="grid_img">
											<span style="width: 170px;height: 170px;display: inline-block;vertical-align: middle;">
										<img src="../../assets/image/st.png" alt="" />
									</span>

										</div>
									</el-col>
									<el-col :span="12" style=" text-align: left;">
										<span :class="statusTxt=='0'?'base_grid_brey':'base_grid_red'">{{statusTxt=="0"?"您正在进行实名认证!":statusTxt=='2'?'实名认证失败，请核对信息并重新提交！':''}}</span>
										<!--<span class="realNameIng">您正在进行实名认证！</span>-->
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
												<img src="../../assets/image/merber.png" /> <span class="base_grid_span">真实姓名</span>
											</div>
										</el-col>
										<el-col :span="6">
											<div class="base_grid">
												<el-input placeholder="请输入" :maxlength="maxlength" v-model="frealName" clearable style="width: 300px"></el-input>
											</div>
										</el-col>
										<el-col :span="2">
											<div class="base_grid"></div>
										</el-col>
										<el-col :span="4">
											<div class="base_grid"></div>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="4">
											<div class="base_grid">
												<img src="../../assets/image/ay.png" /> <span class="base_grid_span">证件类型</span>
											</div>
										</el-col>
										<el-col :span="6">
											<div class="base_grid">
												<el-select v-model="ftype" clearable placeholder="请选择" style="width: 300px">
													<el-option v-for="item in soptions" :key="item.value" :label="item.label" :value="item.value">
													</el-option>
												</el-select>
											</div>
										</el-col>
										<el-col :span="4">
											<div class="base_grid"></div>
										</el-col>
										<el-col :span="4">
											<div class="base_grid"></div>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="4">
											<div class="base_grid">
												<img src="../../assets/image/au.png" /> <span class="base_grid_span">证件号码</span>
											</div>
										</el-col>
										<el-col :span="6">
											<div class="base_grid">
												<el-input placeholder="请输入" v-model="fno" clearable style="width: 300px"></el-input>
											</div>
										</el-col>
										<el-col :span="4">
											<div class="base_grid"></div>
										</el-col>
										<el-col :span="4">
											<div class="base_grid"></div>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="4">
											<div class="base_grid">
												<img src="../../assets/image/ai.png" /> <span class="base_grid_span">证件照片</span>
											</div>
										</el-col>
										<el-col :span="20">
											<div class="">
												<!--<el-upload class="avatar-uploader"  list-type="picture-card" :show-file-list="false" :on-remove="handleRemove" :action="site_link()" :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess">
													<img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar">
													<i v-else class="el-icon-plus avatar-uploader-icon"></i>
												</el-upload>-->
												<el-upload :action="site_link()" accept="image/jpeg,image/png,image/jpg" multiple :limit="2" :file-list="fileList" :before-upload="handleBefore" :on-exceed="handleExceed" list-type="picture-card" :on-success="handleAvatarSuccess" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
													<i class="el-icon-plus"></i>
													<div class="el-upload__tip" slot="tip">请上传证件照片正反面</div>
												</el-upload>
												<el-dialog :visible.sync="dialogVisible">
													<img width="100%" :src="dialogImageUrl" alt="">
												</el-dialog>
											</div>
										</el-col>
										<el-col :span="4">
											<div class="base_grid"></div>
										</el-col>
										<el-col :span="4">
											<div class="base_grid"></div>
										</el-col>
									</el-row>
								</ul>

							</div>
						</div>
						<p class="realSubmit_footer" v-if="isShowSubmit">
							<span class="realSubmit_btn" @click="realSubmit">提交</span>
						</p>
					</div>

					<div class="realNameEnd" v-if="isShowNameEnd">
						<div class="content_border">
							<div class="baseinfo-top-icon">
								<el-row>
									<el-col :span="6">
										<div class="grid_img">
											<span style="width: 170px;height: 170px;display: inline-block;vertical-align: middle;">
										<img src="../../assets/image/st.png" alt="" />
									</span>

										</div>
									</el-col>
									<el-col :span="12" style=" text-align: left;">

										<span class="realNameIng">您实名认证{{fstatus==0?"未提交":(fstatus==1?"已提交":(fstatus==2?"审核不通过":"审核通过"))}}！</span>
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
												<img src="../../assets/image/merber.png" /> <span class="base_grid_span">真实姓名</span>
											</div>
										</el-col>
										<el-col :span="19">
											<div class="text-left">
												{{frealName}}
											</div>
										</el-col>

									</el-row>
									<el-row :gutter="20">
										<el-col :span="4">
											<div class="base_grid">
												<img src="../../assets/image/ay.png" /> <span class="base_grid_span">证件类型</span>
											</div>
										</el-col>
										<el-col :span="19">
											<div class="text-left">
												{{ftype}}
											</div>
										</el-col>

									</el-row>
									<el-row :gutter="20">
										<el-col :span="4">
											<div class="base_grid">
												<img src="../../assets/image/au.png" /> <span class="base_grid_span">证件号码</span>
											</div>
										</el-col>
										<el-col :span="19">
											<div class="text-left">
												{{fno}}
											</div>
										</el-col>

									</el-row>
									<el-row :gutter="20">
										<el-col :span="4">
											<div class="base_grid">
												<img src="../../assets/image/au.png" /> <span class="base_grid_span">证件照片</span>
											</div>
										</el-col>
										<el-col :span="19">
											<div class="base_box">
												<div class="identity_card">
													<img :src="ffrontPath" class="image">
												</div>
												<div class="identity_card">
													<img :src="fbackPath" class="image">
												</div>
											</div>
										</el-col>

									</el-row>
								</ul>

							</div>

						</div>
						<!--<p class="realSubmit_footer" v-if="isShowNameEnd">
							<span class="realSubmit_btn" @click="realSubmit">提交</span>
						</p>-->
					</div>
				</el-tab-pane>
				<el-tab-pane name="third">
					<span slot="label"><i class="el-icon-setting"></i> 安全设置</span>
					<saveSetting ref="saveSetting"></saveSetting>

				</el-tab-pane>
				<el-tab-pane name="fourth">
					<span slot="label"><i class="el-icon-document"></i> 登录记录</span>
					<loginRecord ref="loginRecord"></loginRecord>
				</el-tab-pane>
				<el-tab-pane name="five">
					<span slot="label"><i class="el-icon-question"></i> 问题查看</span>
					<addJourney ref="addJourney"></addJourney>
				</el-tab-pane>
				<el-tab-pane name="six">
					<span slot="label"><i class="el-icon-goods"></i> 收件地址</span>
					<div class="profile_peo">
						<div class="content_border">
							<div class="baseinfo-top-icon">
								<el-row>
									<el-col :span="6">
										<div class="grid_img">
											<span style="width: 170px;height: 170px;display: inline-block;vertical-align: middle;">
									<img src="../../assets/image/su.png" alt="" />
									</span>

										</div>
									</el-col>
									<el-col :span="12" style=" text-align: left;">
										<span class="realNameIng class-b">承诺,为每一份托付！</span>
									</el-col>
								</el-row>
							</div>
						</div>
						<p class="sjSite">
							<span>收件地址</span>
						</p>
						<span class="myNewSite">
							<el-tooltip class="item" effect="dark" content="新增收件地址" placement="top">
					    <el-button type="success"  @click="add">新增</el-button>
					    </el-tooltip>
					    <el-tooltip class="item" effect="dark" content="删除" placement="top">
					  <el-button type="danger" @click="del()">删除</el-button>
					    </el-tooltip>
						<!--<el-tooltip class="item" effect="dark" content="设置为默认地址" placement="top">
						<el-button  class="primary"  @click="handleDefault()">设置</el-button>
						</el-tooltip>-->
						</span>
						<!--&nbsp;&nbsp;&nbsp;带 <span class="my_stars"></span>为必填项-->
						<div slot="body">
							<el-table :row-class-name="tableRowClassName" :highlight-current-row="true" :data="tableData.rows" ref="multipleTable" style="width: 100%" v-loading="listLoading" @selection-change="handleSelectionChange">
								<el-table-column prop="id" type="selection" width="45">
								</el-table-column>
								<el-table-column prop="fid" v-if="false" label="ID">
								</el-table-column>
								<el-table-column prop="fname" label="收件人" width="100" :show-overflow-tooltip="true">
								</el-table-column>
								<el-table-column prop="faddDetail" label="详细地址" width="350" :formatter="faddDetail" :show-overflow-tooltip="true">
								</el-table-column>
								<el-table-column prop="fpc" label="邮编" width="120">
								</el-table-column>
								<el-table-column prop="fmobile" label="手机">
								</el-table-column>
								<el-table-column label="操作" width="180">
									<template scope="scope">
										<el-tooltip class="item" effect="dark" content="修改" placement="top">
											<el-button size="mini" type="info" @click="modify(scope.$index, scope.row)">修改</el-button>
										</el-tooltip>
										<el-tooltip class="item" effect="dark" content="设置为默认地址" placement="top">
											<el-button size="mini" :disabled="scope.row.fstatus==1" type="primary" @click="handleDefault(scope.$index, scope.row)">{{scope.row.fstatus==1?"设为默认":"设置"}}</el-button>
										</el-tooltip>
									</template>
								</el-table-column>
							</el-table>
							<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[5, 10, 20]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total">
							</el-pagination>
							<!--增加、修改-->
							<addRouter ref="form"></addRouter>

						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane name="seven">
					<span slot="label"><i class="el-icon-share"></i> 账户关联</span>
					<accountLink ref="accountLink"></accountLink>
				</el-tab-pane>
			</el-tabs>
		</div>

	</div>
</template>
<style>
	.identity_card {
		width: 400px;
		margin-right: 20px;
		height: 280px;
		overflow: hidden;
	}
	
	.identity_card img {
		width: 100%;
	}
</style>
<script>
	//	import Element from 'element-ui'
	import * as api from "../../api";
	import panel from "../../components/panel.vue";
	import auth from "../../auth";
	import addRouter from "@/components/addRouter"; //新增
	import addJourney from "@/components/addJourney"; //问题查看
	import loginRecord from "@/components/loginRecord"; //登录记录
	import saveSetting from "@/components/saveSetting.vue"; //安全设置
	import accountLink from "@/components/accountLink.vue"; //账户关联
	//import VDistpicker from 'v-distpicker'
	export default {
		components: {
			"imp-panel": panel,
			addRouter,
			addJourney,
			loginRecord,
			saveSetting,
			accountLink
		},
		data() {
			let validfmobile = (rule, value, callback) => {
				//手机号正则
				let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!reg.test(value)) {
					callback(new Error("手机号码有误，请重填"));
				} else {
					callback();
				}
			};
			return {
				a: "",
				sFlag: true, //是否校验实名认证
				fileList: [],
				statusTxt: "",
				maxlength: 32,
				activeName: "first", //选项卡激活
				formData: {},
				dialogImageUrl: "",
				dialogVisible: false,
				soptions: [],
				dialogImageUrl: "",
				ftype: "",
				isShowNameNot: false, //去认证
				isShowNameIng: false, //提交
				isShowSubmit: false, //提交按钮
				isShowNameEnd: true, //回显信息
				floginTime: "",
				fadd: "",
				floginIp: "",
				fmobile: "",
				code: "",
				floginName: "",
				fnickName: "",
				femail: "",
				frealName: "",
				fno: "",
				ffrontPath: "",
				fbackPath: "",
				fstatus: "",
				loginShow: true,
				currentRow: [],
				listLoading: false,
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 10,
						parentId: 0
					},
					rows: []
				},
				myary: []
			};
		},
		watch: {
			//			frealName(){
			//				 if(this.frealName.length>32){
			//					this.$message({
			//						message: "真实姓名长度限制在 1到 32位",
			//						showClose: true,
			//						type: "warning"
			//					});
			//				
			//					
			//				}
			//			}
		},
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				//表格头部颜色
				if(rowIndex === 0) {
					return "info-row";
				} else if(rowIndex === 3) {
					return "info-row2";
				}
				return "";
			},

			handleDefault(index, row) {
				//				let fid = this.currentRow;
				this.$http
					.get(this.getServerUrl() + api.MER_SITE_DEFALUT + "?fid=" + row.fid)
					.then(res => {
						if(res.data.success == true) {
							this.loadData();
						} else {}
					});
			},
			faddDetail: function(row, column) {
				return row.fadd.replace(new RegExp(',', 'gm'), '') + row.faddDetail;
			},
			//			formatFmobile(row, column) {
			//				return row.fmobile==null?row.fmobile:row.fmobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
			//			},

			add() {
				let _this = this;
				_this.$refs.form.dialogFormVisible = true;
				_this.$refs.form.dialogTitle = "新增";
				_this.$refs.form.ruleForm.fid = "";
				_this.$refs.form.ruleForm.fname = "";
				_this.$refs.form.ruleForm.fmobile = "";
				_this.$refs.form.ruleForm.faddDetail = "";
				_this.$refs.form.ruleForm.fpc = "";
				_this.$refs.form.ruleForm.fadd.province = "";
				_this.$refs.form.ruleForm.fadd.city = "";
				_this.$refs.form.ruleForm.fadd.area = "";
			},
			modify(index, row) {
				//修改
				let _this = this;
				_this.$refs.form.dialogTitle = "修改";
				_this.$refs.form.modifyDialog(index, row, _this.dialogFormVisible);
			},

			del() {
				//删除
				var _this = this;
				let fids = _this.currentRow.join(",");
				if(fids == "") {
					this.$message({
						message: "请选择资源",
						type: "warning"
					});
				} else {
					this.delete(api.MER_SITE_DEL, fids);
				}
			},

			handleClick(tab, event) {
				//选项卡的切换
				if(tab.index == "0") {
					this.sFlag=false;
					this.getBaseInfo();
				} else if(tab.index == "1") {
					this.sFlag=false;
					this.getApproveInfo();
				} else if(tab.index == "2") {
					this.sFlag=false;
				} else if(tab.index == "3") {
					this.sFlag=false;
					this.$refs.loginRecord.loginList();
				} else if(tab.index == "4") {
					this.sFlag=false;
					this.$refs.addJourney.getQuestionList();
				} else if(tab.index == "5") {
					this.sFlag=false;
					this.loadData();
				} else if(tab.index == "6") {
					this.sFlag=false;
					this.$refs.accountLink.loadData();
				}
			},

			handleExceed(files, fileList) {
				this.$message.warning(`当前只能上传 2张证件照片`);
			},
			apliceFn(id) {
				let _this = this;
				for(let i = 0; i < _this.myary.length; i++) {
					if(_this.myary[i] == id) {
						_this.myary.splice(i, 1);
					} else {

					}
				}
			},

			handleRemove(file, fileList) {
				let _this = this;
				if(file.response != undefined) {
					let fid = file.response.data;
					_this.apliceFn(fid);
					_this.removeFn(fid)
				} else {
					let curfid = file.url.split("=")[1];
					_this.apliceFn(curfid);
					_this.removeFn(curfid);
				}

			},
			removeFn(fid) {
				let _this = this;
				_this.$http
					.get(_this.getServerUrl() + api.MER_UPLOAD_DEL + "?fid=" + fid)
					.then(res => {
						if(res.data.success == true) {
							_this.$message({
								message: "删除成功",
								type: "success"
							});
						} else {}
					});
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleBefore(file) {
				let index1 = file.name.lastIndexOf(".");
				let index2 = file.name.length;
				let suffix = file.name.substring(index1 + 1, index2); //后缀名
				if(suffix != "jpg" && suffix != "png"&&suffix !='jpeg') {
					this.$message({
						message: "只能上传jpg/png格式的图片",
						type: "warning"
					});
					return false;
				}
			},
			realSubmit() {
				//实名认证提交
				let _this = this;
				if(
					_this.ftype == "" ||
					_this.frealName == "" ||
					_this.fno == "" ||
					_this.myary.toString() == ""
				) {
					_this.$message({
						message: "请将信息填写完整",
						showClose: true,
						type: "warning"
					});
				} else if(_this.myary.length < 2) {
					_this.$message({
						message: "证件照必须上传两张",
						showClose: true,
						type: "warning"
					});
				} else {
					if(_this.ftype == "cert01") {
						// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
						var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
						if(reg.test(_this.fno) === false) {
							_this.$message({
								message: "身份证输入不合法",
								showClose: true,
								type: "warning"
							});
							return false;
						} else {
							_this.formData = {
								ftype: _this.ftype,
								frealName: _this.frealName,
								fno: _this.fno,
								ffrontPath: _this.myary.toString()
							};
							_this.$http
								.post(_this.getServerUrl() + api.MER_SUBMIT, this.formData)
								.then(res => {
									if(res.data.success == true) {
										let data = res.data.data;
										_this.isShowNameIng = false;
										_this.isShowSubmit = false;
										_this.isShowNameEnd = true;
										_this.getApproveInfo();
									} else {}
								});
						}
					} else {
						_this.formData = {
							ftype: (_this.ftype == 'cert01' || _this.ftype == 'cert02' || _this.ftype == 'cert03') ? _this.ftype : _this.convertId(_this.ftype),
							frealName: _this.frealName,
							fno: _this.fno,
							ffrontPath: _this.myary.toString()
						};
						_this.$http
							.post(_this.getServerUrl() + api.MER_SUBMIT, this.formData)
							.then(res => {
								if(res.data.success == true) {
									let data = res.data.data;
									_this.isShowNameIng = false;
									_this.isShowSubmit = false;
									_this.isShowNameEnd = true;
									_this.getApproveInfo();
								} else {}
							});
					}
				}
			},
			site_link() {
				return this.getServerUrl() + api.MER_UPLOAD;
			},
			beforeAvatarUpload(file) {
				//			 	 const isJPG = file.type === 'image/jpeg,image/png,image/jpg';
				//			 	   if (!isJPG) {
				//		          this.$message.error('上传头像图片格式只能是gpeg,png,jpg!');
				//		        }
			},

			handleAvatarSuccess(res, file) {
				//上传成功
				var _this = this;
				_this.dialogImageUrl = URL.createObjectURL(file.raw);
				_this.myary.push(res.data);
				//				_this.ffrontPath = res.data;
			},
			handleSelectionChange(val) {
				//分页取消选择触发
				this.currentRow = val.map(i => i.fid);
				// this.loadData();
			},
			handleSizeChange(val) {
				//分页页面
				this.tableData.pagination.pageSize = val;
				this.loadData();
			},
			handleCurrentChange(val) {
				//分页当前页
				this.tableData.pagination.pageNo = val;
				this.loadData();
			},

			goSure() {
				//去认证
				this.isShowNameNot = false;
				this.isShowNameIng = true;
				this.isShowSubmit = true;
				this.soptions = [];
				this.getIdType(api.MER_ID_TYPE, this.soptions);
			},
			
			getBaseInfo() {
				//基本信息
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.MER_INFO).then(res => {
					if(res.data.success == true) { //fidAuthStatus
						if(_this.sFlag) {
							if(res.data.data.fidAuthStatus != '3') {
								_this.activeName = 'second';
								_this.getApproveInfo();
							} else{
								let data = res.data.data;
								_this.floginTime = data.floginTime;
								_this.fadd = data.fadd;
								_this.floginIp = data.floginIp;
								_this.fmobile = (data.fmobile == null ? data.fmobile : data.fmobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));
								_this.floginName = data.floginName;
								_this.fnickName = data.fnickName;
								_this.femail = (data.femail == null ? data.femail : data.femail.replace(/(.{2}).+(.{2}@.+)/g, "$1****$2"));
								_this.code = data.flevel;
							}
						}else{//点击之后不再到实名认证
							let data = res.data.data;
								_this.floginTime = data.floginTime;
								_this.fadd = data.fadd;
								_this.floginIp = data.floginIp;
								_this.fmobile = (data.fmobile == null ? data.fmobile : data.fmobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));
								_this.floginName = data.floginName;
								_this.fnickName = data.fnickName;
								_this.femail = (data.femail == null ? data.femail : data.femail.replace(/(.{2}).+(.{2}@.+)/g, "$1****$2"));
								_this.code = data.flevel;
						}

					} else {}
				});
			},
			getApproveInfo() {
				// 回显客户信息fstatus;//状态 0 未提交 1已提交 2 审核不通过 3 审核通过
				let _this = this;
				_this.$http.get(_this.getServerUrl() + api.MER_APPROVEINFO).then(res => {
					if(res.data.success == true) {
						_this.statusTxt = res.data.data.fstatus;
						if(res.data.data.fstatus == "0") {
							//没有客户信息则显示去认证
							//							_this.statusTxt="您还未实名认证，请点击进行认证";
							_this.isShowNameNot = true; //显示去认证
							_this.isShowNameIng = false;
							_this.isShowSubmit = false;
							_this.isShowNameEnd = false; //客户信息隐藏
						} else if(res.data.data.fstatus == "2") {
							//没有客户信息则显示去认证
							//							_this.statusTxt="您实名认证失败，请重新进行认证";
							_this.fileList = [];
							_this.myary = [];
							this.soptions = [];
							_this.getIdType(api.MER_ID_TYPE, this.soptions);
							let datas = res.data.data;
							_this.frealName = datas.frealName;
							_this.ftype = datas.ftype;
							_this.fno = (datas.fno == null ? datas.fno : datas.fstatus == 2 ? datas.fno : datas.fno.replace(/^(.{13})(?:\d+)(.{1})$/, "$1****$2"));
							_this.fstatus = datas.fstatus;
							_this.myary.push(datas.ffrontPath.split("=")[1]);
							_this.myary.push(datas.fbackPath.split("=")[1]);
							_this.fileList.push({
								url: _this.getServerUrl() + datas.ffrontPath
							}, {
								url: _this.getServerUrl() + datas.fbackPath
							});

							//							_this.dialogImageUrl = _this.getServerUrl() + datas.ffrontPath;
							//							_this.fbackPath = _this.getServerUrl() + datas.fbackPath;

							_this.isShowNameNot = false; //显示去认证
							_this.isShowNameIng = true;
							_this.isShowSubmit = true;
							_this.isShowNameEnd = false; //客户信息隐藏
						} else {
							let datas = res.data.data;
							_this.frealName = datas.frealName;
							_this.ftype = datas.ftype;
							_this.fno = (datas.fno == null ? datas.fno : datas.fno.replace(/^(.{13})(?:\d+)(.{1})$/, "$1****$2"));
							_this.fstatus = datas.fstatus;
							_this.ffrontPath = _this.getServerUrl() + datas.ffrontPath;
							_this.fbackPath = _this.getServerUrl() + datas.fbackPath;
						}
					} else {}
				});
			},
			loadData() {
				//收件地址的table
				let _this = this;
				_this.listLoading = true;
				this.$http.get(this.getServerUrl() + api.MER_SITE_TABLE + "?rows=" + this.tableData.pagination.pageSize + "&page=" + this.tableData.pagination.pageNo).then(res => {
						if(res.data.success == true) {
							_this.listLoading = false; //关闭loading
							let d = res.data;
							_this.tableData.rows = d.data.content;
							_this.tableData.pagination.total = d.data.totalElements;
						} else {
							_this.listLoading = false; //关闭loading
						}
					})
					.catch(error => {
						_this.listLoading = false; //关闭loading
						console.log(error);
					});
			}
		},
		created() {
			this.getBaseInfo();
		},
		mounted: function() {
			this.$store.state.navMenuIndex = 5;
		}
	};
</script>

<style scoped>
	.firstPage {
		width: 100%;
		height: auto;
		margin-top: 126px;
		position: relative;
	}
	
	.hot-box {
		width: 730px;
		height: auto;
		margin: 0 auto;
		border: 1px solid #eee;
		box-sizing: border-box;
	}
	
	.hot-box .hot-box-nav {
		width: 100%;
		height: 70px;
		padding-left: 20px;
		border-bottom: 3px solid #c20c0c;
		box-sizing: border-box;
	}
	
	.hot-box .hot-box-nav ul {
		float: left;
		width: 100%;
		height: 100%;
	}
	
	.hot-box .hot-box-nav li {
		float: left;
		width: 100px;
		height: 100%;
		cursor: pointer;
	}
	
	.hot-box .hot-box-nav li span {
		display: inline-block;
		width: 100%;
		height: 50px;
		line-height: 70px;
		font-size: 0.95rem;
	}
	
	.hot-box .hot-box-nav li span.active {
		color: #c20c0c;
	}
</style>