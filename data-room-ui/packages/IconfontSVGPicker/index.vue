<template>
  <div class="icon-picker">
    <el-select
      v-model="localValue"
      placeholder="请选择图标"
      filterable
      clearable
      class="bs-el-select"
      popper-class="bs-el-select"
      @change="changeValue"
    >
      <el-option
        v-for="icon in iconList"
        :key="icon.icon_id"
        :label="icon.name"
        :value="icon.font_class"
      >
        <div class="icon-option">
          <svg class="svgicon" aria-hidden="true">
            <use :xlink:href="'#icon-'+icon.font_class"></use>
          </svg>
          <span>{{ icon.name }}</span>
        </div>
      </el-option>
    </el-select>
    <div class="icon">
      <svg class="svgicon" aria-hidden="true">
        <use :xlink:href="'#icon-'+localValue"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import '../BigScreenDesign/fonts/iconfont.css'
import '../BigScreenDesign/fonts/iconfont.js'
import iconfont from '../BigScreenDesign/fonts/iconfont.json'
const originList = iconfont.glyphs
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      iconList: originList,
      localValue: this.value,
      key: ''
    }
  },
  watch: {
    key(val) {
      if (val) {
        this.iconList = originList.filter(name => name.indexOf(val) > -1)
      } else {
        this.iconList = originList
      }
    }
  },
  methods: {
    changeValue(event) {
      this.$emit('input', this.localValue)
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-picker {
  display: flex;
}

.icon-option {
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    font-size: 20px;
  }
}

.icon {
  width: 32px;
  height: 28px;
  margin-left: 5px;
  align-self: center;
  text-align: center;
  background-color: var(--bs-background-1);
}
</style>
