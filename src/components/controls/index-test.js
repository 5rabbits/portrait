import 'test/helper'
import * as controls from '.'

describe('controls', () => {
  it('should expose components', () => {
    expect(Object.keys(controls)).toEqual([
      'Button',
      'LayoutLink',
      'RoundButton',
      'SearchInput',
      'Select',
      'Selectable',
    ])
  })
})
