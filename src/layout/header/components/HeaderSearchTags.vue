<template>
  <div class="header-search-tags">
    <div class="search-title">热门搜索</div>
    <div class="search-tags">
      <template v-for="item in searchHotList" :key="item">
        <div class="tag" @click="handleTagClick(item)">{{ item }}</div>
      </template>
    </div>
    <template v-if="searchHistory.length > 0">
      <div class="search-title">搜索历史</div>
      <div class="search-tags">
        <template v-for="item in searchHistory" :key="item">
          <div class="tag" @click="handleTagClick(item)">{{ item }}</div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

withDefaults(
  defineProps<{
    searchHotList: string[]
    searchHistory: string[]
  }>(),
  {}
)

const emit = defineEmits(['handleTagClick'])
const handleTagClick = (tag: string) => {
  emit('handleTagClick', tag)
}
</script>

<style lang="less" scoped>
.header-search-tags {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 60px;
  width: 350px;
  z-index: var(--z-index-search);
  background: var(--color-background);
  box-shadow: 5px 5px 5px 2px rgb(0, 0, 0, 0.2);
  padding: 15px 20px;
  .search-title {
    font-size: 12px;
    color: var(--color-text-title-2);
    padding-bottom: 15px;
  }
  .search-tags {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
    .tag {
      font-size: 12px;
      color: var(--color-text);
      padding: 6px 18px;
      margin: 0 5px 10px 0;
      border: 1px solid var(--color-border);
      cursor: pointer;
      &:hover {
        background-color: var(--color-avtive-background-light);
      }
    }
  }
}
</style>
