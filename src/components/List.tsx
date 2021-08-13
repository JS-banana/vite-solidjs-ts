import type { Component } from "solid-js"
import { ListProps } from "../typings"

import cls from "../index.module.less"

// List
const List: Component<{ list: ListProps[] }> = (props) => {
  // console.log(props.list)
  return (
    <ul class={cls.list}>
      {props.list?.map(({ label, value }) => (
        <li>
          <div class={cls.label}>{label}</div>
          <div class={cls.value}>{value}</div>
        </li>
      ))}
    </ul>
  )
}

export default List
