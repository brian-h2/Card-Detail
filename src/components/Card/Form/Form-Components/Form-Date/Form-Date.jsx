import { useState } from 'react'
import './form-date.css'

const FormDate = ({label,name,type,className,placeHolder,handleEventChange}) => {
    

    const setValues = (e) => {
        const newValue = e.target.value;
        const newName = e.target.name;
        handleEventChange({name: newName,value: newValue})
    }
    
    return (
        <>
            <div className='form-date'>
                <label>{label}</label>
                <div className="form-date-input">
                    <input 
                    placeholder={placeHolder} 
                    className={className} 
                    name={name}
                    type={type} 
                    onChange={setValues}
                    required="required"
                    >
                    </input>
                </div>
            </div>
        </>
    )
}

export default FormDate;