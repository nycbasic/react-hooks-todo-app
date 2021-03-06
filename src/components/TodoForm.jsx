import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { v1 as uuid} from "uuid";

const TodoForm = (props) => {
	const { todo, updateTodo, submitTodo, resetTodoField} = props;
	return (
		<React.Fragment>
			<Typography variant='h5'>Todo List</Typography>
			<Button
				disabled={todo.todo.length < 4}
				variant='contained'
				color='primary'
				onClick={() => submitTodo(todo.todo, uuid(), resetTodoField)}
			>
				Enter
			</Button>
			<TextField
				type='text'
				name='todo'
				label='Enter your todo'
				placeholder='Enter your todo!'
				variant='outlined'
				size='small'
				value={todo.todo}
				onChange={updateTodo}
			/>
		</React.Fragment>
	);
};

export default TodoForm;
