/**
 * 获取本地存储的用户UID，如果存在则获取用户数据
 */
import { useUserStore } from '@/store'

export const install = () => {
  const userStore = useUserStore()
  const uid = userStore.getUserId()
  if (uid && uid !== 0) userStore.getUserData(uid)
}
