import './form-number.css';

const FormNumber = ({handleEventChange}) => {

    const setValues = (e) => {
        const newName = e.target.name;
        const newValue = e.target.value;
        handleEventChange({name: newName, value: newValue})
    }

    return (
        <div className="form-number">
            <div className="date">
                <label htmlFor="">EXP.DATE (MM/YY)</label>
                <div className="date-input">
                    <input placeholder='MM' type='number'  name='month' onChange={setValues}></input>
                    <input placeholder='YY' type='number' name='year' onChange={setValues}></input>
                </div>

            </div>
            <div className="cvc">
                <label htmlFor="">CVC</label>
                <div className="cvc-input">
                    <input placeholder="e.g 123"type="number" name="cvc" id="" onChange={setValues}/>
                </div>
            </div>
        </div>
       
    )
}

export default FormNumber;