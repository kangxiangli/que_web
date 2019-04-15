
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

export const SAVECERT_FINGER_GET='/api/finger/get';//生成数字指纹
export const VALIDCERT_DATACERT_GETPAYINFO='/cd/cert/validate/getPayInfo';//获取验证信息
export const SAVECERT_FINGER_SAVETOCHAIN='/cd/website/dataCert/instantFingerCert';//数字指纹 保存并提交接口 
export const VALIDCERT_FINGERCERT_VALID='/cd/cert/validate/val';//验证接口