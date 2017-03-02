import React from 'react'

export default rulesDefinition => Component =>
  class extends React.Component {
    constructor(props) {
      super(props)

      this.rules = rulesDefinition(this.props)

      const state = {}

      Object.keys(this.rules).forEach(name => {
        const media = matchMedia(this.rules[name])

        state[name] = media.matches

        media.addListener(event => {
          this.setState({ [name]: event.matches })
        })
      })

      this.state = state
    }

    render() {
      return (
        <Component {...this.state} {...this.props} />
      )
    }
  }
