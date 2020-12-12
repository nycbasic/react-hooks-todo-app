import { useState } from 'react';

export const useAddTodo = (initVal) => {
	const [value, setValue] = useState(initVal);

	const handleSubmit = (text, id, reset) => {
		setValue([...value, { id, todo: text, completed: false, edit: false }]);
		reset();
	};

	const handledEditSubmit = (id, textEdit, reset) => {
		const editedTodos = value.map((todo) => {
            console.log(textEdit.length)
			if ((todo.id === id) && (textEdit.length > 1)) {
                return {...todo, todo: textEdit, edit: !todo.edit}
			} 
            return {...todo, edit: !todo.edit};
		});
		setValue(editedTodos);
		reset();
	};
	const handleDeleteTodo = (id) => {
		const newArr = value.filter((item) => {
			return item.id !== id;
		});
		setValue(newArr);
	};
	const toggleCompleted = (id) => {
		const completedTodo = value.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			} else {
				return todo;
			}
		});
		setValue(completedTodo);
	};

	const toggleEdit = (id, text, reset) => {
        console.log(text)
		const editedTodo = value.map((todo) => {
            if(todo.id === id && Object.keys(text).length > 0) {
                console.log(id);
                console.log("CONDITION 1", text[id])
                return {...todo, todo: text[id], edit: !todo.edit}
            } else if (todo.id === id) {
                console.log("CONDITION 2")
				return { ...todo, edit: !todo.edit };
            }
            console.log("DEFAULT CONDITION")
            return todo;
        });
        console.log(editedTodo);
        setValue(editedTodo);
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
        setValue({[e.target.name]: e.target.value});
}

	const reset = (e) => {
        console.log(value)
		setValue({todoText: ""})
	};

	return [value, handleChange, reset];
};
