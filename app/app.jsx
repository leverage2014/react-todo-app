var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();

import router from 'app/router/';
import firebase from 'app/firebase/';

firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		hashHistory.push('/todos');
	} else {
		hashHistory.push('/');
	}
});

// store.subscribe(()=>{
// 	var state = store.getState();
// 	console.log('new state', state);
// 	TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');



ReactDOM.render(
	<Provider store={store}>
	    {router}
	</Provider>,
	document.getElementById('app')
);
