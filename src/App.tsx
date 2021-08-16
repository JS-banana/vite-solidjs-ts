import { Title, List, Chart, Distribution } from "./components"
import { onMount, createSignal } from "solid-js"
import request from "./utils/request"
import type { Component } from "solid-js"
import type { DataProps, ValueType } from "./typings"
import cls from "./index.module.less"

const URL = "/hrm/statistic"

// 学历初始值
const Init_Education = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
}

const App: Component = () => {
  const [getValue, setValue] = createSignal<ValueType>(null)

  onMount(() => {
    request<DataProps>({ method: "GET", url: URL }).then((res) => {
      if (res) {
        console.log("res", res)
        const {
          total = 0,
          for_entry = 0,
          informal = 0,
          to_be_left = 0,
          month = [],
          education = {},
          male = 0,
          female = 0,
        } = res

        const obj = {
          // list 信息
          list: [
            {
              label: "员工总数",
              value: total,
            },
            {
              label: "待入职",
              value: for_entry,
            },
            {
              label: "待转正",
              value: informal,
            },
            {
              label: "待离职",
              value: to_be_left,
            },
          ],
          // 人员流动分析
          month,

          pieData: {
            // 员工学历分布
            education: { ...Init_Education, ...education },
            // 性别
            gender: [
              male && { name: "男", value: male },
              female && { name: "女", value: female },
            ].filter(Boolean),
          },
        }

        setValue(obj)
      }
    })
  })

  return (
    <div class={cls.App}>
      <Title />
      <List list={getValue()?.list} />
      {getValue()?.month && <Distribution data={getValue()?.month} />}
      {getValue()?.pieData && <Chart data={getValue()?.pieData} />}
    </div>
  )
}

export default App
