//export const CONTEXT = '';
//export const SERVERURL = '/static/data/server.json';
export const LOGIN ='/login/member/submit';//登录
export const LOGOUT = '/logout/ajax';//退出
export const REGISTER = '/api/member/registr';//register
export const REGISTER_IMG ='/api/sendFcodeImg/send';//注册验证码图片接口
export const LOGIN_RECORD ='/cd/member/saveTimeIp';//获取客户的登录时间
export const REGISTER_MES = '/api/vtweb/message/sendPhone';//register
export const CHANGE_PWD = '/cd/sys/user/updatePwd';//修改密码。

//会员中心
export const MER_INFO ='/cd/member/basicInfo';//获取客户基本信息
export const MER_ID_TYPE ='/cd/memberAuth/getFnoType';//获取证件类型
export const MER_UPLOAD ='/api/web/attachment/upload';//证件上传
export const MER_UPLOAD_DEL ='/api/web/attachment/del';//证件删除
export const MER_SUBMIT ='/cd/memberAuth/save';//证件提交
export const MER_APPROVEINFO ='/cd/memberAuth/mauthDisplay';//证件提交
export const MER_QUESTION_LIST ='/cd/web/question/list';//问题列表查看
export const MER_LOGIN_RECORD_LIST ='/cd/member/loginRecord';//个人登录记录
export const MER_RESRT_EMAIL ='/cd/security/bindEmail';//邮箱重置
export const MER_RESRT_PHONE ='/cd/security/bindEmail';//邮箱手机
export const MER_DEFAULT_PHONE ='/cd/security/updateMobile';//获取原始手机
export const MER_RESRT_NICKNAME ='/cd/security/setNickname';//邮箱昵称
export const MER_RESRT_PASSWORD ='/cd/security/upPwd';//密码
//首页
export const FIRSTPAGE_GET_ONLINE='/api/online/service';//获取在线客服
export const FIRSTPAGE_GET_MENU='/api/web/menu';//获取在线客服
export const FIRSTPAGE_GET_CONTENT='/api/web/childrenContent';//  点击子集接口   参数fid   

export const SOLVE_PLAN ='/api/web/farticle/solution';//首页解决方案(显示三条数据)接口
export const SOLVE_PLAN_ALL ='/api/web/farticle/solutionMore';//首页解决方案所有1
export const SOLVE_PLAN_DETAILE ='/api/web/farticle/getSolutionOne';//首页解决方案点击其中一条数据 参数  fid
export const SOLVE_NEWS ='/api/web/farticle/newsInfo';//首页新闻资讯(显示六条数据)
export const SOLVE_NEWS_ALL ='/api/web/farticle/newsMore';//首页新闻资讯所有;1代表官方公告  2代表资讯新闻  3代表信息披露
export const SOLVE_NEWS_DETAILE ='/api/web/farticle/getNewsInfoOne';//首页新闻资讯点击一条数据参数  fid
//找回密码
export const FIND_PASSWORD_CODE ='/api/sendFcodeImg/send';//图片验证码
export const FIND_PASSWORD_PHONE ='/api/vtweb/message/sendPhone';//短信验证码
export const FIND_PASSWORD ='/api/member/backPassword';//找回密码
export const FIND_PASSWORD_TYPE ='/api/member/getFnoType';//找回密码证件类型
export const FIND_PASSWORD_REVERED ='/api/member/resetPwd';//重置密码

//收获地址
export const MER_SITE_TABLE='/cd/receAdd/list';//table
export const MER_SITE_SUBMIT ='/cd/receAdd/save';//收件地址提交保存
export const MER_SITE_MIDEFIY='/cd/receAdd/getById';//收件地址提交修改 参数 fid
export const MER_SITE_DEL ='/cd/receAdd/delAdd';//收件地址提交删除
export const MER_SITE_DEFALUT ='/cd/receAdd/setDefault';//设置默认
//举证中心
export const PROOF_FORM_SUBMIT ='/cd/cert/quote/save';//提交
export const PROOF_FORM_UPLOAD ='/api/cert/quote/attach/upload';//上传
export const PROOF_FORM_UPLOAD_DEL ='/cd/website/certdata/del';//上传删除
export const PROOF_FORM_SITE ='/cd/receAdd/getDef';//获取默认地址的接口
export const PROOF_FORM_DOWNLOAD_FILE='/cd/cert/quote/attach';//举证申请文件下载
//举证管理
export const PROOF_FORM_INFORM='/cd/cert/quote/userInfor';//鉴定中心用户告知
export const PROOF_FORM_TABLE='/cd/cert/quote/search';//table
export const PROOF_FORM_DETAILS='/cd/cert/quote/get';//查看
export const PROOF_FORM_DOWNLOAD_ALL='/cd/cert/quote/download';//数据样式本举证打包下载
export const PROOF_FORM_PAY_ZHIFUBAO='/cd/cert/quote/payQR';//支付获取二维码
export const PROOF_ZHIFUBAO_PAY_OR='/cd/cert/quote/pay/query';//支付成功或者失败
export const PROOF_BOOK_DOWNLOAD_ALL='/pub/cert/quote/zipDownload';//举证信息举证打包下载
export const PROOF_ORDER_INFO='/cd/cert/quote/getPayInfo';//获取订单基本信息

/**
 * 公共功能
 */
export const COMMEN_PROBLEM_GET='/cd/web/question/typeList';//获取问题类型
export const COMMEN_PROBLEM_SUBMIT='/cd/web/question/subquestion';//获取问题类型
export const COMMEN_PROBLEM_LIST='/cd/web/question/getList';//获取问题类型

