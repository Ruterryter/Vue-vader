<script setup lang="ts">
import { NCard } from 'naive-ui'
import { NFlex } from 'naive-ui'
import VaderNu from './VaderNu.vue'
</script>

<template>
  <n-flex justify="center">
    <n-card
      embedded
      :bordered="false"
      title="Todays Weather"
      :segmented="{
        content: true,
        footer: 'soft'
      }"
    >
      <template #header-extra>Skanör</template>

      <template #action> <VaderNu /></template>
    </n-card>
  </n-flex>
</template>

<style scoped>
.n-card {
  max-width: 500px;
  background-color: rgba(32, 128, 240, 0.6);
}
</style>
