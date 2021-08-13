import Education from "./Education"
import Gender from "./Gender"
import type { Component } from "solid-js"
import cls from "../../index.module.less"

// DoughnutBox
const DoughnutBox: Component = () => {
  return (
    <div class={cls.doughnutBox}>
      <Education />
      <Gender />
    </div>
  )
}

export default DoughnutBox
