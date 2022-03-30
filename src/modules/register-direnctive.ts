/**
 * 注册全局指令，点击元素外关闭窗口
 */
import type { App } from 'vue'
import { ClickOutside } from 'element-plus'

export const install = (app: App) => {
  app.directive('click-outside', ClickOutside)
}
