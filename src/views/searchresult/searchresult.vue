<template>
  <div class="search-result">
    <!-- 找到结果 标题 -->
    <div class="search-title">
      <span class="keywords">{{ keywords }}</span>
      <span class="total">
        {{ `找到${searchTotal[tabsActiveName] ?? 0}个结果` }}
      </span>
    </div>
    <!-- 歌曲列表 歌单列表切换 -->
    <el-tabs v-model="tabsActiveName" v-if="keywords">
      <el-tab-pane label="歌曲" :name="SearchType.song" lazy>
        <SearchSong
          :keywords="keywords"
          @searchTotalCallback="searchTotalCallback"
        />
      </el-tab-pane>
      <el-tab-pane label="歌单" :name="SearchType.playlist" lazy>
        <SearchPlaylist
          :keywords="keywords"
          @searchTotalCallback="searchTotalCallback"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import SearchSong from './components/SearchSong.vue'
import SearchPlaylist from './components/SearchPlaylist.vue'

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { SearchType } from '@/service/search/types'

const route = useRoute()
const keywords = computed(() => route.params.keywords as string)
const tabsActiveName = ref<SearchType>(SearchType.song)
const searchTotal = ref<any>({})
const searchTotalCallback = (totalParams: {
  key: SearchType
  value: number
}) => {
  searchTotal.value[totalParams.key] = totalParams.value
}
</script>

<style lang="less" scoped>
.search-result {
  .search-title {
    padding: 20px 0;
    .keywords {
      font-size: @font-size-lg-title;
      font-weight: @font-weight-bold;
      margin-right: 4px;
    }
    .total {
      color: var(--font-color-desc);
      font-size: @font-size-sm;
      letter-spacing: 3px;
    }
  }
}
</style>
