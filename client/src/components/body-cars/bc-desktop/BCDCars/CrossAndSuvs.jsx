import React, {useEffect, useState} from 'react';
import './BCDCars.css';
import Axios from 'axios';

function CrossAndSuvs(){

    const [carsAndMinivan, setCarsAndMinivan] = useState([]);

    useEffect(()=>{
        Axios.get('/api/suvs')
        .then(response=>{
            setCarsAndMinivan(response.data)
        },[carsAndMinivan])
    })

    return(
        <div className='bcd-car-display-wrapper'>
            {carsAndMinivan.map((car)=>{
                return (
                <div key={car.id} className='bcd-car-option-wrapper'>
                    <div className='bcd-car-option-image'><img src={car.link} alt=''></img></div>
                    <div className='bcd-car-option-name'>{car.name}</div>
                    <div className='bcd-car-option-price'>{car.price} starting</div>
                    <div className='bcd-car-option-mpg'>{car.mpg} est MPG</div>
                </div>)
            })}
        </div>
    )
}

export default CrossAndSuvs;