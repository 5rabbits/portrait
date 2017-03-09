import { React, expect, mount } from 'test/helper'
import Grid from 'shared/Grid'

describe('Grid', () => {
  it('should render with minimum props', () => {
    const component = mount(<Grid />)

    expect(component).to.be.ok
  })
})
