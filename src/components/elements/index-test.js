import 'test/helper'
import * as elements from '.'

describe('elements', () => {
  it('should expose components', () => {
    expect(Object.keys(elements)).toEqual([
      'BlockItem',
    ])
  })
})
