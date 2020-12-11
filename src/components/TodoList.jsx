import React from 'react';
import Todos from './Todos';
import { List, Container } from '@material-ui/core';

const TodoList = (props) => {
	const { todos, editedTodo, deleteTodo, toggleCompleted, toggleEdit, updateEditedTodo, resetEditTodoField, submitEdit  } = props;
	return (
		<Container fixed maxWidth='xs'>
			<List dense>
				<Todos
					submitEdit={submitEdit}
					todos={todos}
					editedTodo={editedTodo}
					deleteTodo={deleteTodo}
					updateEditedTodo={updateEditedTodo}
					resetEditTodoField={resetEditTodoField}
					toggleCompleted={toggleCompleted}
					toggleEdit={toggleEdit}
				/>
			</List>
		</Container>
	);
};

export default TodoList;
