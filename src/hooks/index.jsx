import { useState } from 'react';

export const useAddTodo = (initVal) => {
    const [value, setValue] = useState(initVal);
    const handleSubmit = (newVal, reset) => {
        setValue([...value, newVal]);
        reset();
    }
    const handleDeleteTodo = (val, val2) => {
        const newArr = val.filter(item => {
            return item !== val2;
        })
        setValue(newArr)
    }
    return [value, handleSubmit, handleDeleteTodo];
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


