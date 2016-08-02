var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
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
	render: function(){
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}></TodoList>
			</div>
		);
	}
});

module.exports = TodoApp;