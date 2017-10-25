import 'test/helper'
import * as icons from '.'

describe('icons', () => {
  it('should expose components', () => {
    expect(Object.keys(icons)).toEqual([
      'Search',
    ])
  })
})
