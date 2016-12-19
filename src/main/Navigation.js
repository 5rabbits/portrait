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

        {props.navigationOptions}
      </div>
    </div>
  </div>

export default Navigation
