import { useState } from 'react';

export const useAddTodo = (initVal) => {
    const [value, setValue] = useState(initVal);
    const handleSubmit = (newVal, reset) => {
        setValue([...value, newVal]);
        reset();
    }
    return [value, handleSubmit];
}


export const useInputState = initVal => {
    const [value, setValue] = useState(initVal);
    const handleChange = e => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue("")
    }

    return [value, handleChange, reset];
}


