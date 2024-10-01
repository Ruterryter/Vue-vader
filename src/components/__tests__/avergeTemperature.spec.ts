import { getAverageTemperature } from '../../services/weathercodeTranslator'
import { expect, describe, it } from '@jest/globals'

describe('getAverageTemperature', () => {
  it('should correctly calculate the average temperature from max and min temperatures', () => {
    const maxTemps = [30]
    const minTemps = [20]

    const averageTemp = getAverageTemperature(maxTemps, minTemps)

    expect(averageTemp).toBe(25.0)
  })

  it('should round the average temperature to one decimal place', () => {
    const maxTemps = [32.5]
    const minTemps = [20.1]

    const averageTemp = getAverageTemperature(maxTemps, minTemps)

    expect(averageTemp).toBe(26.3)
  })

  it('should throw an error if maxTemps array is empty', () => {
    expect(() => {
      getAverageTemperature([], [20])
    }).toThrow('Temperature arrays cannot be empty')
  })

  it('should throw an error if minTemps array is empty', () => {
    expect(() => {
      getAverageTemperature([30], [])
    }).toThrow('Temperature arrays cannot be empty')
  })

  it('should handle negative temperatures', () => {
    const maxTemps = [-5]
    const minTemps = [-15]

    const averageTemp = getAverageTemperature(maxTemps, minTemps)

    expect(averageTemp).toBe(-10.0)
  })
})
