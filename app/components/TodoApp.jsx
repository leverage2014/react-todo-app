var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: 'walk the dog'
				}, {
					id: 2,
					text: 'clear the yard'
				}, {
					id: 3,
					text: 'play video games'
				}, {
				    id: 4,
					text: 'leave main on porch'		
				}
			]
		};
	},
	handleAddTodo: function(text){
		alert('new todo: '+text);
	},
	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function(){
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={ this.handleSearch }/>
				<TodoList todos={todos}></TodoList>
				<AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
			</div>
		);
	}
});

module.exports = TodoApp;