import './form-number.css';

const FormNumber = ({handleEventChange}) => {

    const setValues = (e) => {
        const newName = e.target.name;
        const newValue = e.target.value;
        handleEventChange({name: newName, value: newValue})
    }
    const currentDate = new Date();
    const yearNow = currentDate.getFullYear();

    return (
        <div className="form-number">
            <div className="date">
                <label htmlFor="">EXP.DATE (MM/YY)</label>
                <div className="date-input">
                    <input placeholder='MM' type='number' min="1" max="12" name='month' onChange={setValues}></input>
                    <input placeholder='YY' className="date-year" type='number' min={yearNow} max="2030" name='year' onChange={setValues}></input>
                </div>

            </div>
            <div className="cvc">
                <label htmlFor="">CVC</label>
                <div className="cvc-input">
                    <input placeholder="e.g 123" min="100" max="999" type="number" name="cvc" id="" onChange={setValues}/>
                </div>
            </div>
        </div>
       
    )
}

export default FormNumber;