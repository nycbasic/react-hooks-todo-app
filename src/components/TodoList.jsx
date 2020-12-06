import React from 'react';
import Todos from './Todos';
import { List, Container } from '@material-ui/core';

const TodoList = (props) => {
	const { todos } = props;
	return (
		<Container fixed maxWidth='xs'>
			<List dense>
				<Todos todos={todos} />
			</List>
		</Container>
	);
};

export default TodoList;
