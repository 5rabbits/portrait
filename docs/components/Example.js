/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Playground from 'component-playground'
import markdown from '../helpers/markdown'

const Example = ({ code, componentName, description, inline }) =>
  <div className={`component-example component-example--${componentName}`}>
    {description &&
      <div dangerouslySetInnerHTML={{ __html: markdown.render(description) }} />
    }

    <Playground
      codeText={code}
      noRender={inline}
      scope={{ React, ReactDOM }}
      theme="material"
    />
  </div>

Example.propTypes = {
  code: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  description: PropTypes.string,
  inline: PropTypes.bool,
}

Example.defaultProps = {
  inline: true,
}

export default Example
