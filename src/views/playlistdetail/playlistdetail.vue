<template>
  <div>1</div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
watchEffect(() => {
  if (route.params.id) {
    console.log(1)
  }
})
</script>

<style scoped></style>
