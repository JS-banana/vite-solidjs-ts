import type { Component } from "solid-js"
import cls from "../index.module.less"

// Title
const Title: Component = () => {
  const current = new Date().toJSON().slice(0, 10)
  return (
    <header class={cls.header}>
      <div>数据看板</div>
      <div>
        当前时间： <span>{current}</span>
      </div>
    </header>
  )
}

export default Title
