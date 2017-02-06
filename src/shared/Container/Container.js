import React from 'react'
import childrenPropType from 'propTypes/children'

const Container = props =>
  <div className="container-page">
    {props.children}
  </div>

Container.propTypes = {
  children: childrenPropType,
}

export default Container
