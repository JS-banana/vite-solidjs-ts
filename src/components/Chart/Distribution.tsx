import { onMount } from "solid-js"
import type { Component } from "solid-js"
import cls from "../../index.module.less"
import echarts from "../../utils/echart"
import { Distribution_Option } from "../../utils/options"

// Distribution
const Distribution: Component = () => {
  let container: null | HTMLDivElement = null

  onMount(() => {
    echarts.init(container).setOption(Distribution_Option)
  })

  return <div ref={container} class={cls.distribution}></div>
}

export default Distribution
