import { React, expect, mount } from 'test/helper'
import EmptyView from 'shared/EmptyView'

describe('EmptyView', () => {
  it('should render with minimum props', () => {
    const component = mount(<EmptyView />)

    expect(component).to.be.ok
  })
})
