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
		const { todo, completed, edit, id } = value;
		console.log(editedTodo[id])
		return (
			<ListItem key={value.uuid} button>
				<Checkbox
					tabIndex={-1}
					disabled={edit}
					edge='end'
					onChange={() => toggleCompleted(id)}
					inputProps={{ 'aria-labelledby': labelId }}
				/>
				{edit ? (
					<TextField
						label='Edit Todo'
						id='filled-size-small'
						placeholder={todo}
						variant='filled'
						size='small'
						name={id}
						value={editedTodo[id]}
						onChange={updateEditedTodo}
						onSelect={() => console.log("text box selected!")}
					/>
				) : (
					<ListItemText
						id={labelId}
						primary={todo}
						style={{ textDecoration: completed && 'line-through' }}
					/>
				)}

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
			</ListItem>
		);
	});
};

export default Todos;
