<template>
  <div>{{ keywords }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const keywords = computed(() => route.params.keywords)
</script>

<style scoped></style>
