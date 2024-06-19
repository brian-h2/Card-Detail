import CardViews from '../../components/Card/Card-Views/Card-Views';
import FormGeneral from '../../components/Card/Form/Form';


import './home.css'

const Home = () =>  {
    return (
        <div className="home">
            <div className="cards-home">
                <CardViews/>
            </div>
            <div className="form-general">
                <FormGeneral/>
            </div>
        </div>
    )
}

export default Home;