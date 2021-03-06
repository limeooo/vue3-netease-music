import request from '../index'
import {
  translateSearchHot,
  translateSearchSong,
  translateSearchPlaylist,
  translateSearchMv
} from './translate'
import { SearchType } from './types'
import type { ISearchParams } from './types'
import type { ISongAll } from '@/service/song/types'
import type { IPlaylistAll } from '@/service/playlist/types'
import type { IMvAll } from '@/service/mv/types'

enum REQUEST_URL {
  Search = '/cloudsearch',
  SearchHot = '/search/hot'
}

// 搜索歌曲
const searchSong = (params: ISearchParams) =>
  request.get<ISongAll>({
    url: REQUEST_URL.Search,
    params: params,
    interceptors: {
      responseInterceptor(res: any): ISongAll {
        return translateSearchSong(res)
      }
    }
  })

// 搜索歌单
const searchPlaylist = (params: ISearchParams) =>
  request.get<IPlaylistAll>({
    url: REQUEST_URL.Search,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IPlaylistAll {
        return translateSearchPlaylist(res)
      }
    }
  })

// 搜索Mv
const searchMv = (params: ISearchParams) =>
  request.get<IMvAll>({
    url: REQUEST_URL.Search,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IMvAll {
        return translateSearchMv(res)
      }
    }
  })

// 搜索
export function requestSearch(params: ISearchParams) {
  switch (params.type) {
    case SearchType.song:
      return searchSong(params)
    case SearchType.playlist:
      return searchPlaylist(params)
    case SearchType.mv:
      return searchMv(params)
  }
}

// 获取最近热门搜索
export function requestSearchHot() {
  return request.get<string[]>({
    url: REQUEST_URL.SearchHot,
    interceptors: {
      responseInterceptor(res: any): string[] {
        return translateSearchHot(res)
      }
    }
  })
}
