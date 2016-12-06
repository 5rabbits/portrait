React = require('react')

@Offscreen = React.createClass
  render: ->
    return (
      <div className="offscreen-wrapper">
        <div className="offscreen-aside">
          { @props.panel }
        </div>
        <div className="offscreen-content">
          { @props.content }
        </div>
      </div>
    )

module.exports = @Offscreen
