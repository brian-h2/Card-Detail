import './form-date.css'

const FormDate = ({label,type,className,placeHolder}) => {
    return (
        <>
            <div className='form-date'>
                <label>{label}</label>
                <div className="form-date-input">
                    <input placeholder={placeHolder}className={className}type={type}></input>
                </div>
            </div>
        </>
    )
}

export default FormDate;