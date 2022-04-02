/**
 * 用户信息 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { requestUserInfo, requestUserPlaylistInfo } from '@/service/user'
import type { IUserPlaylistInfo } from '@/service/user/types'

const UID_KEY = 'vnext-netease-music-uid'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      isLogin: false,
      userName: '你好啊 点我登录哦',
      userAvatar: '',
      createPlaylist: [] as IUserPlaylistInfo[],
      collectPlaylist: [] as IUserPlaylistInfo[]
    }
  },
  actions: {
    getUserId() {
      return useLocalStorage(UID_KEY, 0).value
    },
    async getUserData(uid: number) {
      const userInfo = await requestUserInfo({ uid })
      const userPlaylist = await requestUserPlaylistInfo({ uid, limit: 1000 })
      this.$patch((state) => {
        state.isLogin = true
        state.userName = userInfo.name
        state.userAvatar = userInfo.avatar
        state.createPlaylist = userPlaylist.createPlaylist
        state.collectPlaylist = userPlaylist.collectPlaylist
      })
      const _uid = useLocalStorage(UID_KEY, uid)
      _uid.value = uid
    },
    resetUserData() {
      this.$reset()
      const _uid = useLocalStorage(UID_KEY, 0)
      _uid.value = 0
    }
  }
})

export default useUserStore
