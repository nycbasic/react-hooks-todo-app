import { useState } from 'react';

export const useAddTodo = (initVal) => {
	const [value, setValue] = useState(initVal);
	const handleSubmit = (newVal, id, reset) => {
		setValue([...value, { id, todo: newVal, completed: false, edit: false }]);
		reset();
	};

	const handledEditSubmit = (index, item, textEdit, reset) => {
		const { edit } = item;
		if (textEdit.length < 1) {
			value.splice(index, 1, { ...item, edit: !edit });
			setValue([...value]);
		} else {
			value.splice(index, 1, { ...item, todo: textEdit, edit: !edit });
			setValue([...value]);
			reset();
		}
	};
	const handleDeleteTodo = (todo) => {
		const newArr = value.filter((item) => {
			return item !== todo;
		});
		setValue(newArr);
	};
	const toggleCompleted = (index, item) => {
		const { completed } = item;
		value.splice(index, 1, { ...item, completed: !completed });
		setValue([...value]);
	};

	const toggleEdit = (index, item) => {
		const { edit } = item;
		value.splice(index, 1, { ...item, edit: !edit });
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
