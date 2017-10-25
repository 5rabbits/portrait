import 'test/helper'
import * as main from '.'

describe('main', () => {
  it('should expose components', () => {
    expect(Object.keys(main)).toEqual([
      'Layout',
      'Navigation',
      'NavigationItem',
      'Section',
      'SectionToolbar',
    ])
  })
})
