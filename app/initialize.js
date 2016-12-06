var ReactDOM = require('react-dom');
var React = require('react');
var Application = require('./components/App');

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Application/>, document.getElementById('app'));
});
