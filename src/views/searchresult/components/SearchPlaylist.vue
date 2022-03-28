<template>
  <div v-if="searchPlaylist.playlists?.length > 0">
    <PlayList :playlist="searchPlaylist.playlists" />
    <el-pagination
      v-if="searchPlaylist.total / 30 > 1"
      v-model:currentPage="currentPage"
      layout="prev, pager, next"
      :total="searchPlaylist.total / 3"
      @current-change="requestSearchPlaylist()"
    />
  </div>
</template>

<script setup lang="ts">
import PlayList from '@/components/play-list/PlayList.vue'

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
const { searchPlaylist } = storeToRefs(searchStore)

const requestSearchPlaylist = () => {
  searchStore.getSearchResult({
    keywords: props.keywords,
    type: SearchType.playlist,
    offset: (currentPage.value - 1) * 30,
    limit: 30
  })
}
watch(
  () => props.keywords,
  () => {
    if (props.keywords) {
      currentPage.value = 1
      requestSearchPlaylist()
    }
  },
  {
    immediate: true
  }
)

const emit = defineEmits(['searchTotalCallback'])
watch(searchPlaylist, () => {
  emit('searchTotalCallback', {
    key: SearchType.playlist,
    value: searchPlaylist.value.total
  })
})
</script>
