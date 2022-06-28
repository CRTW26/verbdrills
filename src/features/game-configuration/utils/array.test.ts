import { findValue } from './array'

const array = [{ value: 'abc' }, { value: 'def' }, { value: 'ghj' }]

describe('findValue()', () => {
  it('should find value in array', () => {
    const expected = { value: 'abc' }
    const actual = findValue(array, 'abc')

    expect(actual).toEqual(expected)
  })
})
