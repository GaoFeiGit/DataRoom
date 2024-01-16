/*
 * @description: 基础的bigScreen展示组件
 * @Date: 2023-03-13 10:04:59
 * @Author: xing.heng
 * @LastEditors: wujian
 * @LastEditTime: 2023-06-01 15:55:48
 */

// import _ from 'lodash'
import cloneDeep from 'lodash/cloneDeep'
import getComponentConfig from 'data-room-ui/js/utils/getLoopComponentsConfig'
// 批量引入配置文件
import { dataModules, setModules } from 'data-room-ui/js/utils/configImport'
// LOOP组件下的业务组件列表
const typeList = [
  'shiftTeam'
]
let basicConfigList = []
basicConfigList = typeList.map((type) => {
  return getComponentConfig(type)
})
basicConfigList = basicConfigList.map((item) => {
  return basicComponentsConfig(item)
})

// 生成基本配置
export function basicComponentsConfig (item) {
  return {
    ...item,
    option: cloneDeep(setModules[item.type]),
    ...cloneDeep(dataModules[item.type])
  }
}

export default basicConfigList
