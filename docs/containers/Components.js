import React, { PropTypes } from 'react'
import { Container } from 'shared'
import find from 'lodash/find'
import ComponentDoc from '../components/ComponentDoc'
import manifest from '../manifest'

const Components = ({ params: { splat } }) => {
  const module = find(manifest, component => component.name === splat)

  return (
    <Container>
      <ComponentDoc
        name={module.name}
        getComponent={module.getComponent}
      />
    </Container>
  )
}

Components.propTypes = {
  params: PropTypes.shape({
    splat: PropTypes.string.isRequired,
  }).isRequired,
}

export default Components
