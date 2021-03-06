/* eslint-disable react/no-danger */

import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Playground from 'component-playground'
import classNames from 'classnames'
import markdown from '../helpers/markdown'

const Example = ({ code, collapsible, componentName, description, expanded, inline }) =>
  <div className={`component-example component-example--${componentName}`}>
    {description &&
      <div dangerouslySetInnerHTML={{ __html: markdown.render(description) }} />
    }

    <Playground
      codeText={code}
      collapsableCode={collapsible}
      initiallyExpanded={expanded}
      noRender={inline}
      scope={{ React, ReactDOM, classNames }}
      theme="material"
    />
  </div>

Example.propTypes = {
  code: PropTypes.string.isRequired,
  collapsible: PropTypes.bool,
  componentName: PropTypes.string.isRequired,
  description: PropTypes.string,
  expanded: PropTypes.bool,
  inline: PropTypes.bool,
}

Example.defaultProps = {
  collapsible: false,
  description: null,
  expanded: true,
  inline: true,
}

export default Example
