import { React, toJSON, mount } from 'test/helper'
import EmptyView from 'shared/EmptyView'

describe('EmptyView', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <EmptyView />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should allow to customize all info', () => {
    const component = mount(
      <EmptyView
        icon={<i className="fa fa-search" />}
        title="Some title"
        text="Some title"
        action={<button />}
      />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
