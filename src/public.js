  var Public = {};
Public.install = function(Vue, options) {

  //	全局loding
  Vue.prototype.loading = function(){
    this.fullscreenLoading = true;
  };
  /**
   * 关闭加载页面
   */
  Vue.prototype.loadClose = function(){
    this.fullscreenLoading = false;
  };
  Vue.prototype.openFullScreen=function() {
    this.fullscreenLoading = true;
    setTimeout(() => {
      this.fullscreenLoading = false;
    }, 1500);
  },
	/*定义在全局
过滤filter
*/
	Vue.filter('statusFilter', function(fstate) {
		const statusMap = {
			6: 'success',
			7: 'success',
			1: 'warning',
			2: 'warning',
			3: 'info',
			4: 'info',
			5: 'info',
			8: 'danger',
			9: 'info'
		}
		return statusMap[fstate]
	});
//	Vue.filter('formatEmail', function(str) {
//		let start = str.slice(0,4);
//		let index=str.indexOf("@");
//		let end = str.slice(index+1,str.length);
//		return `${start}******${end}`;
//	});
//	Vue.filter('formatMobile', function(str) {
//		let start = str.slice(0,4);
//		let end = str.slice(-4);
//		return `${start}******${end}`;
//	});

	Vue.prototype.stateFormat = function(row) {
//		return row.fstatus == 0 ? "启用" : "禁用";
					let res = "";
			switch(row.fstatus) {
					case "1":
					res = "未支付 "
					break;
				case "2":
					res = "支付中";
					break;
				case "3":
					res = "举证中";
					break;
				case "4":
					res = "举证中";
					break;
				case "5":
					res = "举证中";
					break;
				case "6":
					res = "已完成";
					break;
				case "7":
					res = "已完成";
					break;
				case "8":
					res = "支付失败";
					break;

			}
			return res;

	};
	Vue.prototype.delete = function(url, fids) {
		if(fids == "") {
			this.$message("请选择数据");
			return false;
		}
		this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		}).then(() => {
			//			this.loading();
			this.$http.get(this.getServerUrl() + url + "?fids=" + fids)
				.then(res => {
					if(res.data.success == true) {
						this.$message({
							type: 'success',
							message: res.data.msg
						});
						this.loadData();
					}
				}).catch((Error) => {
					console.log(Error)
				});
		})

	};
	Vue.prototype.saveForm = function(url, form, dialog) { //保存
		//		this.loading();
		let _this = this;
		this.$http.post(this.getServerUrl() + url + "?Time=" + new Date().getTime(), form)
			.then(res => {
//
				//				this.loadClose();
				if(res.data.success == true) {
					_this[dialog] = false;; //关闭弹出层
					_this.$message(res.data.msg);
					//					_this.$el.getElementsByClassName("box-body")[0].scrollTop = 0;
					_this.$refs.ruleForm.resetFields();
					_this.$parent.loadTable.loadData(); //刷新table
				} else {
					_this[dialog] = false;
					_this.$refs.ruleForm.resetFields();
				}
			})
	};
	/**
	 * 加载表格数据
	 * @param {*} url 接口地址
	 * @param {*} param 请求参数
	 */
	Vue.prototype.loadTable = function(url,param ) {
			this.listLoading = true;
			let _this = this;
		  this.$http.get(this.getServerUrl() + url + "?" + param + "&rows=" + this.tableData.pagination.pageSize + "&page=" + this.tableData.pagination.pageNo)
				.then(res => {
//
					if(res.data.success == true) {
						_this.listLoading = false; //关闭loading
						let d = res.data;
						_this.tableData.rows = d.data.content;
						_this.tableData.pagination.total = d.data.totalElements;
					} else {
						_this.listLoading = false; //关闭loading
					}

				}).catch((error) => {
					_this.listLoading = false; //关闭loading
					console.log(error)
				});

		},
		/**
		 * 获取下拉框数据
		 * @param {*} url 接口api
		 * @param {*} opt 接受的数组
		 */
		Vue.prototype.getIdType = function(url, opt) {
			this.$http.get(this.getServerUrl() + url)
				.then(res => {
//
					if(res.data.success = true) {
						var ary = res.data.data;
						for(let i = 0; i < ary.length; i++) {
							let obj = {
								fvalue: "",
								fcode: ""
							};
							obj.value = ary[i].fcode;
							//					obj.label = ary[i].fcode;
							obj.label = ary[i].fvalue;
							opt.push(obj);
						}
						//				this.$refs.form.fparentIds = opt;
					} else {
						Element.MessageBox({
							type: "error",
							message: res.data.msg,
							title: "温馨提示"
						});
					}
				}).catch((error) => {
					console.log(error)
				});
		},
		//vue挂载产看详情
		Vue.prototype.convertId = function(str) { //身份证类型
			let res = "";
			switch(str) {
				case "身份证" :
					res ="cert01"
					break;
				case "军官证":
					res = "cert02";
					break;
				case "其他证件":
					res = "cert03";
					break;

			}
			return res;
		}
	Vue.prototype.myMessageBox = function(type, message, title) { //弹出框提示框
			type == "" ? "warning " : duration;
			title == "" ? "温馨提示 " : title;
			message == "" ? "信息有误了" : message;
			Element.MessageBox({
				type: type,
				message: message,
				title: title
			});
			return false;
		},
		Vue.prototype.myMessage = function(duration, showClose, message, type) { //消息提示框
			duration == "" ? 3000 : duration;
			showClose == "" ? false : showClose;
			message == "" ? "消息提醒" : message;
			type == "" ? "info" : type;
			this.$message({
				duration: duration,
				showClose: showClose,
				message: message,
				type: type
			})
			return false;
		}

}
module.exports = Public;
