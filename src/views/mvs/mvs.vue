<template>
  <div class="mvs">
    <!-- Tabs -->
    <Tabs
      :tabs-config="areaTabsConfig"
      v-model="area"
      title="地区"
      isDividing
    />
    <Tabs
      :tabs-config="typeTabsConfig"
      v-model="type"
      title="类型"
      isDividing
    />
    <Tabs
      :tabs-config="orderTabsConfig"
      v-model="order"
      title="排序"
      isDividing
      class="tabs-finally"
    />
    <!-- Mv列表 -->
    <MvList :mv-list="mvList" />
    <!-- 分页器 -->
    <el-pagination
      v-model:currentPage="currentPage"
      layout="prev, pager, next"
      :total="mvTotal / 4"
      @current-change="getMvsData()"
    />
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/components/tabs/Tabs.vue'
import MvList from '@/components/mv-list/MvList.vue'

import { ref, computed, watch } from 'vue'
import { areaTabsConfig, typeTabsConfig, orderTabsConfig } from './config'
import { storeToRefs } from 'pinia'
import { useMvsStore } from '@/store'

const area = ref('全部')
const type = ref('全部')
const order = ref('上升最快')
const currentPage = ref(1)
const requestParams = computed(() => ({
  area: area.value,
  type: type.value,
  order: order.value
}))

const mvsStore = useMvsStore()
const { mvList, mvTotal } = storeToRefs(mvsStore)

const getMvsData = async () => {
  mvsStore.getMvsData({
    ...requestParams.value,
    offset: (currentPage.value - 1) * 40,
    limit: 40
  })
}
getMvsData()

watch(requestParams, () => {
  currentPage.value = 1
  getMvsData()
})
</script>

<style lang="less" scoped>
.mvs {
  .tabs-finally {
    margin-bottom: 20px;
  }
}
</style>
