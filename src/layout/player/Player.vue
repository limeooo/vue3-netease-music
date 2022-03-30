<template>
  <div class="player">
    <!-- 歌曲详情 -->
    <div class="player-left">
      <PlayerInfo
        v-if="currentPlayerSong.id"
        :current-time="currentTime"
        :duration="duration"
      />
    </div>
    <!-- 歌曲控制器 -->
    <div class="player-center">
      <PlayerControl v-model:playing="playing" />
    </div>
    <!-- 音量控制器 -->
    <div class="player-right">
      <PlayerVolume v-model:volume="volume" />
    </div>
    <!-- 播放标签 -->
    <audio ref="audioRef" :loop="false" :autoplay="true" />
    <!-- 音乐进度条 -->
    <PlayerProgress v-model:current-time="currentTime" :duration="duration" />
    <!-- 歌曲歌词 评论详情 -->
    <PlayerLyric v-model:currentTime="currentTime" v-model:playing="playing" />
  </div>
</template>

<script setup lang="ts">
import PlayerInfo from './components/PlayerInfo.vue'
import PlayerControl from './components/PlayerControl.vue'
import PlayerVolume from './components/PlayerVolume.vue'
import PlayerProgress from './components/PlayerProgress.vue'
import PlayerLyric from './components/PlayerLyric.vue'

import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'
/**
 * @vueuse/core包引入，使用媒体控制功能，官网 https://vueuse.org/
 */
import { useMediaControls } from '@vueuse/core'

const playerStore = usePlayerStore()
const { currentPlayerSong } = storeToRefs(playerStore)
// 设置当前播放音乐src地址
const currentPlayerSongSrc = computed(() => {
  return currentPlayerSong.value.id
    ? `https://music.163.com/song/media/outer/url?id=${currentPlayerSong.value.id}.mp3`
    : ''
})

/**
 * @var playing  是否播放
 * @var currentTime 播放时间
 * @var duration 总时间
 * @var volume 音量
 * @var ended 是否播放完毕
 */
const audioRef = ref<HTMLVideoElement>()
const { playing, currentTime, duration, volume, ended } = useMediaControls(
  audioRef,
  {
    src: currentPlayerSongSrc
  }
)

// 监听歌曲播放完毕切换下一首
watch(ended, (isEnd) => {
  if (isEnd) {
    // 切换当前播放歌曲
    playerStore.togglePlayerSong(1)
    // 是否已播放完毕重置为false
    ended.value = false
    // 是否播放重置为ture
    playing.value = true
  }
})
</script>

<style lang="less" scoped>
.player {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: var(--color-background);
  padding: 5px 20px;
  display: flex;
  z-index: var(--z-index-player);
  .player-left,
  .player-center,
  .player-right {
    display: flex;
    flex: 1;
    align-items: center;
    height: 50px;
  }
  .player-left {
    justify-content: flex-start;
  }
  .player-center {
    justify-content: center;
  }
  .player-right {
    justify-content: flex-end;
  }
}
</style>
