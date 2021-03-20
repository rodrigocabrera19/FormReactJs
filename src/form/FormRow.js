import { useState } from 'react';

export default function FormRow({label, type}){
    const [inputValue, setInputValue] = useState('')

    const onChange = (e) => {
        setInputValue(e.target.value)
        
    }
    

    return(
        <div>
            <label>{label}</label>
            <input type={type} value={inputValue} onChange={onChange}/>
        </div>
    )
}