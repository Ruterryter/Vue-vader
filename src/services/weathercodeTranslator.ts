const weatherConditions: { [key: string]: string } = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Drizzle: Light intensity',
  53: 'Drizzle: Moderate intensity',
  55: 'Drizzle: Dense intensity',
  56: 'Freezing Drizzle: Light intensity',
  57: 'Freezing Drizzle: Dense intensity',
  61: 'Rain: Slight intensity',
  63: 'Rain: Moderate intensity',
  65: 'Rain: Heavy intensity',
  66: 'Freezing Rain: Light intensity',
  67: 'Freezing Rain: Heavy intensity',
  71: 'Snow fall: Slight intensity',
  73: 'Snow fall: Moderate intensity',
  75: 'Snow fall: Heavy intensity',
  77: 'Snow grains',
  80: 'Rain showers: Slight intensity',
  81: 'Rain showers: Moderate intensity',
  82: 'Rain showers: Violent intensity',
  85: 'Snow showers: Slight intensity',
  86: 'Snow showers: Heavy intensity',
  95: 'Thunderstorm: Slight or moderate intensity',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail'
}

export function getWeatherConditionString(weatherCode: number): string {
  for (const key in weatherConditions) {
    const codes = key.split(',').map((code) => Number(code.trim()))
    if (codes.includes(weatherCode)) {
      return weatherConditions[key]
    }
  }
  return 'No weather conditons avalible'
}

export function formatTimeFromApi(apiDateTime: string): string {
  return apiDateTime.split('T')[1]
}

export function getAverageTemperature(maxTemps: number[], minTemps: number[]): number {
  if (maxTemps.length === 0 || minTemps.length === 0) {
    throw new Error('Temperature arrays cannot be empty')
  }

  const maxTemp = maxTemps[0]
  const minTemp = minTemps[0]
  const average = (maxTemp + minTemp) / 2

  return parseFloat(average.toFixed(1))
}
