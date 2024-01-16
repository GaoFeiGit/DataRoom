1
<template>
  <div class="bs-setting-wrap">
    <el-form
      ref="form"
      :model="config"
      label-width="100px"
      label-position="left"
      class="setting-body bs-el-form"
    >
      <div>
        <slot name="top" />
        <el-form
          :model="config.customize"
          label-position="left"
          class="setting-body bs-el-form"
          label-width="100px"
        >
          <SettingTitle>SVG图标</SettingTitle>
          <div class="lc-field-body">
            <el-form-item label="宽度">
              <el-input-number
                v-model="config.customize.iconWidth"
                class="bs-el-input-number"
                :min="10"
                :max="1000"
              />
            </el-form-item>
            <el-form-item label="高度">
              <el-input-number
                v-model="config.customize.iconHeight"
                class="bs-el-input-number"
                :min="10"
                :max="1000"
              />
            </el-form-item>
          </div>
          <SettingTitle>字体图标</SettingTitle>
          <div class="lc-field-body">
            <el-form-item label="字体大小">
              <el-input-number
                v-model="config.customize.iconSize"
                class="bs-el-input-number"
                :min="10"
                :max="1000"
              />
            </el-form-item>
          </div>
          <SettingTitle>布局</SettingTitle>
          <div class="lc-field-body">
            <el-form-item label="布局方式">
              <el-select
                v-model="config.customize.layout"
                popper-class="bs-el-select"
                class="bs-el-select"
              >
                <el-option
                  v-for="iconPosition in layouts"
                  :key="iconPosition.value"
                  :label="iconPosition.label"
                  :value="iconPosition.value"
                />
              </el-select>
            </el-form-item>
          </div>
          <SettingTitle>字体</SettingTitle>
          <div class="lc-field-body">
            <el-form-item
              label="字体大小"
              label-width="100px"
            >
              <el-input-number
                v-model="config.customize.fontSize"
                class="bs-el-input-number"
                placeholder="请输入字体大小"
                :min="0"
              />
            </el-form-item>
            <el-form-item
              label="字体权重"
              label-width="100px"
            >
              <el-input-number
                v-model="config.customize.fontWeight"
                class="bs-el-input-number"
                :min="0"
                :step="100"
                placeholder="请输入字体权重"
              />
            </el-form-item>
          </div>
          <SettingTitle>班组时间</SettingTitle>
          <div
            v-for="(item,index) in config.customize.teams"
            class="lc-field-body"
          >
            <el-divider
              class="bs-el-divider"
            >
              {{ item.name }}
            </el-divider>
            <el-form-item label="班组名称">
              <el-input
                v-model="item.name"
                placeholder="请输入班组名称"
              />
            </el-form-item>
            <el-form-item label="显示名称">
              <el-switch
                v-model="item.showName"
                class="bs-el-switch"
                active-color="#007aff"
              />
            </el-form-item>
            <el-form-item label="显示图标">
              <el-switch
                v-model="item.showIcon"
                class="bs-el-switch"
                active-color="#007aff"
              />
            </el-form-item>
            <TextGradient
              v-model="item.fontColor"
              :label="'班组'"
            />
            <el-form-item label="图标类型">
              <el-select
                v-model="item.iconType"
                popper-class="bs-el-select"
                class="bs-el-select"
              >
                <el-option
                  v-for="iconPosition in iconTypes"
                  :key="iconPosition.value"
                  :label="iconPosition.label"
                  :value="iconPosition.value"
                />
              </el-select>
            </el-form-item>
            <TextGradient
              v-if="item.iconType==='font'"
              v-model="item.iconColor"
              :label="'图标'"
            />
            <el-form-item label="选择图标">
              <IconfontSVGPicker
                v-if="item.iconType==='svg'"
                v-model="item.icon"
              />
              <IconfontPicker
                v-else
                v-model="item.icon"
              />
            </el-form-item>
            <el-form-item label="开始时间">
              <el-input
                v-model="item.startTime"
                placeholder="HH:mm:ss"
              />
            </el-form-item>
            <el-form-item label="结束时间">
              <el-input
                v-model="item.endTime"
                placeholder="HH:mm:ss"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                class="bs-el-button-default cancel"
                @click="config.customize.teams.splice(index,1)"
              >
                删除此班组
              </el-button>
            </el-form-item>
          </div>
        </el-form>
        <el-form-item>
          <el-button
            class="bs-el-button-default"
            @click="config.customize.teams.push({})"
          >
            添加班组
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import SettingTitle from 'data-room-ui/SettingTitle/index.vue'
import IconfontSVGPicker from 'data-room-ui/IconfontSVGPicker/index.vue'
import IconfontPicker from 'data-room-ui/IconfontPicker/index.vue'
import TextGradient from 'data-room-ui/BigScreenDesign/RightSetting/TextGradient/index'
import fontList from 'data-room-ui/js/utils/fontList'

export default {
  name: 'ShiftTeamSetting',
  components: {
    SettingTitle,
    IconfontPicker,
    IconfontSVGPicker,
    TextGradient
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      fontFamilyList: fontList,
      alignList: [{
        label: '靠左',
        value: 'left'
      },
      {
        label: '居中',
        value: 'center'
      },
      {
        label: '靠右',
        value: 'right'
      }],
      layouts: [
        { label: '图标在左', value: 'left-icon-right-text' },
        { label: '图标在右', value: 'right-icon-left-text' },
        { label: '图标在上', value: 'above-icon-below-text' },
        { label: '图标在下', value: 'below-icon-above-text' }
      ],
      iconTypes: [
        { label: 'SVG图标', value: 'svg' },
        { label: '字体图标', value: 'font' }
      ]
    }
  },
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.lc-field-body {
  width: 97%;
  padding: 12px 16px;
  //padding-bottom: 65px;
}
</style>
