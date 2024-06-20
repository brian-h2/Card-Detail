import './card-front.css'
import img from '../../../../assets/images/bg-card-front.png'

const CardFront = ({datesInfo}) => {
    return (
        <div className="card-front">
            <img src={img}></img>
            <div className="card-front-content">
                <h1>{datesInfo.number}</h1>
                <div className='card-front-conten-dates'>
                    <h2>Felicia Leire</h2>
                    <h2>09/26</h2>
                </div>
            </div>
        </div>
    )
}

export default CardFront;

//Definir el renderizado condicional cuando sea true, muestre los datos en la card
//Terminar de pasar los datos a las etiquetas html