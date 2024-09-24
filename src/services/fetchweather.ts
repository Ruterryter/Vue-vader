import { DailyWeather } from '@/types'

export class WeatherService {
  static async fetchWeatherData(): Promise<DailyWeather | null> {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=55.4&longitude=12.85&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=1'
      )

      if (!response.ok) {
        throw new Error('Error fetching data')
      }

      const data = await response.json()

      return data.daily as DailyWeather
    } catch (error) {
      console.error('Error fetching data:', error)
      return null
    }
  }
}
