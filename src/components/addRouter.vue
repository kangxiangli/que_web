<template>
	<el-dialog custom-class="dialog_content1" :before-close="cancel" :close-on-click-modal="false" :title="dialogTitle" v-model="dialogFormVisible" :visible.sync="dialogFormVisible" width="70%">
		<!--	<addRouter ref="form"></addRouter>-->
		<imp-panel>
			<el-row type="flex" class="row-bg" justify="center">
				<el-col :span="18">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="收件人" prop="fname">
							<el-input v-model="ruleForm.fname" clearable></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="fmobile">
							<el-input v-model="ruleForm.fmobile"></el-input>
						</el-form-item>
						<el-form-item label="所在地区" prop="fadd">
							<v-distpicker v-model="ruleForm.fadd" @province="province" @city="city" @area="area" :province="ruleForm.fadd.province" :city="ruleForm.fadd.city" :area="ruleForm.fadd.area"></v-distpicker>
						</el-form-item>
						<el-form-item label="详细地址" prop="faddDetail">
							<el-input type="textarea" placeholder="建议您详细填写收件地址，例如街道名称、门牌号、楼层和房间号等" v-model="ruleForm.faddDetail"></el-input>
						</el-form-item>
						<el-form-item label="邮政编码"  prop="fpc">
							<!-- <el-input v-model="ruleForm.fpc" placeholder="邮编只能数字" v-on:change="fpcChange(ruleForm.fpc)" maxlength="6"></el-input> -->
							  <input type="text" class="postCode" @input="handleInput" :value="ruleForm.fpc" maxlength="6">
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>

		</imp-panel>
		<span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="save('ruleForm')" >保存</el-button>
      </span>
	</el-dialog>

</template>
<script>
	import panel from "./panel.vue"
	import * as api from "../api"
	import VDistpicker from 'v-distpicker'
	//	import addRouter from "@/components/addRouter" //新增
	export default {
		components: {
			'imp-panel': panel,
			VDistpicker,
			//			addRouter
		},
		data() {
			let validfmobile = (rule, value, callback) => { //手机号正则
				let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!reg.test(value)) {
					callback(new Error('手机号码有误，请重填'))
				} else {
					callback()
				}
			};
			return {
				dialogFormVisible: false,
				dialogTitle: "新增",
				//				 select: { province: '广东省', city: '广州市', area: '海珠区' },
				ruleForm: {
					fid: '',
					fname: '',
					fmobile: '',
					fadd: {
						province: '',
						city: '',
						area: ''
					},
					faddDetail: '',
					fpc: ''
				},
				rules: {
					fname: [{
							required: true,
							message: '请输入收件姓名',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 20,
							message: '长度在 1 到 20个字',
							trigger: 'blur'
						}
					],
					fmobile: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur'
						},
						{
							validator: validfmobile,
							trigger: 'blur'
						}
					],
					fadd: [{
						type: "object",
						required: false,
						message: '请选择',
						trigger: 'blur,change'
					}],

					fpc: [{
						required: false,
						message: '如果您不清楚邮递区号，请填写000000',
						trigger: 'blur'
					}],
					faddDetail: [{
						required: true,
						message: '请填写详细地址',
						trigger: 'blur'
					}]
				},
				ary: [],
				flag: false,
				myAddress: {}
			}
		},
		props: {

		},
		watch: {

		},
		created() {

		},
		methods: {
			handleInput(e){
	            e.target.value = e.target.value.replace(/[^\d]/g,'');
	            this.ruleForm.fpc = e.target.value
            },
			fpcChange(value){
				this.ruleForm.fpc=value.replace(/\D/gi, "")
			},
			cancel() {
				let _this = this;
				_this.dialogFormVisible = false;
				_this.$refs.ruleForm.resetFields();
			},
			save(formName) { //保存
				let _this = this;
				_this.$refs[formName].validate((valid) => {
					if(!valid) {

					} else {
						var str= ( (_this.ruleForm.fadd.province==="null"||_this.ruleForm.fadd.province==="省")?"":_this.ruleForm.fadd.province) + "," + ((_this.ruleForm.fadd.city==="null"||_this.ruleForm.fadd.city==="市")?"":_this.ruleForm.fadd.city )+ "," + ((_this.ruleForm.fadd.area==="null"||_this.ruleForm.fadd.area==="区")?"":_this.ruleForm.fadd.area);
							let form = {
								fid: _this.ruleForm.fid,
								fname: _this.ruleForm.fname,
								fmobile: _this.ruleForm.fmobile,
								//							fadd: _this.myAddress,
								fadd:str,
								faddDetail: _this.ruleForm.faddDetail,
								fpc: _this.ruleForm.fpc
							}
							this.$http.post(this.getServerUrl() + api.MER_SITE_SUBMIT, form)
								.then(res => {
									if(res.data.success == true) {
										_this.$message(res.data.msg);
										_this.$refs.ruleForm.resetFields();
										_this.$parent.$parent.$parent.loadData();
										_this.dialogFormVisible = false;; //关闭弹出层
									} else {
//										_this.dialogFormVisible = false;
//										_this.$refs.ruleForm.resetFields();
									}
								})


					}
				});
			},
			modifyDialog(index, row, d) { //修改
				let _this = this;
				_this.ruleForm.fid = row.fid;
				_this.$http.get(_this.getServerUrl() + api.MER_SITE_MIDEFIY + "?fid=" + row.fid)
					.then(res => {
						if(res.data.success == true) {
							var d = res.data.data;
							_this.ruleForm.fid = d.fid;
							_this.ruleForm.fname = d.fname;
							_this.ruleForm.fmobile = d.fmobile;
							_this.ruleForm.faddDetail = d.faddDetail;
							_this.ruleForm.fpc = d.fpc;
							_this.ary = d.fadd.split(",");
							_this.ruleForm.fadd.province = _this.ary[0];
							_this.ruleForm.fadd.city = _this.ary[1];
							_this.ruleForm.fadd.area = _this.ary[2];
							_this.dialogFormVisible=true;

						} else {
							_this[d] = false;
						}
					})
			},
			//			onSelected(data) {
			//				let _this = this;
			//
			//					_this.ruleForm.fadd = data.province.value + "," + data.city.value + "," + data.area.value;
			//
			//
			//
			//			},
			province(data) {
				var _this = this;
				//				_this.ruleForm.fadd = "";_this.ruleForm.fadd += data.value + ",";
				_this.ruleForm.fadd.province = data.value;
				//				_this.ruleForm.fadd
			},
			city(data) {
				var _this = this;
				//				_this.ruleForm.fadd += data.value + ",";
				_this.ruleForm.fadd.city = data.value;
			},
			area(data) {
				var _this = this;
				//				_this.ruleForm.fadd += data.value + ",";
				_this.ruleForm.fadd.area = data.value;
			}

		},
		mounted: function() {
			this.$nextTick(function() {})

		}
	}
</script>
<style scoped>
.postCode{
    -webkit-appearance: none;
	background-color: #fff;
	background-image: none;
	border-radius: 4px;
	border: 1px solid #d8dce5;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	color: #5a5e66;
	display: inline-block;
	font-size: inherit;
	height: 40px;
	line-height: 1;
	outline: 0;
	padding: 0 15px;
	-webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	width: 100%;
}
</style>
