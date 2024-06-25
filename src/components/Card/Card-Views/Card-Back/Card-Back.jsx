import './card-back.css';
import img from '../../../../assets/images/bg-card-back.png'

const CardBack = ({datesInfo,isClicked}) => {

    return (
        <div className="card-back">
            <img  src={img} alt="" srcset="" />
            <p>{isClicked ? datesInfo.cvc : "923"}</p>
        </div>
    )
}

export default CardBack;