import { useState } from "react";
import FormDate from "./Form-Components/Form-Date/Form-Date";
import FormNumber from "./Form-Components/Form-Number/Form-Number";
import './form.css'
const FormGeneral = ({clickButton,setInformation}) => {

    const [dates,setDates] = useState('')

    const handleEventChange = ({name,value}) => {
        setDates({
            ...dates,
                [name] : value,
        })
        setInformation(dates)
    }

    const preventEvent = (e) => {
        e.preventDefault()
    }

    const setClicked = () => {
        clickButton()
    }


    return (
        <form onSubmit={preventEvent}>
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

            <button onClick={setClicked}>Confirm</button>

        </form>
    )
}

export default FormGeneral;