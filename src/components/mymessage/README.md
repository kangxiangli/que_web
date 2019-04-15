# vboot_web.git-getImageCode #


## 功能（短信验证）

## 使用
* 横向轮播 使用的话需传递需要的值 
```bash
 <getCode :messageUrl="messageUrl" :getCodeStyle="getCodeStyle"></getCode>
```
* 短信验证接口
```bash
messageUrl: "/api/vtweb/message/sendPhone", 
```
* 短信验证样式
```bash
getCodeStyle: { width: '300px',},
```
* 项目中需要声明这两个变量messageUrl: "static/data/mockdata.json",（短信验证接口）,getCodeStyle: object（短信验证样式）


## message 为轮播的核心代码  











