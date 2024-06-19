import './card-front.css'
import img from '../../../../assets/images/bg-card-front.png'

const CardFront = () => {
    return (
        <div className="card-front">
            <img src={img}></img>
            {/* <div className="card-front-content">
                <h1>9591 6489 6389 10111</h1>
                <div className='card-front-conten-dates'>
                    <h2>Felicia Leire</h2>
                    <h2>09/26</h2>
                </div>
            </div> */}
        </div>
    )
}

export default CardFront;