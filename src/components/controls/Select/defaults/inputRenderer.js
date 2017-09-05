/* eslint-disable jsx-a11y/no-autofocus, react/prop-types */

import React from 'react'

export default ({
  canCreate,
  hasResults,
  inputPlaceholder,
  onChange,
  onKeyDown,
  onNewOptionClick,
  value,
}) =>
  <div className="Select__input">
    <input
      autoFocus
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={inputPlaceholder}
      type="text"
      value={value}
    />
    {canCreate && value != null && !hasResults &&
      <button
        className="Select__input__icon Select__input__icon--clickable"
        onClick={onNewOptionClick}
        type="button"
        >
        <svg data-icon-name="plus" viewBox="0 0 400 400">
          <path d="M200 0C89.52 0 0 89.52 0 200s89.52 200 200 200 200-89.52 200-200S310.48 0 200 0zm0 383.365c-101.058 0-183.365-82.21-183.365-183.365C16.635 98.846 98.942 16.635 200 16.635S383.365 98.942 383.365 200 301.058 383.365 200 383.365z" />
          <path d="M207.784 77H191.64v115.216H77v16.144h114.64V323h16.144V208.36H323v-16.144H207.784" />
        </svg>
      </button>
    }
    {(!canCreate || value == null || hasResults) &&
      <div className="Select__input__icon">
        <svg data-icon-name="search" viewBox="0 0 400 400">
          <path d="M292.188 243.75c15.625-24.583 24.79-53.75 24.79-85.104C316.98 71.042 246.043 0 158.543 0 70.937 0 0 71.042 0 158.646c0 87.604 70.938 158.646 158.438 158.646 31.77 0 61.354-9.375 86.145-25.417l7.188-5L364.897 400 400 364.27 286.98 251.147l5.207-7.396zM247.29 70c23.645 23.646 36.666 55.104 36.666 88.542 0 33.437-13.02 64.895-36.666 88.54-23.646 23.647-55.105 36.668-88.542 36.668-33.438 0-64.896-13.02-88.542-36.667-23.645-23.645-36.666-55.104-36.666-88.54 0-33.44 13.02-64.897 36.666-88.543 23.646-23.646 55.105-36.667 88.542-36.667 33.438 0 64.896 13.02 88.542 36.667z" />
        </svg>
      </div>
    }
  </div>
