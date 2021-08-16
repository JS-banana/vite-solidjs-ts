import { onMount } from "solid-js"
import type { Component } from "solid-js"
import echarts, { ECOptionPie } from "../../utils/echart"
import { GenderOptionProps } from "../../typings"

// Gender
const Gender: Component<{ data: GenderOptionProps[] }> = (props) => {
  let container: null | HTMLDivElement = null

  // 性别分布
  const Gender_Option: ECOptionPie = {
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
      top: 30,
      left: "left",
      itemWidth: 8,
      itemHeight: 8,
      icon: "circle",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        top: 35,
        radius: ["40%", "66%"],
        avoidLabelOverlap: false,
        color: ["#E29EF5", "#4268F5"],
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        labelLine: {
          show: true,
          // smooth: 0.3,
          minTurnAngle: 120,
          length2: 30,
        },
        data: props.data || [],
      },
    ],
  }

  onMount(() => {
    echarts.init(container).setOption(Gender_Option)
  })

  return <div ref={container}></div>
}

export default Gender
