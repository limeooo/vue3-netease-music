/**
 * 获取 最近热门搜索 和 最近搜索 存储到store中
 */
import { useSearchStore } from '@/store'

export const install = () => {
  const searchStore = useSearchStore()
  searchStore.getSearchHot()
  searchStore.getSearchHistory()
}
