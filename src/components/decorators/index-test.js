import 'test/helper'
import * as decorators from '.'

describe('decorators', () => {
  it('should expose decorators', () => {
    expect(Object.keys(decorators)).toEqual([
      'controllable',
    ])
  })
})
