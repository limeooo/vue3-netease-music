<template>
  <div class="header-theme">
    <el-popover
      placement="bottom"
      :width="200"
      trigger="click"
      :teleported="false"
    >
      <template #reference>
        <SvgIcon name="theme-skin" size="20" />
      </template>
      <div class="theme-list">
        <template v-for="(item, key) in themeMap" :key="key">
          <div class="theme-item" @click="handleChangeTheme(key as string)">
            <div class="color" :style="item.style"></div>
            <div class="title">{{ item.title }}</div>
          </div>
        </template>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import variablesWhite from '@/assets/css/theme/variables-white'
import variablesDark from '@/assets/css/theme/variables-dark'
import variablesRed from '@/assets/css/theme/variables-red'
import { useStorage } from '@vueuse/core'

const THEME_KEY = 'vnext-netease-music-theme'
const themes = {
  white: 'white',
  dark: 'dark',
  red: 'red'
}
const themeMap = {
  [themes.white]: {
    title: '浅白',
    file: variablesWhite,
    style: {
      backgroundColor: '#F6F6F6',
      border: '1px solid #EBEAEA'
    }
  },
  [themes.dark]: {
    title: '深黑',
    file: variablesDark,
    style: {
      backgroundColor: '#202020'
    }
  },
  [themes.red]: {
    title: '深红',
    file: variablesRed,
    style: {
      backgroundColor: '#D33A31'
    }
  }
}

const storageKey = useStorage(THEME_KEY, themes.white)
const handleChangeTheme = (key: string) => {
  storageKey.value = key
  const theme = themeMap[storageKey.value].file
  Object.keys(theme).forEach((key) => {
    const value = theme[key]
    document.documentElement.style.setProperty(key, value)
  })
}
handleChangeTheme(storageKey.value)
</script>

<style lang="less" scoped>
.header-theme {
  .display-flex(@align-items: center);
  .icon-theme-skin {
    cursor: pointer;
  }
  .theme-list {
    .display-flex(space-between);
    padding: 5px 15px;

    .theme-item {
      .display-flex(space-between,center,column);
      cursor: pointer;
      .color {
        height: 24px;
        width: 24px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
