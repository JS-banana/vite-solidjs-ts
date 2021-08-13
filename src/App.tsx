import { Title, List, Chart, Distribution } from "./components"
import type { Component } from "solid-js"
import type { ListProps } from "./typings"
import cls from "./index.module.less"

const list: ListProps[] = [
  {
    label: "员工总数",
    value: 276,
  },
  {
    label: "待入职",
    value: 12,
  },
  {
    label: "待转正",
    value: 45,
  },
  {
    label: "待离职",
    value: 12,
  },
]

const appData = {
  list,
}

const App: Component = () => {
  const { list } = appData
  return (
    <div class={cls.App}>
      <Title />
      <List list={list} />
      <Distribution />
      <Chart />
    </div>
  )
}

export default App
