React = require('react')

@Navigation = React.createClass
  render: ->
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-max">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-bars"></i>
            </button>
            <button type="button" className="navbar-toggle pull-right" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-search"></i>
            </button>
            <a className="navbar-brand" href="#">TimeFlow</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Calendario <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Trabajos</a></li>
              <li><a href="#">Drafts</a></li>
              <li><a href="#">Invoices</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Management <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Clients</a></li>
                  <li><a href="#">Users</a></li>
                  <li><a href="#">Rates</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Perfil <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )

module.exports = @Navigation
