<template>
  <!-- 首页轮播图组件 -->
  <div class="banner">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in bannerList" :key="item.encodeId">
        <el-image :src="item.imageUrl"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import { IBanner } from '@/service/discovery/types'

withDefaults(
  defineProps<{
    bannerList: IBanner[]
  }>(),
  {}
)
</script>
