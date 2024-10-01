import { getWeatherConditionString } from '../../services/weathercodeTranslator'
import { expect, describe, it } from '@jest/globals'

describe('getWeatherConditionString', () => {
  it('should return the correct weather condition for a valid weather code', () => {
    expect(getWeatherConditionString(0)).toBe('Clear sky')
    expect(getWeatherConditionString(1)).toBe('Mainly clear')
    expect(getWeatherConditionString(3)).toBe('Overcast')
    expect(getWeatherConditionString(45)).toBe('Fog')
    expect(getWeatherConditionString(75)).toBe('Snow fall: Heavy intensity')
    expect(getWeatherConditionString(99)).toBe('Thunderstorm with heavy hail')
  })

  it('should return "No weather conditions available" for an invalid weather code', () => {
    expect(getWeatherConditionString(999)).toBe('No weather conditons avalible')
  })

  it('should handle edge cases correctly', () => {
    expect(getWeatherConditionString(-1)).toBe('No weather conditons avalible')
    expect(getWeatherConditionString(NaN)).toBe('No weather conditons avalible')
  })
})
