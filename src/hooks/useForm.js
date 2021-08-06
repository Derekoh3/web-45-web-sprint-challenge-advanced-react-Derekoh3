// write your custom hook here to control your checkout form
import React, { useState } from "react";

export const useForm = (initial) => {
    const [value, setValue] = useState(initial);

    const handleChanges = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }
    return [value, handleChanges];
}