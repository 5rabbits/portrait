import React, { PropTypes, Children } from 'react'
import childrenPropType from 'propTypes/children'
import cx from 'classnames'
import './Grid.scss'
import normalizeSize from './normalizeSize'

/**
 * Allows to place elements using the [CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).
 */
const Grid = ({ align, children, className, direction, gutter, justify, size, ...other }) => {
  const childrenArray = Children.toArray(children)
  const columns = []

  for (let i = 0; i < childrenArray.length; i += 1) {
    columns.push(React.cloneElement(childrenArray[i], {
      style: {
        ...(childrenArray[i].props.style || {}),
        flex: normalizeSize(size instanceof Array ? size[i] : size),
      },
    }))
  }

  return (
    <div
      {...other}
      className={cx('grid-component', className, {
        [`grid-component--${align}-align`]: align,
        [`grid-component--${direction}-direction`]: direction,
        [`grid-component--${gutter}-gutter`]: gutter,
        [`grid-component--${justify}-justify`]: justify,
      })}
      >
      {columns}
    </div>
  )
}

Grid.propTypes = {
  /**
   * Changes the alignment on the opposite axis.
   *
   * For example, `center` will center items vertically if `direction="horizontal"` and
   * horizontally if `direction="vertical"`.
   */
  align: PropTypes.oneOf(['start', 'center', 'end', 'stretch']).isRequired,

  /**
   * Any number of items that will be placed in the grid.
   */
  children: childrenPropType,

  /**
   * CSS class of the grid outer wrapper.
   */
  className: PropTypes.string,

  /**
   * Direction in which the items are going to be placed.
   *
   * The items are going to be placed left to right if `horizontal` and top to bottom
   * if `vertical`.
   */
  direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,

  /**
   * Space between items.
   */
  gutter: PropTypes.oneOf([false, 'small', 'normal', 'large']),

  /**
   * Manages negative space on the main axis.
   *
   * For example, `center` will center items vertically if `direction="vertical"` and
   * horizontally if `direction="horizontal"`.
   */
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']).isRequired,

  /**
   * Size of the items.
   *
   * A size unit correspond any of the following values.
   * - `'fill'`: Distribute the available space equally between all items with `fill`.
   * - `'min'`: Use the minimum space possible.
   * - Using any *string* or *number* will pass the value directly to the css
   * [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) property.
   *
   * The size can be specified globally (`size="fill"`) or item by item (`size={['fill', 'min']}`).
   */
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
  justify: 'start',
  size: 'fill',
}

export default Grid
