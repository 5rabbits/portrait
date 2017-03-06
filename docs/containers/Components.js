import React, { PropTypes } from 'react'
import { Container } from 'shared'
import ComponentDoc from '../components/ComponentDoc'

const Components = ({ params: { splat } }) =>
  <Container>
    <ComponentDoc path={splat} />
  </Container>

Components.propTypes = {
  params: PropTypes.shape({
    splat: PropTypes.string.isRequired,
  }).isRequired,
}

export default Components
