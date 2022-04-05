/**
 * 请求类型
 */
export enum SearchType {
  song = '1',
  playlist = '1000',
  mv = '1004',
  radio = '1009'
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
