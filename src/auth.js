export default {
  randomString:function(len,radix){
    var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var chars = CHARS, uuid = [], i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  },
  getUid:function(){
    var uid = window.sessionStorage.getItem(config.prefix);
    if (uid==null) {
      uid = this.randomString(32);
      window.sessionStorage.setItem(config.prefix,uid);
    }
    return uid;
  },
  // getSid:function(){
  //   var sid = window.sessionStorage.getItem('Authorization');
  //   alert(sid);
  //   if(!!sid){
  //     return sid;
  //   }
  //   return '';
  // },
  login (token, callback) {
    window.sessionStorage.setItem(config.prefix,token);
    if (callback) callback();
  },

  getToken () {
    return window.sessionStorage.getItem(config.prefix);
  },

  logout (cb) {
    window.sessionStorage.removeItem(config.prefix);
    window.sessionStorage.setItem('loginShow', true);
		window.sessionStorage.setItem('loginDivShow', true);
    window.sessionStorage.setItem('navMenuIndex', 0);
    if (cb) cb()
  },
  signOut(_this){
    _this.$store.state.loginDivShow=true;//true:显示登陆页面div
    _this.$store.state.loginShow= true;//顶部登陆,true表示显示顶部登陆按钮
    _this.$store.state.navMenuIndex=0;//100为菜单索引
    _this.$router.push({
					path: '/homePage'
    })
    this.logout();
  },

  loggedIn () {
    return !!window.sessionStorage.getItem(config.prefix);
  },
   getServerMenu(){
    return window.sessionStorage.getItem('serverMenu'); 
  },
}
