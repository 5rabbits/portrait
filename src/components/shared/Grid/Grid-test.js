import { React, toJSON, mount } from 'test/helper'
import Grid from 'shared/Grid'

describe('Grid', () => {
  it('should render with minimum props', () => {
    const component = mount(<Grid />)

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('it should assign normalized flex size to each grid item', () => {
    const component = mount(
      <Grid size="fill">
        <div />
        <div />
      </Grid>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('it should allow to specify individual size', () => {
    const component = mount(
      <Grid size={['min', 'fill']}>
        <div />
        <div />
      </Grid>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
