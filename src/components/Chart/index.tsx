import Education from "./Education"
import Gender from "./Gender"
import type { Component } from "solid-js"
import cls from "../../index.module.less"
import { PieDataProps } from "../../typings"

// DoughnutBox
const DoughnutBox: Component<{ data: PieDataProps }> = (props) => {
  return (
    <div class={cls.doughnutBox}>
      <Education data={props.data?.education} />
      <Gender data={props.data?.gender} />
    </div>
  )
}

export default DoughnutBox
