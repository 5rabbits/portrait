import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid } from 'shared'
import './SectionToolbar.scss'

/**
 * This toolbar gives the user immediate access to the most commonly used section actions:
 * searching and creating resources.
 */
export default class SectionToolbar extends PureComponent {
  static propTypes = {
    /**
     * One or more buttons that will be rendered on the right edge of the screen.
     */
    actions: PropTypes.node,

    /**
     * Input primary intented as a full text search field for the section resources.
     */
    search: PropTypes.node,

    /**
     * Section name for context purpose.
     */
    title: PropTypes.node.isRequired,
  }

  static defaultProps = {
    actions: null,
    search: null,
  }

  render() {
    const { actions, search, title } = this.props

    return (
      <Container
        className="SectionToolbar"
        size="fluid"
        >
        <Grid
          className="SectionToolbar__grid"
          align="center"
          size={[1, '0 1 480px', 1]}
          >
          <div className="SectionToolbar__title">{title}</div>
          <div className="SectionToolbar__search">{search}</div>
          <div className="SectionToolbar__actions">{actions}</div>
        </Grid>
      </Container>
    )
  }
}
