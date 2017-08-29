/* eslint-disable jsx-a11y/no-static-element-interactions, react/prop-types */

import React from 'react'
import cx from 'classnames'

export default ({
  clearText,
  focused,
  onClick,
  onMouseEnter,
}) =>
  <div
    className={cx('Select__clearOption', {
      'Select__clearOption--focused': focused,
    })}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    >
    {clearText}
  </div>
