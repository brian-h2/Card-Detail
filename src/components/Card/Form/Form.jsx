import { useState } from "react";
import FormDate from "./Form-Components/Form-Date/Form-Date";
import FormNumber from "./Form-Components/Form-Number/Form-Number";
import './form.css'
const FormGeneral = ({clickButton,setInformation}) => {

    const [dates,setDates] = useState('')
    const [value,setValue] = useState(false)

    const handleEventChange = ({name,value}) => {
        setDates({
            ...dates,
                [name] : value,
        })
    }
    const preventEvent = (e) => {
        e.preventDefault()
        comprobarCampos()
        if(value == false) {
         clickButton(false)
        } else {
         clickButton(true)
         setInformation(dates)
        }
    }

    const comprobarCampos = () => {
        if(dates.name.length < 3) {
            dates.name == "e.g Jane Applessed"
            alert("Nombre muy corto")
            setValue(false)
            return;
        } else {
            setValue(true)
        }
    
        if(dates.number.length < 4) {
            dates.number == "e.g 1234 5678 9123 0000"
            alert("Numero corto")
            setValue(false)
            return;
        } else {
            setValue(true)
        } 

    }

    const setClicked = () => {
        preventEvent()
    }
    


    return (
        <form onSubmit={preventEvent} >
            <FormDate
            label="cardholder Name"
            type="text"
            name="name"  
            className="input-name"
            placeHolder="e.g Jane Appleseed"
            handleEventChange={handleEventChange}
            />   
            <FormDate
            label="card number"
            type="number" 
            name="number"
            className="input-number-card"
            placeHolder="e.g 1234 5678 9123 0000"
            handleEventChange={handleEventChange}
            />    

            <FormNumber
            
            handleEventChange={handleEventChange}
            />
            <div className="form-button">
                <button onClick={setClicked}>Confirm</button>   
            </div>
            

        </form>
    )
}

export default FormGeneral;