import { React, toJSON, mount } from 'test/helper'
import PropTypes from 'prop-types'
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

  describe('if context.toggleFilters is defined', () => {
    it('should render the close filters link', () => {
      const component = mount(
        <FiltersForm>
          Test
        </FiltersForm>,
        {
          context: {
            toggleFilters: () => {},
          },
          childContextTypes: {
            toggleFilters: PropTypes.func,
          },
        },
      )

      expect(toJSON(component)).toMatchSnapshot()
    })
  })
})
