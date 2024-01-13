package com.gccloud.dataroom.core.module.chart.components;

import com.gccloud.dataroom.core.constant.PageDesignConstant;
import com.gccloud.dataroom.core.module.chart.bean.Chart;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 外联组
 *
 * @author F 2024/1/12 15:23
 */
@Data
public class ScreenIframeGroupChart extends Chart {

    @ApiModelProperty(notes = "类型")
    private String type = PageDesignConstant.BigScreen.Type.IFRAME_GROUP;

    @ApiModelProperty(notes = "个性化配置")
    private Customize customize = new Customize();

    @Data
    public static class Customize {

        @ApiModelProperty(notes = "外链地址列表")
        private List<String> urls;

        @ApiModelProperty(notes = "切换时间")
        private Integer switchSeconds;

    }

}
