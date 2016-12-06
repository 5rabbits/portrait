React = require('react')

@EmptyView = React.createClass
  render: ->
    return (
      <div className="empty-view">
        <div className="empty-container">
          <div className="empty-dialog">
            <i className="fa fa-clock-o fa-10x color-soft mb-md"></i>
            <h2 className="type-headline mb-xs">Aquí aparecerán tus trabajos para que puedas revisarlos.</h2>
            <p className="color-secondary mb-md">Ingresa tu primer trabajo y vuelve luego sagittis lacus augue laoreet rutrum faucibus dolor auctor.</p>
            <a href="#" className="btn btn-primary btn-lg">Agrega tu primer entrada de tiempo</a>
          </div>
        </div>
      </div>
    )

module.exports = @EmptyView
