import FormDate from "./Form-Components/Form-Date/Form-Date";
import FormNumber from "./Form-Components/Form-Number/Form-Number";
import './form.css'
const FormGeneral = () => {
    return (
        <form>
            <FormDate
            label="cardholder Name"
             type="text"
            className="input-name"
              placeHolder="e.g Jane Appleseed"
            />   
            <FormDate
            label="cardholder Name"
            type="number" 
            className="input-number-card"
            placeHolder="e.g 1234 5678 9123 0000"
            />    

            <FormNumber
            
            />

            <button>Confirm</button>
        </form>
    )
}

export default FormGeneral;