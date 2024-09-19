<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { DailyWeather } from '../types'

const props = defineProps<{
  items?: DailyWeather
}>()

const defaultItems: DailyWeather = {
  temperature_2m_max: [],
  temperature_2m_min: [],
  sunrise: [],
  sunset: [],
  weather_code: []
}

const items = computed(() => props.items || defaultItems)
</script>

<template>
  <div class="greetings">
    <h1 class="green">Skanör</h1>
    <p>Skriv ut: datum, översätt väderkod, temp, max och min, soluppgång, solnedgång,</p>
    <div>
      <h2>Dagens väder</h2>
      <ul v-if="items && items.temperature_2m_max.length">
        <li v-for="(item, index) in items.temperature_2m_max" :key="index">
          <p>Max Temperature: {{ item }}°C</p>
          <p>Min Temperature: {{ items.temperature_2m_min[index] }}°C</p>
          <p>Sunrise: {{ items.sunrise[index] }}</p>
          <p>Sunset: {{ items.sunset[index] }}</p>
          <p>Weather Code: {{ items.weather_code[index] }}</p>
        </li>
      </ul>
      <p v-else>No data available</p>
    </div>

    <template>
      <div></div>
    </template>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
