var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<p>React Boilerplate 2 Project</p>,
	document.getElementById('app')
);
