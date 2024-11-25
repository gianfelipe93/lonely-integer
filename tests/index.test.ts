import { describe, it, expect } from '@jest/globals'
import { getLonelyInteger } from '../index'
describe('getLonelyInteger', () => {
  it('should return 2', () => {
    expect(getLonelyInteger([0, 0, 1, 2, 1])).toEqual(2)
  })

  it('should return 1', () => {
    expect(getLonelyInteger([1])).toEqual(1)
  })

  it('should return 2', () => {
    expect(getLonelyInteger([1, 1, 2])).toEqual(2)
  })

  it('should return 4', () => {
    expect(getLonelyInteger([1, 2, 3, 4, 3, 2, 1])).toEqual(4)
  })
})