<template>
  <div>
    <h1>API Data</h1>
    <pre>{{ apiData }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: null
    }
  },
  mounted() {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=55.4&longitude=12.85&current=temperature_2m&forecast_days=1'
    )
      .then((response) => response.json())
      .then((data) => {
        this.apiData = data
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }
}
</script>
