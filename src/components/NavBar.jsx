import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6'>Todo List - React Hooks</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
