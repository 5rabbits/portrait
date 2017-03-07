/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react'
import Playground from 'component-playground'
import markdown from '../helpers/markdown'

const Example = ({ code, componentName, description }) =>
  <div className={`component-example component-example--${componentName}`}>
    {description &&
      <div dangerouslySetInnerHTML={{ __html: markdown.render(description) }} />
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
