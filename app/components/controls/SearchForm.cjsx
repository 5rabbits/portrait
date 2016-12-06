React = require('react')

@SearchForm = React.createClass
  render: ->
    return (
      <div className="form-group has-feedback mb-nn">
        <input type="text" className="form-control block-rounded input-max-medium" id="inputSuccess2" aria-describedby="inputSuccess2Status" placeholder="Escribe algo para buscar un proyecto..."/>
        <span className="fa fa-search form-control-feedback" aria-hidden="true"></span>
        <span id="inputSuccess2Status" className="sr-only">(success)</span>
      </div>
    )

module.exports = @SearchForm
