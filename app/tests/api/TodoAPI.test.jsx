var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{

	beforeEach(()=>{
		localStorage.removeItem('todos');
	});

	it('should exist', ()=>{
		expect(TodoAPI).toExist();
	});

	describe('setTodos', ()=>{
		it('should set valid todos array', ()=>{
			var todos = [{
				id: 23,
				text: 'test all files',
				completed: false
			}];

			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));
			expect(actualTodos).toEqual(todos);
		});

		it('should not set invalid todos array', ()=>{
			var barTodos = {a: 'b'};
			TodoAPI.setTodos(barTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('getTodos', ()=>{
		it('should return empty array for bad localStorage data', ()=>{
			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		});

		it('should return todos if valid array in localStorage', ()=>{
			var todos = [{
				id: 23,
				text: 'test all files',
				completed: false
			}];

			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);
		});
	});

	describe('filteredTodos', ()=>{
		var todos = [{
			id: 1,
			text: 'Some text here',
			completed: true
		}, {
			id: 2,
			text: 'Other text here',
			completed: false
		}, {
			id: 3,
			text: 'Another text here',
			completed: true
		}];

		it('should return all items if showCompleted', ()=>{
			var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
		
		it('should return non-completed todos when showCompleted is false', ()=>{
			var filteredTodos = TodoAPI.filteredTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', ()=>{
			var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
			expect(filteredTodos[0].id).toBe(2);
		});

		it('should filter todos by searchText', ()=>{
			var filteredTodos = TodoAPI.filteredTodos(todos, true, 'some');
			expect(filteredTodos.length).toBe(1);
		});

		it('should return all todos if searchText is empty', ()=>{
			var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
	});

});












