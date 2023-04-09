# iCrud - 增删改查组件

## 特点

* 便于构建增删改查页面
* 支持通过方法、请求路径等方法配置请求
* 支持丰富的自定义功能





## Props

| code                   | name             | note                                        |
| ---------------------- | ---------------- | ------------------------------------------- |
| requestConf            | 请求配置         | 可以传入请求路径，也可以直接传入请求方法    |
| fieldList              | 字段列表         |                                             |
| keyField               | 主键字段         | 默认为 'id'                                 |
| orders                 | 排序列表         |                                             |
| buttonList             | 按钮列表         | 数组，由 'add'、'del'、'update'、'see' 组成 |
| hasSearch              | 是否有搜索框     | 布尔值；默认为 true                         |
| beforeDoActionCallback | 操作执行前的回调 |                                             |



## Slots

| code                | name             | note                                                         |
| ------------------- | ---------------- | ------------------------------------------------------------ |
| search-item-front   | 搜索区搜索项头部 |                                                              |
| search-item-'code'  | 搜索区指定搜索项 | 提供 name、row、placeholder                                  |
| search-item-rear    | 搜索区搜索项尾部 |                                                              |
| table-button-front  | 按钮区按钮项头部 | 提供 currentRow、currentRowKey、isLoading、action、hasAction |
| table-button-rear   | 按钮区按钮项尾部 | 提供 currentRow、currentRowKey、isLoading、action、hasAction |
| table-column-front  | 表格区表格列头部 |                                                              |
| table-column-'code' | 表格区指定表格列 | 提供 row                                                     |
| table-column-rear   | 表格区表格列尾部 |                                                              |
| form                | 对话框表单       | 提供 formData、action                                        |
| form-item-front     | 对话框表单项头部 |                                                              |
| form-item-'code'    | 对话框指定表单项 | 提供 row、disabled、placeholder                              |
| form-item-rear      | 对话框表单项尾部 |                                                              |





## Expose

| code         | name     | note                                   |
| ------------ | -------- | -------------------------------------- |
| currentRow   | 当前行   |                                        |
| doLoad       | 加载数据 |                                        |
| handleAction | 准备操作 | 可以传入 'add'、'del'、'update'、'see' |