import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {

	const [todos, setTodos] = useState([]);

	const  addTodo = todo => {
		if(!todo.text || /^\S*S/.test(todo.text)){
			return;
		}

		const newTodos = [todo, ...todos];
		setTodos(newTodos);
		console.log(todo, ...todos);
	}

	const removeTodo = id => {
		const removeArr = [...todos].filter(todo => todo.id !== id);

		setTodos(removeArr);
	}

	const completeTodo = id => {
		let updateTodos = todos.map(todo => {
			if(todo.id === id){
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});

		setTodos(updateTodos);
	}

	const updateTodo = (todoId, newValue) => {
		if(!newValue.text || /^\S*S/.test(newValue.text)){
			return;
		}

		setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )));
	}


	return (
		<div>
			<h1>¿Cuál es el plan para hoy?</h1>
			<TodoForm onSubmit={addTodo}/>
			<Todo 
				todos={todos} 
				completeTodo={completeTodo} 
				removeTodo={removeTodo} 
				updateTodo={ updateTodo } 
			/>
		</div>
		);
}

export default TodoList;