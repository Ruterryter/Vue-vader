import { formatTimeFromApi } from '../../services/weathercodeTranslator'
import { expect, describe, it } from '@jest/globals'

describe('formatTimeFromApi', () => {
  it('should correctly extract the time in HH:mm format from the API date-time string', () => {
    const apiDateTime = '2024-09-25T14:30'
    const formattedTime = formatTimeFromApi(apiDateTime)

    expect(formattedTime).toBe('14:30')
  })

  it('should handle different valid time formats in HH:mm', () => {
    expect(formatTimeFromApi('2024-09-25T07:00')).toBe('07:00')
    expect(formatTimeFromApi('2024-09-25T23:59')).toBe('23:59')
  })

  it('should return undefined when the API date-time string does not contain a "T"', () => {
    expect(formatTimeFromApi('2024-09-25')).toBeUndefined()
  })

  it('should return undefined when an invalid or empty string is provided', () => {
    expect(formatTimeFromApi('')).toBeUndefined()
    expect(formatTimeFromApi('invalid-string')).toBeUndefined()
  })
})
