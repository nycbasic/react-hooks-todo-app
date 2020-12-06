import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

const TodoForm = (props) => {
	const { todo, updateTodo, submitTodo } = props;
	return (
		<React.Fragment>
			<Typography variant='h5'>Todo List</Typography>
			<Button variant='contained' color='primary' onClick={() => submitTodo(todo)}>
				Enter
			</Button>
			<TextField
				type='text'
				name='todo'
				label='Enter your todo'
				placeholder='Enter your todo!'
				variant='outlined'
				size='small'
				value={todo}
				onChange={updateTodo}
			/>
		</React.Fragment>
	);
};

export default TodoForm;
