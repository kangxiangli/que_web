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
	
	.solve_list {
		min-height: 51px;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.solve_list_one {
		min-height: 51px;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.anwser_list {
		/*border-top: 1px solid #e5e5e5;*/
		border-bottom: 1px solid #e5e5e5;
	}
	
	.solve_list_anwser {
		min-height: 51px;
		padding: 5px 0 5px 96px;
		margin: 5px;
		background: url(../assets/image/ak.png) no-repeat;
		background-position: 44px 0px;
	}
	
	.solve_list_tit {
		min-height: 51px;
		padding: 5px 0 5px 96px;
		margin: 5px;
		background: url(../assets/image/aj.png) no-repeat;
		background-position: 44px 0px;
	}
	
	.pagination {
		margin: 100px auto;
		text-align: center;
		width: 43%;
		height: 50px;
	}
	
	.el-select {
		width: 130px;
	}
	
	.input-with-select .el-input-group__prepend {
		background-color: #fff;
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
										<img src="../assets/image/sg.png" alt="" />
									</span>

						</div>
					</el-col>
					<el-col :span="12" style=" text-align: left;">
						<span class="realNameIng">答疑解惑，让您的操作更便捷！</span>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="content_box">
			<div class="baseinfo_box">
				<div style="margin-top: 15px;">
					<el-input placeholder="请输入要检索的问题" v-model="ftitle" class="input-with-select">
						<el-select v-model="fselect" clearable slot="prepend" placeholder="请选择时间">
							<el-option label="半年" value="3"></el-option>
							<el-option label="三个月" value="2"></el-option>
							<el-option label="一个月" value="1"></el-option>
						</el-select>
						<el-button slot="append" icon="el-icon-search" @click="checkBtn"></el-button>
					</el-input>
				</div>

			</div>
			<div class="question_list" v-for="(item, index) in questionData">
				<div :class="index==0?'solve_list_one':'solve_list'">
					<h3 class="solve_list_tit">{{item.fdesc}}</h3>
				</div>
				<div class="anwser_list">
					<div class="solve_list_anwser"> {{item.fanswer}}
					</div>
				</div>
			</div>

		</div>
		<div class="pagination">
			<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="tableData.pagination.pageNo" :page-sizes="[4, 8, 16]" :page-size="tableData.pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.pagination.total"></el-pagination>
		</div>
	</div>
</template>
<style type="text/css">

</style>
<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	import auth from "../auth";
	//import VDistpicker from 'v-distpicker'
	export default {

		data() {
			return {
				fselect: "",
				ftitle: "",
				questionData: [],
				listLoading: false,
				tableData: {
					pagination: {
						total: 0,
						pageNo: 1,
						pageSize: 4,
						parentId: 0
					},
					rows: []
				}

			}
		},
		methods: {
			checkBtn() {
				this.getQuestionList();
			},
			handleSelectionChange(val) {

			},
			handleSizeChange(val) {
				this.tableData.pagination.pageSize = val;
				this.getQuestionList();

			},
			handleCurrentChange(val) {
				this.tableData.pagination.pageNo = val;
				this.getQuestionList();

			},

			getQuestionList() { // 时间搜索一个月传  1  三个月传 2  半年传 3   搜索框  传 ftitle
				let _this = this;

				_this.$http.get(_this.getServerUrl() + api.MER_QUESTION_LIST + "?ftitle=" + this.ftitle + "&ftime=" + this.fselect + "&rows=" + this.tableData.pagination.pageSize + "&page=" + this.tableData.pagination.pageNo)
					.then(res => {
						if(res.data.success == true) {

							this.tableData.pagination.total = res.data.data.totalElements;
							_this.questionData = res.data.data.content;
						} else {

						}
					})
			},

		},
		created() {

		},
		mounted: function() {
			//			this.getQuestionList();
		}
	}
</script>