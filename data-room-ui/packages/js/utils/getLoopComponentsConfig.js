/*
 * @description: 得到边框组件配置
 * @Date: 2023-03-16 10:49:11
 */
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
