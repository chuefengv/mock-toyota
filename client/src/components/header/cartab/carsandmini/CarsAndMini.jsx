import React, {useEffect, useState} from 'react';
import './CarsAndMini.css';
import Axios from 'axios';

function CarsAndMini(){

    const [carAndMini, setCarAndMini] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:5000/api/cars')
        .then(response=>{
            setCarAndMini(response.data)
        })
        
    })

    return(
        <div className='cam-wrapper'>
            <div className='cam-car-display'>
                {carAndMini.map((car)=>{
                    return <div key={car.id}> {car.name} </div>
                })}
            </div>
        </div>
    )
}

export default CarsAndMini;