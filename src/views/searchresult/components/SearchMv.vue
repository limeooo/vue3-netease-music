<template>
  <div class="search-mv" v-if="searchMv.mvs?.length > 0">
    <MvList :mv-list="searchMv.mvs" />
    <el-pagination
      v-if="searchMv.total / 40 > 1"
      v-model:currentPage="currentPage"
      layout="prev, pager, next"
      :total="searchMv.total / 4"
      @current-change="requestSearchPlaylist()"
    />
  </div>
</template>

<script setup lang="ts">
import MvList from '@/components/mv-list/MvList.vue'

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
const { searchMv } = storeToRefs(searchStore)

const requestSearchPlaylist = () => {
  searchStore.getSearchResult({
    keywords: props.keywords,
    type: SearchType.mv,
    offset: (currentPage.value - 1) * 40,
    limit: 40
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
watch(searchMv, () => {
  emit('searchTotalCallback', {
    key: SearchType.mv,
    value: searchMv.value.total
  })
})
</script>
