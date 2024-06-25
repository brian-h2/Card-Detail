import CardBack from "./Card-Back/Card-Back"
import CardFront from "./Card-Front/Card-Front"
import './card-views.css'
const CardViews = ({datesInfo,isClicked}) => {

    

    return (
        <div className="cards">
            <div className="cards-back">
                <CardBack isClicked={isClicked} datesInfo={datesInfo}/>
            </div>
            <div className="cards-front">
                <CardFront isClicked={isClicked} datesInfo={datesInfo}/>
            </div>
             
        </div>
        
    )
}

export default CardViews;