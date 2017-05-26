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
    class Wrapper extends React.Component {
      static childContextTypes = {
        toggleFilters: PropTypes.func,
      }

      getChildContext() {
        return {
          toggleFilters: () => {},
        }
      }

      render() {
        return this.props.children
      }
    }

    it('should render the close filters link', () => {
      const component = mount(
        <Wrapper>
          <FiltersForm>
            Test
          </FiltersForm>
        </Wrapper>,
      )

      expect(toJSON(component)).toMatchSnapshot()
    })
  })
})
