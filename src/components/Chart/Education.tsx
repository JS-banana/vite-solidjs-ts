import { onMount } from "solid-js"
import type { Component } from "solid-js"
import echarts from "../../utils/echart"
import { Education_Option } from "../../utils/options"

// Education
const Education: Component = () => {
  let container: null | HTMLDivElement = null

  onMount(() => {
    echarts.init(container).setOption(Education_Option)
  })

  return <div ref={container}></div>
}

export default Education
