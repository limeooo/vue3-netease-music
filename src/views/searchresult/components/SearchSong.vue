<template>
  <div v-if="searchSong.songs?.length > 0">
    <SongList :song-list="searchSong.songs" />
    <el-pagination
      v-if="searchSong.total / 30 > 1"
      v-model:currentPage="currentPage"
      layout="prev, pager, next"
      :total="searchSong.total / 3"
      @current-change="requestSearchSong()"
    />
  </div>
</template>

<script setup lang="ts">
import SongList from '@/components/song-list/SongList.vue'

import { ref, watch, withDefaults } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/store'
import { SearchType } from '@/service/search/types'

const props = withDefaults(
  defineProps<{
    keywords: string
  }>(),
  {}
)

const currentPage = ref(1)

const searchStore = useSearchStore()
const { searchSong } = storeToRefs(searchStore)

const requestSearchSong = () => {
  searchStore.getSearchResult({
    keywords: props.keywords,
    type: SearchType.song,
    offset: (currentPage.value - 1) * 30,
    limit: 30
  })
}
watch(
  () => props.keywords,
  () => {
    if (props.keywords) {
      currentPage.value = 1
      requestSearchSong()
    }
  },
  {
    immediate: true
  }
)

const emit = defineEmits(['searchTotalCallback'])
watch(searchSong, () => {
  emit('searchTotalCallback', {
    key: SearchType.song,
    value: searchSong.value.total
  })
})
</script>
