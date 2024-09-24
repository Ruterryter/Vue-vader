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
      <template #header-extra>
        <div class="headerExtraStyle">Skanör</div>
      </template>
      <template #action> <VaderNu /></template>
    </n-card>
  </n-flex>
</template>

<style scoped>
.n-card {
  font-family: 'Courier New', Courier, monospace;
  margin-top: 50px;
  max-width: 500px;
  background-color: rgba(32, 128, 240, 0.6);
  box-shadow: 10px 10px 5px grey;
}

.n-card-header_main {
  font-weight: bold;
}

.headerExtraStyle {
  font-style: italic;
  font-weight: 700;
}
</style>
