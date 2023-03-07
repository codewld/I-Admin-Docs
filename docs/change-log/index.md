## 更新日志

### v0.0.3-alpha

* 增加登录登出功能
* I-Admin-Server：
    * 集成 Spring Security
    * 实现基于 JWT 的身份验证
    * 集成 Druid 连接池
* I-Admin-Web：
    * 请求响应提示身份验证错误时，做登出处理
    * 在路由导航守卫中对登录状态做判断



### v0.0.2-alpha

* 实现前后端通信
* I-Admin-Server：
    * 统一响应体
    * 统一异常处理
    * 集成参数校验
    * 完善代码生成工具类
* I-Admin-Web：
    * 集成 axois



### v0.0.1-alpha

* I-Admin-Server：
    * 基本框架搭建完成
    * 增加通用增删改查接口
    * 增加代码生成工具类
* I-Admin-Web：
    * 基本框架搭建完成
