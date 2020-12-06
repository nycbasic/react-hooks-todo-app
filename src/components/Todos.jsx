import React from 'react';
import {
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	ListItemAvatar,
	Checkbox,
	Avatar,
	IconButton,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const Todos = (props) => {
	const { todos, deleteTodo } = props;
	return todos.map((value) => {
		const labelId = `checkbox-list-secondary-label-${value}`;
		return (
			<ListItem key={value} button>
				<ListItemAvatar>
					<Avatar
						alt={`Avatar n°${value + 1}`}
						src={`/static/images/avatar/${value + 1}.jpg`}
					/>
				</ListItemAvatar>
				<ListItemText id={labelId} primary={value} />
				<ListItemSecondaryAction>
					<Checkbox
						edge='end'
						// onChange={handleToggle(value)}
						// checked={checked.indexOf(value) !== -1}
						inputProps={{ 'aria-labelledby': labelId }}
					/>
					<IconButton edge='end' aria-label='delete'>
						<Edit />
					</IconButton>
					<IconButton
						edge='end'
						aria-label='delete'
						onClick={() => deleteTodo(todos, value)}
					>
						<Delete />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		);
	});
};

export default Todos;
