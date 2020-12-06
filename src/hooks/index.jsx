import { useState } from 'react';

export const useAddTodo = (initVal) => {
    const [value, setValue] = useState(initVal);
    const handleSubmit = (newVal) => {
        setValue([...value, newVal]);
    }
    return [value, handleSubmit];
}


export const useInputState = initVal => {
    const [value, setValue] = useState(initVal);
    const handleChange = e => {
        setValue(e.target.value);
    }

    return [value, handleChange];
}


