import { useState } from "react";
import FormDate from "./Form-Components/Form-Date/Form-Date";
import FormNumber from "./Form-Components/Form-Number/Form-Number";
import FormComplete from "./Form-Components/Form-Complete/FormComplete"
import './form.css'
const FormGeneral = ({clickButton,setInformation}) => {

    const [dates,setDates] = useState()
    const [value,setValue] = useState(false)

    const handleEventChange = ({name,value}) => {
        setDates({
            ...dates,
                [name] : value,
        })
    }

    const comprobarCampos = () => {
        if(dates.name.length < 3 || dates.number.length < 5 || dates.month.length < 1 || dates.year.length < 1 || dates.cvc.value < 100) {
            alert("Verifique los datos")
            setValue(false)
        } else {
            setValue(true);
            setInformation(dates)
            clickButton(true)
        } 
    }

    const setClicked = (e) => {
        e.preventDefault()
        comprobarCampos()
    }

  


    return (
        <form >
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