@BlockItem = React.createClass
  render: ->
    return (
      <div className="block-item">

        <label className="switch mini pull-right">
          <input type="checkbox"/>
          <span></span>
        </label>
        <strong>App movil</strong>
        <span className="type-caption color-secondary ml-xs">Sosafe</span>

      </div>
    )