import React from 'react';
import "../styles/customInput.scss"
const CustomInput = ({type,placeholder, onChange}) => {
    return (
        <div>
            <input spellCheck="false" onChange={(e)=>onChange(e.target.value)} type={type} placeholder={placeholder} className="custom-input"/>
        </div>
    );
};

export default CustomInput;