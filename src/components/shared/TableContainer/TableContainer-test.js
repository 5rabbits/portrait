import { React, toJSON, mount } from 'test/helper'
import TableContainer from 'shared/TableContainer'

describe('TableContainer', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <TableContainer>
        Test
      </TableContainer>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
