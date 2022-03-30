<template>
  <div class="player-list" :class="{ 'is-hidden': !isOpenPlayerList }">
    <!-- <div class="header">
        <div class="close" @click="handleClosePlayerList()">
          <SvgIcon name="close" size="16" />
        </div>
        <div class="delete-all" @click="handleDeletePlayerSong(-1)">
          <SvgIcon name="rubbish" />
          <span>清除</span>
        </div>
      </div> -->
    <div class="list">
      <template v-if="currentPlayerSongList.length === 0">
        <el-empty description="列表为空～" />
      </template>
      <template v-for="(item, index) in currentPlayerSongList" :key="item.id">
        <div class="list-item">
          <div
            class="list-item__info"
            :class="{ isActive: currentPlayerSong.id === item.id }"
            @click="handlePlayListItemClick(index)"
          >
            <span class="text order">{{ padZero(index + 1) }}</span>
            <span class="text name text-ellipsis">{{ item.name }}</span>
            <span class="text artists text-ellipsis">{{ item.artists }}</span>
            <span class="text time">{{ formatDuration(item.duration) }}</span>
          </div>
          <!-- <a
              :href="`https://music.163.com/song/media/outer/url?id=${item.id}.mp3`"
              target="_blank"
            >
              <SvgIcon name="download" size="25" />
            </a>
            <div class="list-item__icon" @click="handleDeletePlayerSong(index)">
              <SvgIcon name="delete" size="22" style="margin: 0 0 5.5px 3px" />
            </div> -->
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDuration, padZero } from '@/utils'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'

const playerStore = usePlayerStore()
const { isOpenPlayerList, currentPlayerSong, currentPlayerSongList } =
  storeToRefs(playerStore)

// 监听播放列表点击切换音乐
const handlePlayListItemClick = (index: number) => {
  playerStore.currentPlayerSongIndex = index
  playerStore.setCurrentPlayerSong()
}

// // 监听删除播放列表歌曲
// const handleDeletePlayerSong = (index: number) => {
//   playerStore.deletePlayerSong(index)
// }
</script>

<style lang="less" scoped>
.player-list {
  width: 450px;
  height: calc(100vh - 62px);
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 62px;
  z-index: var(--z-index-player-list);
  background: var(--color-background);
  box-shadow: 5px 5px 5px 2px rgb(0, 0, 0, 0.2);
  padding: 15px 20px;
  transform: translateY(0);
  transition: all 0.5s;
  overflow: hidden;
  overflow-y: auto;
  &.is-hidden {
    transform: translateY(150%);
  }
  .header {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    .close {
      cursor: pointer;
    }
    .delete-all {
      font-size: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        padding-left: 3px;
        letter-spacing: 2px;
      }
    }
  }
  .list {
    padding-top: 8px;
    .list-item {
      display: flex;
      justify-content: space-between;
      .list-item__icon {
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .list-item__info {
        width: calc(100%);
        padding: 8px 0;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        .text {
          font-size: 12px;
          color: var(--color-text);
        }
        .order,
        .time {
          width: 40px;
        }
        .artists,
        .name {
          flex: 1;
          padding-right: 20px;
        }
        &:hover {
          background-color: var(--color-avtive-background-light);
        }
        &.isActive {
          .text {
            color: var(--color-main);
          }
        }
      }
    }
  }
}
</style>
