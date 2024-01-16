import { commonConfig } from 'data-room-ui/js/config'

export const settingConfig = {
  title: '班组',
  theme: 'dark',
  displayOption: {
    dataAllocation: {
      // 是否存在数据配置
      enable: false
    }
  }
}
const customConfig = {
  type: 'ShiftTeam',
  root: {
    version: '2024011501',
    // 绕x轴旋转角度
    rotateX: 0,
    // 绕y轴旋转角度
    rotateY: 0,
    // 绕z轴旋转角度
    rotateZ: 0,
    // 透视距离
    perspective: 0,
    skewX: 0,
    skewY: 0
  },
  // 自定义属性
  customize: {
    layout: 'left-icon-right-text',
    iconHeight: 32,
    iconWidth: 32,
    iconSize: 80,
    fontSize: 32,
    fontWeight: 100,
    align: 'center',
    iconColor: 'left ,#FFFFFF ,#FFFFFF',
    teams: [{
      name: '白班',
      icon: 'sun',
      iconType: 'svg',
      startTime: '08:00:00',
      endTime: '19:59:59',
      fontColor: 'left ,#FFFFFF ,#FFFFFF',
      showIcon: true
    }, {
      name: '夜班',
      icon: 'moon',
      iconType: 'svg',
      startTime: '20:00:00',
      endTime: '07:59:59',
      fontColor: 'left ,#FFFFFF ,#FFFFFF',
      showIcon: true
    }]
  }
}
export const dataConfig = {
  ...commonConfig(customConfig)
}
