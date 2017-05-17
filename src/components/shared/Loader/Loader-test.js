import { React, expect, mount } from 'test/helper'
import Loader from 'shared/Loader'

describe('Loader', () => {
  it('should render with minimum props', () => {
    const component = mount(<Loader />)

    expect(component).to.be.ok
  })
})
