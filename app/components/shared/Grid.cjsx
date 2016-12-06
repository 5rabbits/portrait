React = require('react')

@Container = React.createClass
  render: ->
    return (
      <div className="container-page">
        { @props.children }
      </div>
    )

module.exports = @Container
