React = require('react')

@Controls = React.createClass
  render: ->
    return (
      <div className="controls-container">
        <div className="controls-main">
          { @props.main }
        </div>
        <div className="controls-content">
          { @props.content }
        </div>
        <div className="controls-actions">
          { @props.actions }
        </div>
      </div>
    )

module.exports = @Controls
