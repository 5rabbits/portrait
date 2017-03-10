import React, { PropTypes, Children } from 'react'
import childrenPropType from 'propTypes/children'
import cx from 'classnames'
import './Grid.scss'
import normalizeSize from './normalizeSize'

const Grid = ({ align, children, className, direction, gutter, size, ...other }) => {
  const childrenArray = Children.toArray(children)
  const columns = []

  for (let i = 0; i < childrenArray.length; i += 1) {
    columns.push(React.cloneElement(childrenArray[i], {
      style: Object.assign({}, (childrenArray[i].props.style || {}), {
        flex: normalizeSize(size instanceof Array ? size[i] : size),
      }),
    }))
  }

  return (
    <div
      {...other}
      className={cx('grid-component', className, {
        [`grid-component--${align}-align`]: align,
        [`grid-component--${direction}-direction`]: direction,
        [`grid-component--${gutter}-gutter`]: gutter,
      })}
      >
      {columns}
    </div>
  )
}

Grid.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end', 'stretch']).isRequired,
  children: childrenPropType,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  gutter: PropTypes.oneOf([false, 'small', 'normal', 'large']),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['fill', 'min']),
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number, PropTypes.string,
    ])),
  ]),
}

Grid.defaultProps = {
  align: 'stretch',
  direction: 'horizontal',
  gutter: 'normal',
  size: 'fill',
}

export default Grid
