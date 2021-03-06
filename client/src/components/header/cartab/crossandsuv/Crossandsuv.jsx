import React, {useEffect, useState} from 'react';
import '../carsandmini/CarsAndMini.css';
import Axios from 'axios';

function CrossoverAndSuv(){

    const [carAndMini, setCarAndMini] = useState([]);

    useEffect(()=>{
        Axios.get('/api/suvs')
        .then(response=>{
            setCarAndMini(response.data)
        },[carAndMini])
    })

    return(
        <div className='cam-wrapper'>
            <div className='cam-car-display'>
                {carAndMini.map((car)=>{
                    return (
                    <div key={car.id} className='cam-car-option-wrapper'>
                        <div className='cam-car-option-image'><img src={car.link} alt=''></img></div>
                        <div className='cam-car-option-name'>{car.name}</div>
                        <div className='cam-car-option-price'>{car.price} starting</div>
                        <div className='cam-car-option-mpg'>{car.mpg} est MPG</div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default CrossoverAndSuv;