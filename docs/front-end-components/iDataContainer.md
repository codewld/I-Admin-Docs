# iDataContainer - 数据容器组件

## 特点

* 自动查询数据并向外提供
* 简化数据查询，省去手动编写查询发起、Loading 设置、结果赋值、错误处理的麻烦





## Props

| code        | name         | note                                     |
| ----------- | ------------ | ---------------------------------------- |
| requestConf | 请求配置     | 可以传入请求路径，也可以直接传入请求方法 |
| immediate   | 是否立即请求 | 默认为 true                              |
| cacheConf   | 缓存配置     | 传入包含 key 属性的对象，key 应该唯一    |





## Slots

| code    | name           | note      |
| ------- | -------------- | --------- |
| default | 数据内容区     | 提供 data |
| loading | 请求时加载界面 |           |





## Expose

| code        | name     | note                                          |
| ----------- | -------- | --------------------------------------------- |
| data        | 数据     |                                               |
| requestData | 加载数据 | 可传入参数 forceRequest，用于配置是否强制加载 |