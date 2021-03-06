// Tabs 类型
export interface ITabsConfig {
  label: string
  value: string | number
}

/**
 * 分页查询
 */
export interface IMultiPageConfig {
  limit?: string | number
  offset?: string | number
}

/**
 * description描述类型
 */
export interface IDescription {
  name: string
  value: string
}
