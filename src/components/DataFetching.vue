
<template>
  <div>
    <VaderNu :items="weatherData" msg: string/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import VaderNu from './VaderNu.vue'
import { DailyWeather } from '../types'

export default defineComponent({
  components: {
    VaderNu
  },
  setup() {
    // const message = ref('Weather Data')
    const weatherData = ref<DailyWeather | null>(null)

    onMounted(() => {
      fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=55.4&longitude=12.85&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=1'
      )
        .then((response) => response.json())
        .then((data) => {
          weatherData.value = data.daily
          console.log(data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    })

    return {
      weatherData
    }
  }
})
</script>
