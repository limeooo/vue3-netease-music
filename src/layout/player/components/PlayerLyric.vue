<template>
  <!-- vue-teleport 将内部内容嵌套到根标签中，
  不受父组件z-index影响布局，导致此组件出现时覆盖了父组件 -->
  <teleport to="#app">
    <div class="player-lyric" :class="{ 'is-hidden': !isOpenLyric }">
      <div class="content">
        <div class="lyric">
          <div class="cd">
            <div class="cd-inner">
              <img
                class="cd-image"
                :src="thumbnail(currentPlayerSong.picUrl, 400)"
                :class="{ 'is-pause': !playing }"
              />
            </div>
          </div>
          <div
            ref="scrollLyricRef"
            class="info"
            v-if="lyricData && lyricData.length > 0"
          >
            <template
              v-for="(item, index) in lyricData"
              :key="item.timestamp + index"
            >
              <p
                class="lyric__line"
                :class="{ 'is-playing': lyricInstance?.curIndex() === index }"
                @click="handleLyricLineClick(item.timestamp)"
              >
                {{ item.content }}
              </p>
            </template>
          </div>
        </div>
        <CommentList
          v-if="isLodingComment && currentPlayerSong.id"
          :id="currentPlayerSong.id"
          :type="CommentType.song"
        />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import CommentList from '@/components/comment-list/CommentList.vue'

import { ref, watch, withDefaults, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'
import { thumbnail } from '@/utils'
import { CommentType } from '@/service/comment/types'
/**
 * 引入lrc-kit 歌词解析器 https://github.com/weirongxu/lrc-kit
 */
import { Lrc, Runner, Lyric } from 'lrc-kit'

const props = withDefaults(
  defineProps<{
    playing: boolean
    currentTime: number
  }>(),
  {}
)

const playerStore = usePlayerStore()
const { currentPlayerSong, currentLyric, isOpenLyric, isLodingComment } =
  storeToRefs(playerStore)

const lyricData = ref<Lyric[]>() //歌词数据
const lyricInstance = ref<Runner>() //歌词实例
const lyricCurrentIndex = ref<number>(0) //歌词当前播放的行数

const scrollLyricRef = ref<HTMLDivElement>() //  歌词dom对象
const scrollLineRefs = ref<HTMLElement[]>() //  每一行歌词dom对象数组

/**
 * 不知道是否是因为lyricData是动态值的问题
 * 导致此处参照vue官网用lyricData去for循环获取的ref对象有各种莫名其妙的问题
 * 例如 ： 1:无限循环调用setLineRef函数，虽然可以使用if判断暂时解决
 *       2:调用setLineRef函数获取的el元素是乱序的，不是从lyricData第一个开始循环的顺序
 *         然而实际渲染出来的顺序又是正常的，这导致在后续使用el元素去获取高度的时候，
 *        无法正确获取对应歌词的高度来进行跳转
 *  所以最后决定不使用ref对象来获取dom元素，使用document.querySelectorAll('.lyric__line')获取
 * const setLineRef = (el: HTMLElement) => {
 *  if ( el &&
 *       lyricData.value &&
 *       scrollLineRefs.value.length < lyricData.value.length)
 *    scrollLineRefs.value.push(el)
 *  }
 */

/**
 * 监听歌词点击 更换进度
 */
const emit = defineEmits(['update:currentTime', 'update:playing'])
const handleLyricLineClick = (time: number) => {
  emit('update:currentTime', time)
  emit('update:playing', true)
}
/**
 * 监听歌词变换更新数据
 */
watch(currentLyric, (lyric) => {
  lyricInstance.value = new Runner(Lrc.parse(lyric))
  lyricData.value = lyricInstance.value.getLyrics()
  nextTick(() => {
    scrollLineRefs.value = document.querySelectorAll(
      '.lyric__line'
    ) as any as HTMLElement[]
  })
})
/**
 * 监听当前播放时间更新当前歌词进度
 */
watch(
  () => props.currentTime,
  (time) => {
    if (lyricInstance.value) {
      lyricInstance.value.timeUpdate(time)
      lyricCurrentIndex.value = lyricInstance.value.curIndex()
    }
  }
)
/**
 * 监听当前歌词行数更换位置
 */
watch(lyricCurrentIndex, (index) => {
  if (
    scrollLineRefs.value &&
    scrollLyricRef.value &&
    scrollLyricRef.value.scrollTop
  ) {
    const currentDom = scrollLineRefs.value[index]
    scrollLyricRef.value.scrollTop =
      currentDom.offsetTop - 200 + currentDom.offsetHeight / 2
  }
})
</script>

<style lang="less" scoped>
.player-lyric {
  .position(50px, 0, 62px, 0);
  z-index: @z-index-player-lyric;
  background-color: var(--layout-playerlyric-bgcolor);
  height: calc(100vh - 50px - 62px);
  transform: translateY(0);
  transition: all 0.5s;
  overflow: hidden;
  overflow-y: auto;
  &.is-hidden {
    transform: translateY(150%);
  }
  .content {
    height: 100%;
    max-width: 870px;
    margin: 0 auto;
    .lyric {
      .display-flex(center,center);
      height: 400px;
      margin: 60px auto;
      .cd {
        .display-flex(center,center);
        .border-radius(350px);
        background-color: #e6e5e6;
        .cd-inner {
          .display-flex(center,center);
          .border-radius(330px);
          background: linear-gradient(-45deg, #333540, #070708, #333540);
          .cd-image {
            .border-radius(220px);
            animation: rotate 20s linear infinite;
            &.is-pause {
              animation-play-state: paused;
            }
          }
        }
      }
      .info {
        padding: 0 30px;
        width: 400px;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }
        .lyric__line {
          color: var(--font-color);
          font-size: @font-size-sm;
          text-align: center;
          cursor: pointer;
          line-height: 15px;
          margin-bottom: 20px;
          &.is-playing {
            color: var(--font-color-title);
            font-size: @font-size;
            font-weight: @font-weight-bold;
          }
        }
      }
    }
    :deep(.el-pagination) {
      .btn-prev,
      .btn-next,
      .number,
      .more {
        background-color: var(--layout-playerlyric-bgcolor);
      }
    }
  }
}
</style>
