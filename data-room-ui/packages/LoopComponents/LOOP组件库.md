# 组件注册

> data-room-ui/packages/js/utils/componentImport.js

```js
// 支持递归导入
importComponents(require.context('data-room-ui/LoopComponents', true, /\index.vue$/))
```
# 组件配置注册

> packages/js/utils/configImport.js
```js
// 支持递归导入
importComponentSettingConfig(require.context('data-room-ui/LoopComponents', true, /\.js$/))
```

# 右侧界面注册

> data-room-ui/packages/js/utils/rightSettingImport.js
```js
// 支持递归导入
importComponentSetting(require.context('data-room-ui/LoopComponents', true, /\.vue$/))
```


# 左侧 LOOP TAB页面

增加TAB页面文件
> data-room-ui/packages/BigScreenDesign/LeftPanel.vue

在其中的`menuList`添加

```json
{
  id: 8,
  name: 'loop',
  title: 'LOOP',
  icon: 'icon-newcohesion',
  components: loopComponents
}
```

`loopComponents`组件列表

```js
import loopComponents from 'data-room-ui/js/config/loopComponentsConfig'
```

# TAB页子项列表

在`getLoopComponentsConfig.js`配置配置组件信息
> data-room-ui/packages/js/utils/getLoopComponentsConfig.js

其中的`className`和后台类`com.gccloud.dataroom.core.module.chart.components.ScreenShiftTeamChart`的绝对路径一致

```js
export default function getComponentConfig(type, classNameType) {
  const className =
    'com.gccloud.dataroom.core.module.chart.components.ScreenShiftTeamChart'
  switch (type) {
    case 'shiftTeam':
      return {
        name: '班组',
        title: '班组',
        icon: 'shiftTeam',
        component: null,
        className,
        w: 450,
        h: 320,
        x: 0,
        y: 0,
        type
      }
    default:
      return {}
  }
}
```
# 图标说明
支持SVG图标和图片，这里说明SGV图标的使用
SVG图标存放位置：

> data-room-ui/packages/assets/images/bigScreenIcon/svg

`文件名`和`icon`名称对应