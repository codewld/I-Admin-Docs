## 更新日志

### v0.0.4-alpha

* 增加 "权限管理-后台用户管理"
* 增加 "权限管理-角色管理"
* I-Admin-Server：
  * 通用增删改查接口中 queryWrapper 支持自动命名规则转换
  * 通用增删改查接口修改注入方式为 Autowired，从而依据泛型选取 Bean
* I-Admin-Web：
  * 侧边栏支持根据窗口大小自动伸缩
  * 增加 IContainer 容器、 ICard卡片组件、 IStatus 状态组件
  * 增加 ICrud 增删改查组件



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
