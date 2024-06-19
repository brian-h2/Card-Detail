import './form-number.css';

const FormNumber = () => {
    return (
        <div className="form-number">
            <div className="date">
                <label htmlFor="">EXP.DATE (MM/YY)</label>
                <div className="date-input">
                    <input placeholder='MM'></input>
                    <input placeholder='YY'></input>
                </div>

            </div>
            <div className="cvc">
                <label htmlFor="">CVC</label>
                <div className="cvc-input">
                    <input placeholder="e.g 123"type="number" name="" id="" />
                </div>
            </div>
        </div>
       
    )
}

export default FormNumber;