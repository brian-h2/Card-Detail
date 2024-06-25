import './card-front.css'
import img from '../../../../assets/images/bg-card-front.png'
import imgLogo from '../../../../assets/images/card-logo.svg'

const CardFront = ({datesInfo,isClicked}) => {
    return (
        <div className="card-front">
            <img srcSet={img}></img>
            <img className="card-logo"srcSet={imgLogo}></img>
            <div className='card-front-content-dates'>
                <h1 className='card-number'>{  isClicked  ? datesInfo.number : "000 000 000 000" }</h1>
                <div className="card-front-content-dates-bottom">
                <h1 className='card-name'>{ isClicked ? datesInfo.name : "Jane Appleseed"}</h1>
                    <p className='card-date'>
                        <span>{ isClicked ? datesInfo.month : "00"}</span>
                        /
                        <span>{ isClicked ? datesInfo.year : "00"}</span>
                    </p>
                 
                </div>
            </div>
        </div>
    )
}

export default CardFront;