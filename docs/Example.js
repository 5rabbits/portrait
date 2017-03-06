import React, { PropTypes } from 'react'
import Playground from 'component-playground'

const Example = ({ code, componentName, description }) =>
  <div className={`example example--${componentName}`}>
    {description &&
      <p>{description}</p>
    }

    <Playground
      codeText={code}
      scope={{ React }}
      theme="material"
    />
  </div>

Example.propTypes = {
  code: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Example
