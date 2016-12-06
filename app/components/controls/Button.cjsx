React = require('react')


@RoundButton = React.createClass
  render: ->
    return (
      <a href="#" className="btn btn-outline-primary btn-sm block-rounded">
        <i className="fa fa-fw fa-btn fa-{@props.icon}"></i>
        { @props.label }
      </a>
    )

@Button = React.createClass
  render: ->
    return (
      <a href="#" className="btn btn-primary">{ @props.label }</a>
    )


module.exports = @Button