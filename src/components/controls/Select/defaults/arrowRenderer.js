/* eslint-disable react/prop-types */

import React from 'react'

export default ({ isOpen }) => {
  let arrow

  if (isOpen) {
    arrow = (
      <svg data-icon-name="caret-up" viewBox="0 0 400 400">
        <path d="M396.375 289.11l-2.25-2.627-170-195.727c-5.75-6.63-14.375-10.756-24-10.756s-18.25 4.252-24 10.756L6.25 286.106l-2.875 3.253C1.25 292.485 0 296.237 0 300.24 0 311.12 9.25 320 20.75 320h358.5c11.5 0 20.75-8.88 20.75-19.76 0-4.127-1.375-8.004-3.625-11.13z" />
      </svg>
    )
  }
  else {
    arrow = (
      <svg data-icon-name="caret-down" viewBox="0 0 400 400">
        <path d="M3.625 110.875l2.25 2.625 170 195.625c5.75 6.625 14.375 10.75 24 10.75s18.25-4.25 24-10.75l169.875-195.25 2.875-3.25C398.75 107.5 400 103.75 400 99.75 400 88.875 390.75 80 379.25 80H20.75C9.25 80 0 88.875 0 99.75c0 4.125 1.375 8 3.625 11.125z" />
      </svg>
    )
  }

  return (
    <div className="Select__arrow">
      {arrow}
    </div>
  )
}
