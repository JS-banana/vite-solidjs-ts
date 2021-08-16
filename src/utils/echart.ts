// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core"
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart } from "echarts/charts"
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  LegendComponent,
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  TitleComponent,
} from "echarts/components"
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers"

import type { BarSeriesOption, PieSeriesOption } from "echarts/charts"
import type {
  LegendComponentOption,
  TitleComponentOption,
  DatasetComponentOption,
  TooltipComponentOption,
  GridComponentOption,
} from "echarts/components"

// 注册必须的组件
echarts.use([
  LegendComponent,
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  TitleComponent,
  BarChart,
  CanvasRenderer,
  PieChart,
])

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOptionBar = echarts.ComposeOption<
  | BarSeriesOption
  | TitleComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  | TooltipComponentOption
  | GridComponentOption
>
export type ECOptionPie = echarts.ComposeOption<
  | PieSeriesOption
  | TitleComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  | TooltipComponentOption
  | GridComponentOption
>

export default echarts
