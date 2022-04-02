/**
 * mv 请求类型
 */
export interface IRequestMv {
  limit: number
  offset: number
  area: string
  order: string
  type: string
}

/**
 *  mv列表信息
 */
export interface IMv {
  id: number
  name: string
  playCount: number
  duration: number
  picUrl: string
  artistId: number
  artistName: string
}

/**
 *  mv信息
 */
export interface IMvAll {
  total: number
  more: boolean
  mvs: IMv[]
}
