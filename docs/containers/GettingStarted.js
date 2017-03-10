/* eslint-disable global-require, import/no-webpack-loader-syntax, react/no-danger */

import React from 'react'
import { Container } from 'shared'
import markdown from '../helpers/markdown'

const GettingStarted = () =>
  <Container>
    <div
      dangerouslySetInnerHTML={{
        __html: markdown.render(require('raw!../pages/getting-started.md')),
      }}
    />
  </Container>

export default GettingStarted
