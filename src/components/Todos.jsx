import React from 'react';
import {
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Checkbox,
	IconButton,
	TextField,
} from '@material-ui/core';
import { Delete, Edit, AddCircle, Cancel } from '@material-ui/icons';

const Todos = (props) => {
	const {
		todos,
		editedTodo,
		submitEdit,
		deleteTodo,
		toggleCompleted,
		toggleEdit,
		updateEditedTodo,
		resetEditTodoField,
	} = props;
	return todos.map((value, i) => {
		const labelId = `checkbox-list-secondary-label-${value}`;
		const { todo, completed, edit, id } = value;
		console.log(editedTodo);
		return (
			<ListItem key={value.id}>
				{edit ? (
					<React.Fragment>
						<TextField
							autoFocus
							label='Edit Todo'
							id='filled-size-small'
							variant='filled'
							size='small'
							name={id}
							value={editedTodo[id]}
							onChange={updateEditedTodo}
						/>
						<ListItemSecondaryAction>
							<IconButton
								disabled={editedTodo.length < 4}
								onClick={() =>submitEdit(id, editedTodo[id], resetEditTodoField)}
								edge='end'
								aria-label='add'
							>
								<AddCircle />
							</IconButton>
							<IconButton>
								<Cancel
									edge='end'
									aria-label='cancel'
									onClick={() => toggleEdit(id)}
								/>
							</IconButton>
						</ListItemSecondaryAction>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Checkbox
							tabIndex={-1}
							disabled={edit}
							edge='end'
							onChange={() => toggleCompleted(id)}
							inputProps={{ 'aria-labelledby': labelId }}
						/>

						<ListItemText
							id={labelId}
							primary={todo}
							style={{ textDecoration: completed && 'line-through' }}
						/>

						<ListItemSecondaryAction>
							<IconButton
								disabled={edit}
								edge='end'
								aria-label='delete'
								onClick={() => deleteTodo(id)}
							>
								<Delete />
							</IconButton>
							<IconButton
								edge='end'
								aria-label='edit'
								onClick={() => toggleEdit(id, editedTodo, resetEditTodoField)}
							>
								<Edit />
							</IconButton>
						</ListItemSecondaryAction>
					</React.Fragment>
				)}
			</ListItem>
		);
	});
};

export default Todos;
