<!--
 * @description: 外链
 * @Date: 2022-09-01 15:26:34
 * @Author: xingheng
-->

<template>
  <div>
    <el-form
      ref="form"
      label-width="100px"
      label-position="left"
      :model="config"
      class="bs-el-form"
    >
      <SettingTitle>标题</SettingTitle>
      <div class="setting-wrap">
        <el-form-item
          label="标题"
          label-width="100px"
        >
          <el-input
            v-model="config.title"
            placeholder="请输入标题"
          />
        </el-form-item>
      </div>
      <SettingTitle>位置</SettingTitle>
      <div class="setting-wrap">
        <PosWhSetting :config="config"/>
      </div>
      <SettingTitle>旋转</SettingTitle>
      <div class="lc-field-body">
        <RotateSetting
          :config="config"
        />
      </div>
      <SettingTitle v-if="config.border">边框</SettingTitle>
      <div class="lc-field-body">
        <BorderSetting
          v-if="config.border"
          label-width="100px"
          :config="config.border"
          :bigTitle='config.title'
        />
      </div>
      <SettingTitle>基础</SettingTitle>
      <div class="setting-wrap">
        <el-form-item
          label="切换时间（秒）"
          label-width="100px"
        >
          <el-input-number
            v-model="config.customize.switchSeconds"
            class="bs-el-input-number"
            :min="3"
            :step="1"
          />
        </el-form-item>
        <el-form-item
          v-for="(item,index) in config.customize.urls"
          label-width="100px"
        >
          <template #label>
            <span @dblclick="config.customize.urls.splice(index,1)" title="双击删除">
              {{ 'URL地址 No.' + (index + 1) }}
            </span>
          </template>
          <el-input
            v-model="config.customize.urls[index]"
            type="textarea"
            rows="4"
            placeholder="请输入URL地址"
          />
        </el-form-item>
        <el-form-item
          label=""
          label-width="100px"
        >
          <el-button
            type="text"
            @click="config.customize.urls.push('')"
          >添加外链
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import SettingTitle from 'data-room-ui/SettingTitle/index.vue'
import PosWhSetting from 'data-room-ui/BigScreenDesign/RightSetting/PosWhSetting.vue'
import BorderSetting from 'data-room-ui/BigScreenDesign/RightSetting/BorderSetting.vue'
import RotateSetting from 'data-room-ui/BigScreenDesign/RightSetting/RotateSetting.vue'

export default {
  name: 'IframeGroupChartSetting',
  components: {
    PosWhSetting,
    SettingTitle,
    BorderSetting,
    RotateSetting
  },
  data() {
    return {}
  },
  computed: {
    config: {
      get() {
        return this.$store.state.bigScreen.activeItemConfig
      },
      set(val) {
        this.$store.state.bigScreen.activeItemConfig = val
      }
    }
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/settingWrap.scss";

.setting-wrap {
  padding: 12px 16px;
}
</style>
