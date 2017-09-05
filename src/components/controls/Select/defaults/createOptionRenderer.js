/* eslint-disable jsx-a11y/no-static-element-interactions, react/prop-types */

import React from 'react'
import cx from 'classnames'

export default ({
  createOptionLabel,
  focused,
  onClick,
  onMouseEnter,
  value,
}) =>
  <div
    className={cx('Select__createOption', {
      'Select__createOption--focused': focused,
    })}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    >
    <div className="Select__createOption__icon">
      <svg viewBox="0 0 400 400">
        <path d="M200 0C89.52 0 0 89.52 0 200s89.52 200 200 200 200-89.52 200-200S310.48 0 200 0zm0 383.365c-101.058 0-183.365-82.21-183.365-183.365C16.635 98.846 98.942 16.635 200 16.635S383.365 98.942 383.365 200 301.058 383.365 200 383.365z" />
        <path d="M207.784 77H191.64v115.216H77v16.144h114.64V323h16.144V208.36H323v-16.144H207.784" />
      </svg>
    </div>
    <div className="Select__createOption__textWrapper">
      <div className="Select__createOption__label">
        {createOptionLabel}
      </div>
      <div className="Select__createOption__value">
        {value}
      </div>
    </div>
  </div>
