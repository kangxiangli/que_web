<style scoped="scoped">
	.banner_img {
		width: 100%;
	}

	.baseinfo-top-icon,
	.grid_img {
		text-align: center;
		height: 214px;
		line-height: 214px;
	}

	.content_border {
		border: 1px solid #d1d1d1;
		padding: 10px;
		margin-bottom: 20px;
	}

	.realNameIng {
		font-size: 14px;
		color: #00abf1;
	}

	.baseinfo_box {
		padding: 54px 175px 24px 175px;
	}

	.el-pagination {
		padding: 16px 0px 5px 5px;
	}

	.grid-search {
		background: url(../../static/img/icon_list.png) no-repeat;
		background-position: 16px 14px;
		padding-left: 50px;
	}
</style>
<template>
	<div class="realNameEnd">
		<div class="content_border">
			<div class="baseinfo-top-icon">
				<el-row>
					<el-col :span="6">
						<div class="grid_img">
							<span style="width: 170px;height: 170px;display: inline-block;vertical-align: middle;">
										<img src="../../static/img/icon_gl.png" alt="" />
									</span>
						</div>
					</el-col>
					<el-col :span="12" style=" text-align: left;">
						<span class="realNameIng">关联账户，连接账户之间的纽带！</span>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="content_box">
			<el-row :gutter="24" style='margin-bottom: 20px;'>
				<el-col :span="8">
					   <el-tooltip class="item" effect="dark" content="新增" placement="top">
					 <el-button type="success"  @click="addLink">新增</el-button>
					    </el-tooltip>
						<el-tooltip class="item" effect="dark" :content="$t('m.certCenter.16')" placement="top">
					   <el-button type="danger"  @click="del">{{$t('m.certCenter.16')}}</el-button>
					    </el-tooltip>
				</el-col>
				<el-col :span="16">

				</el-col>
			</el-row>
			<div class="addLick" v-if='addDivIsShow' style="margin:20px auto;">
				<el-row type="flex" class="row-bg" justify="center">
					<el-col :span="20">
						<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
							<el-form-item prop="fcid" label="Cid" :rules="[{required: true, message: '请输入Cid', trigger: 'blur' },{ min: 0, max: 64, message: '长度在 0 到 64位', trigger: 'blur' }]">
								<el-col :span="20">
									<el-input placeholder="请输入Cid" v-model="dynamicValidateForm.fcid"></el-input>
								</el-col>
							</el-form-item>
							<el-form-item label="B端名称" prop="fbname" :rules="[{required: true, message: '请输入Bid/B端名称'},{ min: 0, max: 64, message: '长度在 0 到 64位', trigger: 'blur' }]">
								<el-col :span="20">
									<el-input v-model="dynamicValidateForm.fbname" v-on:change="nameChange" placeholder="请输入Bid/B端名称"></el-input>
								</el-col>
								<el-button @click.prevent="chooseAccont()" type="warning">账户选择</el-button>
							</el-form-item>
							<el-row type="flex" class="row-bg" justify="center">
								<el-button @click.prevent="accontLick('dynamicValidateForm')" type="primary">账户关联</el-button>
								<el-button @click="resetForm('dynamicValidateForm')">取消</el-button>
							</el-row>
						</el-form>
					</el-col>
				</el-row>
			</div>
			<div>
				<div style="background:#DDDDDD;line-height:60px;">
					<el-row class="proof_nav">
						<el-col :span="6">
							<div class="grid-search"> 账户关联列表</div>
						</el-col>
						<el-col :span="17">
							<div class="el-input" style="width: 300px; float: right;">
								<i class="el-input__icon el-icon-search" style="position: absolute; right: 5px; cursor: pointer;" @click="btnCheck($event)"></i>
								<input type="text" placeholder="Cid/B端名称" v-model="searchKey" @keyup.enter="btnCheck($event)" class="el-input__inner">
							</div>
							<!--<el-input placeholder="账户/存证号" v-model="searchKey" class="input-with-select" @keyup.enter="btnCheck($event)">
						<el-button slot="append" icon="el-icon-search" @click="btnCheck()" style="background-color: #42a5f6; color: #fff;"></el-button>
					</el-input>-->
						</el-col>
					</el-row>
				</div>
				<el-table :data="tableData.rows" style="width: 100%" border v-loading="listLoading" @selection-change="handleSelectionChange">
					<el-table-column prop="fcid" type="selection" width="45">
					</el-table-column>
					<el-table-column prop="fcid" label="Cid">
					</el-table-column>
					<el-table-column prop="fbname" label="B端名称">
					</el-table-column>
					<el-table-column :label="$t('m.proofPage.table.4')" width="180">
						<template slot-scope="scope">
							<a href="javascript:void(0)" @click="modify(scope.$index, scope.row)">修改
							</a>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[5, 10, 20]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total"></el-pagination>
			</div>
		</div>
		<accountChoose ref='accountChoose' @BidUser='BidUser'></accountChoose>
	</div>
</template>

<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	import auth from "../auth";
	import accountChoose from "@/components/accountChoose.vue" //账户选择
	export default {
		components: {
			accountChoose
		},
		data() {
			return {
				
				searchKey: '',
				addDivIsShow: false,
				fselect: "",
				ftitle: "",
				currentRow: [],
				dynamicValidateForm: {
					fbid: '',
					fcid: '',
					fbname: '',
					foldId:''
				},
				questionData: [],
				listLoading: false,
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 10,
						parentId: 0
					},
					rows: []
				}

			}
		},
		methods: {
			nameChange(){
				this.dynamicValidateForm.fbid='';
			},
			del() {//删除
				this.delete('/cd/account/delete', this.currentRow);
			},
			modify(index, row) { //修改
				var _this = this;
				_this.addDivIsShow = true;
				_this.$http.get(_this.getServerUrl() + '/cd/account/getOne' + '?bid=' + row.fbid + '&cid=' + row.fcid + '&memberId=' + row.fmemberId).then(res => {
					if(res.data.success == true) {
						_this.dynamicValidateForm = res.data.data;
						_this.dynamicValidateForm.foldId=res.data.data.fbid+','+res.data.data.fcid+','+res.data.data.fmemberId;

					} else {

					}
				})
			},

			BidUser(bid, bname) { //赋值fid和账户名称
				
				this.dynamicValidateForm.fbid = bid;
				this.dynamicValidateForm.fbname = bname;
			},
			resetForm(formName) { //取消
				this.addDivIsShow = false;
				this.$refs[formName].resetFields();
			},
			accontLick(formName) { //账户关联
				let _this = this;
				_this.$refs[formName].validate((valid) => {
					if(!valid) {
						
					} else {
						_this.$http.post(_this.getServerUrl() + '/cd/account/relation', _this.dynamicValidateForm).then(res => {
							if(res.data.success == true) {
								var d = res.data.data;
								_this.addDivIsShow = false;
								_this.loadData()
								_this.$message({
									duration: 1000,
									showClose: true,
									type: 'success',
									message: "关联成功"
								})

							} else {
								
							}
						})
					}
				});

			},
			chooseAccont() { //选择账户
				this.$refs.accountChoose.dialogFormVisible = true;
        this.$refs.accountChoose.searchKey = "";
				this.$refs.accountChoose.loadData(); //加载账户列表
			},
			addLink() { //增加
				this.addDivIsShow = true;
				this.dynamicValidateForm.fbid = '';
				this.dynamicValidateForm.fcid = '';
				this.dynamicValidateForm.fbname = '';
				this.dynamicValidateForm.foldId = '';
			},
			btnCheck() { //搜索
				this.loadData(this.searchKey);
			},

			handleSelectionChange(val) {
				this.currentRow = val.map(i => i.fbid + ":" + i.fcid + ":" + i.fmemberId);
			},
			handleSizeChange(val) {
				this.tableData.pagination.pageSize = val;
				this.loadData(this.searchKey);
			},
			handleCurrentChange(val) {
				this.tableData.pagination.pageNo = val;
				this.loadData(this.searchKey);
			},
			loadData(str) { //存证关联table
				let _this = this;
				_this.listLoading = true; //关闭loading
				str = (str == undefined) ? "" : str;
				this.$http.get(this.getServerUrl() + '/cd/account/list' + "?fbname=" + str + "&rows=" + this.tableData.pagination.pageSize + "&page=" + this.tableData.pagination.pageNo).then(res => {
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

		},
		mounted: function() {
			//			this.loadData();
		}
	}
</script>
