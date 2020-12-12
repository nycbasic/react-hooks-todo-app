import { useState } from 'react';

export const useAddTodo = (initVal) => {
	const [value, setValue] = useState(initVal);
	const handleSubmit = (newVal, id, reset) => {
		setValue([...value, { id, todo: newVal, completed: false, edit: false }]);
		reset();
	};

	const handledEditSubmit = (index, id, todo, completed, edit, reset) => {
		console.log('submit edit', +todo.length);
		if (todo.length < 4) {
			setValue([...value]);
		} else {
			value.splice(index, 1, { id, todo, completed, edit: !edit });
			setValue([...value]);
			reset();
		}
	};
	const handleDeleteTodo = (val2) => {
		const newArr = value.filter((item) => {
			return item !== val2;
		});
		setValue(newArr);
	};
	const toggleCompleted = (index, id, todo, completed, edit) => {
		value.splice(index, 1, { id, todo, completed: !completed, edit });
		setValue([...value]);
	};

	const toggleEdit = (index, id, todo, completed, edit) => {
		value.splice(index, 1, { id, todo, completed, edit: !edit });
		setValue([...value]);
	};
	return [
		value,
		handleSubmit,
		handledEditSubmit,
		handleDeleteTodo,
		toggleCompleted,
		toggleEdit,
	];
};

export const useInputState = (initVal) => {
	const [value, setValue] = useState(initVal);
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const reset = () => {
		setValue('');
	};

	return [value, handleChange, reset];
};

export const useMarkCompleted = (initVal) => {
	const [value, setValue] = useState(initVal);
	const toggleCompleted = (e, id) => {
		setValue(e.target.checked);
	};
	return [value, toggleCompleted];
};
