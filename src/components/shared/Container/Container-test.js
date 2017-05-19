import { React, toJSON, mount } from 'test/helper'
import Container from 'shared/Container'

describe('Container', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <Container>
        Test
      </Container>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
