// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const express = require('express');
const apiRoutes = express.Router();
//// mock假数据
let mockData = require('../static/data/mockdata.json')
let mockData1 = require('../static/data/mockdata1.json')

/**
 * 登陆
 */
apiRoutes.post('/login/member/submit', (req, res) => {
  res.json({
    success:true,
    data:mockData.login,
    msg:"登录认证通过",
    code:""
  })
})
/**
 * 应用保存
 */
apiRoutes.post('/cd/open/app/save', (req, res) => {
  res.json({
    success:true,
    data:"",
    msg:"保存成功",
    code:""
  })
})
/**
 * 查询应用列表
 */
apiRoutes.get('/cd/cert/app/get', (req, res) => {
  res.json({
    success:true,
    data:mockData1.tableData,
    msg:"查询成功",
    code:""
  })
})
/**
 * 查询数据存证
 */
apiRoutes.get('/cd/website/dataCert/dataCertList', (req, res) => {
  res.json({
    success:true,
    data:mockData1.dataCertList,
    msg:"查询成功",
    code:""
  })
})
/**
 * 查询已拥有列表
 */
apiRoutes.post('/cd/website/dataCert/ownDataCertList', (req, res) => {
  res.json({
    success:true,
    data:mockData1.ownCertList,
    msg:"查询成功",
    code:""
  })
})
/**
 * 查询标签列表
 */
apiRoutes.get('/cd/web/certLabel/display', (req, res) => {
  res.json({
    success:true,
    data:mockData1.allTag,
    msg:"查询成功",
    code:""
  })
})
/**
 * 查询指纹存证列表
 */
apiRoutes.get('/cd/website/dataCert/numFingerList', (req, res) => {
  res.json({
    success:true,
    data:mockData1.fingerList,
    msg:"查询成功",
    code:""
  })
})
/**
 * 查询存证管理列表
 */
apiRoutes.post('/cd/website/dataCert/manageList?rows=10&page=1', (req, res) => {
  res.json({
    success:true,
    data:mockData1.certMangerList,
    msg:"查询成功",
    code:""
  })
})
/**
 * 查询存证管理详情
 */
apiRoutes.get('/cd/website/dataCert/certDetail', (req, res) => {
  res.json({
    success:true,
    data:mockData1.certMangerDetail,
    msg:"查询成功",
    code:""
  })
})


module.exports = apiRoutes;