import { React, toJSON, mount } from 'test/helper'
import Section from 'main/Section'

describe('Section', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <Section>
        Test
      </Section>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should allow to render a toolbar if specified', () => {
    const component = mount(
      <Section toolbar="TOOLBAR">
        Test
      </Section>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
