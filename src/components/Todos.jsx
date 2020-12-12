import React from 'react';
import {
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	ListItemAvatar,
	Checkbox,
	Avatar,
	IconButton,
	TextField,
} from '@material-ui/core';
import {
	Delete,
	Edit,
	CheckCircle,
	AddCircle,
	AddCircleOutline,
} from '@material-ui/icons';

const Todos = (props) => {
	const {
		todos,
		editedTodo,
		deleteTodo,
		toggleCompleted,
		toggleEdit,
		updateEditedTodo,
		resetEditTodoField,
		submitEdit,
	} = props;
	return todos.map((value, i) => {
		const labelId = `checkbox-list-secondary-label-${value}`;
		const { todo, completed, edit } = value;
		return (
			<ListItem key={value.uuid} button>
				<ListItemAvatar>
					<Avatar
						alt={`Avatar n°${value + 1}`}
						src={`/static/images/avatar/${value + 1}.jpg`}
					/>
				</ListItemAvatar>
				{completed && <CheckCircle />}
				{edit ? (
					<TextField
						label='Edit Todo'
						id='filled-size-small'
						placeholder={todo}
						variant='filled'
						size='small'
						value={editedTodo}
						onChange={updateEditedTodo}
					/>
				) : (
					<ListItemText
						id={labelId}
						primary={todo}
						style={{ textDecoration: completed && 'line-through' }}
					/>
				)}

				<ListItemSecondaryAction>
					<Checkbox
						disabled={edit}
						edge='end'
						onChange={() => toggleCompleted(i, value)}
						inputProps={{ 'aria-labelledby': labelId }}
					/>
					<IconButton
						edge='end'
						aria-label='edit'
						onClick={
							!edit
								? () => toggleEdit(i, value)
								: () => submitEdit(i, value, editedTodo, resetEditTodoField)
						}
					>
						{!edit ? <AddCircleOutline /> : <AddCircle />}
					</IconButton>
					<IconButton
						disabled={edit}
						edge='end'
						aria-label='delete'
						onClick={() => deleteTodo(value)}
					>
						<Delete />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		);
	});
};

export default Todos;
