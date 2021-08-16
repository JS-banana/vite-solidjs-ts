import { onMount, onCleanup, createSignal } from "solid-js"
import type { Component } from "solid-js"
import { getCurrentTime } from "../utils"
import cls from "../index.module.less"

// Title
const Title: Component = () => {
  let timer
  const [current, setCurrent] = createSignal(getCurrentTime())

  onMount(() => {
    timer = setInterval(() => {
      setCurrent(getCurrentTime())
    }, 1000)
  })

  onCleanup(() => {
    clearInterval(timer)
  })

  return (
    <header class={cls.header}>
      <div>数据看板</div>
      <div>
        当前时间： <span>{current()}</span>
      </div>
    </header>
  )
}

export default Title
