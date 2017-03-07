/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react'
import Playground from 'component-playground'

const markdown = require('markdown-it')()

const Example = ({ code, componentName, description }) =>
  <div className={`example example--${componentName}`}>
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
