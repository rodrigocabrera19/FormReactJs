import { useState, forwardRef, useImperativeHandle  } from 'react';
import React from 'react';

export default React.forwardRef(function FormRow(props, ref, label, type){
    /*Agregando un useImperativeHandler para pasar estado de hijo a padre*/
    const [inputValue, setInputValue] = useState('');
    React.useImperativeHandler((ref) => ({
    getSearchState: () => inputValue,
    }));
    const onChange = (e) => {
    setInputValue(e.target.value);
    };
    return(
        <div>
            <label>{label}</label>
            <input type={type} value={inputValue} onChange={onChange}/>
        </div>
    )
});