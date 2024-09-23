export interface DailyWeather {
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  sunrise: string[]
  sunset: string[]
  weather_code: number[]
  time: number[]
}

export interface WeatherApiResponse {
  daily: DailyWeather
}
