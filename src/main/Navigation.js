import React from 'react'

const Navigation = props =>
  <div className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-max">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-bars" />
        </button>
        <button type="button" className="navbar-toggle pull-right" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-search" />
        </button>
        <a className="navbar-brand" href="#">{props.brand}</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          {props.children}
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Perfil <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider" />
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>

export default Navigation
