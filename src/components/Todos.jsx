import React from 'react';
import {
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	ListItemAvatar,
	Checkbox,
	Avatar,
} from '@material-ui/core';

const Todos = (props) => {
	const { todos } = props;
	console.log(todos);
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
				</ListItemSecondaryAction>
			</ListItem>
		);
	});
};

export default Todos;
