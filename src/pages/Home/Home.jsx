import { useState } from 'react';
import CardViews from '../../components/Card/Card-Views/Card-Views';
import FormGeneral from '../../components/Card/Form/Form';


import './home.css'


const Home = () =>  {

    const [isClicked,SetIsClicked] = useState(false)

    const [datesInfo,setDates] = useState([])

    const clickButton = () =>  {
        SetIsClicked(true)
    }

    const setInformation = (dates) => {
        setDates(dates)
    }

    return (
        <div className="home">
            <div className="cards-home">
                <CardViews datesInfo={datesInfo} isClicked={isClicked}/>
            </div>
            <div className="form-general">
                <FormGeneral clickButton={clickButton} setInformation={setInformation}/>
            </div>
        </div>
    )
}

export default Home;