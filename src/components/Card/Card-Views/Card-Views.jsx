import CardBack from "./Card-Back/Card-Back"
import CardFront from "./Card-Front/Card-Front"
import './card-views.css'
const CardViews = ({datesInfo,isClicked}) => {


    return (
        <div className="cards">
             <CardBack datesInfo={datesInfo}/>
             <CardFront datesInfo={datesInfo}/>
        </div>
           
        
    )
}

export default CardViews;