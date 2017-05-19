import { React, toJSON, mount } from 'test/helper'
import EmptyView from 'shared/EmptyView'

describe('EmptyView', () => {
  it('should render with minimum props', () => {
    const component = mount(<EmptyView />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
