import { React, toJSON, mount } from 'test/helper'
import FiltersForm from 'shared/FiltersForm'

describe('FiltersForm', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <FiltersForm>
        Test
      </FiltersForm>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
