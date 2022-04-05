<template>
  <div class="mv-player">
    <video
      class="video"
      :class="{ isShow: isStartPlaying }"
      ref="videoRef"
      controls
    ></video>
    <template v-if="!isStartPlaying">
      <img class="img" :src="mvPicUrl" />
      <div class="play" @click="handlePlayingClick()">
        <SvgIcon name="player-play-empty" size="30" color="#f63434" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { ref, computed, withDefaults } from 'vue'
import { useMediaControls } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    mvUrl: string
    mvPicUrl: string
  }>(),
  {
    mvPicUrl: ''
  }
)

// 是否点击过开始播放按钮、否则图片占位
const isStartPlaying = ref(false)

/**
 * @vueuse/core包引入，使用媒体控制功能，官网 https://vueuse.org/
 * @var playing  是否播放
 */
const mvUrl = computed(() => props.mvUrl)
const videoRef = ref<HTMLVideoElement>()
const { playing } = useMediaControls(videoRef, {
  src: mvUrl
})

// 监听开始播放按钮点击
const handlePlayingClick = () => {
  isStartPlaying.value = true
  playing.value = true
}
</script>

<style lang="less" scoped>
.mv-player {
  position: relative;
  height: 340px;
  .video {
    width: 100%;
    height: 100%;
    display: none;
    &.isShow {
      display: block;
    }
  }
  .img {
    .position(0,0,0,0,absolute);
    width: 100%;
    height: 100%;
  }
  .play {
    .position(50%, 50%, auto, auto, absolute);
    .display-flex(center,center);
    .border-radius(60px);
    transform: translate(50%, -50%);
    background-color: @color-avtive-background-white;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
