/**
 * 请求类型
 */
export enum SearchType {
  song = '1',
  playlist = '1000'
}

/**
 * 请求数据 搜索参数
 */
export interface ISearchParams {
  keywords: string
  offset: number
  type: SearchType
  limit: number
}
