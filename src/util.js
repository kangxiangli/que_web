/**
 * 工具插件
 * zhaojl
 * 2017-12-18
 */
var Util = {};
Util.install = function(Vue, options) {
  Vue.prototype.meFormat = function(obj) {
    //vue挂载格式化时间
    var date = new Date(obj);
    var y = 1900 + date.getYear();
    var m = "0" + (date.getMonth() + 1);
    var d = "0" + date.getDate();
    return (
      y +
      "-" +
      m.substring(m.length - 2, m.length) +
      "-" +
      d.substring(d.length - 2, d.length)
    );
  };
  Vue.prototype.GetFileExt = function(filepath) {
    //截取图片类型
    if (filepath != "") {
      var pos = "." + filepath.replace(/.+\./, "");
      return pos;
    }
  };
  /**
   * 获取服务器地址
   */
  Vue.prototype.getServerUrl = function() {
    if (config.test) {
      return "http://localhost:7111/test";
    } else {
      return this.$store.state.serverUrl;
      // window.sessionStorage.getItem("serverUrl");
    }
  };
  /**
   * 移除数组中指定的值
   * @param {*} arr
   * @param {*} val
   */
  Vue.prototype.removeByValue = function(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  };
  /**
   * 移除数组中指定的值
   * @param {*} arr
   * @param {*} val
   */
  Vue.prototype.compareDate = function(data1, data2) {
    debugger;
    let d1 = new Date(data1.replace(/\-/g, "\/"));  
    let d2 = new Date(data2.replace(/\-/g, "\/"));  
    if(data1!=""&&data2!=""&&d1 >d2)  
    {  
    //  ("开始时间不能大于结束时间！");  
     return false;  
    }else{
      return true;
    }
  };
  //轮播图
  // Vue.prototype.getSlides = function (ary,url) {
  // this.$http.get(url).then(res => {
  //					this[ary]=res.data.slides;
  //
  //				})
  //};
};
module.exports = Util;
