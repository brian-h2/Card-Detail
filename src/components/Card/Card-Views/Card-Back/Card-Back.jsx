import './card-back.css';
import img from '../../../../assets/images/bg-card-back.png'

const CardBack = ({dates}) => {

    return (
        <div className="card-back">
            <img  src={img} alt="" srcset="" />
        </div>
    )
}

export default CardBack;