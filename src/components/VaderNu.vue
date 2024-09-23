<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { WeatherService } from '../services/fetchWheater'
import { DailyWeather } from '@/types'
import { getWeatherConditionString, formatTimeFromApi } from '../services/wheatercodeTranslator'

const dailyWheather = ref<DailyWeather | null>(null)

const formattedTime = formatTimeFromApi

onMounted(async () => {
  dailyWheather.value = await WeatherService.fetchWeatherData()
})

defineExpose({
  dailyWheather
})

const translateWeatherCondition = (weatherCode: number): string => {
  return getWeatherConditionString(weatherCode)
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Skanör</h1>
    <div>
      <h2>Todays Weather</h2>
      <ul v-if="dailyWheather && dailyWheather.temperature_2m_max.length">
        <li v-for="(item, index) in dailyWheather.temperature_2m_max" :key="index">
          <h3>{{ dailyWheather.time[0] }}</h3>
          <p>Max Temperature: {{ item }}°C</p>
          <p>Min Temperature: {{ dailyWheather.temperature_2m_min[index] }}°C</p>
          <p>Sunrise: {{ formattedTime(dailyWheather.sunrise[index]) }}</p>
          <p>Sunset: {{ formattedTime(dailyWheather.sunset[index]) }}</p>
          <p>
            Weather Condition: {{ translateWeatherCondition(dailyWheather.weather_code[index]) }}
          </p>
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
