# 创建LOOP组件
## 文件夹结构
以`班组组件`说明

+ ShiftTeam
  + index.vue
  + setting.vue
  + settingConfig.js

## index.vue
`index.vue`根据对应配置，渲染组件

## setting.vue
右侧的配置页面

## settingConfig.js
组件配置属性，如果设置了数据源，会自动绑定

- settingConfig
通用配置，如：是否显示数据源、数据绑定等等
- customConfig
自定义配置，包括：组件类型，版本等，以及私有的`customize`配置，和后台对应的组件类型参数一致。
