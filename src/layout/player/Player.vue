<template>
  <div class="player">
    <!-- 歌曲详情 -->
    <div class="player-left">
      <PlayerInfo
        v-if="playSong.id"
        :play-song="playSong"
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
    <audio ref="audioRef" :loop="true" :autoplay="true" />
    <!-- 音乐进度条 -->
    <PlayerProgress v-model:current-time="currentTime" :duration="duration" />
  </div>
</template>

<script setup lang="ts">
import PlayerInfo from './components/PlayerInfo.vue'
import PlayerControl from './components/PlayerControl.vue'
import PlayerVolume from './components/PlayerVolume.vue'
import PlayerProgress from './components/PlayerProgress.vue'

import { ref, computed } from 'vue'
import { usePlayerStore } from '@/store'
import { useMediaControls } from '@vueuse/core'

const playerStore = usePlayerStore()
const playSong = computed(() => playerStore.currentPlayerSong)
const playerSongSrc = computed(() => {
  return playSong.value.id
    ? `https://music.163.com/song/media/outer/url?id=${playSong.value.id}.mp3`
    : ''
})

/**
 * @var playing  是否播放
 * @var currentTime 播放时间
 * @var duration 总时间
 * @var volume 音量
 */
const audioRef = ref<HTMLVideoElement>()
const { playing, currentTime, duration, volume } = useMediaControls(audioRef, {
  src: playerSongSrc
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
  z-index: 99;
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
