import requset from '../index'
import {
  translateSearchHot,
  translateSearchSong,
  translateSearchPlaylist
} from './translate'
import { SearchType } from './types'
import type { ISearchParams } from './types'
import type { ISongAll } from '@/service/song/types'
import type { IPlaylistAll } from '@/service/playlist/types'

enum REQUEST_URL {
  Search = '/search',
  SearchHot = '/search/hot'
}

// 搜索歌曲
const searchSong = (params: ISearchParams) =>
  requset.get<ISongAll>({
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
  requset.get<IPlaylistAll>({
    url: REQUEST_URL.Search,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IPlaylistAll {
        return translateSearchPlaylist(res)
      }
    }
  })

// 搜索
export function requsetSearch(params: ISearchParams) {
  switch (params.type) {
    case SearchType.song:
      return searchSong(params)
    case SearchType.playlist:
      return searchPlaylist(params)
  }
}

// 获取最近热门搜索
export function requestSearchHot() {
  return requset.get<string[]>({
    url: REQUEST_URL.SearchHot,
    interceptors: {
      responseInterceptor(res: any): string[] {
        return translateSearchHot(res)
      }
    }
  })
}
