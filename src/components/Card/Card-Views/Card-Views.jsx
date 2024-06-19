import CardBack from "./Card-Back/Card-Back"
import CardFront from "./Card-Front/Card-Front"
import './card-views.css'
const CardViews = () => {
    return (
        <div className="cards">
             <CardBack/>
             <CardFront/>
        </div>
           
        
    )
}

export default CardViews;