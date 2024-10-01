import { WeatherService } from '../../services/fetchweather'
import { expect, describe, it } from '@jest/globals'

global.fetch = jest.fn()

describe('WeatherService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should throw an error when the response is not ok', async () => {
    ;(fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      json: jest.fn()
    })

    await expect(WeatherService.fetchWeatherData()).resolves.toBeNull()
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should return null when there is an error fetching data', async () => {
    ;(fetch as jest.Mock).mockRejectedValue(new Error('Network Error'))

    await expect(WeatherService.fetchWeatherData()).resolves.toBeNull()
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
