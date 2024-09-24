<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { WeatherService } from '../services/fetchweather'
import { DailyWeather } from '@/types'
import {
  getWeatherConditionString,
  formatTimeFromApi,
  getAverageTemperature
} from '../services/weathercodeTranslator'

const dailyWheather = ref<DailyWeather | null>(null)
const formattedTime = formatTimeFromApi
const maxTemp = ref<number[]>([])
const minTemp = ref<number[]>([])
const averageTemp = ref<number | null>(null)

onMounted(async () => {
  dailyWheather.value = await WeatherService.fetchWeatherData()

  if (dailyWheather.value) {
    maxTemp.value = dailyWheather.value.temperature_2m_max
    minTemp.value = dailyWheather.value.temperature_2m_min

    averageTemp.value = getAverageTemperature(maxTemp.value, minTemp.value)
  }
})

defineExpose({
  dailyWheather
})

const translateWeatherCondition = (weatherCode: number): string => {
  return getWeatherConditionString(weatherCode)
}
</script>

<template>
  <div>
    <div class="today">
      <ul v-if="dailyWheather && dailyWheather.temperature_2m_max.length">
        <li v-for="(item, index) in dailyWheather.temperature_2m_max" :key="index">
          <h4>{{ dailyWheather.time[0] }}</h4>
          <p v-if="averageTemp !== null">Average Temperature: {{ averageTemp }}°C</p>
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
  </div>
</template>

<style lang="sass"></style>
