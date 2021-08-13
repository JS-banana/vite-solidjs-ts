import { Month } from "./constant"
import type { ECOptionBar, ECOptionPie } from "./echart"

// 人员流动分析
export const Distribution_Option: ECOptionBar = {
  title: {
    text: "人员流动分析",
    textStyle: {
      fontSize: 16,
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["入职人数", "离职人数"],
  },
  xAxis: [
    {
      type: "category",
      data: Month,
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "入职人数",
      type: "bar",
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      barWidth: 16,
      itemStyle: {
        color: "#3860F4",
      },
    },
    {
      name: "离职人数",
      type: "bar",
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      barWidth: 16,
      itemStyle: {
        color: "#F7B500",
      },
    },
  ],
}

// 员工学历分布
export const Education_Option: ECOptionPie = {
  title: {
    text: "员工学历分布",
    textStyle: {
      fontSize: 16,
    },
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "本科" },
        { value: 735, name: "大专" },
        { value: 580, name: "硕士" },
      ],
    },
  ],
}
