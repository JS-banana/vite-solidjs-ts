import { onMount, onCleanup } from "solid-js"
import type { Component } from "solid-js"
import cls from "../../index.module.less"
import echarts, { ECOptionBar } from "../../utils/echart"
import { MonthProps } from "../../typings"

// Distribution
const Distribution: Component<{ data: MonthProps[] }> = (props) => {
  let container: null | HTMLDivElement = null
  let instance
  // 人员流动分析
  const Distribution_Option: ECOptionBar = {
    title: {
      text: "人员流动分析",
      textStyle: {
        fontSize: 16,
      },
      // subtext: `统计年份 ${new Date().getFullYear()}年`,
      // subtextStyle: {},
      // textAlign: "center",
    },
    grid: {
      left: 5,
      right: 10,
      top: 80,
      bottom: 0,
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["入职人数", "离职人数"],
      top: 30,
      left: "left",
      textStyle: {
        color: "#8C8C8C",
        fontSize: 12,
        fontWeight: 400,
      },
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 24,
      icon: "circle",
    },
    xAxis: [
      {
        // name: "月份",
        type: "category",
        data: props.data?.map((n) => `${n.month}月`) || [],
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
        data: props.data?.map((n) => n.entry_num) || [],
        barWidth: 16,
        itemStyle: {
          color: "#3860F4",
        },
      },
      {
        name: "离职人数",
        type: "bar",
        data: props.data?.map((n) => n.dimission_num) || [],
        barWidth: 16,
        itemStyle: {
          color: "#F7B500",
        },
      },
    ],
  }
  onMount(() => {
    instance = echarts.init(container)
    instance.setOption(Distribution_Option)
    // 窗口自适应
    window.addEventListener("resize", () => instance?.resize())
  })

  onCleanup(() => {
    window.removeEventListener("resize", () => instance?.resize())
  })

  return (
    <div class={cls.distribution}>
      <div class={cls.cavansBox} ref={container}></div>
      <div class={cls.year}>
        统计年份： <span> {new Date().getFullYear()}年</span>
      </div>
    </div>
  )
}

export default Distribution
