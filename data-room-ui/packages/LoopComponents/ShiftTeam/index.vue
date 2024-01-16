<template>
  <div
    v-if="team"
    class="loop-component-shift-team"
    :style="{
      display:config.customize.layout==='left-icon-right-text'||config.customize.layout==='right-icon-left-text'?'flex':'inline-block'
    }"
  >
    <!--左侧图标，右侧文本-->
    <template v-if="config.customize.layout==='left-icon-right-text'">
      <!--图标-->
      <div
        v-if="team.showIcon"
        class="loop-component-shift-icon"
        :style="{
          width:calcWidth(team)
        }"
      >
        <svg
          v-if="team.iconType==='svg'"
          class="svgicon"
          aria-hidden="true"
          :style="{
            width:config.customize.iconWidth+'px',
            height:config.customize.iconHeight+'px',
          }"
        >
          <use :xlink:href="'#icon-'+team.icon" />
        </svg>
        <i
          v-if="team.iconType==='font'"
          :class="'iconfont-bigscreen icon-'+team.icon "
          :style="{
            fontSize: config.customize.iconSize+'px',
            'background-image': `-webkit-linear-gradient(${team.iconColor})`,
            '-webkit-background-clip':'text',
            '-webkit-text-fill-color':'transparent',
          }"
        />
      </div>
      <!--班组名称-->
      <div
        v-if="team.showName"
        class="loop-component-shift-name"
        :style="{
          'background-image': `-webkit-linear-gradient(${team.fontColor})`,
          '-webkit-background-clip':'text',
          '-webkit-text-fill-color':'transparent',
          fontSize: config.customize.fontSize+'px',
          fontWeight: config.customize.fontWeight,
          letterSpacing:config.customize.letterSpacing,
          width:calcWidth(team)
        }"
      >
        {{ team.name }}
      </div>
    </template>

    <!--左侧文字，右侧图标-->
    <template v-if="config.customize.layout==='right-icon-left-text'">
      <!--班组名称-->
      <div
        v-if="team.showName"
        class="loop-component-shift-name"
        :style="{
          'background-image': `-webkit-linear-gradient(${team.fontColor})`,
          '-webkit-background-clip':'text',
          '-webkit-text-fill-color':'transparent',
          fontSize: config.customize.fontSize+'px',
          fontWeight: config.customize.fontWeight,
          letterSpacing:config.customize.letterSpacing,
          width:calcWidth(team)
        }"
      >
        {{ team.name }}
      </div>
      <!--图标-->
      <div
        v-if="team.showIcon"
        class="loop-component-shift-icon"
        :style="{
          width:calcWidth(team)
        }"
      >
        <svg
          v-if="team.iconType==='svg'"
          class="svgicon"
          aria-hidden="true"
          :style="{
            width:config.customize.iconWidth+'px',
            height:config.customize.iconHeight+'px',
          }"
        >
          <use :xlink:href="'#icon-'+team.icon" />
        </svg>
        <i
          v-if="team.iconType==='font'"
          :class="'iconfont-bigscreen icon-'+team.icon "
          :style="{
            fontSize: config.customize.iconSize+'px',
            'background-image': `-webkit-linear-gradient(${team.iconColor})`,
            '-webkit-background-clip':'text',
            '-webkit-text-fill-color':'transparent',
          }"
        />
      </div>
    </template>
    <!--上面图标，下面文字-->
    <template v-if="config.customize.layout==='above-icon-below-text'">
      <!--图标-->
      <div
        v-if="team.showIcon"
        class="loop-component-shift-icon"
        style="display:flex;width:100%;height: 50%;"
      >
        <svg
          v-if="team.iconType==='svg'"
          class="svgicon"
          aria-hidden="true"
          :style="{
            width:config.customize.iconWidth+'px',
            height:config.customize.iconHeight+'px',
          }"
        >
          <use :xlink:href="'#icon-'+team.icon" />
        </svg>
        <i
          v-if="team.iconType==='font'"
          :class="'iconfont-bigscreen icon-'+team.icon "
          :style="{
            fontSize: config.customize.iconSize+'px',
            'background-image': `-webkit-linear-gradient(${team.iconColor})`,
            '-webkit-background-clip':'text',
            '-webkit-text-fill-color':'transparent',
          }"
        />
      </div>
      <!--班组名称-->
      <div
        v-if="team.showName"
        class="loop-component-shift-name"
        :style="{
          'background-image': `-webkit-linear-gradient(${team.fontColor})`,
          '-webkit-background-clip':'text',
          '-webkit-text-fill-color':'transparent',
          fontSize: config.customize.fontSize+'px',
          fontWeight: config.customize.fontWeight,
          display:'flex',
          width:calcWidth(team),
          height:calcHeight(team)
        }"
      >
        {{ team.name }}
      </div>
    </template>
    <!--上面文字，下面图标-->
    <template v-if="config.customize.layout==='below-icon-above-text'">
      <!--班组名称-->
      <div
        v-if="team.showName"
        class="loop-component-shift-name"
        :style="{
          'background-image': `-webkit-linear-gradient(${team.fontColor})`,
          '-webkit-background-clip':'text',
          '-webkit-text-fill-color':'transparent',
          fontSize: config.customize.fontSize+'px',
          fontWeight: config.customize.fontWeight,
          display:'flex',
          width:calcWidth(team),
          height:calcHeight(team)
        }"
      >
        {{ team.name }}
      </div>
      <!--图标-->
      <div
        v-if="team.showIcon"
        class="loop-component-shift-icon"
        style="display:flex;width:100%;height: 50%;"
      >
        <svg
          v-if="team.iconType==='svg'"
          class="svgicon"
          aria-hidden="true"
          :style="{
            width:config.customize.iconWidth+'px',
            height:config.customize.iconHeight+'px',
          }"
        >
          <use :xlink:href="'#icon-'+team.icon" />
        </svg>
        <i
          v-if="team.iconType==='font'"
          :class="'iconfont-bigscreen icon-'+team.icon "
          :style="{
            fontSize: config.customize.iconSize+'px',
            'background-image': `-webkit-linear-gradient(${team.iconColor})`,
            '-webkit-background-clip':'text',
            '-webkit-text-fill-color':'transparent',
          }"
        />
      </div>
    </template>
  </div>
  <div v-else>
    此刻无班组
  </div>
</template>

<script>
import '../../BigScreenDesign/fonts/iconfont.css'
import '../../BigScreenDesign/fonts/iconfont.js'
import moment from 'moment'

export default {
  name: 'ShiftTeam',
  props: {
    // 卡片的属性
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      value: '',
      team: null,
      timer: null
    }
  },
  watch: {},
  mounted () {
    this.changeStyle(this.config)
    this.timer = setInterval(this.calcShiftTeam, 1000)
    this.calcShiftTeam()
  },
  beforeDestroy () {
    // 销毁时清除定时器
    clearTimeout(this.timer)
  },
  methods: {
    calcHeight (team) {
      return team.showName && team.showIcon ? '50%' : '100%'
    },
    calcWidth (team) {
      if (this.config.customize.layout === 'above-icon-below-text' || this.config.customize.layout === 'below-icon-above-text') {
        return '100%'
      }
      return team.showName && team.showIcon ? '' : '100%'
    },
    calcShiftTeam () {
      const now = moment()
      let team = null
      for (let i = 0; i < this.config.customize.teams.length; i++) {
        team = this.config.customize.teams[i]
        const startTime = moment(team.startTime, 'HH:mm:ss')
        const endTime = moment(team.endTime, 'HH:mm:ss')
        // 同一天
        if (!startTime.isBefore(endTime)) {
          endTime.add(1, 'days')
        }
        if (now.isAfter(startTime) && now.isBefore(endTime)) {
          this.team = team
          return
        }
      }
      this.team = null
    },
    changeStyle (config, isUpdateTheme) {
    }
  }
}
</script>

<style>
/* 修改输入框的 placeholder 文字颜色 */
input::placeholder {
  color: red; /* 设置占位文字颜色为灰色 */
}

</style>

<style lang="scss" scoped>
.loop-component-shift-team {
  width: 100%;
  display: flex;
  align-items: center;

  * {
    display: inline-block;
    text-align: center;
    border: none;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    align-self: center;
  }

  .loop-component-shift-icon {
    width: 40%;
  }

  .loop-component-shift-name {
    width: 60%;
  }
}

</style>
