import { onMount } from "solid-js"
import type { Component } from "solid-js"
import echarts, { ECOptionPie } from "../../utils/echart"
import { EducationOptionProps } from "../../typings"

const EducationOption = {
  1: "博士",
  2: "硕士",
  3: "本科",
  4: "大专",
  5: "大专以下",
}

// Education
const Education: Component<{ data: EducationOptionProps }> = (props) => {
  let container: null | HTMLDivElement = null

  const Education_Option: ECOptionPie = {
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
        color: ["#F8B90D", "#4268F5", "#5AD8A6"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: "{b} \n {c}",
          // position: "center",
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
        data: Object.keys(props.data || [])
          .map((key) => {
            // 过滤为空或数据为0的
            if (EducationOption[key] && props.data[key]) {
              return {
                name: EducationOption[key],
                value: props.data[key],
              }
            }
          })
          .filter(Boolean),
      },
    ],
  }

  onMount(() => {
    echarts.init(container).setOption(Education_Option)
  })

  return <div ref={container}></div>
}

export default Education
