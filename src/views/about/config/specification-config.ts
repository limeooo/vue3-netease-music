import { IDescription } from '@/global/types'

export const namingSpecification: IDescription[] = [
  {
    name: '文件夹',
    value: '统一小写, 多个单词使用-分割'
  },
  {
    name: '文件(.ts .d.ts)',
    value: '统一小写, 多个单词使用-分割'
  }
]

export const componentsSpecification: IDescription[] = [
  {
    name: '组件的名称',
    value: '页面使用小写多个单词不分割, 页面组件使用驼峰式'
  },
  {
    name: '组件的目录结构',
    value:
      '组件的子组件均放置在当前目录的components文件夹下, 其他文件同理, 并在index.ts导出'
  },
  {
    name: '组件导包顺序',
    value:
      '导本地的组件, 导vue技术栈的包, 导第三方的工具函数, 导本地的工具函数, 导本地类型接口'
  },
  { name: 'template标签', value: '驼峰式 ( 例如：<SongList /> )' },
  {
    name: 'template标签属性顺序',
    value: 'v-if, v-for, ref, class, props, event'
  },
  {
    name: '组件的样式',
    value: '作用域：scoped, lang = less  ; 类名：统一小写, 多个单词使用-分割'
  }
]

export const gitSpecification: IDescription[] = [
  { name: 'add 操作', value: 'git add ' },
  { name: 'commit 操作', value: 'npm run commit ' },
  { name: 'pull 操作', value: 'git pull ' },
  { name: 'push 操作', value: 'git push ' }
]
