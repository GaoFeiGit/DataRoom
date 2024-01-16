package com.gccloud.dataroom.core.module.chart.components;

import com.gccloud.dataroom.core.constant.PageDesignConstant;
import com.gccloud.dataroom.core.module.chart.bean.Chart;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 班组图表
 *
 * @author F 2024/1/15 8:40
 */
@Data
public class ScreenShiftTeamChart extends Chart {

    @ApiModelProperty(notes = "类型")
    private String type = PageDesignConstant.BigScreen.Type.SHIFT_TEAM;

    @ApiModelProperty(notes = "个性化")
    private Customize customize = new Customize();

    /**
     * 班组图标
     * 班组时间段
     * 班组名称
     *
     * @author F 2024/1/15 12:46
     */
    @Data
    public static class Customize {

        //左右，上下
        @ApiModelProperty(notes = "布局方式")
        private String layout;

        @ApiModelProperty(notes = "图标高度")
        private Integer iconHeight;

        @ApiModelProperty(notes = "图标宽度")
        private Integer iconWidth;

        @ApiModelProperty(notes = "字体图标大小")
        private Integer iconSize;

        @ApiModelProperty(notes = "字体大小")
        private Integer fontSize;

        @ApiModelProperty(notes = "字体权重")
        private Integer fontWeight;

        @ApiModelProperty(notes = "班组")
        private List<ShiftTeam> teams;

    }

    @Data
    public static class ShiftTeam {


        @ApiModelProperty(notes = "班组长")
        private String name;

        @ApiModelProperty(notes = "班组图标")
        private String icon;

        @ApiModelProperty(notes = "SGV图标")
        private String iconType;

        @ApiModelProperty(notes = "字体图标颜色")
        private String iconColor;

        @ApiModelProperty(notes = "字体颜色")
        private String fontColor;

        @ApiModelProperty(notes = "开始时间")
        private String startTime;

        @ApiModelProperty(notes = "结束时间")
        private String endTime;

        @ApiModelProperty(notes = "显示班组名称")
        private Boolean showName;

        @ApiModelProperty(notes = "显示图标")
        private Boolean showIcon;

    }

}
