import { useState } from 'react';

export const useAddTodo = (initVal) => {
	const [value, setValue] = useState(initVal);

	const handleSubmit = (text, id, reset) => {
		setValue([...value, { id, todo: text, completed: false, edit: false }]);
		reset();
	};

	const handledEditSubmit = (id, text, reset) => {
        console.log("SUBMIT EDIT!")
		const editedTodos = value.map((todo) => {
	        if (todo.id === id) {
				console.log('condtion 2');
				return { ...todo, todo: text, edit: !todo.edit };
			} else if (todo.id === id && text.length < 4) {
                console.log("condition 3")
                return {...todo, edit: !todo.edit}
            }
            console.log("FINAL CONDITION")
            return todo
        });
        console.log(editedTodos)
		setValue(editedTodos);
		// reset();
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

	const toggleEdit = (id) => {
		const toggleEdit = value.map((todo) => {
			if (todo.id === id) {
				return { ...todo, edit: !todo.edit };
			}
			return todo;
		});
		setValue(toggleEdit);
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
        e.preventDefault();
        console.log(value);
		setValue({[e.target.name]: e.target.value});
	};
	const reset = (e) => {
        console.log(e)
		setValue({todo: ""});
	};

	return [value, handleChange, reset];
};

export const useLocalStorage = () => {
	
}