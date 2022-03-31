<template>
  <div ref="headerSearchRef" class="header-search">
    <el-input
      v-model="inputValue"
      size="default"
      placeholder="搜索"
      :maxlength="10"
      clearable
      @focus="isFocus = true"
      @keyup.enter="handleInputSearch()"
    >
      <template #prefix>
        <div class="pre-icon">
          <SvgIcon name="search" size="14" />
        </div>
      </template>
    </el-input>
    <!-- vue-teleport 将内部内容嵌套到根标签中，
  不受父组件z-index影响布局，导致此组件出现时覆盖了父组件 -->
    <teleport to="#app">
      <HeaderSearchTags
        v-show="isFocus"
        v-click-outside:[headerSearchRef]="handleClickOutside"
        :searchHotList="searchHotList"
        :searchHistory="searchHistory"
        @handleTagClick="handleTagClick"
      />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'
import HeaderSearchTags from './HeaderSearchTags.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSearchStore, usePlayerStore } from '@/store'

const router = useRouter()
const searchStore = useSearchStore()
const playerStore = usePlayerStore()
const { searchHotList, searchHistory } = storeToRefs(searchStore)

const isFocus = ref(false)
const headerSearchRef = ref<HTMLDivElement>()
/**
 * "onClickOutside" 监听元素外的点击事件
 */
const handleClickOutside = () => {
  isFocus.value = false
}
/**
 * 1:关闭搜索建议框
 * 2:若是输入搜索，存储这次搜索到本地存储
 * 3:如果歌词正在打开，则关闭
 * 4:路由跳转
 */
const inputValue = ref('')
const handleTagClick = (tag: string) => {
  isFocus.value = false
  playerStore.isOpenLyric = false
  searchStore.setSearchHistory(tag)
  router.push({ path: `/search/${tag}` })
}
const handleInputSearch = () => {
  if (inputValue.value === '') return
  isFocus.value = false
  playerStore.isOpenLyric = false
  searchStore.setSearchHistory(inputValue.value)
  router.push({ path: `/search/${inputValue.value}` })
}
</script>

<style lang="less" scoped>
.header-search {
  .display-flex(@align-items:center);
  .pre-icon {
    .icon-search {
      margin-bottom: 4px;
    }
  }
  :deep(.el-input) {
    font-size: @font-size-sm-medium;
  }
  :deep(.el-input__inner) {
    width: 172px;
    height: 28px;
    transition: 0.5s;
    &:focus {
      box-shadow: 0 0 0 1px @color-main inset;
    }
  }
}
</style>
