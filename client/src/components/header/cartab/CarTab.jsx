import React, {useState} from 'react';
import './CarTab.css';

function CarTab(){

    const [index, setIndex] = useState(0);

    return(
        <div className='cartab-wrapper'>
           <div className='cartab-car-types'>
                <div className='cartab-car-types-option one'>
                    Cars & Minivan
                </div>
                <div className='cartab-car-types-option two'>
                    Trucks
                </div>
                <div className='cartab-car-types-option three'>
                    Crossovers & SUVs
                </div>
                <div className='cartab-car-types-option four'>
                    Hybrids & Fuel Cell
                </div>
                <div className='cartab-car-types-option five'>
                    Upcoming Vehicles
                </div>
           </div>
        </div>
    )
}

export default CarTab;